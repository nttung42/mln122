"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DoorPortalProps {
  canEnter: boolean;
  onEnter: () => void;
  nextFloorLabel: string;
}

export function DoorPortal({ canEnter, onEnter, nextFloorLabel }: DoorPortalProps) {
  return (
    <div className="w-[280px] shrink-0 flex flex-col items-center justify-end text-center relative h-full pb-0 select-none">
      {/* Bot-height Arch Portal Frame in Pure Light Mode */}
      <div
        onClick={onEnter}
        className={cn(
          "w-[76px] h-[94px] border-2 border-warm-gold border-b-0 rounded-t-[38px] relative bg-white overflow-hidden cursor-pointer transition-all duration-300",
          canEnter
            ? "shadow-[0_0_30px_rgba(217,119,6,0.6),0_0_15px_rgba(22,163,74,0.4)] border-amber-600 scale-105"
            : "shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
        )}
      >
        {/* Sliding Airlock Wings */}
        <div className="absolute inset-0 flex">
          <div
            className={cn(
              "w-1/2 h-full bg-[#E2E8F0] border-r border-warm-gold/40 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              canEnter && "-translate-x-full"
            )}
          />
          <div
            className={cn(
              "w-1/2 h-full bg-[#E2E8F0] border-l border-warm-gold/40 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              canEnter && "translate-x-full"
            )}
          />
        </div>

        {/* Ambient Warm Golden Beam */}
        <div
          className={cn(
            "absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(217,119,6,0.5)_0%,rgba(22,163,74,0.3)_60%,transparent_100%)] transition-opacity duration-300 pointer-events-none",
            canEnter ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      {/* Door Action Badge */}
      <button
        onClick={onEnter}
        className={cn(
          "mt-2.5 font-mono text-xs px-3 py-1 rounded border transition-all duration-200 cursor-pointer flex items-center gap-1.5",
          canEnter
            ? "bg-warm-gold text-white font-semibold border-warm-gold shadow-md shadow-warm-gold/30 animate-pulse"
            : "bg-white text-muted-gray border-border-subtle hover:border-warm-gold hover:text-warm-gold"
        )}
      >
        <span>↑ BƯỚC VÀO CỬA</span>
      </button>

      <span className="font-mono text-[10px] text-muted-gray mt-1 tracking-wider uppercase font-medium">
        {nextFloorLabel}
      </span>
    </div>
  );
}
