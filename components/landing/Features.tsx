"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Languages,
  Lightbulb,
  ShieldCheck,
  LineChart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/components/i18n/I18nProvider";
import type { DictKey } from "@/data/i18n";

interface Feature {
  icon: LucideIcon;
  titleKey: DictKey;
  bodyKey: DictKey;
  tone: string;
}

const FEATURES: Feature[] = [
  {
    icon: Cpu,
    titleKey: "landing.f1Title",
    bodyKey: "landing.f1Body",
    tone: "from-brand-50 to-white text-brand-600",
  },
  {
    icon: Languages,
    titleKey: "landing.f2Title",
    bodyKey: "landing.f2Body",
    tone: "from-sky-50 to-white text-sky-600",
  },
  {
    icon: Lightbulb,
    titleKey: "landing.f3Title",
    bodyKey: "landing.f3Body",
    tone: "from-amber-50 to-white text-amber-600",
  },
  {
    icon: LineChart,
    titleKey: "landing.f4Title",
    bodyKey: "landing.f4Body",
    tone: "from-emerald-50 to-white text-emerald-600",
  },
  {
    icon: ShieldCheck,
    titleKey: "landing.f5Title",
    bodyKey: "landing.f5Body",
    tone: "from-rose-50 to-white text-rose-600",
  },
];

export function Features() {
  const { t } = useI18n();
  return (
    <section className="bg-slate-50/80">
      <div className="container mx-auto py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Features
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {t("landing.featuresTitle")}
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full transition-shadow hover:shadow-glow">
                  <CardContent className="space-y-4 p-6 pt-6">
                    <div
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${feature.tone}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {t(feature.titleKey)}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {t(feature.bodyKey)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
