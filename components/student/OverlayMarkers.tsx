"use client";

import { motion } from "framer-motion";
import type { Overlay } from "@/types";

export function OverlayMarkers({
  overlays,
  src,
  alt,
}: {
  overlays: Overlay[];
  src: string;
  alt: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="block w-full" />
      {overlays.map((o, idx) => (
        <motion.div
          key={`${o.label}-${idx}`}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: idx * 0.12 }}
          className="absolute rounded-lg border-2 border-rose-400/90 bg-rose-400/10 shadow-[0_0_0_3px_rgba(244,63,94,0.18)]"
          style={{
            left: `${o.x}%`,
            top: `${o.y}%`,
            width: `${o.w}%`,
            height: `${o.h}%`,
          }}
        >
          <span className="absolute -top-6 start-0 inline-flex items-center rounded-md bg-rose-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow">
            {o.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
