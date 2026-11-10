"use client";

import * as React from "react";
import { Smartphone, Layers, Globe, Shield, BookOpen, ChevronRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { SUPPLY_CHAIN_STAGES } from "@/lib/data/product-journey";
import { SupplyChainStage } from "@/types/content";
import { cn } from "@/lib/utils";

export function ProductJourneySection() {
  const [selectedStage, setSelectedStage] = React.useState<SupplyChainStage>(
    SUPPLY_CHAIN_STAGES[2] // Default to Design & R&D
  );
  const [deepDiveOpen, setDeepDiveOpen] = React.useState(false);

  return (
    <SectionContainer
      id="product-journey"
      badge="Section 02"
      badgeVariant="default"
      title="Theo Dấu Chuỗi Cung Ứng Toàn Cầu"
      subtitle="Bóc tách hành trình của một chiếc smartphone: Ai thực sự nắm giữ quyền lực và giá trị?"
    >
      {/* Stage Selector Pills */}
      <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {SUPPLY_CHAIN_STAGES.map((stage) => {
          const isSelected = selectedStage.id === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage)}
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 border",
                isSelected
                  ? "border-electric-blue bg-electric-blue/20 text-electric-blue font-bold shadow-lg shadow-electric-blue/10 ring-1 ring-electric-blue"
                  : "border-border-subtle bg-deep-surface/60 text-muted-gray hover:text-off-white hover:bg-surface-elevated"
              )}
            >
              <span>{stage.order}.</span>
              <span>{stage.title.split(".")[1]?.trim() || stage.title}</span>
              <span
                className={cn(
                  "px-1.5 py-0.5 rounded text-[10px]",
                  stage.valueShareEstimated > 20
                    ? "bg-warm-gold/20 text-warm-gold font-bold"
                    : "bg-surface-elevated text-muted-gray"
                )}
              >
                ~{stage.valueShareEstimated}%
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Stage Visual Card */}
        <div className="lg:col-span-7 flex flex-col">
          <Card className="h-full border-border-subtle bg-deep-surface/90 flex flex-col justify-between">
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <Badge
                  variant={
                    selectedStage.governancePower === "high"
                      ? "gold"
                      : selectedStage.governancePower === "medium"
                      ? "green"
                      : "outline"
                  }
                >
                  Quyền chi phối: {selectedStage.governancePower.toUpperCase()}
                </Badge>
                <span className="text-xs font-mono text-muted-gray">
                  Tỷ lệ giá trị ước tính:{" "}
                  <strong className="text-warm-gold text-sm font-bold">
                    ~{selectedStage.valueShareEstimated}%
                  </strong>
                </span>
              </div>

              <div>
                <CardTitle className="text-2xl sm:text-3xl text-off-white font-heading">
                  {selectedStage.title}
                </CardTitle>
                <p className="text-sm text-electric-blue font-mono mt-1">
                  {selectedStage.subtitle}
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <p className="text-sm sm:text-base text-off-white/90 leading-relaxed font-sans">
                {selectedStage.description}
              </p>

              {/* Attributes Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border-subtle text-xs">
                <div className="space-y-1.5 bg-midnight-navy/60 p-3 rounded-lg border border-border-subtle">
                  <span className="text-muted-gray flex items-center gap-1 font-mono">
                    <Globe className="w-3.5 h-3.5 text-electric-blue" />
                    Địa bàn chính:
                  </span>
                  <p className="text-off-white font-medium">
                    {selectedStage.geographies.join(" • ")}
                  </p>
                </div>

                <div className="space-y-1.5 bg-midnight-navy/60 p-3 rounded-lg border border-border-subtle">
                  <span className="text-muted-gray flex items-center gap-1 font-mono">
                    <Shield className="w-3.5 h-3.5 text-growth-green" />
                    Chủ thể then chốt:
                  </span>
                  <p className="text-off-white font-medium">
                    {selectedStage.keyActors.join(" • ")}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setDeepDiveOpen(true)}
                  className="w-full sm:w-auto text-xs gap-2 border border-border-subtle"
                >
                  <BookOpen className="w-3.5 h-3.5 text-warm-gold" />
                  <span>Xem Phân tích Chuyên sâu (KTCT & GVC)</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Comparative Value Share Bar */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <Card className="border-border-subtle bg-deep-surface/70 p-6 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-base font-bold font-heading text-off-white mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-electric-blue" />
                <span>Phân Bổ Giá Trị Trong 1 Chiếc Điện Thoại</span>
              </h4>
              <p className="text-xs text-muted-gray mb-6">
                So sánh phần trăm giá trị được chiếm lĩnh giữa các công đoạn theo mô hình Chuỗi giá trị toàn cầu:
              </p>

              {/* Stacked Breakdown Bars */}
              <div className="space-y-3">
                {SUPPLY_CHAIN_STAGES.map((s) => {
                  const isCurrent = s.id === selectedStage.id;
                  return (
                    <div
                      key={s.id}
                      onClick={() => setSelectedStage(s)}
                      className={cn(
                        "p-2.5 rounded-lg border transition-all cursor-pointer",
                        isCurrent
                          ? "border-electric-blue/60 bg-electric-blue/10"
                          : "border-transparent hover:bg-surface-elevated/40"
                      )}
                    >
                      <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                        <span className={cn(isCurrent ? "text-off-white font-bold" : "text-muted-gray")}>
                          {s.title.split(".")[1]?.trim()}
                        </span>
                        <span className="font-bold text-warm-gold">
                          {s.valueShareEstimated}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-midnight-navy overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-300",
                            s.valueShareEstimated > 20
                              ? "bg-warm-gold"
                              : s.id === "assembly"
                              ? "bg-warning"
                              : "bg-electric-blue"
                          )}
                          style={{ width: `${s.valueShareEstimated * 3}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border-subtle text-[11px] text-muted-gray font-mono">
              * Tỷ lệ mang tính minh họa sư phạm tổng hợp từ các nghiên cứu bóc tách chuỗi cung ứng điện tử tiêu dùng toàn cầu.
            </div>
          </Card>
        </div>
      </div>

      {/* Deep Dive Modal */}
      <Modal
        isOpen={deepDiveOpen}
        onClose={() => setDeepDiveOpen(false)}
        title={selectedStage.title}
        subtitle="Giải phẫu học thuật: Kinh tế Chính trị Mác – Lênin & Chuỗi Giá trị Toàn cầu (GVC)"
      >
        <div className="space-y-4 font-sans text-xs sm:text-sm">
          <div className="p-4 rounded-xl border border-electric-blue/30 bg-electric-blue/10">
            <h5 className="font-heading font-bold text-electric-blue mb-1 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              Góc nhìn Kinh tế Chính trị Mác – Lênin:
            </h5>
            <p className="text-off-white leading-relaxed">
              {selectedStage.deepDive.marxianPerspective}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-warm-gold/30 bg-warm-gold/10">
            <h5 className="font-heading font-bold text-warm-gold mb-1 flex items-center gap-1.5">
              <Globe className="w-4 h-4" />
              Góc nhìn Chuỗi Giá trị Toàn cầu (GVC Governance):
            </h5>
            <p className="text-off-white leading-relaxed">
              {selectedStage.deepDive.gvcPerspective}
            </p>
          </div>

          <div className="pt-2 text-right">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setDeepDiveOpen(false)}
            >
              Đóng cửa sổ
            </Button>
          </div>
        </div>
      </Modal>
    </SectionContainer>
  );
}

