"use client";

import * as React from "react";
import { ArrowUpRight, ArrowDownLeft, HelpCircle, CheckCircle, Sparkles } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SourceCitation } from "@/components/ui/source-citation";
import { RESEARCH_DATA } from "@/lib/data/research";
import { usePollPersistence } from "@/hooks/use-persistence";
import { cn } from "@/lib/utils";

const POLL_OPTIONS = [
  {
    id: "assembly",
    label: "A. Gia công & Lắp ráp hoàn thiện sản phẩm",
    note: "Tạo ra hàng triệu việc làm nhưng biên lợi nhuận thường chỉ 2–4%.",
    isLeader: false,
  },
  {
    id: "tech",
    label: "B. Thiết kế vi mạch, R&D & Sở hữu trí tuệ (IP)",
    note: "Đầu nguồn chuỗi giá trị: Chiếm đoạt phần lớn giá trị thặng dư siêu ngạch.",
    isLeader: true,
  },
  {
    id: "brand",
    label: "C. Xây dựng Thương hiệu & Hệ sinh thái phần mềm",
    note: "Cuối nguồn chuỗi giá trị: Quyết định giá bán lẻ và biên lợi nhuận thương mại độc quyền.",
    isLeader: true,
  },
  {
    id: "distribution",
    label: "D. Quản trị Logistics & Phân phối bán lẻ toàn cầu",
    note: "Kiểm soát dòng tiền và kênh tiếp cận trực tiếp khách hàng tiêu dùng.",
    isLeader: false,
  },
];

export function ParadoxSection() {
  const { selectedPoll, hasVoted, vote } = usePollPersistence();

  const exportData = RESEARCH_DATA.VN_ELECTRONICS_EXPORT_2026;
  const importData = RESEARCH_DATA.VN_ELECTRONICS_IMPORT_2026;

  const handleVote = (id: string) => {
    vote(id);
  };

  return (
    <SectionContainer
      id="paradox"
      badge="Section 01"
      badgeVariant="gold"
      title="Nghịch Lý Của Kỷ Nguyên Số"
      subtitle="Xuất khẩu hàng trăm tỷ USD nhưng phần giá trị giữ lại trong nước liệu có tương xứng?"
    >
      {/* 2-Column Paradox Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Export Record */}
        <Card className="border-growth-green/30 bg-deep-surface/80">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-growth-green flex items-center gap-1 font-semibold uppercase">
                <ArrowUpRight className="w-4 h-4" /> Xuất Khẩu Kỷ Lục
              </span>
              <SourceCitation source={exportData.source} year={exportData.year} />
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-mono text-growth-green mt-2">
              {exportData.value} {exportData.unit}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-gray">
            <p className="font-medium text-off-white">
              Kim ngạch xuất khẩu điện thoại, máy tính và linh kiện điện tử (10 tháng đầu năm 2026).
            </p>
            <p className="text-xs leading-relaxed">
              Chiếm tới <strong>41,5%</strong> tổng kim ngạch xuất khẩu cả nước, đưa Việt Nam vào top các quốc gia gia công công nghệ cao hàng đầu thế giới.
            </p>
          </CardContent>
        </Card>

        {/* Import Deficit */}
        <Card className="border-warning/30 bg-deep-surface/80">
          <CardHeader>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-warning flex items-center gap-1 font-semibold uppercase">
                <ArrowDownLeft className="w-4 h-4" /> Nhập Khẩu Linh Kiện
              </span>
              <SourceCitation source={importData.source} year={importData.year} />
            </div>
            <CardTitle className="text-3xl sm:text-4xl font-mono text-warning mt-2">
              {importData.value} {importData.unit}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-gray">
            <p className="font-medium text-off-white">
              Chi phí nhập khẩu linh kiện bán dẫn và thiết bị đầu vào ở chính nhóm hàng này.
            </p>
            <p className="text-xs leading-relaxed">
              Dẫn tới tình trạng <strong>nhập siêu gần 17,5 tỷ USD</strong> linh kiện. Toàn bộ vi xử lý cao cấp, bản quyền thuật toán và thiết bị quang khắc đều phụ thuộc vào nguồn ngoại nhập.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Poll */}
      <div className="max-w-3xl mx-auto rounded-2xl border border-border-subtle bg-deep-surface/90 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
        <div className="flex items-center gap-2 mb-3 text-electric-blue text-xs font-mono uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>Thăm dò Nhận thức Ban đầu</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-heading text-off-white mb-3">
          Theo bạn, trong chuỗi sản xuất một thiết bị công nghệ cao, khâu nào nắm quyền kiểm soát và thâu tóm phần giá trị thặng dư lớn nhất?
        </h3>
        <p className="text-xs sm:text-sm text-muted-gray mb-6">
          Hãy chọn phương án theo góc nhìn của bạn để xem sự phân bổ thực tế trong chuỗi giá trị toàn cầu:
        </p>

        <div className="space-y-3">
          {POLL_OPTIONS.map((opt) => {
            const isSelected = selectedPoll === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => handleVote(opt.id)}
                className={cn(
                  "w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                  isSelected
                    ? "border-warm-gold bg-warm-gold/15 text-off-white shadow-md ring-1 ring-warm-gold/50"
                    : "border-border-subtle bg-surface-elevated/40 hover:bg-surface-elevated hover:border-electric-blue/40 text-muted-gray"
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors",
                      isSelected
                        ? "border-warm-gold bg-warm-gold text-midnight-navy"
                        : "border-muted-gray/50"
                    )}
                  >
                    {isSelected && <CheckCircle className="w-4 h-4" />}
                  </div>
                  <span className="text-sm font-medium text-off-white">{opt.label}</span>
                </div>

                {hasVoted && (
                  <span className="text-xs font-sans text-muted-gray sm:text-right max-w-xs pl-8 sm:pl-0">
                    {opt.note}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {hasVoted && (
          <div className="mt-6 pt-5 border-t border-border-subtle text-xs sm:text-sm text-off-white bg-midnight-navy/60 p-4 rounded-xl border border-border-subtle flex items-start gap-3 animate-in fade-in duration-300">
            <Sparkles className="w-5 h-5 text-warm-gold shrink-0 mt-0.5" />
            <div>
              <strong className="text-warm-gold block mb-1">
                Gợi mở bản chất Kinh tế Chính trị:
              </strong>
              Nơi sản xuất ra sản phẩm hiện vật (nhà xưởng lắp ráp) chỉ nhận lại tiền lương của công nhân giản đơn (tư bản khả biến $v$), trong khi phần lớn giá trị thặng dư ($m$) và siêu ngạch độc quyền thuộc về những chủ thể làm chủ công nghệ lõi và sở hữu thương hiệu.
            </div>
          </div>
        )}
      </div>
    </SectionContainer>
  );
}

