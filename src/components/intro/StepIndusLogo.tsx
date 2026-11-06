"use client";

import { motion } from "framer-motion";
import {
  LOGO_VIEWBOX,
  CHAKRA_PATH,
  WORDMARK_PATH,
  TAGLINE_PATH,
} from "./logoPaths";

export function StepIndusLogo({
  isAnimating = true,
}: {
  isAnimating?: boolean;
}) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Soft ambient orange backlight that breathes as the logo forms */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.75 }}
        animate={
          isAnimating
            ? {
                opacity: [0, 0.28, 0.18],
                scale: [0.75, 1.2, 1.0],
              }
            : { opacity: 0.2, scale: 1.0 }
        }
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="pointer-events-none absolute h-64 w-80 rounded-full bg-orange-500/30 blur-[90px]"
      />

      {/* Primary SVG Canvas */}
      <div className="relative overflow-hidden p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={LOGO_VIEWBOX}
          className="h-auto w-full max-w-[480px] sm:max-w-[560px] drop-shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
          }}
        >
          {/* Layer 1: Chakra Wheel Emblem */}
          <motion.g
            id="chakra-emblem"
            style={{
              transformOrigin: "640px 590px",
            }}
            initial={
              isAnimating
                ? { opacity: 0, scale: 0.88, rotate: -16 }
                : { opacity: 1, scale: 1, rotate: 0 }
            }
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.95,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <path fill="#E95229" fillRule="nonzero" d={CHAKRA_PATH} />
          </motion.g>

          {/* Layer 2: StepIndus Wordmark */}
          <motion.g
            id="stepindus-wordmark"
            initial={
              isAnimating
                ? { opacity: 0, x: -24 }
                : { opacity: 1, x: 0 }
            }
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.38,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <path fill="#E95229" fillRule="nonzero" d={WORDMARK_PATH} />
          </motion.g>

          {/* Layer 3: Tagline */}
          <motion.g
            id="stepindus-tagline"
            initial={
              isAnimating
                ? { opacity: 0, y: 12 }
                : { opacity: 0.9, y: 0 }
            }
            animate={{ opacity: 0.9, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.62,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <path fill="#FFFFFF" fillRule="nonzero" d={TAGLINE_PATH} />
          </motion.g>
        </svg>

        {/* Refined Specular Light Sweep (The Brand Moment) */}
        {isAnimating && (
          <motion.div
            aria-hidden
            initial={{ x: "-120%", opacity: 0 }}
            animate={{
              x: "220%",
              opacity: [0, 0.85, 0.85, 0],
            }}
            transition={{
              duration: 0.8,
              delay: 1.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute inset-0 -skew-x-[22deg] bg-gradient-to-r from-transparent via-white/45 to-transparent mix-blend-overlay"
          />
        )}
      </div>
    </div>
  );
}

