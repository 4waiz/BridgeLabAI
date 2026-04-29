export type Lang = "en" | "ar";

export type Status = "needs-attention" | "safe-to-retry" | "teacher-review";

export type LabType =
  | "arduino"
  | "sensors"
  | "led-circuit"
  | "robotics"
  | "general";

export type ScenarioId =
  | "arduino-ground-error"
  | "reversed-led"
  | "missing-resistor"
  | "wrong-sensor-pin"
  | "robot-motor-misconnection";

export interface ScenarioCopy {
  issueTitle: string;
  explanation: string;
  hint: string;
  safetyNote: string;
  followUpQuestion: string;
  suggestedNextAction: string;
}

export interface Overlay {
  x: number; // percentage 0-100
  y: number;
  w: number;
  h: number;
  label: string;
}

export interface Scenario {
  id: ScenarioId;
  labType: LabType;
  confidence: number;
  status: Status;
  teacherCategory: string;
  affectedConcept: string;
  overlays: Overlay[];
  sampleImage: string;
  copy: Record<Lang, ScenarioCopy>;
}

export interface AnalysisResult {
  scenario: Scenario;
  lang: Lang;
  createdAt: number;
  studentLabel: string;
  id: string;
}

export interface HistoryEntry {
  id: string;
  scenarioId: ScenarioId;
  labType: LabType;
  status: Status;
  teacherCategory: string;
  affectedConcept: string;
  lang: Lang;
  createdAt: number;
  studentLabel: string;
}

export type AnalysisStepKey =
  | "upload"
  | "detect"
  | "diagnose"
  | "explain"
  | "hint";
