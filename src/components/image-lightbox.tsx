import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

type LightboxImage = { src: string; alt: string };

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const SWIPE_THRESHOLD = 60;

export function ImageLightbox({
  images,
  index,
  onNavigate,
  onClose,
}: {
  images: LightboxImage[];
  index: number | null;
  onNavigate: (index: number) => void;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef(1);
  const offsetRef = useRef({ x: 0, y: 0 });
  const dragRef = useRef<{ startX: number; startY: number; baseX: number; baseY: number } | null>(null);
  const pinchRef = useRef<{ distance: number; zoom: number } | null>(null);
  const lastTapRef = useRef(0);

  zoomRef.current = zoom;
  offsetRef.current = offset;

  const image = index !== null ? (images[index] ?? null) : null;
  const hasMany = images.length > 1;

  const applyZoom = useCallback((next: number, px?: number, py?: number) => {
    const clamped = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, next));
    setZoom((current) => {
      if (px === undefined || py === undefined || !containerRef.current) {
        if (clamped === MIN_ZOOM) setOffset({ x: 0, y: 0 });
        return clamped;
      }
      const rect = containerRef.current.getBoundingClientRect();
      const cx = px - rect.left - rect.width / 2;
      const cy = py - rect.top - rect.height / 2;
      const k = clamped / current;
      setOffset((o) => {
        const nextOffset = { x: cx - (cx - o.x) * k, y: cy - (cy - o.y) * k };
        return clamped === MIN_ZOOM ? { x: 0, y: 0 } : nextOffset;
      });
      return clamped;
    });
  }, []);

  const goTo = useCallback(
    (next: number) => {
      if (!hasMany) return;
      const wrapped = (next + images.length) % images.length;
      setZoom(1);
      setOffset({ x: 0, y: 0 });
      onNavigate(wrapped);
    },
    [hasMany, images.length, onNavigate],
  );

  const handleClose = useCallback(() => {
    setVisible(false);
    window.setTimeout(onClose, 250);
  }, [onClose]);

  // Open/close animation + body scroll lock + keyboard
  useEffect(() => {
    if (index === null) return;
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    const frame = requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
      if (event.key === "ArrowRight") goTo((index ?? 0) + 1);
      if (event.key === "ArrowLeft") goTo((index ?? 0) - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index === null]);

  // Wheel zoom (non-passive so the page never scrolls behind)
  useEffect(() => {
    const el = containerRef.current;
    if (!el || index === null) return;
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const dy = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? 100 : 1);
      applyZoom(zoomRef.current * Math.exp(-dy * 0.0018), event.clientX, event.clientY);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [index === null, applyZoom]);

  if (!image || index === null) return null;

  const onPointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === "touch") return; // touch handled via onTouchStart
    dragRef.current = { startX: event.clientX, startY: event.clientY, baseX: offset.x, baseY: offset.y };
    (event.target as HTMLElement).setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent) => {
    const drag = dragRef.current;
    if (!drag || zoom <= 1) return;
    setOffset({ x: drag.baseX + event.clientX - drag.startX, y: drag.baseY + event.clientY - drag.startY });
  };

  const onPointerUp = (event: React.PointerEvent) => {
    const drag = dragRef.current;
    dragRef.current = null;
    if (!drag) return;
    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    const moved = Math.hypot(dx, dy);
    // Horizontal swipe while not zoomed → previous / next image
    if (zoom <= 1 && hasMany && Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy) * 1.5) {
      goTo(index + (dx < 0 ? 1 : -1));
      return;
    }
    if (moved < 6) {
      // Click / double-click toggles zoom
      const now = Date.now();
      if (now - lastTapRef.current < 300) {
        applyZoom(zoom > 1 ? 1 : 2.5, event.clientX, event.clientY);
        lastTapRef.current = 0;
      } else {
        lastTapRef.current = now;
      }
    }
  };

  const onTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length === 2) {
      const [a, b] = [event.touches[0]!, event.touches[1]!];
      pinchRef.current = { distance: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY), zoom };
      dragRef.current = null;
    } else if (event.touches.length === 1) {
      const touch = event.touches[0]!;
      dragRef.current = { startX: touch.clientX, startY: touch.clientY, baseX: offset.x, baseY: offset.y };
    }
  };

  const onTouchMove = (event: React.TouchEvent) => {
    if (event.touches.length === 2 && pinchRef.current) {
      const [a, b] = [event.touches[0]!, event.touches[1]!];
      const distance = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      const midX = (a.clientX + b.clientX) / 2;
      const midY = (a.clientY + b.clientY) / 2;
      applyZoom(pinchRef.current.zoom * (distance / pinchRef.current.distance), midX, midY);
    } else if (event.touches.length === 1 && dragRef.current && zoom > 1) {
      const touch = event.touches[0]!;
      const drag = dragRef.current;
      setOffset({ x: drag.baseX + touch.clientX - drag.startX, y: drag.baseY + touch.clientY - drag.startY });
    }
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (event.touches.length === 0) {
      const drag = dragRef.current;
      pinchRef.current = null;
      dragRef.current = null;
      if (drag) {
        const dx = event.changedTouches[0]!.clientX - drag.startX;
        const dy = event.changedTouches[0]!.clientY - drag.startY;
        const moved = Math.hypot(dx, dy);
        // Horizontal swipe while not zoomed → previous / next image
        if (zoom <= 1 && hasMany && Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy) * 1.5) {
          goTo(index + (dx < 0 ? 1 : -1));
          return;
        }
        if (moved < 8) {
          const now = Date.now();
          if (now - lastTapRef.current < 300) {
            applyZoom(zoom > 1 ? 1 : 2.5, event.changedTouches[0]!.clientX, event.changedTouches[0]!.clientY);
            lastTapRef.current = 0;
          } else {
            lastTapRef.current = now;
          }
        }
      }
    }
  };

  const navButtonClass =
    "absolute top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-250 ${visible ? "opacity-100" : "opacity-0"}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) handleClose();
      }}
    >
      <button
        type="button"
        onClick={handleClose}
        aria-label="Stäng"
        className="absolute end-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
      >
        <X size={22} />
      </button>
      {hasMany && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Föregående bild"
            className={`${navButtonClass} start-3`}
          >
            <ChevronLeft size={24} className="rtl:rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Nästa bild"
            className={`${navButtonClass} end-3`}
          >
            <ChevronRight size={24} className="rtl:rotate-180" />
          </button>
          <span className="absolute start-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white">
            {index + 1} / {images.length}
          </span>
        </>
      )}
      <div className="absolute bottom-4 start-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        <button
          type="button"
          onClick={() => applyZoom(zoom / 1.4)}
          aria-label="Zooma ut"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
        >
          <ZoomOut size={20} />
        </button>
        <span className="min-w-14 rounded-full bg-white/10 px-3 py-2 text-center text-xs font-bold text-white">
          {Math.round(zoom * 100)}%
        </span>
        <button
          type="button"
          onClick={() => applyZoom(zoom * 1.4)}
          aria-label="Zooma in"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
        >
          <ZoomIn size={20} />
        </button>
      </div>
      <div
        ref={containerRef}
        className={`flex h-full w-full touch-none items-center justify-center overflow-hidden transition-transform duration-250 ${visible ? "scale-100" : "scale-95"}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          draggable={false}
          className={`max-h-full max-w-full select-none object-contain ${zoom > 1 ? "cursor-grab" : "cursor-zoom-in"}`}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            transition: dragRef.current || pinchRef.current ? "none" : "transform 0.2s ease-out",
          }}
        />
      </div>
    </div>
  );
}
