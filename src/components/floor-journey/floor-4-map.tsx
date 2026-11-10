"use client";

import * as React from "react";
import { WORLD_MAP_PATHS } from "./world-map-data";
import { cn } from "@/lib/utils";

interface RealisticGVCMapProps {
  activeHubKey: string;
  setActiveHubKey: (key: string) => void;
  activeLayer: "production" | "value" | "ownership" | "consumer";
}

const HUB_LOCATIONS: Record<
  string,
  {
    x: number;
    y: number;
    flag: string;
    label: string;
    sublabel: string;
    latLng: string;
    cluster: string;
    color: string;
  }
> = {
  usa: {
    x: 152,
    y: 194,
    flag: "🇺🇸",
    label: "SILICON VALLEY",
    sublabel: "38% Thặng Dư IP",
    latLng: "37°23'N 122°05'W",
    cluster: "R&D & BẢN QUYỀN TRÍ TUỆ ĐỘC QUYỀN",
    color: "#0284C7",
  },
  europe: {
    x: 468,
    y: 168,
    flag: "🇳🇱/🇬🇧",
    label: "ASML & ARM",
    sublabel: "Máy EUV & ISA",
    latLng: "51°25'N 05°24'E",
    cluster: "ĐỘC QUYỀN CÔNG NGHỆ THƯỢNG NGUỒN (c)",
    color: "#10B981",
  },
  taiwan: {
    x: 786,
    y: 252,
    flag: "🇹🇼",
    label: "TSMC FAB 18",
    sublabel: "Đúc Chip 3nm (19%)",
    latLng: "24°46'N 121°00'E",
    cluster: "XƯỞNG ĐÚC NANO SIÊU TINH KHIẾT",
    color: "#D97706",
  },
  vietnam: {
    x: 742,
    y: 278,
    flag: "🇻🇳",
    label: "BẮC NINH / THÁI NGUYÊN",
    sublabel: "2.8% Tiền Công v",
    latLng: "21°11'N 106°03'E",
    cluster: "ĐẠI CÔNG XƯỞNG LẮP RÁP TOÀN CẦU",
    color: "#DC2626",
  },
  congo: {
    x: 502,
    y: 338,
    flag: "🇨🇩",
    label: "MỎ COBALT KATANGA",
    sublabel: "< 1.5% Giá Trị Thô",
    latLng: "11°40'S 27°28'E",
    cluster: "KHAI THÁC KHOÁNG SẢN VÙNG NGOẠI VI",
    color: "#64748B",
  },
};

export function RealisticGVCMap({
  activeHubKey,
  setActiveHubKey,
  activeLayer,
}: RealisticGVCMapProps) {
  const [hoveredCountry, setHoveredCountry] = React.useState<string | null>(null);

  const currentHubCoord = HUB_LOCATIONS[activeHubKey] || HUB_LOCATIONS.vietnam;

  // Determine country styling based on active geopolitical layer
  const getCountryStyle = (id: string) => {
    const isHovered = hoveredCountry === id;

    if (activeLayer === "production") {
      if (id === "vietnam") {
        return {
          fill: "#FEE2E2",
          stroke: "#EF4444",
          strokeWidth: 2,
          filter: "drop-shadow(0 0 4px rgba(239,68,68,0.5))",
        };
      }
      if (id === "taiwan") {
        return {
          fill: "#FEF3C7",
          stroke: "#F59E0B",
          strokeWidth: 2.2,
          filter: "drop-shadow(0 0 4px rgba(245,158,11,0.5))",
        };
      }
      if (id === "netherlands") {
        return {
          fill: "#D1FAE5",
          stroke: "#10B981",
          strokeWidth: 2,
        };
      }
      if (id === "china") {
        return {
          fill: "#FEF9C3",
          stroke: "#EAB308",
          strokeWidth: 1.2,
        };
      }
      if (id === "usa") {
        return {
          fill: "#E0F2FE",
          stroke: "#0284C7",
          strokeWidth: 1.2,
        };
      }
      if (id === "south korea") {
        return {
          fill: "#DCFCE7",
          stroke: "#22C55E",
          strokeWidth: 1.5,
        };
      }
      if (["honshu", "kyushu", "hokkaido", "shikoku"].includes(id)) {
        return {
          fill: "#F1F5F9",
          stroke: "#64748B",
          strokeWidth: 1.2,
        };
      }
    }

    if (activeLayer === "value") {
      if (id === "usa") {
        return {
          fill: "#BAE6FD",
          stroke: "#0284C7",
          strokeWidth: 2.5,
          filter: "drop-shadow(0 0 6px rgba(2,132,199,0.45))",
        };
      }
      if (id === "britain") {
        return {
          fill: "#BAE6FD",
          stroke: "#0284C7",
          strokeWidth: 2.5,
        };
      }
      if (id === "netherlands") {
        return {
          fill: "#A7F3D0",
          stroke: "#059669",
          strokeWidth: 2.2,
        };
      }
      if (id === "taiwan") {
        return {
          fill: "#FEF3C7",
          stroke: "#D97706",
          strokeWidth: 1.5,
        };
      }
      if (["vietnam", "china"].includes(id)) {
        return {
          fill: "#F1F5F9",
          stroke: "#94A3B8",
          strokeWidth: 0.8,
        };
      }
    }

    if (activeLayer === "ownership") {
      if (id === "usa") {
        return {
          fill: "#FED7AA",
          stroke: "#EA580C",
          strokeWidth: 2.5,
          filter: "drop-shadow(0 0 6px rgba(234,88,12,0.4))",
        };
      }
      if (id === "south korea") {
        return {
          fill: "#FED7AA",
          stroke: "#EA580C",
          strokeWidth: 2,
        };
      }
      if (["honshu", "kyushu", "hokkaido", "shikoku"].includes(id)) {
        return {
          fill: "#FED7AA",
          stroke: "#EA580C",
          strokeWidth: 1.5,
        };
      }
    }

    if (activeLayer === "consumer") {
      if (["usa", "canada"].includes(id)) {
        return {
          fill: "#BBF7D0",
          stroke: "#16A34A",
          strokeWidth: 1.8,
        };
      }
      if (["germany", "france", "britain", "netherlands", "italy", "spain"].includes(id)) {
        return {
          fill: "#BBF7D0",
          stroke: "#16A34A",
          strokeWidth: 1.8,
        };
      }
      if (["china", "honshu", "kyushu", "hokkaido", "vietnam"].includes(id)) {
        return {
          fill: "#DCFCE7",
          stroke: "#16A34A",
          strokeWidth: 1.2,
        };
      }
    }

    return {
      fill: isHovered ? "#F1F5F9" : "#FFFFFF",
      stroke: isHovered ? "#334155" : "#94A3B8",
      strokeWidth: isHovered ? 1.4 : 0.85,
    };
  };

  return (
    <div className="relative w-full h-[340px] rounded-3xl bg-white border-2 border-slate-900 shadow-xl overflow-hidden flex flex-col justify-between">
      
      {/* ========================================================================= */}
      {/* 1. TOP TELEMETRY HUD BAR */}
      {/* ========================================================================= */}
      <div className="relative z-10 flex items-center justify-between px-4 py-2 bg-white/95 backdrop-blur-md border-b border-slate-200 text-[10px] font-mono text-slate-800">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
          </span>
          <span className="font-bold text-emerald-700 tracking-wider">
            LIVE GIS TELEMETRY // WGS-84
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600">
            {currentHubCoord.latLng} &bull; <strong className="text-slate-900">{currentHubCoord.label}</strong>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-500 hidden sm:inline">
            {currentHubCoord.cluster}
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 text-sky-700 font-bold border border-slate-300">
            N 🧭 00°
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. REALISTIC WORLD MAP SVG CANVAS */}
      {/* ========================================================================= */}
      <div className="relative w-full flex-1 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="40 70 870 410"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Crisp Editorial Ocean Cartography Gradient */}
            <linearGradient id="gisOceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="50%" stopColor="#F0F9FF" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>

            {/* Glowing Node Radial Gradients */}
            <radialGradient id="gisSkyGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="gisEmeraldGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="gisAmberGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="gisRedGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F87171" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ocean Background */}
          <rect x="0" y="0" width="950" height="620" fill="url(#gisOceanGradient)" />

          {/* Subtle Nautical Graticule Lines (Kinh tuyến & Vĩ tuyến thực tế) */}
          <g stroke="#CBD5E1" strokeWidth="0.75" strokeDasharray="3 4">
            {/* Equator (Xích Đạo) */}
            <line x1="40" y1="280" x2="910" y2="280" stroke="#94A3B8" strokeWidth="1" strokeDasharray="6 4" />
            <text x="50" y="276" fill="#64748B" fontSize="7" fontFamily="'JetBrains Mono'">0° EQUATOR</text>

            {/* Tropic of Cancer (Chí tuyến Bắc) */}
            <line x1="40" y1="200" x2="910" y2="200" stroke="#CBD5E1" strokeDasharray="4 4" />
            <text x="50" y="196" fill="#64748B" fontSize="6.5" fontFamily="'JetBrains Mono'">23.5°N TROPIC OF CANCER</text>

            {/* Tropic of Capricorn (Chí tuyến Nam) */}
            <line x1="40" y1="360" x2="910" y2="360" stroke="#CBD5E1" strokeDasharray="4 4" />
            <text x="50" y="356" fill="#64748B" fontSize="6.5" fontFamily="'JetBrains Mono'">23.5°S TROPIC OF CAPRICORN</text>

            {/* Meridians */}
            <line x1="445" y1="70" x2="445" y2="480" stroke="#94A3B8" strokeWidth="1" strokeDasharray="6 4" />
            <text x="448" y="85" fill="#64748B" fontSize="6.5" fontFamily="'JetBrains Mono'">0° GREENWICH</text>
            <line x1="140" y1="70" x2="140" y2="480" />
            <line x1="240" y1="70" x2="240" y2="480" />
            <line x1="645" y1="70" x2="645" y2="480" />
            <line x1="785" y1="70" x2="785" y2="480" />
          </g>

          {/* ========================================================================= */}
          {/* REAL GEOGRAPHICAL LANDMASS PATHS (340 EXACT COUNTRIES & ISLANDS) */}
          {/* ========================================================================= */}
          <g>
            {WORLD_MAP_PATHS.map((item, idx) => {
              const style = getCountryStyle(item.id);
              return (
                <path
                  key={`${item.id}-${idx}`}
                  d={item.d}
                  fill={style.fill}
                  stroke={style.stroke}
                  strokeWidth={style.strokeWidth}
                  style={{
                    filter: style.filter,
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={() => setHoveredCountry(item.id)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  className="cursor-pointer"
                >
                  <title>{item.id ? item.id.toUpperCase() : "Territory"}</title>
                </path>
              );
            })}
          </g>

          {/* ========================================================================= */}
          {/* GEOPOLITICAL LOGISTICS ARCS & SUBSEA CABLES (GREAT-CIRCLE ROUTES) */}
          {/* ========================================================================= */}
          <g fill="none">
            {/* Route A: Trans-Pacific Subsea IP Conduit (Silicon Valley -> TSMC Taiwan) */}
            <path
              d="M 152 194 C 190 90, 710 90, 786 252"
              stroke="#0284C7"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              className="flow-dash-right"
              opacity="0.9"
            />

            {/* Route B: Air Logistics EUV High-Tech (ASML Veldhoven -> TSMC Hsinchu) */}
            <path
              d="M 468 168 Q 628 135 786 252"
              stroke="#10B981"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              className="flow-dash-right"
              opacity="0.9"
            />

            {/* Route C: Advanced Wafer Air Freight (TSMC Taiwan -> Bắc Ninh / Hà Nội) */}
            <path
              d="M 786 252 Q 770 262 742 278"
              stroke="#D97706"
              strokeWidth="3.2"
              strokeDasharray="5 5"
              className="flow-dash-right"
            />

            {/* Route D: Pacific Container Shipping Lane (Việt Nam -> Long Beach USA) */}
            <path
              d="M 742 278 C 820 150, 110 150, 155 205"
              stroke="#EF4444"
              strokeWidth="2.2"
              strokeDasharray="8 10"
              className="flow-dash-left"
              opacity="0.85"
            />

            {/* Route E: Maritime Shipping via Malacca & Suez (Việt Nam -> Rotterdam Europe) */}
            <path
              d="M 742 278 Q 734 315 734 332 Q 620 320 540 270 Q 500 220 468 168"
              stroke="#F59E0B"
              strokeWidth="1.8"
              strokeDasharray="6 8"
              className="flow-dash-left"
              opacity="0.75"
            />
          </g>

          {/* ========================================================================= */}
          {/* PINS & HUBS (EXACT GEOGRAPHICAL COORDINATES ON REAL MAP) */}
          {/* ========================================================================= */}
          {Object.entries(HUB_LOCATIONS).map(([key, loc]) => {
            const isSelected = activeHubKey === key;
            const glowId =
              key === "usa"
                ? "url(#gisSkyGlow)"
                : key === "europe"
                ? "url(#gisEmeraldGlow)"
                : key === "taiwan"
                ? "url(#gisAmberGlow)"
                : "url(#gisRedGlow)";

            return (
              <g
                key={key}
                onClick={() => setActiveHubKey(key)}
                className="cursor-pointer group"
                transform={`translate(${loc.x}, ${loc.y})`}
              >
                {/* Sonar Pulsing Ring on Active Hub */}
                {isSelected && (
                  <>
                    <circle
                      r="28"
                      fill={glowId}
                      className="pulse-node-circle"
                    />
                    <circle
                      r="16"
                      fill="none"
                      stroke={loc.color}
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                      className="animate-spin"
                      style={{ animationDuration: "8s" }}
                    />
                  </>
                )}

                {/* Pin Core */}
                <circle
                  r={isSelected ? "9" : "6.5"}
                  fill={loc.color}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  className="group-hover:scale-125 transition-transform drop-shadow"
                />

                {/* Hub Pin Label */}
                <g transform="translate(0, -14)">
                  <rect
                    x={-loc.label.length * 3.2 - 12}
                    y="-10"
                    width={loc.label.length * 6.4 + 24}
                    height="16"
                    rx="8"
                    fill="#0F172A"
                    fillOpacity="0.85"
                    stroke={isSelected ? loc.color : "#334155"}
                    strokeWidth={isSelected ? "1.5" : "0.75"}
                  />
                  <text
                    x="0"
                    y="1"
                    textAnchor="middle"
                    fontSize="8"
                    fontFamily="'JetBrains Mono'"
                    fontWeight="bold"
                    fill={isSelected ? "#FFFFFF" : "#CBD5E1"}
                  >
                    {loc.flag} {loc.label}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. BOTTOM GIS CARTOGRAPHY STATUS & SCALE BAR */}
      {/* ========================================================================= */}
      <div className="relative z-10 flex items-center justify-between px-4 py-1.5 bg-white/95 backdrop-blur-md border-t border-slate-200 text-[9.5px] font-mono text-slate-700">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="font-medium">R&amp;D (Hoa Kỳ)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-medium">EUV (Hà Lan)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="font-medium">Foundry (Đài Loan)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <strong className="text-red-700 font-bold">Lắp Ráp (Việt Nam)</strong>
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-500">
          <span>|--- 1,500 KM --- 3,000 KM ---|</span>
          <span className="text-slate-600 font-bold hidden md:inline">
            EQUIRECTANGULAR WGS-84
          </span>
        </div>
      </div>
    </div>
  );
}
