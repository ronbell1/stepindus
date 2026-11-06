"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0">
        <Image
          src={`https://images.unsplash.com/photo-${images.heroSkyscrapers.id}?auto=format&fit=crop&q=80`}
          alt={images.heroSkyscrapers.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.38]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-navy-950/20" />
      </div>

      <Container className="relative z-10 pb-20 pt-40 sm:pb-24 lg:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-2 text-[0.8rem] font-semibold tracking-[0.1em] text-orange-400 uppercase"
        >
          <span className="h-[3px] w-6 rounded-full bg-orange-500" />
          India GCC &amp; Global Delivery Execution
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl font-display text-[2.6rem] leading-[1.06] font-medium balance sm:text-6xl lg:text-7xl"
        >
          Launch your India GCC in 90 days.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 pretty sm:text-xl"
        >
          StepIndus takes single-point ownership of your India Global
          Capability Center — a fully-owned captive build, or a managed
          GCC-as-a-Service — for mid-market and first-time global entrants.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-[0.95rem] font-medium text-white transition-colors hover:bg-orange-400"
          >
            Plan your 90-day GCC
            <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/approach"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-[0.95rem] font-medium text-white/90 transition-colors hover:border-white/60 hover:text-white"
          >
            See how we work
          </Link>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-7 right-5 z-10 hidden items-center gap-2 text-[0.78rem] text-white/50 sm:right-8 lg:right-10 md:flex"
      >
        <ArrowDown size={14} />
        Captive setup, or GCC-as-a-Service
      </motion.div>
    </section>
  );
}
