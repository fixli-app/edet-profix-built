import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import logoAsset from "@/assets/edet-profix-logo-transparent.png.asset.json";
import { Button } from "@/components/ui/button";
import { languages, type LanguageCode, type SiteTranslation } from "@/lib/site-translations";

type NavItem = { kind: "anchor"; href: string; label: string } | { kind: "gallery"; label: string };

export function SiteHeader({
  t,
  language,
  onLanguageChange,
  isHome,
}: {
  t: SiteTranslation;
  language: LanguageCode;
  onLanguageChange: (value: LanguageCode) => void;
  isHome: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { kind: "anchor", href: "#tjanster", label: t.nav.services },
    { kind: "gallery", label: t.nav.gallery },
    { kind: "anchor", href: "#om-oss", label: t.nav.about },
    { kind: "anchor", href: "#varfor", label: t.nav.why },
    { kind: "anchor", href: "#kontakt", label: t.nav.contact },
  ];

  function changeLanguage(value: string) {
    if (languages.some((item) => item.code === value)) onLanguageChange(value as LanguageCode);
  }

  const languageSelect = (
    <label className="flex items-center gap-2 text-sm font-bold text-header-foreground">
      <span className="sr-only">{t.languageLabel}</span>
      <select
        aria-label={t.languageLabel}
        value={language}
        onChange={(event) => changeLanguage(event.target.value)}
        className="min-h-10 max-w-full rounded-md border border-header-border bg-header px-2 text-sm text-header-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary"
        dir="auto"
      >
        {languages.map(({ code, label }) => <option key={code} value={code}>{label}</option>)}
      </select>
    </label>
  );

  function navLink(item: NavItem, className: string, onClick?: () => void) {
    if (item.kind === "gallery") {
      return <Link key="gallery" to="/galleri" className={className} onClick={onClick}>{item.label}</Link>;
    }
    if (isHome) {
      return <a key={item.href} href={item.href} className={className} onClick={onClick}>{item.label}</a>;
    }
    return <Link key={item.href} to="/" hash={item.href.slice(1)} className={className} onClick={onClick}>{item.label}</Link>;
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-header-border bg-header/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-5 lg:px-8">
        {isHome ? (
          <a href="#start" className="flex min-w-0 shrink-0 items-center" aria-label={t.homeLabel}>
            <img src={logoAsset.url} alt="Edet Profix Bygg" className="h-auto w-32 object-contain sm:w-40" />
          </a>
        ) : (
          <Link to="/" className="flex min-w-0 shrink-0 items-center" aria-label={t.homeLabel}>
            <img src={logoAsset.url} alt="Edet Profix Bygg" className="h-auto w-32 object-contain sm:w-40" />
          </Link>
        )}
        <nav className="hidden items-center gap-4 lg:gap-7 md:flex" aria-label={t.mainNavLabel}>
          {navItems.map((item) => navLink(item, "nav-link whitespace-nowrap"))}
        </nav>
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          {languageSelect}
          {isHome ? (
            <Button asChild className="hidden whitespace-nowrap px-4 xl:inline-flex"><a href="#kontakt">{t.freeQuote}</a></Button>
          ) : (
            <Button asChild className="hidden whitespace-nowrap px-4 xl:inline-flex"><Link to="/" hash="kontakt">{t.freeQuote}</Link></Button>
          )}
        </div>
        <Button
          className="h-11 w-11 shrink-0 border border-primary bg-primary px-0 text-primary-foreground shadow-sm md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? t.menuClose : t.menuOpen}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >{menuOpen ? <X size={21} /> : <Menu size={21} />}</Button>
      </div>
      {menuOpen && (
        <nav id="mobile-nav" className="border-t border-header-border bg-header px-5 py-4 md:hidden" aria-label={t.mobileNavLabel}>
          {navItems.map((item) => navLink(item, "block border-b border-header-border py-3 font-semibold text-header-foreground", () => setMenuOpen(false)))}
          <div className="pt-4">{languageSelect}</div>
        </nav>
      )}
    </header>
  );
}
