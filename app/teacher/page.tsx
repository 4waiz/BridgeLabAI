"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GaugeCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/I18nProvider";
import { KpiCards } from "@/components/teacher/KpiCards";
import {
  ErrorCategoryChart,
  LabTypeChart,
  LanguageUsageChart,
  SubmissionTrendChart,
} from "@/components/teacher/Charts";
import { RecentTable } from "@/components/teacher/RecentTable";
import { LearningGaps } from "@/components/teacher/LearningGaps";
import { Interventions } from "@/components/teacher/Interventions";
import { loadHistory } from "@/lib/history";
import type { HistoryEntry } from "@/types";

export default function TeacherPage() {
  const { t } = useI18n();
  const [history, setHistory] = React.useState<HistoryEntry[]>([]);

  React.useEffect(() => {
    setHistory(loadHistory());
    const onStorage = () => setHistory(loadHistory());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <div className="bg-slate-50/60">
      <div className="container mx-auto py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
              {t("nav.teacher")}
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {t("teacher.title")}
            </h1>
            <p className="mt-2 max-w-2xl text-base text-slate-600">
              {t("teacher.subtitle")}
            </p>
          </div>
          <Badge tone="brand">
            <GaugeCircle className="h-3.5 w-3.5" />
            Live class view
          </Badge>
        </motion.div>

        <KpiCards history={history} />

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <ErrorCategoryChart history={history} />
          <LabTypeChart history={history} />
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <LanguageUsageChart history={history} />
          <SubmissionTrendChart history={history} />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <RecentTable history={history} />
          <div className="space-y-4">
            <LearningGaps history={history} />
            <Interventions history={history} />
          </div>
        </div>
      </div>
    </div>
  );
}
