"use client";

import * as React from "react";
import { RoundId } from "@/types/game";

const STORAGE_KEY_POLL = "the_value_shift_poll";
const STORAGE_KEY_GAME = "the_value_shift_game";
const STORAGE_KEY_LAST_SECTION = "the_value_shift_section";

interface PersistedGameState {
  currentRound: RoundId;
  selectedChoices: Record<RoundId, string | null>;
  isCompleted: boolean;
}

function safeGetItem(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch (err) {
    console.warn("LocalStorage unavailable:", err);
    return null;
  }
}

function safeSetItem(key: string, value: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, value);
  } catch (err) {
    console.warn("LocalStorage write failed:", err);
  }
}

function safeRemoveItem(key: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    console.warn("LocalStorage remove failed:", err);
  }
}

/**
 * Hook to persist and restore game decisions and round progress
 */
export function useGamePersistence(
  defaultChoices: Record<RoundId, string | null> = { 1: "DOMESTIC_LINKAGE", 2: null, 3: null }
) {
  const [currentRound, setCurrentRound] = React.useState<RoundId>(1);
  const [selectedChoices, setSelectedChoices] =
    React.useState<Record<RoundId, string | null>>(defaultChoices);
  const [isCompleted, setIsCompleted] = React.useState<boolean>(false);
  const [isHydrated, setIsHydrated] = React.useState<boolean>(false);

  // Restore from LocalStorage on mount
  React.useEffect(() => {
    const raw = safeGetItem(STORAGE_KEY_GAME);
    if (raw) {
      try {
        const parsed: PersistedGameState = JSON.parse(raw);
        if (parsed.currentRound && parsed.selectedChoices) {
          setCurrentRound(parsed.currentRound);
          setSelectedChoices(parsed.selectedChoices);
          setIsCompleted(!!parsed.isCompleted);
        }
      } catch (e) {
        console.warn("Corrupted game storage data. Resetting to defaults.");
      }
    }
    setIsHydrated(true);
  }, []);

  // Sync to LocalStorage on changes
  React.useEffect(() => {
    if (!isHydrated) return;
    const payload: PersistedGameState = {
      currentRound,
      selectedChoices,
      isCompleted,
    };
    safeSetItem(STORAGE_KEY_GAME, JSON.stringify(payload));
  }, [currentRound, selectedChoices, isCompleted, isHydrated]);

  const resetGame = () => {
    safeRemoveItem(STORAGE_KEY_GAME);
    setCurrentRound(1);
    setSelectedChoices({ 1: null, 2: null, 3: null });
    setIsCompleted(false);
  };

  return {
    currentRound,
    setCurrentRound,
    selectedChoices,
    setSelectedChoices,
    isCompleted,
    setIsCompleted,
    resetGame,
    isHydrated,
  };
}

/**
 * Hook to persist the initial poll answer in Section 01
 */
export function usePollPersistence() {
  const [selectedPoll, setSelectedPoll] = React.useState<string | null>(null);
  const [hasVoted, setHasVoted] = React.useState<boolean>(false);
  const [isHydrated, setIsHydrated] = React.useState<boolean>(false);

  React.useEffect(() => {
    const raw = safeGetItem(STORAGE_KEY_POLL);
    if (raw) {
      setSelectedPoll(raw);
      setHasVoted(true);
    }
    setIsHydrated(true);
  }, []);

  const vote = (id: string) => {
    setSelectedPoll(id);
    setHasVoted(true);
    safeSetItem(STORAGE_KEY_POLL, id);
  };

  return {
    selectedPoll,
    hasVoted,
    vote,
    isHydrated,
  };
}

