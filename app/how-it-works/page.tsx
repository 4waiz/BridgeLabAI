"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpenCheck,
  Camera,
  Cog,
  Sparkles,
  ScanSearch,
  Users,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/I18nProvider";
import type { DictKey } from "@/data/i18n";
import { ResponsibleAI } from "@/components/landing/ResponsibleAI";

interface Step {
  icon: LucideIcon;
  titleKey: DictKey;
  bodyKey: DictKey;
  tone: string;
}

const STEPS: Step[] = [
  {
    icon: Camera,
    titleKey: "how.s1Title",
    bodyKey: "how.s1Body",
    tone: "from-brand-50 to-white text-brand-600",
  },
  {
    icon: ScanSearch,
    titleKey: "how.s2Title",
    bodyKey: "how.s2Body",
    tone: "from-sky-50 to-white text-sky-600",
  },
  {
    icon: Cog,
    titleKey: "how.s3Title",
    bodyKey: "how.s3Body",
    tone: "from-amber-50 to-white text-amber-600",
  },
  {
    icon: Sparkles,
    titleKey: "how.s4Title",
    bodyKey: "how.s4Body",
    tone: "from-violet-50 to-white text-violet-600",
  },
  {
    icon: BookOpenCheck,
    titleKey: "how.s5Title",
    bodyKey: "how.s5Body",
    tone: "from-emerald-50 to-white text-emerald-600",
  },
  {
    icon: Users,
    titleKey: "how.s6Title",
    bodyKey: "how.s6Body",
    tone: "from-rose-50 to-white text-rose-600",
  },
];

export default function HowItWorksPage() {
  const { t } = useI18n();
  return (
    <>
      <div className="hero-gradient">
        <div className="container mx-auto py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center"
          >
            <div>
              <Badge tone="brand">
                <Sparkles className="h-3 w-3" /> Architecture
              </Badge>
              <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                {t("how.title")}
              </h1>
              <p className="mt-4 max-w-xl text-base text-slate-600">
                {t("how.subtitle")}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/student">
                    {t("common.tryStudent")}
                    <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/teacher">{t("common.openTeacher")}</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-brand-200/40 via-sky-200/30 to-transparent blur-3xl" />
              <Card>
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-50 to-white p-1.5 ring-1 ring-brand-100">
                      <Image
                        src="/logo.png"
                        alt=""
                        fill
                        sizes="48px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-brand-600">
                        Pipeline
                      </p>
                      <p className="text-sm font-semibold text-slate-900">
                        Photo → Hint
                      </p>
                    </div>
                  </div>
                  <ol className="space-y-2 text-xs text-slate-600">
                    <li>
                      <span className="font-semibold text-slate-900">1.</span>{" "}
                      Capture
                    </li>
                    <li>
                      <span className="font-semibold text-slate-900">2.</span>{" "}
                      Detect components
                    </li>
                    <li>
                      <span className="font-semibold text-slate-900">3.</span>{" "}
                      Rule-guided diagnosis
                    </li>
                    <li>
                      <span className="font-semibold text-slate-900">4.</span>{" "}
                      Bilingual explanation
                    </li>
                    <li>
                      <span className="font-semibold text-slate-900">5.</span>{" "}
                      Hint + follow-up
                    </li>
                    <li>
                      <span className="font-semibold text-slate-900">6.</span>{" "}
                      Aggregate to teacher view
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="bg-white">
        <div className="container mx-auto py-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.titleKey}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="space-y-3 p-6">
                      <div
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${step.tone}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-base font-semibold text-slate-900">
                        {t(step.titleKey)}
                      </p>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {t(step.bodyKey)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ResponsibleAI />
    </>
  );
}
