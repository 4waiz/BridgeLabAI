"use client";

import * as React from "react";
import { DICTIONARY, type DictKey } from "@/data/i18n";
import type { Lang } from "@/types";

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: DictKey) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = React.createContext<I18nContextValue | null>(null);
const STORAGE_KEY = "bridgelab.lang";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("en");

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "en" || stored === "ar") {
        setLangState(stored);
      }
    } catch {
      /* noop */
    }
  }, []);

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, [lang]);

  const setLang = React.useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* noop */
    }
  }, []);

  const value = React.useMemo<I18nContextValue>(() => {
    return {
      lang,
      setLang,
      dir: lang === "ar" ? "rtl" : "ltr",
      t: (key) => DICTIONARY[lang][key] ?? key,
    };
  }, [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
