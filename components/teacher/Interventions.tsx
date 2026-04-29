"use client";

import { Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/I18nProvider";
import { interventionsFor } from "@/lib/aggregate";
import type { HistoryEntry } from "@/types";

export function Interventions({ history }: { history: HistoryEntry[] }) {
  const { t } = useI18n();
  const items = interventionsFor(history, 3);
  return (
    <Card>
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <Lightbulb className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {t("teacher.interventions.title")}
            </p>
            <p className="text-xs text-slate-500">
              {t("teacher.interventions.subtitle")}
            </p>
          </div>
        </div>
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.scenarioId}
              className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-slate-900">
                  {item.title}
                </p>
                <Badge tone="brand">{item.count}×</Badge>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
