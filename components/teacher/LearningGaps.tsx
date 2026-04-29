"use client";

import { BookOpenCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/components/i18n/I18nProvider";
import { topAffectedConcepts } from "@/lib/aggregate";
import type { HistoryEntry } from "@/types";

export function LearningGaps({ history }: { history: HistoryEntry[] }) {
  const { t } = useI18n();
  const concepts = topAffectedConcepts(history, 4);
  const max = Math.max(...concepts.map((c) => c.value), 1);

  return (
    <Card>
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <BookOpenCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {t("teacher.gaps.title")}
            </p>
            <p className="text-xs text-slate-500">{t("teacher.gaps.subtitle")}</p>
          </div>
        </div>
        <ul className="space-y-3">
          {concepts.map((c) => (
            <li key={c.name} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-800">{c.name}</span>
                <span className="text-xs font-semibold text-slate-500">
                  {c.value}
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-brand-500 to-sky-500"
                  style={{ width: `${(c.value / max) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
