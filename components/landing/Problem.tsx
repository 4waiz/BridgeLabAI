"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/components/i18n/I18nProvider";

export function Problem() {
  const { t } = useI18n();
  return (
    <section className="border-y border-slate-200/70 bg-white">
      <div className="container mx-auto grid gap-10 py-16 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="md:col-span-1"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            The problem
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            {t("landing.problemTitle")}
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-base leading-relaxed text-slate-600 md:col-span-2"
        >
          {t("landing.problemBody")}
        </motion.p>
      </div>
    </section>
  );
}
