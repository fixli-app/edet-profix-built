import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";

import efter1Asset from "@/assets/badrum-efter-1.jpg.asset.json";
import efter2Asset from "@/assets/badrum-efter-2.jpg.asset.json";
import efter3Asset from "@/assets/badrum-efter-3.jpg.asset.json";
import fore1Asset from "@/assets/badrum-fore-1.jpg.asset.json";
import fore2Asset from "@/assets/badrum-fore-2.jpg.asset.json";
import logoAsset from "@/assets/edet-profix-logo-transparent.png.asset.json";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

export const Route = createFileRoute("/galleri")({
  head: () => ({
    meta: [
      { title: "Galleri – Före & efter | Edet Profix Bygg" },
      { name: "description", content: "Se före- och efterbilder från projekt av Edet Profix Bygg – bland annat badrumsrenovering i Åstorp och hela Skåne." },
      { property: "og:title", content: "Galleri – Före & efter | Edet Profix Bygg" },
      { property: "og:description", content: "Före- och efterbilder från våra renoveringsprojekt i Åstorp och hela Skåne." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleriPage,
});

const beforeImages = [fore1Asset, fore2Asset];
const afterImages = [efter1Asset, efter2Asset, efter3Asset];

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
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <article className="overflow-hidden rounded-lg border border-border bg-card shadow-strong">
              <h2 className="border-b border-border px-6 py-5 text-xl font-extrabold">{t.bathroomProject}</h2>
              <div className="flex flex-col gap-px bg-border">
                <div>
                  <p className="bg-primary-soft px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary">{t.beforeLabel}</p>
                  <div className="grid grid-cols-2 gap-px bg-border">
                    {beforeImages.map((image, index) => (
                      <img key={index} src={image.url} alt={t.galleryAltBefore} loading="lazy" className="aspect-[3/4] w-full bg-card object-cover" />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="bg-primary-soft px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary">{t.afterLabel}</p>
                  <div className="grid grid-cols-2 gap-px bg-border">
                    {afterImages.map((image, index) => (
                      <img
                        key={index}
                        src={image.url}
                        alt={t.galleryAltAfter}
                        loading={index === 0 ? undefined : "lazy"}
                        className={index === 2 ? "col-span-2 aspect-[2/1] w-full bg-card object-cover" : "aspect-[3/4] w-full bg-card object-cover"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </article>
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
