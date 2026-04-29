"use client";

import { AlertTriangle, ShieldAlert, RefreshCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/I18nProvider";
import type { Status } from "@/types";

export function StatusBadge({ status }: { status: Status }) {
  const { t } = useI18n();
  if (status === "needs-attention") {
    return (
      <Badge tone="rose" className="gap-1.5">
        <AlertTriangle className="h-3.5 w-3.5" />
        {t("common.statusNeedsAttention")}
      </Badge>
    );
  }
  if (status === "teacher-review") {
    return (
      <Badge tone="amber" className="gap-1.5">
        <ShieldAlert className="h-3.5 w-3.5" />
        {t("common.statusTeacherReview")}
      </Badge>
    );
  }
  return (
    <Badge tone="emerald" className="gap-1.5">
      <RefreshCcw className="h-3.5 w-3.5" />
      {t("common.statusSafeToRetry")}
    </Badge>
  );
}
