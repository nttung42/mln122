"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  className,
}: ModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-midnight-navy/80 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <div
        className={cn(
          "relative z-50 w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-border-subtle bg-deep-surface/95 p-6 shadow-2xl text-off-white animate-in zoom-in-95 duration-200",
          className
        )}
      >
        <div className="flex items-start justify-between border-b border-border-subtle pb-4 mb-4">
          <div>
            <h2 className="text-xl font-bold font-heading text-off-white">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-muted-gray mt-1">{subtitle}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted-gray hover:text-off-white hover:bg-surface-elevated transition-colors cursor-pointer"
            aria-label="Đóng hộp thoại"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 font-sans text-sm leading-relaxed text-off-white/90">
          {children}
        </div>
      </div>
    </div>
  );
}

