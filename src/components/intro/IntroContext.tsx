"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

interface IntroContextType {
  /** Whether the intro overlay is currently active and visible */
  isIntroActive: boolean;
  /** Whether the intro has already played (or was skipped / previously seen) */
  hasIntroPlayed: boolean;
  /** Skip the intro immediately (e.g. on ESC or click) */
  skipIntro: () => void;
  /** Replay the intro on demand (e.g. for testing or re-triggering) */
  replayIntro: () => void;
}

const IntroContext = createContext<IntroContextType>({
  isIntroActive: false,
  hasIntroPlayed: true,
  skipIntro: () => {},
  replayIntro: () => {},
});

const SESSION_STORAGE_KEY = "stepindus_intro_seen";

let listeners: Array<() => void> = [];
function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function getSessionSnapshot(): boolean {
  try {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get("intro") === "1" || searchParams.get("replay") === "1") {
      return false; // Force replay via query param
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return true; // Skip if reduced motion is requested
    }
    return sessionStorage.getItem(SESSION_STORAGE_KEY) === "1";
  } catch {
    return true;
  }
}

function getServerSnapshot(): boolean {
  return true; // Server rendering defaults to seen to prevent content flash for bots/SSR
}

export function IntroProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hasSeenInStorage = useSyncExternalStore(
    subscribe,
    getSessionSnapshot,
    getServerSnapshot
  );

  const [overrideActive, setOverrideActive] = useState<boolean | null>(null);

  const isHomePage = pathname === "/";
  const shouldPlay = isHomePage && !hasSeenInStorage;
  const isIntroActive = overrideActive !== null ? overrideActive : shouldPlay;

  const skipIntro = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, "1");
    } catch {
      // Ignore storage restrictions
    }
    setOverrideActive(false);
    emitChange();
  }, []);

  const replayIntro = useCallback(() => {
    try {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    } catch {
      // Ignore
    }
    setOverrideActive(true);
    emitChange();
  }, []);

  // Lock body scroll while intro is actively displaying
  useEffect(() => {
    if (isIntroActive) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isIntroActive]);

  // Expose global developer helper window.__replayStepIndusIntro()
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as unknown as { __replayStepIndusIntro?: () => void }).__replayStepIndusIntro = replayIntro;
    }
  }, [replayIntro]);

  return (
    <IntroContext.Provider
      value={{
        isIntroActive,
        hasIntroPlayed: !isIntroActive,
        skipIntro,
        replayIntro,
      }}
    >
      {children}
    </IntroContext.Provider>
  );
}

export function useIntro() {
  return useContext(IntroContext);
}
