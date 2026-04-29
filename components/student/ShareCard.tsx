"use client";

import * as React from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { toPng } from "html-to-image";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n/I18nProvider";
import type { AnalysisResult } from "@/types";
import { StatusBadge } from "./StatusBadge";

export function ShareCard({ result }: { result: AnalysisResult }) {
  const { t, lang } = useI18n();
  const ref = React.useRef<HTMLDivElement>(null);
  const copy = result.scenario.copy[lang];

  const onDownload = async () => {
    if (!ref.current) return;
    try {
      const dataUrl = await toPng(ref.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#0f172a",
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `bridgelab-${result.scenario.id}.png`;
      link.click();
    } catch (err) {
      console.error("share-card export failed", err);
    }
  };

  return (
    <div className="space-y-3">
      <div
        ref={ref}
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-brand-900 p-7 text-white shadow-xl"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="relative flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white/10 p-1.5 ring-1 ring-white/20">
              <Image src="/logo.png" alt="" fill sizes="40px" className="object-contain p-1" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-200">
                {t("student.shareTitle")}
              </p>
              <p className="text-sm font-semibold">{t("nav.product")}</p>
            </div>
          </div>
          <StatusBadge status={result.scenario.status} />
        </div>
        <div className="relative mt-6">
          <p className="text-xs text-slate-300">{t("common.detectedIssue")}</p>
          <h3 className="mt-1 text-xl font-semibold leading-snug">{copy.issueTitle}</h3>
        </div>
        <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            <p className="text-[10px] uppercase tracking-[0.18em] text-brand-200">
              {t("common.guidedHint")}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-100">
              {copy.hint}
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            <p className="text-[10px] uppercase tracking-[0.18em] text-brand-200">
              {t("common.followUp")}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-100">
              {copy.followUpQuestion}
            </p>
          </div>
        </div>
        <div className="relative mt-5 flex items-center justify-between text-[11px] text-slate-300">
          <span>
            {t("common.confidence")}: {Math.round(result.scenario.confidence * 100)}%
          </span>
          <span className="font-medium text-brand-200">
            {t("student.generatedBy")}
          </span>
        </div>
      </div>
      <Button variant="secondary" onClick={onDownload}>
        <Download className="h-4 w-4" />
        {t("common.download")}
      </Button>
    </div>
  );
}
