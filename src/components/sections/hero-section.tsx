"use client";

import * as React from "react";
import { ArrowDown, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToNext = () => {
    const el = document.getElementById("paradox");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-midnight-navy"
    >
      {/* Background Subtle Editorial Glows & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(13,148,136,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(57,139,206,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Hero Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-electric-blue/40 bg-electric-blue/10 text-electric-blue text-xs font-mono mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Sparkles className="w-3.5 h-3.5 text-warm-gold" />
        <span>Hành trình Tương tác Kinh tế Chính trị Mác – Lênin</span>
      </div>

      {/* Main Headline */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-heading tracking-tight text-off-white leading-[1.1]">
          THE VALUE SHIFT
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-warm-gold to-growth-green mt-2">
            Giải Mã Giá Trị Thặng Dư Toàn Cầu
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-gray max-w-2xl mx-auto font-sans font-light leading-relaxed">
          Theo dấu dòng chảy giá trị. Hiểu bản chất dịch chuyển. Định hình vị thế kinh tế Việt Nam.
        </p>

        {/* Core Question Highlight Box */}
        <div className="p-5 sm:p-6 rounded-2xl border border-border-subtle bg-deep-surface/70 backdrop-blur-md max-w-2xl mx-auto text-left shadow-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-warm-gold mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-warm-gold animate-pulse" />
            Nghịch lý trung tâm
          </div>
          <p className="text-sm sm:text-base text-off-white leading-relaxed font-sans">
            Tại sao Việt Nam có thể xuất khẩu hơn <strong>200 tỷ USD</strong> thiết bị điện tử, nhưng phần giá trị giữ lại trong nước lại rất mỏng? Giá trị thặng dư thực sự đã chảy về đâu?
          </p>
        </div>

        {/* Action CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="default"
            onClick={scrollToNext}
            className="w-full sm:w-auto text-sm font-semibold gap-2 shadow-lg shadow-electric-blue/20"
          >
            <span>Bắt đầu Khám phá Hành trình</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const el = document.getElementById("challenge");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto text-sm"
          >
            Nhảy đến Thử thách Vietnam 2040
          </Button>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-gray hover:text-off-white transition-colors flex flex-col items-center gap-1.5 cursor-pointer text-xs font-mono"
        aria-label="Cuộn xuống để xem tiếp"
      >
        <span>CUỘN ĐỂ KHÁM PHÁ</span>
        <ArrowDown className="w-4 h-4 text-electric-blue" />
      </button>
    </section>
  );
}

