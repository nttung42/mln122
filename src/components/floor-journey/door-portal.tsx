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
    <div className="w-[180px] -translate-x-1/2 shrink-0 flex flex-col items-center justify-end text-center relative select-none">
      
      {/* VÙNG HIỆU ỨNG ÁNH SÁNG KHI ĐỨNG VÀO NỬA CỬA */}
      {canEnter && (
        <div className="absolute -top-24 inset-x-0 flex flex-col items-center pointer-events-none z-30 animate-pulse">
          <div className="px-3 py-1 rounded-full bg-electric text-white text-[10px] font-mono font-bold shadow-lg shadow-electric/40 border border-sky-300 tracking-wide mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>NHẤN ENTER ĐỂ LÊN TẦNG</span>
          </div>
          {/* Cột sáng lượng tử bốc lên từ ngưỡng cửa */}
          <div className="w-16 h-32 bg-gradient-to-t from-sky-400/40 via-sky-300/20 to-transparent blur-xs pointer-events-none" />
        </div>
      )}

      {/* KHUNG CỬA ARCH AIRLOCK FRAME (Tâm cửa đặt chính xác tại tọa độ gateX) */}
      <div
        onClick={onEnter}
        className={cn(
          "w-[88px] h-[112px] border-3 border-b-0 rounded-t-[44px] relative bg-white overflow-hidden cursor-pointer transition-all duration-300 z-20",
          canEnter
            ? "border-electric shadow-[0_0_35px_rgba(2,132,199,0.7),0_0_15px_rgba(217,119,6,0.5)] scale-105"
            : "border-slate-400/80 shadow-md"
        )}
      >
        {/* 2 CÁNH CỬA TRƯỢT TỰ ĐỘNG (SLIDING AIRLOCK DOORS) */}
        <div className="absolute inset-0 flex">
          <div
            className={cn(
              "w-1/2 h-full bg-slate-200 border-r border-slate-300 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-end pr-1",
              canEnter && "-translate-x-full"
            )}
          >
            <div className="w-1 h-8 rounded-full bg-slate-400/60" />
          </div>
          <div
            className={cn(
              "w-1/2 h-full bg-slate-200 border-l border-slate-300 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-start pl-1",
              canEnter && "translate-x-full"
            )}
          >
            <div className="w-1 h-8 rounded-full bg-slate-400/60" />
          </div>
        </div>

        {/* CÕI LƯỢNG TỬ PHÍA TRONG CỬA KHI MỞ TOANG */}
        <div
          className={cn(
            "absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(2,132,199,0.7)_0%,rgba(16,185,129,0.4)_50%,transparent_100%)] flex flex-col items-center justify-center transition-opacity duration-300 pointer-events-none",
            canEnter ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="w-6 h-6 rounded-full border-2 border-white/80 border-t-transparent animate-spin" />
        </div>
      </div>

      {/* NÚT HÀNH ĐỘNG CỬA */}
      <button
        onClick={onEnter}
        className={cn(
          "mt-2 font-mono text-xs px-3.5 py-1 rounded-full border transition-all duration-200 cursor-pointer flex items-center gap-1.5 z-20",
          canEnter
            ? "bg-electric text-white font-bold border-sky-400 shadow-md shadow-electric/30 animate-bounce"
            : "bg-white text-slate-500 border-slate-300 hover:border-electric hover:text-electric"
        )}
      >
        <span>↑ BƯỚC VÀO CỬA</span>
      </button>

      <span className="font-mono text-[9px] text-slate-500 mt-1 tracking-wider uppercase font-semibold">
        {nextFloorLabel}
      </span>
    </div>
  );
}
