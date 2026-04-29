"use client";

import { Languages } from "lucide-react";
import { useI18n } from "@/components/i18n/I18nProvider";
import { cn } from "@/lib/cn";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useI18n();
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-xs shadow-soft",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <Languages className="ms-1 h-4 w-4 text-slate-500" aria-hidden />
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "rounded-full px-3 py-1 font-medium transition-colors",
          lang === "en"
            ? "bg-brand-600 text-white shadow-sm"
            : "text-slate-600 hover:text-slate-900",
        )}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ar")}
        className={cn(
          "rounded-full px-3 py-1 font-medium transition-colors",
          lang === "ar"
            ? "bg-brand-600 text-white shadow-sm"
            : "text-slate-600 hover:text-slate-900",
        )}
        aria-pressed={lang === "ar"}
      >
        AR
      </button>
    </div>
  );
}
