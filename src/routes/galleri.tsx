import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";

import badrumEfter1Asset from "@/assets/badrum-efter-1.jpg.asset.json";
import badrumEfter2Asset from "@/assets/badrum-efter-2.jpg.asset.json";
import badrumEfter3Asset from "@/assets/badrum-efter-3.jpg.asset.json";
import badrumFore1Asset from "@/assets/badrum-fore-1.jpg.asset.json";
import badrumFore2Asset from "@/assets/badrum-fore-2.jpg.asset.json";
import fasadEfter1Asset from "@/assets/fasad-efter-1.jpg.asset.json";
import fasadEfter2Asset from "@/assets/fasad-efter-2.jpg.asset.json";
import fasadEfter3Asset from "@/assets/fasad-efter-3.jpg.asset.json";
import fasadFore1Asset from "@/assets/fasad-fore-1.jpg.asset.json";
import fasadFore2Asset from "@/assets/fasad-fore-2.jpg.asset.json";
import renovering1Asset from "@/assets/renovering-1.jpg.asset.json";
import renovering2Asset from "@/assets/renovering-2.jpg.asset.json";
import renovering3Asset from "@/assets/renovering-3.jpg.asset.json";
import renovering4Asset from "@/assets/renovering-4.jpg.asset.json";
import logoAsset from "@/assets/edet-profix-logo-transparent.png.asset.json";
import takEfter1Asset from "@/assets/tak-efter-1.jpg.asset.json";
import takEfter2Asset from "@/assets/tak-efter-2.jpg.asset.json";
import takFore1Asset from "@/assets/tak-fore-1.jpg.asset.json";
import takFore2Asset from "@/assets/tak-fore-2.jpg.asset.json";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import type { SiteTranslation } from "@/lib/site-translations";

export const Route = createFileRoute("/galleri")({
  head: () => ({
    meta: [
      { title: "Galleri – Före & efter | Edet Profix Bygg" },
      { name: "description", content: "Se före- och efterbilder från projekt av Edet Profix Bygg – badrumsrenovering, fasadmålning och takläggning i Åstorp och hela Skåne." },
      { property: "og:title", content: "Galleri – Före & efter | Edet Profix Bygg" },
      { property: "og:description", content: "Före- och efterbilder från våra renoveringsprojekt i Åstorp och hela Skåne." },
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
  beforeImages?: { url: string }[];
  afterImages?: { url: string }[];
  inProgressImages?: { url: string }[];
  wideClass: string;
};

const projects: Project[] = [
  {
    title: (t) => t.bathroomProject,
    altBefore: (t) => t.galleryAltBefore,
    altAfter: (t) => t.galleryAltAfter,
    beforeImages: [badrumFore1Asset, badrumFore2Asset],
    afterImages: [badrumEfter1Asset, badrumEfter2Asset, badrumEfter3Asset],
    wideClass: "col-span-2 aspect-[3/1]",
  },
  {
    title: (t) => t.facadeProject,
    altBefore: (t) => t.facadeAltBefore,
    altAfter: (t) => t.facadeAltAfter,
    beforeImages: [fasadFore1Asset, fasadFore2Asset],
    afterImages: [fasadEfter1Asset, fasadEfter2Asset, fasadEfter3Asset],
    wideClass: "col-span-2 aspect-[16/10]",
  },
  {
    title: (t) => t.roofProject,
    altBefore: (t) => t.roofAltBefore,
    altAfter: (t) => t.roofAltAfter,
    beforeImages: [takFore1Asset, takFore2Asset],
    afterImages: [takEfter1Asset, takEfter2Asset],
    wideClass: "col-span-2 aspect-[16/10]",
  },
  {
    title: (t) => t.wipProject,
    altBefore: (t) => t.wipAlt,
    altAfter: (t) => t.wipAlt,
    inProgressImages: [renovering1Asset, renovering2Asset, renovering3Asset, renovering4Asset],
    wideClass: "col-span-2 aspect-[16/10]",
  },
];

function ProjectCard({ project, t }: { project: Project; t: SiteTranslation }) {
  return (
    <article className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-border bg-card shadow-strong">
      <h2 className="border-b border-border px-6 py-5 text-xl font-extrabold">{project.title(t)}</h2>
      <div className="flex flex-col gap-px bg-border">
        <div>
          <p className="bg-primary-soft px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary">{t.beforeLabel}</p>
          <div className="grid grid-cols-2 gap-px bg-border">
            {project.beforeImages.map((image, index) => (
              <img key={index} src={image.url} alt={project.altBefore(t)} loading="lazy" className="aspect-[4/3] w-full bg-card object-cover" />
            ))}
          </div>
        </div>
        <div>
          <p className="bg-primary-soft px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary">{t.afterLabel}</p>
          <div className="grid grid-cols-2 gap-px bg-border">
            {project.afterImages.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={project.altAfter(t)}
                loading={index === 0 ? undefined : "lazy"}
                className={index === 2 ? `${project.wideClass} w-full bg-card object-cover` : "aspect-[4/3] w-full bg-card object-cover"}
              />
            ))}
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
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 lg:px-8">
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
              <Link to="/" hash="kontakt">{t.requestQuote} <ArrowRight size={18} /></Link>
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
            <p className="text-sm text-footer-muted">© {new Date().getFullYear()} Edet Profix Bygg · {t.footerMotto}</p>
            <a
              href="https://offerta.se/foretag/edet-profix-bygg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.offertaLabel}
              title={t.offertaLabel}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-header-border text-footer-foreground transition-colors hover:text-primary"
            ><ExternalLink size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
