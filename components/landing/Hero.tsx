"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, GaugeCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/I18nProvider";

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden hero-gradient">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="container relative mx-auto flex flex-col items-center gap-12 py-20 md:py-28 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-6 text-start"
        >
          <Badge tone="brand" className="px-3 py-1">
            <Sparkles className="h-3.5 w-3.5" />
            {t("common.tagline")}
          </Badge>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            {t("landing.heroTitle")}
          </h1>
          <p className="max-w-xl text-balance text-base text-slate-600 md:text-lg">
            {t("landing.heroSubtitle")}
          </p>
          <p className="text-sm text-slate-500">{t("landing.heroBlurb")}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <Link href="/student">
                <Sparkles className="h-4 w-4" />
                {t("common.tryStudent")}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/teacher">
                <GaugeCircle className="h-4 w-4" />
                {t("common.openTeacher")}
              </Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex-1"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-brand-200/40 via-sky-200/30 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-md rounded-3xl border border-slate-200/70 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-50 to-white p-2 ring-1 ring-brand-100">
                <Image
                  src="/logo.png"
                  alt="BridgeLab AI"
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                  priority
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-brand-600">
                  Live preview
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  {t("nav.product")}
                </p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3 text-xs text-amber-800">
                <p className="font-semibold">Detected issue</p>
                <p className="mt-1 leading-relaxed">
                  LED wired without a current-limiting resistor.
                </p>
              </div>
              <div className="rounded-xl border border-brand-200 bg-brand-50/70 p-3 text-xs text-brand-800">
                <p className="font-semibold">Hint, not the answer</p>
                <p className="mt-1 leading-relaxed">
                  Apply Ohm's Law with V<sub>s</sub>=5 V, V<sub>f</sub>=2 V, I≈10 mA.
                  What value of R falls out?
                </p>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>Confidence 0.95</span>
                <span className="rounded-full bg-rose-100 px-2 py-0.5 font-medium text-rose-700">
                  Needs attention
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
