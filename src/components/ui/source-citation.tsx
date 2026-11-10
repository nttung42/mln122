"use client";

import * as React from "react";
import { Info, ExternalLink, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { DataSourceMeta } from "@/types/content";

interface SourceCitationProps {
  source: DataSourceMeta;
  year?: number;
  indicator?: string;
  methodologyNote?: string;
  isIllustrative?: boolean;
  className?: string;
}

export function SourceCitation({
  source,
  year,
  indicator,
  methodologyNote,
  isIllustrative = false,
  className,
}: SourceCitationProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={cn("relative inline-block text-xs font-mono", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "inline-flex items-center gap-1.5 px-2 py-0.5 rounded border transition-colors cursor-pointer",
          isIllustrative
            ? "border-warm-gold/30 bg-warm-gold/10 text-warm-gold hover:bg-warm-gold/20"
            : "border-electric-blue/30 bg-electric-blue/10 text-electric-blue hover:bg-electric-blue/20"
        )}
        title="Bấm để xem nguồn số liệu và phương pháp tính"
      >
        {isIllustrative ? (
          <span className="text-[10px] uppercase font-bold tracking-wider">Mô phỏng</span>
        ) : (
          <CheckCircle2 className="w-3 h-3 text-growth-green" />
        )}
        <span className="truncate max-w-[140px]">{source.name}</span>
        {year && <span className="opacity-75">({year})</span>}
        <Info className="w-3 h-3 opacity-80" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute bottom-full left-0 mb-2 z-50 w-72 md:w-80 p-3 rounded-lg border border-border-subtle bg-deep-surface/95 backdrop-blur-xl shadow-2xl text-off-white text-xs animate-in fade-in-0 zoom-in-95">
            <div className="flex items-center justify-between border-b border-border-subtle pb-2 mb-2 font-heading font-semibold text-sm">
              <span className={isIllustrative ? "text-warm-gold" : "text-electric-blue"}>
                {isIllustrative ? "Dữ liệu Mô phỏng Minh họa" : "Nguồn Dữ liệu Học thuật"}
              </span>
              {year && (
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface-elevated text-muted-gray">
                  Năm {year}
                </span>
              )}
            </div>

            <div className="space-y-2 font-sans text-xs">
              <div>
                <span className="text-muted-gray block text-[11px]">Nguồn trích xuất:</span>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-electric-blue hover:underline inline-flex items-center gap-1 font-medium mt-0.5"
                >
                  {source.name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {indicator && (
                <div>
                  <span className="text-muted-gray block text-[11px]">Chỉ số:</span>
                  <p className="text-off-white">{indicator}</p>
                </div>
              )}

              {methodologyNote && (
                <div>
                  <span className="text-muted-gray block text-[11px]">Ghi chú phương pháp:</span>
                  <p className="text-muted-gray leading-relaxed text-[11px] bg-midnight-navy/60 p-1.5 rounded border border-border-subtle">
                    {methodologyNote}
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

