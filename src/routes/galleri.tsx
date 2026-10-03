import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";

import badrumEfter1Asset from "@/assets/badrum-efter-1.jpg.asset.json";
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
          "Se bilder från projekt av Edet Profix Bygg – badrumsrenovering, toalettrenovation, fasadmålning, takläggning, betongterrasser och pågående renoveringar av hela hus i Åstorp och hela Skåne.",
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
    title: (t) => t.bathroomProject,
    altBefore: (t) => t.galleryAltBefore,
    altAfter: (t) => t.galleryAltAfter,
    cover: badrumEfter1Asset,
    beforeImages: [badrumFore1Asset, badrumFore2Asset],
    afterImages: [badrumEfter1Asset],
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

function LabelBar({ label }: { label: string }) {
  return (
    <p className="bg-primary-soft px-4 py-3 text-sm font-bold uppercase tracking-wide text-primary sm:px-6">{label}</p>
  );
}

function ExpandedImages({ project, t }: { project: Project; t: SiteTranslation }) {
  if (project.inProgressImages) {
    return (
      <div className="mx-auto w-full max-w-5xl">
        <LabelBar label={t.wipLabel} />
        <div className="grid grid-cols-2 gap-px bg-border">
          {project.inProgressImages.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={project.altBefore(t)}
              loading="lazy"
              className="aspect-[4/3] w-full bg-card object-cover"
            />
          ))}
        </div>
      </div>
    );
  }

  if (project.beforeImages?.length === 1 && project.afterImages?.length === 1) {
    return (
      <div className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-px bg-border">
        <div>
          <LabelBar label={t.beforeLabel} />
          {project.beforeImages?.[0] && (
            <img
              src={project.beforeImages[0].url}
              alt={project.altBefore(t)}
              className="aspect-square w-full bg-card object-cover"
            />
          )}
        </div>
        <div>
          <LabelBar label={t.afterLabel} />
          {project.afterImages?.[0] && (
            <img
              src={project.afterImages[0].url}
              alt={project.altAfter(t)}
              className="aspect-square w-full bg-card object-cover"
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-px bg-border">
      <div>
        <LabelBar label={t.beforeLabel} />
        <div className="grid grid-cols-2 gap-px bg-border">
          {project.beforeImages?.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={project.altBefore(t)}
              loading="lazy"
              className={project.beforeImgClass ?? "aspect-[4/3] w-full bg-card object-cover"}
            />
          ))}
        </div>
      </div>
      <div>
        <LabelBar label={t.afterLabel} />
        <div className="grid grid-cols-2 gap-px bg-border">
          {project.afterImages?.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={project.altAfter(t)}
              loading="lazy"
              className={
                index === 2
                  ? `${project.wideClass} w-full bg-card object-cover`
                  : (project.afterImgClass ?? "aspect-[4/3] w-full bg-card object-cover")
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, t }: { project: Project; t: SiteTranslation }) {
  const [open, setOpen] = useState(false);
  const imageCount =
    project.inProgressImages?.length ?? (project.beforeImages?.length ?? 0) + (project.afterImages?.length ?? 0);
  const badge = project.inProgressImages ? t.wipLabel : `${t.beforeLabel} · ${t.afterLabel}`;

  return (
    <article
      className={`overflow-hidden rounded-lg border border-border bg-card shadow-strong transition-all duration-300 md:col-span-1 ${open ? "md:col-span-2" : ""}`}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="block w-full cursor-pointer text-start"
      >
        <div className="relative overflow-hidden">
          <img
            src={project.cover.url}
            alt={project.title(t)}
            loading="lazy"
            className={`w-full bg-card object-cover transition-all duration-500 ${open ? "aspect-[21/9]" : "aspect-[16/10] hover:scale-[1.03]"}`}
          />
          <span className="absolute start-3 top-3 rounded-full bg-background/85 px-3 py-1 text-xs font-bold uppercase tracking-wide text-foreground shadow-soft backdrop-blur-sm">
            {badge}
          </span>
          <span className="absolute end-3 top-3 rounded-full bg-background/85 px-3 py-1 text-xs font-bold text-foreground shadow-soft backdrop-blur-sm">
            {imageCount}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <h2 className="text-lg font-extrabold">{project.title(t)}</h2>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-primary">
            {open ? t.collapseLabel : t.expandLabel}
            <ChevronDown size={18} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          </span>
        </div>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border py-px">
            <ExpandedImages project={project} t={t} />
          </div>
        </div>
      </div>
    </article>
  );
}

function GalleriPage() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader t={t} language={language} onLanguageChange={setLanguage} isHome={false} />

      <main className="pt-20">
        <section className="border-b border-border bg-secondary py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="eyebrow">{t.galleryEyebrow}</p>
            <h1 className="section-title">{t.galleryTitle}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{t.galleryIntro}</p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:px-8">
            {projects.map((project) => (
              <ProjectCard key={project.title(t)} project={project} t={t} />
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
    </div>
  );
}
