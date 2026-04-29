"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useI18n } from "@/components/i18n/I18nProvider";
import { ChartCard } from "./ChartCard";
import {
  errorCategoryCounts,
  labTypeBreakdown,
  languageUsage,
  submissionTrend,
} from "@/lib/aggregate";
import type { HistoryEntry } from "@/types";

const BRAND = "#4f46e5";
const ROSE = "#f43f5e";
const AMBER = "#f59e0b";
const EMERALD = "#10b981";
const SKY = "#0ea5e9";

const TOOLTIP_STYLE = {
  borderRadius: 12,
  border: "1px solid #e2e8f0",
  boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
  fontSize: 12,
};

export function ErrorCategoryChart({ history }: { history: HistoryEntry[] }) {
  const { t } = useI18n();
  const data = errorCategoryCounts(history);
  return (
    <ChartCard title={t("teacher.charts.errorCategories")}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "#475569" }}
            interval={0}
            tickFormatter={(v: string) => (v.length > 14 ? `${v.slice(0, 13)}…` : v)}
          />
          <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: "#475569" }} />
          <Tooltip contentStyle={TOOLTIP_STYLE} />
          <Bar dataKey="value" fill={BRAND} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export function LabTypeChart({ history }: { history: HistoryEntry[] }) {
  const { t } = useI18n();
  const data = labTypeBreakdown(history);
  return (
    <ChartCard title={t("teacher.charts.errorByLab")}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis dataKey="lab" tick={{ fontSize: 11, fill: "#475569" }} />
          <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: "#475569" }} />
          <Tooltip contentStyle={TOOLTIP_STYLE} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Bar dataKey="needs" name="Needs attention" stackId="a" fill={ROSE} radius={[6, 6, 0, 0]} />
          <Bar dataKey="review" name="Teacher review" stackId="a" fill={AMBER} />
          <Bar dataKey="safe" name="Safe to retry" stackId="a" fill={EMERALD} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export function LanguageUsageChart({ history }: { history: HistoryEntry[] }) {
  const { t } = useI18n();
  const data = languageUsage(history);
  const colors = [BRAND, SKY];
  return (
    <ChartCard title={t("teacher.charts.languageUsage")}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={48}
            outerRadius={84}
            paddingAngle={3}
            stroke="#fff"
          >
            {data.map((_, idx) => (
              <Cell key={idx} fill={colors[idx % colors.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={TOOLTIP_STYLE} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export function SubmissionTrendChart({ history }: { history: HistoryEntry[] }) {
  const { t } = useI18n();
  const data = submissionTrend(history);
  return (
    <ChartCard title={t("teacher.charts.submissionTrend")}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#475569" }} />
          <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: "#475569" }} />
          <Tooltip contentStyle={TOOLTIP_STYLE} />
          <Line
            type="monotone"
            dataKey="count"
            stroke={BRAND}
            strokeWidth={2.5}
            dot={{ r: 3, fill: BRAND }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
