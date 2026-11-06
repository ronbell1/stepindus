"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntro } from "./IntroContext";
import { StepIndusLogo } from "./StepIndusLogo";

export function IntroAnimation() {
  const { isIntroActive, skipIntro } = useIntro();
  const [isExiting, setIsExiting] = useState(false);

  // Keyboard shortcut: Press Escape to immediately skip
  useEffect(() => {
    if (!isIntroActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        skipIntro();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isIntroActive, skipIntro]);

  // Master sequence timer
  useEffect(() => {
    if (!isIntroActive) return;

    // Phase 1: Logo reveal and brand moment (0s to 1.75s)
    // Phase 2: Start curtain transition at 1.75s
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1750);

    // Phase 3: Complete transition and release overlay at 2.5s
    const completeTimer = setTimeout(() => {
      skipIntro();
    }, 2500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [isIntroActive, skipIntro]);

  if (!isIntroActive) {
    return null;
  }

  return (
    <AnimatePresence>
      {isIntroActive && (
        <motion.div
          key="stepindus-intro-curtain"
          role="dialog"
          aria-label="Welcome to StepIndus"
          aria-modal="true"
          onClick={skipIntro}
          initial={{ y: "0%" }}
          animate={isExiting ? { y: "-100%" } : { y: "0%" }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-navy-950 text-white select-none cursor-pointer"
          style={{ willChange: "transform" }}
        >
          {/* Subtle architectural background ambiance */}
          <div className="pointer-events-none absolute inset-0">
            {/* Top-right deep navy ambient light */}
            <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-navy-700/20 blur-[130px]" />
            {/* Bottom-left soft vignette */}
            <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-navy-900/40 blur-[140px]" />
            {/* Subtle radial vignette focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,12,28,0.4)_70%,rgba(8,12,28,0.85)_100%)]" />
          </div>

          {/* Logo centerpiece with smooth scale-out on exit */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={
              isExiting
                ? {
                    opacity: 0,
                    scale: 1.05,
                    y: -15,
                  }
                : { opacity: 1, scale: 1, y: 0 }
            }
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 px-6 sm:px-12"
          >
            <StepIndusLogo isAnimating={!isExiting} />
          </motion.div>

          {/* Bottom brand descriptor & skip hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              isExiting
                ? { opacity: 0 }
                : { opacity: 1 }
            }
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-between px-7 sm:px-12 text-[0.7rem] uppercase tracking-[0.2em] text-white/40"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
              India GCC Execution
            </span>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                skipIntro();
              }}
              className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] tracking-wider text-white/50 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <kbd className="font-mono text-[0.62rem] text-white/40 group-hover:text-white/70">ESC</kbd>
              <span>SKIP</span>
            </button>
          </motion.div>

          {/* Bottom edge neon reveal line — glides along the curtain bottom */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-90 shadow-[0_0_16px_rgba(233,82,41,0.9)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
