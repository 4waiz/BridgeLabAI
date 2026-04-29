"use client";

import { Cpu, Zap, Sigma, Thermometer, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { useI18n } from "@/components/i18n/I18nProvider";
import type { ScenarioId } from "@/types";
import type { DictKey } from "@/data/i18n";

interface Chip {
  id: ScenarioId;
  icon: LucideIcon;
  labelKey: DictKey;
}

const CHIPS: Chip[] = [
  { id: "arduino-ground-error", icon: Cpu, labelKey: "student.sampleArduinoGround" },
  { id: "reversed-led", icon: Zap, labelKey: "student.sampleReversedLED" },
  { id: "missing-resistor", icon: Sigma, labelKey: "student.sampleMissingResistor" },
  { id: "wrong-sensor-pin", icon: Thermometer, labelKey: "student.sampleWrongSensor" },
  { id: "robot-motor-misconnection", icon: Bot, labelKey: "student.sampleRobotMotor" },
];

interface Props {
  onPick: (id: ScenarioId) => void;
  disabled?: boolean;
  selected?: ScenarioId | null;
}

export function SampleChips({ onPick, disabled, selected }: Props) {
  const { t } = useI18n();
  return (
    <div className="flex flex-wrap gap-2">
      {CHIPS.map((chip) => {
        const Icon = chip.icon;
        const isSelected = selected === chip.id;
        return (
          <button
            key={chip.id}
            type="button"
            onClick={() => onPick(chip.id)}
            disabled={disabled}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
              isSelected
                ? "border-brand-500 bg-brand-600 text-white shadow-sm"
                : "border-slate-200 bg-white text-slate-700 hover:border-brand-300 hover:text-brand-700",
              disabled && "cursor-not-allowed opacity-60",
            )}
          >
            <Icon className="h-3.5 w-3.5" />
            {t(chip.labelKey)}
          </button>
        );
      })}
    </div>
  );
}
