import type {
  AnalysisResult,
  AnalysisStepKey,
  Lang,
  Scenario,
  ScenarioId,
} from "@/types";
import { SCENARIOS, SCENARIO_LIST } from "@/data/scenarios";

const STEPS: AnalysisStepKey[] = [
  "upload",
  "detect",
  "diagnose",
  "explain",
  "hint",
];

export const ANALYSIS_STEPS = STEPS;

function sleep(ms: number) {
  return new Promise<void>((res) => setTimeout(res, ms));
}

function hashString(input: string): number {
  let h = 5381;
  for (let i = 0; i < input.length; i++) {
    h = ((h << 5) + h + input.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function pickScenarioFromName(name: string): Scenario {
  const lc = name.toLowerCase();
  if (lc.includes("ground") || lc.includes("arduino")) return SCENARIOS["arduino-ground-error"];
  if (lc.includes("led") && lc.includes("rev")) return SCENARIOS["reversed-led"];
  if (lc.includes("resistor")) return SCENARIOS["missing-resistor"];
  if (lc.includes("sensor") || lc.includes("dht")) return SCENARIOS["wrong-sensor-pin"];
  if (lc.includes("motor") || lc.includes("robot")) return SCENARIOS["robot-motor-misconnection"];
  const idx = hashString(name) % SCENARIO_LIST.length;
  return SCENARIO_LIST[idx];
}

let studentCounter = 30;

export function nextStudentLabel() {
  studentCounter += 1;
  return `Student ${studentCounter}`;
}

export interface RunAnalysisOptions {
  file?: File | null;
  sampleId?: ScenarioId;
  lang: Lang;
  onStep?: (step: AnalysisStepKey, index: number, total: number) => void;
}

export async function runAnalysis({
  file,
  sampleId,
  lang,
  onStep,
}: RunAnalysisOptions): Promise<AnalysisResult> {
  let scenario: Scenario;
  if (sampleId) {
    scenario = SCENARIOS[sampleId];
  } else if (file) {
    scenario = pickScenarioFromName(file.name);
  } else {
    scenario = SCENARIO_LIST[0];
  }

  const baseDelay = 520;
  for (let i = 0; i < STEPS.length; i++) {
    onStep?.(STEPS[i], i, STEPS.length);
    await sleep(baseDelay + Math.floor(Math.random() * 220));
  }

  return {
    scenario,
    lang,
    createdAt: Date.now(),
    studentLabel: nextStudentLabel(),
    id: `live-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
  };
}
