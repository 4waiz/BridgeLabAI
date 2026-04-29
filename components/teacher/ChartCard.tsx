"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  subtitle?: string;
  height?: number;
  children: React.ReactNode;
}

export function ChartCard({ title, subtitle, height = 260, children }: Props) {
  return (
    <Card>
      <CardContent className="space-y-3 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            {title}
          </p>
          {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
        </div>
        <div style={{ height }} className="w-full">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
