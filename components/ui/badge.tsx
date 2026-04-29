import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      tone: {
        neutral: "bg-slate-100 text-slate-700 border-slate-200",
        brand: "bg-brand-50 text-brand-700 border-brand-200",
        amber: "bg-amber-50 text-amber-700 border-amber-200",
        emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
        rose: "bg-rose-50 text-rose-700 border-rose-200",
        sky: "bg-sky-50 text-sky-700 border-sky-200",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
