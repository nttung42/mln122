"use client";

import * as React from "react";
import { HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Floor2HardwareTeardownProps {
  charX: number;
}

/* ========================================================================= */
/* VECTOR SVG FLAG ICONS (CHUẨN XÁC, SẮC NÉT TỪNG QUỐC KỲ) */
/* ========================================================================= */

function FlagVN() {
  return (
    <svg className="w-5 h-3.5 rounded-[3px] shadow-xs shrink-0" viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#DA251D" />
      <polygon points="15,4 16.5,8.8 21.5,8.8 17.5,11.8 19,16.5 15,13.5 11,16.5 12.5,11.8 8.5,8.8 13.5,8.8" fill="#FFFF00" />
    </svg>
  );
}

function FlagUS() {
  return (
    <svg className="w-5 h-3.5 rounded-[3px] shadow-xs shrink-0" viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#B22234" />
      <line x1="0" y1="3" x2="30" y2="3" stroke="#FFFFFF" strokeWidth="1.5" />
      <line x1="0" y1="6" x2="30" y2="6" stroke="#FFFFFF" strokeWidth="1.5" />
      <line x1="0" y1="9" x2="30" y2="9" stroke="#FFFFFF" strokeWidth="1.5" />
      <line x1="0" y1="12" x2="30" y2="12" stroke="#FFFFFF" strokeWidth="1.5" />
      <line x1="0" y1="15" x2="30" y2="15" stroke="#FFFFFF" strokeWidth="1.5" />
      <line x1="0" y1="18" x2="30" y2="18" stroke="#FFFFFF" strokeWidth="1.5" />
      <rect width="13" height="11" fill="#3C3B6E" />
      {/* Stars dot cluster */}
      <circle cx="3" cy="2.5" r="0.6" fill="#FFF" />
      <circle cx="6.5" cy="2.5" r="0.6" fill="#FFF" />
      <circle cx="10" cy="2.5" r="0.6" fill="#FFF" />
      <circle cx="4.8" cy="5" r="0.6" fill="#FFF" />
      <circle cx="8.3" cy="5" r="0.6" fill="#FFF" />
      <circle cx="3" cy="7.5" r="0.6" fill="#FFF" />
      <circle cx="6.5" cy="7.5" r="0.6" fill="#FFF" />
      <circle cx="10" cy="7.5" r="0.6" fill="#FFF" />
    </svg>
  );
}

function FlagTW() {
  return (
    <svg className="w-5 h-3.5 rounded-[3px] shadow-xs shrink-0" viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#FE0000" />
      <rect width="15" height="10" fill="#000095" />
      <circle cx="7.5" cy="5" r="2.8" fill="#FFFFFF" />
      <circle cx="7.5" cy="5" r="1.8" fill="#000095" />
      <circle cx="7.5" cy="5" r="1.3" fill="#FFFFFF" />
    </svg>
  );
}

function FlagKR() {
  return (
    <svg className="w-5 h-3.5 rounded-[3px] shadow-xs shrink-0 border border-slate-200" viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#FFFFFF" />
      <circle cx="15" cy="10" r="4.5" fill="#CD2E3A" />
      <path d="M 15 14.5 A 4.5 4.5 0 0 0 15 5.5 A 2.25 2.25 0 0 0 15 10 A 2.25 2.25 0 0 1 15 14.5" fill="#0047A0" />
      {/* Trigrams */}
      <line x1="7" y1="5" x2="9" y2="7" stroke="#000" strokeWidth="0.8" />
      <line x1="6" y1="6" x2="8" y2="8" stroke="#000" strokeWidth="0.8" />
      <line x1="21" y1="13" x2="23" y2="15" stroke="#000" strokeWidth="0.8" />
      <line x1="22" y1="12" x2="24" y2="14" stroke="#000" strokeWidth="0.8" />
    </svg>
  );
}

function FlagGB() {
  return (
    <svg className="w-5 h-3.5 rounded-[3px] shadow-xs shrink-0" viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#012169" />
      <line x1="0" y1="0" x2="30" y2="20" stroke="#FFF" strokeWidth="3" />
      <line x1="30" y1="0" x2="0" y2="20" stroke="#FFF" strokeWidth="3" />
      <line x1="0" y1="0" x2="30" y2="20" stroke="#C8102E" strokeWidth="1.5" />
      <line x1="30" y1="0" x2="0" y2="20" stroke="#C8102E" strokeWidth="1.5" />
      <line x1="15" y1="0" x2="15" y2="20" stroke="#FFF" strokeWidth="5" />
      <line x1="0" y1="10" x2="30" y2="10" stroke="#FFF" strokeWidth="5" />
      <line x1="15" y1="0" x2="15" y2="20" stroke="#C8102E" strokeWidth="3" />
      <line x1="0" y1="10" x2="30" y2="10" stroke="#C8102E" strokeWidth="3" />
    </svg>
  );
}

function FlagCD() {
  return (
    <svg className="w-5 h-3.5 rounded-[3px] shadow-xs shrink-0" viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#007FFF" />
      <polygon points="0,20 0,16 26,0 30,0 30,4 4,20" fill="#FCD116" />
      <polygon points="0,19 0,17 27,0 29,0 30,1 3,20" fill="#CE1021" />
      <polygon points="5,3 5.8,5.4 8,5.4 6.2,6.8 6.9,9 5,7.6 3.1,9 3.8,6.8 2,5.4 4.2,5.4" fill="#FCD116" />
    </svg>
  );
}

function FlagCL() {
  return (
    <svg className="w-5 h-3.5 rounded-[3px] shadow-xs shrink-0" viewBox="0 0 30 20">
      <rect width="30" height="10" fill="#FFFFFF" />
      <rect y="10" width="30" height="10" fill="#D52B1E" />
      <rect width="10" height="10" fill="#0039A6" />
      <polygon points="5,2 5.9,4.8 8.8,4.8 6.4,6.4 7.3,9.2 5,7.4 2.7,9.2 3.6,6.4 1.2,4.8 4.1,4.8" fill="#FFFFFF" />
    </svg>
  );
}

function FlagAU() {
  return (
    <svg className="w-5 h-3.5 rounded-[3px] shadow-xs shrink-0" viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#00008B" />
      <rect width="13" height="9" fill="#012169" />
      <line x1="0" y1="0" x2="13" y2="9" stroke="#FFF" strokeWidth="1.8" />
      <line x1="13" y1="0" x2="0" y2="9" stroke="#FFF" strokeWidth="1.8" />
      <line x1="0" y1="0" x2="13" y2="9" stroke="#C8102E" strokeWidth="0.8" />
      <line x1="13" y1="0" x2="0" y2="9" stroke="#C8102E" strokeWidth="0.8" />
      <line x1="6.5" y1="0" x2="6.5" y2="9" stroke="#FFF" strokeWidth="2.4" />
      <line x1="0" y1="4.5" x2="13" y2="4.5" stroke="#FFF" strokeWidth="2.4" />
      <line x1="6.5" y1="0" x2="6.5" y2="9" stroke="#C8102E" strokeWidth="1.2" />
      <line x1="0" y1="4.5" x2="13" y2="4.5" stroke="#C8102E" strokeWidth="1.2" />
      <circle cx="6.5" cy="14.5" r="1.6" fill="#FFF" />
      <circle cx="22" cy="4" r="0.8" fill="#FFF" />
      <circle cx="20" cy="8" r="0.8" fill="#FFF" />
      <circle cx="25" cy="8" r="0.8" fill="#FFF" />
      <circle cx="22" cy="12" r="0.8" fill="#FFF" />
      <circle cx="23.5" cy="10" r="0.5" fill="#FFF" />
    </svg>
  );
}

function FlagIN() {
  return (
    <svg className="w-5 h-3.5 rounded-[3px] shadow-xs shrink-0" viewBox="0 0 30 20">
      <rect width="30" height="6.6" fill="#FF9933" />
      <rect y="6.6" width="30" height="6.6" fill="#FFFFFF" />
      <rect y="13.2" width="30" height="6.8" fill="#138808" />
      <circle cx="15" cy="10" r="2.2" stroke="#000080" strokeWidth="0.5" fill="none" />
      <circle cx="15" cy="10" r="0.6" fill="#000080" />
    </svg>
  );
}

function FlagCN() {
  return (
    <svg className="w-5 h-3.5 rounded-[3px] shadow-xs shrink-0" viewBox="0 0 30 20">
      <rect width="30" height="20" fill="#EE1C25" />
      <polygon points="5,3 6,6 9,6 6.5,8 7.5,11 5,9 2.5,11 3.5,8 1,6 4,6" fill="#FFFF00" />
      <circle cx="10" cy="2.5" r="0.7" fill="#FFFF00" />
      <circle cx="12" cy="4.5" r="0.7" fill="#FFFF00" />
      <circle cx="12" cy="7.5" r="0.7" fill="#FFFF00" />
      <circle cx="10" cy="9.5" r="0.7" fill="#FFFF00" />
    </svg>
  );
}

/* ========================================================================= */
/* VECTOR CORPORATE LOGOS (LOGO CHÍNH HÃNG CHUẨN XÁC) */
/* ========================================================================= */

function LogoApple() {
  return (
    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 170 170">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-5.74-8.7-10.23-18.42-13.48-29.17-3.26-10.74-4.89-21.2-4.89-31.39 0-14.34 3.63-26.3 10.9-35.88 7.27-9.57 16.5-14.42 27.7-14.54 4.58 0 9.87 1.25 15.89 3.75 6.02 2.5 10.14 3.75 12.35 3.75 1.74 0 5.89-1.25 12.46-3.75 6.57-2.5 12.19-3.63 16.86-3.41 12.5.87 22.47 5.56 29.9 14.07-10.87 6.63-16.2 15.54-16 26.74.22 8.81 3.53 16.25 9.94 22.33 6.41 6.09 13.97 9.57 22.68 10.45-2.28 6.85-4.89 13.48-7.83 19.89zm-31.85-103.54c0-7.39 2.61-14.02 7.83-19.89 5.22-5.87 11.52-9.46 18.91-10.76.65 3.37.76 6.31.33 8.81-.65 4.35-2.45 8.81-5.38 13.37-2.93 4.57-6.74 8.04-11.41 10.43-3.26 1.74-6.68 2.72-10.27 2.93-.01-1.63-.01-3.26-.01-4.89z" />
    </svg>
  );
}

function LogoNvidia() {
  return (
    <svg className="w-4 h-3.5 fill-[#76B900] shrink-0" viewBox="0 0 100 80">
      <path d="M48.7 13.6c-17.7 0-32.2 13.5-33.8 30.7-.2 2.3.2 4.7 1.2 6.8 1.5-2.5 3.4-4.8 5.6-6.7 8.2-7 19-10.9 30.1-10.9 8.9 0 17.5 2.5 24.8 7.3 2.1-5.6 3.2-11.6 3.2-17.7 0-5.2-.8-10.3-2.5-15.1-7.8-3.4-16.5-5.3-25.6-5.3l-3 10.9zm27.8 28.3c-6.1-4.3-13.4-6.6-20.9-6.6-9.7 0-19 3.7-25.9 10.4-6.9 6.7-10.7 15.8-10.7 25.5 0 2.2.2 4.4.6 6.6 3.2.7 6.6 1.1 10.1 1.1 16.4 0 31.6-7.8 41.2-21 2.3-3.2 4.2-6.7 5.6-10.5v-5.5z" />
    </svg>
  );
}

function LogoTSMC() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="46" fill="#E11D48" />
      <circle cx="34" cy="34" r="7" fill="#FFF" />
      <circle cx="50" cy="34" r="7" fill="#FFF" />
      <circle cx="66" cy="34" r="7" fill="#FFF" />
      <circle cx="34" cy="50" r="7" fill="#FFF" />
      <circle cx="50" cy="50" r="7" fill="#FFF" />
      <circle cx="66" cy="50" r="7" fill="#FFF" />
      <circle cx="34" cy="66" r="7" fill="#FFF" />
      <circle cx="50" cy="66" r="7" fill="#FFF" />
      <circle cx="66" cy="66" r="7" fill="#FFF" />
    </svg>
  );
}

function LogoARM() {
  return (
    <span className="font-black text-[10px] tracking-tighter text-[#0091BD] font-mono">
      arm
    </span>
  );
}

function LogoGoogle() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
    </svg>
  );
}

function LogoSamsung() {
  return (
    <svg className="w-9 h-3 shrink-0" viewBox="0 0 120 40">
      <ellipse cx="60" cy="20" rx="58" ry="18" fill="#1428A0" />
      <text x="60" y="25" fill="#FFF" fontSize="14" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">
        SAMSUNG
      </text>
    </svg>
  );
}

function LogoFoxconn() {
  return (
    <span className="font-black text-[9px] tracking-tight text-[#005BAC] font-mono px-1 py-0.5 rounded bg-blue-50 border border-blue-200">
      FOXCONN
    </span>
  );
}

function LogoLuxshare() {
  return (
    <span className="font-black text-[9px] tracking-tight text-[#E85E1A] font-mono px-1 py-0.5 rounded bg-orange-50 border border-orange-200">
      LUXSHARE
    </span>
  );
}

function LogoGlencore() {
  return (
    <span className="font-black text-[9px] tracking-tight text-slate-800 font-mono px-1 py-0.5 rounded bg-slate-100 border border-slate-300">
      GLENCORE
    </span>
  );
}

function LogoCATL() {
  return (
    <span className="font-black text-[9px] tracking-tight text-[#0066B3] font-mono px-1 py-0.5 rounded bg-sky-50 border border-sky-200">
      CATL 宁德时代
    </span>
  );
}

/* ========================================================================= */
/* MAIN COMPONENT: FLOOR 2 HARDWARE TEARDOWN */
/* ========================================================================= */

export function Floor2HardwareTeardown({ charX }: Floor2HardwareTeardownProps) {
  return (
    <div className="absolute inset-0 w-full pointer-events-none select-none">
      
      {/* ========================================================================= */}
      {/* INLINE HARDWARE ANIMATIONS FOR TEARDOWN COMPONENTS (DESIGN-TASTE-FRONTEND) */}
      {/* ========================================================================= */}
      <style>{`
        @keyframes chipGlowPulse {
          0%, 100% { box-shadow: 0 0 10px rgba(16, 185, 129, 0.35); }
          50% { box-shadow: 0 0 22px rgba(16, 185, 129, 0.75); }
        }
        @keyframes laserVerticalRun {
          0% { top: 6px; opacity: 0.3; }
          50% { top: 74px; opacity: 1; }
          100% { top: 6px; opacity: 0.3; }
        }
        @keyframes glassSheenSweep {
          0% { transform: translateX(-150%) skewX(-20deg); }
          30%, 100% { transform: translateX(250%) skewX(-20deg); }
        }
        @keyframes stationGentleFloat1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes stationGentleFloat2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes cableValueDash {
          from { stroke-dashoffset: 40; }
          to { stroke-dashoffset: 0; }
        }
        .animate-chip-glow {
          animation: chipGlowPulse 2.8s ease-in-out infinite;
        }
        .animate-laser-vertical {
          animation: laserVerticalRun 2.2s ease-in-out infinite;
        }
        .animate-sheen-sweep {
          animation: glassSheenSweep 3.8s ease-in-out infinite;
        }
        .animate-station-float-1 {
          animation: stationGentleFloat1 4.2s ease-in-out infinite;
        }
        .animate-station-float-2 {
          animation: stationGentleFloat2 4.8s ease-in-out infinite 0.6s;
        }
        .animate-cable-flow {
          animation: cableValueDash 1.2s linear infinite;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* MASTER SVG CABLE PIPELINE & ELEVATION TRUSS (DÂY CÁP UỐN LƯỢN NỐI 4 TRẠM) */}
      {/* ========================================================================= */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="cableShadowF2" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* 1. Giàn treo trần Trạm 2 (Tầng cao: X = 1100 & 1380, Y: 0 -> 45) */}
        <line x1="1100" y1="0" x2="1100" y2="45" stroke="#10B981" strokeWidth="2.5" strokeDasharray="4 4" />
        <line x1="1380" y1="0" x2="1380" y2="45" stroke="#10B981" strokeWidth="2.5" strokeDasharray="4 4" />

        {/* 2. Giàn treo trần Trạm 4 (Tầng cao: X = 2740 & 3020, Y: 0 -> 45) */}
        <line x1="2740" y1="0" x2="2740" y2="45" stroke="#10B981" strokeWidth="2.5" strokeDasharray="4 4" />
        <line x1="3020" y1="0" x2="3020" y2="45" stroke="#10B981" strokeWidth="2.5" strokeDasharray="4 4" />

        {/* 3. Cột trụ cơ khí đỡ sàn Trạm 1 (Tầng thấp: X = 320 & 580, Y: 518 -> 600) */}
        <line x1="320" y1="518" x2="320" y2="600" stroke="#94A3B8" strokeWidth="3" strokeDasharray="6 4" />
        <line x1="580" y1="518" x2="580" y2="600" stroke="#94A3B8" strokeWidth="3" strokeDasharray="6 4" />

        {/* 4. Cột trụ cơ khí đỡ sàn Trạm 3 (Tầng thấp: X = 1940 & 2200, Y: 518 -> 600) */}
        <line x1="1940" y1="518" x2="1940" y2="600" stroke="#94A3B8" strokeWidth="3" strokeDasharray="6 4" />
        <line x1="2200" y1="518" x2="2200" y2="600" stroke="#94A3B8" strokeWidth="3" strokeDasharray="6 4" />

        {/* Đoạn cáp nối từ Cổng vào Trạm 1 */}
        <path d="M 60 340 L 160 340" stroke="#94A3B8" strokeWidth="3.5" strokeLinecap="round" filter="url(#cableShadowF2)" />

        {/* Đoạn 1: Từ Trạm 1 (X: 700, Y: 340) VÚT LÊN Trạm 2 (X: 940, Y: 180) */}
        <path d="M 700 340 C 780 340, 850 180, 940 180" stroke="#10B981" strokeWidth="3.5" fill="none" strokeLinecap="round" filter="url(#cableShadowF2)" />
        <path d="M 700 340 C 780 340, 850 180, 940 180" stroke="#6EE7B7" strokeWidth="2.5" fill="none" strokeDasharray="8 12" className="animate-cable-flow" />

        {/* Đoạn 2: Từ Trạm 2 (X: 1520, Y: 180) ĐỔ DỐC XUỐNG Trạm 3 (X: 1780, Y: 340) */}
        <path d="M 1520 180 C 1600 180, 1690 340, 1780 340" stroke="#94A3B8" strokeWidth="3" fill="none" strokeDasharray="6 4" filter="url(#cableShadowF2)" />

        {/* Đoạn 3: Từ Trạm 3 (X: 2330, Y: 340) VÚT LÊN Trạm 4 (X: 2580, Y: 180) */}
        <path d="M 2330 340 C 2410 340, 2490 180, 2580 180" stroke="#10B981" strokeWidth="3.5" fill="none" strokeLinecap="round" filter="url(#cableShadowF2)" />
        <path d="M 2330 340 C 2410 340, 2490 180, 2580 180" stroke="#6EE7B7" strokeWidth="2.5" fill="none" strokeDasharray="8 12" className="animate-cable-flow" />

        {/* (Đoạn 4 nối từ Trạm 4 sang Cửa đã được xoá bỏ theo yêu cầu để giao diện thanh thoát, không thừa thãi) */}
      </svg>

      {/* ========================================================================= */}
      {/* THƯỚC ĐO PHÂN TẦNG VỊ THẾ KINH TẾ (ALTITUDE INDICATOR - GÓC TRÁI TRẦN) */}
      {/* ========================================================================= */}
      <div
        style={{ left: "120px", top: "18px" }}
        className="absolute pointer-events-auto flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/95 border-2 border-emerald-300 shadow-sm backdrop-blur-md z-20"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <div className="flex flex-col">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-800">
            <span>QUY LUẬT ĐỘ CAO GIÁ TRỊ TOÀN CẦU</span>
            <div className="group relative inline-flex items-center">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-600 cursor-help" />
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full mt-2 w-72 p-3.5 bg-white text-slate-800 border-2 border-slate-900 rounded-xl shadow-xl text-xs z-50 font-sans pointer-events-none leading-relaxed">
                <span className="font-bold text-emerald-700 block mb-1">Quy luật Cao độ:</span>
                Các công đoạn nắm thặng dư cao (~60%, ~33%) ngự trị ở trên cao vút (Màu xanh lá). Các khâu bán quặng thô và gia công lắp ráp (&lt;2%, ~4%) lọt thỏm ở phía dưới sàn (Màu xám).
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-mono mt-0.5">
            <span className="text-emerald-700 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> TRÊN CAO: TỶ TRỌNG CAO (~33% - 60%)
            </span>
            <span className="text-slate-500 font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-400" /> DƯỚI THẤP: TỶ TRỌNG THẤP (&lt;2% - 4%)
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TRẠM 01: KHAI THÁC KHOÁNG SẢN & PIN THÔ (TẦNG THẤP - MÀU XÁM) */}
      {/* ========================================================================= */}
      <div
        style={{ left: "160px", top: "128px" }}
        className="absolute pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 border border-slate-300 shadow-2xs backdrop-blur-xs z-20"
      >
        <span className="w-2 h-2 rounded-full bg-slate-400" />
        <span className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider">
          TRẠM 01 &bull; LỚP ĐÁY PHẦN CỨNG (ĐỘ CAO: DƯỚI THẤP)
        </span>
        <span className="text-slate-300">|</span>
        <span className="text-[11px] font-mono font-semibold text-slate-400">KM 0.8</span>
      </div>

      <div
        style={{ left: "160px", top: "168px" }}
        className={cn(
          "absolute pointer-events-auto w-[540px] h-[350px] transition-all duration-300 z-20",
          Math.abs(charX - 430) < 280 && "scale-[1.01] -translate-y-1"
        )}
      >
        <div className="w-full h-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-slate-300 shadow-md p-5 flex flex-col justify-between">
          
          {/* Header Stats */}
          <div className="flex items-start justify-between border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                01. KHAI THÁC KHOÁNG SẢN & PIN
              </span>
              <h3 className="font-heading font-black text-xl text-slate-700 mt-0.5">
                Khung Nhôm & Cell Pin Lithium
              </h3>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-mono text-slate-400 font-bold block">TỶ TRỌNG GIÁ TRỊ</span>
              <span className="text-3xl font-black font-mono text-slate-400 leading-none">
                &lt; 2.0%
              </span>
            </div>
          </div>

          {/* Center Teardown Visual & Data Grid */}
          <div className="grid grid-cols-12 gap-3.5 items-center my-auto">
            {/* 3D Hardware Teardown Tray */}
            <div className="col-span-4 rounded-2xl bg-slate-50 border-2 border-slate-200 p-2.5 flex flex-col items-center justify-center shadow-inner relative overflow-hidden group hover:border-slate-300 transition-colors">
              <div className="w-16 h-22 rounded-lg bg-slate-200/90 border-2 border-slate-400 flex flex-col justify-between p-1.5 shadow-2xs relative overflow-hidden">
                <div className="w-5 h-1 bg-slate-400 mx-auto rounded-t" />
                <div className="flex items-center justify-between text-[7px] font-mono text-slate-500 font-bold px-0.5">
                  <span>5000mAh</span>
                  <span className="w-1 h-1 rounded-full bg-slate-400 animate-ping" />
                </div>
                {/* Animated Battery Charging Level */}
                <div className="w-full h-7 rounded bg-slate-300/80 border border-slate-400/40 flex flex-col justify-center px-1 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-slate-400/40 via-emerald-400/30 to-slate-400/40 w-[60%] rounded animate-pulse" />
                  <div className="relative z-10 flex items-center justify-between text-[8px] font-mono text-slate-700 font-bold">
                    <span>Li-ion</span>
                    <span className="text-[7px] text-slate-500 font-mono">&lt;2%</span>
                  </div>
                </div>
                <div className="text-[8px] font-mono text-slate-500 text-center font-medium">Cobalt 🇨🇩</div>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" />
                <span className="text-[9px] font-mono text-slate-500 font-semibold">Khung Pin & Cell Thô</span>
              </div>
            </div>

            {/* Metric & Theory Box */}
            <div className="col-span-8 space-y-2.5">
              <div className="flex items-center justify-between bg-slate-100/70 p-2.5 rounded-xl border border-slate-200">
                <span className="text-xs font-mono text-slate-600 font-semibold">Giá trị thực tế / máy:</span>
                <span className="text-base font-bold font-mono text-slate-600">$15 - $20 USD</span>
              </div>

              {/* Theory Concept with Tooltip */}
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  <span>Tư bản bất biến (c)</span>
                  <div className="group relative inline-flex items-center">
                    <HelpCircle className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                    <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute left-0 bottom-full mb-2 w-64 p-3 bg-white text-slate-800 border-2 border-slate-900 rounded-xl shadow-xl text-[11px] z-50 font-sans pointer-events-none leading-relaxed">
                      <span className="font-bold text-slate-900 font-mono block mb-1">Tư bản bất biến (c):</span>
                      Khoáng sản thô chỉ chuyển dịch dần giá trị cũ của nó vào sản phẩm, bản thân chúng không tự sinh ra thêm một đồng giá trị thặng dư nào mới.
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-slate-200 text-[10px] font-mono text-slate-600 font-bold">
                  Vị thế: Thấp
                </span>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                Khai thác khoáng sản khắc nghiệt tại Châu Phi nhưng giá trị thô ở đầu nguồn chỉ chiếm phần cực nhỏ.
              </p>
            </div>
          </div>

          {/* Footer Countries & Mining Brands with Real Vector Flags and Logos */}
          <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-1 rounded-lg bg-slate-50 text-[11px] font-sans text-slate-700 border border-slate-200 font-semibold flex items-center gap-1.5 shadow-2xs">
                <FlagCD />
                <span>CHDC Congo</span>
              </span>
              <span className="px-2 py-1 rounded-lg bg-slate-50 text-[11px] font-sans text-slate-700 border border-slate-200 font-semibold flex items-center gap-1.5 shadow-2xs">
                <FlagCL />
                <span>Chile</span>
              </span>
              <span className="px-2 py-1 rounded-lg bg-slate-50 text-[11px] font-sans text-slate-700 border border-slate-200 font-semibold flex items-center gap-1.5 shadow-2xs">
                <FlagAU />
                <span>Australia</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[9px] text-slate-400 font-bold">
              <LogoGlencore />
              <LogoCATL />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TRẠM 02: ĐẦU NÃO R&D & CHIP 3NM TSMC (TẦNG CAO - MÀU XANH LÁ) */}
      {/* ========================================================================= */}
      <div
        style={{ left: "940px", top: "10px" }}
        className="absolute pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-300 shadow-2xs backdrop-blur-xs z-20"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span className="font-mono text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
          TRẠM 02 &bull; ĐẦU NÃO R&D & BÁN DẪN (ĐỘ CAO: TRÊN CAO)
        </span>
        <span className="text-emerald-300">|</span>
        <span className="text-[11px] font-mono font-bold text-emerald-600">KM 1.5</span>
      </div>

      <div
        style={{ left: "940px", top: "45px" }}
        className={cn(
          "absolute pointer-events-auto w-[580px] h-[390px] transition-all duration-300 z-20 animate-station-float-1",
          Math.abs(charX - 1230) < 280 && "scale-[1.01] -translate-y-1 shadow-emerald-500/20"
        )}
      >
        <div className="w-full h-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-emerald-400 shadow-xl p-5 flex flex-col justify-between shadow-emerald-500/10">
          
          {/* Header Stats */}
          <div className="flex items-start justify-between border-b border-emerald-100 pb-3">
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wider block">
                02. BẢN QUYỀN IP & BÁN DẪN
              </span>
              <h3 className="font-heading font-black text-xl text-slate-800 mt-0.5">
                Thiết Kế R&D & Chip 3nm TSMC
              </h3>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-mono text-emerald-600 font-bold block">TỶ TRỌNG GIÁ TRỊ</span>
              <span className="text-3xl font-black font-mono text-emerald-600 leading-none">
                ~60.0%
              </span>
            </div>
          </div>

          {/* Center Teardown Visual & Data Grid */}
          <div className="grid grid-cols-12 gap-3.5 items-center my-auto">
            {/* 3D Hardware Teardown Tray: Gold PCB & 3nm SoC with Bus Pulse */}
            <div className="col-span-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-slate-50 border-2 border-emerald-300 p-2.5 flex flex-col items-center justify-center shadow-inner relative overflow-hidden group hover:border-emerald-400 transition-colors">
              <div className="w-18 h-24 rounded-lg bg-emerald-50 p-1 flex flex-col items-center justify-center border-2 border-emerald-600 shadow-xs relative">
                {/* 4 Animated Bus Lines pulsing outward */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-emerald-600 animate-pulse" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-emerald-600 animate-pulse" />
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-emerald-600 animate-pulse" />
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-emerald-600 animate-pulse" />

                {/* 3nm Central Chip with breathing green halo */}
                <div className="w-12 h-12 bg-white rounded border-2 border-emerald-600 flex flex-col items-center justify-center shadow-xs animate-chip-glow relative overflow-hidden">
                  <span className="text-[7px] font-mono text-emerald-700 font-bold tracking-tighter">3nm SoC</span>
                  <span className="text-[10px] font-black text-slate-900 font-mono tracking-tight">TSMC</span>
                  <span className="text-[6px] font-mono text-emerald-600 font-semibold">ARM core</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[9px] font-mono text-emerald-700 font-bold">3.8 GHz • FinFET</span>
              </div>
            </div>

            {/* Metric & Theory Box */}
            <div className="col-span-8 space-y-2.5">
              <div className="flex items-center justify-between bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                <span className="text-xs font-mono text-emerald-800 font-bold">Thặng dư R&D & Chip / máy:</span>
                <span className="text-base font-black font-mono text-emerald-700">$340 USD</span>
              </div>

              {/* Theory Concept with Tooltip */}
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <span>Lao động phức tạp & Thặng dư siêu ngạch</span>
                  <div className="group relative inline-flex items-center">
                    <HelpCircle className="w-3.5 h-3.5 text-emerald-600 cursor-help" />
                    <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full mt-2 w-72 p-3.5 bg-white text-slate-800 border-2 border-slate-900 rounded-xl shadow-xl text-[11px] z-50 font-sans pointer-events-none leading-relaxed">
                      <span className="font-bold text-emerald-700 font-mono block mb-1">Lao động phức tạp:</span>
                      Lao động trí tuệ của kỹ sư vi mạch là lao động giản đơn được nhân bội. Nhờ độc quyền công nghệ nguồn và bằng sáng chế, họ thu trọn giá trị thặng dư siêu ngạch từ toàn thế giới.
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-[10px] font-mono text-emerald-800 font-bold">
                  Độc quyền nhóm
                </span>
              </div>

              <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                Nút thắt cổ chai địa chính trị: Kiến trúc ARM (Anh), thiết kế vi mạch (Mỹ), quang khắc cực tím EUV (Đài Loan).
              </p>
            </div>
          </div>

          {/* Footer Countries & Real Tech Giants Logos */}
          <div className="pt-2.5 border-t border-emerald-100 flex items-center justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-1 rounded-lg bg-emerald-50 text-[11px] font-sans text-emerald-900 border border-emerald-200 font-bold flex items-center gap-1.5 shadow-2xs">
                <FlagUS />
                <span>Mỹ</span>
              </span>
              <span className="px-2 py-1 rounded-lg bg-emerald-50 text-[11px] font-sans text-emerald-900 border border-emerald-200 font-bold flex items-center gap-1.5 shadow-2xs">
                <FlagTW />
                <span>Đài Loan</span>
              </span>
              <span className="px-2 py-1 rounded-lg bg-emerald-50 text-[11px] font-sans text-emerald-900 border border-emerald-200 font-bold flex items-center gap-1.5 shadow-2xs">
                <FlagKR />
                <span>Hàn Quốc</span>
              </span>
              <span className="px-2 py-1 rounded-lg bg-emerald-50 text-[11px] font-sans text-emerald-900 border border-emerald-200 font-bold flex items-center gap-1.5 shadow-2xs">
                <FlagGB />
                <span>Anh</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-800">
              <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white border border-slate-800 text-slate-900 text-[10px] font-bold shadow-2xs">
                <LogoApple />
                <span>Apple</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white border border-slate-800 text-slate-900 text-[10px] font-bold shadow-2xs">
                <LogoTSMC />
                <span>TSMC</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white border border-slate-800 text-slate-900 text-[10px] font-bold shadow-2xs">
                <LogoNvidia />
                <span className="text-emerald-700">NVIDIA</span>
              </div>
              <div className="flex items-center px-2 py-1 rounded-lg bg-sky-50 border border-sky-200 shadow-2xs">
                <LogoARM />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TRẠM 03: GIA CÔNG LẮP RÁP TẠI VIỆT NAM (TẦNG THẤP - MÀU XÁM) */}
      {/* ========================================================================= */}
      <div
        style={{ left: "1780px", top: "128px" }}
        className="absolute pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 border border-slate-300 shadow-2xs backdrop-blur-xs z-20"
      >
        <span className="w-2 h-2 rounded-full bg-slate-400" />
        <span className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider">
          TRẠM 03 &bull; GIA CÔNG LẮP RÁP (ĐỘ CAO: DƯỚI THẤP)
        </span>
        <span className="text-slate-300">|</span>
        <span className="text-[11px] font-mono font-semibold text-slate-400">KM 2.2</span>
      </div>

      <div
        style={{ left: "1780px", top: "168px" }}
        className={cn(
          "absolute pointer-events-auto w-[550px] h-[350px] transition-all duration-300 z-20",
          Math.abs(charX - 2055) < 280 && "scale-[1.01] -translate-y-1"
        )}
      >
        <div className="w-full h-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-slate-300 shadow-md p-5 flex flex-col justify-between">
          
          {/* Header Stats */}
          <div className="flex items-start justify-between border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                03. GIA CÔNG & LẮP RÁP HOÀN THIỆN
              </span>
              <h3 className="font-heading font-black text-xl text-slate-700 mt-0.5">
                Nhà Máy Phòng Sạch Việt Nam
              </h3>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-mono text-slate-400 font-bold block">TỶ TRỌNG GIÁ TRỊ</span>
              <span className="text-3xl font-black font-mono text-slate-400 leading-none">
                ~4.0%
              </span>
            </div>
          </div>

          {/* Center Teardown Visual & Data Grid */}
          <div className="grid grid-cols-12 gap-3.5 items-center my-auto">
            {/* 3D Hardware Teardown Tray: Cleanroom Assembly Chassis with AOI Laser Scanner */}
            <div className="col-span-4 rounded-2xl bg-slate-50 border-2 border-slate-200 p-2.5 flex flex-col items-center justify-center shadow-inner relative overflow-hidden group hover:border-slate-300 transition-colors">
              <div className="w-16 h-22 rounded-lg bg-slate-200/90 border-2 border-slate-400 p-1 flex flex-col items-center justify-between shadow-2xs relative overflow-hidden">
                {/* Cleanroom AOI Laser Scan Beam traversing vertically */}
                <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#22D3EE] animate-laser-vertical pointer-events-none z-10" />

                <span className="text-[8px] font-mono text-slate-600 font-bold">MADE IN VN</span>
                <div className="w-9 h-9 border border-dashed border-red-400/80 bg-red-50/60 rounded flex items-center justify-center shadow-2xs">
                  <FlagVN />
                </div>
                <div className="flex items-center gap-1 text-[7px] font-mono text-slate-500 font-semibold">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  <span>QC Cleanroom</span>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" />
                <span className="text-[9px] font-mono text-slate-600 font-bold">400.000+ Công Nhân</span>
              </div>
            </div>

            {/* Metric & Theory Box */}
            <div className="col-span-8 space-y-2.5">
              <div className="flex items-center justify-between bg-slate-100/70 p-2.5 rounded-xl border border-slate-200">
                <span className="text-xs font-mono text-slate-600 font-semibold">Công lắp ráp / máy:</span>
                <span className="text-base font-bold font-mono text-slate-600">$20 - $28 USD</span>
              </div>

              {/* Theory Concept with Tooltip */}
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  <span>Lao động sống (v) & Đáy chuỗi</span>
                  <div className="group relative inline-flex items-center">
                    <HelpCircle className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                    <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute left-0 bottom-full mb-2 w-64 p-3 bg-white text-slate-800 border-2 border-slate-900 rounded-xl shadow-xl text-[11px] z-50 font-sans pointer-events-none leading-relaxed">
                      <span className="font-bold text-slate-900 font-mono block mb-1">Lao động sống (v):</span>
                      Công nhân trực tiếp nhào nặn ra sản phẩm nhưng tiền lương nhận về chỉ đủ bù đắp tư liệu sinh hoạt thiết yếu. Thặng dư chuyển ngược về tập đoàn đặt hàng.
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-slate-200 text-[10px] font-mono text-slate-600 font-bold">
                  Biên lãi: 2-3.5%
                </span>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
                Việt Nam đóng góp bàn tay khéo léo và kỷ luật cao, nhưng giá trị giữ lại tại chỗ chỉ chiếm tỷ lệ rất nhỏ.
              </p>
            </div>
          </div>

          {/* Footer Countries & Real EMS Assembly Brands */}
          <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded-lg bg-red-50 text-[11px] font-sans text-red-900 border border-red-200 font-bold flex items-center gap-1.5 shadow-2xs">
                <FlagVN />
                <span>Việt Nam</span>
              </span>
              <span className="px-2 py-1 rounded-lg bg-slate-50 text-[11px] font-sans text-slate-700 border border-slate-200 font-semibold flex items-center gap-1.5 shadow-2xs">
                <FlagIN />
                <span>Ấn Độ</span>
              </span>
              <span className="px-2 py-1 rounded-lg bg-slate-50 text-[11px] font-sans text-slate-700 border border-slate-200 font-semibold flex items-center gap-1.5 shadow-2xs">
                <FlagCN />
                <span>Trung Quốc</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold">
              <LogoFoxconn />
              <LogoLuxshare />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TRẠM 04: THƯƠNG HIỆU & HỆ ĐIỀU HÀNH (TẦNG CAO - MÀU XANH LÁ) */}
      {/* ========================================================================= */}
      <div
        style={{ left: "2580px", top: "10px" }}
        className="absolute pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-300 shadow-2xs backdrop-blur-xs z-20"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span className="font-mono text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
          TRẠM 04 &bull; THƯƠNG HIỆU & HỆ ĐIỀU HÀNH (ĐỘ CAO: TRÊN CAO)
        </span>
        <span className="text-emerald-300">|</span>
        <span className="text-[11px] font-mono font-bold text-emerald-600">KM 2.9</span>
      </div>

      <div
        style={{ left: "2580px", top: "45px" }}
        className={cn(
          "absolute pointer-events-auto w-[580px] h-[390px] transition-all duration-300 z-20 animate-station-float-2",
          Math.abs(charX - 2870) < 280 && "scale-[1.01] -translate-y-1 shadow-emerald-500/20"
        )}
      >
        <div className="w-full h-full bg-white/95 backdrop-blur-md rounded-3xl border-2 border-emerald-400 shadow-xl p-5 flex flex-col justify-between shadow-emerald-500/10">
          
          {/* Header Stats */}
          <div className="flex items-start justify-between border-b border-emerald-100 pb-3">
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wider block">
                04. THƯƠNG HIỆU & NỀN TẢNG SỐ
              </span>
              <h3 className="font-heading font-black text-xl text-slate-800 mt-0.5">
                Màn Hình OLED & Hệ Sinh Thái OS
              </h3>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-mono text-emerald-600 font-bold block">TỶ TRỌNG GIÁ TRỊ</span>
              <span className="text-3xl font-black font-mono text-emerald-600 leading-none">
                ~33.0%
              </span>
            </div>
          </div>

          {/* Center Teardown Visual & Data Grid */}
          <div className="grid grid-cols-12 gap-3.5 items-center my-auto">
            {/* 3D Hardware Teardown Tray: OLED Screen & OS UI with Glass Sheen Sweep */}
            <div className="col-span-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-slate-50 border-2 border-emerald-300 p-2.5 flex flex-col items-center justify-center shadow-inner relative overflow-hidden group hover:border-emerald-400 transition-colors">
              <div className="w-18 h-24 rounded-lg bg-white p-1.5 flex flex-col justify-between border-2 border-slate-900 shadow-sm relative overflow-hidden">
                {/* Diagonal glass reflection sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/40 to-transparent -translate-x-full animate-sheen-sweep pointer-events-none" />

                <div className="w-6 h-1 bg-slate-300 border border-slate-400 mx-auto rounded" />
                <div className="text-center relative z-10">
                  <span className="text-[8px] font-black text-emerald-700 font-mono block tracking-tight">iOS / Cloud</span>
                  <span className="text-[6px] text-slate-500 font-mono font-medium">App Store &bull; Pay</span>
                </div>
                <div className="text-[7px] font-mono text-center text-emerald-800 font-bold bg-emerald-50 rounded py-0.5 border border-emerald-300">
                  $1,000 Retail
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-mono text-emerald-700 font-bold">Màn Hình & Nền Tảng</span>
              </div>
            </div>

            {/* Metric & Theory Box */}
            <div className="col-span-8 space-y-2.5">
              <div className="flex items-center justify-between bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                <span className="text-xs font-mono text-emerald-800 font-bold">Thặng dư thương hiệu / máy:</span>
                <span className="text-base font-black font-mono text-emerald-700 flex items-center gap-1.5">
                  <span>$330 USD</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </span>
              </div>

              {/* Theory Concept with Tooltip */}
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <span>Lead Firms & Bước nhảy H' → T'</span>
                  <div className="group relative inline-flex items-center">
                    <HelpCircle className="w-3.5 h-3.5 text-emerald-600 cursor-help" />
                    <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute left-0 top-full mt-2 w-72 p-3.5 bg-white text-slate-800 border-2 border-slate-900 rounded-xl shadow-xl text-[11px] z-50 font-sans pointer-events-none leading-relaxed">
                      <span className="font-bold text-emerald-700 font-mono block mb-1">Lead Firms là gì?</span>
                      Doanh nghiệp đầu đàn nắm quyền lực thương hiệu và kênh phân phối toàn cầu, thu hồi toàn bộ giá trị thặng dư khi hàng hóa chuyển hóa thành tiền tệ (H' &rarr; T').
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-[10px] font-mono text-emerald-800 font-bold">
                  Quyền tối cao
                </span>
              </div>

              <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                Thương hiệu và hệ sinh thái phần mềm biến một thiết bị vật lý thành cỗ máy thu tiền định kỳ qua iCloud và App Store.
              </p>
            </div>
          </div>

          {/* Footer Countries & Real Mega Ecosystem Brands Logos */}
          <div className="pt-2.5 border-t border-emerald-100 flex items-center justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-1 rounded-lg bg-emerald-50 text-[11px] font-sans text-emerald-900 border border-emerald-200 font-bold flex items-center gap-1.5 shadow-2xs">
                <FlagUS />
                <span>Hoa Kỳ</span>
              </span>
              <span className="px-2 py-1 rounded-lg bg-emerald-50 text-[11px] font-sans text-emerald-900 border border-emerald-200 font-bold flex items-center gap-1.5 shadow-2xs">
                <FlagKR />
                <span>Hàn Quốc</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-800 text-slate-900 text-[10px] font-bold shadow-2xs">
                <LogoApple />
                <span>Apple Store</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs text-[10px] font-bold text-slate-800">
                <LogoGoogle />
                <span>Google Play</span>
              </div>
              <LogoSamsung />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
