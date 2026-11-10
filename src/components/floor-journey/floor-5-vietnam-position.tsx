"use client";

import * as React from "react";
import {
  ArrowRight,
  TrendingUp,
  Award,
  Layers,
  Sparkles,
  Zap,
  Cpu,
  Ship,
  Factory,
  Activity,
  Maximize2,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Floor5VietnamPositionProps {
  charX: number;
}

export function Floor5VietnamPosition({ charX }: Floor5VietnamPositionProps) {
  // Realtime Counter ticker for Export $405.5B
  const [exportCounter, setExportCounter] = React.useState(370.0);
  // Interactive Pathway selection in Station 3
  const [selectedPathway, setSelectedPathway] = React.useState<1 | 2 | 3>(1);
  // Interactive Inspector hover in Station 2 (Tier 1 vs Tier 2/3)
  const [hoveredTier, setHoveredTier] = React.useState<"tier1" | "tier2" | null>(null);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setExportCounter((prev) => {
        if (prev >= 405.5) {
          clearInterval(timer);
          return 405.5;
        }
        return +(prev + 1.8).toFixed(1);
      });
    }, 35);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-[4300px] pointer-events-none select-none">
      {/* DIRECT INLINE STYLES FOR FLUID ANIMATIONS & FLOWING PIPELINES */}
      <style>{`
        @keyframes streamFlow {
          0% { stroke-dashoffset: 240; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-stream-fast {
          stroke-dasharray: 10 20;
          animation: streamFlow 1.8s linear infinite;
        }
        .animate-stream-slow {
          stroke-dasharray: 14 28;
          animation: streamFlow 3.6s linear infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.85; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        .pulse-aura {
          animation: pulseGlow 2.5s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* MASTER SVG FLOW PIPELINES (ĐỒ HỌA KẾT NỐI KHÍT 100% TỪ THÀNH PHẦN NÀY SANG THÀNH PHẦN KHÁC) */}
      {/* ========================================================================= */}
      <svg
        className="absolute inset-0 w-[4300px] h-full pointer-events-none z-10 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="shadowF5Precise" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.15" />
          </filter>
          <linearGradient id="gradTechJumpPrecise" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="45%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="gradCeilingRail" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="25%" stopColor="#D97706" />
            <stop offset="55%" stopColor="#DC2626" />
            <stop offset="85%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
        </defs>

        {/* ================= 1. TRỤC CÁP TREO TRẦN VÀ CÁC ĐƯỜNG THẢ TRỰC DIỆN (DROP CABLES) ================= */}
        {/* Ray treo trần chạy ngang tại Y = 40px từ X = 40 đến X = 3980 */}
        <line x1="40" y1="40" x2="3980" y2="40" stroke="#94A3B8" strokeWidth="4" filter="url(#shadowF5Precise)" />
        <line x1="40" y1="40" x2="3980" y2="40" stroke="url(#gradCeilingRail)" strokeWidth="2.5" className="animate-stream-fast" />

        {/* Drop 1: Thả thẳng xuống đỉnh Cụm Cảng biển (Tâm X = 305, Y: 40 -> 85) */}
        <line x1="305" y1="40" x2="305" y2="85" stroke="#D97706" strokeWidth="3" />
        <circle cx="305" cy="85" r="5" fill="#D97706" stroke="#FFFFFF" strokeWidth="2" />

        {/* Drop 2: Thả thẳng xuống đỉnh Khối FDI Trạm 1 (Tâm X = 930, Y: 40 -> 85) */}
        <line x1="930" y1="40" x2="930" y2="85" stroke="#DC2626" strokeWidth="3" />
        <circle cx="930" cy="85" r="5" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />

        {/* Drop 3: Thả thẳng xuống đỉnh Tier Matrix Trạm 2 (Tâm X = 1760, Y: 40 -> 85) */}
        <line x1="1760" y1="40" x2="1760" y2="85" stroke="#DC2626" strokeWidth="3" />
        <circle cx="1760" cy="85" r="5" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />

        {/* Drop 4: Thả thẳng xuống đỉnh Slope Chart Trạm 2 (Tâm X = 2345, Y: 40 -> 85) */}
        <line x1="2345" y1="40" x2="2345" y2="85" stroke="#D97706" strokeWidth="3" />
        <circle cx="2345" cy="85" r="5" fill="#D97706" stroke="#FFFFFF" strokeWidth="2" />

        {/* Drop 5: Thả thẳng xuống đỉnh Bệ phóng Bán dẫn Trạm 3 (Tâm X = 2960, Y: 40 -> 85) */}
        <line x1="2960" y1="40" x2="2960" y2="85" stroke="#10B981" strokeWidth="3" />
        <circle cx="2960" cy="85" r="5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />

        {/* Drop 6: Thả thẳng xuống đỉnh 3 Nhịp Cầu Trạm 3 (Tâm X = 3550, Y: 40 -> 85) */}
        <line x1="3550" y1="40" x2="3550" y2="85" stroke="#10B981" strokeWidth="3" />
        <circle cx="3550" cy="85" r="5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />


        {/* ================= 2. ĐƯỜNG DẪN DÒNG CHẢY LIÊN KẾT GIỮA CÁC THÀNH PHẦN (INTER-COMPONENT PIPELINES) ================= */}

        {/* --- [SECTOR 1]: CẢNG BIỂN -> BỨC TRANH KÉP FDI / NỘI ĐỊA --- */}
        {/* Điểm xuất phát: Cổng ra bên phải của Cảng biển (X: 470, Y: 210) */}
        <line x1="470" y1="210" x2="495" y2="210" stroke="#D97706" strokeWidth="5" strokeLinecap="round" />
        {/* Hộp chia dòng tại (X: 495, Y: 210) */}
        <circle cx="495" cy="210" r="7" fill="#D97706" stroke="#FFFFFF" strokeWidth="2.5" />
        <circle cx="495" cy="210" r="3" fill="#FFFFFF" />

        {/* Nhánh 1A (FDI LỚN - 71.7%): Từ (495, 210) uốn lên cắm khít cổng vào Khối FDI tại (520, 190) */}
        <path
          d="M 495 210 C 505 210, 508 190, 520 190"
          stroke="#DC2626"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          filter="url(#shadowF5Precise)"
        />
        <path
          d="M 495 210 C 505 210, 508 190, 520 190"
          stroke="#FCA5A5"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          className="animate-stream-fast"
        />

        {/* Nhánh 1B (NỘI ĐỊA NHỎ - 28.3%): Từ (495, 210) uốn xuống cắm khít cổng vào Khối Nội Địa tại (520, 415) */}
        <path
          d="M 495 210 C 505 210, 508 415, 520 415"
          stroke="#10B981"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          filter="url(#shadowF5Precise)"
        />
        <path
          d="M 495 210 C 505 210, 508 415, 520 415"
          stroke="#6EE7B7"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="animate-stream-slow"
        />


        {/* --- [SECTOR 1 -> SECTOR 2]: TỪ TRẠM 1 SANG TRẠM 2 (CHUYỂN VỊ VÀO CHUỖI CUNG ỨNG) --- */}
        {/* Cổng ra Khối FDI: (1340, 190) & Cổng ra Khối Nội Địa: (1340, 415) */}
        {/* Nhánh trên từ FDI (1340, 190) dẫn tới Khối chuyển giao (1410, 260) */}
        <path
          d="M 1340 190 C 1375 190, 1380 260, 1410 260"
          stroke="#DC2626"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 1340 190 C 1375 190, 1380 260, 1410 260"
          stroke="#FCA5A5"
          strokeWidth="2"
          fill="none"
          className="animate-stream-fast"
        />

        {/* Nhánh dưới từ Nội Địa (1340, 415) dẫn tới Khối chuyển giao (1410, 260) */}
        <path
          d="M 1340 415 C 1375 415, 1380 260, 1410 260"
          stroke="#10B981"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Cụm Node chuyển giao giữa trạm 1 và trạm 2 tại (1410, 260) */}
        <circle cx="1410" cy="260" r="8" fill="#0F172A" stroke="#38BDF8" strokeWidth="2.5" className="pulse-aura" />
        <circle cx="1410" cy="260" r="3.5" fill="#38BDF8" />

        {/* Từ Node (1410, 260) chia 2 nhánh cắm khít vào Trạm 2: */}
        {/* Nhánh cắm vào Tier 1 Ngoại tại (1480, 165) */}
        <path
          d="M 1410 260 C 1440 260, 1445 165, 1480 165"
          stroke="#D97706"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 1410 260 C 1440 260, 1445 165, 1480 165"
          stroke="#FCD34D"
          strokeWidth="2"
          fill="none"
          className="animate-stream-fast"
        />

        {/* Nhánh cắm vào Tier 2/3 VN tại (1480, 355) */}
        <path
          d="M 1410 260 C 1440 260, 1445 355, 1480 355"
          stroke="#DC2626"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />


        {/* --- [SECTOR 2]: TRONG TRẠM 2 (TIER 1 -> TIER 2/3 & SLOPE CHART) --- */}
        {/* Cổng ra Tier 1: (2040, 165) & Cổng ra Tier 2/3: (2040, 355) */}
        {/* Dốc rơi thặng dư uốn cong mềm từ Tier 1 (2040, 165) cắm xuống Tier 2/3 (2040, 355) */}
        <path
          d="M 2040 165 C 2056 165, 2056 355, 2040 355"
          stroke="#DC2626"
          strokeWidth="2.5"
          strokeDasharray="4 4"
          fill="none"
        />

        {/* Hai cổng ra từ Tier 1 và Tier 2/3 cùng cắm khít vào cổng vào Slope Chart tại (2070, 270) */}
        <path
          d="M 2040 165 C 2055 165, 2055 270, 2070 270"
          stroke="#D97706"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 2040 355 C 2055 355, 2055 270, 2070 270"
          stroke="#DC2626"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />


        {/* --- [SECTOR 2 -> SECTOR 3]: CẦU NỐI BỨT PHÁ TỪ SƯỜN DỐC SANG BỆ PHÓNG BÁN DẪN --- */}
        {/* Cổng ra Slope Chart: (2620, 270) cắm thẳng và khít vào Cổng vào Bệ phóng Bán dẫn tại (2740, 270) */}
        <line
          x1="2620"
          y1="270"
          x2="2740"
          y2="270"
          stroke="#10B981"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="2620"
          y1="270"
          x2="2740"
          y2="270"
          stroke="#FCD34D"
          strokeWidth="2"
          className="animate-stream-fast"
        />
        {/* Khớp nối trung gian thẳng tâm tại (2680, 270) */}
        <circle cx="2680" cy="270" r="5" fill="#D97706" stroke="#FFFFFF" strokeWidth="2" />


        {/* --- [SECTOR 3]: TỪ BỆ PHÓNG BÁN DẪN SANG 3 NHỊP CẦU TỰ CHỦ --- */}
        {/* Cổng ra Bệ phóng: (3180, 270) cắm thẳng và khít vào Cổng vào 3 Nhịp Cầu tại (3210, 270) */}
        <line x1="3180" y1="270" x2="3210" y2="270" stroke="#10B981" strokeWidth="5" strokeLinecap="round" />
        <line x1="3180" y1="270" x2="3210" y2="270" stroke="#A7F3D0" strokeWidth="2" className="animate-stream-fast" />
      </svg>

      {/* ========================================================================= */}
      {/* TRẠM 01: ĐẠI BỨC TƯỜNG NGOẠI THƯƠNG & PHÂN CỰC DUAL-ECONOMY (X: 140 - 1340) */}
      {/* ========================================================================= */}
      
      {/* Tiêu đề Trạm 01 */}
      <div style={{ left: "140px", top: "35px" }} className="absolute flex items-center gap-3 z-20 pointer-events-auto bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-amber-500 text-slate-950 flex items-center gap-1.5 shadow-sm">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>TRẠM 01</span>
        </span>
        <span className="font-heading font-black text-xl text-slate-900 tracking-tight">
          NGHỊCH LÝ KINH TẾ KÉP
        </span>
        <span className="text-slate-300 font-mono">/</span>
        <span className="text-xs font-mono font-bold text-slate-500">
          KỶ LỤC NGOẠI THƯƠNG $405.5B & PHÂN HÓA NỘI - NGOẠI
        </span>
      </div>

      {/* CỤM 1.1: SIÊU CẢNG BIỂN LOGISTICS & TICKER KHỔNG LỒ (X: 140px, Y: 85px, Rộng: 330px) */}
      <div
        style={{ left: "140px", top: "85px" }}
        className="absolute pointer-events-auto w-[330px] h-[430px] flex flex-col justify-between z-20 group"
      >
        {/* CỔNG RA VẬT LÝ TẠI MÉP PHẢI (X: 140 + 330 = 470px, Y: 85 + 117 + 8 = 210px) */}
        <div
          style={{ top: "117px", right: "-8px" }}
          className="absolute w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow-md z-30 flex items-center justify-center pointer-events-none"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>

        {/* Ảnh siêu cảng biển góc rộng */}
        <div className="w-full h-[250px] rounded-3xl overflow-hidden relative border-2 border-slate-300 shadow-md bg-white">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
            alt="Cảng Cái Mép - Hải Phòng đón siêu tàu container"
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-amber-400 text-slate-950 uppercase tracking-wider shadow">
              CẢNG CONTAINER QUỐC TẾ
            </span>
          </div>
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <div className="text-[11px] font-mono font-bold text-amber-300">CÁI MÉP & HẢI PHÒNG 2024</div>
            <p className="text-[11px] leading-snug text-slate-200 mt-0.5">
              Đón các thế hệ siêu tàu mẹ 24.000 TEU, đưa quy mô ngoại thương tiệm cận 800 tỷ USD.
            </p>
          </div>
        </div>

        {/* Bảng số liệu to ấn tượng */}
        <div className="pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-heading font-black text-slate-950 tracking-tight">
              ${exportCounter}B
            </span>
            <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              +$24.8B XUẤT SIÊU
            </span>
          </div>
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mt-1">
            Tổng kim ngạch xuất khẩu hàng hóa (GSO 2024)
          </div>
        </div>
      </div>

      {/* CỤM 1.2: BỨC TƯỜNG DUAL-ECONOMY 2 NHÁNH (X: 520px, Y: 85px, Rộng: 820px, Kết thúc tại X: 1340px) */}
      <div
        style={{ left: "520px", top: "85px" }}
        className="absolute pointer-events-auto w-[820px] h-[430px] flex flex-col justify-between z-20"
      >
        {/* Nhánh Trên: Khối FDI Khổng Lồ 71.7% (Cao 210px, Top: 0 -> Y tâm: 85 + 97 + 8 = 190px) */}
        <div className="h-[210px] rounded-3xl bg-white/95 border-2 border-red-300 shadow-md p-4 flex gap-4 relative group">
          {/* Cổng vào bên trái tại Y = 190px */}
          <div
            style={{ top: "97px", left: "-8px" }}
            className="absolute w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow-md z-30 flex items-center justify-center pointer-events-none"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>

          {/* Cổng ra bên phải tại Y = 190px */}
          <div
            style={{ top: "97px", right: "-8px" }}
            className="absolute w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow-md z-30 flex items-center justify-center pointer-events-none"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>

          {/* Ảnh phòng sạch nhà máy FDI */}
          <div className="w-[280px] h-full rounded-2xl overflow-hidden relative shrink-0 bg-white border border-slate-300">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="Nhà máy điện tử phòng sạch FDI"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
              <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-red-600 text-white uppercase">
                TỔ HỢP FDI BẮC NINH & THÁI NGUYÊN
              </span>
              <p className="text-[10px] text-slate-200 mt-1 leading-snug">
                Samsung, Foxconn, Pegatron sản xuất hàng trăm triệu điện thoại & máy tính.
              </p>
            </div>
          </div>

          {/* Dữ liệu FDI nổi bật */}
          <div className="flex-1 flex flex-col justify-between py-1">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-red-600 uppercase tracking-wider">
                  KHỐI DOANH NGHIỆP FDI
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-400">CHI PHỐI XUẤT KHẨU</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-heading font-black text-red-600 leading-none">
                  71.7%
                </span>
                <span className="text-xl font-heading font-bold text-slate-800">
                  $290.94 TỶ USD
                </span>
              </div>
            </div>

            {/* Top 3 sản phẩm lớn */}
            <div className="space-y-1.5 font-mono text-[10px] bg-red-50/60 p-2.5 rounded-xl border border-red-200/80">
              <div className="flex justify-between text-slate-800">
                <span>&bull; Điện tử & máy tính:</span>
                <strong className="text-red-700">$72.6B</strong>
              </div>
              <div className="flex justify-between text-slate-800">
                <span>&bull; Điện thoại di động:</span>
                <strong className="text-red-700">$53.9B</strong>
              </div>
              <div className="flex justify-between text-slate-800">
                <span>&bull; Máy móc & thiết bị:</span>
                <strong className="text-red-700">$52.3B</strong>
              </div>
            </div>

            <div className="text-[10px] font-mono text-slate-500">
              Hơn 50% sản lượng công nghiệp cả nước nằm trong khu vực có vốn ngoại.
            </div>
          </div>
        </div>

        {/* Nhánh Dưới: Khối Nội Địa 28.3% (Cao 200px, Y tâm: 85 + 230 + 92 + 8 = 415px) */}
        <div className="h-[200px] rounded-3xl bg-white/95 border-2 border-emerald-300 shadow-md p-4 flex gap-4 relative group">
          {/* Cổng vào bên trái tại Y = 415px */}
          <div
            style={{ top: "92px", left: "-8px" }}
            className="absolute w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow-md z-30 flex items-center justify-center pointer-events-none"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>

          {/* Cổng ra bên phải tại Y = 415px */}
          <div
            style={{ top: "92px", right: "-8px" }}
            className="absolute w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow-md z-30 flex items-center justify-center pointer-events-none"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>

          <div className="flex-1 flex flex-col justify-between py-1">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase tracking-wider">
                  KHỐI DOANH NGHIỆP NỘI ĐỊA
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-400">KHIÊM TỐN</span>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-heading font-black text-emerald-600 leading-none">
                  28.3%
                </span>
                <span className="text-xl font-heading font-bold text-slate-800">
                  $114.59 TỶ USD
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Doanh nghiệp trong nước chủ yếu xuất khẩu dệt may, da giày, nông thủy sản và gia công phụ trợ cấp thấp.
            </p>

            <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-[10px] font-mono text-emerald-900 leading-tight">
              <strong>Bản chất Mác – Lênin:</strong> Giá trị mới ($v+m$) được tạo ra trên đất Việt Nam, nhưng phần thặng dư tích lũy $m$ và quyền lực chuỗi giá trị thuộc về Lead Firms ngoại.
            </div>
          </div>

          {/* Biểu đồ phân bổ tỷ trọng */}
          <div className="w-[200px] h-full rounded-2xl bg-white border-2 border-slate-900 p-3.5 flex flex-col justify-between text-slate-900 shrink-0 shadow-xs">
            <span className="text-[10px] font-mono font-bold text-amber-700">TỶ TRỌNG NGOẠI THƯƠNG</span>
            <div className="w-full h-4 rounded-full overflow-hidden flex bg-slate-100 border border-slate-300">
              <div style={{ width: "71.7%" }} className="h-full bg-red-500" />
              <div style={{ width: "28.3%" }} className="h-full bg-emerald-500" />
            </div>
            <div className="flex justify-between text-[9px] font-mono text-slate-600 font-bold">
              <span className="text-red-600">FDI: 71.7%</span>
              <span className="text-emerald-700">VN: 28.3%</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TRẠM 02: BẢN ĐỒ PHÂN TẦNG DÒNG CHẢY CHUỖI CUNG ỨNG & DVA (X: 1480 - 2620) */}
      {/* ========================================================================= */}

      {/* Tiêu đề Trạm 02 */}
      <div style={{ left: "1480px", top: "35px" }} className="absolute flex items-center gap-3 z-20 pointer-events-auto bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-red-600 text-white flex items-center gap-1.5 shadow-sm">
          <Layers className="w-3.5 h-3.5" />
          <span>TRẠM 02</span>
        </span>
        <span className="font-heading font-black text-xl text-slate-900 tracking-tight">
          HỐ SÂU GIÁ TRỊ & BẪY LIÊN KẾT GVC
        </span>
        <span className="text-slate-300 font-mono">/</span>
        <span className="text-xs font-mono font-bold text-slate-500">
          DVA ĐIỆN TỬ 20-30% & TỶ LỆ GVC SỤT GIẢM 35% ➔ 18%
        </span>
      </div>

      {/* CỤM 2.1: MA TRẬN PHÂN TẦNG VỊ THẾ CUNG ỨNG (X: 1480px, Y: 85px, Rộng: 560px, Kết thúc tại X: 2040px) */}
      <div
        style={{ left: "1480px", top: "85px" }}
        className="absolute pointer-events-auto w-[560px] h-[430px] flex flex-col justify-between z-20"
      >
        {/* Tầng 1 Ngoại (Trên Cao - Cao 160px, Y tâm: 85 + 80 = 165px) */}
        <div
          onMouseEnter={() => setHoveredTier("tier1")}
          onMouseLeave={() => setHoveredTier(null)}
          className={cn(
            "p-4 rounded-3xl border-2 transition-all duration-300 bg-white/95 shadow-md flex gap-4 cursor-pointer relative h-[160px] shrink-0",
            hoveredTier === "tier1" ? "border-amber-500 ring-2 ring-amber-300" : "border-slate-300"
          )}
        >
          {/* Cổng vào bên trái (X: 1480px, Y: 165px) */}
          <div
            style={{ top: "calc(50% - 8px)", left: "-8px" }}
            className="absolute w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow-md z-30 flex items-center justify-center pointer-events-none"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>

          {/* Cổng ra bên phải (X: 2040px, Y: 165px) */}
          <div
            style={{ top: "calc(50% - 8px)", right: "-8px" }}
            className="absolute w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow-md z-30 flex items-center justify-center pointer-events-none"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>

          <div className="w-[170px] h-[120px] rounded-2xl overflow-hidden relative shrink-0 bg-white border border-slate-300">
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80"
              alt="Dây chuyền linh kiện tinh vi của nhà cung cấp ngoại Tier 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <span className="absolute bottom-1.5 left-2 text-[9px] font-mono font-bold text-amber-300">
              TIER 1 NGOẠI VỆ TINH
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-between py-0.5">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold text-slate-400">TẦNG THƯỢNG LƯU CHUỖI</span>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-amber-100 text-amber-900">
                  THU ~60% THẶNG DƯ
                </span>
              </div>
              <h4 className="font-heading font-black text-sm text-slate-900 mt-0.5">
                Linh Kiện Bán Dẫn & Module Tinh Vi
              </h4>
              <p className="text-[10px] text-slate-600 mt-1 leading-snug">
                Doanh nghiệp Hàn Quốc, Nhật Bản, Đài Loan cung cấp bo mạch, chip nhớ, màn hình OLED và camera.
              </p>
            </div>
            <div className="text-[9px] font-mono text-amber-700 font-bold">
              OECD: 61% mua trong nước thực chất là mua từ các Tier 1 ngoại này!
            </div>
          </div>
        </div>

        {/* Tầng 2 & 3 Nội Địa (Dưới Thấp - Cao 160px, Y tâm: 85 + 190 + 80 = 355px) */}
        <div
          onMouseEnter={() => setHoveredTier("tier2")}
          onMouseLeave={() => setHoveredTier(null)}
          className={cn(
            "p-4 rounded-3xl border-2 transition-all duration-300 bg-white/95 shadow-md flex gap-4 cursor-pointer relative h-[160px] shrink-0",
            hoveredTier === "tier2" ? "border-red-500 ring-2 ring-red-300" : "border-red-200"
          )}
        >
          {/* Cổng vào bên trái (X: 1480px, Y: 355px) */}
          <div
            style={{ top: "calc(50% - 8px)", left: "-8px" }}
            className="absolute w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow-md z-30 flex items-center justify-center pointer-events-none"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>

          {/* Cổng ra bên phải (X: 2040px, Y: 355px) */}
          <div
            style={{ top: "calc(50% - 8px)", right: "-8px" }}
            className="absolute w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow-md z-30 flex items-center justify-center pointer-events-none"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>

          <div className="w-[170px] h-[120px] rounded-2xl overflow-hidden relative shrink-0 bg-white border border-slate-300">
            <img
              src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=600&q=80"
              alt="Xưởng gia công cơ khí phụ trợ ép nhựa bao bì Việt Nam"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <span className="absolute bottom-1.5 left-2 text-[9px] font-mono font-bold text-red-400">
              TIER 2 / 3 DOANH NGHIỆP VN
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-between py-0.5">
            <div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold text-red-600">ĐÁY NỤ CƯỜI GIA CÔNG</span>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-red-100 text-red-900">
                  DVA &lt; 20%
                </span>
              </div>
              <h4 className="font-heading font-black text-sm text-slate-900 mt-0.5">
                Bao Bì, Ép Nhựa, Đệm Mút & Ốc Vít
              </h4>
              <p className="text-[10px] text-slate-600 mt-1 leading-snug">
                Doanh nghiệp Việt Nam phụ trách các khâu cơ khí đơn giản, in ấn nhãn hộp và bao bì bảo vệ.
              </p>
            </div>
            <div className="text-[9px] font-mono text-red-700 font-bold">
              Biên lợi nhuận cực mỏng 2 - 3.5%, dễ bị thay thế khi có nước chi phí rẻ hơn.
            </div>
          </div>
        </div>

        {/* Cảnh báo ngắn gọn */}
        <div className="p-2.5 rounded-2xl bg-red-50 border border-red-200 text-[11px] font-mono text-red-950 leading-snug h-[50px] flex items-center shrink-0">
          <p>
            <strong>Bẫy liên kết chuỗi:</strong> Khối FDI lớn mạnh không tự nhiên chuyển giao công nghệ nếu không có chiến lược ép buộc nội địa hóa.
          </p>
        </div>
      </div>

      {/* CỤM 2.2: SƯỜN DỐC TOPOGRAPHIC SLOPE CHART WORLD BANK (X: 2070px, Y: 85px, Rộng: 550px, Kết thúc tại X: 2620px) */}
      <div
        style={{ left: "2070px", top: "85px" }}
        className="absolute pointer-events-auto w-[550px] h-[430px] rounded-3xl bg-white/95 border-2 border-slate-300 shadow-md p-6 flex flex-col justify-between z-20"
      >
        {/* Cổng vào bên trái (X: 2070px, Y: 85 + 177 + 8 = 270px) */}
        <div
          style={{ top: "177px", left: "-8px" }}
          className="absolute w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow-md z-30 flex items-center justify-center pointer-events-none"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>

        {/* Cổng ra bên phải (X: 2620px, Y: 85 + 177 + 8 = 270px) */}
        <div
          style={{ top: "177px", right: "-8px" }}
          className="absolute w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow-md z-30 flex items-center justify-center pointer-events-none"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-red-600 uppercase">
              BÁO CÁO WORLD BANK 2024
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-red-50 text-red-700 border border-red-200">
              SỤT GIẢM NỬA QUY MÔ
            </span>
          </div>
          <h3 className="font-heading font-black text-2xl text-slate-900 mt-1">
            TỶ LỆ DN NỘI THAM GIA CHUỖI TOÀN CẦU
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Tỷ lệ doanh nghiệp Việt Nam có liên kết chuỗi cung ứng quốc tế qua 14 năm
          </p>
        </div>

        {/* Trực quan hóa sườn dốc địa hình Topographic Slope SVG */}
        <div className="h-44 w-full relative">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 480 140">
            {/* Lưới ngang */}
            <line x1="40" y1="120" x2="440" y2="120" stroke="#E2E8F0" strokeWidth="1.5" />
            <line x1="40" y1="20" x2="440" y2="20" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="40" y1="70" x2="440" y2="70" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />

            {/* Vùng đổ màu sườn dốc */}
            <path d="M 90 28 L 390 85 L 390 120 L 90 120 Z" fill="rgba(220, 38, 38, 0.08)" />

            {/* Đường dốc trượt */}
            <line x1="90" y1="28" x2="390" y2="85" stroke="#DC2626" strokeWidth="5" strokeLinecap="round" />

            {/* Cột mốc 2009: 35% */}
            <circle cx="90" cy="28" r="8" fill="#D97706" stroke="#FFFFFF" strokeWidth="2.5" />
            <text x="90" y="14" textAnchor="middle" fontFamily="'Space Grotesk'" fontSize="18" fontWeight="bold" fill="#D97706">
              35%
            </text>
            <text x="90" y="136" textAnchor="middle" fontFamily="'IBM Plex Mono'" fontSize="11" fontWeight="bold" fill="#64748B">
              NĂM 2009
            </text>

            {/* Cột mốc 2023: 18% */}
            <circle cx="390" cy="85" r="9" fill="#DC2626" stroke="#FFFFFF" strokeWidth="3" className="pulse-aura" />
            <text x="390" y="72" textAnchor="middle" fontFamily="'Space Grotesk'" fontSize="22" fontWeight="900" fill="#DC2626">
              18%
            </text>
            <text x="390" y="136" textAnchor="middle" fontFamily="'IBM Plex Mono'" fontSize="11" fontWeight="bold" fill="#64748B">
              NĂM 2023
            </text>
          </svg>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-snug">
          <strong>Nghịch lý:</strong> Khi các tập đoàn FDI gia tăng kéo theo các nhà cung ứng ngoại vệ tinh (Tier 1 đồng hương) khiến cửa vào chuỗi của doanh nghiệp Việt Nam ngày càng hẹp lại.
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TRẠM 03: BỆ PHÓNG BÁN DẪN & 3 NHỊP CẦU TỰ CHỦ 2040 (X: 2740 - 3890) */}
      {/* ========================================================================= */}

      {/* Tiêu đề Trạm 03 */}
      <div style={{ left: "2740px", top: "35px" }} className="absolute flex items-center gap-3 z-20 pointer-events-auto bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-emerald-600 text-white flex items-center gap-1.5 shadow-sm">
          <Zap className="w-3.5 h-3.5" />
          <span>TRẠM 03</span>
        </span>
        <span className="font-heading font-black text-xl text-slate-900 tracking-tight">
          CHIẾN LƯỢC BÁN DẪN & BỨT PHÁ 2040
        </span>
        <span className="text-slate-300 font-mono">/</span>
        <span className="text-xs font-mono font-bold text-slate-500">
          QUYẾT ĐỊNH 1018/QĐ-TTg & 3 CON ĐƯỜNG NÂNG CẤP
        </span>
      </div>

      {/* CỤM 3.1: BỆ PHÓNG VI MẠCH BÁN DẪN & 50.000 KỸ SƯ (X: 2740px, Y: 85px, Rộng: 440px, Kết thúc tại X: 3180px) */}
      <div
        style={{ left: "2740px", top: "85px" }}
        className="absolute pointer-events-auto w-[440px] h-[430px] rounded-3xl bg-white/95 border-2 border-emerald-300 shadow-md p-5 flex flex-col justify-between z-20 group"
      >
        {/* Cổng vào bên trái (X: 2740px, Y: 85 + 177 + 8 = 270px) */}
        <div
          style={{ top: "177px", left: "-8px" }}
          className="absolute w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow-md z-30 flex items-center justify-center pointer-events-none"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>

        {/* Cổng ra bên phải (X: 3180px, Y: 85 + 177 + 8 = 270px) */}
        <div
          style={{ top: "177px", right: "-8px" }}
          className="absolute w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow-md z-30 flex items-center justify-center pointer-events-none"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>

        {/* Ảnh chip silicon */}
        <div className="w-full h-[180px] rounded-2xl overflow-hidden relative bg-white border-2 border-slate-300">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
            alt="Vi mạch bán dẫn vi xử lý silicon"
            className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute top-2.5 left-2.5">
            <span className="px-2.5 py-1 rounded text-[9px] font-mono font-black bg-emerald-400 text-slate-950 shadow">
              QUYẾT ĐỊNH 1018/QĐ-TTg
            </span>
          </div>
          <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
            <div className="text-[10px] font-mono font-bold text-emerald-300">CÔNG NGHỆ LÕI QUỐC GIA</div>
            <div className="text-xs font-bold text-slate-100">Chiến Lược Phát Triển Bán Dẫn 2030 - 2050</div>
          </div>
        </div>

        {/* Ticker 50.000 Kỹ sư & Công thức */}
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-heading font-black text-emerald-600 leading-none">
              50.000
            </span>
            <span className="text-sm font-mono font-black text-slate-800 uppercase">
              KỸ SƯ BÁN DẪN
            </span>
          </div>
          <div className="text-xs font-mono text-slate-500 mt-1">
            Đào tạo 15.000 kỹ sư thiết kế chip & 35.000 kỹ sư đóng gói, kiểm thử cấp cao.
          </div>
        </div>

        {/* Công thức C = SET + 1 */}
        <div className="p-3 rounded-2xl bg-white border-2 border-slate-900 text-slate-900 font-mono text-xs space-y-1 shadow-xs">
          <div className="text-amber-700 font-bold">CÔNG THỨC: C = SET + 1</div>
          <div className="text-[10px] text-slate-600 leading-snug">
            <strong>Chip</strong> = <strong>S</strong>pecialized + <strong>E</strong>lectronics + <strong>T</strong>alent + <strong>1</strong> (Việt Nam an toàn).
          </div>
        </div>
      </div>

      {/* CỤM 3.2: 3 NHỊP CẦU TỰ CHỦ CHIẾN LƯỢC (X: 3210px, Y: 85px, Rộng: 680px, Kết thúc tại X: 3890px) */}
      <div
        style={{ left: "3210px", top: "85px" }}
        className="absolute pointer-events-auto w-[680px] h-[430px] rounded-3xl bg-white/95 border-2 border-emerald-300 shadow-md p-6 flex flex-col justify-between z-20"
      >
        {/* Cổng vào bên trái (X: 3210px, Y: 85 + 177 + 8 = 270px) */}
        <div
          style={{ top: "177px", left: "-8px" }}
          className="absolute w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow-md z-30 flex items-center justify-center pointer-events-none"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase">
              3 CON ĐƯỜNG DỊCH CHUYỂN VỊ THẾ
            </span>
            <span className="text-[11px] font-mono text-slate-400">CHỌN ĐỂ TƯƠNG TÁC</span>
          </div>
          <h3 className="font-heading font-black text-2xl text-slate-900 mt-1">
            THOÁT BẪY GIA CÔNG: CHỌN ĐƯỜNG CHO VIỆT NAM
          </h3>
        </div>

        {/* 3 Thẻ Nhịp Cầu Lớn */}
        <div className="grid grid-cols-3 gap-3 my-2">
          {/* Nhịp 1 */}
          <button
            onClick={() => setSelectedPathway(1)}
            className={cn(
              "p-3.5 rounded-2xl text-left transition-all border-2 cursor-pointer flex flex-col justify-between h-[210px]",
              selectedPathway === 1
                ? "border-emerald-500 bg-emerald-50/80 shadow-md ring-2 ring-emerald-400"
                : "border-slate-200 bg-white hover:border-emerald-300"
            )}
          >
            <div>
              <span className="text-[9px] font-mono font-bold text-emerald-700 block mb-1">CON ĐƯỜNG 01</span>
              <h4 className="font-heading font-black text-sm text-slate-900 leading-snug">
                Lắp Ráp &rarr; Công Nghệ Lõi
              </h4>
              <p className="text-[11px] text-slate-600 mt-1.5 leading-snug">
                Làm chủ thiết kế chip Fabless AI/IoT và đóng gói kiểm thử tiên tiến (Advanced Packaging).
              </p>
            </div>
            <div className="pt-2 border-t border-emerald-200 text-[10px] font-mono text-emerald-900 font-bold">
              Thu hoạch thặng dư sở hữu trí tuệ (IP)
            </div>
          </button>

          {/* Nhịp 2 */}
          <button
            onClick={() => setSelectedPathway(2)}
            className={cn(
              "p-3.5 rounded-2xl text-left transition-all border-2 cursor-pointer flex flex-col justify-between h-[210px]",
              selectedPathway === 2
                ? "border-amber-500 bg-amber-50/80 shadow-md ring-2 ring-amber-400"
                : "border-slate-200 bg-white hover:border-amber-300"
            )}
          >
            <div>
              <span className="text-[9px] font-mono font-bold text-amber-700 block mb-1">CON ĐƯỜNG 02</span>
              <h4 className="font-heading font-black text-sm text-slate-900 leading-snug">
                Gia Công &rarr; Đối Tác Tier 1
              </h4>
              <p className="text-[11px] text-slate-600 mt-1.5 leading-snug">
                Nâng chuẩn doanh nghiệp công nghiệp phụ trợ nội địa đạt chứng chỉ toàn cầu (ISO/ESG).
              </p>
            </div>
            <div className="pt-2 border-t border-amber-200 text-[10px] font-mono text-amber-900 font-bold">
              Nâng DVA điện tử từ 20% lên &gt; 50%
            </div>
          </button>

          {/* Nhịp 3 */}
          <button
            onClick={() => setSelectedPathway(3)}
            className={cn(
              "p-3.5 rounded-2xl text-left transition-all border-2 cursor-pointer flex flex-col justify-between h-[210px]",
              selectedPathway === 3
                ? "border-sky-500 bg-sky-50/80 shadow-md ring-2 ring-sky-400"
                : "border-slate-200 bg-white hover:border-sky-300"
            )}
          >
            <div>
              <span className="text-[9px] font-mono font-bold text-sky-700 block mb-1">CON ĐƯỜNG 03</span>
              <h4 className="font-heading font-black text-sm text-slate-900 leading-snug">
                Xuất Khẩu &rarr; Global Brand
              </h4>
              <p className="text-[11px] text-slate-600 mt-1.5 leading-snug">
                Xây dựng thương hiệu công nghệ Make in Vietnam, làm chủ kênh phân phối toàn cầu.
              </p>
            </div>
            <div className="pt-2 border-t border-sky-200 text-[10px] font-mono text-sky-900 font-bold">
              Kiểm soát giá bán lẻ & thặng dư cuối chuỗi
            </div>
          </button>
        </div>

        <div className="p-3 rounded-2xl bg-white border-2 border-slate-900 text-slate-900 flex items-center justify-between text-xs font-mono shadow-xs">
          <span className="text-emerald-700 font-bold">
            TIẾN TỚI CỔNG LƯỢNG TỬ ĐỂ BẮT ĐẦU ĐIỀU HÀNH 2040 &rarr;
          </span>
          <span className="text-slate-500 font-medium">CHẶNG CUỐI HÀNH TRÌNH</span>
        </div>
      </div>

    </div>
  );
}
