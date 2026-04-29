"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/components/i18n/I18nProvider";
import { Uploader } from "@/components/student/Uploader";
import { SampleChips } from "@/components/student/SampleChips";
import { AnalysisSteps } from "@/components/student/AnalysisSteps";
import { ResultPanel } from "@/components/student/ResultPanel";
import { ANALYSIS_STEPS, runAnalysis } from "@/lib/analyze";
import { appendAnalysis } from "@/lib/history";
import type { AnalysisResult, ScenarioId } from "@/types";

type View = "idle" | "running" | "result";

export default function StudentPage() {
  const { t, lang } = useI18n();
  const [file, setFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);
  const [sampleId, setSampleId] = React.useState<ScenarioId | null>(null);
  const [view, setView] = React.useState<View>("idle");
  const [activeStep, setActiveStep] = React.useState(0);
  const [result, setResult] = React.useState<AnalysisResult | null>(null);

  React.useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const reset = React.useCallback(() => {
    setView("idle");
    setActiveStep(0);
    setResult(null);
    setFile(null);
    setSampleId(null);
  }, []);

  const onPickSample = (id: ScenarioId) => {
    setFile(null);
    setSampleId(id);
  };

  const onAnalyze = async () => {
    if (!file && !sampleId) return;
    setView("running");
    setActiveStep(0);
    const r = await runAnalysis({
      file,
      sampleId: sampleId ?? undefined,
      lang,
      onStep: (_step, idx) => setActiveStep(idx),
    });
    setActiveStep(ANALYSIS_STEPS.length);
    appendAnalysis(r);
    setResult(r);
    setView("result");
  };

  const canAnalyze = (file !== null || sampleId !== null) && view !== "running";

  return (
    <div className="bg-slate-50/60">
      <div className="container mx-auto py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            {t("nav.student")}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {t("student.title")}
          </h1>
          <p className="mt-3 text-base text-slate-600">{t("student.subtitle")}</p>
        </motion.div>

        {view !== "result" && (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <Card>
              <CardContent className="space-y-6 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {t("common.useDemoSample")}
                  </p>
                  <p className="text-sm text-slate-700">
                    {t("student.samplesLabel")}
                  </p>
                  <div className="mt-3">
                    <SampleChips
                      onPick={onPickSample}
                      selected={sampleId}
                      disabled={view === "running"}
                    />
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {t("common.uploadOrChoose")}
                  </p>
                  <div className="mt-3">
                    <Uploader
                      file={file}
                      preview={preview}
                      onFileChange={(f) => {
                        setFile(f);
                        if (f) setSampleId(null);
                      }}
                      disabled={view === "running"}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-6">
                  <p className="text-xs text-slate-500">
                    {t("student.languageLabel")}:{" "}
                    <span className="font-semibold text-slate-700">
                      {lang === "en" ? t("common.langEN") : t("common.langAR")}
                    </span>
                  </p>
                  <Button size="lg" onClick={onAnalyze} disabled={!canAnalyze}>
                    <Sparkles className="h-4 w-4" />
                    {t("common.analyze")}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {view === "running" ? (
                <AnalysisSteps activeIndex={activeStep} />
              ) : (
                <Card>
                  <CardContent className="space-y-3 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                      What happens next
                    </p>
                    <h2 className="text-lg font-semibold text-slate-900">
                      Hint-first, not answer-dumping
                    </h2>
                    <p className="text-sm leading-relaxed text-slate-600">
                      When you press Analyze, BridgeLab AI runs a five-step
                      pipeline locally: receive the file, detect components,
                      diagnose the most likely mistake, generate a short
                      explanation, and prepare a guided hint plus a follow-up
                      question.
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-600">
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                        Detected issue, in the language you choose
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                        Visual overlay on your photo
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                        Safety note before you re-power the circuit
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                        Downloadable summary card to share with your teacher
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}

        {view === "result" && result && (
          <ResultPanel
            result={result}
            preview={preview}
            onAnalyzeAnother={reset}
          />
        )}
      </div>
    </div>
  );
}
