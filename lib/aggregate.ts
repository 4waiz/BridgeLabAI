import type { HistoryEntry, LabType, ScenarioId, Status } from "@/types";
import { SCENARIOS } from "@/data/scenarios";

export interface KpiSummary {
  total: number;
  mostCommonScenarioId: ScenarioId | null;
  safetyAlerts: number;
  needSupport: number;
}

export function computeKpis(history: HistoryEntry[]): KpiSummary {
  const counts = new Map<ScenarioId, number>();
  let safety = 0;
  let support = 0;
  for (const h of history) {
    counts.set(h.scenarioId, (counts.get(h.scenarioId) ?? 0) + 1);
    if (h.status === "needs-attention") safety += 1;
    if (h.status === "teacher-review") support += 1;
  }
  let bestId: ScenarioId | null = null;
  let bestCount = 0;
  counts.forEach((value, key) => {
    if (value > bestCount) {
      bestCount = value;
      bestId = key;
    }
  });
  return {
    total: history.length,
    mostCommonScenarioId: bestId,
    safetyAlerts: safety,
    needSupport: support,
  };
}

export interface NamedCount {
  name: string;
  value: number;
}

export function errorCategoryCounts(history: HistoryEntry[]): NamedCount[] {
  const map = new Map<string, number>();
  for (const h of history) {
    map.set(h.teacherCategory, (map.get(h.teacherCategory) ?? 0) + 1);
  }
  return Array.from(map.entries())
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
}

export interface LabTypeRow {
  lab: string;
  needs: number;
  safe: number;
  review: number;
}

const LAB_LABEL: Record<LabType, string> = {
  arduino: "Arduino",
  sensors: "Sensors",
  "led-circuit": "LEDs",
  robotics: "Robotics",
  general: "General",
};

export function labTypeBreakdown(history: HistoryEntry[]): LabTypeRow[] {
  const all: LabType[] = ["arduino", "sensors", "led-circuit", "robotics"];
  return all.map((labKey) => {
    const subset = history.filter((h) => h.labType === labKey);
    const row: LabTypeRow = {
      lab: LAB_LABEL[labKey],
      needs: subset.filter((h) => h.status === "needs-attention").length,
      safe: subset.filter((h) => h.status === "safe-to-retry").length,
      review: subset.filter((h) => h.status === "teacher-review").length,
    };
    return row;
  });
}

export function languageUsage(history: HistoryEntry[]): NamedCount[] {
  const en = history.filter((h) => h.lang === "en").length;
  const ar = history.filter((h) => h.lang === "ar").length;
  return [
    { name: "English", value: en },
    { name: "Arabic", value: ar },
  ];
}

export interface TrendPoint {
  day: string;
  count: number;
  ts: number;
}

export function submissionTrend(history: HistoryEntry[]): TrendPoint[] {
  const byDay = new Map<string, { count: number; ts: number }>();
  const dayMs = 24 * 60 * 60 * 1000;
  const now = Date.now();
  for (let i = 6; i >= 0; i--) {
    const ts = now - i * dayMs;
    const d = new Date(ts);
    const key = d.toISOString().slice(0, 10);
    byDay.set(key, { count: 0, ts });
  }
  for (const h of history) {
    const key = new Date(h.createdAt).toISOString().slice(0, 10);
    if (byDay.has(key)) {
      const cur = byDay.get(key)!;
      byDay.set(key, { count: cur.count + 1, ts: cur.ts });
    }
  }
  return Array.from(byDay.entries())
    .map(([key, { count, ts }]) => ({
      day: new Date(ts).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      }),
      count,
      ts,
    }))
    .sort((a, b) => a.ts - b.ts);
}

export function topAffectedConcepts(history: HistoryEntry[], n = 3): NamedCount[] {
  const map = new Map<string, number>();
  for (const h of history) {
    map.set(h.affectedConcept, (map.get(h.affectedConcept) ?? 0) + 1);
  }
  return Array.from(map.entries())
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, n);
}

export interface InterventionCard {
  scenarioId: ScenarioId;
  title: string;
  body: string;
  count: number;
}

const INTERVENTION_COPY: Record<ScenarioId, { title: string; body: string }> = {
  "missing-resistor": {
    title: "5-min demo: why every LED needs a resistor",
    body: "Run a quick whiteboard derivation of R = (Vs − Vf) / If with a 5 V supply before next lab.",
  },
  "arduino-ground-error": {
    title: "Lab opener: what does 'ground' really mean?",
    body: "Demo two boards with separate grounds and the same boards after a single GND jumper. Show the signal on a scope.",
  },
  "reversed-led": {
    title: "Polarity station at every bench",
    body: "Print a small reference card showing anode (long leg) and cathode (flat side) and tape it to each kit.",
  },
  "wrong-sensor-pin": {
    title: "Mini-lesson: digital vs analog pins",
    body: "Walk through the DHT11 datasheet timing diagram and contrast with an analog sensor like an LDR.",
  },
  "robot-motor-misconnection": {
    title: "Truth-table drill: H-bridge direction vs enable",
    body: "Have students fill in IN1/IN2/EN combinations on paper before they touch the L298N driver.",
  },
};

export function interventionsFor(history: HistoryEntry[], n = 3): InterventionCard[] {
  const counts = new Map<ScenarioId, number>();
  for (const h of history) {
    counts.set(h.scenarioId, (counts.get(h.scenarioId) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([scenarioId, count]) => ({
      scenarioId,
      ...INTERVENTION_COPY[scenarioId],
      count,
    }));
}

export function statusCount(history: HistoryEntry[], status: Status) {
  return history.filter((h) => h.status === status).length;
}

export function scenarioTitle(scenarioId: ScenarioId, lang: "en" | "ar") {
  return SCENARIOS[scenarioId].copy[lang].issueTitle;
}
