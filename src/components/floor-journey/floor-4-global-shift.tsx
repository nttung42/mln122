"use client";

import * as React from "react";
import {
  Globe,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Anchor,
  Factory,
  Sparkles,
  Lock,
  Boxes,
  Compass,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { RealisticGVCMap } from "./floor-4-map";

interface Floor4GlobalShiftProps {
  charX: number;
}

interface HubDetail {
  id: string;
  name: string;
  flag: string;
  tag: string;
  share: string;
  shareSub: string;
  power: string;
  img: string;
  headline: string;
  formula: string;
}

const HUBS_CONFIG: Record<string, HubDetail> = {
  usa: {
    id: "usa",
    name: "HOA KỲ • SILICON VALLEY",
    flag: "🇺🇸",
    tag: "ĐẦU NÃO R&D & THUẬT TOÁN AI",
    share: "$380",
    shareSub: "38.0% (m Siêu Ngạch Độc Quyền)",
    power: "Độc Quyền Bằng Sáng Chế (IP)",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    headline: "Kiểm soát kiến trúc vi xử lý và hệ điều hành iOS/Android. Chiếm đoạt phần thặng dư lớn nhất hành tinh.",
    formula: "c/v cực cao • m độc quyền tuyệt đối",
  },
  europe: {
    id: "europe",
    name: "CHÂU ÂU • ASML HÀ LAN",
    flag: "🇳🇱",
    tag: "ĐỘC QUYỀN MÁY QUANG KHẮC EUV",
    share: "$350M",
    shareSub: "Giá 1 cỗ máy EUV độc quyền",
    power: "Nút Thắt Địa Chính Trị Toàn Cầu",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    headline: "Độc quyền 100% máy quang khắc cực tím EUV. Không có ASML, không ai có thể đúc chip dưới 5nm.",
    formula: "Tư bản kỹ thuật tối thượng (c)",
  },
  taiwan: {
    id: "taiwan",
    name: "ĐÀI LOAN • TSMC FAB 18",
    flag: "🇹🇼",
    tag: "ĐÚC BÁN DẪN TIÊN TIẾN 3NM",
    share: "$190",
    shareSub: "19.0% Giá Trị Chip Nano",
    power: "Chi Phối 90% Chip Dưới 5nm",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    headline: "Xưởng đúc chip tiên tiến nhất nhân loại. Hoạt động 24/7 với độ tinh khiết gần như tuyệt đối.",
    formula: "Cấu tạo hữu cơ tư bản c/v khổng lồ",
  },
  vietnam: {
    id: "vietnam",
    name: "VIỆT NAM • ĐẠI CÔNG XƯỞNG",
    flag: "🇻🇳",
    tag: "400.000 CÔNG NHÂN PHÒNG SẠCH",
    share: "$28",
    shareSub: "Chỉ 2.8% (Tiền Công Lao Động v)",
    power: "Đáy Smiling Curve (Không có quyền định giá)",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    headline: "Lắp ráp cứ 5 chiếc smartphone thì có 1 chiếc từ Việt Nam, nhưng giá trị giữ lại chỉ 28 USD/máy.",
    formula: "Sức lao động sống (v) • c ngoại nhập 100%",
  },
  congo: {
    id: "congo",
    name: "CHDC CONGO & ATACAMA",
    flag: "🇨🇩",
    tag: "MỎ QUẶNG COBALT & LITHIUM",
    share: "< $15",
    shareSub: "< 1.5% Giá Trị Thô",
    power: "Khai Thác Vùng Ngoại Vi",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    headline: "Khai thác tài nguyên thô khắc nghiệt nhưng giá trị thô chỉ chiếm phần cực nhỏ ở đầu nguồn.",
    formula: "Tư bản bất biến thô (c)",
  },
};

export function Floor4GlobalShift({ charX }: Floor4GlobalShiftProps) {
  const [activeHubKey, setActiveHubKey] = React.useState<string>("vietnam");
  const [activeLayer, setActiveLayer] = React.useState<"production" | "value" | "ownership" | "consumer">("production");
  const [hoveredPipe, setHoveredPipe] = React.useState<string | null>(null);

  const currentHub = HUBS_CONFIG[activeHubKey] || HUBS_CONFIG.vietnam;

  return (
    <div className="absolute inset-0 w-[4900px] pointer-events-none select-none">
      
      {/* ANIMATIONS & CABLE GLOWS */}
      <style>{`
        @keyframes pulseGlowSoft {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        @keyframes pulseAuraRadar {
          0% { r: 5; opacity: 0.8; stroke-width: 2; }
          100% { r: 16; opacity: 0; stroke-width: 0.5; }
        }
        @keyframes flowPulseRight {
          from { stroke-dashoffset: 240; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes flowPulseFast {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes flowPulseLeft {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 240; }
        }
        .flow-dash-right {
          stroke-dasharray: 10 14;
          animation: flowPulseRight 2s linear infinite;
        }
        .flow-dash-fast {
          stroke-dasharray: 8 10;
          animation: flowPulseFast 1.2s linear infinite;
        }
        .flow-dash-left {
          stroke-dasharray: 10 14;
          animation: flowPulseLeft 2s linear infinite;
        }
        .pulse-node-circle {
          animation: pulseGlowSoft 2.5s ease-in-out infinite;
        }
        .pulse-radar-wave {
          animation: pulseAuraRadar 2s ease-out infinite;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* MASTER CONTINUOUS INTER-STATION POWER & VALUE HIGHWAY (Y = 36PX & LIÊN KẾT ĐỘNG) */}
      {/* ========================================================================= */}
      <svg className="absolute inset-0 w-[4900px] h-full pointer-events-none z-10 overflow-visible" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="f4Shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.12" />
          </filter>
          <filter id="f4GlowCyan" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#0284C7" floodOpacity="0.6" />
          </filter>
          <filter id="f4GlowEmerald" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#10B981" floodOpacity="0.6" />
          </filter>
          <filter id="f4GlowAmber" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#F59E0B" floodOpacity="0.6" />
          </filter>
          <filter id="f4GlowRed" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#DC2626" floodOpacity="0.6" />
          </filter>

          <linearGradient id="f4GradientMain" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="35%" stopColor="#10B981" />
            <stop offset="65%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>

          <linearGradient id="f4GradTitleTo1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="f4Grad1to2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          <linearGradient id="f4Grad2to3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>

          <linearGradient id="f4Grad3toGate" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
        </defs>

        {/* ------------------------------------------------------------------------- */}
        {/* 1. TRUNK CABLE CHẠY SUỐT TRẦN (Y = 36PX) */}
        {/* ------------------------------------------------------------------------- */}
        <line x1="60" y1="36" x2="4780" y2="36" stroke="#E2E8F0" strokeWidth="5" filter="url(#f4Shadow)" />
        <line x1="60" y1="36" x2="4780" y2="36" stroke="url(#f4GradientMain)" strokeWidth="3" className="flow-dash-right" />

        {/* Cáp thả trần (Drop Cables) thẳng đứng xuống đỉnh các trạm */}
        {/* Drop 1: Đầu Trạm 1 (X = 720, Y: 36 -> 82) */}
        <line x1="720" y1="36" x2="720" y2="82" stroke="#0284C7" strokeWidth="2.5" />
        <circle cx="720" cy="82" r="4.5" fill="#0284C7" stroke="#FFF" strokeWidth="2" className="pulse-node-circle" />

        {/* Drop 2: Tâm Bản Đồ GVC Trạm 1 (X = 1120, Y: 36 -> 135) */}
        <line x1="1120" y1="36" x2="1120" y2="135" stroke="#0284C7" strokeWidth="2.5" />
        <circle cx="1120" cy="135" r="4.5" fill="#0284C7" stroke="#FFF" strokeWidth="2" />

        {/* Drop 3: Mural Phân Cực Trạm 1 (X = 1780, Y: 36 -> 85) */}
        <line x1="1780" y1="36" x2="1780" y2="85" stroke="#10B981" strokeWidth="2.5" />
        <circle cx="1780" cy="85" r="4.5" fill="#10B981" stroke="#FFF" strokeWidth="2" />

        {/* Drop 4: Đầu Nguồn Sankey Trạm 2 (X = 2220, Y: 36 -> 85) */}
        <line x1="2220" y1="36" x2="2220" y2="85" stroke="#F59E0B" strokeWidth="2.5" />
        <circle cx="2220" cy="85" r="4.5" fill="#F59E0B" stroke="#FFF" strokeWidth="2" className="pulse-node-circle" />

        {/* Drop 5: Tâm Sankey Diagram (X = 2540, Y: 36 -> 85) */}
        <line x1="2540" y1="36" x2="2540" y2="85" stroke="#F59E0B" strokeWidth="2.5" />
        <circle cx="2540" cy="85" r="4.5" fill="#F59E0B" stroke="#FFF" strokeWidth="2" />

        {/* Drop 6: Ảnh Nhà Máy Bắc Ninh (X = 3090, Y: 36 -> 85) */}
        <line x1="3090" y1="36" x2="3090" y2="85" stroke="#DC2626" strokeWidth="2.5" />
        <circle cx="3090" cy="85" r="4.5" fill="#DC2626" stroke="#FFF" strokeWidth="2" />

        {/* Drop 7: Đầu Trạm 3 - Phù Điêu Quyền Lực (X = 3500, Y: 36 -> 85) */}
        <line x1="3500" y1="36" x2="3500" y2="85" stroke="#10B981" strokeWidth="2.5" />
        <circle cx="3500" cy="85" r="4.5" fill="#10B981" stroke="#FFF" strokeWidth="2" className="pulse-node-circle" />

        {/* Drop 8: Tâm Lý Thuyết Gereffi (X = 3760, Y: 36 -> 85) */}
        <line x1="3760" y1="36" x2="3760" y2="85" stroke="#10B981" strokeWidth="2.5" />
        <circle cx="3760" cy="85" r="4.5" fill="#10B981" stroke="#FFF" strokeWidth="2" />

        {/* Drop 9: Ảnh Logistics Container Cảng Biển (X = 4250, Y: 36 -> 85) */}
        <line x1="4250" y1="36" x2="4250" y2="85" stroke="#10B981" strokeWidth="2.5" />
        <circle cx="4250" cy="85" r="4.5" fill="#10B981" stroke="#FFF" strokeWidth="2" />

        {/* Drop 10: Đỉnh Vòm Cổng Tầng 05 (X = 4620, Y: 36 -> 100) */}
        <line x1="4620" y1="36" x2="4620" y2="100" stroke="#0284C7" strokeWidth="3.5" />
        <circle cx="4620" cy="100" r="5" fill="#0284C7" stroke="#FFF" strokeWidth="2" className="pulse-node-circle" />


        {/* ------------------------------------------------------------------------- */}
        {/* 2. ĐƯỜNG KẾT NỐI ĐỘNG LIÊN TRẠM (INTER-STATION DYNAMIC VALUE PIPELINES) */}
        {/* ------------------------------------------------------------------------- */}

        {/* === SECTION 0: TỪ KHỐI TIÊU ĐỀ (X: 580) VÀO BẢN ĐỒ GVC TRẠM 1 (X: 720) === */}
        <path
          d="M 580 195 C 625 195, 665 195, 720 195"
          stroke="#BAE6FD"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          filter="url(#f4Shadow)"
        />
        <path
          d="M 580 195 C 625 195, 665 195, 720 195"
          stroke="#0284C7"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          className="flow-dash-fast"
        />
        {/* Routing Node Giữa Tiêu Đề & Trạm 1 */}
        <circle cx="650" cy="195" r="8" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5" />
        <circle cx="650" cy="195" r="3.5" fill="#0284C7" />
        <circle cx="650" cy="195" r="14" fill="none" stroke="#0284C7" className="pulse-radar-wave" />


        {/* === SECTION 1: NỘI BỘ TRẠM 1 (BẢN ĐỒ X: 1520 -> MURAL CARD X: 1560) === */}
        <line x1="1520" y1="240" x2="1560" y2="240" stroke="#0284C7" strokeWidth="3" strokeDasharray="4 4" className="flow-dash-right" />
        <line x1="1520" y1="380" x2="1560" y2="380" stroke="#10B981" strokeWidth="3" strokeDasharray="4 4" className="flow-dash-right" />
        <circle cx="1520" cy="240" r="3.5" fill="#0284C7" />
        <circle cx="1560" cy="240" r="3.5" fill="#0284C7" />
        <circle cx="1520" cy="380" r="3.5" fill="#10B981" />
        <circle cx="1560" cy="380" r="3.5" fill="#10B981" />


        {/* === SECTION 2: HÀNH LANG 1 (TRẠM 1 X: 2000 -> SANKEY TRẠM 2 X: 2220) === */}
        {/* Dòng 2A: R&D & IP Stream (Trên: Vút từ Mural sang Đỉnh Nguồn Thặng Dư Sankey) */}
        <path
          d="M 2000 210 C 2075 210, 2145 180, 2220 180"
          stroke="#CBD5E1"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          filter="url(#f4Shadow)"
        />
        <path
          d="M 2000 210 C 2075 210, 2145 180, 2220 180"
          stroke="#0284C7"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          className="flow-dash-fast"
        />

        {/* Dòng 2B: Dòng Thặng Dư Cốt Lõi ($1,000 Global Value Flow) */}
        <path
          d="M 2000 310 C 2075 310, 2145 280, 2220 280"
          stroke="#FCD34D"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          filter="url(#f4Shadow)"
        />
        <path
          d="M 2000 310 C 2075 310, 2145 280, 2220 280"
          stroke="url(#f4Grad1to2)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          className="flow-dash-right"
        />

        {/* Dòng 2C: Dòng Lao Động Sống & Bất Biến (Dưới: Chảy vào Đáy v & c) */}
        <path
          d="M 2000 420 C 2075 420, 2145 440, 2220 440"
          stroke="#FECACA"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 2000 420 C 2075 420, 2145 440, 2220 440"
          stroke="#DC2626"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="flow-dash-fast"
        />

        {/* Routing Hub Trung Tâm Hành Lang 1 tại X = 2110, Y = 280 */}
        <circle cx="2110" cy="280" r="10" fill="#0F172A" stroke="#F59E0B" strokeWidth="2.5" />
        <circle cx="2110" cy="280" r="4.5" fill="#F59E0B" />
        <circle cx="2110" cy="280" r="18" fill="none" stroke="#F59E0B" className="pulse-radar-wave" />


        {/* === SECTION 3: NỘI BỘ TRẠM 2 (SANKEY $28 VN X: 2860 -> ẢNH BẮC NINH X: 2900) === */}
        {/* Luồng Cảnh Báo Đỏ Rực Nối Thẳng Thẻ 2.8% Sang Ảnh Hiện Trường */}
        <path
          d="M 2860 325 L 2900 325"
          stroke="#EF4444"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#f4GlowRed)"
        />
        <path
          d="M 2860 325 L 2900 325"
          stroke="#FFF"
          strokeWidth="2"
          strokeLinecap="round"
          className="flow-dash-fast"
        />
        <circle cx="2860" cy="325" r="4" fill="#EF4444" stroke="#FFF" strokeWidth="1.5" />
        <circle cx="2900" cy="325" r="4" fill="#EF4444" stroke="#FFF" strokeWidth="1.5" />


        {/* === SECTION 4: HÀNH LANG 2 (TRẠM 2 X: 3280 -> TRẠM 3 GVC POWER X: 3500) === */}
        {/* Dòng 4A: Quyền Lực Điều Hành Chuỗi (Lead Firm Governance) */}
        <path
          d="M 3280 200 C 3355 200, 3425 180, 3500 180"
          stroke="#CBD5E1"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          filter="url(#f4Shadow)"
        />
        <path
          d="M 3280 200 C 3355 200, 3425 180, 3500 180"
          stroke="#0284C7"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          className="flow-dash-fast"
        />

        {/* Dòng 4B: Dòng Địa Chính Trị & Bẫy Captive Network */}
        <path
          d="M 3280 310 C 3355 310, 3425 310, 3500 310"
          stroke="#FCD34D"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          filter="url(#f4Shadow)"
        />
        <path
          d="M 3280 310 C 3355 310, 3425 310, 3500 310"
          stroke="url(#f4Grad2to3)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          className="flow-dash-right"
        />

        {/* Dòng 4C: Làn Sóng FDI Dịch Chuyển & Nâng Cấp Bán Dẫn (China + 1) */}
        <path
          d="M 3280 420 C 3355 420, 3425 435, 3500 435"
          stroke="#A7F3D0"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 3280 420 C 3355 420, 3425 435, 3500 435"
          stroke="#10B981"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="flow-dash-fast"
        />

        {/* Routing Hub Trung Tâm Hành Lang 2 tại X = 3390, Y = 280 */}
        <circle cx="3390" cy="280" r="10" fill="#0F172A" stroke="#10B981" strokeWidth="2.5" />
        <circle cx="3390" cy="280" r="4.5" fill="#10B981" />
        <circle cx="3390" cy="280" r="18" fill="none" stroke="#10B981" className="pulse-radar-wave" />


        {/* === SECTION 5: NỘI BỘ TRẠM 3 (LÝ THUYẾT X: 4020 -> LOGISTICS CONTAINER X: 4060) === */}
        <line x1="4020" y1="240" x2="4060" y2="240" stroke="#10B981" strokeWidth="3" strokeDasharray="4 4" className="flow-dash-right" />
        <line x1="4020" y1="480" x2="4060" y2="480" stroke="#0284C7" strokeWidth="3" strokeDasharray="4 4" className="flow-dash-right" />
        <circle cx="4020" cy="240" r="3.5" fill="#10B981" />
        <circle cx="4060" cy="240" r="3.5" fill="#10B981" />
        <circle cx="4020" cy="480" r="3.5" fill="#0284C7" />
        <circle cx="4060" cy="480" r="3.5" fill="#0284C7" />


        {/* === SECTION 6: HÀNH LANG 3 (TRẠM 3 X: 4440 -> CỔNG CHUYỂN TẦNG 05 X: 4620) === */}
        {/* Chùm Cáp Siêu Năng Lượng Cắm Thẳng Khung Cổng Airlock */}
        {/* Nhánh 6A: Vút lên đỉnh vòm năng lượng cổng */}
        <path
          d="M 4440 180 C 4510 180, 4555 140, 4620 140"
          stroke="#BAE6FD"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          filter="url(#f4Shadow)"
        />
        <path
          d="M 4440 180 C 4510 180, 4555 140, 4620 140"
          stroke="#0284C7"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          className="flow-dash-fast"
        />

        {/* Nhánh 6B: Dòng Chính Cắm Khít Trung Tâm Cảm Biến Cửa */}
        <path
          d="M 4440 320 C 4510 320, 4555 380, 4620 380"
          stroke="#A7F3D0"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          filter="url(#f4Shadow)"
        />
        <path
          d="M 4440 320 C 4510 320, 4555 380, 4620 380"
          stroke="url(#f4Grad3toGate)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          className="flow-dash-right"
        />

        {/* Nhánh 6C: Tiếp đất khung cửa chân sàn */}
        <path
          d="M 4440 440 C 4510 440, 4560 480, 4620 480"
          stroke="#CBD5E1"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 4440 440 C 4510 440, 4560 480, 4620 480"
          stroke="#10B981"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="flow-dash-fast"
        />

        {/* Routing Sensor Cửa Chuyển Tầng tại X = 4525, Y = 280 */}
        <circle cx="4525" cy="280" r="10" fill="#0F172A" stroke="#0284C7" strokeWidth="2.5" />
        <circle cx="4525" cy="280" r="4.5" fill="#0284C7" />
        <circle cx="4525" cy="280" r="18" fill="none" stroke="#0284C7" className="pulse-radar-wave" />
      </svg>

      {/* ========================================================================= */}
      {/* KM 0.0: TIÊU ĐỀ LỚN KHÔNG KHUNG TRÊN TƯỜNG (X = 100PX, RỘNG 480PX) */}
      {/* ========================================================================= */}
      <div style={{ left: "100px", top: "75px" }} className="absolute w-[480px] pointer-events-auto z-20">
        
        {/* Floating Minimal Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping" />
          <span className="font-mono text-xs font-black text-sky-700 tracking-wider uppercase">
            TẦNG 04 &bull; GLOBAL GEOPOLITICS
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-xs font-mono font-bold text-slate-400">KM 0.0</span>
        </div>

        {/* Big Bold Typography */}
        <h1 className="text-4xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight leading-none mb-3">
          THE GLOBAL<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-emerald-600 to-amber-600">
            VALUE SHIFT
          </span>
        </h1>

        <p className="text-sm font-semibold text-slate-700 leading-relaxed font-sans max-w-md">
          Khi sản xuất phân tán qua hàng chục quốc gia — <span className="text-sky-700 underline decoration-sky-300 decoration-2 underline-offset-2">Ai thực sự thâu tóm thặng dư?</span>
        </p>

        {/* Key Indicators Floating Deck */}
        <div className="flex items-center gap-4 mt-6">
          <div className="px-4 py-3 rounded-2xl bg-white/95 border border-slate-200 shadow-xs flex items-center gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <span className="text-[10px] font-mono text-slate-400 block font-bold">R&amp;D MỸ &amp; ANH</span>
              <span className="text-base font-black font-mono text-sky-700">~ 69% Thặng dư</span>
            </div>
          </div>

          <div className="px-4 py-3 rounded-2xl bg-white/95 border border-slate-200 shadow-xs flex items-center gap-3">
            <span className="text-2xl">🇻🇳</span>
            <div>
              <span className="text-[10px] font-mono text-slate-400 block font-bold">LẮP RÁP VN</span>
              <span className="text-base font-black font-mono text-red-600">2.8% Tiền công v</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs font-mono text-slate-400 flex items-center gap-2">
          <span>Tiến bước vào hành lang triển lãm</span>
          <span className="font-bold text-sky-600">D / →</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* KM 0.7: TRẠM 01 - BẢN ĐỒ GVC MỞ RỘNG (X = 720PX - 2000PX) */}
      {/* ========================================================================= */}
      
      {/* Plaque Treo Tường */}
      <div
        style={{ left: "720px", top: "45px" }}
        className="absolute pointer-events-auto flex items-center gap-2.5 px-4 py-1.5 rounded-2xl bg-white/90 border border-slate-200 shadow-xs backdrop-blur-md z-20"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
        <span className="font-mono text-xs font-black text-slate-800 uppercase tracking-wider">
          TRẠM 01 &bull; BẢN ĐỒ DỊA KINH TẾ TOÀN CẦU (INTERACTIVE GVC MAP)
        </span>
        <span className="text-slate-300">|</span>
        <span className="text-xs font-mono font-semibold text-sky-700">KM 0.7 - KM 1.5</span>
      </div>

      {/* Layer Selector Bar - ĐƯỢC ĐIỀU CHỈNH KHOẢNG CÁCH THOÁNG ĐÃNG, KHÔNG BỊ DÍNH SÁT NHAU */}
      <div
        style={{ left: "720px", top: "82px" }}
        className="absolute pointer-events-auto flex items-center gap-3.5 p-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm z-20"
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/90 text-slate-600 font-mono text-[10px] font-bold tracking-wider uppercase shrink-0">
          <Layers className="w-3.5 h-3.5 text-sky-600" />
          <span>LĂNG KÍNH:</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveLayer("production")}
            className={cn(
              "px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs",
              activeLayer === "production"
                ? "bg-slate-900 text-white shadow-sm ring-2 ring-slate-800 font-bold scale-[1.02]"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100/80 hover:text-slate-900"
            )}
          >
            <span className="text-sm">🏭</span>
            <span>1. Sản Xuất Vật Lý</span>
          </button>

          <button
            onClick={() => setActiveLayer("value")}
            className={cn(
              "px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs",
              activeLayer === "value"
                ? "bg-sky-600 text-white shadow-sm ring-2 ring-sky-500 font-bold scale-[1.02]"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-sky-50 hover:text-sky-700"
            )}
          >
            <span className="text-sm">💡</span>
            <span>2. Bản Quyền &amp; R&amp;D</span>
          </button>

          <button
            onClick={() => setActiveLayer("ownership")}
            className={cn(
              "px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs",
              activeLayer === "ownership"
                ? "bg-amber-600 text-white shadow-sm ring-2 ring-amber-500 font-bold scale-[1.02]"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-amber-50 hover:text-amber-700"
            )}
          >
            <span className="text-sm">👑</span>
            <span>3. Trụ Sở Mẹ</span>
          </button>

          <button
            onClick={() => setActiveLayer("consumer")}
            className={cn(
              "px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs",
              activeLayer === "consumer"
                ? "bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-500 font-bold scale-[1.02]"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50 hover:text-emerald-700"
            )}
          >
            <span className="text-sm">🛒</span>
            <span>4. Thị Trường Tiêu Thụ</span>
          </button>
        </div>
      </div>

      {/* 1.1 Expansive Map Canvas (Rộng 800px, Real Geographic Vector Map) */}
      <div
        style={{ left: "720px", top: "135px" }}
        className="absolute pointer-events-auto w-[800px] h-[395px] z-20 flex flex-col justify-between"
      >
        <RealisticGVCMap
          activeHubKey={activeHubKey}
          setActiveHubKey={setActiveHubKey}
          activeLayer={activeLayer}
        />

        <div className="flex items-center justify-between px-4 py-2 rounded-2xl bg-white/95 border border-slate-200 text-xs font-mono shadow-xs backdrop-blur-sm">
          <span className="flex items-center gap-2 font-bold text-slate-800">
            <span className="text-base">{currentHub.flag}</span>
            <span>{currentHub.name}</span>
          </span>
          <span className="text-sky-700 font-bold">{currentHub.tag}</span>
          <span className="text-slate-500">Thặng dư: <strong className="text-slate-900">{currentHub.share}</strong></span>
        </div>
      </div>

      {/* 1.2 Open Photo & Event Mural (Rộng 440px, cách Map 40px) */}
      <div
        style={{ left: "1560px", top: "85px" }}
        className="absolute pointer-events-auto w-[440px] h-[435px] z-20 flex flex-col justify-between"
      >
        <div className="flex items-center justify-between">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-black bg-sky-100 text-sky-800 border border-sky-300">
            {currentHub.name}
          </span>
          <span className="text-xs font-mono font-bold text-amber-700">{currentHub.shareSub}</span>
        </div>

        <div className="relative h-64 rounded-3xl overflow-hidden border border-slate-300 shadow-xl group my-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentHub.img}
            alt={currentHub.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
          
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-md text-[10px] font-mono text-slate-900 font-bold border border-slate-300 shadow-xs">
            {currentHub.power}
          </div>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <h4 className="text-base font-bold font-heading leading-tight">{currentHub.headline}</h4>
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 mt-2 pt-2 border-t border-white/20">
              <span>{currentHub.formula}</span>
              <span className="text-amber-300 font-black">{currentHub.share}</span>
            </div>
          </div>
        </div>

        <div className="px-4 py-2.5 rounded-2xl bg-white/90 border border-slate-200 text-xs text-slate-600 font-sans leading-relaxed">
          👉 <strong>Bản chất Mác - Lênin:</strong> Giá trị thặng dư không nằm ở nơi xuất khẩu danh nghĩa, mà nằm ở nơi kiểm soát tư liệu sản xuất độc quyền và bản quyền trí tuệ.
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CORRIDOR 1: THẺ TELEMETRY KẾT NỐI ĐỘNG (X = 2050 - 2170) */}
      {/* ========================================================================= */}
      <div
        style={{ left: "2040px", top: "100px" }}
        className="absolute pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-amber-300 shadow-xs backdrop-blur-md z-20 text-[10px] font-mono font-bold text-amber-800"
      >
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
        <span>DÒNG CHẢY GIÁ TRỊ $1,000 &rarr;</span>
      </div>

      {/* ========================================================================= */}
      {/* KM 2.2: TRẠM 02 - SANKEY PIPELINE $1,000 (X = 2220PX - 3280PX) */}
      {/* ========================================================================= */}
      
      {/* Plaque Treo Tường */}
      <div
        style={{ left: "2220px", top: "45px" }}
        className="absolute pointer-events-auto flex items-center gap-2.5 px-4 py-1.5 rounded-2xl bg-white/90 border border-amber-300 shadow-xs backdrop-blur-md z-20"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
        <span className="font-mono text-xs font-black text-amber-900 uppercase tracking-wider">
          TRẠM 02 &bull; MẠNG LƯỚI PHÂN RÃ DÒNG TIỀN SANKEY PIPELINE ($1,000)
        </span>
        <span className="text-slate-300">|</span>
        <span className="text-xs font-mono font-semibold text-slate-500">KM 2.2</span>
      </div>

      {/* Cỗ máy Sankey Pipeline Mở Rộng Trên Tường (Rộng 640px) */}
      <div
        style={{ left: "2220px", top: "85px" }}
        className="absolute pointer-events-auto w-[640px] h-[435px] z-20 flex flex-col justify-between bg-white/95 backdrop-blur-md p-4 rounded-3xl border border-slate-200/90 shadow-xl"
      >
        {/* Header Header & Dynamic Metric */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-wider block">
                PHÂN RÃ 1 CHIẾC SMARTPHONE BÁN LẺ
              </span>
            </div>
            <span className="text-xl font-black font-heading text-slate-900 leading-none">
              Dòng Tiền $1,000 Chảy Đi Đâu?
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold text-slate-400 hidden sm:inline">Tổng giá trị:</span>
            <span className="text-2xl font-black font-mono text-amber-600 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200">
              $1,000
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TRUE SANKEY FLOW DIAGRAM CANVAS */}
        {/* ========================================================================= */}
        <div className="relative w-full h-[290px] my-auto">
          {/* SVG RIBBON FLOWS */}
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 608 290">
            <defs>
              <linearGradient id="skFlowRd" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#0369A1" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="skFlowBrand" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="skFlowFab" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#D97706" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="skFlowRaw" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#64748B" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="skFlowVn" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#DC2626" stopOpacity="0.95" />
              </linearGradient>

              <filter id="skGlowRed" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#DC2626" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Ribbon 1: R&D ($380) */}
            <path
              d="M 44 10 C 130 10, 155 18, 238 18 L 238 42 C 155 42, 130 110, 44 110 Z"
              fill="url(#skFlowRd)"
              className={cn(
                "transition-all duration-300 pointer-events-auto cursor-pointer",
                hoveredPipe === "rd"
                  ? "opacity-95 filter drop-shadow-md"
                  : hoveredPipe ? "opacity-25" : "opacity-75 hover:opacity-90"
              )}
              onMouseEnter={() => setHoveredPipe("rd")}
              onMouseLeave={() => setHoveredPipe(null)}
            />
            {/* Center Flow Line 1 */}
            <path
              d="M 44 60 C 130 60, 155 30, 238 30"
              fill="none"
              stroke="#BAE6FD"
              strokeWidth="1.5"
              className="flow-dash-right opacity-80"
            />

            {/* Ribbon 2: Brand ($310) */}
            <path
              d="M 44 113 C 130 113, 155 72, 238 72 L 238 96 C 155 96, 130 195, 44 195 Z"
              fill="url(#skFlowBrand)"
              className={cn(
                "transition-all duration-300 pointer-events-auto cursor-pointer",
                hoveredPipe === "brand"
                  ? "opacity-95 filter drop-shadow-md"
                  : hoveredPipe ? "opacity-25" : "opacity-75 hover:opacity-90"
              )}
              onMouseEnter={() => setHoveredPipe("brand")}
              onMouseLeave={() => setHoveredPipe(null)}
            />
            {/* Center Flow Line 2 */}
            <path
              d="M 44 154 C 130 154, 155 84, 238 84"
              fill="none"
              stroke="#A7F3D0"
              strokeWidth="1.5"
              className="flow-dash-right opacity-80"
            />

            {/* Ribbon 3: Fab 3nm ($190) */}
            <path
              d="M 44 198 C 130 198, 155 126, 238 126 L 238 144 C 155 144, 130 248, 44 248 Z"
              fill="url(#skFlowFab)"
              className={cn(
                "transition-all duration-300 pointer-events-auto cursor-pointer",
                hoveredPipe === "fab"
                  ? "opacity-95 filter drop-shadow-md"
                  : hoveredPipe ? "opacity-25" : "opacity-75 hover:opacity-90"
              )}
              onMouseEnter={() => setHoveredPipe("fab")}
              onMouseLeave={() => setHoveredPipe(null)}
            />
            {/* Center Flow Line 3 */}
            <path
              d="M 44 223 C 130 223, 155 135, 238 135"
              fill="none"
              stroke="#FDE68A"
              strokeWidth="1.5"
              className="flow-dash-right opacity-80"
            />

            {/* Ribbon 4: Raw / Depreciation ($92) */}
            <path
              d="M 44 251 C 130 251, 155 178, 238 178 L 238 190 C 155 190, 130 274, 44 274 Z"
              fill="url(#skFlowRaw)"
              className={cn(
                "transition-all duration-300 pointer-events-auto cursor-pointer",
                hoveredPipe === "raw"
                  ? "opacity-95 filter drop-shadow-md"
                  : hoveredPipe ? "opacity-25" : "opacity-70 hover:opacity-90"
              )}
              onMouseEnter={() => setHoveredPipe("raw")}
              onMouseLeave={() => setHoveredPipe(null)}
            />

            {/* Ribbon 5: Assembly Vietnam ($28) */}
            <path
              d="M 44 277 C 130 277, 155 244, 238 244 L 238 252 C 155 252, 130 285, 44 285 Z"
              fill="url(#skFlowVn)"
              filter="url(#skGlowRed)"
              className={cn(
                "transition-all duration-300 pointer-events-auto cursor-pointer",
                hoveredPipe === "assembly"
                  ? "opacity-100"
                  : hoveredPipe ? "opacity-30" : "opacity-90 hover:opacity-100"
              )}
              onMouseEnter={() => setHoveredPipe("assembly")}
              onMouseLeave={() => setHoveredPipe(null)}
            />
            {/* Pulsing Alert Path on VN Ribbon */}
            <path
              d="M 44 281 C 130 281, 155 248, 238 248"
              fill="none"
              stroke="#FECACA"
              strokeWidth="1.5"
              className="flow-dash-right"
            />
          </svg>

          {/* LEFT SOURCE TOWER: 1 Chiếc Smartphone Bán Lẻ ($1,000) */}
          <div className="absolute left-0 top-0 bottom-0 w-[44px] flex flex-col justify-between py-1 bg-slate-900 rounded-2xl shadow-lg border border-slate-800 text-center select-none z-10">
            {/* Seg 1: 38% */}
            <div
              className={cn(
                "w-full h-[100px] bg-sky-500 rounded-t-xl transition-all cursor-pointer flex flex-col items-center justify-center text-white",
                hoveredPipe === "rd" ? "ring-2 ring-white scale-105 z-20" : "opacity-90 hover:opacity-100"
              )}
              onMouseEnter={() => setHoveredPipe("rd")}
              onMouseLeave={() => setHoveredPipe(null)}
              title="38% R&D"
            >
              <span className="text-[10px] font-black font-mono">38%</span>
            </div>
            {/* Seg 2: 31% */}
            <div
              className={cn(
                "w-full h-[82px] bg-emerald-500 my-0.5 transition-all cursor-pointer flex flex-col items-center justify-center text-white",
                hoveredPipe === "brand" ? "ring-2 ring-white scale-105 z-20" : "opacity-90 hover:opacity-100"
              )}
              onMouseEnter={() => setHoveredPipe("brand")}
              onMouseLeave={() => setHoveredPipe(null)}
              title="31% Thương Hiệu"
            >
              <span className="text-[10px] font-black font-mono">31%</span>
            </div>
            {/* Seg 3: 19% */}
            <div
              className={cn(
                "w-full h-[50px] bg-amber-500 my-0.5 transition-all cursor-pointer flex flex-col items-center justify-center text-slate-950",
                hoveredPipe === "fab" ? "ring-2 ring-white scale-105 z-20" : "opacity-90 hover:opacity-100"
              )}
              onMouseEnter={() => setHoveredPipe("fab")}
              onMouseLeave={() => setHoveredPipe(null)}
              title="19% Bán Dẫn 3nm"
            >
              <span className="text-[9px] font-black font-mono">19%</span>
            </div>
            {/* Seg 4: 9% */}
            <div
              className={cn(
                "w-full h-[23px] bg-slate-500 my-0.5 transition-all cursor-pointer flex flex-col items-center justify-center text-white",
                hoveredPipe === "raw" ? "ring-2 ring-white scale-105 z-20" : "opacity-90 hover:opacity-100"
              )}
              onMouseEnter={() => setHoveredPipe("raw")}
              onMouseLeave={() => setHoveredPipe(null)}
              title="9.2% Khấu Hao Máy & Nguyên Liệu"
            >
              <span className="text-[8px] font-black font-mono">9%</span>
            </div>
            {/* Seg 5: 2.8% */}
            <div
              className={cn(
                "w-full h-[12px] bg-red-600 rounded-b-xl transition-all cursor-pointer flex flex-col items-center justify-center text-white animate-pulse",
                hoveredPipe === "assembly" ? "ring-2 ring-white scale-110 z-20" : "opacity-100"
              )}
              onMouseEnter={() => setHoveredPipe("assembly")}
              onMouseLeave={() => setHoveredPipe(null)}
              title="2.8% Lắp Ráp Việt Nam"
            >
              <span className="text-[7px] font-black font-mono leading-none">v</span>
            </div>
          </div>

          {/* RIGHT DESTINATION CARDS */}
          <div className="absolute left-[242px] right-0 top-0 bottom-0 flex flex-col justify-between py-0.5 space-y-1.5 z-10">
            {/* Card 1: R&D */}
            <div
              onMouseEnter={() => setHoveredPipe("rd")}
              onMouseLeave={() => setHoveredPipe(null)}
              className={cn(
                "px-3 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between",
                hoveredPipe === "rd"
                  ? "bg-sky-50 border-sky-500 shadow-md scale-[1.02] ring-1 ring-sky-300"
                  : "bg-white/90 border-sky-200 hover:border-sky-400 hover:bg-sky-50/50"
              )}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-base shrink-0">🇺🇸🇬🇧</span>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-slate-900 block truncate">
                    R&amp;D &bull; Kiến Trúc Chip &amp; AI
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 block truncate">
                    Silicon Valley, Qualcomm, ARM
                  </span>
                </div>
              </div>
              <div className="text-right font-mono shrink-0 ml-2">
                <span className="text-sm font-black text-sky-700 block leading-tight">$380</span>
                <span className="text-[8px] text-sky-600 font-bold block uppercase">m Siêu ngạch (38%)</span>
              </div>
            </div>

            {/* Card 2: Brand */}
            <div
              onMouseEnter={() => setHoveredPipe("brand")}
              onMouseLeave={() => setHoveredPipe(null)}
              className={cn(
                "px-3 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between",
                hoveredPipe === "brand"
                  ? "bg-emerald-50 border-emerald-500 shadow-md scale-[1.02] ring-1 ring-emerald-300"
                  : "bg-white/90 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50/50"
              )}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-base shrink-0">🍎🌐</span>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-slate-900 block truncate">
                    Thương Hiệu, Hệ Sinh Thái &amp; Phân Phối
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 block truncate">
                    Apple, Google, Kênh Bán Lẻ Toàn Cầu
                  </span>
                </div>
              </div>
              <div className="text-right font-mono shrink-0 ml-2">
                <span className="text-sm font-black text-emerald-700 block leading-tight">$310</span>
                <span className="text-[8px] text-emerald-600 font-bold block uppercase">Lưu thông TB (31%)</span>
              </div>
            </div>

            {/* Card 3: TSMC Fab */}
            <div
              onMouseEnter={() => setHoveredPipe("fab")}
              onMouseLeave={() => setHoveredPipe(null)}
              className={cn(
                "px-3 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between",
                hoveredPipe === "fab"
                  ? "bg-amber-50 border-amber-500 shadow-md scale-[1.02] ring-1 ring-amber-300"
                  : "bg-white/90 border-amber-200 hover:border-amber-400 hover:bg-amber-50/50"
              )}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-base shrink-0">🇹🇼</span>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-slate-900 block truncate">
                    Đúc Vi Mạch Bán Dẫn 3nm Tiên Tiến
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 block truncate">
                    TSMC Fab 18 Đài Loan &bull; Tư bản c/v cao
                  </span>
                </div>
              </div>
              <div className="text-right font-mono shrink-0 ml-2">
                <span className="text-sm font-black text-amber-700 block leading-tight">$190</span>
                <span className="text-[8px] text-amber-600 font-bold block uppercase">Tư bản CN (19%)</span>
              </div>
            </div>

            {/* Card 4: Raw Materials & Machinery */}
            <div
              onMouseEnter={() => setHoveredPipe("raw")}
              onMouseLeave={() => setHoveredPipe(null)}
              className={cn(
                "px-3 py-1 rounded-xl border transition-all cursor-pointer flex items-center justify-between",
                hoveredPipe === "raw"
                  ? "bg-slate-100 border-slate-500 shadow-md scale-[1.02] ring-1 ring-slate-300"
                  : "bg-white/80 border-slate-200 hover:border-slate-400 hover:bg-slate-50"
              )}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-base shrink-0">🇨🇩🇳🇱</span>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-slate-800 block truncate">
                    Kim Loại Hiếm, Pin &amp; Khấu Hao Máy Móc
                  </span>
                  <span className="text-[8px] font-mono text-slate-500 block truncate">
                    Cobalt Congo, Máy ASML &bull; Tư bản bất biến (c)
                  </span>
                </div>
              </div>
              <div className="text-right font-mono shrink-0 ml-2">
                <span className="text-xs font-black text-slate-700 block leading-tight">$92</span>
                <span className="text-[8px] text-slate-500 font-bold block uppercase">Bù đắp c (9.2%)</span>
              </div>
            </div>

            {/* Card 5: Vietnam Assembly (Highlighting the Contrast) */}
            <div
              onMouseEnter={() => setHoveredPipe("assembly")}
              onMouseLeave={() => setHoveredPipe(null)}
              className={cn(
                "px-3 py-2 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between relative overflow-hidden",
                hoveredPipe === "assembly"
                  ? "bg-red-50 border-red-600 shadow-lg scale-[1.03] ring-2 ring-red-400/40"
                  : "bg-red-50/70 border-red-400 hover:border-red-600 hover:bg-red-50"
              )}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-lg shrink-0 animate-bounce">🇻🇳</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-red-700 block truncate">
                      ★ Lắp Ráp Hoàn Thiện Tại Việt Nam
                    </span>
                    <span className="px-1.5 py-0.2 rounded-full bg-red-600 text-[8px] font-mono font-bold text-white uppercase">
                      Đáy Smile
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-red-600 block truncate font-semibold">
                    400.000 công nhân Bắc Ninh &bull; Tiền công v
                  </span>
                </div>
              </div>
              <div className="text-right font-mono shrink-0 ml-2">
                <span className="text-base font-black text-red-600 block leading-tight">$28</span>
                <span className="text-[8px] text-red-700 font-black block uppercase tracking-tight">Chỉ 2.8%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Insight Banner (Updates on hover, otherwise shows core takeaway) */}
        <div className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600 flex items-center justify-between">
          {hoveredPipe === "assembly" ? (
            <span className="text-red-700 font-bold">
              ★ Việt Nam nhận $28/chiếc: Chỉ đủ bù đắp chi phí tái sản xuất sức lao động giản đơn (v).
            </span>
          ) : hoveredPipe === "rd" ? (
            <span className="text-sky-700 font-bold">
              💡 R&amp;D Mỹ/Anh chiếm $380/chiếc (38%): Chiếm đoạt m siêu ngạch nhờ độc quyền bằng sáng chế IP.
            </span>
          ) : hoveredPipe === "brand" ? (
            <span className="text-emerald-700 font-bold">
              🛒 Apple/Google chiếm $310/chiếc (31%): Lợi nhuận thương nghiệp nhờ độc quyền nền tảng &amp; hệ sinh thái.
            </span>
          ) : hoveredPipe === "fab" ? (
            <span className="text-amber-700 font-bold">
              ⚙️ TSMC chiếm $190/chiếc (19%): Cấu tạo hữu cơ tư bản c/v cực lớn, không thể thay thế trong ngắn hạn.
            </span>
          ) : hoveredPipe === "raw" ? (
            <span className="text-slate-700 font-bold">
              ⛏️ Nguyên liệu thô chiếm $92 (9.2%): Giá trị cũ bảo toàn, các nước đang phát triển chịu ô nhiễm môi trường.
            </span>
          ) : (
            <>
              <span className="text-slate-500">
                85% giờ lao động vật chất ➔ <strong className="text-red-600">nhận 2.8%</strong>
              </span>
              <span className="text-amber-800 font-bold">
                15% thượng/hạ nguồn ➔ <strong className="text-sky-700">chiếm 88% thặng dư</strong>
              </span>
            </>
          )}
          <span className="text-[10px] text-slate-400 font-normal ml-2">Hover từng luồng</span>
        </div>
      </div>

      {/* Ảnh Tư Liệu Lắp Ráp (Rộng 380px, cách Sankey 40px) */}
      <div
        style={{ left: "2900px", top: "85px" }}
        className="absolute pointer-events-auto w-[380px] h-[435px] z-20 flex flex-col justify-between"
      >
        <div className="flex items-center justify-between">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-red-100 text-red-800 border border-red-300">
            CHỨNG THỰC THỰC TẾ
          </span>
          <span className="text-xs font-mono text-slate-400 font-bold">BẮC NINH / THÁI NGUYÊN</span>
        </div>

        <div className="relative h-64 rounded-3xl overflow-hidden border border-slate-300 shadow-xl my-2 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80"
            alt="Dây chuyền kiểm thử bo mạch"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-sans">
            Công nhân thử nghiệm mạch in điện tử tại nhà máy phòng sạch.
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white/95 border border-slate-200 shadow-xs text-xs text-slate-600 font-sans leading-relaxed">
          Xuất khẩu điện tử vượt 200 tỷ USD, nhưng phần giá trị giữ lại nội địa chỉ đạt <strong>$28/chiếc</strong>. Tiền công này chỉ đủ bù đắp chi phí tái sản xuất sức lao động giản đơn.
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CORRIDOR 2: THẺ TELEMETRY KẾT NỐI ĐỘNG (X = 3330) */}
      {/* ========================================================================= */}
      <div
        style={{ left: "3320px", top: "100px" }}
        className="absolute pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-emerald-300 shadow-xs backdrop-blur-md z-20 text-[10px] font-mono font-bold text-emerald-800"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>QUYỀN LỰC GVC // CHINA + 1 &rarr;</span>
      </div>

      {/* ========================================================================= */}
      {/* KM 3.5: TRẠM 03 - ĐẤU TRƯỜNG QUYỀN LỰC CHUỖI CUNG ỨNG (X = 3500PX - 4440PX) */}
      {/* ========================================================================= */}
      
      {/* Plaque Treo Tường */}
      <div
        style={{ left: "3500px", top: "45px" }}
        className="absolute pointer-events-auto flex items-center gap-2.5 px-4 py-1.5 rounded-2xl bg-white/90 border border-emerald-300 shadow-xs backdrop-blur-md z-20"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
        <span className="font-mono text-xs font-black text-emerald-900 uppercase tracking-wider">
          TRẠM 03 &bull; ĐẤU TRƯỜNG QUYỀN LỰC GVC &amp; LÀN SÓNG &quot;CHINA + 1&quot;
        </span>
        <span className="text-slate-300">|</span>
        <span className="text-xs font-mono font-semibold text-slate-500">KM 3.5</span>
      </div>

      {/* 3 Phù Điêu Cơ Chế Quyền Lực (Rộng 520px) */}
      <div
        style={{ left: "3500px", top: "85px" }}
        className="absolute pointer-events-auto w-[520px] h-[435px] z-20 flex flex-col justify-between"
      >
        <div className="border-b border-slate-200 pb-2">
          <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wider block">
            LÝ THUYẾT GEREFFI GVC GOVERNANCE
          </span>
          <h3 className="text-2xl font-black font-heading text-slate-900 leading-tight">
            Vì Sao Nước Gia Công Bị Khóa Ở Đáy?
          </h3>
        </div>

        <div className="space-y-3 my-auto">
          <div className="p-3.5 rounded-2xl bg-white/95 border border-slate-200 shadow-xs flex items-start gap-3">
            <span className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-mono font-black text-sm shrink-0">
              01
            </span>
            <div>
              <h5 className="font-bold text-xs text-slate-900 font-heading">Độc Quyền Bằng Sáng Chế &amp; Tiêu Chuẩn Đóng</h5>
              <p className="text-[11px] text-slate-500 leading-snug mt-0.5 font-sans">
                Tập đoàn mẹ định đoạt 100% chuẩn kỹ thuật. Doanh nghiệp gia công không được phép tiếp cận kiến trúc nguồn.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/95 border border-slate-200 shadow-xs flex items-start gap-3">
            <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-mono font-black text-sm shrink-0">
              02
            </span>
            <div>
              <h5 className="font-bold text-xs text-slate-900 font-heading">Bẫy Mạng Lưới Phụ Thuộc (Captive Network)</h5>
              <p className="text-[11px] text-slate-500 leading-snug mt-0.5 font-sans">
                Chuyển giao toàn bộ rủi ro đơn hàng cho xưởng gia công, nhưng thâu tóm toàn bộ thặng dư thương mại.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/95 border border-slate-200 shadow-xs flex items-start gap-3">
            <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-mono font-black text-sm shrink-0">
              03
            </span>
            <div>
              <h5 className="font-bold text-xs text-slate-900 font-heading">Làn Sóng Tái Cấu Trúc Địa Chính Trị &quot;China + 1&quot;</h5>
              <p className="text-[11px] text-slate-500 leading-snug mt-0.5 font-sans">
                Việt Nam đón nhận dòng vốn FDI dịch chuyển, nhưng nguy cơ bị bỏ rơi nếu chi phí nhân công tăng mà không leo lên được chuỗi giá trị cao.
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 py-2.5 rounded-2xl bg-emerald-50 border border-emerald-300 text-xs font-mono text-emerald-900 flex items-center justify-between font-bold">
          <span>LỐI THOÁT DUY NHẤT:</span>
          <span>Chuyển dịch sang Thiết Kế &amp; Bán Dẫn (Fabless)</span>
        </div>
      </div>

      {/* Ảnh Logistics Container Cảng Biển (Rộng 380px, cách 40px) */}
      <div
        style={{ left: "4060px", top: "85px" }}
        className="absolute pointer-events-auto w-[380px] h-[435px] z-20 flex flex-col justify-between"
      >
        <div className="flex items-center justify-between">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            CHIẾN LƯỢC TOÀN CẦU
          </span>
          <span className="text-xs font-mono text-slate-400 font-bold">LOGISTICS VẬN TẢI</span>
        </div>

        <div className="relative h-64 rounded-3xl overflow-hidden border border-slate-300 shadow-xl my-2 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
            alt="Cảng biển container logistics"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-sans">
            Chuỗi cung ứng toàn cầu kết nối các đại công xưởng bằng tàu container viễn dương.
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white/95 border border-slate-200 shadow-xs text-xs text-slate-600 font-sans leading-relaxed">
          Việt Nam không thể mãi dừng lại ở vị trí gia công lắp ráp tạm thời. Muốn tự chủ kinh tế, quốc gia phải nâng cao tỷ lệ nội địa hóa thực tế và sở hữu công nghệ nguồn.
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CORRIDOR 3: BẢNG HƯỚNG DẪN CỔNG TIẾP CẬN TẦNG 05 (X = 4470) */}
      {/* ========================================================================= */}
      <div
        style={{ left: "4470px", top: "100px" }}
        className="absolute pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-sky-300 shadow-xs backdrop-blur-md z-20 text-[10px] font-mono font-bold text-sky-800"
      >
        <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
        <span>TIẾP CẬN CỔNG TẦNG 05 &rarr;</span>
      </div>

    </div>
  );
}
