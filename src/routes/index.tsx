import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUp,
  Check,
  ChevronDown,
  Hammer,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  Target,
  Trees,
  Wrench,
  X,
} from "lucide-react";

import builderAsset from "@/assets/edet-profix-builder.jpg.asset.json";
import logoAsset from "@/assets/edet-profix-logo-transparent.png.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Edet Profix Bygg | Byggtjänster i hela Skåne" },
      {
        name: "description",
        content:
          "Pålitliga bygg-, renoverings- och fastighetstjänster för privatpersoner och företag i Åstorp och hela Skåne.",
      },
      { property: "og:title", content: "Edet Profix Bygg | Kvalitet. Pålitlighet. Resultat." },
      {
        property: "og:description",
        content: "Professionellt hantverk och personligt engagemang i hela Skåne.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Hammer,
    title: "Renovering & bygg",
    text: "Invändiga renoveringar, ombyggnationer och kompletta bygglösningar.",
  },
  {
    icon: Wrench,
    title: "Fastighetsunderhåll",
    text: "Löpande underhåll och reparationer som håller fastigheten i bästa skick.",
  },
  {
    icon: Trees,
    title: "Mark & anläggning",
    text: "Plattsättning, dränering och trädgårdsanläggning utfört med precision.",
  },
  {
    icon: Sparkles,
    title: "Byggstädning",
    text: "Noggrann städning som lämnar projektet rent, säkert och redo att användas.",
  },
];

const reasons = [
  "Erfarna och skickliga yrkespersoner",
  "Högkvalitativt hantverk i varje projekt",
  "Pålitlig service med leverans i tid",
  "Transparent kommunikation från start till mål",
  "Skräddarsydda lösningar för bostäder och företag",
  "Kvalitetsmaterial och beprövade arbetsmetoder",
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "")
      .trim()
      .slice(0, 100);
    const email = String(form.get("email") ?? "")
      .trim()
      .slice(0, 254);
    const message = String(form.get("message") ?? "")
      .trim()
      .slice(0, 1500);
    if (!name || !email || !message) return;
    const subject = encodeURIComponent(`Förfrågan från ${name}`);
    const body = encodeURIComponent(`Namn: ${name}\nE-post: ${email}\n\n${message}`);
    window.location.href = `mailto:edet.profix.info@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-header-border bg-header/95 backdrop-blur-md">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:flex md:justify-between lg:px-8">
          <a href="#start" className="flex min-w-0 items-center" aria-label="Edet Profix Bygg, startsida">
            <img src={logoAsset.url} alt="Edet Profix Bygg" className="h-auto w-40 object-contain sm:w-44" />
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Huvudnavigation">
            <a className="nav-link" href="#tjanster">
              Tjänster
            </a>
            <a className="nav-link" href="#om-oss">
              Om oss
            </a>
            <a className="nav-link" href="#varfor">
              Varför oss
            </a>
            <a className="nav-link" href="#kontakt">
              Kontakt
            </a>
          </nav>
          <a
            href="#kontakt"
            className="hidden rounded-sm bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover md:inline-flex"
          >
            Kostnadsfri offert
          </a>
          <Button
            className="h-11 w-11 shrink-0 border border-primary bg-primary px-0 text-primary-foreground shadow-sm md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-header-border bg-header px-5 py-5 md:hidden" aria-label="Mobilnavigation">
            {[
              ["Tjänster", "#tjanster"],
              ["Om oss", "#om-oss"],
              ["Varför oss", "#varfor"],
              ["Kontakt", "#kontakt"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-header-border py-3 font-semibold text-header-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section
          id="start"
          className="hero-grid relative flex min-h-[940px] items-center overflow-hidden bg-hero pt-20 text-hero-foreground sm:min-h-[94svh]"
        >
          <div className="hero-watermark" aria-hidden="true">
            EP
          </div>
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-72 pt-16 sm:py-20 lg:px-8">
            <div className="max-w-4xl animate-fade-in">
              <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase text-primary">
                <span className="h-px w-10 bg-primary" /> Åstorp · Hela Skåne
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-black leading-[1.03] sm:text-6xl lg:text-8xl">
                Pålitliga fastighets- & byggtjänster <span className="text-primary">du kan lita på.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-hero-muted sm:text-xl">
                Professionellt hantverk med kvalitetsmaterial, tydlig kommunikation och omsorg om varje detalj, från
                start till mål.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  className="inline-flex min-h-12 items-center gap-2 rounded-sm bg-primary px-6 font-bold text-primary-foreground transition-colors hover:bg-primary-hover"
                >
                  Begär en offert <ArrowRight size={18} />
                </a>
                <a
                  href="#tjanster"
                  className="inline-flex min-h-12 items-center gap-2 rounded-sm border border-hero-border px-6 font-bold text-hero-foreground transition-colors hover:bg-hero-soft"
                >
                  Se våra tjänster <ChevronDown size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 border-t border-hero-border bg-hero-soft/70">
            <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-hero-border px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
              {[
                ["Kvalitet", "Hantverk som håller"],
                ["Pålitlighet", "Vi håller vad vi lovar"],
                ["Resultat", "Omsorg i varje detalj"],
              ].map(([title, text]) => (
                <div key={title} className="py-4 sm:px-6">
                  <strong className="text-primary">{title}.</strong>{" "}
                  <span className="text-sm text-hero-muted">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tjanster" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="eyebrow">Vad vi gör</p>
                <h2 className="section-title">Kompletta lösningar för din fastighet</h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">
                Från mindre reparationer och invändiga renoveringar till plattsättning, dränering och byggstädning. Vi
                tar oss an både små och stora projekt för bostäder och kommersiella fastigheter.
              </p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="group min-h-64 bg-card p-7 transition-colors hover:bg-secondary">
                  <span className="mb-12 flex h-12 w-12 items-center justify-center rounded-sm bg-primary-soft text-primary">
                    <Icon size={24} />
                  </span>
                  <span className="text-xs font-bold text-muted-foreground">0{index + 1}</span>
                  <h3 className="mt-2 text-xl font-extrabold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="om-oss" className="scroll-mt-20 bg-section-dark py-20 text-section-dark-foreground sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="eyebrow">Drivna av kvalitet</p>
              <h2 className="section-title max-w-xl">Byggda på förtroende</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-section-dark-muted">
                Vårt arbetssätt bygger på pålitligt hantverk, tydlig kommunikation och bestående resultat. Varje projekt
                planeras noggrant och genomförs med precision — från första möte till slutgiltig överlämning.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-section-dark-muted">
                Vi är ett engagerat team med erfarenhet inom fastighetsunderhåll, renovering, byggtjänster och
                trädgårdsanläggning. Målet är alltid långsiktiga kundrelationer och resultat som håller över tid.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <article className="border-l-2 border-primary bg-section-dark-soft p-7">
                <Target className="text-primary" />
                <h3 className="mt-6 text-xl font-extrabold">Vårt uppdrag</h3>
                <p className="mt-3 text-sm leading-7 text-section-dark-muted">
                  Att förbättra värdet, funktionaliteten och utseendet på varje fastighet genom kvalitet och
                  kundnöjdhet.
                </p>
              </article>
              <article className="border-l-2 border-primary bg-section-dark-soft p-7">
                <ShieldCheck className="text-primary" />
                <h3 className="mt-6 text-xl font-extrabold">Våra värderingar</h3>
                <p className="mt-3 text-sm leading-7 text-section-dark-muted">
                  Integritet, kvalitet, pålitlighet och professionalism i varje beslut, handling och detalj.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="varfor" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
            <div>
              <p className="eyebrow">Varför välja oss</p>
              <h2 className="section-title">Din pålitliga partner i hela Skåne</h2>
              <p className="mt-6 text-base leading-8 text-muted-foreground">
                Vi kombinerar erfarenhet, kvalitet och personlig service. Med utgångspunkt i Åstorp arbetar vi i hela
                Skåne och är flexibla för rätt projekt även utanför området.
              </p>
              <figure className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-strong">
                <img
                  src={builderAsset.url}
                  alt="Byggare från Edet Profix Bygg i ett färdigställt träarbete"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
                <figcaption className="border-t border-border px-5 py-4 text-sm font-bold text-foreground">
                  Professionellt hantverk med omsorg om varje detalj.
                </figcaption>
              </figure>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="flex min-h-20 items-center gap-4 border-b border-border p-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check size={17} strokeWidth={3} />
                  </span>
                  <span className="font-semibold leading-6">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="scroll-mt-20 border-t border-border bg-secondary py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div>
              <p className="eyebrow">Kontakta oss</p>
              <h2 className="section-title">Låt oss prata om ditt nästa projekt</h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">
                Beskriv vad du behöver hjälp med så återkommer vi för att prata vidare om en lösning som passar ditt
                projekt.
              </p>
              <div className="mt-9 space-y-4">
                <a
                  href="mailto:edet.profix.info@gmail.com"
                  className="flex min-w-0 items-center gap-4 font-bold hover:text-primary"
                >
                  <span className="contact-icon">
                    <Mail size={20} />
                  </span>
                  <span className="break-all">edet.profix.info@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 font-bold">
                  <span className="contact-icon">
                    <MapPin size={20} />
                  </span>
                  Åstorp · Hela Skåne och flexibelt vid rätt jobb
                </div>
              </div>
            </div>
            <form
              onSubmit={submitContact}
              className="grid gap-5 rounded-sm border border-border bg-card p-6 shadow-strong sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="field-label">
                  Namn
                  <input
                    name="name"
                    required
                    maxLength={100}
                    autoComplete="name"
                    className="field"
                    placeholder="Ditt namn"
                  />
                </label>
                <label className="field-label">
                  E-post
                  <input
                    name="email"
                    required
                    maxLength={254}
                    type="email"
                    autoComplete="email"
                    className="field"
                    placeholder="namn@exempel.se"
                  />
                </label>
              </div>
              <label className="field-label">
                Meddelande
                <textarea
                  name="message"
                  required
                  maxLength={1500}
                  rows={6}
                  className="field resize-y"
                  placeholder="Berätta kort om projektet..."
                />
              </label>
              <Button type="submit" className="min-h-12 justify-between px-6">
                Skicka förfrågan <ArrowRight size={18} />
              </Button>
              <p className="text-xs leading-5 text-muted-foreground">
                När du skickar öppnas ditt e-postprogram med meddelandet färdigifyllt.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-footer py-10 text-footer-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <img src={logoAsset.url} alt="Edet Profix Bygg" className="h-auto w-52 object-contain" />
          <p className="text-sm text-footer-muted">
            © {new Date().getFullYear()} Edet Profix Bygg · Kvalitet. Pålitlighet. Resultat.
          </p>
        </div>
      </footer>

      <Button
        variant="icon"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Tillbaka till toppen"
        className={`fixed bottom-5 right-5 z-40 h-12 w-12 px-0 shadow-strong transition-all ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      >
        <ArrowUp size={20} />
      </Button>
    </div>
  );
}
