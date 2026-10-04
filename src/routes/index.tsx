import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, ArrowUp, Check, ChevronDown, Hammer, Mail, MapPin, ShieldCheck, Sparkles, Target, Trees, Wrench } from "lucide-react";
import { z } from "zod";

import logoAsset from "@/assets/edet-profix-logo-transparent.png.asset.json";
import { SiteHeader } from "@/components/site-header";
import { SwedenMap } from "@/components/sweden-map";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Edet Profix Bygg | Bygg och renovering i Åstorp och Skåne" },
      { name: "description", content: "Edet Profix Bygg utgår från Åstorp och arbetar i hela Skåne, inklusive Helsingborg, Ängelholm, Höganäs, Landskrona, Lund och Malmö. Bygg, renovering, markarbete och underhåll." },
      { property: "og:title", content: "Edet Profix Bygg | Bygg och renovering i Åstorp och Skåne" },
      { property: "og:description", content: "Bygg, renovering, markarbete och underhåll från Åstorp till hela Skåne. Flexibla beroende på uppdrag." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://edet-profix-built.lovable.app/" },
      { property: "og:locale", content: "sv_SE" },
      { name: "geo.region", content: "SE-M" },
      { name: "geo.placename", content: "Åstorp, Skåne" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://edet-profix-built.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://edet-profix-built.lovable.app/#foretag",
          name: "Edet Profix Bygg",
          description: "Byggföretag i Åstorp som utför bygg, renovering, markarbete och underhåll i hela Skåne.",
          url: "https://edet-profix-built.lovable.app/",
          email: "edet.profix.info@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Åstorp",
            addressRegion: "Skåne",
            addressCountry: "SE",
          },
          areaServed: [
            { "@type": "AdministrativeArea", name: "Skåne" },
            { "@type": "City", name: "Åstorp" },
            { "@type": "City", name: "Helsingborg" },
            { "@type": "City", name: "Ängelholm" },
            { "@type": "City", name: "Höganäs" },
            { "@type": "City", name: "Landskrona" },
            { "@type": "City", name: "Lund" },
            { "@type": "City", name: "Malmö" },
          ],
          knowsAbout: ["Bygg", "Renovering", "Badrumsrenovering", "Köksrenovering", "Takläggning", "Fasadmålning", "Betongarbete", "Markarbete", "Underhåll"],
          sameAs: ["https://offerta.se/foretag/edet-profix-bygg"],
        }),
      },
    ],
  }),
  component: Index,
});

const serviceIcons = [Hammer, Wrench, Trees, Sparkles];
const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(1).max(1500),
});

// Enbart gubben (hantverkaren) på startsidan – ingen rotation, inga husbilder.
const heroImageSrc = "/images/hero-1.jpg";

function Index() {
  const { language, setLanguage, t } = useLanguage();
  const [showTop, setShowTop] = useState(false);


  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = contactSchema.safeParse({ name: form.get("name"), email: form.get("email"), message: form.get("message") });
    if (!result.success) return;
    const { name, email, message } = result.data;
    const subject = encodeURIComponent(t.mailSubject(name));
    const body = encodeURIComponent(t.mailBody(name, email, message));
    window.location.href = `mailto:edet.profix.info@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader t={t} language={language} onLanguageChange={setLanguage} isHome />

      <main>
        <section id="start" className="hero-grid relative flex min-h-[800px] items-center overflow-hidden bg-hero pt-20 text-hero-foreground sm:min-h-[92svh]">
          <div className="hero-watermark" aria-hidden="true">EP</div>
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-44 pt-16 sm:py-28 lg:px-8">
            <div className="max-w-4xl animate-fade-in">
              <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase text-primary"><span className="h-px w-10 shrink-0 bg-primary" />{t.areaKicker}</p>
              <h1 className="max-w-4xl font-display text-5xl font-black leading-[1.06] sm:text-6xl lg:text-7xl">{t.heroTitle} <span className="text-primary">{t.heroAccent}</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-hero-muted sm:text-xl">{t.heroText}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild className="min-h-12 px-6"><a href="#kontakt">{t.requestQuote} <ArrowRight size={18} /></a></Button>
                <Button asChild variant="outline" className="min-h-12 border-hero-border px-6 text-hero-foreground hover:bg-hero-soft hover:text-hero-foreground"><a href="#tjanster">{t.seeServices} <ChevronDown size={18} /></a></Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 border-t border-hero-border bg-hero-soft/80">
            <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-hero-border px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
              {t.values.map(({ title, text }) => <div key={title} className="py-3 sm:px-5"><strong className="text-primary">{title}.</strong> <span className="text-sm text-hero-muted">{text}</span></div>)}
            </div>
          </div>
        </section>

        <section id="tjanster" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div><p className="eyebrow">{t.servicesEyebrow}</p><h2 className="section-title">{t.servicesTitle}</h2></div>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">{t.servicesIntro}</p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {t.services.map(({ title, text, examples }, index) => {
                const Icon = serviceIcons[index];
                return <article key={index} className="flex min-h-64 flex-col bg-card p-7 transition-colors hover:bg-secondary"><span className="mb-12 flex h-12 w-12 items-center justify-center rounded-md bg-primary-soft text-primary">{Icon && <Icon size={24} />}</span><h3 className="mt-2 text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p><ul className="mt-4 flex flex-wrap items-center gap-2"><li className="text-xs font-semibold text-muted-foreground">{t.examplesLabel}</li>{examples.map((example) => <li key={example} className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">{example}</li>)}</ul></article>;
              })}
            </div>
          </div>
        </section>

        <section id="om-oss" className="scroll-mt-20 bg-section-dark py-20 text-section-dark-foreground sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <div><p className="eyebrow">{t.aboutEyebrow}</p><h2 className="section-title max-w-xl">{t.aboutTitle}</h2><p className="mt-6 max-w-xl text-base leading-8 text-section-dark-muted">{t.aboutTextOne}</p><p className="mt-5 max-w-xl text-base leading-8 text-section-dark-muted">{t.aboutTextTwo}</p></div>
            <div className="grid gap-5 sm:grid-cols-2">
              <article className="border-s-2 border-primary bg-section-dark-soft p-7"><Target className="text-primary" /><h3 className="mt-6 text-xl font-extrabold">{t.missionTitle}</h3><p className="mt-3 text-sm leading-7 text-section-dark-muted">{t.missionText}</p></article>
              <article className="border-s-2 border-primary bg-section-dark-soft p-7"><ShieldCheck className="text-primary" /><h3 className="mt-6 text-xl font-extrabold">{t.valuesTitle}</h3><p className="mt-3 text-sm leading-7 text-section-dark-muted">{t.valuesText}</p></article>
            </div>
          </div>
        </section>

        <section id="varfor" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
            <div><p className="eyebrow">{t.whyEyebrow}</p><h2 className="section-title">{t.whyTitle}</h2><p className="mt-6 text-base leading-8 text-muted-foreground">{t.whyText}</p>
              <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card shadow-strong"><div className="relative aspect-[4/5] w-full"><img src={heroImageSrc} alt={t.photoAlt} className="absolute inset-0 h-full w-full object-cover object-center" /></div><figcaption className="border-t border-border px-5 py-4 text-sm font-bold text-foreground">{t.photoCaption}</figcaption></figure>
            </div>
            <div>
              <div className="grid gap-3 sm:grid-cols-2">{t.reasons.map((reason, index) => <div key={index} className="flex min-h-20 items-center gap-4 border-b border-border p-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check size={17} strokeWidth={3} /></span><span className="font-semibold leading-6">{reason}</span></div>)}</div>
              <div className="mt-10 border-t-2 border-primary pt-6"><h3 className="font-display text-2xl font-extrabold">{t.benefitsTitle}</h3><p className="mt-4 font-semibold leading-7">{t.rotLine}</p><p className="mt-4 font-semibold leading-7">{t.guaranteeLine}</p></div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="eyebrow">{t.processEyebrow}</p><h2 className="section-title">{t.processTitle}</h2><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{t.processSteps.map((step, index) => <div key={index} className="border-t-2 border-primary pt-5"><span className="font-display text-3xl font-black text-primary">0{index + 1}</span><h3 className="mt-5 text-xl font-extrabold">{step.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{step.text}</p></div>)}</div></div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="eyebrow">{t.faqEyebrow}</p><h2 className="section-title">{t.faqTitle}</h2><div className="mt-10 max-w-4xl divide-y divide-border border-y border-border">{t.faq.map((item, index) => <details key={index} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold marker:hidden">{item.question}<ChevronDown className="shrink-0 text-primary transition-transform group-open:rotate-180" size={20} /></summary><p className="pt-4 leading-7 text-muted-foreground">{item.answer}</p></details>)}</div></div>
        </section>

        <section id="kontakt" className="scroll-mt-20 border-t border-border bg-secondary py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div><p className="eyebrow">{t.contactEyebrow}</p><h2 className="section-title">{t.contactTitle}</h2><p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">{t.contactText}</p><p className="mt-5 border-s-2 border-primary ps-4 font-bold leading-7">{t.responseLine}</p>
              <div className="mt-9 space-y-4"><a href="mailto:edet.profix.info@gmail.com" className="flex min-w-0 items-center gap-4 font-bold hover:text-primary"><span className="contact-icon"><Mail size={20} /></span><span className="break-all" dir="ltr">edet.profix.info@gmail.com</span></a><div className="flex items-center gap-4 font-bold"><span className="contact-icon"><MapPin size={20} /></span>{t.location}</div></div>
              <figure className="mt-8 w-24 sm:w-28">
                <SwedenMap className="h-auto w-full" />
                <figcaption className="mt-2 flex items-center justify-center gap-1.5 text-xs font-bold text-muted-foreground"><span className="h-2.5 w-2.5 rounded-full bg-primary" />Skåne</figcaption>
              </figure>
            </div>
            <form onSubmit={submitContact} className="grid gap-5 rounded-md border border-border bg-card p-6 shadow-strong sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2"><label className="field-label">{t.nameLabel}<input name="name" required maxLength={100} autoComplete="name" className="field" placeholder={t.namePlaceholder} /></label><label className="field-label">{t.emailLabel}<input name="email" required maxLength={254} type="email" autoComplete="email" className="field" placeholder={t.emailPlaceholder} dir="auto" /></label></div>
              <label className="field-label">{t.messageLabel}<textarea name="message" required maxLength={1500} rows={6} className="field resize-y" placeholder={t.messagePlaceholder} /></label>
              <Button type="submit" className="min-h-12 justify-between px-6">{t.send} <ArrowRight size={18} /></Button>
              <p className="text-xs leading-5 text-muted-foreground">{t.mailHelp}</p>
              <div className="border-t border-border pt-4 text-xs leading-6 text-muted-foreground"><strong className="text-foreground">{t.privacyTitle}. </strong>{t.privacyText}</div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-footer py-10 text-footer-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8"><img src={logoAsset.url} alt="Edet Profix Bygg" className="h-auto w-52 object-contain" /><div className="flex flex-wrap items-center gap-5"><p className="text-sm text-footer-muted">© {new Date().getFullYear()} Edet Profix Bygg · {t.footerMotto}</p><a href="https://offerta.se/foretag/edet-profix-bygg" target="_blank" rel="noopener noreferrer" aria-label={t.offertaLabel} title={t.offertaLabel} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-header-border text-footer-foreground transition-colors hover:text-primary"><img src="/images/offerta-icon.png" alt="" className="h-5 w-5 rounded-sm" /></a></div></div><p className="mx-auto mt-6 max-w-7xl px-5 text-[9px] text-footer-muted opacity-40 lg:px-8">{t.siteCredit}</p></footer>

      <Button variant="icon" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label={t.backToTop} className={`fixed bottom-5 end-5 z-40 h-12 w-12 px-0 shadow-strong transition-all ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}><ArrowUp size={20} /></Button>
    </div>
  );
}
