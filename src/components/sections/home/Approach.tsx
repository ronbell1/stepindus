import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { methodologyPhases } from "@/lib/data/company";

export function Approach() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-orange-500/10 blur-3xl"
      />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow tone="orange">How we work</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-[1.15] balance sm:text-[2.5rem]">
                A modular model, designed for speed and control.
              </h2>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-white/65 pretty">
                GCC success is an execution problem, not a strategy problem.
                Each phase carries a fixed scope and milestone-linked
                commercials — you can exit cleanly after any one of them.
              </p>
              <Link
                href="/approach"
                className="mt-8 inline-flex items-center gap-2 text-[0.95rem] font-medium text-white transition-colors hover:text-orange-400"
              >
                The full methodology
                <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <RevealGroup className="relative">
              <div
                aria-hidden
                className="absolute left-[1.15rem] top-2 bottom-2 hidden w-px bg-white/15 sm:block"
              />
              <div className="space-y-2">
                {methodologyPhases.map((phase) => (
                  <RevealItem key={phase.number}>
                    <div className="relative flex gap-6 rounded-2xl p-5 transition-colors hover:bg-white/[0.04] sm:p-6">
                      <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-navy-950 font-display text-sm text-orange-400">
                        {phase.number}
                      </span>
                      <div className="flex-1 pb-2">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h3 className="font-display text-xl text-white sm:text-2xl">
                            {phase.objective}
                          </h3>
                          <span className="text-[0.78rem] font-medium tracking-wide text-orange-400/90 uppercase">
                            {phase.window}
                          </span>
                        </div>
                        <p className="mt-2.5 max-w-xl text-[0.95rem] leading-relaxed text-white/60">
                          {phase.description}
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {phase.outcomes.map((o) => (
                            <li
                              key={o}
                              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.78rem] text-white/65"
                            >
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </div>
            </RevealGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
