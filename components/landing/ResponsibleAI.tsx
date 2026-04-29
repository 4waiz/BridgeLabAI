"use client";

import { motion } from "framer-motion";
import { ShieldCheck, EyeOff, GraduationCap, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useI18n } from "@/components/i18n/I18nProvider";
import type { DictKey } from "@/data/i18n";

interface Pillar {
  icon: LucideIcon;
  key: DictKey;
}

const PILLARS: Pillar[] = [
  { icon: GraduationCap, key: "landing.responsibleHint" },
  { icon: HeartHandshake, key: "landing.responsibleControl" },
  { icon: EyeOff, key: "landing.responsibleData" },
  { icon: ShieldCheck, key: "landing.responsibleSafety" },
];

export function ResponsibleAI() {
  const { t } = useI18n();
  return (
    <section className="bg-slate-900 text-white">
      <div className="container mx-auto py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            Responsible AI
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            {t("landing.responsibleTitle")}
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20 text-brand-200">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-200">
                  {t(pillar.key)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
