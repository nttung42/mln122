"use client";

import * as React from "react";
import { BarChart3, TrendingUp, Award, ArrowUpRight, Zap, ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SourceCitation } from "@/components/ui/source-citation";
import { RESEARCH_DATA } from "@/lib/data/research";
import { cn } from "@/lib/utils";

const UPGRADE_PATHWAYS = [
  {
    id: "tech-shift",
    title: "1. Từ Lắp Ráp Sang Công Nghệ Lõi",
    subtitle: "Move from Assembly to Technology",
    description:
      "Tập trung vào khâu thiết kế vi mạch chuyên dụng (Fabless AI/IoT) và đóng gói kiểm thử cao cấp (Advanced Packaging).",
    enabler: "Đào tạo 50.000 kỹ sư vi mạch theo Quyết định 1018/QĐ-TTg.",
    benefit: "Chuyển từ nhận phần lương v giản đơn sang thu hoạch m thặng dư độc quyền công nghệ.",
  },
  {
    id: "supplier-shift",
    title: "2. Từ Gia Công Đơn Lẻ Sang Đối Tác Chiến Lược",
    subtitle: "Move from Suppliers to Strategic Partners",
    description:
      "Nâng chuẩn doanh nghiệp công nghiệp phụ trợ nội địa từ nhà cung ứng cấp 3 lên cấp 1, cấp 2 trực tiếp cho các Lead Firms.",
    enabler: "Hỗ trợ tài chính, chuẩn hóa ISO/ESG và chuyển giao công nghệ bắt buộc.",
    benefit: "Tăng tỷ lệ Giá trị Gia tăng Nội địa (DVA) từ 20-30% lên 50-60% trong ngành điện tử.",
  },
  {
    id: "brand-shift",
    title: "3. Từ Xuất Khẩu Thuần Túy Sang Sở Hữu Thương Hiệu",
    subtitle: "Move from Exporters to Global Brand Owners",
    description:
      "Xây dựng các tập đoàn công nghệ & công nghiệp Việt Nam có thương hiệu và kênh phân phối toàn cầu.",
    enabler: "Phát triển thị trường nội địa kết hợp thương mại điện tử xuyên biên giới.",
    benefit: "Kiểm soát giá bán lẻ và biên lợi nhuận thương mại cuối nguồn chuỗi giá trị.",
  },
];

export function VietnamPositionSection() {
  const [selectedPathway, setSelectedPathway] = React.useState(UPGRADE_PATHWAYS[0]);

  const fdiData = RESEARCH_DATA.VN_FDI_EXPORT_SHARE_2024;
  const tivaData = RESEARCH_DATA.VN_DVA_SHARE_OECD;
  const digiData = RESEARCH_DATA.VN_DIGITAL_ECONOMY_2026;

  return (
    <SectionContainer
      id="vietnam-position"
      badge="Section 05"
      badgeVariant="green"
      title="Bàn Cờ Chiến Lược Của Việt Nam"
      subtitle="Thoát bẫy gia công ở đáy đường cong: Vai trò kiến tạo của Nhà nước trong KTTT định hướng XHCN."
    >
      {/* 3 Metric Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="border-border-subtle bg-deep-surface/80">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-muted-gray">Cơ cấu Xuất khẩu</span>
              <SourceCitation source={fdiData.source} year={fdiData.year} />
            </div>
            <CardTitle className="text-3xl font-mono text-electric-blue mt-1">
              {fdiData.value}%
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-gray space-y-1">
            <p className="text-off-white font-medium">Tỷ trọng của khối FDI</p>
            <p>
              Khối FDI tạo ra hơn 70% kim ngạch xuất khẩu, trong khi khối nội địa chiếm 28,3%.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border-subtle bg-deep-surface/80">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-muted-gray">Giá trị Nội địa (DVA)</span>
              <SourceCitation source={tivaData.source} year={tivaData.year} />
            </div>
            <CardTitle className="text-3xl font-mono text-growth-green mt-1">
              ~25% – 30%
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-gray space-y-1">
            <p className="text-off-white font-medium">Trong ngành thiết bị điện tử</p>
            <p>
              Tỷ lệ DVA trong đồ điện tử thấp hơn nhiều mức bình quân 52% của toàn bộ nền kinh tế.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border-subtle bg-deep-surface/80">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-muted-gray">Quy mô Kinh tế Số</span>
              <SourceCitation source={digiData.source} year={digiData.year} />
            </div>
            <CardTitle className="text-3xl font-mono text-warm-gold mt-1">
              {digiData.value} {digiData.unit}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-gray space-y-1">
            <p className="text-off-white font-medium">Tăng trưởng nhanh nhất ASEAN</p>
            <p>
              Động lực mới thúc đẩy nâng cấp năng lực lao động phức tạp và chuyển đổi mô hình tăng trưởng.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Decision 1018 Strategy Callout Box */}
      <div className="rounded-2xl border border-warm-gold/40 bg-gradient-to-r from-deep-surface via-deep-surface/90 to-midnight-navy p-6 sm:p-8 backdrop-blur-xl mb-12 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-warm-gold/40 bg-warm-gold/10 text-warm-gold text-xs font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>Quyết định 1018/QĐ-TTg của Thủ tướng Chính phủ</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-off-white">
              Chiến Lược Công Nghiệp Bán Dẫn: Công Thức C = SET + 1
            </h3>
            <p className="text-xs sm:text-sm text-muted-gray leading-relaxed">
              <strong>Chip</strong> = <strong>S</strong>pecialized (Chip chuyên dụng AI/IoT) +{" "}
              <strong>E</strong>lectronics (Công nghiệp điện tử phụ trợ) +{" "}
              <strong>T</strong>alent (Đào tạo 50.000 kỹ sư bán dẫn) +{" "}
              <strong>1</strong> (Điểm đến an toàn tại Việt Nam).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-border-subtle bg-midnight-navy/80 shrink-0 text-center w-full md:w-auto">
            <span className="text-xs font-mono text-muted-gray block mb-1">Mục tiêu 2030:</span>
            <span className="text-2xl font-mono font-bold text-warm-gold block">
              50.000 Kỹ sư
            </span>
            <span className="text-[11px] text-growth-green">Nâng cấp Sức lao động</span>
          </div>
        </div>
      </div>

      {/* 3 Strategic Upgrade Pathways */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-xl font-bold font-heading text-off-white">
            Ba Con Đường Dịch Chuyển Vị Thế Cho Việt Nam
          </h3>
          <p className="text-xs text-muted-gray mt-1">
            Chọn một con đường để xem điều kiện và giá trị thu hoạch:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {UPGRADE_PATHWAYS.map((p) => {
            const isSelected = selectedPathway.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPathway(p)}
                className={cn(
                  "p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4",
                  isSelected
                    ? "border-electric-blue bg-electric-blue/15 shadow-xl ring-1 ring-electric-blue/40"
                    : "border-border-subtle bg-deep-surface/60 hover:bg-surface-elevated/40 text-muted-gray"
                )}
              >
                <div>
                  <h4 className="text-sm font-bold text-off-white font-heading mb-1">
                    {p.title}
                  </h4>
                  <p className="text-xs text-muted-gray">{p.description}</p>
                </div>

                <div className="pt-3 border-t border-border-subtle space-y-1 text-xs">
                  <span className="text-electric-blue font-mono block">Điều kiện:</span>
                  <p className="text-off-white/80">{p.enabler}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Challenge Transition Banner */}
        <div className="pt-8 text-center">
          <Button
            size="lg"
            variant="gold"
            onClick={() => {
              const el = document.getElementById("challenge");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm font-bold gap-2 px-8 py-3"
          >
            <span>Nhập Vai: Chèo Lái Chiến Lược Việt Nam 2040</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}

