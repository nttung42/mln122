"use client";

import * as React from "react";
import { Smile, TrendingUp, Cpu, Globe2, ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const SMILE_CURVE_NODES = [
  {
    id: "upstream",
    name: "Đầu Nguồn (Upstream)",
    title: "Nghiên cứu & Thiết kế Vi mạch",
    actors: "Hoa Kỳ, Hà Lan, Nhật Bản",
    share: "35% – 45%",
    nature: "Lao động phức tạp đỉnh cao + Độc quyền bằng sáng chế",
    c_v_m: "c/v rất cao, m chiếm tỷ trọng lớn nhờ thặng dư siêu ngạch",
    description:
      "Nơi tập trung các tập đoàn nắm quyền lực thiết kế và kiến trúc (Nvidia, Qualcomm, ASML). Độc quyền tri thức cho phép họ thu mức lợi nhuận độc quyền cao nhất toàn cầu.",
  },
  {
    id: "midstream",
    name: "Đáy Đường Cong (Midstream)",
    title: "Gia công, Lắp ráp & ATP",
    actors: "Việt Nam, Ấn Độ, Trung Quốc",
    share: "3% – 6%",
    nature: "Lao động giản đơn thâm dụng + Cạnh tranh gay gắt",
    c_v_m: "c ngoại nhập hoàn toàn, giá trị lưu lại chủ yếu là tiền công v",
    description:
      "Nơi hàng triệu công nhân lắp ráp thiết bị hiện vật. Biên lợi nhuận mỏng, áp lực chi phí nhân công và nguy cơ dịch chuyển nhà máy liên tục đe dọa vị thế.",
  },
  {
    id: "downstream",
    name: "Cuối Nguồn (Downstream)",
    title: "Thương hiệu & Phân phối Toàn cầu",
    actors: "Apple, Google, Amazon",
    share: "25% – 35%",
    nature: "Độc quyền thương hiệu & Kiểm soát dòng lưu thông",
    c_v_m: "Hiện thực hóa giá trị hàng hóa; thâu tóm lợi nhuận thương nghiệp",
    description:
      "Kiểm soát hệ sinh thái ứng dụng, dịch vụ đám mây và mạng lưới bán lẻ trực tiếp. Quyết định toàn bộ giá trị cuối cùng được người tiêu dùng thanh toán.",
  },
];

export function GlobalShiftSection() {
  const [activeNode, setActiveNode] = React.useState<string>("midstream");

  const currentNode =
    SMILE_CURVE_NODES.find((n) => n.id === activeNode) || SMILE_CURVE_NODES[1];

  return (
    <SectionContainer
      id="global-shift"
      badge="Section 04"
      badgeVariant="gold"
      title="Dòng Chảy Giá Trị & 'Đường Cong Nụ Cười'"
      subtitle="Giải phẫu mô hình Smile Curve bằng lăng kính phân chia Giá trị thặng dư quốc tế."
    >
      {/* Interactive Smile Curve Visual Diagram */}
      <div className="rounded-2xl border border-border-subtle bg-deep-surface/90 p-6 sm:p-8 backdrop-blur-xl mb-8 shadow-2xl">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
          <div className="flex items-center gap-2 text-warm-gold text-xs font-mono uppercase tracking-wider">
            <Smile className="w-4 h-4" />
            <span>Biểu Đồ &quot;Đường Cong Nụ Cười&quot; (Stan Shih Smile Curve)</span>
          </div>
          <span className="text-xs font-mono text-muted-gray">
            Bấm vào từng điểm trên đường cong để bóc tách tỷ lệ phân chia
          </span>
        </div>

        {/* 3 Point Interactive Curve Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {SMILE_CURVE_NODES.map((node) => {
            const isSelected = activeNode === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                className={cn(
                  "p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden",
                  isSelected
                    ? "border-warm-gold bg-warm-gold/15 shadow-lg ring-1 ring-warm-gold/40"
                    : "border-border-subtle bg-midnight-navy/60 hover:bg-surface-elevated/50 text-muted-gray"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={cn(
                      "text-xs font-mono uppercase font-bold",
                      isSelected ? "text-warm-gold" : "text-muted-gray"
                    )}
                  >
                    {node.name}
                  </span>
                  <Badge
                    variant={
                      node.id === "midstream" ? "warning" : "gold"
                    }
                  >
                    Giá trị: {node.share}
                  </Badge>
                </div>

                <h4 className="text-sm font-bold text-off-white font-heading mb-1">
                  {node.title}
                </h4>
                <p className="text-xs text-muted-gray">{node.actors}</p>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-warm-gold" />
                )}
              </button>
            );
          })}
        </div>

        {/* Curve Detailed Inspector */}
        <div className="p-6 rounded-xl border border-border-subtle bg-midnight-navy/70 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border-subtle pb-4 gap-2">
            <div>
              <span className="text-xs font-mono text-electric-blue uppercase">
                Khâu đang chọn:
              </span>
              <h3 className="text-xl font-bold font-heading text-off-white">
                {currentNode.title} ({currentNode.name})
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-muted-gray block">
                Tỷ trọng giá trị thặng dư chiếm giữ:
              </span>
              <strong className="text-xl font-mono text-warm-gold font-bold">
                {currentNode.share}
              </strong>
            </div>
          </div>

          <p className="text-sm sm:text-base text-off-white/90 leading-relaxed font-sans">
            {currentNode.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="p-3 rounded-lg border border-border-subtle bg-deep-surface/50">
              <span className="text-muted-gray block mb-1 font-mono">
                Bản chất quan hệ kinh tế:
              </span>
              <p className="text-off-white font-medium">{currentNode.nature}</p>
            </div>
            <div className="p-3 rounded-lg border border-border-subtle bg-deep-surface/50">
              <span className="text-muted-gray block mb-1 font-mono">
                Cơ chế công thức $W = c + v + m$:
              </span>
              <p className="text-electric-blue font-mono font-medium">
                {currentNode.c_v_m}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

