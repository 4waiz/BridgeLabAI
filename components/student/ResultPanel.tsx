"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  BookOpenCheck,
  Lightbulb,
  RefreshCcw,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/I18nProvider";
import { StatusBadge } from "./StatusBadge";
import { OverlayMarkers } from "./OverlayMarkers";
import { ShareCard } from "./ShareCard";
import type { AnalysisResult } from "@/types";

interface Section {
  icon: LucideIcon;
  titleKey: Parameters<ReturnType<typeof useI18n>["t"]>[0];
  body: string;
  tone: "brand" | "amber" | "rose" | "sky" | "emerald";
}

interface Props {
  result: AnalysisResult;
  preview: string | null;
  onAnalyzeAnother: () => void;
}

const TONE_CLASSES: Record<Section["tone"], string> = {
  brand: "border-brand-200 bg-brand-50/60 text-brand-900",
  amber: "border-amber-200 bg-amber-50/70 text-amber-900",
  rose: "border-rose-200 bg-rose-50/70 text-rose-900",
  sky: "border-sky-200 bg-sky-50/70 text-sky-900",
  emerald: "border-emerald-200 bg-emerald-50/70 text-emerald-900",
};

const TONE_ICON: Record<Section["tone"], string> = {
  brand: "bg-brand-100 text-brand-700",
  amber: "bg-amber-100 text-amber-700",
  rose: "bg-rose-100 text-rose-700",
  sky: "bg-sky-100 text-sky-700",
  emerald: "bg-emerald-100 text-emerald-700",
};

export function ResultPanel({ result, preview, onAnalyzeAnother }: Props) {
  const { t, lang } = useI18n();
  const { scenario } = result;
  const copy = scenario.copy[lang];

  const sections: Section[] = [
    {
      icon: AlertCircle,
      titleKey: "common.whyItMatters",
      body: copy.explanation,
      tone: "amber",
    },
    {
      icon: Lightbulb,
      titleKey: "common.guidedHint",
      body: copy.hint,
      tone: "brand",
    },
    {
      icon: ShieldAlert,
      titleKey: "common.safetyNote",
      body: copy.safetyNote,
      tone: "rose",
    },
    {
      icon: BookOpenCheck,
      titleKey: "common.followUp",
      body: copy.followUpQuestion,
      tone: "sky",
    },
    {
      icon: ArrowRight,
      titleKey: "common.suggestedNext",
      body: copy.suggestedNextAction,
      tone: "emerald",
    },
  ];

  const previewSrc = preview ?? scenario.sampleImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid gap-6 lg:grid-cols-[1.05fr_1fr]"
    >
      <div className="space-y-4">
        <Card>
          <CardContent className="p-4">
            <OverlayMarkers
              overlays={scenario.overlays}
              src={previewSrc}
              alt={copy.issueTitle}
            />
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <Badge tone="neutral">{scenario.teacherCategory}</Badge>
              <span>
                {t("common.confidence")}: {Math.round(scenario.confidence * 100)}%
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-4 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                  {t("common.detectedIssue")}
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
                  {copy.issueTitle}
                </h2>
              </div>
              <StatusBadge status={scenario.status} />
            </div>
            <div className="grid gap-2.5">
              {sections.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.titleKey}
                    className={`flex items-start gap-3 rounded-2xl border p-4 ${TONE_CLASSES[s.tone]}`}
                  >
                    <span
                      className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${TONE_ICON[s.tone]}`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] opacity-80">
                        {t(s.titleKey)}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
              <Button variant="secondary" onClick={onAnalyzeAnother}>
                <RefreshCcw className="h-4 w-4" />
                {t("common.analyzeAnother")}
              </Button>
              <Badge tone="brand">
                <Sparkles className="h-3 w-3" /> {scenario.affectedConcept}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
      <ShareCard result={result} />
    </motion.div>
  );
}
