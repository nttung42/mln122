"use client";

import * as React from "react";
import { RoundId, SimulationResult } from "@/types/game";
import { calculateMetrics, generateSimulationResult } from "@/lib/game/engine";
import { cn } from "@/lib/utils";

interface Floor6StrategicChallengeProps {
  charX: number;
  onDoorEnter?: () => void;
}

export function Floor6StrategicChallenge({ charX, onDoorEnter }: Floor6StrategicChallengeProps) {
  // 3 Strategic Decisions (Default: Balanced strategy 1B, 2B, 3C)
  const [selectedChoices, setSelectedChoices] = React.useState<Record<RoundId, string | null>>({
    1: "DOMESTIC_LINKAGE",
    2: "HUMAN_CAPITAL",
    3: "BUILD_BRANDS",
  });

  const [modalOpen, setModalOpen] = React.useState(false);
  const [isHudCollapsed, setIsHudCollapsed] = React.useState(false);

  // Live Metrics & Simulation Result
  const liveMetrics = React.useMemo(() => {
    return calculateMetrics(selectedChoices);
  }, [selectedChoices]);

  const simulationResult: SimulationResult = React.useMemo(() => {
    return generateSimulationResult(selectedChoices);
  }, [selectedChoices]);

  // Cross-round synergy / friction text
  const synergyInfo = React.useMemo(() => {
    const r1 = selectedChoices[1];
    const r2 = selectedChoices[2];
    const r3 = selectedChoices[3];

    if (r1 === "TECH_FIRST" && r2 === "HUMAN_CAPITAL") {
      return "Cộng hưởng R&D + 50.000 Kỹ sư (+10 TC, +10 DVC)";
    }
    if (r1 === "FDI_FIRST" && r2 === "AUTOMATION_FIRST") {
      return "Xung đột FDI + Tự động hóa (-10 EW, -10 AR)";
    }
    if (r1 === "DOMESTIC_LINKAGE" && (r3 === "OWN_TECHNOLOGY" || r3 === "BUILD_BRANDS")) {
      return "Cộng hưởng Liên kết nội địa + Làm chủ nụ cười (+10 DVC, +10 AR)";
    }
    return "Cân bằng chính sách tự nhiên";
  }, [selectedChoices]);

  const handleSelectChoice = (roundId: RoundId, choiceId: string) => {
    setSelectedChoices((prev) => ({
      ...prev,
      [roundId]: choiceId,
    }));
  };

  const handleReset = () => {
    setSelectedChoices({
      1: "DOMESTIC_LINKAGE",
      2: "HUMAN_CAPITAL",
      3: "BUILD_BRANDS",
    });
  };

  const r1 = selectedChoices[1];
  const r2 = selectedChoices[2];
  const r3 = selectedChoices[3];

  return (
    <div className="absolute inset-0 w-[5300px] pointer-events-none select-none">
      {/* ================= FLOATING HUD ISLAND: 5 REAL-TIME METRICS ================= */}
      <div className="fixed top-16 left-1/2 -translate-x-1/2 z-40 pointer-events-auto transition-all duration-300 max-w-[95vw]">
        {isHudCollapsed ? (
          <button
            onClick={() => setIsHudCollapsed(false)}
            className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md hover:shadow-lg text-slate-800 transition-all cursor-pointer group hover:border-amber-400"
            title="Mở rộng bảng chỉ số vĩ mô 2040"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[11px] font-bold font-heading uppercase tracking-wider text-amber-700">
              Vĩ Mô 2040
            </span>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-600 border-l border-slate-200 pl-2">
              <span className="text-emerald-700 font-bold">DVC {liveMetrics.domesticValueCapture}</span>
              <span className="text-slate-300">•</span>
              <span className="text-sky-700 font-bold">TC {liveMetrics.techCapability}</span>
              <span className="text-slate-300">•</span>
              <span className="text-amber-700 font-bold">EW {liveMetrics.employmentIncome}</span>
              <span className="text-slate-300">•</span>
              <span className="text-indigo-700 font-bold">AR {liveMetrics.economicAutonomy}</span>
            </div>
            <span className="text-[10px] text-slate-400 group-hover:text-amber-600 transition-colors ml-1 font-sans">
              [Hiện ▾]
            </span>
          </button>
        ) : (
          <div className="flex items-center gap-3.5 px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.12)]">
            <div className="flex items-center gap-2 pr-3 border-r border-slate-200 shrink-0">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 font-heading block leading-none">
                  Chỉ Số Vĩ Mô 2040
                </span>
                <span className="text-[9px] text-slate-400 hidden xl:block mt-0.5">
                  Chuẩn hóa GVC & Thặng Dư
                </span>
              </div>
            </div>

            {/* 5 Live Indicator Badges */}
            <div className="flex items-center gap-3 overflow-x-auto py-0.5">
              {/* 1. DVC */}
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-emerald-50/70 border border-emerald-100"
                title="DVC: Tỷ lệ giá trị thặng dư (m) giữ lại trong nước"
              >
                <div className="text-left">
                  <div className="text-[9px] text-slate-500 uppercase font-semibold leading-none">1. DVC</div>
                  <div className="text-xs font-bold text-emerald-700 font-mono leading-tight">
                    {liveMetrics.domesticValueCapture}
                  </div>
                </div>
                <div className="w-7 h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
                    style={{ width: `${liveMetrics.domesticValueCapture}%` }}
                  />
                </div>
              </div>

              {/* 2. TC */}
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-sky-50/70 border border-sky-100"
                title="TC: Năng lực R&D và thiết kế công nghệ lõi"
              >
                <div className="text-left">
                  <div className="text-[9px] text-slate-500 uppercase font-semibold leading-none">2. TC</div>
                  <div className="text-xs font-bold text-sky-700 font-mono leading-tight">
                    {liveMetrics.techCapability}
                  </div>
                </div>
                <div className="w-7 h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sky-500 transition-all duration-300 rounded-full"
                    style={{ width: `${liveMetrics.techCapability}%` }}
                  />
                </div>
              </div>

              {/* 3. EW */}
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-amber-50/70 border border-amber-100"
                title="EW: Phúc lợi & việc làm thực tế của người lao động"
              >
                <div className="text-left">
                  <div className="text-[9px] text-slate-500 uppercase font-semibold leading-none">3. EW</div>
                  <div className="text-xs font-bold text-amber-700 font-mono leading-tight">
                    {liveMetrics.employmentIncome}
                  </div>
                </div>
                <div className="w-7 h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 transition-all duration-300 rounded-full"
                    style={{ width: `${liveMetrics.employmentIncome}%` }}
                  />
                </div>
              </div>

              {/* 4. AR */}
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-indigo-50/70 border border-indigo-100"
                title="AR: Mức độ tự chủ và khả năng kháng chịu cú sốc"
              >
                <div className="text-left">
                  <div className="text-[9px] text-slate-500 uppercase font-semibold leading-none">4. AR</div>
                  <div className="text-xs font-bold text-indigo-700 font-mono leading-tight">
                    {liveMetrics.economicAutonomy}
                  </div>
                </div>
                <div className="w-7 h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 transition-all duration-300 rounded-full"
                    style={{ width: `${liveMetrics.economicAutonomy}%` }}
                  />
                </div>
              </div>

              {/* 5. SUS */}
              <div
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-teal-50/70 border border-teal-100"
                title="SUS: Bền vững môi trường và cân bằng kinh tế"
              >
                <div className="text-left">
                  <div className="text-[9px] text-slate-500 uppercase font-semibold leading-none">5. SUS</div>
                  <div className="text-xs font-bold text-teal-700 font-mono leading-tight">
                    {liveMetrics.sustainability}
                  </div>
                </div>
                <div className="w-7 h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-500 transition-all duration-300 rounded-full"
                    style={{ width: `${liveMetrics.sustainability}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Active Cross-Round Effect / Synergy */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100/90 text-[11px] text-slate-700 border border-slate-200 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="font-medium truncate max-w-[190px]" title={synergyInfo}>
                {synergyInfo}
              </span>
            </div>

            {/* Collapse toggle button */}
            <button
              onClick={() => setIsHudCollapsed(true)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer text-[10px]"
              title="Thu nhỏ bảng chỉ số"
              aria-label="Thu nhỏ bảng chỉ số"
            >
              ▲
            </button>
          </div>
        )}
      </div>

      {/* ================= OVERHEAD CONDUIT (Y = 100PX) ================= */}
      <svg className="absolute inset-0 w-[5300px] h-full pointer-events-none z-10 overflow-visible" xmlns="http://www.w3.org/2000/svg">
        <line x1="40" y1="96" x2="5100" y2="96" stroke="#CBD5E1" strokeWidth="2" />
        <line x1="40" y1="96" x2="5100" y2="96" stroke="#B45309" strokeWidth="2" strokeDasharray="8 16" />

        <line x1="140" y1="96" x2="140" y2="124" stroke="#B45309" strokeWidth="2" />
        <line x1="880" y1="96" x2="880" y2="124" stroke="#B45309" strokeWidth="2" />
        <line x1="2120" y1="96" x2="2120" y2="124" stroke="#0369A1" strokeWidth="2" />
        <line x1="3360" y1="96" x2="3360" y2="124" stroke="#047857" strokeWidth="2" />
        <line x1="4600" y1="96" x2="4600" y2="124" stroke="#B45309" strokeWidth="2" />
      </svg>

      {/* ================= KM 0.0: BRIEFING LỚN TRÊN TƯỜNG (X = 140PX) ================= */}
      <div style={{ left: "140px", top: "124px" }} className="absolute w-[600px] pointer-events-auto z-20">
        <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
          Khởi Đầu &bull; Năm Cột Mốc 2026 - 2040
        </div>

        <h1 className="text-4xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight leading-none mb-4">
          BÀN CỜ ĐIỀU HÀNH<br />
          <span className="text-amber-700">VIETNAM 2040</span>
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed max-w-lg mb-6">
          Năm 2026, Việt Nam xuất khẩu đạt kỷ lục nhưng hơn <strong>71.7%</strong> thuộc về tập đoàn FDI. Phần thặng dư kinh tế (<span className="font-bold text-amber-700">m</span>) thực tế giữ lại trong nước chỉ từ <strong>2 đến 3.5%</strong>.
        </p>

        <div className="grid grid-cols-2 gap-4 max-w-lg mb-6">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-400 block">Tình thế năm 2026</span>
            <div className="text-2xl font-black font-heading text-slate-900 mt-0.5">71.7% FDI</div>
            <span className="text-xs text-slate-500">Chi phối xuất khẩu công nghệ</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-400 block">Mục tiêu năm 2040</span>
            <div className="text-2xl font-black font-heading text-emerald-700 mt-0.5">&gt; 45% DVC</div>
            <span className="text-xs text-slate-500">Thặng dư tích lũy nội địa hóa</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-snug">
          Bước qua 3 trạm chiến lược phía trước để ra quyết định phân bổ dòng vốn, nâng tầm nguồn nhân lực và định vị quốc gia trên chuỗi giá trị toàn cầu.
        </p>
      </div>

      {/* ================= TRẠM 01: DÒNG THẶNG DƯ & ĐỘNG LỰC TĂNG TRƯỞNG (X = 880PX) ================= */}
      <div style={{ left: "880px", top: "124px" }} className="absolute w-[1080px] pointer-events-auto z-20">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-4">
          <div>
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider block">Trạm 01 &bull; Quyết định 1</span>
            <h2 className="text-xl font-heading font-black text-slate-900">Mô Hình Động Lực Tăng Trưởng & Dòng Thặng Dư</h2>
          </div>
          <span className="text-xs text-slate-500">Lý luận Mác: Tư bản bất biến (c) vs Thặng dư giữ lại (m)</span>
        </div>

        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Selectors */}
          <div className="col-span-5 space-y-2.5">
            {/* 1A */}
            <button
              onClick={() => handleSelectChoice(1, "FDI_FIRST")}
              className={cn(
                "w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer",
                r1 === "FDI_FIRST"
                  ? "border-2 border-slate-900 bg-slate-50 shadow-xs"
                  : "border-slate-200 bg-white hover:border-slate-400"
              )}
            >
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs font-bold font-heading text-slate-900">1A. Mở rộng ưu đãi FDI lắp ráp</span>
                {r1 === "FDI_FIRST" && <span className="text-[11px] font-semibold text-amber-700">Đang chọn</span>}
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Ưu đãi tối đa thuế và đất đai. Tạo việc làm nhanh nhưng thặng dư lớn chảy về công ty mẹ nước ngoài.
              </p>
            </button>

            {/* 1B */}
            <button
              onClick={() => handleSelectChoice(1, "DOMESTIC_LINKAGE")}
              className={cn(
                "w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer",
                r1 === "DOMESTIC_LINKAGE"
                  ? "border-2 border-emerald-600 bg-emerald-50/50 shadow-xs"
                  : "border-slate-200 bg-white hover:border-slate-400"
              )}
            >
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs font-bold font-heading text-slate-900">1B. Phát triển hệ sinh thái nội địa</span>
                {r1 === "DOMESTIC_LINKAGE" && <span className="text-[11px] font-semibold text-emerald-700">Đang chọn</span>}
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Bắt buộc cam kết chuyển giao công nghệ, ươm tạo doanh nghiệp phụ trợ trong nước tham gia chuỗi cung ứng.
              </p>
            </button>

            {/* 1C */}
            <button
              onClick={() => handleSelectChoice(1, "TECH_FIRST")}
              className={cn(
                "w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer",
                r1 === "TECH_FIRST"
                  ? "border-2 border-sky-600 bg-sky-50/50 shadow-xs"
                  : "border-slate-200 bg-white hover:border-slate-400"
              )}
            >
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs font-bold font-heading text-slate-900">1C. Đột phá R&D và chip tự chủ</span>
                {r1 === "TECH_FIRST" && <span className="text-[11px] font-semibold text-sky-700">Đang chọn</span>}
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Dồn ngân sách quốc gia thành lập viện nghiên cứu và phòng lab vi mạch, chấp nhận rủi ro hoàn vốn dài hạn.
              </p>
            </button>
          </div>

          {/* Interactive Flow Bar */}
          <div className="col-span-7 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
              Mô Phỏng Phân Bổ 100 Đơn Vị Giá Trị Sản Xuất
            </div>

            <div className="w-full h-8 rounded-lg overflow-hidden flex border border-slate-200 mb-3">
              <div
                style={{ width: r1 === "FDI_FIRST" ? "65%" : r1 === "DOMESTIC_LINKAGE" ? "40%" : "20%" }}
                className="h-full bg-slate-600 flex items-center justify-center text-[11px] font-bold text-white transition-all duration-500"
              >
                {r1 === "FDI_FIRST" ? "65% Chuyển ngoại (m)" : r1 === "DOMESTIC_LINKAGE" ? "40% Chuyển ngoại" : "20% Chuyển ngoại"}
              </div>
              <div
                style={{ width: r1 === "FDI_FIRST" ? "25%" : r1 === "DOMESTIC_LINKAGE" ? "25%" : "20%" }}
                className="h-full bg-amber-600 flex items-center justify-center text-[11px] font-bold text-white transition-all duration-500"
              >
                {r1 === "TECH_FIRST" ? "20% Nhân công" : "25% Tiền công (v)"}
              </div>
              <div
                style={{ width: r1 === "FDI_FIRST" ? "10%" : r1 === "DOMESTIC_LINKAGE" ? "35%" : "60%" }}
                className="h-full bg-emerald-600 flex items-center justify-center text-[11px] font-bold text-white transition-all duration-500"
              >
                {r1 === "FDI_FIRST" ? "10% Nội địa" : r1 === "DOMESTIC_LINKAGE" ? "35% Nội địa giữ lại" : "60% Độc quyền R&D"}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs leading-relaxed text-slate-700">
              {r1 === "FDI_FIRST" ? (
                <><strong>Đặc trưng mô hình 1A:</strong> Dòng thặng dư (m) chủ yếu chuyển ngược về công ty mẹ ở nước ngoài. Việt Nam chỉ giữ lại tiền công gia công (v) và thuế ưu đãi ngắn hạn.</>
              ) : r1 === "DOMESTIC_LINKAGE" ? (
                <><strong>Đặc trưng mô hình 1B:</strong> Doanh nghiệp phụ trợ nội địa tham gia chuỗi cung ứng, từng bước giữ lại 35–45% thặng dư để tái đầu tư mở rộng quy mô sản xuất.</>
              ) : (
                <><strong>Đặc trưng mô hình 1C:</strong> Làm chủ thiết kế và bằng sáng chế giúp thu hoạch giá trị thặng dư siêu ngạch từ độc quyền công nghệ, giảm tối đa thất thoát ra bên ngoài.</>
              )}
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-2">
              <span>Chỉ số tác động: <strong className="text-emerald-700">{r1 === "DOMESTIC_LINKAGE" ? "+20 DVC" : r1 === "TECH_FIRST" ? "+15 DVC" : "+5 DVC"}</strong></span>
              <span className="text-slate-500">Nhấn chọn để xem biến động</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TRẠM 02: HÀNG HÓA SỨC LAO ĐỘNG & TỰ ĐỘNG HÓA (X = 2120PX) ================= */}
      <div style={{ left: "2120px", top: "124px" }} className="absolute w-[1080px] pointer-events-auto z-20">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-4">
          <div>
            <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider block">Trạm 02 &bull; Quyết định 2</span>
            <h2 className="text-xl font-heading font-black text-slate-900">Chuyển Đổi Sức Lao Động & Cấu Tạo Tư Bản (c/v)</h2>
          </div>
          <span className="text-xs text-slate-500">Lý luận Mác: Lao động giản đơn vs Lao động phức tạp</span>
        </div>

        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Selectors */}
          <div className="col-span-5 space-y-2.5">
            {/* 2A */}
            <button
              onClick={() => handleSelectChoice(2, "COST_ADVANTAGE")}
              className={cn(
                "w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer",
                r2 === "COST_ADVANTAGE"
                  ? "border-2 border-red-600 bg-red-50/50 shadow-xs"
                  : "border-slate-200 bg-white hover:border-slate-400"
              )}
            >
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs font-bold font-heading text-slate-900">2A. Duy trì nhân công giá rẻ</span>
                {r2 === "COST_ADVANTAGE" && <span className="text-[11px] font-semibold text-red-700">Đang chọn</span>}
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Giữ lương tối thiểu tăng chậm để cạnh tranh thu hút đơn hàng may mặc và lắp ráp cơ bản.
              </p>
            </button>

            {/* 2B */}
            <button
              onClick={() => handleSelectChoice(2, "HUMAN_CAPITAL")}
              className={cn(
                "w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer",
                r2 === "HUMAN_CAPITAL"
                  ? "border-2 border-emerald-600 bg-emerald-50/50 shadow-xs"
                  : "border-slate-200 bg-white hover:border-slate-400"
              )}
            >
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs font-bold font-heading text-slate-900">2B. Đào tạo 50.000 kỹ sư bán dẫn</span>
                {r2 === "HUMAN_CAPITAL" && <span className="text-[11px] font-semibold text-emerald-700">Đang chọn</span>}
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Quyết định 1018/QĐ-TTg: Đầu tư đại học số, STEM và nâng cấp sức lao động thành lao động phức tạp.
              </p>
            </button>

            {/* 2C */}
            <button
              onClick={() => handleSelectChoice(2, "AUTOMATION_FIRST")}
              className={cn(
                "w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer",
                r2 === "AUTOMATION_FIRST"
                  ? "border-2 border-indigo-600 bg-indigo-50/50 shadow-xs"
                  : "border-slate-200 bg-white hover:border-slate-400"
              )}
            >
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs font-bold font-heading text-slate-900">2C. Robot hóa dây chuyền sản xuất</span>
                {r2 === "AUTOMATION_FIRST" && <span className="text-[11px] font-semibold text-indigo-700">Đang chọn</span>}
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Trợ cấp tự động hóa tối đa. Năng suất tăng vọt nhưng tạo sức ép thất nghiệp lên lao động phổ thông.
              </p>
            </button>
          </div>

          {/* Productivity vs Wages Matrix */}
          <div className="col-span-7 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
              So Sánh Năng Suất Lao Động & Phúc Lợi Việc Làm
            </div>

            <div className="space-y-3 mb-4">
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>Giá trị tạo ra mỗi giờ lao động (Năng suất)</span>
                  <span className="font-bold text-slate-900">
                    {r2 === "COST_ADVANTAGE" ? "Thấp (Giản đơn)" : r2 === "HUMAN_CAPITAL" ? "Cao (+20 Phức tạp)" : "Đột phá (+35 Robot)"}
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded overflow-hidden">
                  <div
                    style={{ width: r2 === "COST_ADVANTAGE" ? "35%" : r2 === "HUMAN_CAPITAL" ? "80%" : "95%" }}
                    className="h-full bg-emerald-600 rounded transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>Thu nhập thực tế và an sinh xã hội của công nhân</span>
                  <span className="font-bold text-slate-900">
                    {r2 === "COST_ADVANTAGE" ? "Đình trệ (Lương thấp)" : r2 === "HUMAN_CAPITAL" ? "Tăng bền vững (+20)" : "Phân hóa (-15 Việc làm)"}
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded overflow-hidden">
                  <div
                    style={{ width: r2 === "COST_ADVANTAGE" ? "30%" : r2 === "HUMAN_CAPITAL" ? "85%" : "40%" }}
                    className="h-full bg-amber-600 rounded transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs leading-relaxed text-slate-700">
              {r2 === "COST_ADVANTAGE" ? (
                <><strong>Bẫy thặng dư tuyệt đối:</strong> Kiểm soát chi phí nhân công chỉ mang lại lợi thế ngắn hạn, khiến nền kinh tế mắc kẹt ở đáy chuỗi giá trị và dễ bị thay thế.</>
              ) : r2 === "HUMAN_CAPITAL" ? (
                <><strong>Chuyển hóa sức lao động:</strong> Một giờ lao động của kỹ sư vi mạch kết tinh lượng giá trị gấp nhiều lần lao động giản đơn. Nâng cao giá trị hàng hóa sức lao động là nền tảng thịnh vượng lâu dài.</>
              ) : (
                <><strong>Tăng cấu tạo tư bản c/v:</strong> Năng suất máy móc tăng vượt bậc nhưng làm giảm tỷ trọng lao động sống, tiềm ẩn nguy cơ dôi dư nhân khẩu nếu không có chính sách chuyển đổi nghề kịp thời.</>
              )}
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-2">
              <span>Chỉ số tác động: <strong className="text-emerald-700">{r2 === "HUMAN_CAPITAL" ? "+20 EW, +20 TC" : r2 === "AUTOMATION_FIRST" ? "-15 EW, +20 TC" : "-10 EW, -10 TC"}</strong></span>
              <span className="text-slate-500">Cấu tạo tư bản c/v được tối ưu</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TRẠM 03: ĐƯỜNG CONG NỤ CƯỜI (SMILE CURVE) (X = 3360PX) ================= */}
      <div style={{ left: "3360px", top: "124px" }} className="absolute w-[1120px] pointer-events-auto z-20">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-4">
          <div>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block">Trạm 03 &bull; Quyết định 3</span>
            <h2 className="text-xl font-heading font-black text-slate-900">Chiếm Lĩnh Vị Thế Trên Đường Cong Nụ Cười (Smile Curve)</h2>
          </div>
          <span className="text-xs text-slate-500">Phân chia giá trị thặng dư trong chuỗi cung ứng quốc tế</span>
        </div>

        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Selectors */}
          <div className="col-span-4 space-y-2.5">
            {/* 3A */}
            <button
              onClick={() => handleSelectChoice(3, "SCALE_MANUFACTURING")}
              className={cn(
                "w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer",
                r3 === "SCALE_MANUFACTURING"
                  ? "border-2 border-amber-600 bg-amber-50/50 shadow-xs"
                  : "border-slate-200 bg-white hover:border-slate-400"
              )}
            >
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs font-bold font-heading text-slate-900">3A. Mở rộng đại công xưởng</span>
                {r3 === "SCALE_MANUFACTURING" && <span className="text-[11px] font-semibold text-amber-700">Đang chọn</span>}
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Đáy nụ cười: Tối đa hóa sản lượng gia công lắp ráp, chấp nhận biên lợi nhuận mỏng 2–3%.
              </p>
            </button>

            {/* 3B */}
            <button
              onClick={() => handleSelectChoice(3, "OWN_TECHNOLOGY")}
              className={cn(
                "w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer",
                r3 === "OWN_TECHNOLOGY"
                  ? "border-2 border-sky-600 bg-sky-50/50 shadow-xs"
                  : "border-slate-200 bg-white hover:border-slate-400"
              )}
            >
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs font-bold font-heading text-slate-900">3B. Làm chủ chip IP & Fabless</span>
                {r3 === "OWN_TECHNOLOGY" && <span className="text-[11px] font-semibold text-sky-700">Đang chọn</span>}
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Đầu nguồn: Nắm bằng sáng chế, thiết kế kiến trúc vi mạch và bản quyền thuật toán.
              </p>
            </button>

            {/* 3C */}
            <button
              onClick={() => handleSelectChoice(3, "BUILD_BRANDS")}
              className={cn(
                "w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer",
                r3 === "BUILD_BRANDS"
                  ? "border-2 border-emerald-600 bg-emerald-50/50 shadow-xs"
                  : "border-slate-200 bg-white hover:border-slate-400"
              )}
            >
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xs font-bold font-heading text-slate-900">3C. Xây dựng thương hiệu quốc tế</span>
                {r3 === "BUILD_BRANDS" && <span className="text-[11px] font-semibold text-emerald-700">Đang chọn</span>}
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Cuối nguồn: Sở hữu thương hiệu Make-in-Vietnam và chuỗi phân phối tới người tiêu dùng toàn cầu.
              </p>
            </button>
          </div>

          {/* SVG Smile Curve Interactive Canvas */}
          <div className="col-span-8 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                Vị Thế Việt Nam 2040 Trên Đường Cong Nụ Cười
              </span>
              <span
                className={cn(
                  "text-xs font-bold",
                  r3 === "OWN_TECHNOLOGY" ? "text-sky-700" : r3 === "BUILD_BRANDS" ? "text-emerald-700" : "text-amber-700"
                )}
              >
                {r3 === "OWN_TECHNOLOGY"
                  ? "Vị trí: Đầu nguồn (Fabless, IP & Chip 45%)"
                  : r3 === "BUILD_BRANDS"
                  ? "Vị trí: Cuối nguồn (Thương hiệu & Phân phối 35%)"
                  : "Vị trí: Đáy nụ cười (Gia công lắp ráp 2-3%)"}
              </span>
            </div>

            {/* Realistic & Interactive SVG Smile Curve */}
            <div className="w-full h-64 bg-slate-50/70 rounded-xl relative overflow-hidden border border-slate-200/90 p-2 mb-3 select-none">
              <svg className="w-full h-full" viewBox="0 0 720 250">
                <defs>
                  {/* Area gradient under curve */}
                  <linearGradient id="smileAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={r3 === "OWN_TECHNOLOGY" ? "#0284C7" : r3 === "BUILD_BRANDS" ? "#059669" : "#D97706"} stopOpacity="0.22" />
                    <stop offset="60%" stopColor="#CBD5E1" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
                  </linearGradient>

                  {/* Multi-stop curve gradient stroke */}
                  <linearGradient id="smileCurveStrokeGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0284C7" />
                    <stop offset="28%" stopColor="#0EA5E9" />
                    <stop offset="50%" stopColor="#D97706" />
                    <stop offset="72%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>

                  {/* Soft Drop Shadow for Active Node */}
                  <filter id="activeNodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.25" />
                  </filter>
                </defs>

                {/* 3 Value Stage Background Zones */}
                {/* Zone 1: Upstream */}
                <rect x="65" y="25" width="185" height="170" fill="#0284C7" fillOpacity="0.025" />
                {/* Zone 2: Midstream (Trough) */}
                <rect x="250" y="25" width="270" height="170" fill="#D97706" fillOpacity="0.025" />
                {/* Zone 3: Downstream */}
                <rect x="520" y="25" width="165" height="170" fill="#059669" fillOpacity="0.025" />

                {/* Vertical Zone Dividers */}
                <line x1="250" y1="25" x2="250" y2="195" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="520" y1="25" x2="520" y2="195" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />

                {/* Horizontal Grid Lines & Y-Axis Ticks */}
                {/* 50% */}
                <line x1="65" y1="45" x2="685" y2="45" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                <text x="58" y="49" textAnchor="end" font-family="'Space Grotesk', monospace" fontSize="9" fontWeight="600" fill="#64748B">50%</text>

                {/* 35% */}
                <line x1="65" y1="80" x2="685" y2="80" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                <text x="58" y="84" textAnchor="end" font-family="'Space Grotesk', monospace" fontSize="9" fontWeight="600" fill="#64748B">35%</text>

                {/* 20% */}
                <line x1="65" y1="125" x2="685" y2="125" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
                <text x="58" y="129" textAnchor="end" font-family="'Space Grotesk', monospace" fontSize="9" fontWeight="600" fill="#64748B">20%</text>

                {/* 3% (Assembly Trough reference) */}
                <line x1="65" y1="178" x2="685" y2="178" stroke="#F1F5F9" strokeWidth="1" />
                <text x="58" y="182" textAnchor="end" font-family="'Space Grotesk', monospace" fontSize="9" fontWeight="700" fill="#D97706">2-3%</text>

                {/* Main Axes */}
                {/* Y-Axis */}
                <line x1="65" y1="20" x2="65" y2="195" stroke="#94A3B8" strokeWidth="1.5" />
                <polygon points="62,22 65,15 68,22" fill="#94A3B8" />
                <text x="65" y="12" textAnchor="middle" font-family="'Space Grotesk', sans-serif" fontSize="9" fontWeight="700" fill="#475569">
                  BIÊN LỢI NHUẬN (m)
                </text>

                {/* X-Axis */}
                <line x1="65" y1="195" x2="690" y2="195" stroke="#94A3B8" strokeWidth="1.5" />
                <polygon points="688,192 695,195 688,198" fill="#94A3B8" />

                {/* Real Gradient Area Under Curve */}
                <path
                  d="M 90 50 C 200 50, 260 178, 385 178 C 510 178, 550 72, 650 72 L 650 195 L 90 195 Z"
                  fill="url(#smileAreaGrad)"
                />

                {/* Realistic Cubic Bézier Curve Line (Multi-stop Gradient) */}
                <path
                  d="M 90 50 C 200 50, 260 178, 385 178 C 510 178, 550 72, 650 72"
                  fill="none"
                  stroke="url(#smileCurveStrokeGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Active Dynamic Projection Lines (Dashed Coordinates to Axes) */}
                {r3 === "OWN_TECHNOLOGY" && (
                  <g className="transition-all duration-300">
                    <line x1="130" y1="55" x2="130" y2="195" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="65" y1="55" x2="130" y2="55" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="65" cy="55" r="3" fill="#0284C7" />
                    <circle cx="130" cy="195" r="3" fill="#0284C7" />
                  </g>
                )}

                {r3 === "SCALE_MANUFACTURING" && (
                  <g className="transition-all duration-300">
                    <line x1="385" y1="178" x2="385" y2="195" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="65" y1="178" x2="385" y2="178" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="65" cy="178" r="3" fill="#D97706" />
                    <circle cx="385" cy="195" r="3" fill="#D97706" />
                  </g>
                )}

                {r3 === "BUILD_BRANDS" && (
                  <g className="transition-all duration-300">
                    <line x1="615" y1="78" x2="615" y2="195" stroke="#059669" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="65" y1="78" x2="615" y2="78" stroke="#059669" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="65" cy="78" r="3" fill="#059669" />
                    <circle cx="615" cy="195" r="3" fill="#059669" />
                  </g>
                )}

                {/* 3 Interactive Strategic Nodes on the Curve */}
                {/* Node 1: Upstream (R&D / IP) */}
                <g
                  onClick={() => handleSelectChoice(3, "OWN_TECHNOLOGY")}
                  className="cursor-pointer group"
                >
                  <circle cx="130" cy="55" r="16" fill="transparent" />
                  <circle
                    cx="130"
                    cy="55"
                    r={r3 === "OWN_TECHNOLOGY" ? "10" : "6"}
                    fill="#0284C7"
                    stroke="#FFFFFF"
                    strokeWidth={r3 === "OWN_TECHNOLOGY" ? "3" : "2"}
                    filter={r3 === "OWN_TECHNOLOGY" ? "url(#activeNodeGlow)" : undefined}
                    className="transition-all duration-300"
                  />
                  {r3 === "OWN_TECHNOLOGY" && (
                    <circle cx="130" cy="55" r="17" fill="none" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 3" className="animate-spin" />
                  )}
                  <text x="130" y="74" textAnchor="middle" font-family="'Space Grotesk', sans-serif" fontSize="9" fontWeight="bold" fill="#0284C7">
                    R&D / IP (~45%)
                  </text>
                </g>

                {/* Node 2: Midstream (Assembly Trough) */}
                <g
                  onClick={() => handleSelectChoice(3, "SCALE_MANUFACTURING")}
                  className="cursor-pointer group"
                >
                  <circle cx="385" cy="178" r="16" fill="transparent" />
                  <circle
                    cx="385"
                    cy="178"
                    r={r3 === "SCALE_MANUFACTURING" ? "10" : "6"}
                    fill="#D97706"
                    stroke="#FFFFFF"
                    strokeWidth={r3 === "SCALE_MANUFACTURING" ? "3" : "2"}
                    filter={r3 === "SCALE_MANUFACTURING" ? "url(#activeNodeGlow)" : undefined}
                    className="transition-all duration-300"
                  />
                  {r3 === "SCALE_MANUFACTURING" && (
                    <circle cx="385" cy="178" r="17" fill="none" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3 3" className="animate-spin" />
                  )}
                  <text x="385" y="168" textAnchor="middle" font-family="'Space Grotesk', sans-serif" fontSize="9" fontWeight="bold" fill="#D97706">
                    ĐÁY NỤ CƯỜI (2-3%)
                  </text>
                </g>

                {/* Node 3: Downstream (Brands & Distribution) */}
                <g
                  onClick={() => handleSelectChoice(3, "BUILD_BRANDS")}
                  className="cursor-pointer group"
                >
                  <circle cx="615" cy="78" r="16" fill="transparent" />
                  <circle
                    cx="615"
                    cy="78"
                    r={r3 === "BUILD_BRANDS" ? "10" : "6"}
                    fill="#059669"
                    stroke="#FFFFFF"
                    strokeWidth={r3 === "BUILD_BRANDS" ? "3" : "2"}
                    filter={r3 === "BUILD_BRANDS" ? "url(#activeNodeGlow)" : undefined}
                    className="transition-all duration-300"
                  />
                  {r3 === "BUILD_BRANDS" && (
                    <circle cx="615" cy="78" r="17" fill="none" stroke="#059669" strokeWidth="1.5" strokeDasharray="3 3" className="animate-spin" />
                  )}
                  <text x="615" y="97" textAnchor="middle" font-family="'Space Grotesk', sans-serif" fontSize="9" fontWeight="bold" fill="#059669">
                    THƯƠNG HIỆU (~35%)
                  </text>
                </g>

                {/* Floating Callout Badge for Selected Choice */}
                {r3 === "OWN_TECHNOLOGY" && (
                  <g className="transition-all duration-300 pointer-events-none">
                    <rect x="70" y="24" width="160" height="20" rx="10" fill="#0369A1" filter="url(#activeNodeGlow)" />
                    <text x="150" y="37" textAnchor="middle" font-family="'Space Grotesk', sans-serif" fontSize="9" fontWeight="bold" fill="#FFFFFF">
                      ★ VỊ THẾ 2040: CHIP IP & R&D
                    </text>
                  </g>
                )}

                {r3 === "SCALE_MANUFACTURING" && (
                  <g className="transition-all duration-300 pointer-events-none">
                    <rect x="305" y="132" width="160" height="20" rx="10" fill="#B45309" filter="url(#activeNodeGlow)" />
                    <text x="385" y="145" textAnchor="middle" font-family="'Space Grotesk', sans-serif" fontSize="9" fontWeight="bold" fill="#FFFFFF">
                      ⚠ MẮC KẸT: GIA CÔNG LẮP RÁP
                    </text>
                  </g>
                )}

                {r3 === "BUILD_BRANDS" && (
                  <g className="transition-all duration-300 pointer-events-none">
                    <rect x="525" y="44" width="170" height="20" rx="10" fill="#047857" filter="url(#activeNodeGlow)" />
                    <text x="610" y="57" textAnchor="middle" font-family="'Space Grotesk', sans-serif" fontSize="9" fontWeight="bold" fill="#FFFFFF">
                      ★ VỊ THẾ 2040: THƯƠNG HIỆU TOÀN CẦU
                    </text>
                  </g>
                )}

                {/* Stage Category Footers (Realistic Economic Value Chain Segments) */}
                {/* Upstream Info */}
                <text x="155" y="210" textAnchor="middle" font-family="'Space Grotesk', sans-serif" fontSize="9.5" fontWeight="bold" fill="#0284C7">
                  THƯỢNG NGUỒN (PRE-PROD)
                </text>
                <text x="155" y="223" textAnchor="middle" fontSize="8" fill="#64748B">
                  R&D &bull; Thiết kế IC &bull; Bản quyền IP
                </text>
                <text x="155" y="235" textAnchor="middle" fontSize="7.5" font-style="italic" fill="#94A3B8">
                  (Qualcomm, ARM, Synopsys, Apple)
                </text>

                {/* Midstream Info */}
                <text x="385" y="210" textAnchor="middle" font-family="'Space Grotesk', sans-serif" fontSize="9.5" fontWeight="bold" fill="#D97706">
                  TRUNG NGUỒN (FABRICATION & EMS)
                </text>
                <text x="385" y="223" textAnchor="middle" fontSize="8" fill="#64748B">
                  Đúc Wafer (TSMC) &bull; Lắp ráp OEM / Thử nghiệm
                </text>
                <text x="385" y="235" textAnchor="middle" fontSize="7.5" font-style="italic" fill="#94A3B8">
                  (Foxconn, Luxshare, Pegatron, VN Assembly)
                </text>

                {/* Downstream Info */}
                <text x="605" y="210" textAnchor="middle" font-family="'Space Grotesk', sans-serif" fontSize="9.5" fontWeight="bold" fill="#059669">
                  HẠ NGUỒN (POST-PROD)
                </text>
                <text x="605" y="223" textAnchor="middle" fontSize="8" fill="#64748B">
                  Thương hiệu &bull; Marketing &bull; Hệ sinh thái Retail
                </text>
                <text x="605" y="235" textAnchor="middle" fontSize="7.5" font-style="italic" fill="#94A3B8">
                  (Apple Store, Samsung, Viettel Global)
                </text>
              </svg>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs leading-relaxed text-slate-700">
              {r3 === "OWN_TECHNOLOGY" ? (
                <><strong>Đỉnh đầu nguồn:</strong> Chiếm lĩnh quyền sở hữu trí tuệ (IP) và thiết kế vi mạch giúp quốc gia thu trọn thặng dư siêu ngạch ở nấc thang công nghệ cao nhất.</>
              ) : r3 === "BUILD_BRANDS" ? (
                <><strong>Đỉnh cuối nguồn:</strong> Kiểm soát khâu phân phối và thương hiệu giúp chuyển hóa giá trị thặng dư trực tiếp từ thị trường tiêu dùng, thoát khỏi vị thế bị ép giá.</>
              ) : (
                <><strong>Đáy trũng:</strong> Sản lượng xuất khẩu khổng lồ nhưng giá trị thặng dư giữ lại mỏng manh, áp lực tài nguyên và phát thải lớn.</>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= KM 4.6: BÁO CÁO PHÁN QUYẾT CHIẾN LƯỢC 2040 (X = 4600PX) ================= */}
      <div style={{ left: "4600px", top: "124px" }} className="absolute w-[520px] pointer-events-auto z-20">
        <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
          Kết Luận &bull; Hồ Sơ Chiến Lược Việt Nam 2040
        </div>

        <div className="p-6 rounded-2xl bg-white text-slate-900 shadow-xl border-2 border-slate-900">
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-xs text-amber-700 font-bold uppercase tracking-wider">Mô Hình Đạt Được</span>
            <span className="text-xs text-slate-500 font-medium">Đã chốt 3 quyết định</span>
          </div>

          <h3 className="text-2xl font-black font-heading text-slate-900 leading-tight mb-1">
            {simulationResult.archetypeTitle}
          </h3>
          <p className="text-xs text-slate-600 italic mb-4">
            "{simulationResult.tagline}"
          </p>

          <p className="text-xs text-slate-600 leading-relaxed mb-5">
            {simulationResult.summary}
          </p>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 mb-5">
            <div>
              <span className="text-[11px] text-slate-500 block font-medium">Giá trị nội địa (DVC)</span>
              <span className="text-xl font-bold font-heading text-emerald-700 font-mono">
                {liveMetrics.domesticValueCapture} / 100
              </span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block font-medium">Tự chủ kinh tế (AR)</span>
              <span className="text-xl font-bold font-heading text-indigo-700 font-mono">
                {liveMetrics.economicAutonomy} / 100
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer text-center shadow-xs"
            >
              Xem Toàn Văn Phán Quyết
            </button>
            <button
              onClick={handleReset}
              className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs transition-colors cursor-pointer border border-slate-300 font-medium"
            >
              Đặt lại
            </button>
          </div>
        </div>
      </div>

      {/* ================= MODAL: BÁO CÁO TOÀN VĂN ================= */}
      {modalOpen && (
        <div className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-50 flex items-center justify-center p-4 pointer-events-auto">
          <div className="w-full max-w-3xl max-h-[85vh] bg-white rounded-2xl shadow-2xl border-2 border-slate-900 overflow-hidden flex flex-col">
            <div className="p-6 bg-white border-b border-slate-200 text-slate-900 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider block">Báo Cáo Phán Quyết Chiến Lược</span>
                <h2 className="text-2xl font-black font-heading text-slate-900 mt-1">{simulationResult.archetypeTitle}</h2>
                <p className="text-xs text-slate-600 italic mt-0.5">"{simulationResult.tagline}"</p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center justify-center text-sm cursor-pointer font-bold border border-slate-300"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-900 leading-relaxed">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">5 Chỉ Số Kinh Tế Đạt Được Năm 2040:</span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  <div className="p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-400 block">1. Nội địa (DVC)</span>
                    <div className="text-base font-bold text-emerald-700 mt-1 font-mono">{liveMetrics.domesticValueCapture} / 100</div>
                    <span className="text-[10px] text-slate-500">Mốc 2026: 35</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-400 block">2. Công nghệ (TC)</span>
                    <div className="text-base font-bold text-sky-700 mt-1 font-mono">{liveMetrics.techCapability} / 100</div>
                    <span className="text-[10px] text-slate-500">Mốc 2026: 30</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-400 block">3. Việc làm (EW)</span>
                    <div className="text-base font-bold text-amber-700 mt-1 font-mono">{liveMetrics.employmentIncome} / 100</div>
                    <span className="text-[10px] text-slate-500">Mốc 2026: 60</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-400 block">4. Tự chủ (AR)</span>
                    <div className="text-base font-bold text-indigo-700 mt-1 font-mono">{liveMetrics.economicAutonomy} / 100</div>
                    <span className="text-[10px] text-slate-500">Mốc 2026: 40</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-400 block">5. Bền vững (SUS)</span>
                    <div className="text-base font-bold text-teal-700 mt-1 font-mono">{liveMetrics.sustainability} / 100</div>
                    <span className="text-[10px] text-slate-500">Mốc 2026: 50</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <span className="font-bold text-emerald-900 block mb-2">Thành tựu cốt lõi:</span>
                  <ul className="space-y-1.5 text-emerald-950 list-disc list-inside">
                    {simulationResult.keyStrengths.map((str, idx) => (
                      <li key={idx}>{str}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                  <span className="font-bold text-amber-900 block mb-2">Đánh đổi chính sách chấp nhận:</span>
                  <ul className="space-y-1.5 text-amber-950 list-disc list-inside">
                    {simulationResult.strategicTradeoffsAccepted.map((trd, idx) => (
                      <li key={idx}>{trd}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Luận giải Kinh tế chính trị Mác – Lênin:</span>
                <p className="text-slate-600">{simulationResult.academicReflection}</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-white border-2 border-slate-900 text-slate-900 font-semibold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Đóng báo cáo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
