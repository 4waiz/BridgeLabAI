"use client";

import * as React from "react";
import { UploadCloud, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { useI18n } from "@/components/i18n/I18nProvider";
import { Button } from "@/components/ui/button";

interface UploaderProps {
  file: File | null;
  preview: string | null;
  onFileChange: (file: File | null) => void;
  disabled?: boolean;
}

export function Uploader({ file, preview, onFileChange, disabled }: UploaderProps) {
  const { t } = useI18n();
  const [dragOver, setDragOver] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    onFileChange(files[0]);
  };

  return (
    <div className="space-y-4">
      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/mp4"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      {!file && (
        <button
          type="button"
          disabled={disabled}
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            handleFiles(e.dataTransfer.files);
          }}
          className={cn(
            "flex w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-300 bg-white px-6 py-12 text-center transition-colors hover:border-brand-400 hover:bg-brand-50/40",
            dragOver && "border-brand-500 bg-brand-50",
            disabled && "cursor-not-allowed opacity-60",
          )}
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <UploadCloud className="h-6 w-6" />
          </span>
          <span className="text-base font-semibold text-slate-900">
            {dragOver ? t("common.dropHere") : t("student.dropTitle")}
          </span>
          <span className="text-xs text-slate-500">{t("student.dropBody")}</span>
        </button>
      )}
      {file && preview && (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-slate-900/95 px-4 py-2 text-xs text-slate-300">
            <span className="truncate font-medium">{file.name}</span>
            <Button
              size="sm"
              variant="ghost"
              className="text-slate-200 hover:bg-white/10 hover:text-white"
              onClick={() => onFileChange(null)}
              disabled={disabled}
            >
              <X className="h-3.5 w-3.5" />
              {t("student.removeFile")}
            </Button>
          </div>
          {file.type.startsWith("video/") ? (
            <video
              src={preview}
              className="aspect-video w-full bg-black object-contain"
              controls
              muted
              playsInline
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={preview}
              alt={file.name}
              className="aspect-video w-full bg-black object-contain"
            />
          )}
        </div>
      )}
    </div>
  );
}
