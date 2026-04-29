"use client";

import {
  AlertTriangle,
  GaugeCircle,
  ShieldAlert,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/components/i18n/I18nProvider";
import { computeKpis } from "@/lib/aggregate";
import { SCENARIOS } from "@/data/scenarios";
import type { HistoryEntry } from "@/types";

interface Item {
  icon: LucideIcon;
  label: string;
  value: string;
  hint?: string;
  tone: string;
}

export function KpiCards({ history }: { history: HistoryEntry[] }) {
  const { t, lang } = useI18n();
  const kpi = computeKpis(history);
  const topTitle =
    kpi.mostCommonScenarioId
      ? SCENARIOS[kpi.mostCommonScenarioId].copy[lang].issueTitle
      : "—";

  const items: Item[] = [
    {
      icon: GaugeCircle,
      label: t("teacher.kpi.totalUploads"),
      value: kpi.total.toString(),
      tone: "from-brand-50 to-white text-brand-600",
    },
    {
      icon: AlertTriangle,
      label: t("teacher.kpi.commonMistake"),
      value: topTitle,
      hint: kpi.mostCommonScenarioId
        ? SCENARIOS[kpi.mostCommonScenarioId].teacherCategory
        : undefined,
      tone: "from-amber-50 to-white text-amber-600",
    },
    {
      icon: ShieldAlert,
      label: t("teacher.kpi.safetyAlerts"),
      value: kpi.safetyAlerts.toString(),
      tone: "from-rose-50 to-white text-rose-600",
    },
    {
      icon: Users,
      label: t("teacher.kpi.needSupport"),
      value: kpi.needSupport.toString(),
      tone: "from-sky-50 to-white text-sky-600",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.label}>
            <CardContent className="space-y-3 p-5">
              <div
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.tone}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1 truncate text-lg font-semibold leading-snug text-slate-900">
                  {item.value}
                </p>
                {item.hint && (
                  <p className="mt-0.5 text-xs text-slate-500">{item.hint}</p>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
