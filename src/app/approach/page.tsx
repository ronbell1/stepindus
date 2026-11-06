import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { methodologyPhases, deliveryModules, engagementPrinciples } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "The StepIndus methodology: four phases from design to operate-or-exit, delivered through six accountable execution modules.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our approach"
        title="Launch fast. Scale safely. Exit cleanly."
        description="GCC success is an execution problem, not a strategy problem. StepIndus applies a structured, milestone-driven methodology that takes global companies from board approval to a live, operating India GCC — with speed, compliance certainty and cost control."
        image="meetingBrickWall"
      />

      {/* Engagement principles */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {engagementPrinciples.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <p className="font-display text-lg leading-snug text-navy-950">{p.title}</p>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-sand-600">{p.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 4-phase macro methodology */}
      <section className="bg-sand-50 py-24 sm:py-32">
        <Container>
          <Reveal>
            <Eyebrow>The macro view</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.15] text-navy-950 balance sm:text-[2.5rem]">
              Four phases, from board approval to operate-or-exit.
            </h2>
          </Reveal>

          <RevealGroup className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-4">
            {methodologyPhases.map((phase) => (
              <RevealItem key={phase.number}>
                <div className="flex h-full flex-col rounded-2xl border border-sand-200 bg-white p-7">
                  <span className="font-display text-sm text-orange-500">{phase.number}</span>
                  <h3 className="mt-3 font-display text-xl leading-snug text-navy-950">
                    {phase.objective}
                  </h3>
                  <p className="mt-1.5 text-[0.78rem] font-medium tracking-wide text-sand-500 uppercase">
                    {phase.window}
                  </p>
                  <p className="mt-4 flex-1 text-[0.92rem] leading-relaxed text-sand-600">
                    {phase.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-sand-200 pt-4">
                    {phase.outcomes.map((o) => (
                      <li key={o} className="flex gap-2 text-[0.85rem] text-sand-600">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* 6 delivery modules */}
      <section className="bg-navy-950 py-24 text-white sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow tone="orange">The execution layer</Eyebrow>
                <h2 className="mt-5 font-display text-3xl leading-[1.15] balance sm:text-[2.3rem]">
                  Underneath every phase sit six accountable modules.
                </h2>
                <p className="mt-6 text-[1.02rem] leading-relaxed text-white/65 pretty">
                  Each module carries its own defined scope, so delivery can
                  run in parallel without losing a single point of
                  accountability for the build as a whole.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <RevealGroup className="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2">
                {deliveryModules.map((m) => (
                  <RevealItem key={m.number}>
                    <div className="flex gap-5 border-b border-white/10 pb-7">
                      <span className="font-display text-sm text-orange-400">{m.number}</span>
                      <div>
                        <h3 className="font-display text-lg text-white">{m.title}</h3>
                        <p className="mt-2 text-[0.9rem] leading-relaxed text-white/60">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
