"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { ANALYSIS_STEPS } from "@/lib/analyze";
import { useI18n } from "@/components/i18n/I18nProvider";
import type { AnalysisStepKey } from "@/types";
import type { DictKey } from "@/data/i18n";
import { Progress } from "@/components/ui/progress";

const STEP_LABEL: Record<AnalysisStepKey, DictKey> = {
  upload: "student.step.upload",
  detect: "student.step.detect",
  diagnose: "student.step.diagnose",
  explain: "student.step.explain",
  hint: "student.step.hint",
};

interface Props {
  activeIndex: number; // 0..steps.length, equal to length means done
}

export function AnalysisSteps({ activeIndex }: Props) {
  const { t } = useI18n();
  const total = ANALYSIS_STEPS.length;
  const pct = Math.min(100, Math.round((activeIndex / total) * 100));
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-center gap-4">
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-50 to-white p-2 ring-1 ring-brand-100"
        >
          <Image src="/logo.png" alt="" fill sizes="56px" className="object-contain p-1" />
        </motion.div>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            {t("student.analyzing")}
          </p>
          <p className="mt-0.5 text-base font-semibold text-slate-900">
            {t(STEP_LABEL[ANALYSIS_STEPS[Math.min(activeIndex, total - 1)]])}
          </p>
          <Progress value={pct} className="mt-3" />
        </div>
      </div>
      <ol className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {ANALYSIS_STEPS.map((step, idx) => {
          const done = idx < activeIndex;
          const active = idx === activeIndex;
          return (
            <li
              key={step}
              className={cn(
                "flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs transition-colors",
                done && "border-emerald-200 bg-emerald-50 text-emerald-800",
                active && "border-brand-300 bg-brand-50 text-brand-800",
                !done && !active && "border-slate-200 bg-white text-slate-500",
              )}
            >
              <span
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                  done && "border-emerald-500 bg-emerald-500 text-white",
                  active && "border-brand-500 bg-white text-brand-600",
                  !done && !active && "border-slate-300 bg-white text-slate-400",
                )}
              >
                {done ? (
                  <Check className="h-3 w-3" />
                ) : active ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : (
                  <span className="text-[10px] font-semibold">{idx + 1}</span>
                )}
              </span>
              <span className="font-medium leading-snug">
                {t(STEP_LABEL[step])}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
