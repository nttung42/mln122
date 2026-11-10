"use client";

import * as React from "react";
import { AlertTriangle, ArrowRight, Globe, Anchor, Cpu, Box, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Floor1OpenExhibitionProps {
  charX: number;
}

export function Floor1OpenExhibition({ charX }: Floor1OpenExhibitionProps) {
  // Realtime Counter ticker for Export $200.3B
  const [exportCounter, setExportCounter] = React.useState(180.0);
  // Hover state for Smiling Curve Points (A, B, C)
  const [hoveredPoint, setHoveredPoint] = React.useState<"A" | "B" | "C" | null>(null);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setExportCounter((prev) => {
        if (prev >= 200.3) {
          clearInterval(timer);
          return 200.3;
        }
        return +(prev + 0.9).toFixed(1);
      });
    }, 45);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full pointer-events-none select-none">
      
      {/* DIRECT INLINE STYLES FOR ZERO-DEPENDENCY GUARANTEED ANIMATIONS */}
      <style>{`
        @keyframes conveyorBeltTreads {
          0% { background-position: 0 0; }
          100% { background-position: -46px 0; }
        }
        @keyframes phonesConveyorRun {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes rollerSpinCCW {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-belt-stripes {
          background-image: repeating-linear-gradient(
            -60deg,
            #475569 0px,
            #475569 11px,
            #1e293b 11px,
            #1e293b 23px
          );
          background-size: 26.5px 100%;
          animation: conveyorBeltTreads 0.5s linear infinite !important;
        }
        .animate-phones-run {
          display: flex !important;
          animation: phonesConveyorRun 5.5s linear infinite !important;
          will-change: transform;
        }
        .animate-roller-spin {
          animation: rollerSpinCCW 1.2s linear infinite !important;
          transform-origin: center;
        }
      `}</style>
      
      {/* ========================================================================= */}
      {/* MASTER OVERHEAD CABLE CONDUIT (CHẠY RIÊNG BIỆT TRÊN TRẦN TẠI Y = 40PX) */}
      {/* Tuyệt đối KHÔNG cắt hay ăn vào bất kỳ component nào bên dưới! */}
      {/* ========================================================================= */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="cableShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.08" />
          </filter>
          <filter id="cableGlowRed" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#DC2626" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* 1. ĐƯỜNG CÁP CHÍNH CHẠY SUỐT TRÊN TRẦN (Y = 40px) */}
        {/* Nguồn điện từ X=40 đến Cổng X=3850 */}
        <line x1="40" y1="40" x2="3850" y2="40" stroke="#94A3B8" strokeWidth="4" filter="url(#cableShadow)" />
        <line x1="40" y1="40" x2="3850" y2="40" stroke="#0284C7" strokeWidth="2.5" className="pulse-cable-fast" />

        {/* 2. CÁP THẢ THẲNG ĐỨNG (DROP CABLES) XUỐNG ĐỈNH CÁC CỖ MÁY - CÁCH MÉP 25PX */}
        
        {/* Thả xuống đỉnh Băng chuyền Trạm 1 (X = 500, Y: 40 -> 80) */}
        <line x1="500" y1="40" x2="500" y2="78" stroke="#10B981" strokeWidth="3" />
        <circle cx="500" cy="78" r="4.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />

        {/* Thả xuống đỉnh Bảng Cảng Biển & $200.3B (X = 1110, Y: 40 -> 80) */}
        <line x1="1110" y1="40" x2="1110" y2="78" stroke="#10B981" strokeWidth="3" />
        <circle cx="1110" cy="78" r="4.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />

        {/* Thả xuống đỉnh Buồng Quét X-Ray Trạm 2 (X = 1980, Y: 40 -> 80) */}
        <line x1="1980" y1="40" x2="1980" y2="78" stroke="#F59E0B" strokeWidth="3" />
        <circle cx="1980" cy="78" r="4.5" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" />

        {/* SỢI CÁP ĐỎ HÚT DÒNG TIỀN TỪ CHIP SOC LÊN TRẦN NHÀ (X = 2050, Y: 130 -> 0) */}
        {/* Chạy thẳng đứng lên trần nhà trong khoảng không thoáng đạt */}
        <line x1="2050" y1="80" x2="2050" y2="0" stroke="#DC2626" strokeWidth="3.5" filter="url(#cableGlowRed)" />
        <line x1="2050" y1="80" x2="2050" y2="0" stroke="#F87171" strokeWidth="2" className="pulse-cable" />
        <circle cx="2050" cy="80" r="4.5" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />

        {/* Thả xuống đỉnh Hệ Trục Oxy Trạm 3 (X = 3150, Y: 40 -> 78) */}
        <line x1="3150" y1="40" x2="3150" y2="78" stroke="#D97706" strokeWidth="3" />
        <circle cx="3150" cy="78" r="4.5" fill="#D97706" stroke="#FFFFFF" strokeWidth="2" />

        {/* Cáp cắm thẳng đứng vào đỉnh Cổng Chuyển Tầng (X = 3850, Y: 40 -> 85) */}
        <line x1="3850" y1="40" x2="3850" y2="85" stroke="#0284C7" strokeWidth="4" />
        <circle cx="3850" cy="85" r="5" fill="#0284C7" stroke="#FFFFFF" strokeWidth="2" />

        {/* CÁC CHỐT TREO CÁP TRÊN TRẦN (CEILING ANCHORS) */}
        <g fill="#475569" stroke="#E2E8F0" strokeWidth="1.5">
          <circle cx="500" cy="40" r="4" />
          <circle cx="1110" cy="40" r="4" />
          <circle cx="1980" cy="40" r="4" />
          <circle cx="3150" cy="40" r="4" />
          <circle cx="3850" cy="40" r="5" fill="#0284C7" />
        </g>
      </svg>

      {/* ========================================================================= */}
      {/* CỤM 01: ĐẠI CÔNG XƯỞNG TOÀN CẦU (BỐ CỤC TO LỚN, VỮNG CHÃI, Y = 60 -> 520) */}
      {/* ========================================================================= */}

      {/* 1.1. Plaque Nhãn Trạm Treo Tường */}
      <div
        style={{ left: "140px", top: "50px" }}
        className="absolute pointer-events-auto flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/95 border border-slate-200 shadow-xs backdrop-blur-md"
      >
        <span className="w-3 h-3 rounded-full bg-emerald animate-ping" />
        <span className="font-mono text-sm font-black text-emerald uppercase tracking-wider">
          TRẠM 01 &bull; ĐẠI CÔNG XƯỞNG TOÀN CẦU
        </span>
        <span className="text-slate-300">|</span>
        <span className="text-xs font-heading font-bold text-slateMuted">Quy mô sản xuất vật lý</span>
      </div>

      {/* 1.2. BĂNG CHUYỀN LẮP RÁP CỠ LỚN (RỘNG 720PX, CAO 210PX) */}
      <div style={{ left: "140px", top: "95px" }} className="absolute pointer-events-auto w-[720px] hover-breath">
        <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-700 mb-2.5 px-2">
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald" />
            DÂY CHUYỀN LẮP RÁP SMARTPHONE TOÀN CẦU &bull; TỶ LỆ 1/5
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald/10 text-emerald font-black border border-emerald/30 text-xs">
            20% SẢN LƯỢNG THẾ GIỚI
          </span>
        </div>

        {/* Khung băng chuyền to lớn, bề thế với dòng điện thoại chạy từ PHẢI sang TRÁI */}
        <div className="h-48 bg-white/95 backdrop-blur-md rounded-3xl border-2 border-emerald-200 shadow-md p-3 relative flex flex-col justify-between overflow-hidden">
          
          {/* 5 CÔNG NHÂN TO RÕ PHÍA TRÊN RAY */}
          <div className="relative z-10 flex items-center justify-around w-full pt-0.5">
            {/* Công nhân 1: Quả cầu Global */}
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center text-slate-500 shadow-xs">
                <Globe className="w-4 h-4 text-slate-500" />
              </div>
              <span className="text-[10px] font-mono font-semibold text-slate-500 mt-0.5">Global #1</span>
            </div>

            {/* Công nhân 2: Quả cầu Global */}
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center text-slate-500 shadow-xs">
                <Globe className="w-4 h-4 text-slate-500" />
              </div>
              <span className="text-[10px] font-mono font-semibold text-slate-500 mt-0.5">Global #2</span>
            </div>

            {/* Công nhân 3: Quả cầu Global */}
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center text-slate-500 shadow-xs">
                <Globe className="w-4 h-4 text-slate-500" />
              </div>
              <span className="text-[10px] font-mono font-semibold text-slate-500 mt-0.5">Global #3</span>
            </div>

            {/* Công nhân 4: Quả cầu Global */}
            <div className="flex flex-col items-center">
              <div className="w-9 h-9 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center text-slate-500 shadow-xs">
                <Globe className="w-4 h-4 text-slate-500" />
              </div>
              <span className="text-[10px] font-mono font-semibold text-slate-500 mt-0.5">Global #4</span>
            </div>

            {/* CÔNG NHÂN 5: GẮN CỜ VIỆT NAM NỔI BẬT LÊN TO VÀ SẮC NÉT */}
            <div className="flex flex-col items-center scale-110">
              <div className="px-2.5 py-0.5 rounded-full bg-red-50 border-2 border-red-500 flex items-center gap-1 shadow-md shadow-red-500/20 animate-pulse">
                <span className="text-sm">🇻🇳</span>
                <span className="text-[10px] font-mono font-black text-red-700 tracking-tight">VIỆT NAM</span>
              </div>
              <span className="text-[9px] font-mono font-black text-emerald mt-0.5">★ Chiếc thứ 5</span>
            </div>
          </div>

          {/* DÂY CHUYỀN CHUYỂN ĐỘNG THỰC SỰ: BĂNG TẢI CONVEYOR ĐẬM CHẤT CÔNG NGHIỆP */}
          <div className="relative z-10 w-full h-[96px] bg-white rounded-2xl border-2 border-slate-900 p-1.5 overflow-hidden flex flex-col justify-between shadow-xs">
            
            {/* Header dải băng chuyền */}
            <div className="flex items-center justify-between px-2 text-[9px] font-mono font-black text-slate-600 select-none z-10">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                DÂY CHUYỀN HOẠT ĐỘNG: 1.2 M/S
              </span>
              <span className="tracking-widest text-slate-500">««« CHIỀU DÂY CHUYỀN CHẠY «««</span>
            </div>

            {/* BĂNG TẢI CHÍNH CÓ MẶT CAO SU RÃNH GÂN VÂN CHẠY LIÊN TỤC VÀ DẢI ĐIỆN THOẠI TRƯỢT */}
            <div className="relative h-[66px] w-full bg-slate-100 rounded-xl overflow-hidden border border-slate-300 flex items-center">
              
              {/* BỀ MẶT CAO SU RÃNH GÂN CHẠY VÙN VỤT (TREADS ANIMATION) */}
              <div className="absolute inset-0 animate-belt-stripes opacity-40 z-0" />

              {/* HAI CON LĂN / BÁNH RĂNG TRỤC QUAY 2 ĐẦU BĂNG CHUYỀN */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-slate-800 bg-white flex items-center justify-center animate-roller-spin z-20 shadow-xs">
                <div className="w-6 h-0.5 bg-slate-600" />
                <div className="h-6 w-0.5 bg-slate-600 absolute" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 border border-slate-500" />
              </div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-slate-800 bg-white flex items-center justify-center animate-roller-spin z-20 shadow-xs">
                <div className="w-6 h-0.5 bg-slate-600" />
                <div className="h-6 w-0.5 bg-slate-600 absolute" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 border border-slate-500" />
              </div>

              {/* DẢI ĐIỆN THOẠI CHẠY TỪ PHẢI SANG TRÁI LIÊN TỤC (EXACT 1200px / 600px LOOP) */}
              <div className="animate-phones-run w-[1200px] shrink-0 z-10 pl-6">
                
                {/* === BỘ 1 (5 CHIẾC) === */}
                {/* 1. Global */}
                <div className="w-[120px] shrink-0 flex flex-col items-center justify-center">
                  <div className="w-10 h-14 rounded-lg border-2 border-slate-300 bg-white shadow-2xs flex flex-col items-center justify-between p-1">
                    <div className="w-3 h-0.5 bg-slate-400 rounded" />
                    <span className="text-[7px] font-mono font-bold text-slate-700">GLOBAL</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  </div>
                  <div className="w-12 h-1 bg-amber-500/40 rounded-full mt-1" />
                </div>

                {/* 2. Global */}
                <div className="w-[120px] shrink-0 flex flex-col items-center justify-center">
                  <div className="w-10 h-14 rounded-lg border-2 border-slate-300 bg-white shadow-2xs flex flex-col items-center justify-between p-1">
                    <div className="w-3 h-0.5 bg-slate-400 rounded" />
                    <span className="text-[7px] font-mono font-bold text-slate-700">GLOBAL</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  </div>
                  <div className="w-12 h-1 bg-amber-500/40 rounded-full mt-1" />
                </div>

                {/* 3. Global */}
                <div className="w-[120px] shrink-0 flex flex-col items-center justify-center">
                  <div className="w-10 h-14 rounded-lg border-2 border-slate-300 bg-white shadow-2xs flex flex-col items-center justify-between p-1">
                    <div className="w-3 h-0.5 bg-slate-400 rounded" />
                    <span className="text-[7px] font-mono font-bold text-slate-700">GLOBAL</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  </div>
                  <div className="w-12 h-1 bg-amber-500/40 rounded-full mt-1" />
                </div>

                {/* 4. Global */}
                <div className="w-[120px] shrink-0 flex flex-col items-center justify-center">
                  <div className="w-10 h-14 rounded-lg border-2 border-slate-300 bg-white shadow-2xs flex flex-col items-center justify-between p-1">
                    <div className="w-3 h-0.5 bg-slate-400 rounded" />
                    <span className="text-[7px] font-mono font-bold text-slate-700">GLOBAL</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  </div>
                  <div className="w-12 h-1 bg-amber-500/40 rounded-full mt-1" />
                </div>

                {/* 5. VIỆT NAM (CHIẾC THỨ 5 NỔI BẬT ĐẶC BIỆT) */}
                <div className="w-[120px] shrink-0 flex flex-col items-center justify-center scale-105">
                  <div className="w-12 h-15 rounded-xl border-2 border-emerald-500 bg-emerald-50 shadow-sm flex flex-col items-center justify-between p-1 ring-2 ring-emerald-500/30">
                    <div className="w-3.5 h-0.5 bg-emerald-600 rounded" />
                    <div className="bg-emerald-600 text-white text-[7px] font-mono font-black px-1.5 py-0.5 rounded shadow-xs text-center leading-tight">
                      ASSEMBLED<br />IN VN 🇻🇳
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  </div>
                  <div className="w-14 h-1.5 bg-emerald-500 rounded-full mt-0.5 shadow-sm" />
                </div>

                {/* === BỘ 2 LẶP LẠI (5 CHIẾC TIẾP THEO ĐỂ VÒNG LẶP LIÊN TỤC VÔ TẬN) === */}
                {/* 1. Global */}
                <div className="w-[120px] shrink-0 flex flex-col items-center justify-center">
                  <div className="w-10 h-14 rounded-lg border-2 border-slate-300 bg-white shadow-2xs flex flex-col items-center justify-between p-1">
                    <div className="w-3 h-0.5 bg-slate-400 rounded" />
                    <span className="text-[7px] font-mono font-bold text-slate-700">GLOBAL</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  </div>
                  <div className="w-12 h-1 bg-amber-500/40 rounded-full mt-1" />
                </div>

                {/* 2. Global */}
                <div className="w-[120px] shrink-0 flex flex-col items-center justify-center">
                  <div className="w-10 h-14 rounded-lg border-2 border-slate-300 bg-white shadow-2xs flex flex-col items-center justify-between p-1">
                    <div className="w-3 h-0.5 bg-slate-400 rounded" />
                    <span className="text-[7px] font-mono font-bold text-slate-700">GLOBAL</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  </div>
                  <div className="w-12 h-1 bg-amber-500/40 rounded-full mt-1" />
                </div>

                {/* 3. Global */}
                <div className="w-[120px] shrink-0 flex flex-col items-center justify-center">
                  <div className="w-10 h-14 rounded-lg border-2 border-slate-300 bg-white shadow-2xs flex flex-col items-center justify-between p-1">
                    <div className="w-3 h-0.5 bg-slate-400 rounded" />
                    <span className="text-[7px] font-mono font-bold text-slate-700">GLOBAL</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  </div>
                  <div className="w-12 h-1 bg-amber-500/40 rounded-full mt-1" />
                </div>

                {/* 4. Global */}
                <div className="w-[120px] shrink-0 flex flex-col items-center justify-center">
                  <div className="w-10 h-14 rounded-lg border-2 border-slate-300 bg-white shadow-2xs flex flex-col items-center justify-between p-1">
                    <div className="w-3 h-0.5 bg-slate-400 rounded" />
                    <span className="text-[7px] font-mono font-bold text-slate-700">GLOBAL</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  </div>
                  <div className="w-12 h-1 bg-amber-500/40 rounded-full mt-1" />
                </div>

                {/* 5. VIỆT NAM (CHIẾC THỨ 5 NỔI BẬT ĐẶC BIỆT) */}
                <div className="w-[120px] shrink-0 flex flex-col items-center justify-center scale-105">
                  <div className="w-12 h-15 rounded-xl border-2 border-emerald-400 bg-emerald-950 shadow-[0_0_12px_rgba(16,185,129,0.5)] flex flex-col items-center justify-between p-1 ring-2 ring-emerald-400/50">
                    <div className="w-3.5 h-0.5 bg-emerald-300 rounded" />
                    <div className="bg-emerald-500 text-white text-[7px] font-mono font-black px-1.5 py-0.5 rounded shadow-xs text-center leading-tight">
                      ASSEMBLED<br />IN VN 🇻🇳
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <div className="w-14 h-1.5 bg-emerald-400 rounded-full mt-0.5 shadow-sm" />
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 1.3. GHI CHÚ BẢN CHẤT PHÍA DƯỚI BĂNG CHUYỀN (Y = 320 -> 510) */}
      <div
        style={{ left: "140px", top: "330px" }}
        className="absolute pointer-events-auto w-[720px] p-5 rounded-2xl bg-white/80 border border-slate-200/90 shadow-sm flex flex-col gap-2"
      >
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald" />
          <span>QUY MÔ LẮP RÁP ĐẠI CÔNG XƯỞNG</span>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed font-body">
          Cứ <strong>5 chiếc điện thoại thông minh</strong> xuất xưởng trên toàn cầu thì có <strong>1 chiếc</strong> được lắp ráp và hoàn thiện bởi bàn tay công nhân Việt Nam. Ngành điện tử đóng góp tới <strong>41,5%</strong> tổng kim ngạch xuất khẩu cả nước.
        </p>
        <div className="text-xs text-slate-500 font-mono italic border-t border-slate-100 pt-2">
          👉 Nhưng câu hỏi triết học kinh tế: Giá trị thặng dư thực sự nằm lại ở đâu?
        </div>
      </div>

      {/* 1.4. BẢNG KIM NGẠCH $200.3B & CẢNG BIỂN CONTAINER BO TRÒN (RỘNG 410PX, CAO 425PX, Y = 95) */}
      <div
        style={{ left: "890px", top: "95px" }}
        className="absolute pointer-events-auto w-[410px] p-6 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-emerald-300 shadow-lg flex flex-col justify-between h-[425px]"
      >
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-mono text-slate-500 uppercase font-bold tracking-wider">
              KIM NGẠCH XUẤT KHẨU ĐIỆN TỬ
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald animate-ping" />
          </div>

          <div className="font-mono text-5xl font-black text-emerald tracking-tight flex items-baseline my-2">
            ${exportCounter}B
            <span className="text-sm text-emerald/80 font-mono font-bold ml-2">USD / NĂM</span>
          </div>

          <div className="text-xs text-slate-600 font-mono flex items-center justify-between bg-emerald-50/70 p-2 rounded-lg border border-emerald-200">
            <span>Tỷ trọng trong toàn bộ xuất khẩu VN:</span>
            <span className="text-emerald-800 font-black text-sm">41.5%</span>
          </div>
        </div>

        {/* HÌNH ẢNH CẢNG BIỂN CONTAINER BO TRÒN LỚN (CAO 180PX) */}
        <div className="relative h-44 rounded-2xl overflow-hidden border-2 border-emerald-200 bg-gradient-to-b from-sky-100 via-sky-50 to-emerald-50 shadow-inner">
          <svg className="w-full h-full" viewBox="0 0 360 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="seaGradLarge" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            {/* Bầu trời, mây & mặt trời */}
            <circle cx="310" cy="30" r="20" fill="#FDE047" opacity="0.7" />
            <path d="M 40 25 Q 60 18 80 25 Q 95 20 110 26 L 30 26 Z" fill="#FFFFFF" opacity="0.9" />
            <path d="M 180 20 Q 195 15 210 20 Q 220 16 230 22 L 170 22 Z" fill="#FFFFFF" opacity="0.8" />
            
            {/* Hải âu bay */}
            <path d="M 130 22 Q 135 17 140 22 Q 145 17 150 22" stroke="#64748B" strokeWidth="1.5" fill="none" />
            <path d="M 155 30 Q 159 25 163 30 Q 167 25 171 30" stroke="#64748B" strokeWidth="1.5" fill="none" />

            {/* CẦN CẨU GIÀN GANTRY CRANE ĐỒ SỘ */}
            <g stroke="#D97706" strokeWidth="2.5" fill="none">
              <line x1="240" y1="125" x2="260" y2="35" />
              <line x1="285" y1="125" x2="265" y2="35" />
              <line x1="215" y1="48" x2="310" y2="48" />
              <line x1="230" y1="70" x2="285" y2="70" />
            </g>

            {/* Container trên cầu cảng */}
            <rect x="290" y="95" width="28" height="14" fill="#DC2626" rx="2" />
            <rect x="295" y="80" width="28" height="14" fill="#0284C7" rx="2" />
            <rect x="325" y="95" width="28" height="14" fill="#16A34A" rx="2" />
            <rect x="328" y="80" width="28" height="14" fill="#F59E0B" rx="2" />
            <rect x="325" y="65" width="28" height="14" fill="#0284C7" rx="2" />

            {/* Mặt biển & Sóng nước */}
            <path d="M 0 105 Q 90 100 180 105 T 360 105 L 360 160 L 0 160 Z" fill="url(#seaGradLarge)" />
            
            {/* TÀU CONTAINER VIỄN DƯƠNG LỚN */}
            <path d="M 18 122 L 180 122 L 200 102 L 45 102 Z" fill="#1E293B" />
            {/* Tháp buồng lái */}
            <rect x="155" y="86" width="22" height="16" fill="#F8FAFC" />
            <rect x="165" y="78" width="4" height="8" fill="#DC2626" />
            {/* Hàng container chất cao trên tàu */}
            <rect x="55" y="88" width="25" height="14" fill="#DC2626" rx="2" />
            <rect x="83" y="88" width="25" height="14" fill="#0284C7" rx="2" />
            <rect x="111" y="88" width="25" height="14" fill="#16A34A" rx="2" />
            <rect x="68" y="73" width="25" height="14" fill="#F59E0B" rx="2" />
            <rect x="96" y="73" width="25" height="14" fill="#DC2626" rx="2" />
          </svg>

          {/* Badge chữ trên ảnh cảng biển */}
          <div className="absolute bottom-2 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[10px] font-mono text-slate-900 border border-slate-300 flex items-center gap-1.5 shadow-sm">
            <Anchor className="w-3.5 h-3.5 text-sky-600" />
            <span className="font-bold">CẢNG CONTAINER XUẤT NHẬP KHẨU</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CỤM 02: MÁY QUÉT X-RAY LỚN & NGUYÊN LIỆU THÔ + HÀNG ĐẦU RA (X = 1380 -> 2460) */}
      {/* ========================================================================= */}

      {/* 2.1. Plaque Nhãn Trạm 2 */}
      <div
        style={{ left: "1380px", top: "50px" }}
        className="absolute pointer-events-auto flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/95 border border-amber-200 shadow-xs backdrop-blur-md"
      >
        <span className="w-3 h-3 rounded-full bg-amber-500 animate-ping" />
        <span className="font-mono text-sm font-black text-amber-700 uppercase tracking-wider">
          TRẠM 02 &bull; MẢNG TỐI NHẬP SIÊU
        </span>
        <span className="text-slate-300">|</span>
        <span className="text-xs font-heading font-bold text-slateMuted">Cán cân Xuyên thấu</span>
      </div>

      {/* 2.2. HỆ THỐNG X-RAY HOÀN CHỈNH: ĐẦU VÀO -> QUÉT TIA X -> ĐẦU RA (CAO 425PX) */}
      <div style={{ left: "1380px", top: "95px" }} className="absolute pointer-events-auto flex items-center gap-4">
        
        {/* KHỐI 1: NGUYÊN LIỆU THÔ ĐẦU VÀO (RỘNG 220PX, CAO 425PX) */}
        <div className="w-[220px] p-5 rounded-3xl bg-white/95 border-2 border-slate-200 shadow-md flex flex-col justify-between h-[425px]">
          <div>
            <div className="text-xs font-mono font-black text-slate-500 uppercase flex items-center gap-1.5 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
              <span>ĐẦU VÀO</span>
            </div>
            <div className="font-heading font-bold text-base text-ink">Nguyên Liệu Thô</div>
            <div className="text-xs text-slateMuted mt-1 leading-snug">Khoáng sản khai khoáng & Thỏi Silic công nghiệp</div>
          </div>

          {/* Minh họa Quặng đất hiếm & Cát Silic to bản */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3.5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-stone-700 border-2 border-stone-600 flex items-center justify-center text-white text-xs font-mono font-black shadow-xs">
                Co
              </div>
              <div className="text-xs font-mono">
                <div className="font-bold text-slate-800">Cobalt Congo</div>
                <div className="text-[10px] text-slate-500">Lao động khai khoáng</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-700 border-2 border-cyan-500 flex items-center justify-center text-white text-xs font-mono font-black shadow-xs">
                Si
              </div>
              <div className="text-xs font-mono">
                <div className="font-bold text-slate-800">Silic Tinh Khiết</div>
                <div className="text-[10px] text-slate-500">99.999% Si</div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-center">
            <div className="text-xs font-mono font-black text-red-600">GIÁ TRỊ THÔ: &lt; 1%</div>
            <div className="text-[10px] text-red-800 font-mono mt-0.5">Dù khai thác khắc nghiệt nhưng giá trị gia tăng cực thấp</div>
          </div>
        </div>

        {/* Mũi tên dẫn dòng vào máy quét */}
        <ArrowRight className="w-6 h-6 text-slate-400 shrink-0" />

        {/* KHỐI 2: BUỒNG QUÉT TIA X ACRYLIC (RỘNG 540PX, CAO 425PX) */}
        <div className="w-[540px] p-5 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-amber-300 shadow-lg flex flex-col justify-between h-[425px]">
          <div>
            <div className="flex items-center justify-between text-xs font-mono font-black text-slate-700 mb-2">
              <span className="flex items-center gap-2 text-amber-700">
                <AlertTriangle className="w-4 h-4 text-crimson animate-pulse" />
                TIA X QUÉT XUYÊN THẤU VI MẠCH NGUỒN
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-mono font-bold">
                NHẬP LINH KIỆN: 91.2%
              </span>
            </div>
            <p className="text-xs text-slate-600 mb-2.5">
              Để xuất khẩu 200 tỷ USD, Việt Nam phải nhập tới <strong>182.8 tỷ USD</strong> linh kiện tinh vi.
            </p>
          </div>

          {/* Buồng quét có tia Laser quét chuyển động lớn */}
          <div className="relative h-44 bg-white rounded-2xl p-4 text-slate-900 overflow-hidden flex items-center justify-between border-2 border-slate-900 shadow-sm">
            {/* TIA LASER X-RAY NGANG QUÉT LÊN XUỐNG LIÊN TỤC */}
            <div className="scanner-beam pointer-events-none z-20">
              <div className="absolute inset-x-0 top-1 h-7 bg-gradient-to-b from-cyan-500/20 to-transparent pointer-events-none" />
            </div>

            {/* Lưới tọa độ X-ray mờ nền */}
            <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] bg-[size:16px_16px] opacity-15 pointer-events-none" />

            {/* Vỏ máy gia công */}
            <div className="flex items-center gap-3 z-10">
              <div className="w-14 h-22 rounded-xl border-2 border-cyan-600 bg-cyan-50 flex flex-col items-center justify-center p-1.5 text-center shadow-xs">
                <span className="text-[9px] font-mono text-cyan-900 font-bold">VỎ MÁY</span>
                <span className="text-[8px] text-slate-600 font-mono">Gia công VN</span>
              </div>
              <div className="text-xs font-mono">
                <div className="text-emerald-700 font-bold">XUẤT KHẨU</div>
                <div className="text-xl font-black text-slate-900">$200.3B</div>
                <div className="text-[10px] text-slate-500 font-medium">Thành phẩm</div>
              </div>
            </div>

            {/* Ống dẫn dòng tiền chảy ngược */}
            <div className="flex flex-col items-center px-2 z-10 text-crimson font-black text-xs">
              <ArrowRight className="w-6 h-6 text-crimson animate-pulse" />
              <span className="text-[8px] font-mono tracking-wider uppercase text-red-600">Chảy ngược</span>
            </div>

            {/* Lõi chip SoC ngoại nhập */}
            <div className="flex items-center gap-3 z-10">
              <div className="text-right text-xs font-mono">
                <div className="text-red-600 font-bold">NHẬP LINH KIỆN</div>
                <div className="text-xl font-black text-red-600">-$182.8B</div>
                <div className="text-[10px] text-amber-700 font-semibold">Snapdragon, SoC</div>
              </div>
              <div className="w-16 h-22 rounded-xl border-2 border-red-500 bg-red-50 flex flex-col items-center justify-center p-1.5 relative shadow-xs">
                <Cpu className="w-6 h-6 text-red-600 mb-1" />
                <span className="text-[9px] font-mono text-red-900 font-black">CHIP LÕI</span>
                <span className="text-[8px] text-red-700 font-mono font-bold">IMPORTED</span>
              </div>
            </div>
          </div>

          {/* Thanh Tug-of-war Bar lớn phân tách rõ màu sắc độ tương phản cao */}
          <div>
            <div className="flex justify-between text-xs font-mono mb-1.5 font-bold">
              <span className="flex items-center gap-1.5 text-red-600 font-black">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                TIỀN MUA LINH KIỆN NGOẠI QUỐC: 91.2%
              </span>
              <span className="flex items-center gap-1.5 text-emerald-700 font-black">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                GIỮ LẠI: 8.8% (-$17.5B)
              </span>
            </div>
            <div className="h-7 bg-slate-100 rounded-xl overflow-hidden flex border-2 border-slate-300 shadow-inner">
              <div
                style={{ width: "91.2%", backgroundColor: "#DC2626" }}
                className="flex items-center justify-center text-xs font-mono font-black text-white px-3 tracking-tight shadow-sm"
              >
                91.2% Chi phí nhập khẩu ($182.8B)
              </div>
              <div
                style={{ width: "8.8%", backgroundColor: "#16A34A" }}
                className="flex items-center justify-center text-[11px] font-mono font-black text-white px-1 shadow-sm"
              >
                8.8%
              </div>
            </div>
          </div>
        </div>

        {/* Mũi tên dẫn dòng ra thành phẩm */}
        <ArrowRight className="w-6 h-6 text-slate-400 shrink-0" />

        {/* KHỐI 3: HÀNG HOÁ ĐẦU RA (RỘNG 220PX, CAO 425PX) */}
        <div className="w-[220px] p-5 rounded-3xl bg-white/95 border-2 border-emerald-300 shadow-md flex flex-col justify-between h-[425px]">
          <div>
            <div className="text-xs font-mono font-black text-emerald uppercase flex items-center gap-1.5 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald" />
              <span>ĐẦU RA</span>
            </div>
            <div className="font-heading font-bold text-base text-ink">Thành Phẩm</div>
            <div className="text-xs text-slateMuted mt-1 leading-snug">Điện thoại hoàn chỉnh xuất khẩu toàn cầu</div>
          </div>

          {/* Minh họa Hộp Smartphone hoàn thiện */}
          <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-18 rounded-xl border-2 border-emerald bg-white flex flex-col items-center justify-center shadow-md">
              <span className="text-[8px] font-mono font-bold text-emerald">5G SMART</span>
              <div className="w-8 h-10 rounded bg-slate-100 border border-slate-700 mt-1 flex items-center justify-center">
                <span className="text-[7px] text-slate-900 font-mono font-bold">VN</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-mono font-bold text-emerald mt-1">
              <Box className="w-4 h-4 text-emerald" />
              <span>Đóng Hộp Xuất Cảng</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
            <div className="text-xs font-mono font-black text-emerald">TỔNG XUẤT: $200.3B</div>
            <div className="text-[10px] text-emerald-800 font-mono mt-0.5">Việt Nam đóng vai trò mắt xích lắp ráp</div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* CỤM 03: HỆ TRỤC OXY SMILING CURVE LỚN & 3 ĐIỂM NÉT CỨNG (X = 2600 -> 3720) */}
      {/* ========================================================================= */}

      {/* 3.1. Plaque Nhãn Trạm 3 */}
      <div
        style={{ left: "2600px", top: "50px" }}
        className="absolute pointer-events-auto flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/95 border border-red-200 shadow-xs backdrop-blur-md"
      >
        <span className="w-3 h-3 rounded-full bg-crimson animate-ping" />
        <span className="font-mono text-sm font-black text-crimson uppercase tracking-wider">
          TRẠM 03 &bull; ĐƯỜNG CONG NỤ CƯỜI (SMILING CURVE)
        </span>
        <span className="text-slate-300">|</span>
        <span className="text-xs font-heading font-bold text-slateMuted">Hệ tọa độ Oxy phân bổ giá trị</span>
      </div>

      {/* 3.2. HỆ TRỤC TỌA ĐỘ OXY HOÀNH TRÁNG (RỘNG 1100PX, CAO 440PX, Y = 95) */}
      <div style={{ left: "2600px", top: "95px" }} className="absolute pointer-events-auto w-[1100px] h-[440px]">
        
        {/* BẢNG ĐỒ THỊ CHÍNH */}
        <div className="w-full h-full rounded-3xl bg-white/95 border-2 border-slate-200 shadow-lg p-6 relative">
          
          {/* Hướng dẫn tương tác Hover */}
          <div className="absolute top-4 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 shadow-2xs z-20">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span>💡 Rà chuột vào các <strong>Điểm A, B, C</strong> trên đồ thị để xem giải thích</span>
          </div>

          <svg className="w-full h-full overflow-visible" viewBox="0 0 1050 390" xmlns="http://www.w3.org/2000/svg">
            
            {/* TRỤC TUNG OY */}
            <line x1="90" y1="330" x2="90" y2="30" stroke="#0F172A" strokeWidth="2.5" />
            <polygon points="85,34 90,20 95,34" fill="#0F172A" />
            {/* Dòng chú thích Oy: chữ xoay dọc chạy song song theo trục tung Oy */}
            <text
              transform="rotate(-90 35 180)"
              x="35"
              y="180"
              textAnchor="middle"
              fontFamily="'Space Grotesk'"
              fontSize="12"
              fontWeight="bold"
              fill="#0F172A"
              letterSpacing="0.05em"
            >
              Oy: GIÁ TRỊ GIA TĂNG / BIÊN LỢI NHUẬN (%)
            </text>
            
            {/* Vạch chia độ trên trục Oy */}
            <line x1="84" y1="60" x2="90" y2="60" stroke="#64748B" strokeWidth="2" />
            <text x="76" y="65" textAnchor="end" fontFamily="'IBM Plex Mono'" fontSize="11" fontWeight="bold" fill="#64748B">50%</text>

            <line x1="84" y1="145" x2="90" y2="145" stroke="#64748B" strokeWidth="2" />
            <text x="76" y="150" textAnchor="end" fontFamily="'IBM Plex Mono'" fontSize="11" fontWeight="bold" fill="#64748B">25%</text>

            <line x1="84" y1="270" x2="90" y2="270" stroke="#64748B" strokeWidth="2" />
            <text x="76" y="275" textAnchor="end" fontFamily="'IBM Plex Mono'" fontSize="11" fontWeight="bold" fill="#DC2626">3%</text>

            {/* TRỤC HOÀNH OX */}
            <line x1="90" y1="330" x2="980" y2="330" stroke="#0F172A" strokeWidth="2.5" />
            <polygon points="976,325 990,330 976,335" fill="#0F172A" />
            <text x="535" y="360" textAnchor="middle" fontFamily="'Space Grotesk'" fontSize="13" fontWeight="bold" fill="#0F172A">
              Ox: CÁC CÔNG ĐOẠN TRONG CHUỖI GIÁ TRỊ (THƯỢNG NGUỒN ➔ HẠ NGUỒN)
            </text>

            {/* Lưới Grid */}
            <line x1="90" y1="60" x2="960" y2="60" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="90" y1="145" x2="960" y2="145" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="90" y1="270" x2="960" y2="270" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />

            {/* ĐƯỜNG CONG NỤ CƯỜI CHÍNH XÁC & HIỆU ỨNG ĐỘNG (SMILING CURVE SVG) */}
            {/* Uốn từ Điểm A (190, 60) võng chuẩn xác qua đáy Điểm B (535, 270) rồi lên Điểm C (880, 60) */}
            {/* Lớp hào quang thở nhẹ theo đường cong */}
            <path
              d="M 190 60 Q 535 480 880 60"
              fill="none"
              stroke="#DC2626"
              strokeWidth="10"
              strokeLinecap="round"
              className="opacity-15 blur-[2px]"
            />

            {/* Đường cong nụ cười chính (nét đậm, nhịp thở vi mô) */}
            <path
              d="M 190 60 Q 535 480 880 60"
              fill="none"
              stroke="#DC2626"
              strokeWidth="5"
              strokeLinecap="round"
              className="animate-curve-glow"
            />

            {/* Dòng năng lượng ánh sáng chuyển động dọc theo chuỗi giá trị (Thượng nguồn -> Hạ nguồn) */}
            <path
              d="M 190 60 Q 535 480 880 60"
              fill="none"
              stroke="#FEE2E2"
              strokeWidth="2.5"
              strokeDasharray="8 14"
              strokeLinecap="round"
              className="animate-curve-flow pointer-events-none"
            />

            {/* Hạt photon năng lượng 1 di chuyển tuần hoàn dọc theo đường cong */}
            <circle r="4.5" fill="#EF4444" className="pointer-events-none" style={{ filter: "drop-shadow(0 0 6px #DC2626)" }}>
              <animateMotion
                path="M 190 60 Q 535 480 880 60"
                dur="3.6s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Hạt photon năng lượng 2 di chuyển lệch pha 1.8s */}
            <circle r="3.5" fill="#F59E0B" className="pointer-events-none" style={{ filter: "drop-shadow(0 0 5px #F59E0B)" }}>
              <animateMotion
                path="M 190 60 Q 535 480 880 60"
                dur="3.6s"
                begin="1.8s"
                repeatCount="indefinite"
              />
            </circle>

            {/* ========================================================================= */}
            {/* ĐƯỜNG NÉT CỨNG NỐI TỚI Ô GIẢI THÍCH (HIỂN THỊ KHI HOVER) */}
            {/* ========================================================================= */}
            
            {/* ĐƯỜNG NÉT CỨNG ĐIỂM A */}
            <g className={cn("transition-all duration-300 pointer-events-none", hoveredPoint === "A" ? "opacity-100" : "opacity-0")}>
              <line x1="190" y1="60" x2="190" y2="-10" stroke="#D97706" strokeWidth="2.5" />
              <circle cx="190" cy="-10" r="4.5" fill="#D97706" />
            </g>

            {/* ĐIỂM A TRÊN ĐỒ THỊ (NHẤP NHÁY NHẸ NHÀNG + HOVER HITBOX) */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPoint("A")}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              <circle cx="190" cy="60" r="14" fill="none" stroke="#D97706" strokeWidth="1.5" className="animate-ripple-halo pointer-events-none" />
              <circle cx="190" cy="60" r="9" fill="#D97706" stroke="#FFFFFF" strokeWidth="3" className="animate-gentle-pulse pointer-events-none" />
              <text x="190" y="86" textAnchor="middle" fontFamily="'IBM Plex Mono'" fontSize="12" fontWeight="bold" fill="#D97706">
                ĐIỂM A
              </text>
              {/* Vùng hitbox hover rộng rãi */}
              <circle cx="190" cy="60" r="32" fill="transparent" />
            </g>

            {/* ĐƯỜNG NÉT CỨNG ĐIỂM B */}
            <g className={cn("transition-all duration-300 pointer-events-none", hoveredPoint === "B" ? "opacity-100" : "opacity-0")}>
              <line x1="535" y1="270" x2="535" y2="385" stroke="#DC2626" strokeWidth="2.5" />
              <circle cx="535" cy="385" r="4.5" fill="#DC2626" />
            </g>

            {/* ĐIỂM B TRÊN ĐỒ THỊ (Đáy chuỗi tại Việt Nam - NHẤP NHÁY NHẸ NHÀNG + HOVER HITBOX) */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPoint("B")}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              <circle cx="535" cy="270" r="16" fill="none" stroke="#DC2626" strokeWidth="1.5" className="animate-ripple-halo pointer-events-none" />
              <circle cx="535" cy="270" r="10" fill="#DC2626" stroke="#FFFFFF" strokeWidth="3" className="animate-gentle-pulse pointer-events-none" />
              <text x="535" y="245" textAnchor="middle" fontFamily="'IBM Plex Mono'" fontSize="12" fontWeight="bold" fill="#DC2626">
                ĐIỂM B (ĐÁY CHUỖI)
              </text>
              {/* Vùng hitbox hover rộng rãi */}
              <circle cx="535" cy="270" r="36" fill="transparent" />
            </g>

            {/* ĐƯỜNG NÉT CỨNG ĐIỂM C */}
            <g className={cn("transition-all duration-300 pointer-events-none", hoveredPoint === "C" ? "opacity-100" : "opacity-0")}>
              <line x1="880" y1="60" x2="880" y2="-10" stroke="#D97706" strokeWidth="2.5" />
              <circle cx="880" cy="-10" r="4.5" fill="#D97706" />
            </g>

            {/* ĐIỂM C TRÊN ĐỒ THỊ (NHẤP NHÁY NHẸ NHÀNG + HOVER HITBOX) */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPoint("C")}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              <circle cx="880" cy="60" r="14" fill="none" stroke="#D97706" strokeWidth="1.5" className="animate-ripple-halo pointer-events-none" />
              <circle cx="880" cy="60" r="9" fill="#D97706" stroke="#FFFFFF" strokeWidth="3" className="animate-gentle-pulse pointer-events-none" />
              <text x="880" y="86" textAnchor="middle" fontFamily="'IBM Plex Mono'" fontSize="12" fontWeight="bold" fill="#D97706">
                ĐIỂM C
              </text>
              {/* Vùng hitbox hover rộng rãi */}
              <circle cx="880" cy="60" r="32" fill="transparent" />
            </g>
          </svg>

          {/* ========================================================================= */}
          {/* 3 Ô TEXT GIẢI THÍCH: CHỈ XUẤT HIỆN KHI RÀ CHUỘT (HOVER) VÀO TỪNG ĐIỂM */}
          {/* ========================================================================= */}

          {/* Ô CHÚ THÍCH 1 (ĐIỂM A): Phía trên bên trái */}
          <div
            style={{ left: "70px", top: "-85px" }}
            onMouseEnter={() => setHoveredPoint("A")}
            onMouseLeave={() => setHoveredPoint(null)}
            className={cn(
              "absolute w-[260px] p-4 rounded-2xl bg-white border-2 border-amber-500 shadow-xl text-left z-30 transition-all duration-300",
              hoveredPoint === "A"
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-2 pointer-events-none"
            )}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono font-black text-amber-700 uppercase">ĐIỂM A &bull; R&D & IP</span>
              <span className="text-xs font-mono bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full font-black">48%</span>
            </div>
            <div className="font-heading text-sm font-bold text-ink">Bản Quyền Công Nghệ</div>
            <p className="text-xs text-slate-600 mt-1 leading-snug">
              Kiến trúc bán dẫn ARM, vi xử lý độc quyền, bằng sáng chế thuật toán AI & chip xử lý tín hiệu.
            </p>
          </div>

          {/* Ô CHÚ THÍCH 2 (ĐIỂM B): Đáy chuỗi tại Việt Nam */}
          <div
            style={{ left: "375px", top: "370px" }}
            onMouseEnter={() => setHoveredPoint("B")}
            onMouseLeave={() => setHoveredPoint(null)}
            className={cn(
              "absolute w-[320px] p-4 rounded-2xl bg-red-50 border-2 border-red-600 shadow-xl text-center z-30 transition-all duration-300",
              hoveredPoint === "B"
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            )}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono font-black text-red-700 uppercase">ĐIỂM B &bull; LẮP RÁP GIA CÔNG</span>
              <span className="text-xs font-mono bg-red-200 text-red-900 px-2.5 py-0.5 rounded-full font-black">2% – 3.5%</span>
            </div>
            <div className="font-heading text-sm font-bold text-red-950">Đáy Chuỗi Giá Trị Tại VN</div>
            <p className="text-xs text-red-900 mt-1 leading-snug font-mono">
              Chỉ nhận về <strong>$20 – $35</strong> tiền công trên mỗi chiếc điện thoại bán lẻ $1.000.
            </p>
          </div>

          {/* Ô CHÚ THÍCH 3 (ĐIỂM C): Phía trên bên phải */}
          <div
            style={{ left: "740px", top: "-85px" }}
            onMouseEnter={() => setHoveredPoint("C")}
            onMouseLeave={() => setHoveredPoint(null)}
            className={cn(
              "absolute w-[260px] p-4 rounded-2xl bg-white border-2 border-amber-500 shadow-xl text-left z-30 transition-all duration-300",
              hoveredPoint === "C"
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-2 pointer-events-none"
            )}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono font-black text-amber-700 uppercase">ĐIỂM C &bull; BRAND & MKT</span>
              <span className="text-xs font-mono bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full font-black">52%</span>
            </div>
            <div className="font-heading text-sm font-bold text-ink">Thương Hiệu & Phân Phối</div>
            <p className="text-xs text-slate-600 mt-1 leading-snug">
              Mạng lưới Apple Store toàn cầu, độc quyền kênh bán lẻ & hệ sinh thái dịch vụ thu phí.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
