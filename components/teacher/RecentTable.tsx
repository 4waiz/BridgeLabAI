"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/components/i18n/I18nProvider";
import { StatusBadge } from "@/components/student/StatusBadge";
import { scenarioTitle } from "@/lib/aggregate";
import type { HistoryEntry } from "@/types";

function formatRelative(ts: number, lang: "en" | "ar") {
  const diffMs = Date.now() - ts;
  const minutes = Math.round(diffMs / 60000);
  if (minutes < 1) return lang === "ar" ? "الآن" : "just now";
  if (minutes < 60) return lang === "ar" ? `قبل ${minutes} د` : `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return lang === "ar" ? `قبل ${hours} س` : `${hours}h ago`;
  const days = Math.round(hours / 24);
  return lang === "ar" ? `قبل ${days} يوم` : `${days}d ago`;
}

export function RecentTable({ history }: { history: HistoryEntry[] }) {
  const { t, lang } = useI18n();
  const rows = history.slice(0, 8);
  return (
    <Card>
      <CardContent className="p-0">
        <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4">
          <p className="text-sm font-semibold text-slate-900">
            {t("teacher.recent.title")}
          </p>
          <span className="text-xs text-slate-500">{rows.length}</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-500">
                <th className="px-5 py-3 text-start font-medium">
                  {t("teacher.recent.student")}
                </th>
                <th className="px-5 py-3 text-start font-medium">
                  {t("teacher.recent.issue")}
                </th>
                <th className="px-5 py-3 text-start font-medium">
                  {t("teacher.recent.status")}
                </th>
                <th className="px-5 py-3 text-start font-medium">
                  {t("teacher.recent.lang")}
                </th>
                <th className="px-5 py-3 text-end font-medium">
                  {t("teacher.recent.time")}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-slate-50 last:border-b-0 hover:bg-slate-50/60"
                >
                  <td className="px-5 py-3 font-medium text-slate-900">
                    {row.studentLabel}
                  </td>
                  <td className="px-5 py-3 text-slate-700">
                    {scenarioTitle(row.scenarioId, lang)}
                  </td>
                  <td className="px-5 py-3">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="px-5 py-3 text-xs uppercase text-slate-500">
                    {row.lang}
                  </td>
                  <td className="px-5 py-3 text-end text-xs text-slate-500">
                    {formatRelative(row.createdAt, lang)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
