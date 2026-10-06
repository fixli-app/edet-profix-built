import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Images } from "lucide-react";

import badrumEfter1Asset from "@/assets/badrum-efter-1.jpg.asset.json";
import badrumEfter2Asset from "@/assets/badrum-efter-2.jpg.asset.json";
import badrumFore1Asset from "@/assets/badrum-fore-1.jpg.asset.json";
import badrumFore2Asset from "@/assets/badrum-fore-2.jpg.asset.json";
import fasadEfter1Asset from "@/assets/fasad-efter-1.jpg.asset.json";
import fasadEfter2Asset from "@/assets/fasad-efter-2.jpg.asset.json";
import fasadEfter3Asset from "@/assets/fasad-efter-3.jpg.asset.json";
import fasadFore1Asset from "@/assets/fasad-fore-1.jpg.asset.json";
import fasadFore2Asset from "@/assets/fasad-fore-2.jpg.asset.json";
import hus1Asset from "@/assets/hus-1.jpg.asset.json";
import hus2Asset from "@/assets/hus-2.jpg.asset.json";
import hus3Asset from "@/assets/hus-3.jpg.asset.json";
import hus4Asset from "@/assets/hus-4.jpg.asset.json";
import hus5Asset from "@/assets/hus-5.jpg.asset.json";
import hus6Asset from "@/assets/hus-6.jpg.asset.json";
import hus7Asset from "@/assets/hus-7.jpg.asset.json";
import hus8Asset from "@/assets/hus-8.jpg.asset.json";
import hus9Asset from "@/assets/hus-9.jpg.asset.json";
import hus10Asset from "@/assets/hus-10.jpg.asset.json";
import hus11Asset from "@/assets/hus-11.jpg.asset.json";
import renovering1Asset from "@/assets/renovering-1.jpg.asset.json";
import renovering2Asset from "@/assets/renovering-2.jpg.asset.json";
import renovering3Asset from "@/assets/renovering-3.jpg.asset.json";
import renovering4Asset from "@/assets/renovering-4.jpg.asset.json";
import logoAsset from "@/assets/edet-profix-logo-transparent.png.asset.json";
import takEfter1Asset from "@/assets/tak-efter-1.jpg.asset.json";
import takEfter2Asset from "@/assets/tak-efter-2.jpg.asset.json";
import takFore1Asset from "@/assets/tak-fore-1.jpg.asset.json";
import takFore2Asset from "@/assets/tak-fore-2.jpg.asset.json";
import toalettEfter1Asset from "@/assets/toalett-efter-1.jpg.asset.json";
import toalettFore1Asset from "@/assets/toalett-fore-1.jpg.asset.json";
import terass1Asset from "@/assets/terass-1.jpg.asset.json";
import terass2Asset from "@/assets/terass-2.jpg.asset.json";
import terass3Asset from "@/assets/terass-3.jpg.asset.json";
import terass4Asset from "@/assets/terass-4.jpg.asset.json";
import uterum1Asset from "@/assets/uterum-1.jpg.asset.json";
import uterum2Asset from "@/assets/uterum-2.jpg.asset.json";
import uterum3Asset from "@/assets/uterum-3.jpg.asset.json";
import uterum4Asset from "@/assets/uterum-4.jpg.asset.json";
import uterum5Asset from "@/assets/uterum-5.jpg.asset.json";
import uterum6Asset from "@/assets/uterum-6.jpg.asset.json";
import uterum7Asset from "@/assets/uterum-7.jpg.asset.json";
import uterum8Asset from "@/assets/uterum-8.jpg.asset.json";
import uterum9Asset from "@/assets/uterum-9.jpg.asset.json";
import uterum10Asset from "@/assets/uterum-10.jpg.asset.json";
import uterum11Asset from "@/assets/uterum-11.jpg.asset.json";
import uterum12Asset from "@/assets/uterum-12.jpg.asset.json";
import uterum13Asset from "@/assets/uterum-13.jpg.asset.json";
import { ImageLightbox } from "@/components/image-lightbox";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import type { SiteTranslation } from "@/lib/site-translations";

export const Route = createFileRoute("/galleri")({
  head: () => ({
    meta: [
      { title: "Galleri – Före & efter | Edet Profix Bygg" },
      {
        name: "description",
        content:
          "Se bilder från projekt av Edet Profix Bygg – badrumsrenovering, toalettrenovation, fasadmålning, takläggning, betongterrasser, uterum och pågående renoveringar av hela hus i Åstorp och hela Skåne.",
      },
      { property: "og:title", content: "Galleri – Före & efter | Edet Profix Bygg" },
      { property: "og:description", content: "Bilder från våra renoveringsprojekt i Åstorp och hela Skåne." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleriPage,
});

type Project = {
  title: (t: SiteTranslation) => string;
  altBefore: (t: SiteTranslation) => string;
  altAfter: (t: SiteTranslation) => string;
  cover: { url: string };
  beforeImages?: { url: string }[];
  afterImages?: { url: string }[];
  inProgressImages?: { url: string }[];
  wideClass: string;
  beforeImgClass?: string;
  afterImgClass?: string;
};

const projects: Project[] = [
  {
    title: (t) => t.uterumProject,
    altBefore: (t) => t.uterumAlt,
    altAfter: (t) => t.uterumAlt,
    cover: uterum10Asset,
    inProgressImages: [
      uterum11Asset,
      uterum1Asset,
      uterum2Asset,
      uterum3Asset,
      uterum4Asset,
      uterum5Asset,
      uterum6Asset,
      uterum7Asset,
      uterum8Asset,
      uterum9Asset,
      uterum10Asset,
    ],
    wideClass: "col-span-2 aspect-[16/10]",
  },
  {
    title: (t) => t.sunroomProject2,
    altBefore: (t) => t.sunroomAlt2,
    altAfter: (t) => t.sunroomAlt2,
    cover: uterum12Asset,
    inProgressImages: [uterum12Asset, uterum13Asset],
    wideClass: "col-span-2 aspect-[16/10]",
  },
  {
    title: (t) => t.bathroomProject,
    altBefore: (t) => t.galleryAltBefore,
    altAfter: (t) => t.galleryAltAfter,
    cover: badrumEfter1Asset,
    beforeImages: [badrumFore1Asset, badrumFore2Asset],
    afterImages: [badrumEfter1Asset, badrumEfter2Asset],
    wideClass: "col-span-2 aspect-[3/1]",
  },
  {
    title: (t) => t.facadeProject,
    altBefore: (t) => t.facadeAltBefore,
    altAfter: (t) => t.facadeAltAfter,
    cover: fasadEfter2Asset,
    beforeImages: [fasadFore1Asset, fasadFore2Asset],
    afterImages: [fasadEfter1Asset, fasadEfter2Asset, fasadEfter3Asset],
    wideClass: "col-span-2 aspect-[16/10]",
  },
  {
    title: (t) => t.roofProject,
    altBefore: (t) => t.roofAltBefore,
    altAfter: (t) => t.roofAltAfter,
    cover: takEfter1Asset,
    beforeImages: [takFore1Asset, takFore2Asset],
    afterImages: [takEfter1Asset, takEfter2Asset],
    wideClass: "col-span-2 aspect-[16/10]",
  },
  {
    title: (t) => t.wipProject,
    altBefore: (t) => t.wipAlt,
    altAfter: (t) => t.wipAlt,
    cover: renovering1Asset,
    inProgressImages: [renovering1Asset, renovering2Asset, renovering3Asset, renovering4Asset],
    wideClass: "col-span-2 aspect-[16/10]",
  },
  {
    title: (t) => t.houseProject,
    altBefore: (t) => t.houseAlt,
    altAfter: (t) => t.houseAlt,
    cover: hus1Asset,
    inProgressImages: [
      hus1Asset,
      hus2Asset,
      hus3Asset,
      hus4Asset,
      hus5Asset,
      hus6Asset,
      hus7Asset,
      hus8Asset,
      hus9Asset,
      hus10Asset,
      hus11Asset,
    ],
    wideClass: "col-span-2 aspect-[16/10]",
  },
  {
    title: (t) => t.terraceProject,
    altBefore: (t) => t.terraceAlt,
    altAfter: (t) => t.terraceAlt,
    cover: terass1Asset,
    inProgressImages: [terass3Asset, terass2Asset, terass1Asset, terass4Asset],
    wideClass: "col-span-2 aspect-[16/10]",
  },
  {
    title: (t) => t.toiletProject,
    altBefore: (t) => t.toiletAltBefore,
    altAfter: (t) => t.toiletAltAfter,
    cover: toalettEfter1Asset,
    beforeImages: [toalettFore1Asset],
    afterImages: [toalettEfter1Asset],
    wideClass: "col-span-2 aspect-[16/10]",
    afterImgClass: "aspect-[3/4] w-full bg-card object-cover",
  },
];

type ZoomHandler = (images: { src: string; alt: string }[], index: number) => void;

function ProjectCard({ project, t, onZoom }: { project: Project; t: SiteTranslation; onZoom: ZoomHandler }) {
  const images = project.inProgressImages
    ? project.inProgressImages.map((image) => ({ src: image.url, alt: project.altBefore(t) }))
    : [
        ...(project.beforeImages?.map((image) => ({ src: image.url, alt: `${t.beforeLabel} · ${project.altBefore(t)}` })) ?? []),
        ...(project.afterImages?.map((image) => ({ src: image.url, alt: `${t.afterLabel} · ${project.altAfter(t)}` })) ?? []),
      ];
  const badge = project.inProgressImages ? t.wipLabel : `${t.beforeLabel} · ${t.afterLabel}`;

  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card shadow-strong">
      <Button
        type="button"
        variant="ghost"
        onClick={() => onZoom(images, 0)}
        aria-label={`${project.title(t)} · ${t.expandLabel}`}
        aria-haspopup="dialog"
        className="group block h-auto w-full rounded-none p-0 text-start hover:bg-card"
      >
        <div className="relative overflow-hidden">
          <img
            src={project.cover.url}
            alt={project.title(t)}
            loading="lazy"
            className="aspect-[16/9] w-full bg-card object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.03]"
          />
          <span className="absolute start-3 top-3 rounded-full bg-background/85 px-3 py-1 text-xs font-bold uppercase tracking-wide text-foreground shadow-soft backdrop-blur-sm">
            {badge}
          </span>
          <span className="absolute end-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-3 py-1 text-xs font-bold text-foreground shadow-soft backdrop-blur-sm">
            <Images size={14} aria-hidden="true" /> {images.length}
          </span>
        </div>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 sm:px-5">
          <h2 className="min-w-0 whitespace-normal text-base font-extrabold sm:text-lg">{project.title(t)}</h2>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-primary sm:text-sm">
            {t.expandLabel}
            <ArrowRight size={18} className="rtl:rotate-180" aria-hidden="true" />
          </span>
        </div>
      </Button>
    </article>
  );
}

function GalleriPage() {
  const { language, setLanguage, t } = useLanguage();
  const [lightbox, setLightbox] = useState<{ images: { src: string; alt: string }[]; index: number } | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader t={t} language={language} onLanguageChange={setLanguage} isHome={false} />

      <main className="pt-20">
        <section className="border-b border-border bg-secondary py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="eyebrow">{t.galleryEyebrow}</p>
            <h1 className="section-title">{t.galleryTitle}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{t.galleryIntro}</p>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:px-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title(t)}
                project={project}
                t={t}
                onZoom={(images, index) => setLightbox({ images, index })}
              />
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-secondary py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">{t.galleryCtaTitle}</h2>
            <p className="mt-4 leading-8 text-muted-foreground">{t.galleryCtaText}</p>
            <Button asChild className="mt-8 min-h-12 px-6">
              <Link to="/" hash="kontakt">
                {t.requestQuote} <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-footer py-10 text-footer-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link to="/" className="min-w-0 shrink-0" aria-label={t.homeLabel}>
            <img src={logoAsset.url} alt="Edet Profix Bygg" className="h-auto w-52 object-contain" />
          </Link>
          <div className="flex flex-wrap items-center gap-5">
            <p className="text-sm text-footer-muted">
              © {new Date().getFullYear()} Edet Profix Bygg · {t.footerMotto}
            </p>
            <a
              href="https://offerta.se/foretag/edet-profix-bygg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.offertaLabel}
              title={t.offertaLabel}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-header-border text-footer-foreground transition-colors hover:text-primary"
            >
              <img src="/images/offerta-icon.png" alt="" className="h-5 w-5 rounded-sm" />
            </a>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-7xl px-5 text-[9px] text-footer-muted opacity-40 lg:px-8">{t.siteCredit}</p>
      </footer>

      <ImageLightbox
        images={lightbox?.images ?? []}
        index={lightbox?.index ?? null}
        onNavigate={(index) => setLightbox((current) => (current ? { ...current, index } : current))}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}
