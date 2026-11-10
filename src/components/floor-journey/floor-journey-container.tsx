"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight, ArrowUp, Compass, Play, Square, Layers } from "lucide-react";
import { CharacterBot } from "./character-bot";
import { DoorPortal } from "./door-portal";
import { FLOORS_DATA, FloorExhibit } from "./floor-data";
import { cn } from "@/lib/utils";

const MIN_X = 60;
const MAX_X = 2240;
const CAMERA_OFFSET_LEFT = 240;

export function FloorJourneyContainer() {
  const [currentFloorIdx, setCurrentFloorIdx] = React.useState(0);
  const [charX, setCharX] = React.useState(120);
  const [isWalking, setIsWalking] = React.useState(false);
  const [isJumping, setIsJumping] = React.useState(false);
  const [isLanding, setIsLanding] = React.useState(false);
  const [facingLeft, setFacingLeft] = React.useState(false);
  const [autoWalk, setAutoWalk] = React.useState(false);

  // Thought bubble text
  const [thoughtText, setThoughtText] = React.useState("Chào mừng tới hành trình The Value Shift!");
  const [thoughtVisible, setThoughtVisible] = React.useState(true);

  // Transition Elevator State
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [transitionFloorTarget, setTransitionFloorTarget] = React.useState(1);

  const activeFloor = FLOORS_DATA[currentFloorIdx] || FLOORS_DATA[0];
  const walkTimerRef = React.useRef<NodeJS.Timeout | null>(null);
  const autoWalkIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  // Trigger Jump
  const handleJump = React.useCallback(() => {
    if (isJumping) return;
    setIsJumping(true);
    setThoughtText("Hup! Nhảy lên quan sát!");
    setThoughtVisible(true);

    setTimeout(() => {
      setIsJumping(false);
      setIsLanding(true);
      setTimeout(() => {
        setIsLanding(false);
      }, 140);
    }, 260);
  }, [isJumping]);

  // Step movement
  const handleMove = React.useCallback((delta: number) => {
    setCharX((prev) => {
      const nextX = Math.max(MIN_X, Math.min(MAX_X, prev + delta));
      return nextX;
    });

    setFacingLeft(delta < 0);
    setIsWalking(true);

    if (walkTimerRef.current) clearTimeout(walkTimerRef.current);
    walkTimerRef.current = setTimeout(() => {
      setIsWalking(false);
    }, 220);
  }, []);

  // Floor transition
  const handleFloorChange = React.useCallback(
    (targetFloorIdx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTransitionFloorTarget(targetFloorIdx + 1);

      setTimeout(() => {
        setCurrentFloorIdx(targetFloorIdx);
        setCharX(120);
        setIsTransitioning(false);
      }, 850);
    },
    [isTransitioning]
  );

  // Proximity detection for exhibits
  React.useEffect(() => {
    let nearestExhibit: FloorExhibit | null = null;
    let minDist = 9999;

    for (const exhibit of activeFloor.exhibits) {
      const dist = Math.abs(charX - exhibit.x);
      if (dist < 260 && dist < minDist) {
        minDist = dist;
        nearestExhibit = exhibit;
      }
    }

    const gateDist = Math.abs(charX - activeFloor.gateX);
    if (gateDist < 200) {
      setThoughtText(`Đã đến cửa! Bước qua để lên ${activeFloor.doorTargetName}.`);
      setThoughtVisible(true);
    } else if (nearestExhibit) {
      setThoughtText(nearestExhibit.thought);
      setThoughtVisible(true);
    } else {
      setThoughtVisible(false);
    }
  }, [charX, activeFloor]);

  // Disable Mouse Wheel Scroll & Setup Keyboard
  React.useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // DISABLED MOUSE WHEEL per user request
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        handleMove(45);
      } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        handleMove(-45);
      } else if (e.key === "ArrowUp" || e.key === "w" || e.key === "W" || e.key === " ") {
        e.preventDefault();
        handleJump();
      } else if (e.key === "Enter") {
        if (Math.abs(charX - activeFloor.gateX) < 220) {
          const nextIdx = (currentFloorIdx + 1) % FLOORS_DATA.length;
          handleFloorChange(nextIdx);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleMove, handleJump, charX, activeFloor, currentFloorIdx, handleFloorChange]);

  // Auto-walk interval
  React.useEffect(() => {
    if (autoWalk) {
      autoWalkIntervalRef.current = setInterval(() => {
        setCharX((prev) => {
          if (prev >= MAX_X - 100) {
            const nextIdx = (currentFloorIdx + 1) % FLOORS_DATA.length;
            handleFloorChange(nextIdx);
            return 120;
          }
          return prev + 24;
        });
        setIsWalking(true);
      }, 100);
    } else {
      if (autoWalkIntervalRef.current) clearInterval(autoWalkIntervalRef.current);
    }

    return () => {
      if (autoWalkIntervalRef.current) clearInterval(autoWalkIntervalRef.current);
    };
  }, [autoWalk, currentFloorIdx, handleFloorChange]);

  // Camera shift
  const worldShift = Math.max(0, charX - CAMERA_OFFSET_LEFT);
  const screenCharX = Math.min(charX, CAMERA_OFFSET_LEFT);
  const progressPct = Math.round(((charX - MIN_X) / (MAX_X - MIN_X)) * 100);
  const canEnterDoor = Math.abs(charX - activeFloor.gateX) < 200;

  return (
    <div className="relative w-full h-screen flex flex-col bg-midnight-navy text-off-white overflow-hidden select-none">
      {/* Top Floor Bar & Control Info (Light Mode) */}
      <div className="h-14 border-b border-border-subtle bg-white/95 backdrop-blur-md px-6 flex items-center justify-between shrink-0 z-30 shadow-xs">
        <div className="flex items-center gap-3">
          <span className="font-heading font-black text-sm tracking-tight text-off-white">
            THE VALUE SHIFT
          </span>
          <span className="w-px h-4 bg-border-subtle" />
          <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-warm-gold/15 text-warm-gold border border-warm-gold/40">
            {activeFloor.levelTag}
          </span>
          <span className="hidden sm:inline font-heading font-bold text-sm text-off-white">
            {activeFloor.title}
          </span>
        </div>

        {/* Floor Quick Tabs */}
        <div className="hidden md:flex items-center gap-1.5 bg-surface-elevated p-1 rounded-md border border-border-subtle">
          {FLOORS_DATA.map((fl, idx) => (
            <button
              key={fl.id}
              onClick={() => handleFloorChange(idx)}
              className={cn(
                "px-2.5 py-1 text-xs font-mono rounded transition-all cursor-pointer",
                idx === currentFloorIdx
                  ? "bg-white text-warm-gold font-bold border border-warm-gold/50 shadow-xs"
                  : "text-muted-gray hover:text-off-white"
              )}
            >
              {fl.levelTag}
            </button>
          ))}
        </div>

        {/* Auto Walk & Controller Guide */}
        <div className="flex items-center gap-4 text-xs font-mono text-muted-gray">
          <span className="hidden lg:inline">
            DÙNG <kbd className="px-1.5 py-0.5 bg-surface-elevated rounded border border-border-subtle text-off-white font-medium">←</kbd> <kbd className="px-1.5 py-0.5 bg-surface-elevated rounded border border-border-subtle text-off-white font-medium">→</kbd> ĐI &bull; <kbd className="px-1.5 py-0.5 bg-surface-elevated rounded border border-border-subtle text-off-white font-medium">UP/SPACE</kbd> NHẢY
          </span>
          <button
            onClick={() => setAutoWalk(!autoWalk)}
            className={cn(
              "px-3 py-1 rounded border text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer font-medium",
              autoWalk
                ? "bg-growth-green/15 border-growth-green text-growth-green font-bold shadow-xs"
                : "bg-white border-border-subtle text-warm-gold hover:border-warm-gold"
            )}
          >
            {autoWalk ? <Square className="w-3 h-3 fill-growth-green" /> : <Play className="w-3 h-3 fill-warm-gold" />}
            <span>{autoWalk ? "DỪNG LẠI" : "TỰ ĐỘNG BƯỚC"}</span>
          </button>
        </div>
      </div>

      {/* Main Theater Viewport (Pure Light Mode) */}
      <div className="relative flex-1 overflow-hidden bg-[radial-gradient(ellipse_at_50%_35%,#FFFFFF_0%,#F1F5F9_100%)]">
        {/* Character Avatar */}
        <CharacterBot
          screenX={screenCharX}
          isWalking={isWalking}
          isJumping={isJumping}
          isLanding={isLanding}
          facingLeft={facingLeft}
          thoughtText={thoughtText}
          thoughtVisible={thoughtVisible}
        />

        {/* Horizontal World Track */}
        <div
          style={{ transform: `translateX(-${worldShift}px)` }}
          className="absolute left-0 top-0 h-full w-[3200px] transition-transform duration-75 ease-out will-change-transform"
        >
          {/* Mural Information Wall */}
          <div className="absolute top-10 bottom-[120px] left-16 right-16 flex gap-20 items-center">
            {activeFloor.exhibits.map((exhibit) => {
              const dist = Math.abs(charX - exhibit.x);
              const isActive = dist < 260;

              return (
                <div
                  key={exhibit.id}
                  style={{ left: `${exhibit.x}px` }}
                  className={cn(
                    "w-[560px] shrink-0 rounded-xl p-7 border transition-all duration-300 backdrop-blur-md",
                    isActive
                      ? "border-electric-blue bg-white shadow-[0_16px_40px_rgba(2,132,199,0.14),0_4px_16px_rgba(15,23,42,0.06)] -translate-y-1.5"
                      : "border-border-subtle bg-white/90 shadow-[0_4px_24px_rgba(15,23,42,0.05)]"
                  )}
                >
                  <div className="font-mono text-[11px] text-warm-gold uppercase tracking-wider mb-2 flex items-center gap-2 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-warm-gold" />
                    <span>{exhibit.tag}</span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-off-white mb-3 leading-snug">
                    {exhibit.title}
                  </h3>

                  <p className="text-sm text-muted-gray leading-relaxed mb-4">
                    {exhibit.desc}
                  </p>

                  {/* Exhibits Stats Bar (Pure Light Mode) */}
                  {exhibit.stats && (
                    <div className="grid grid-cols-2 gap-3.5 bg-surface-elevated/70 p-4 rounded-lg border border-border-subtle">
                      {exhibit.stats.map((st, i) => (
                        <div key={i} className="flex flex-col gap-1">
                          <span
                            className={cn(
                              "font-mono text-2xl font-bold leading-none",
                              st.color === "green" && "text-growth-green",
                              st.color === "electric" && "text-electric-blue",
                              st.color === "gold" && "text-warm-gold",
                              st.color === "danger" && "text-warning",
                              st.color === "muted" && "text-muted-gray"
                            )}
                          >
                            {st.val}
                          </span>
                          <span className="text-[11px] text-muted-gray font-medium">{st.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Interactive Working Day Bar on Floor 3 */}
                  {exhibit.interactiveType === "day-bar" && (
                    <div className="mt-4 bg-surface-elevated/70 p-4 rounded-lg border border-border-subtle">
                      <div className="flex justify-between font-mono text-[11px] mb-2 font-medium">
                        <span>CA LÀM VIỆC 8 GIỜ</span>
                        <span className="text-warm-gold font-bold">TỶ SUẤT: m' = 100%</span>
                      </div>
                      <div className="h-8 flex rounded overflow-hidden shadow-xs">
                        <div className="w-1/2 bg-electric-blue flex items-center justify-center font-mono text-xs font-semibold text-white">
                          v = 4h (Lương)
                        </div>
                        <div className="w-1/2 bg-warm-gold flex items-center justify-center font-mono text-xs font-semibold text-white">
                          m = 4h (Thặng dư)
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Door Portal at Bot Height */}
            <div style={{ left: `${activeFloor.gateX}px` }} className="absolute bottom-0">
              <DoorPortal
                canEnter={canEnterDoor}
                onEnter={() => {
                  const nextIdx = (currentFloorIdx + 1) % FLOORS_DATA.length;
                  handleFloorChange(nextIdx);
                }}
                nextFloorLabel={activeFloor.doorTargetName}
              />
            </div>
          </div>

          {/* Ground Line & Walkway (Pure Light Mode) */}
          <div className="absolute bottom-[90px] left-0 w-full h-[3px] bg-gradient-to-r from-electric-blue/40 via-warm-gold/60 to-growth-green/50" />
          <div className="absolute bottom-0 left-0 w-full h-[90px] bg-gradient-to-b from-white to-[#F1F5F9] border-t border-border-subtle flex items-center px-10 gap-10 shadow-xs">
            <span className="font-mono text-[11px] text-muted-gray border-l border-border-subtle pl-2 font-medium">
              KM 0.0 &bull; CỔNG {activeFloor.levelTag}
            </span>
            <span className="font-mono text-[11px] text-muted-gray border-l border-border-subtle pl-2 font-medium">
              KM 0.8 &bull; TRẠM PHÂN TÍCH
            </span>
            <span className="font-mono text-[11px] text-muted-gray border-l border-border-subtle pl-2 font-medium">
              KM 1.5 &bull; TRẠM BÓC TÁCH
            </span>
            <span className="font-mono text-[11px] text-warm-gold border-l border-warm-gold/50 pl-2 font-bold">
              KM 2.2 &bull; CỬA CHUYỂN TẦNG
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Dock (Pure Light Mode) */}
      <div className="h-16 border-t border-border-subtle bg-white/95 backdrop-blur-md px-6 flex items-center justify-between shrink-0 z-30 shadow-sm">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleMove(-120)}
            className="px-4 py-2 rounded bg-surface-elevated border border-border-subtle text-off-white font-mono text-xs font-medium flex items-center gap-1.5 hover:border-electric-blue hover:text-electric-blue transition-all cursor-pointer active:scale-95 shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>LÙI LẠI</span>
          </button>

          {/* Jump Button */}
          <button
            onClick={handleJump}
            className="px-4 py-2 rounded bg-warm-gold/10 border border-warm-gold/60 text-warm-gold font-mono text-xs font-bold flex items-center gap-1.5 hover:bg-warm-gold hover:text-white transition-all cursor-pointer active:scale-95 shadow-xs shadow-warm-gold/10"
          >
            <ArrowUp className="w-3.5 h-3.5 animate-bounce" />
            <span>NHẢY (UP / SPACE)</span>
          </button>

          <button
            onClick={() => handleMove(120)}
            className="px-4 py-2 rounded bg-surface-elevated border border-border-subtle text-off-white font-mono text-xs font-medium flex items-center gap-1.5 hover:border-electric-blue hover:text-electric-blue transition-all cursor-pointer active:scale-95 shadow-xs"
          >
            <span>TIẾN BƯỚC</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Timeline Progress */}
        <div className="hidden sm:flex flex-1 max-w-md mx-8 flex-col gap-1.5">
          <div className="flex justify-between font-mono text-[11px] text-muted-gray font-medium">
            <span>TIẾN ĐỘ TẦNG</span>
            <span className="text-warm-gold font-bold">{progressPct}%</span>
          </div>
          <div className="w-full h-1.5 bg-surface-elevated rounded-full overflow-hidden border border-border-subtle/60">
            <div
              style={{ width: `${Math.max(4, Math.min(100, progressPct))}%` }}
              className="h-full bg-gradient-to-r from-electric-blue to-warm-gold transition-all duration-100"
            />
          </div>
        </div>

        {/* Coordinates */}
        <div className="font-mono text-xs text-muted-gray">
          TỌA ĐỘ: <span className="text-off-white font-bold">X: {Math.round(charX)}m</span>
        </div>
      </div>

      {/* Elevator Transition Veil (Pure Light Mode) */}
      <div
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-opacity duration-500 pointer-events-none",
          isTransitioning ? "opacity-100 pointer-events-auto" : "opacity-0"
        )}
      >
        <span className="font-mono text-6xl font-black text-warm-gold tracking-tight mb-3 animate-pulse">
          TẦNG 0{transitionFloorTarget}
        </span>
        <span className="font-heading text-lg tracking-widest uppercase text-off-white font-bold">
          ĐANG DI CHUYỂN TỚI KHU VỰC TIẾP THEO...
        </span>
      </div>
    </div>
  );
}
