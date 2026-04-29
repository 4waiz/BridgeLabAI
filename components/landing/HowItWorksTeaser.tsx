"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Camera, ScanSearch, Cog, Sparkles, BookOpenCheck, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n/I18nProvider";
import type { DictKey } from "@/data/i18n";

interface Step {
  icon: LucideIcon;
  titleKey: DictKey;
  bodyKey: DictKey;
}

const STEPS: Step[] = [
  { icon: Camera, titleKey: "how.s1Title", bodyKey: "how.s1Body" },
  { icon: ScanSearch, titleKey: "how.s2Title", bodyKey: "how.s2Body" },
  { icon: Cog, titleKey: "how.s3Title", bodyKey: "how.s3Body" },
  { icon: Sparkles, titleKey: "how.s4Title", bodyKey: "how.s4Body" },
  { icon: BookOpenCheck, titleKey: "how.s5Title", bodyKey: "how.s5Body" },
  { icon: Users, titleKey: "how.s6Title", bodyKey: "how.s6Body" },
];

export function HowItWorksTeaser() {
  const { t } = useI18n();
  return (
    <section id="how" className="bg-white">
      <div className="container mx-auto py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
              Pipeline
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {t("landing.howTitle")}
            </h2>
            <p className="mt-3 max-w-xl text-base text-slate-600">
              {t("landing.howBlurb")}
            </p>
          </div>
          <Button asChild variant="secondary">
            <Link href="/how-it-works">
              {t("landing.exploreHow")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.titleKey}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-soft"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  {t(step.titleKey)}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  {t(step.bodyKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
