"use client";

import type { AnalysisResult, HistoryEntry } from "@/types";
import { buildSeedHistory } from "@/data/seedHistory";

const KEY = "bridgelab.history.v1";

function isBrowser() {
  return typeof window !== "undefined";
}

export function loadHistory(): HistoryEntry[] {
  if (!isBrowser()) return buildSeedHistory();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      const seed = buildSeedHistory();
      localStorage.setItem(KEY, JSON.stringify(seed));
      return seed;
    }
    const parsed = JSON.parse(raw) as HistoryEntry[];
    if (!Array.isArray(parsed) || parsed.length === 0) return buildSeedHistory();
    return parsed;
  } catch {
    return buildSeedHistory();
  }
}

export function appendAnalysis(result: AnalysisResult): HistoryEntry[] {
  const entry: HistoryEntry = {
    id: result.id,
    scenarioId: result.scenario.id,
    labType: result.scenario.labType,
    status: result.scenario.status,
    teacherCategory: result.scenario.teacherCategory,
    affectedConcept: result.scenario.affectedConcept,
    lang: result.lang,
    createdAt: result.createdAt,
    studentLabel: result.studentLabel,
  };
  const current = loadHistory();
  const next = [entry, ...current].slice(0, 200);
  if (isBrowser()) localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function resetHistory(): HistoryEntry[] {
  const seed = buildSeedHistory();
  if (isBrowser()) localStorage.setItem(KEY, JSON.stringify(seed));
  return seed;
}
