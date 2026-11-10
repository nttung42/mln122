"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CharacterBotProps {
  screenX: number;
  isWalking: boolean;
  isJumping: boolean;
  isLanding: boolean;
  facingLeft: boolean;
  thoughtText: string;
  thoughtVisible: boolean;
}

export function CharacterBot({
  screenX,
  isWalking,
  isJumping,
  isLanding,
  facingLeft,
  thoughtText,
  thoughtVisible,
}: CharacterBotProps) {
  return (
    <div
      style={{
        left: `${screenX}px`,
        bottom: "90px",
      }}
      className={cn(
        "absolute w-12 h-[72px] z-50 pointer-events-none flex flex-col items-center",
        "transition-[left] duration-100 ease-linear",
        "transition-transform duration-250 ease-[cubic-bezier(0.2,0.85,0.3,1)]",
        facingLeft && "scale-x-[-1]",
        isJumping && "-translate-y-[85px]",
        isLanding && "translate-y-[2px]"
      )}
    >
      {/* Floating Thought Bubble in Pure Light Mode */}
      <div
        className={cn(
          "absolute -top-14 bg-white/95 border border-electric-blue text-off-white text-xs px-3.5 py-1.5 rounded-2xl whitespace-nowrap shadow-md pointer-events-none font-medium",
          "transition-all duration-300",
          thoughtVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          facingLeft && "scale-x-[-1]"
        )}
      >
        <span>{thoughtText}</span>
        {/* Bubble beak */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-electric-blue rotate-45" />
      </div>

      {/* Vector Minimalist Economic Explorer Bot in Pure Light Mode */}
      <svg
        viewBox="0 0 48 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "w-full h-full drop-shadow-[0_4px_12px_rgba(15,23,42,0.18)] transition-transform duration-150",
          isJumping && "scale-y-[1.08] scale-x-[0.92]",
          isLanding && "scale-y-[0.88] scale-x-[1.12]"
        )}
      >
        {/* Floating Data Pad */}
        <rect
          x="28"
          y="28"
          width="14"
          height="18"
          rx="2"
          fill="#FFFFFF"
          stroke="#0284C7"
          strokeWidth="1.5"
        />
        <line x1="31" y1="33" x2="39" y2="33" stroke="#16A34A" strokeWidth="1.5" />
        <line x1="31" y1="38" x2="36" y2="38" stroke="#D97706" strokeWidth="1.5" />

        {/* Head / Core Visor */}
        <circle cx="24" cy="14" r="9" fill="#D97706" />
        <rect x="22" y="12" width="10" height="3" rx="1.5" fill="#0F172A" />
        <rect x="24" y="13" width="4" height="1.5" rx="0.75" fill="#0284C7" />

        {/* Torso / Tactical Coat */}
        <path d="M15 25 C15 23, 33 23, 33 25 L36 44 L12 44 Z" fill="#1E293B" />
        <path d="M21 24 L24 34 L27 24" stroke="#D97706" strokeWidth="1.5" />

        {/* Legs with Walk Animation */}
        <g
          className={cn(
            isWalking && !isJumping && "animate-[legWalkLeft_0.3s_alternate_infinite_ease-in-out]",
            isJumping && "rotate-[-35deg] scale-y-[0.75]"
          )}
          style={{ transformOrigin: "18px 44px" }}
        >
          <line x1="18" y1="44" x2="16" y2="68" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
          <line x1="16" y1="68" x2="22" y2="68" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
        </g>
        <g
          className={cn(
            isWalking && !isJumping && "animate-[legWalkRight_0.3s_alternate_infinite_ease-in-out]",
            isJumping && "rotate-[35deg] scale-y-[0.75]"
          )}
          style={{ transformOrigin: "28px 44px" }}
        >
          <line x1="28" y1="44" x2="30" y2="68" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
          <line x1="30" y1="68" x2="36" y2="68" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
