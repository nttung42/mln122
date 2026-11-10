"use client";

import * as React from "react";
import {
  Sparkles,
  Zap,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  Cpu,
  Layers,
  Clock,
  DollarSign,
  Scale,
  Award,
  Factory,
  ChevronRight,
  Info,
  CheckCircle2,
  Gauge,
  Sliders,
  Flame,
  Rocket,
  ShieldAlert,
  Smartphone,
  Users,
  Building2,
  Microchip,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Floor3DecodeValueProps {
  charX: number;
}

export function Floor3DecodeValue({ charX }: Floor3DecodeValueProps) {
  // Trạm 2: Selected chamber to inspect (c | v | m)
  const [selectedChamber, setSelectedChamber] = React.useState<"c" | "v" | "m">("v");

  // Trạm 3: Working Day Simulator Sliders state
  const [simT, setSimT] = React.useState<number>(8.0);
  const [simV, setSimV] = React.useState<number>(4.0);
  const [simC, setSimC] = React.useState<number>(3.0);
  const [activeScenario, setActiveScenario] = React.useState<"default" | "absolute" | "relative">("default");

  // Calculations for Simulator
  const surplusM = Math.max(0.5, +(simT - simV).toFixed(1));
  const mPrime = ((surplusM / simV) * 100).toFixed(0);
  const pPrime = ((surplusM / (simC * simV + simV)) * 100).toFixed(1);

  const pctV = ((simV / simT) * 100).toFixed(1);
  const pctM = (100 - parseFloat(pctV)).toFixed(1);

  // Slider V change handler with constraint v < T
  const handleVChange = (val: number) => {
    let nextV = val;
    if (nextV >= simT) {
      nextV = Math.max(1, simT - 0.5);
    }
    setSimV(nextV);
    setActiveScenario("default");
  };

  // Slider T change handler with constraint T > v
  const handleTChange = (val: number) => {
    setSimT(val);
    if (val <= simV) {
      setSimV(Math.max(1, val - 0.5));
    }
    setActiveScenario("default");
  };

  // Preset Scenario Handlers
  const applyPresetScenario = (preset: "absolute" | "relative" | "default") => {
    setActiveScenario(preset);
    if (preset === "absolute") {
      setSimT(12);
      setSimV(4);
      setSimC(3);
    } else if (preset === "relative") {
      setSimT(8);
      setSimV(2);
      setSimC(5);
    } else {
      setSimT(8);
      setSimV(4);
      setSimC(3);
    }
  };

  return (
    <div className="absolute inset-0 w-[4800px] pointer-events-none select-none">
      {/* DIRECT INLINE STYLES FOR FLUID PIPELINES & ANIMATIONS */}
      <style>{`
        @keyframes streamFlowF3 {
          0% { stroke-dashoffset: 240; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-stream-fast-f3 {
          stroke-dasharray: 10 20;
          animation: streamFlowF3 1.8s linear infinite;
        }
        .animate-stream-slow-f3 {
          stroke-dasharray: 14 28;
          animation: streamFlowF3 3.6s linear infinite;
        }
        @keyframes pulseAuraF3 {
          0%, 100% { opacity: 0.85; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        .pulse-aura-f3 {
          animation: pulseAuraF3 2.4s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>

      {/* PARALLAX WATERMARK IN CHÌM NỀN XA */}
      <div className="absolute top-8 left-16 w-[4700px] flex items-center gap-36 opacity-[0.03] pointer-events-none">
        <span className="font-heading font-black text-9xl tracking-widest text-slate-900 whitespace-nowrap">
          W = c + v + m • CONSTANT VS VARIABLE CAPITAL
        </span>
        <span className="font-heading font-black text-9xl tracking-widest text-slate-900 whitespace-nowrap">
          SURPLUS VALUE RATE m&apos; = m/v • RELATIVE VS ABSOLUTE SURPLUS
        </span>
      </div>

      {/* ========================================================================= */}
      {/* MASTER OVERHEAD INDUSTRIAL CONDUIT & INTER-STATION SVG PIPELINES */}
      {/* ========================================================================= */}
      <svg
        className="absolute inset-0 w-[4800px] h-full pointer-events-none z-10 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="shadowF3Precise" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.12" />
          </filter>
          <linearGradient id="gradCeilingRailF3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="30%" stopColor="#0284C7" />
            <stop offset="60%" stopColor="#D97706" />
            <stop offset="85%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="gradSurplusFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="gradTechJumpF3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        {/* 1. ĐƯỜNG CÁP CHÍNH CHẠY SUỐT TRẦN (Y = 36px) */}
        <line x1="50" y1="36" x2="4520" y2="36" stroke="#94A3B8" strokeWidth="4" filter="url(#shadowF3Precise)" />
        <line x1="50" y1="36" x2="4520" y2="36" stroke="url(#gradCeilingRailF3)" strokeWidth="2.5" className="animate-stream-fast-f3" />

        {/* 2. CÁP THẢ THẲNG ĐỨNG XUỐNG CÁC TRẠM (DROP CABLES) */}
        {/* Drop 1: Cổng Vào (X = 190, Y: 36 -> 78) */}
        <line x1="190" y1="36" x2="190" y2="78" stroke="#0284C7" strokeWidth="3" />
        <circle cx="190" cy="78" r="4.5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="2" />

        {/* Drop 2: Trạm 1 (X = 820, Y: 36 -> 78) */}
        <line x1="820" y1="36" x2="820" y2="78" stroke="#0284C7" strokeWidth="3" />
        <circle cx="820" cy="78" r="5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="2" />

        {/* Drop 3: Trạm 2 (X = 1940, Y: 36 -> 78) */}
        <line x1="1940" y1="36" x2="1940" y2="78" stroke="#D97706" strokeWidth="3" />
        <circle cx="1940" cy="78" r="5" fill="#D97706" stroke="#FFFFFF" strokeWidth="2" />

        {/* Drop 4: Trạm 3 (X = 3140, Y: 36 -> 78) */}
        <line x1="3140" y1="36" x2="3140" y2="78" stroke="#D97706" strokeWidth="3" />
        <circle cx="3140" cy="78" r="5" fill="#D97706" stroke="#FFFFFF" strokeWidth="2" />

        {/* Drop 5: Trạm 4 (X = 4080, Y: 36 -> 78) */}
        <line x1="4080" y1="36" x2="4080" y2="78" stroke="#10B981" strokeWidth="3" />
        <circle cx="4080" cy="78" r="5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />

        {/* Drop 6: Cổng Tầng 4 (X = 4460, Y: 36 -> 78) */}
        <line x1="4460" y1="36" x2="4460" y2="78" stroke="#0284C7" strokeWidth="3" />
        <circle cx="4460" cy="78" r="5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="2" />

        {/* ================= 3. ĐƯỜNG DẪN DÒNG CHẢY KẾT NỐI LIÊN TRẠM ================= */}

        {/* --- [CỔNG VÀO -> TRẠM 1]: Từ cổng vào (X: 310, Y: 220) sang Trạm 1 (X: 360, Y: 220) --- */}
        <line x1="310" y1="220" x2="360" y2="220" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
        <line x1="310" y1="220" x2="360" y2="220" stroke="#BAE6FD" strokeWidth="2" className="animate-stream-fast-f3" />

        {/* --- [TRONG TRẠM 1]: Cầu nối giữa Smartphone (X: 808, Y: 240) sang Sức Lao Động (X: 832, Y: 240) --- */}
        <line x1="808" y1="240" x2="832" y2="240" stroke="#0284C7" strokeWidth="3.5" strokeDasharray="4 4" />
        <circle cx="820" cy="240" r="5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="2" className="pulse-aura-f3" />

        {/* --- [TRẠM 1 -> TRẠM 2]: Cổng ra Trạm 1 (X: 1280, Y: 290) -> Phân nhánh vào Trạm 2 --- */}
        <line x1="1280" y1="290" x2="1320" y2="290" stroke="#0284C7" strokeWidth="5" strokeLinecap="round" />
        {/* Node chia 3 pha tại (X: 1320, Y: 290) */}
        <circle cx="1320" cy="290" r="7" fill="#0F172A" stroke="#0284C7" strokeWidth="2.5" className="pulse-aura-f3" />
        <circle cx="1320" cy="290" r="3" fill="#38BDF8" />

        {/* Nhánh 1 (Tư bản bất biến c - Trên): (1320, 290) -> (1380, 175) */}
        <path d="M 1320 290 C 1345 290, 1355 175, 1380 175" stroke="#0284C7" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 1320 290 C 1345 290, 1355 175, 1380 175" stroke="#BAE6FD" strokeWidth="2" fill="none" className="animate-stream-fast-f3" />

        {/* Nhánh 2 (Tư bản khả biến v - Giữa): (1320, 290) -> (1380, 290) */}
        <line x1="1320" y1="290" x2="1380" y2="290" stroke="#0284C7" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="1320" y1="290" x2="1380" y2="290" stroke="#38BDF8" strokeWidth="2" className="animate-stream-fast-f3" />

        {/* Nhánh 3 (Giá trị thặng dư m - Dưới): (1320, 290) -> (1380, 405) */}
        <path d="M 1320 290 C 1345 290, 1355 405, 1380 405" stroke="#D97706" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 1320 290 C 1345 290, 1355 405, 1380 405" stroke="#FDE68A" strokeWidth="2" fill="none" className="animate-stream-fast-f3" />

        {/* --- [TRONG TRẠM 2]: Cầu nối giá trị mới giữa v và m --- */}
        {/* Arc nối từ v (X: 1940, Y: 340) sang m (X: 2320, Y: 340) thể hiện v + m */}
        <path
          d="M 1940 340 C 2050 375, 2210 375, 2320 340"
          stroke="#10B981"
          strokeWidth="3.5"
          strokeDasharray="6 6"
          fill="none"
        />

        {/* --- [TRẠM 2 -> TRẠM 3]: Cổng ra Trạm 2 (X: 2500, Y: 290) -> Trạm 3 Simulator (X: 2600, Y: 290) --- */}
        <path
          d="M 2500 290 L 2600 290"
          stroke="url(#gradSurplusFlow)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          filter="url(#shadowF3Precise)"
        />
        <path
          d="M 2500 290 L 2600 290"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          className="animate-stream-fast-f3"
        />
        <circle cx="2550" cy="290" r="6" fill="#D97706" stroke="#FFFFFF" strokeWidth="2" className="pulse-aura-f3" />

        {/* --- [TRẠM 3 -> TRẠM 4]: Cổng ra Trạm 3 (X: 3680, Y: 290) -> Phân nhánh Ngã Rẽ Chiến Lược (X: 3780) --- */}
        <line x1="3680" y1="290" x2="3730" y2="290" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />
        <circle cx="3730" cy="290" r="7" fill="#0F172A" stroke="#D97706" strokeWidth="2.5" className="pulse-aura-f3" />

        {/* Nhánh Thấp (Bẫy Tuyệt Đối - Đỏ): Từ (3730, 290) uốn xuống (3780, 395) */}
        <path d="M 3730 290 C 3750 290, 3755 395, 3780 395" stroke="#DC2626" strokeWidth="4" strokeDasharray="5 5" fill="none" />

        {/* Nhánh Cao (Bứt Phá Tương Đối - Xanh Lá): Từ (3730, 290) uốn lên (3780, 185) */}
        <path d="M 3730 290 C 3750 290, 3755 185, 3780 185" stroke="#10B981" strokeWidth="5" fill="none" strokeLinecap="round" filter="url(#shadowF3Precise)" />
        <path d="M 3730 290 C 3750 290, 3755 185, 3780 185" stroke="#A7F3D0" strokeWidth="2.5" fill="none" className="animate-stream-fast-f3" />

        {/* --- [TRẠM 4 -> CỔNG TẦNG 4]: Cổng ra Trạm 4 (X: 4380, Y: 290) -> Cổng Tầng 4 (X: 4460, Y: 290) --- */}
        <line x1="4380" y1="290" x2="4460" y2="290" stroke="#10B981" strokeWidth="5" strokeLinecap="round" />
        <line x1="4380" y1="290" x2="4460" y2="290" stroke="#A7F3D0" strokeWidth="2.5" className="animate-stream-fast-f3" />
        <circle cx="4420" cy="290" r="6" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" className="pulse-aura-f3" />
      </svg>

      {/* ================= KM 0.0: CỔNG VÀO TẦNG 03 (X: 70 - 310) ================= */}
      <div style={{ left: "70px", top: "95px" }} className="absolute w-[240px] pointer-events-auto z-20">
        <div className="p-5 rounded-3xl bg-white/95 border border-slate-200/80 shadow-md backdrop-blur-md">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-electric-blue animate-pulse" />
            <span className="font-mono text-xs font-bold text-electric-blue uppercase tracking-wider">
              CỬA VÀO TẦNG 03
            </span>
          </div>
          <h2 className="font-heading font-black text-xl text-slate-900 leading-tight mb-2">
            GIẢI MÃ BẢN CHẤT GIÁ TRỊ &amp; THẶNG DƯ
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Máy móc (c) chỉ bảo toàn giá trị cũ. Duy nhất <strong>Sức lao động sống (v)</strong> mới sáng tạo nên{" "}
            <strong>Giá trị mới &amp; Thặng dư (m)</strong>.
          </p>
          <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>CÔNG THỨC GỐC</span>
            <span className="text-electric-blue font-bold">W = c + v + m</span>
          </div>
        </div>
      </div>

      {/* ================= TRẠM 01: BÓC TÁCH SMARTPHONE & HẠT NHÂN SỨC LAO ĐỘNG (X: 360 - 1280, Rộng: 920px) ================= */}
      <div style={{ left: "360px", top: "42px" }} className="absolute flex items-center gap-3 z-20 pointer-events-auto">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-electric-blue text-white flex items-center gap-1.5 shadow-xs">
          <span>⚡ TRẠM 01</span>
        </span>
        <span className="font-heading font-black text-xl text-slate-900 tracking-tight">
          BÓC TÁCH HÀNG HÓA &amp; SỨC LAO ĐỘNG
        </span>
        <span className="text-slate-300 font-mono">/</span>
        <span className="text-xs font-mono font-bold text-slate-500">
          Hai thuộc tính hàng hóa vs Hạt nhân tạo giá trị thặng dư
        </span>
      </div>

      {/* SÂN KHẤU TRẠM 1: 2 THẺ LỚN THOÁNG ĐÃNG VỚI ẢNH THỰC TẾ BO GÓC (920px x 450px) */}
      <div style={{ left: "360px", top: "85px" }} className="absolute w-[920px] h-[450px] pointer-events-auto z-20 flex gap-6">
        
        {/* Khối Trái: CHIẾC SMARTPHONE $1.000 (VẬT PHẨM THÔNG THƯỜNG) */}
        <div className="w-[448px] bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-md p-5 flex flex-col justify-between group hover:border-sky-300 transition-all">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                HÀNG HÓA CÔNG NGHỆ
              </span>
              <span className="text-sm font-mono font-black text-slate-900">$1.000 USD</span>
            </div>

            <h3 className="font-heading font-black text-lg text-slate-900 mb-2">
              CHIẾC SMARTPHONE &amp; 2 THUỘC TÍNH
            </h3>

            {/* ẢNH THỰC TẾ BO GÓC SẮC NÉT: SMARTPHONE HARDWARE TEARDOWN */}
            <div className="w-full h-[180px] rounded-2xl overflow-hidden relative border border-slate-200 shadow-inner bg-slate-950 mb-3 group">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
                alt="Smartphone teardown and hardware architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute top-2.5 left-2.5">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-sky-500 text-white uppercase tracking-wider shadow-xs">
                  FLAGSHIP TEARDOWN
                </span>
              </div>
              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                <div className="text-[11px] font-mono font-bold text-sky-300">VẬT PHẨM KẾT TINH</div>
                <p className="text-[10px] text-slate-300">Khung viền Titanium, Màn OLED 120Hz, Chip xử lý 3nm.</p>
              </div>
            </div>

            {/* 2 Thuộc Tính Rõ Ràng, Ít Chữ */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-sky-700 block text-[11px] mb-0.5">GIÁ TRỊ SỬ DỤNG</span>
                <span className="text-[11px] text-slate-600">Nghe gọi, hiển thị 120Hz, xử lý tác vụ AI.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-amber-700 block text-[11px] mb-0.5">GIÁ TRỊ (VALUE)</span>
                <span className="text-[11px] text-slate-600">Hao phí lao động xã hội trừu tượng kết tinh.</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-2xl bg-slate-100/80 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
            <span className="font-medium">Tiêu dùng hàng hóa thông thường:</span>
            <span className="font-mono text-xs font-bold text-slate-600">Hao mòn dần (&Delta;W &le; 0)</span>
          </div>
        </div>

        {/* Khối Phải: HẠNG MỤC ĐẶC BIỆT DUY NHẤT: SỨC LAO ĐỘNG */}
        <div className="w-[448px] bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 shadow-md p-5 flex flex-col justify-between group hover:border-warm-gold transition-all">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold bg-amber-50 text-warm-gold border border-warm-gold/30">
                HÀNG HÓA ĐẶC BIỆT DUY NHẤT
              </span>
              <span className="text-sm font-mono font-black text-warm-gold">CỘI NGUỒN THẶNG DƯ</span>
            </div>

            <h3 className="font-heading font-black text-lg text-slate-900 mb-2">
              SỨC LAO ĐỘNG (LABOR POWER)
            </h3>

            {/* ẢNH THỰC TẾ BO GÓC: KỸ THUẬT VIÊN PHÒNG SẠCH LẮP RÁP VI MẠCH */}
            <div className="w-full h-[180px] rounded-2xl overflow-hidden relative border border-slate-200 shadow-inner bg-slate-950 mb-3 group">
              <img
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80"
                alt="Cleanroom worker operating precision electronics assembly"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute top-2.5 left-2.5">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-amber-500 text-slate-950 uppercase tracking-wider shadow-xs">
                  SỨC LAO ĐỘNG SỐNG
                </span>
              </div>
              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                <div className="text-[11px] font-mono font-bold text-amber-300">CÔNG NHÂN PHÒNG SẠCH</div>
                <p className="text-[10px] text-slate-300">Bán khả năng lao động, không bán kết quả lao động.</p>
              </div>
            </div>

            {/* Sơ đồ Động Lực Học v -> Sức Lao Động -> v + m */}
            <div className="p-3 rounded-2xl bg-amber-50/50 border border-amber-200/70 flex items-center justify-between text-xs">
              <div className="flex flex-col items-center">
                <span className="font-mono text-base font-black text-sky-700">v : $50</span>
                <span className="text-[10px] text-slate-500">Lương bù đắp</span>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-500" />
              <div className="flex flex-col items-center">
                <span className="font-mono text-xs font-black text-amber-700 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  LAO ĐỘNG SỐNG
                </span>
                <span className="text-[10px] text-slate-500">Tiêu dùng trong ca</span>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-500" />
              <div className="flex flex-col items-center">
                <span className="font-mono text-base font-black text-growth-green">v + m : $350</span>
                <span className="text-[10px] text-growth-green font-bold">Giá trị mới tạo ra</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-2xl bg-amber-50 border border-warm-gold/40 text-xs text-amber-900 flex items-center justify-between">
            <span className="font-medium">Tiêu dùng sức lao động:</span>
            <span className="font-mono text-xs font-bold text-warm-gold">Sáng tạo thặng dư (&Delta;W &gt; 0) ✨</span>
          </div>
        </div>
      </div>

      {/* ================= TRẠM 02: LÒ PHÂN RÃ BA PHA W = c + v + m (X: 1380 - 2500, Rộng: 1120px) ================= */}
      <div style={{ left: "1380px", top: "42px" }} className="absolute flex items-center gap-3 z-20 pointer-events-auto">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-amber-500 text-slate-950 flex items-center gap-1.5 shadow-xs">
          <span>⚡ TRẠM 02</span>
        </span>
        <span className="font-heading font-black text-xl text-slate-900 tracking-tight">
          LÒ PHÂN RÃ TƯ BẢN: W = c + v + m
        </span>
        <span className="text-slate-300 font-mono">/</span>
        <span className="text-xs font-mono font-bold text-slate-500">
          Máy móc c vô hồn vs Sức lao động sống v &amp; Thặng dư m
        </span>
      </div>

      {/* SÂN KHẤU TRẠM 2: 3 KHOANG RỘNG RÃI KÈM ẢNH THỰC TẾ & BẢNG TỔNG QUAN (1120px x 450px) */}
      <div style={{ left: "1380px", top: "85px" }} className="absolute w-[1120px] h-[450px] pointer-events-auto z-20 flex flex-col justify-between">
        
        {/* 3 Khoang Ba Pha */}
        <div className="grid grid-cols-3 gap-5">
          {/* Khoang 1: TƯ BẢN BẤT BIẾN (c) */}
          <div
            onClick={() => setSelectedChamber("c")}
            className={cn(
              "bg-white/95 backdrop-blur-md rounded-3xl p-4 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.01]",
              selectedChamber === "c"
                ? "border-2 border-sky-500 shadow-lg ring-4 ring-sky-500/10"
                : "border border-slate-200 shadow-sm hover:border-slate-300"
            )}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded-full font-mono text-[10px] font-bold bg-sky-50 text-sky-700 border border-sky-200">
                  KHOANG 1 • TƯ BẢN BẤT BIẾN
                </span>
                <span className="font-mono text-sm font-black text-sky-700">$650 (65%)</span>
              </div>

              <h4 className="font-heading font-black text-lg text-slate-900 mb-1">
                c : MÁY MÓC &amp; VẬT LIỆU
              </h4>

              {/* ẢNH THỰC TẾ BO GÓC: ROBOT TỰ ĐỘNG HÓA & MÁY QUANG HỌC */}
              <div className="w-full h-[125px] rounded-2xl overflow-hidden relative border border-slate-200 shadow-inner bg-slate-950 mb-2.5">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="Industrial robotic arm automated manufacturing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-2 left-2.5 right-2.5 text-[10px] font-mono text-slate-200">
                  CỖ MÁY VÔ HỒN • CHỈ CHUYỂN DỊCH KHẤU HAO
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-snug">
                Robot dập, máy quang học EUV, nhà xưởng &amp; vật liệu chip thô.
              </p>
            </div>

            <div className="mt-3 p-2 rounded-xl bg-sky-50 border border-sky-200 font-mono text-xs text-sky-900 flex items-center justify-between">
              <span>BẢO TOÀN GIÁ TRỊ:</span>
              <span className="font-black text-sky-700">&Delta;W_c = 0</span>
            </div>
          </div>

          {/* Khoang 2: TƯ BẢN KHẢ BIẾN (v) */}
          <div
            onClick={() => setSelectedChamber("v")}
            className={cn(
              "bg-white/95 backdrop-blur-md rounded-3xl p-4 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.01]",
              selectedChamber === "v"
                ? "border-2 border-electric-blue shadow-lg ring-4 ring-electric-blue/10"
                : "border border-slate-200 shadow-sm hover:border-slate-300"
            )}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded-full font-mono text-[10px] font-bold bg-sky-100 text-electric-blue border border-sky-300">
                  KHOANG 2 • TƯ BẢN KHẢ BIẾN
                </span>
                <span className="font-mono text-sm font-black text-electric-blue">$50 (5%)</span>
              </div>

              <h4 className="font-heading font-black text-lg text-slate-900 mb-1">
                v : SỨC LAO ĐỘNG SỐNG
              </h4>

              {/* ẢNH THỰC TẾ BO GÓC: KỸ SƯ PHÒNG SẠCH VẬN HÀNH */}
              <div className="w-full h-[125px] rounded-2xl overflow-hidden relative border border-slate-200 shadow-inner bg-slate-950 mb-2.5">
                <img
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
                  alt="Cleanroom engineers operating precision semiconductor line"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-2 left-2.5 right-2.5 text-[10px] font-mono text-sky-300">
                  LAO ĐỘNG SỐNG • TÁI TẠO &amp; SINH GIÁ TRỊ MỚI
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-snug">
                Tiền lương trả cho hơn 400.000 công nhân phòng sạch và kỹ sư vận hành.
              </p>
            </div>

            <div className="mt-3 p-2 rounded-xl bg-sky-50 border border-sky-200 font-mono text-xs text-slate-800 flex items-center justify-between">
              <span>BẢN CHẤT:</span>
              <span className="font-black text-electric-blue">TÁI TẠO &amp; SINH MỚI</span>
            </div>
          </div>

          {/* Khoang 3: GIÁ TRỊ THẶNG DƯ (m) */}
          <div
            onClick={() => setSelectedChamber("m")}
            className={cn(
              "bg-white/95 backdrop-blur-md rounded-3xl p-4 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-[1.01]",
              selectedChamber === "m"
                ? "border-2 border-warm-gold shadow-lg ring-4 ring-warm-gold/10"
                : "border border-slate-200 shadow-sm hover:border-warm-gold"
            )}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded-full font-mono text-[10px] font-bold bg-amber-50 text-warm-gold border border-warm-gold/40">
                  KHOANG 3 • THẶNG DƯ TƯ BẢN
                </span>
                <span className="font-mono text-sm font-black text-warm-gold">$300 (30%)</span>
              </div>

              <h4 className="font-heading font-black text-lg text-slate-900 mb-1">
                m : THẶNG DƯ TÍCH LŨY
              </h4>

              {/* ẢNH THỰC TẾ BO GÓC: TÒA THÁP TRỤ SỞ TẬP ĐOÀN CÔNG NGHỆ */}
              <div className="w-full h-[125px] rounded-2xl overflow-hidden relative border border-slate-200 shadow-inner bg-slate-950 mb-2.5">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="High-tech corporate skyscraper headquarters"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-2 left-2.5 right-2.5 text-[10px] font-mono text-amber-300">
                  TẬP ĐOÀN ĐẦU ĐÀN HÚT TRỌN LỢI NHUẬN
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-snug">
                Phần giá trị mới ngoài tiền lương do công nhân tạo ra, chảy về tập đoàn tư bản.
              </p>
            </div>

            <div className="mt-3 p-2 rounded-xl bg-amber-50 border border-amber-200 font-mono text-xs text-amber-900 flex items-center justify-between">
              <span>TỶ SUẤT THẶNG DƯ:</span>
              <span className="font-black text-warm-gold">m&apos; = 600% (GẤP 6 LẦN LƯƠNG)</span>
            </div>
          </div>
        </div>

        {/* Dynamic HUD Master Inspector */}
        <div className="p-4 rounded-3xl bg-white text-slate-900 flex items-center justify-between border-2 border-slate-900 shadow-md">
          <div className="flex items-center gap-4">
            <div
              className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-mono font-black border-2 shrink-0",
                selectedChamber === "c" && "bg-sky-50 border-sky-500 text-sky-700",
                selectedChamber === "v" && "bg-sky-100 border-electric-blue text-electric-blue",
                selectedChamber === "m" && "bg-amber-50 border-warm-gold text-warm-gold"
              )}
            >
              {selectedChamber.toUpperCase()}
            </div>
            <div>
              <div
                className={cn(
                  "font-heading font-black text-base",
                  selectedChamber === "c" && "text-sky-700",
                  selectedChamber === "v" && "text-electric-blue",
                  selectedChamber === "m" && "text-amber-700"
                )}
              >
                {selectedChamber === "c" && "TƯ BẢN BẤT BIẾN (c): CỖ MÁY CHỈ DỊCH CHUYỂN GIÁ TRỊ CŨ"}
                {selectedChamber === "v" && "TƯ BẢN KHẢ BIẾN (v): SỨC LAO ĐỘNG SỐNG TẠO GIÁ TRỊ MỚI"}
                {selectedChamber === "m" && "GIÁ TRỊ THẶNG DƯ (m): CỘI NGUỒN TẬP ĐOÀN TÍCH LŨY TƯ BẢN"}
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                {selectedChamber === "c" &&
                  "Dù robot tối tân đến đâu, máy móc chỉ chuyển dần giá trị hao mòn vào sản phẩm mới (ΔW = 0)."}
                {selectedChamber === "v" &&
                  "Tiền lương công nhân lắp ráp. Không giống máy móc, sức lao động sống biến đổi về lượng và sinh ra thặng dư."}
                {selectedChamber === "m" &&
                  "Phần dôi ra ngoài lương bị tập đoàn tư bản chiếm hữu. Đây là động lực duy nhất của chuỗi giá trị toàn cầu."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0 font-mono text-xs pl-4 border-l border-slate-300">
            <div>
              <span className="text-slate-500 block text-[10px] font-medium">CÔNG THỨC TOÀN BỘ</span>
              <span className="font-bold text-slate-900 text-sm">W = 650c + 50v + 300m = $1.000</span>
            </div>
            <div className="px-3.5 py-2 rounded-2xl bg-growth-green/15 border border-growth-green text-growth-green font-black text-sm">
              v + m = $350 (GIÁ TRỊ MỚI)
            </div>
          </div>
        </div>
      </div>

      {/* ================= TRẠM 03: ĐẠI ĐỒNG HỒ THE WORKING DAY SIMULATOR (X: 2600 - 3680, Rộng: 1080px) ================= */}
      <div style={{ left: "2600px", top: "42px" }} className="absolute flex items-center gap-3 z-20 pointer-events-auto">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-amber-500 text-slate-950 flex items-center gap-1.5 shadow-xs">
          <span>⚡ TRẠM 03</span>
        </span>
        <span className="font-heading font-black text-xl text-slate-900 tracking-tight">
          ĐẠI ĐỒNG HỒ CA LAO ĐỘNG (WORKING DAY SIMULATOR)
        </span>
        <span className="text-slate-300 font-mono">/</span>
        <span className="text-xs font-mono font-bold text-slate-500">
          Mô hình hóa tỷ suất thặng dư m&apos; theo thời gian thực
        </span>
      </div>

      {/* SÂN KHẤU TRẠM 3: GIAO DIỆN PHÒNG THÍ NGHIỆM MỞ RỘNG (1080px x 450px) */}
      <div style={{ left: "2600px", top: "85px" }} className="absolute w-[1080px] h-[450px] pointer-events-auto z-20 flex flex-col justify-between">
        
        {/* 1. BĂNG ĐO THỜI GIAN TOÀN CẢNH */}
        <div className="p-4 rounded-3xl bg-white border-2 border-slate-900 text-slate-900 shadow-md space-y-2.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-sky-700 font-bold">
                <span className="w-3 h-3 rounded-full bg-electric-blue" />
                Thời gian Tất Yếu (v): <span className="text-sm">{simV.toFixed(1)}h</span>
              </span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-2 text-amber-700 font-bold">
                <span className="w-3 h-3 rounded-full bg-warm-gold" />
                Thời gian Thặng Dư (m): <span className="text-sm">{surplusM.toFixed(1)}h</span>
              </span>
            </div>

            {/* Preset Scenarios Switcher */}
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-2xl border border-slate-300">
              <button
                onClick={() => applyPresetScenario("absolute")}
                className={cn(
                  "px-3 py-1 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer",
                  activeScenario === "absolute"
                    ? "bg-rose-600 text-white shadow-xs"
                    : "text-rose-700 hover:bg-rose-100"
                )}
              >
                1. TĂNG CA (THẶNG DƯ TUYỆT ĐỐI)
              </button>
              <button
                onClick={() => applyPresetScenario("relative")}
                className={cn(
                  "px-3 py-1 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer",
                  activeScenario === "relative"
                    ? "bg-growth-green text-white shadow-xs"
                    : "text-growth-green hover:bg-emerald-100"
                )}
              >
                2. CÔNG NGHỆ CAO (THẶNG DƯ TƯƠNG ĐỐI)
              </button>
              <button
                onClick={() => applyPresetScenario("default")}
                className="px-2.5 py-1 rounded-xl font-mono text-xs text-slate-600 hover:text-slate-900 cursor-pointer font-medium"
              >
                MẶC ĐỊNH
              </button>
            </div>
          </div>

          {/* Dynamic Progress Bar */}
          <div className="relative w-full h-12 bg-slate-100 rounded-2xl overflow-hidden flex border-2 border-slate-300 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-sky-600 to-sky-500 flex items-center justify-between px-4 transition-all duration-300 relative"
              style={{ width: `${pctV}%` }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="font-mono text-xs font-black text-white tracking-wider">LƯƠNG CÔNG NHÂN (v)</span>
              </div>
              <span className="font-mono text-xs bg-white/25 px-2 py-0.5 rounded text-white font-bold">{pctV}%</span>
            </div>

            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-between px-4 transition-all duration-300 relative"
              style={{ width: `${pctM}%` }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="font-mono text-xs font-black text-white tracking-wider">THẶNG DƯ BỊ CHIẾM (m)</span>
              </div>
              <span className="font-mono text-xs bg-white/25 px-2 py-0.5 rounded text-white font-bold">{pctM}%</span>
            </div>
          </div>

          <div className="flex justify-between text-[11px] font-mono text-slate-500 px-1">
            <span>0h (Bắt đầu ca)</span>
            <span>{simV.toFixed(1)}h (Hết giờ bù lương v)</span>
            <span>{simT.toFixed(1)}h (Kết thúc ca làm việc)</span>
            <span className="text-rose-600 font-bold">14.0h (Giới hạn sinh học)</span>
          </div>
        </div>

        {/* 2. INDUSTRIAL SLIDERS & SPEEDOMETER GAUGE */}
        <div className="grid grid-cols-12 gap-5 items-stretch">
          {/* Sliders Panel */}
          <div className="col-span-7 bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200 p-5 shadow-sm space-y-3.5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="font-bold text-slate-700">1. ĐỘ DÀI CA LÀM VIỆC (T):</span>
                <span className="font-black text-slate-900 text-sm">{simT.toFixed(1)} Giờ</span>
              </div>
              <input
                type="range"
                min="6"
                max="14"
                step="0.5"
                value={simT}
                onChange={(e) => handleTChange(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-warm-gold"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="font-bold text-slate-700">2. THỜI GIAN TẤT YẾU BÙ LƯƠNG (v):</span>
                <span className="font-black text-electric-blue text-sm">{simV.toFixed(1)} Giờ</span>
              </div>
              <input
                type="range"
                min="2"
                max="6"
                step="0.5"
                value={simV}
                onChange={(e) => handleVChange(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-electric-blue"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="font-bold text-slate-700">3. CẤU TẠO HỮU CƠ TƯ BẢN (c/v):</span>
                <span className="font-black text-slate-700 text-sm">c/v = {simC.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                step="0.5"
                value={simC}
                onChange={(e) => setSimC(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-700"
              />
            </div>
          </div>

          {/* Gauge & Insights Panel */}
          <div className="col-span-5 bg-gradient-to-br from-white to-amber-50/60 backdrop-blur-md rounded-3xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <span className="font-mono text-xs font-bold text-warm-gold uppercase tracking-wider">
                TỶ SUẤT THẶNG DƯ (m&apos;)
              </span>
              <span className="font-heading font-black text-3xl text-warm-gold">{mPrime}%</span>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2 font-mono text-xs">
              <div className="p-2.5 rounded-2xl bg-white border border-slate-200">
                <span className="text-[10px] text-slate-500 block">THỜI GIAN THẶNG DƯ</span>
                <strong className="text-slate-900 text-sm">{surplusM.toFixed(1)} Giờ / ca</strong>
              </div>
              <div className="p-2.5 rounded-2xl bg-white border border-slate-200">
                <span className="text-[10px] text-slate-500 block">TỶ SUẤT LỢI NHUẬN (p&apos;)</span>
                <strong className="text-growth-green text-sm">{pPrime}%</strong>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-tight">
              {parseFloat(mPrime) > 200 ? (
                <span>
                  🔥 <strong>Bóc lột thặng dư cao ({mPrime}%):</strong> Mỗi 1h làm cho mình, công nhân làm{" "}
                  {(surplusM / simV).toFixed(1)}h không công cho chủ!
                </span>
              ) : simT > 10 ? (
                <span>
                  ⚠️ <strong>Cảnh báo tăng ca kiệt sức ({simT}h):</strong> Thặng dư tuyệt đối chạm giới hạn sinh lý và
                  nguy cơ phản kháng!
                </span>
              ) : simV <= 2.5 ? (
                <span>
                  🚀 <strong>Đột phá Thặng dư tương đối:</strong> Nhờ công nghệ cao, chỉ mất {simV}h bù lương, thặng dư
                  nở rộng tự nhiên!
                </span>
              ) : (
                <span>
                  💡 <strong>Trạng thái chuẩn:</strong> {simV}h hoàn vốn lương, {surplusM.toFixed(1)}h cống hiến thặng dư.
                  Tỷ suất m&apos; = {mPrime}%.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= TRẠM 04: NGÃ RẼ BỨT PHÁ CHO VIỆT NAM (X: 3780 - 4380, Rộng: 600px) ================= */}
      <div style={{ left: "3780px", top: "42px" }} className="absolute flex items-center gap-3 z-20 pointer-events-auto">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-growth-green text-white flex items-center gap-1.5 shadow-xs">
          <span>⚡ TRẠM 04</span>
        </span>
        <span className="font-heading font-black text-xl text-slate-900 tracking-tight">
          NGÃ RẼ CHIẾN LƯỢC KINH TẾ VIỆT NAM
        </span>
        <span className="text-slate-300 font-mono">/</span>
        <span className="text-xs font-mono font-bold text-slate-500">
          Thoát bẫy thặng dư tuyệt đối
        </span>
      </div>

      {/* SÂN KHẤU TRẠM 4: 2 NHÁNH RÕ RÀNG VỚI ẢNH THỰC TẾ BO GÓC (600px x 450px) */}
      <div style={{ left: "3780px", top: "85px" }} className="absolute w-[600px] h-[450px] pointer-events-auto z-20 flex flex-col justify-between">
        <div className="space-y-3">
          
          {/* Nhánh Dưới: BẪY GIA CÔNG GIÁ RẺ */}
          <div className="p-3.5 rounded-3xl bg-rose-50/80 border border-red-200 shadow-xs relative overflow-hidden group hover:border-red-400 transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold bg-red-100 text-rose-700">
                NHÁNH THẤP: CHẠM TRẦN
              </span>
              <span className="font-mono text-xs font-bold text-rose-700">BIÊN LÃI 2-3%</span>
            </div>

            <h4 className="font-heading font-black text-base text-slate-900 mb-1">
              BẪY THẶNG DƯ TUYỆT ĐỐI (LƯƠNG RẺ &amp; TĂNG CA)
            </h4>

            <p className="text-xs text-slate-600 leading-relaxed mb-2">
              Dựa vào lao động giá rẻ và tăng ca quá mức. Khi chi phí tăng, FDI sẽ dịch chuyển sang Ấn Độ hay Indonesia.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-700">
              <ShieldAlert className="w-4 h-4 shrink-0 text-rose-600" />
              <span>HẬU QUẢ: Mắc kẹt ở đáy nụ cười, giá trị giữ lại nội địa (DVA) teo tóp!</span>
            </div>
          </div>

          {/* Nhánh Trên: BỨT PHÁ BÁN DẪN & R&D */}
          <div className="p-3.5 rounded-3xl bg-emerald-50/70 border-2 border-emerald-300 shadow-md relative overflow-hidden group hover:border-growth-green transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold bg-growth-green/15 text-growth-green">
                NHÁNH CAO: BỀN VỮNG
              </span>
              <span className="font-mono text-xs font-bold text-growth-green">MỤC TIÊU DVA &gt; 40%</span>
            </div>

            <h4 className="font-heading font-black text-base text-slate-900 mb-1">
              LÀM CHỦ THẶNG DƯ TƯƠNG ĐỐI (CÔNG NGHỆ CAO)
            </h4>

            {/* ẢNH THỰC TẾ BO GÓC: KỸ SƯ BÁN DẪN & R&D LAB */}
            <div className="w-full h-[95px] rounded-2xl overflow-hidden relative border border-emerald-200 shadow-inner bg-slate-950 mb-2">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                alt="Semiconductor fabrication cleanroom and microchip wafer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-1.5 left-2.5 right-2.5 text-[10px] font-mono text-emerald-300">
                50.000 KỸ SƯ BÁN DẪN 2030 (QĐ 1018/QĐ-TTg)
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-growth-green shrink-0" />
                <span>Tự chủ linh kiện Tier 1-2</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-growth-green shrink-0" />
                <span>Sở hữu IP Make in Vietnam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Portal Lead-in Indicator */}
        <div className="p-3 rounded-2xl bg-white text-slate-900 border-2 border-slate-900 font-mono text-xs font-black tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm">
          <span>CỔNG TẦNG 04 Ở PHÍA TRƯỚC (X: 4460m) &rarr;</span>
        </div>
      </div>
    </div>
  );
}
