import * as React from "react";
import { BookOpen, ShieldCheck, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-deep-surface/90 text-off-white py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Mission */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded bg-electric-blue/20 border border-electric-blue/40 flex items-center justify-center text-electric-blue font-heading font-black text-xs">
              VS
            </div>
            <span className="font-heading font-bold text-base tracking-wider">
              THE VALUE SHIFT
            </span>
          </div>
          <p className="text-xs text-muted-gray leading-relaxed mb-4">
            Dự án giáo dục số tương tác: Giải mã cuộc dịch chuyển Giá trị thặng dư toàn cầu và vị thế của Việt Nam dưới lăng kính Kinh tế chính trị Mác – Lênin.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-growth-green font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Nghiên cứu học thuật & Số liệu chính thức (OECD / WB / GSO)</span>
          </div>
        </div>

        {/* Academic References */}
        <div>
          <h4 className="font-heading font-semibold text-xs tracking-wider uppercase text-off-white mb-3 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-warm-gold" />
            Cơ sở Lý luận & Nguồn Dữ liệu
          </h4>
          <ul className="space-y-1.5 text-xs text-muted-gray font-sans">
            <li>• Giáo trình Kinh tế Chính trị Mác – Lênin (Bộ GD&ĐT)</li>
            <li>• OECD – Trade in Value Added (TiVA) 2025 Release</li>
            <li>• World Bank – Viet Nam 2045: Trading Up in a Changing World</li>
            <li>• Tổng cục Thống kê (GSO) & Tổng cục Hải quan Việt Nam</li>
            <li>• Quyết định 1018/QĐ-TTg về Chiến lược phát triển Bán dẫn</li>
          </ul>
        </div>

        {/* Disclaimer & Metadata */}
        <div>
          <h4 className="font-heading font-semibold text-xs tracking-wider uppercase text-off-white mb-3">
            Tuyên bố Miễn trừ Trách nhiệm
          </h4>
          <p className="text-[11px] text-muted-gray leading-relaxed mb-3">
            Trò chơi mô phỏng chiến lược &quot;Vietnam 2040&quot; và các thanh trượt trong &quot;Working Day Simulator&quot; sử dụng các tham số mô phỏng giả định có tính minh họa sư phạm nhằm làm rõ cơ chế lý thuyết và các đánh đổi chiến lược, không cấu thành dự báo kinh tế lượng thực tế.
          </p>
          <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px] text-muted-gray font-mono">
            <span>MLN122 — 2026</span>
            <span>Version 1.0 (MVP)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

