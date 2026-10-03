import { useEffect, useState } from "react";
import { languages, translations, type LanguageCode } from "@/lib/site-translations";

const STORAGE_KEY = "edet-language";

export function useLanguage() {
  const [language, setLanguage] = useState<LanguageCode>("sv");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (languages.some((item) => item.code === stored)) setLanguage(stored as LanguageCode);
    } catch { /* Storage may be unavailable. */ }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    try { window.localStorage.setItem(STORAGE_KEY, language); } catch { /* Storage may be unavailable. */ }
  }, [language]);

  return { language, setLanguage, t: translations[language] };
}
