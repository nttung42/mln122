"use client";

import * as React from "react";
import {
  Gamepad2,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  TrendingUp,
  TrendingDown,
  ShieldCheck,
  AlertTriangle,
  Award,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GAME_ROUNDS } from "@/lib/game/data";
import { calculateMetrics, generateSimulationResult } from "@/lib/game/engine";
import { useGamePersistence } from "@/hooks/use-persistence";
import { RoundId, SimulationResult } from "@/types/game";
import { cn } from "@/lib/utils";

const METRIC_LABELS: Record<string, { label: string; desc: string }> = {
  domesticValueCapture: {
    label: "Giá Trị Gia Tăng Nội Địa",
    desc: "Tỷ lệ thặng dư (m) giữ lại trong nước",
  },
  techCapability: {
    label: "Năng Lực Công Nghệ & R&D",
    desc: "Lao động phức tạp, bản quyền & IP",
  },
  employmentIncome: {
    label: "Phúc Lợi & Việc Làm",
    desc: "Tiền lương thực tế (v) & an sinh",
  },
  economicAutonomy: {
    label: "Tự Chủ & Kháng Chịu Sốc",
    desc: "Độc lập trước đứt gãy cung ứng",
  },
  sustainability: {
    label: "Bền Vững & Chuyển Đổi Xanh",
    desc: "Tiêu chuẩn ESG và cân bằng sinh thái",
  },
};

export function GameChallengeSection() {
  const {
    currentRound,
    setCurrentRound,
    selectedChoices,
    setSelectedChoices,
    isCompleted,
    setIsCompleted,
    resetGame,
  } = useGamePersistence();

  // Live Metrics
  const liveMetrics = React.useMemo(() => {
    return calculateMetrics(selectedChoices);
  }, [selectedChoices]);

  // Final Result
  const result: SimulationResult | null = React.useMemo(() => {
    if (!isCompleted && (!selectedChoices[1] || !selectedChoices[2] || !selectedChoices[3])) {
      return null;
    }
    return generateSimulationResult(selectedChoices);
  }, [isCompleted, selectedChoices]);

  const handleSelectChoice = (roundId: RoundId, choiceId: string) => {
    setSelectedChoices((prev) => ({
      ...prev,
      [roundId]: choiceId,
    }));
  };

  const handleNextRound = () => {
    if (currentRound < 3) {
      setCurrentRound((prev) => (prev + 1) as RoundId);
    } else {
      setIsCompleted(true);
      // scroll to result card
      setTimeout(() => {
        const el = document.getElementById("verdict-card");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handlePrevRound = () => {
    if (currentRound > 1) {
      setCurrentRound((prev) => (prev - 1) as RoundId);
    }
  };

  const handleReset = () => {
    resetGame();
  };

  const activeRoundData = GAME_ROUNDS.find((r) => r.id === currentRound) || GAME_ROUNDS[0];
  const currentSelection = selectedChoices[currentRound];

  return (
    <SectionContainer
      id="challenge"
      badge="Section 06 & 07"
      badgeVariant="gold"
      title="Thử Thách: Chèo Lái Việt Nam 2040"
      subtitle="Đưa ra 3 quyết định chiến lược quốc gia. Cân bằng các đánh đổi giữa Tăng trưởng, Công nghệ, Việc làm và Tự chủ."
    >
      {/* 5 Live Economic Metrics Gauge Dashboard */}
      <div className="mb-10 p-5 rounded-2xl border border-border-subtle bg-deep-surface/90 backdrop-blur-xl shadow-xl">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-warm-gold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            <span>Chỉ Số Kinh Tế Chiến Lược (Thời Gian Thực)</span>
          </div>
          <span className="text-[11px] font-mono text-muted-gray">
            Điểm số mô phỏng chuẩn hóa [0 – 100]
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {Object.entries(liveMetrics).map(([key, value]) => {
            const meta = METRIC_LABELS[key] || { label: key, desc: "" };
            return (
              <div
                key={key}
                className="p-3 rounded-xl border border-border-subtle bg-midnight-navy/60 flex flex-col justify-between space-y-2"
              >
                <div>
                  <span className="text-[11px] font-mono text-muted-gray line-clamp-1">
                    {meta.label}
                  </span>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-off-white mt-0.5">
                    {value}
                    <span className="text-xs font-normal text-muted-gray">/100</span>
                  </div>
                </div>

                <div className="w-full h-1.5 rounded-full bg-deep-surface overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-300",
                      value >= 65
                        ? "bg-growth-green"
                        : value >= 45
                        ? "bg-electric-blue"
                        : "bg-warning"
                    )}
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Game State: Rounds vs Result */}
      {!isCompleted ? (
        <div className="space-y-8">
          {/* Round Header & Context */}
          <div className="rounded-2xl border border-electric-blue/40 bg-deep-surface/95 p-6 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <Badge variant="gold">
                VÒNG {activeRoundData.id} / 3: {activeRoundData.title.split(":")[1]?.trim()}
              </Badge>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3].map((r) => (
                  <button
                    key={r}
                    onClick={() => setCurrentRound(r as RoundId)}
                    className={cn(
                      "w-7 h-7 rounded-full text-xs font-mono font-bold flex items-center justify-center transition-all cursor-pointer",
                      currentRound === r
                        ? "bg-electric-blue text-white shadow-md shadow-electric-blue/30 ring-2 ring-electric-blue"
                        : selectedChoices[r as RoundId]
                        ? "bg-growth-green/20 text-growth-green border border-growth-green/50"
                        : "bg-surface-elevated text-muted-gray border border-border-subtle"
                    )}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-heading text-off-white mb-2">
              {activeRoundData.scenario}
            </h3>
            <p className="text-xs sm:text-sm text-muted-gray leading-relaxed">
              <strong>Bối cảnh thế giới:</strong> {activeRoundData.macroContext}
            </p>
          </div>

          {/* 3 Decision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeRoundData.choices.map((choice) => {
              const isSelected = currentSelection === choice.id;
              return (
                <Card
                  key={choice.id}
                  onClick={() => handleSelectChoice(activeRoundData.id, choice.id)}
                  className={cn(
                    "cursor-pointer transition-all duration-200 flex flex-col justify-between relative overflow-hidden",
                    isSelected
                      ? "border-warm-gold bg-deep-surface/95 shadow-2xl ring-2 ring-warm-gold/60 scale-[1.01]"
                      : "border-border-subtle bg-deep-surface/60 hover:bg-surface-elevated/40 hover:border-border-subtle/80"
                  )}
                >
                  {isSelected && (
                    <div className="absolute top-0 right-0 bg-warm-gold text-midnight-navy font-mono text-[10px] font-bold px-3 py-0.5 rounded-bl-lg flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>ĐÃ CHỌN</span>
                    </div>
                  )}

                  <CardHeader className="space-y-2">
                    <span className="text-xs font-mono text-electric-blue font-bold">
                      LỰA CHỌN {choice.code}
                    </span>
                    <CardTitle className="text-lg leading-snug">
                      {choice.title}
                    </CardTitle>
                    <p className="text-xs text-muted-gray">{choice.subtitle}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-xs text-off-white/90 leading-relaxed">
                      {choice.description}
                    </p>

                    {/* Tradeoffs Grid */}
                    <div className="space-y-2 pt-2 border-t border-border-subtle text-xs">
                      <div className="p-2 rounded bg-growth-green/10 border border-growth-green/30 text-off-white">
                        <span className="text-growth-green font-mono font-semibold block text-[11px] mb-0.5 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" /> Đột phá thu được:
                        </span>
                        <p className="text-[11px] leading-relaxed">{choice.tradeoffs.upside}</p>
                      </div>

                      <div className="p-2 rounded bg-warning/10 border border-warning/30 text-off-white">
                        <span className="text-warning font-mono font-semibold block text-[11px] mb-0.5 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> Đánh đổi / Rủi ro:
                        </span>
                        <p className="text-[11px] leading-relaxed">{choice.tradeoffs.downside}</p>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-2">
                    <Button
                      variant={isSelected ? "gold" : "outline"}
                      size="sm"
                      className="w-full text-xs font-semibold"
                    >
                      {isSelected ? "Phương Án Đang Chọn" : "Chọn Chiến Lược Này"}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Navigation Controls between Rounds */}
          <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevRound}
              disabled={currentRound === 1}
              className="text-xs gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Vòng Trước</span>
            </Button>

            <span className="text-xs font-mono text-muted-gray">
              Đang hoàn tất vòng {currentRound} / 3
            </span>

            <Button
              variant="default"
              size="sm"
              onClick={handleNextRound}
              disabled={!currentSelection}
              className="text-xs gap-1.5 font-semibold"
            >
              <span>{currentRound === 3 ? "Xem Hồ Sơ Chiến Lược 2040" : "Vòng Tiếp Theo"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      ) : (
        /* Final Verdict & Strategic Profile */
        result && (
          <div id="verdict-card" className="space-y-8 animate-in fade-in duration-500">
            <div className="p-6 sm:p-8 rounded-2xl border border-warm-gold/50 bg-gradient-to-b from-deep-surface via-deep-surface/90 to-midnight-navy shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border-subtle pb-4 gap-2">
                <div>
                  <Badge variant="gold" className="mb-2">
                    HỒ SƠ CHIẾN LƯỢC VIỆT NAM 2040
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-off-white">
                    {result.archetypeTitle}
                  </h3>
                  <p className="text-sm font-mono text-warm-gold mt-1">
                    {result.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleReset}
                    className="text-xs gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Mô phỏng Lại</span>
                  </Button>
                </div>
              </div>

              <p className="text-sm sm:text-base text-off-white/95 leading-relaxed font-sans">
                {result.summary}
              </p>

              {/* Strengths & Vulnerabilities Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-4 rounded-xl border border-growth-green/30 bg-growth-green/10 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-growth-green uppercase flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> Điểm Mạnh Đạt Được:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-off-white font-sans">
                    {result.keyStrengths.map((s, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-growth-green font-bold">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-warning/30 bg-warning/10 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-warning uppercase flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" /> Đánh Đổi & Điểm Nghẽn Cần Quản Trị:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-off-white font-sans">
                    {result.keyVulnerabilities.map((v, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-warning font-bold">•</span>
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Academic Reflection Box */}
              <div className="p-4 sm:p-5 rounded-xl border border-electric-blue/40 bg-midnight-navy/90 text-xs sm:text-sm text-off-white space-y-2">
                <div className="text-electric-blue font-mono font-semibold flex items-center gap-1.5 uppercase text-xs">
                  <Sparkles className="w-4 h-4" />
                  <span>Phản tư Kinh tế Chính trị Mác – Lênin:</span>
                </div>
                <p className="leading-relaxed text-off-white/90 font-sans">
                  {result.academicReflection}
                </p>
              </div>

              {/* Policy Recommendation */}
              <div className="p-4 rounded-xl border border-border-subtle bg-deep-surface/60 text-xs text-muted-gray">
                <strong className="text-off-white block mb-1">
                  Khuyến nghị Điều chỉnh Chính sách:
                </strong>
                <p>{result.alternativePolicyRecommendation}</p>
              </div>
            </div>
          </div>
        )
      )}
    </SectionContainer>
  );
}

