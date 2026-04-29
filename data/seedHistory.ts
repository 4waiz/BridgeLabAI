import type { HistoryEntry, ScenarioId } from "@/types";
import { SCENARIOS } from "./scenarios";

const SEED_RECIPE: { scenarioId: ScenarioId; daysAgo: number; lang: "en" | "ar"; student: number }[] = [
  { scenarioId: "missing-resistor", daysAgo: 0, lang: "en", student: 14 },
  { scenarioId: "reversed-led", daysAgo: 0, lang: "ar", student: 7 },
  { scenarioId: "arduino-ground-error", daysAgo: 0, lang: "en", student: 22 },
  { scenarioId: "missing-resistor", daysAgo: 1, lang: "ar", student: 3 },
  { scenarioId: "wrong-sensor-pin", daysAgo: 1, lang: "en", student: 19 },
  { scenarioId: "robot-motor-misconnection", daysAgo: 1, lang: "en", student: 11 },
  { scenarioId: "reversed-led", daysAgo: 2, lang: "en", student: 5 },
  { scenarioId: "arduino-ground-error", daysAgo: 2, lang: "ar", student: 26 },
  { scenarioId: "missing-resistor", daysAgo: 3, lang: "en", student: 12 },
  { scenarioId: "robot-motor-misconnection", daysAgo: 3, lang: "ar", student: 8 },
  { scenarioId: "wrong-sensor-pin", daysAgo: 4, lang: "en", student: 17 },
  { scenarioId: "missing-resistor", daysAgo: 4, lang: "en", student: 4 },
  { scenarioId: "reversed-led", daysAgo: 5, lang: "ar", student: 21 },
  { scenarioId: "arduino-ground-error", daysAgo: 6, lang: "en", student: 9 },
];

const ANCHOR_DATE = new Date("2026-04-29T10:30:00Z").getTime();

export function buildSeedHistory(): HistoryEntry[] {
  return SEED_RECIPE.map((row, idx) => {
    const s = SCENARIOS[row.scenarioId];
    return {
      id: `seed-${idx}`,
      scenarioId: s.id,
      labType: s.labType,
      status: s.status,
      teacherCategory: s.teacherCategory,
      affectedConcept: s.affectedConcept,
      lang: row.lang,
      createdAt:
        ANCHOR_DATE -
        row.daysAgo * 24 * 60 * 60 * 1000 -
        idx * 17 * 60 * 1000,
      studentLabel: `Student ${row.student}`,
    };
  });
}
