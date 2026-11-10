"use client";

import * as React from "react";
import { Calculator, Cpu, UserCheck, Layers, RefreshCcw } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function DecodeValueSection() {
  // Simulator State
  const [workingDayHours, setWorkingDayHours] = React.useState<number>(8);
  const [necessaryHours, setNecessaryHours] = React.useState<number>(4);
  const [organicComposition, setOrganicComposition] = React.useState<number>(3); // c / v

  // Recalculations
  const surplusHours = Math.max(0, workingDayHours - necessaryHours);
  const surplusValueRate =
    necessaryHours > 0 ? Math.round((surplusHours / necessaryHours) * 100) : 0;
  
  // Normalized illustrative values ($v$ normalized to 100 units per necessary hour)
  const v = necessaryHours * 100;
  const m = surplusHours * 100;
  const c = Math.round(v * organicComposition);
  const totalW = c + v + m;

  const handleReset = () => {
    setWorkingDayHours(8);
    setNecessaryHours(4);
    setOrganicComposition(3);
  };

  return (
    <SectionContainer
      id="decode-value"
      badge="Section 03"
      badgeVariant="green"
      title="Giải Mã Bản Chất Giá Trị & Thặng Dư"
      subtitle="Máy móc (c) không tự sinh ra giá trị mới — Chỉ có Sức lao động sống (v) mới kết tinh thành Giá trị thặng dư (m)."
    >
      {/* 3 Core Theory Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="border-border-subtle bg-deep-surface/80">
          <CardHeader>
            <div className="w-10 h-10 rounded-lg bg-electric-blue/20 text-electric-blue flex items-center justify-center mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <CardTitle className="text-lg">Tư Bản Bất Biến ($c$)</CardTitle>
          </CardHeader>
          <CardContent className="text-xs sm:text-sm text-muted-gray space-y-2">
            <p className="text-off-white font-medium">Máy móc, GPU, Thuật toán & Nhà xưởng</p>
            <p>
              Giá trị của $c$ chỉ <strong>dịch chuyển dần từng phần</strong> vào sản phẩm thông qua khấu hao vật chất, không tự sinh ra bất kỳ giá trị mới nào trong quá trình sản xuất.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border-subtle bg-deep-surface/80">
          <CardHeader>
            <div className="w-10 h-10 rounded-lg bg-warm-gold/20 text-warm-gold flex items-center justify-center mb-3">
              <UserCheck className="w-5 h-5" />
            </div>
            <CardTitle className="text-lg">Tư Bản Khả Biến ($v$)</CardTitle>
          </CardHeader>
          <CardContent className="text-xs sm:text-sm text-muted-gray space-y-2">
            <p className="text-off-white font-medium">Hàng hóa Sức Lao Động</p>
            <p>
              Là bộ phận tư bản dùng để mua sức lao động của công nhân. Trong quá trình lao động, người lao động tạo ra một lượng giá trị mới <strong>lớn hơn giá trị của chính sức lao động</strong>.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border-subtle bg-deep-surface/80">
          <CardHeader>
            <div className="w-10 h-10 rounded-lg bg-growth-green/20 text-growth-green flex items-center justify-center mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <CardTitle className="text-lg">Giá Trị Thặng Dư ($m$)</CardTitle>
          </CardHeader>
          <CardContent className="text-xs sm:text-sm text-muted-gray space-y-2">
            <p className="text-off-white font-medium">Nguồn Gốc Của Lợi Nhuận</p>
            <p>
              Phần giá trị mới dôi ra ngoài giá trị sức lao động ($v$), do lao động làm thuê tạo ra trong thời gian lao động thặng dư và bị nhà tư bản chiếm hữu theo lý luận Marx.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Working Day Simulator */}
      <div className="rounded-2xl border border-electric-blue/40 bg-deep-surface/95 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-border-subtle gap-4">
          <div>
            <div className="flex items-center gap-2 text-electric-blue text-xs font-mono uppercase tracking-wider mb-1">
              <Calculator className="w-4 h-4" />
              <span>Interactive Model</span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-off-white">
              Working Day & Surplus Value Simulator
            </h3>
            <p className="text-xs sm:text-sm text-muted-gray">
              Mô phỏng một ngày làm việc và sự hình thành công thức $W = c + v + m$
            </p>
          </div>

          <Button
            size="sm"
            variant="outline"
            onClick={handleReset}
            className="text-xs gap-1.5"
          >
            <RefreshCcw className="w-3.5 h-3.5" />
            <span>Mặc định (8h/4h)</span>
          </Button>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Slider 1: Total Working Day */}
          <div className="space-y-2 bg-midnight-navy/60 p-4 rounded-xl border border-border-subtle">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-muted-gray">Độ dài ngày lao động (T):</span>
              <strong className="text-off-white text-sm font-bold">
                {workingDayHours} giờ
              </strong>
            </div>
            <input
              type="range"
              min={6}
              max={14}
              step={0.5}
              value={workingDayHours}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setWorkingDayHours(val);
                if (necessaryHours > val - 1) setNecessaryHours(val - 1);
              }}
              className="w-full accent-electric-blue cursor-pointer"
            />
            <p className="text-[11px] text-muted-gray">
              {workingDayHours > 8
                ? "Phương pháp bóc lột Giá trị thặng dư Tuyệt đối (kéo dài ngày làm việc)."
                : "Ngày làm việc theo tiêu chuẩn pháp định thông thường."}
            </p>
          </div>

          {/* Slider 2: Necessary Labor Time */}
          <div className="space-y-2 bg-midnight-navy/60 p-4 rounded-xl border border-border-subtle">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-muted-gray">Thời gian tất yếu (v):</span>
              <strong className="text-electric-blue text-sm font-bold">
                {necessaryHours} giờ
              </strong>
            </div>
            <input
              type="range"
              min={2}
              max={Math.min(7, workingDayHours - 1)}
              step={0.5}
              value={necessaryHours}
              onChange={(e) => setNecessaryHours(parseFloat(e.target.value))}
              className="w-full accent-electric-blue cursor-pointer"
            />
            <p className="text-[11px] text-muted-gray">
              {necessaryHours < 4
                ? "Phương pháp Giá trị thặng dư Tương đối (tăng năng suất để rút ngắn giờ tất yếu)."
                : "Thời gian người lao động hoàn trả giá trị tiền lương của chính mình."}
            </p>
          </div>

          {/* Slider 3: Organic Composition c/v */}
          <div className="space-y-2 bg-midnight-navy/60 p-4 rounded-xl border border-border-subtle">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-muted-gray">Cấu tạo hữu cơ (c/v):</span>
              <strong className="text-growth-green text-sm font-bold">
                {organicComposition}:1
              </strong>
            </div>
            <input
              type="range"
              min={1}
              max={8}
              step={0.5}
              value={organicComposition}
              onChange={(e) => setOrganicComposition(parseFloat(e.target.value))}
              className="w-full accent-growth-green cursor-pointer"
            />
            <p className="text-[11px] text-muted-gray">
              {organicComposition >= 5
                ? "Công nghiệp công nghệ cao / AI / Nhà máy thông minh (máy móc lấn át nhân công)."
                : "Các ngành sản xuất gia công cơ bản thâm dụng lao động giản đơn."}
            </p>
          </div>
        </div>

        {/* Working Day Visual Bar */}
        <div className="space-y-3 mb-8">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-muted-gray">
              Sơ đồ phân chia ngày lao động {workingDayHours} giờ:
            </span>
            <span className="text-warm-gold font-bold">
              Tỷ suất giá trị thặng dư (m&apos; = m/v): {surplusValueRate}%
            </span>
          </div>

          <div className="w-full h-10 rounded-xl overflow-hidden flex border border-border-subtle shadow-inner">
            {/* Necessary Labor Part */}
            <div
              className="h-full bg-electric-blue/80 flex items-center justify-center text-xs font-mono font-bold text-white transition-all duration-300"
              style={{ width: `${(necessaryHours / workingDayHours) * 100}%` }}
              title={`Thời gian lao động tất yếu: ${necessaryHours}h`}
            >
              v: {necessaryHours}h ({Math.round((necessaryHours / workingDayHours) * 100)}%)
            </div>

            {/* Surplus Labor Part */}
            <div
              className="h-full bg-warm-gold/90 flex items-center justify-center text-xs font-mono font-bold text-midnight-navy transition-all duration-300"
              style={{ width: `${(surplusHours / workingDayHours) * 100}%` }}
              title={`Thời gian lao động thặng dư: ${surplusHours}h`}
            >
              m: {surplusHours}h ({Math.round((surplusHours / workingDayHours) * 100)}%)
            </div>
          </div>

          <div className="flex justify-between items-center text-[11px] text-muted-gray font-mono px-1">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-electric-blue inline-block" />
              Lao động Tất yếu ($v$) — Tạo giá trị bù đắp tiền lương
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-warm-gold inline-block" />
              Lao động Thặng dư ($m$) — Tạo thặng dư cho nhà tư bản
            </span>
          </div>
        </div>

        {/* Live Equation Output Box */}
        <div className="p-4 sm:p-6 rounded-xl border border-border-subtle bg-midnight-navy/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono text-muted-gray uppercase tracking-wider block">
              Tổng giá trị hàng hóa hình thành:
            </span>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-off-white">
              W = <span className="text-growth-green">{c}c</span> +{" "}
              <span className="text-electric-blue">{v}v</span> +{" "}
              <span className="text-warm-gold">{m}m</span> ={" "}
              <span className="text-off-white underline decoration-electric-blue decoration-2">
                {totalW} đ.v
              </span>
            </div>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-border-subtle pt-4 md:pt-0 md:pl-6 text-xs text-muted-gray max-w-sm">
            <strong className="text-off-white block mb-1">Quy luật quan trọng:</strong>
            Khi tỷ lệ $c/v$ tăng cao nhờ AI/tự động hóa, tỷ suất lợi nhuận bình quân có xu hướng giảm, buộc các tập đoàn công nghệ phải liên tục săn lùng <em>giá trị thặng dư siêu ngạch</em> từ bằng sáng chế độc quyền.
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

