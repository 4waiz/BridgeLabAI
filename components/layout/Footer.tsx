"use client";

import { Logo } from "./Logo";
import { useI18n } from "@/components/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-slate-200/70 bg-white/60 py-10">
      <div className="container mx-auto flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Logo size={44} asLink={false} />
        </div>
        <div className="flex flex-col gap-1 text-xs text-slate-500 md:items-end">
          <span className="font-medium text-slate-700">{t("footer.rights")}</span>
          <span>{t("footer.note")}</span>
        </div>
      </div>
    </footer>
  );
}
