"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight, ArrowUp, Compass, Play, Square, Layers } from "lucide-react";
import { CharacterBot } from "./character-bot";
import { DoorPortal } from "./door-portal";
import { FLOORS_DATA, FloorExhibit } from "./floor-data";
import { Floor1OpenExhibition } from "./floor-1-open-exhibition";
import { Floor2HardwareTeardown } from "./floor-2-hardware-teardown";
import { Floor3DecodeValue } from "./floor-3-decode-value";
import { Floor4GlobalShift } from "./floor-4-global-shift";
import { Floor5VietnamPosition } from "./floor-5-vietnam-position";
import { Floor6StrategicChallenge } from "./floor-6-strategic-challenge";
import { cn } from "@/lib/utils";

const MIN_X = 60;
const CAMERA_OFFSET_LEFT = 260;
const EXTRA_WIDTH_PAST_GATE = 200; // Chỉ kéo dài hơn cửa đúng 200px

export function FloorJourneyContainer() {
  const [currentFloorIdx, setCurrentFloorIdx] = React.useState(0);
  const [charX, setCharX] = React.useState(140);
  const [viewportWidth, setViewportWidth] = React.useState<number>(1440);
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
  // Cho phép bước tới hơn tâm cửa một chút (60px) để chạm ngưỡng cửa, không cho đi xa vào khoảng trống
  const currentMaxX = (activeFloor.gateX || 2240) + 60;
  const worldTrackWidth = (activeFloor.gateX || 2240) + EXTRA_WIDTH_PAST_GATE;

  const walkTimerRef = React.useRef<NodeJS.Timeout | null>(null);
  const autoWalkIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  // Listen to window resize to accurately clamp camera scroll
  React.useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  const handleMove = React.useCallback(
    (delta: number) => {
      setCharX((prev) => {
        const nextX = Math.max(MIN_X, Math.min(currentMaxX, prev + delta));
        return nextX;
      });

      setFacingLeft(delta < 0);
      setIsWalking(true);

      if (walkTimerRef.current) clearTimeout(walkTimerRef.current);
      walkTimerRef.current = setTimeout(() => {
        setIsWalking(false);
      }, 220);
    },
    [currentMaxX]
  );

  // Floor transition
  const handleFloorChange = React.useCallback(
    (targetFloorIdx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTransitionFloorTarget(targetFloorIdx + 1);

      setTimeout(() => {
        setCurrentFloorIdx(targetFloorIdx);
        setCharX(140);
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
      if (dist < 320 && dist < minDist) {
        minDist = dist;
        nearestExhibit = exhibit;
      }
    }

    const gateDist = Math.abs(charX - activeFloor.gateX);
    if (gateDist < 240) {
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
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        handleMove(50);
      } else if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        handleMove(-50);
      } else if (e.key === "ArrowUp" || e.key === "w" || e.key === "W" || e.key === " ") {
        e.preventDefault();
        handleJump();
      } else if (e.key === "Enter") {
        if (Math.abs(charX - activeFloor.gateX) < 260) {
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
          if (prev >= currentMaxX - 80) {
            const nextIdx = (currentFloorIdx + 1) % FLOORS_DATA.length;
            handleFloorChange(nextIdx);
            return 140;
          }
          return prev + 24;
        });
        setIsWalking(true);
      }, 90);
    } else {
      if (autoWalkIntervalRef.current) clearInterval(autoWalkIntervalRef.current);
    }

    return () => {
      if (autoWalkIntervalRef.current) clearInterval(autoWalkIntervalRef.current);
    };
  }, [autoWalk, currentFloorIdx, currentMaxX, handleFloorChange]);

  // Dynamic Ambient Lighting Gradient for Gallery Wall
  const ambientBg = React.useMemo(() => {
    if (activeFloor.id === 1) {
      if (charX < 1100) {
        return "radial-gradient(ellipse at 30% 35%, #ECFDF5 0%, #F8FAFC 85%)";
      } else if (charX < 2250) {
        return "radial-gradient(ellipse at 50% 35%, #FFFBEB 0%, #F8FAFC 85%)";
      } else if (charX < 3350) {
        return "radial-gradient(ellipse at 70% 35%, #FEF2F2 0%, #F8FAFC 85%)";
      } else {
        return "radial-gradient(ellipse at 90% 35%, #E0F2FE 0%, #F8FAFC 85%)";
      }
    }
    if (activeFloor.id === 2) {
      if (charX < 950) {
        return "radial-gradient(ellipse at 30% 35%, #F8FAFC 0%, #F1F5F9 85%)";
      } else if (charX < 1700) {
        return "radial-gradient(ellipse at 45% 35%, #ECFDF5 0%, #F8FAFC 85%)";
      } else if (charX < 2450) {
        return "radial-gradient(ellipse at 60% 35%, #F8FAFC 0%, #F1F5F9 85%)";
      } else {
        return "radial-gradient(ellipse at 80% 35%, #ECFDF5 0%, #F8FAFC 85%)";
      }
    }
    if (activeFloor.id === 3) {
      if (charX < 1400) {
        return "radial-gradient(ellipse at 30% 35%, #FAF5FF 0%, #F8FAFC 85%)";
      } else if (charX < 2500) {
        return "radial-gradient(ellipse at 50% 35%, #F0F9FF 0%, #F8FAFC 85%)";
      } else if (charX < 3650) {
        return "radial-gradient(ellipse at 70% 35%, #FFFBEB 0%, #F8FAFC 85%)";
      } else {
        return "radial-gradient(ellipse at 90% 35%, #ECFDF5 0%, #F8FAFC 85%)";
      }
    }
    if (activeFloor.id === 4) {
      if (charX < 2400) {
        return "radial-gradient(ellipse at 35% 35%, #E0F2FE 0%, #F8FAFC 85%)";
      } else if (charX < 4100) {
        return "radial-gradient(ellipse at 55% 35%, #FEF3C7 0%, #F8FAFC 85%)";
      } else {
        return "radial-gradient(ellipse at 75% 35%, #ECFDF5 0%, #F8FAFC 85%)";
      }
    }
    if (activeFloor.id === 5) {
      if (charX < 1300) {
        return "radial-gradient(ellipse at 30% 35%, #FFFBEB 0%, #F8FAFC 85%)";
      } else if (charX < 2500) {
        return "radial-gradient(ellipse at 50% 35%, #FEF2F2 0%, #F8FAFC 85%)";
      } else if (charX < 3650) {
        return "radial-gradient(ellipse at 70% 35%, #ECFDF5 0%, #F8FAFC 85%)";
      } else {
        return "radial-gradient(ellipse at 90% 35%, #E0F2FE 0%, #F8FAFC 85%)";
      }
    }
    if (activeFloor.id === 6) {
      if (charX < 1500) {
        return "radial-gradient(ellipse at 30% 35%, #FFFBEB 0%, #F8FAFC 85%)";
      } else if (charX < 2800) {
        return "radial-gradient(ellipse at 50% 35%, #F0F9FF 0%, #F8FAFC 85%)";
      } else if (charX < 4200) {
        return "radial-gradient(ellipse at 70% 35%, #ECFDF5 0%, #F8FAFC 85%)";
      } else {
        return "radial-gradient(ellipse at 90% 35%, #FAF5FF 0%, #F8FAFC 85%)";
      }
    }
    return "radial-gradient(ellipse at 50% 35%, #FFFFFF 0%, #F1F5F9 100%)";
  }, [activeFloor.id, charX]);

  // Pointer drag for panning/walking by dragging the viewport window
  const isDraggingRef = React.useRef(false);
  const startDragXRef = React.useRef(0);
  const startCharXRef = React.useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("button, a, input, select")) return;
    isDraggingRef.current = true;
    startDragXRef.current = e.clientX;
    startCharXRef.current = charX;
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = startDragXRef.current - e.clientX;
    const targetX = Math.max(MIN_X, Math.min(currentMaxX, startCharXRef.current + deltaX));
    setCharX(targetX);
    setFacingLeft(deltaX < 0);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  // Camera shift - Clamped strictly to only scroll slightly past the door
  const maxWorldShift = Math.max(0, worldTrackWidth - viewportWidth);
  const rawShift = Math.max(0, charX - CAMERA_OFFSET_LEFT);
  const worldShift = Math.min(maxWorldShift, rawShift);
  const screenCharX = charX - worldShift;
  const progressPct = Math.min(100, Math.round(((charX - MIN_X) / (activeFloor.gateX - MIN_X)) * 100));
  const canEnterDoor = Math.abs(charX - activeFloor.gateX) <= 140;

  return (
    <div className="relative w-full h-screen flex flex-col bg-midnight-navy text-off-white overflow-hidden select-none">
      {/* Top Floor Bar & Control Info (Clean Light Mode) */}
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

      {/* Main Theater Viewport (Dynamic Ambient Lighting - Supports dragging horizontal window) */}
      <div
        style={{ background: ambientBg, transition: "background 0.8s ease" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative flex-1 overflow-hidden cursor-grab active:cursor-grabbing touch-none"
      >
        {/* LỚP PARALLAX NỀN XA CHO TẦNG 01 & TẦNG 02 (Watermark in chìm) */}
        {activeFloor.id === 1 ? (
          <div
            style={{ transform: `translateX(-${worldShift * 0.18}px)` }}
            className="absolute inset-0 pointer-events-none will-change-transform z-0 select-none"
          >
            <div className="absolute top-10 left-16 w-[4200px] flex items-center gap-32 opacity-[0.05]">
              <span className="font-heading font-black text-9xl tracking-widest text-slate-900 whitespace-nowrap">
                MADE IN ≠ VALUE ADDED ≠ VALUE CAPTURED
              </span>
              <span className="font-heading font-black text-9xl tracking-widest text-slate-900 whitespace-nowrap">
                GLOBAL SURPLUS VALUE PIPELINE
              </span>
            </div>
          </div>
        ) : activeFloor.id === 2 ? (
          <div
            style={{ transform: `translateX(-${worldShift * 0.18}px)` }}
            className="absolute inset-0 pointer-events-none will-change-transform z-0 select-none"
          >
            <div className="absolute top-10 left-16 w-[4200px] flex items-center gap-32 opacity-[0.04]">
              <span className="font-heading font-black text-9xl tracking-widest text-slate-900 whitespace-nowrap">
                VALUE CHAIN ALTITUDE &bull; HARDWARE TEARDOWN
              </span>
              <span className="font-heading font-black text-9xl tracking-widest text-slate-900 whitespace-nowrap">
                SURPLUS VALUE AT THE TOP
              </span>
            </div>
          </div>
        ) : activeFloor.id === 4 ? (
          <div
            style={{ transform: `translateX(-${worldShift * 0.18}px)` }}
            className="absolute inset-0 pointer-events-none will-change-transform z-0 select-none"
          >
            <div className="absolute top-10 left-16 w-[4200px] flex items-center gap-32 opacity-[0.04]">
              <span className="font-heading font-black text-9xl tracking-widest text-slate-900 whitespace-nowrap">
                GLOBAL VALUE CHAINS &bull; THE SHIFT
              </span>
              <span className="font-heading font-black text-9xl tracking-widest text-slate-900 whitespace-nowrap">
                WHO CAPTURES THE SURPLUS VALUE?
              </span>
            </div>
          </div>
        ) : activeFloor.id === 5 ? (
          <div
            style={{ transform: `translateX(-${worldShift * 0.18}px)` }}
            className="absolute inset-0 pointer-events-none will-change-transform z-0 select-none"
          >
            <div className="absolute top-10 left-16 w-[4300px] flex items-center gap-32 opacity-[0.04]">
              <span className="font-heading font-black text-9xl tracking-widest text-slate-900 whitespace-nowrap">
                VIETNAM GVC POSITION &bull; DUAL ECONOMY
              </span>
              <span className="font-heading font-black text-9xl tracking-widest text-slate-900 whitespace-nowrap">
                DECISION 1018 &bull; VALUE RETENTION
              </span>
            </div>
          </div>
        ) : activeFloor.id === 6 ? (
          <div
            style={{ transform: `translateX(-${worldShift * 0.18}px)` }}
            className="absolute inset-0 pointer-events-none will-change-transform z-0 select-none"
          >
            <div className="absolute top-10 left-16 w-[5200px] flex items-center gap-32 opacity-[0.04]">
              <span className="font-heading font-black text-9xl tracking-widest text-slate-900 whitespace-nowrap">
                VIETNAM 2040 STRATEGIC SIMULATION &bull; SMILE CURVE
              </span>
              <span className="font-heading font-black text-9xl tracking-widest text-slate-900 whitespace-nowrap">
                SURPLUS VALUE m &bull; ORGANIC COMPOSITION c/v
              </span>
            </div>
          </div>
        ) : null}

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
          style={{
            width: `${worldTrackWidth}px`,
            transform: `translateX(-${worldShift}px)`,
          }}
          className="absolute left-0 top-0 h-full transition-transform duration-75 ease-out will-change-transform"
        >
          {/* NỘI DUNG TẦNG 1: TRIỂN LÃM MỞ TREO TƯỜNG (OPEN EXHIBITION) */}
          {activeFloor.id === 1 ? (
            <>
              <Floor1OpenExhibition charX={charX} />

              {/* Door Portal at gateX */}
              <div style={{ left: `${activeFloor.gateX}px` }} className="absolute bottom-[90px] z-20">
                <DoorPortal
                  canEnter={canEnterDoor}
                  onEnter={() => {
                    const nextIdx = (currentFloorIdx + 1) % FLOORS_DATA.length;
                    handleFloorChange(nextIdx);
                  }}
                  nextFloorLabel={activeFloor.doorTargetName}
                />
              </div>
            </>
          ) : activeFloor.id === 2 ? (
            /* NỘI DUNG TẦNG 2: BÀN MỔ XẺ PHẦN CỨNG & PHÂN TẦNG ĐỘ CAO GIÁ TRỊ */
            <>
              <Floor2HardwareTeardown charX={charX} />

              {/* Door Portal at gateX */}
              <div style={{ left: `${activeFloor.gateX}px` }} className="absolute bottom-[90px] z-20">
                <DoorPortal
                  canEnter={canEnterDoor}
                  onEnter={() => {
                    const nextIdx = (currentFloorIdx + 1) % FLOORS_DATA.length;
                    handleFloorChange(nextIdx);
                  }}
                  nextFloorLabel={activeFloor.doorTargetName}
                />
              </div>
            </>
          ) : activeFloor.id === 3 ? (
            /* NỘI DUNG TẦNG 3: GIẢI MÃ BẢN CHẤT GIÁ TRỊ & THẶNG DƯ (c + v + m) */
            <>
              <Floor3DecodeValue charX={charX} />

              {/* Door Portal at gateX */}
              <div style={{ left: `${activeFloor.gateX}px` }} className="absolute bottom-[90px] z-20">
                <DoorPortal
                  canEnter={canEnterDoor}
                  onEnter={() => {
                    const nextIdx = (currentFloorIdx + 1) % FLOORS_DATA.length;
                    handleFloorChange(nextIdx);
                  }}
                  nextFloorLabel={activeFloor.doorTargetName}
                />
              </div>
            </>
          ) : activeFloor.id === 4 ? (
            /* NỘI DUNG TẦNG 4: DÒNG CHẢY CHUỖI GIÁ TRỊ TOÀN CẦU (THE GLOBAL SHIFT) */
            <>
              <Floor4GlobalShift charX={charX} />

              {/* Door Portal at gateX */}
              <div style={{ left: `${activeFloor.gateX}px` }} className="absolute bottom-[90px] z-20">
                <DoorPortal
                  canEnter={canEnterDoor}
                  onEnter={() => {
                    const nextIdx = (currentFloorIdx + 1) % FLOORS_DATA.length;
                    handleFloorChange(nextIdx);
                  }}
                  nextFloorLabel={activeFloor.doorTargetName}
                />
              </div>
            </>
          ) : activeFloor.id === 5 ? (
            /* NỘI DUNG TẦNG 5: VỊ THẾ KINH TẾ VIỆT NAM */
            <>
              <Floor5VietnamPosition charX={charX} />

              {/* Door Portal at gateX */}
              <div style={{ left: `${activeFloor.gateX}px` }} className="absolute bottom-[90px] z-20">
                <DoorPortal
                  canEnter={canEnterDoor}
                  onEnter={() => {
                    const nextIdx = (currentFloorIdx + 1) % FLOORS_DATA.length;
                    handleFloorChange(nextIdx);
                  }}
                  nextFloorLabel={activeFloor.doorTargetName}
                />
              </div>
            </>
          ) : activeFloor.id === 6 ? (
            /* NỘI DUNG TẦNG 6: BÀN CỜ CHIẾN LƯỢC VIETNAM 2040 */
            <>
              <Floor6StrategicChallenge
                charX={charX}
                onDoorEnter={() => {
                  const nextIdx = (currentFloorIdx + 1) % FLOORS_DATA.length;
                  handleFloorChange(nextIdx);
                }}
              />

              {/* Door Portal at gateX */}
              <div style={{ left: `${activeFloor.gateX}px` }} className="absolute bottom-[90px] z-20">
                <DoorPortal
                  canEnter={canEnterDoor}
                  onEnter={() => {
                    const nextIdx = (currentFloorIdx + 1) % FLOORS_DATA.length;
                    handleFloorChange(nextIdx);
                  }}
                  nextFloorLabel={activeFloor.doorTargetName}
                />
              </div>
            </>
          ) : (
            /* CÁC TẦNG KHÁC (TẦNG 3-4) TIẾP TỤC DÙNG CARD MURAL HIỆN CÓ */
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

                    <p className="text-sm text-muted-gray leading-relaxed mb-4">{exhibit.desc}</p>

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
                  </div>
                );
              })}

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
          )}

          {/* Ground Line & Walkway */}
          <div className="absolute bottom-[90px] left-0 w-full h-[3px] bg-gradient-to-r from-growth-green via-warm-gold to-warning" />
          <div className="absolute bottom-0 left-0 w-full h-[90px] bg-gradient-to-b from-white to-[#F1F5F9] border-t border-border-subtle flex items-center px-10 gap-10 shadow-xs">
            {activeFloor.id === 1 ? (
              <>
                <span className="font-mono text-[11px] text-muted-gray border-l border-border-subtle pl-2 font-medium">
                  KM 0.0 &bull; CỔNG TẦNG 01
                </span>
                <span className="font-mono text-[11px] text-muted-gray border-l border-border-subtle pl-2 font-medium">
                  KM 0.8 &bull; DÂY CHUYỀN 200 TỶ USD & CẢNG BIỂN
                </span>
                <span className="font-mono text-[11px] text-muted-gray border-l border-border-subtle pl-2 font-medium">
                  KM 1.9 &bull; TIA X QUÉT & NGUYÊN LIỆU THÔ
                </span>
                <span className="font-mono text-[11px] text-muted-gray border-l border-border-subtle pl-2 font-medium">
                  KM 3.1 &bull; HỆ TRỤC OXY SMILING CURVE
                </span>
                <span className="font-mono text-[11px] text-warm-gold border-l border-warm-gold/50 pl-2 font-bold">
                  KM 3.8 &bull; CỬA LÊN TẦNG 02 (DỪNG TẠI NỬA CỬA)
                </span>
              </>
            ) : activeFloor.id === 2 ? (
              <>
                <span className="font-mono text-[11px] text-muted-gray border-l border-border-subtle pl-2 font-medium">
                  KM 0.0 &bull; CỔNG TẦNG 02
                </span>
                <span className="font-mono text-[11px] text-slate-500 border-l border-border-subtle pl-2 font-semibold">
                  KM 0.8 &bull; TRẠM 1: PIN THÔ (&lt;2% - XÁM)
                </span>
                <span className="font-mono text-[11px] text-growth-green border-l border-growth-green/50 pl-2 font-bold">
                  KM 1.5 &bull; TRẠM 2: CHIP 3NM (60% - XANH LÁ)
                </span>
                <span className="font-mono text-[11px] text-slate-500 border-l border-border-subtle pl-2 font-semibold">
                  KM 2.2 &bull; TRẠM 3: LẮP RÁP VN (4% - XÁM)
                </span>
                <span className="font-mono text-[11px] text-growth-green border-l border-growth-green/50 pl-2 font-bold">
                  KM 2.9 &bull; TRẠM 4: THƯƠNG HIỆU (33% - XANH LÁ)
                </span>
                <span className="font-mono text-[11px] text-warm-gold border-l border-warm-gold/50 pl-2 font-bold">
                  KM 3.5 &bull; CỬA LÊN TẦNG 03 &rarr;
                </span>
              </>
            ) : activeFloor.id === 3 ? (
              <>
                <span className="font-mono text-[11px] text-muted-gray border-l border-border-subtle pl-2 font-medium">
                  KM 0.0 &bull; CỔNG TẦNG 03
                </span>
                <span className="font-mono text-[11px] text-purple-700 border-l border-purple-400 pl-2 font-bold">
                  KM 0.8 &bull; HÀNG HÓA &amp; SỨC LAO ĐỘNG
                </span>
                <span className="font-mono text-[11px] text-sky-700 border-l border-sky-400 pl-2 font-bold">
                  KM 1.9 &bull; GIẢI PHẪU W = c + v + m
                </span>
                <span className="font-mono text-[11px] text-warm-gold border-l border-warm-gold/50 pl-2 font-bold">
                  KM 3.0 &bull; THE WORKING DAY SIMULATOR
                </span>
                <span className="font-mono text-[11px] text-growth-green border-l border-growth-green/50 pl-2 font-bold">
                  KM 4.0 &bull; LỐI THOÁT VIỆT NAM
                </span>
                <span className="font-mono text-[11px] text-sky-800 border-l border-sky-500 pl-2 font-black">
                  KM 4.3 &bull; CỬA LÊN TẦNG 04 &rarr;
                </span>
              </>
            ) : activeFloor.id === 4 ? (
              <>
                <span className="font-mono text-[11px] text-muted-gray border-l border-border-subtle pl-2 font-medium">
                  KM 0.0 &bull; CỔNG TẦNG 04
                </span>
                <span className="font-mono text-[11px] text-sky-700 border-l border-sky-400 pl-2 font-bold">
                  KM 1.0 &bull; BẢN ĐỒ GVC 4 LAYER &amp; ASML / R&amp;D
                </span>
                <span className="font-mono text-[11px] text-warm-gold border-l border-warm-gold/50 pl-2 font-bold">
                  KM 2.8 &bull; DÒNG TIỀN SANKEY $1,000 &amp; ĐẠI CÔNG XƯỞNG
                </span>
                <span className="font-mono text-[11px] text-growth-green border-l border-growth-green/50 pl-2 font-bold">
                  KM 4.3 &bull; ĐẤU TRƯỜNG QUYỀN LỰC GVC &amp; CHINA+1
                </span>
                <span className="font-mono text-[11px] text-amber-700 border-l border-amber-500 pl-2 font-black">
                  KM 5.5 &bull; CỬA LÊN TẦNG 05 (VỊ THẾ VIỆT NAM) &rarr;
                </span>
              </>
            ) : activeFloor.id === 5 ? (
              <>
                <span className="font-mono text-[11px] text-muted-gray border-l border-border-subtle pl-2 font-medium">
                  KM 0.0 &bull; CỔNG TẦNG 05
                </span>
                <span className="font-mono text-[11px] text-amber-700 border-l border-amber-400 pl-2 font-bold">
                  KM 0.8 &bull; NGHỊCH LÝ KINH TẾ KÉP ($405.5B &amp; 71.7% FDI)
                </span>
                <span className="font-mono text-[11px] text-red-600 border-l border-red-400 pl-2 font-bold">
                  KM 1.8 &bull; ĐIỂM NGHẼN NỘI ĐỊA HÓA (DVA 20-30%)
                </span>
                <span className="font-mono text-[11px] text-growth-green border-l border-growth-green/50 pl-2 font-bold">
                  KM 3.0 &bull; CHIẾN LƯỢC BÁN DẪN 1018 (50.000 KỸ SƯ)
                </span>
                <span className="font-mono text-[11px] text-warm-gold border-l border-warm-gold/50 pl-2 font-black">
                  KM 3.9 &bull; CỬA LÊN TẦNG 06 (BÀN CỜ ĐIỀU HÀNH) &rarr;
                </span>
              </>
            ) : activeFloor.id === 6 ? (
              <>
                <span className="font-mono text-[11px] text-muted-gray border-l border-border-subtle pl-2 font-medium">
                  KM 0.0 &bull; BÀN CỜ ĐIỀU HÀNH 2040
                </span>
                <span className="font-mono text-[11px] text-amber-700 border-l border-amber-400 pl-2 font-bold">
                  KM 0.9 &bull; TRẠM 01: DÒNG THẶNG DƯ (c + v + m)
                </span>
                <span className="font-mono text-[11px] text-sky-700 border-l border-sky-400 pl-2 font-bold">
                  KM 2.1 &bull; TRẠM 02: HÀNG HÓA SỨC LAO ĐỘNG (c/v)
                </span>
                <span className="font-mono text-[11px] text-growth-green border-l border-growth-green/50 pl-2 font-bold">
                  KM 3.4 &bull; TRẠM 03: ĐƯỜNG CONG NỤ CƯỜI (SMILE CURVE)
                </span>
                <span className="font-mono text-[11px] text-warm-gold border-l border-warm-gold/50 pl-2 font-black">
                  KM 4.6 &bull; TRẠM 04: HỒ SƠ PHÁN QUYẾT CHIẾN LƯỢC &rarr;
                </span>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Dock (Clean Light Mode) */}
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
              className="h-full bg-gradient-to-r from-growth-green via-warm-gold to-warning transition-all duration-100"
            />
          </div>
        </div>

        {/* Coordinates */}
        <div className="font-mono text-xs text-muted-gray">
          TỌA ĐỘ: <span className="text-off-white font-bold">X: {Math.round(charX)}m</span>
        </div>
      </div>

      {/* Elevator Transition Veil */}
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
