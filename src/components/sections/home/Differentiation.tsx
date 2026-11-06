import { Check, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const others = [
  "Hype-driven advisory, or a proprietary platform",
  "Complexity and cost that erode the business case",
  "Open-ended timelines that test board patience",
  "A metro-only playbook",
];

const stepindus = [
  "One accountable execution partner",
  "Fixed scope, milestone-linked commercials",
  "A published 90–120 day delivery window",
  "Real Tier-2 and Tier-3 city depth",
];

export function Differentiation() {
  return (
    <section className="bg-sand-100 py-24 sm:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Differentiation</Eyebrow>
          <blockquote className="mt-6 max-w-3xl font-display text-3xl leading-[1.2] text-navy-950 balance sm:text-5xl">
            &ldquo;GCC success is an execution problem — not a strategy
            problem.&rdquo;
          </blockquote>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-10 border-t border-sand-300 pt-14 sm:grid-cols-2">
          <Reveal delay={0.05}>
            <p className="text-[0.8rem] font-semibold tracking-[0.08em] text-sand-500 uppercase">
              What most providers offer
            </p>
            <ul className="mt-6 space-y-4">
              {others.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[1.02rem] leading-relaxed text-sand-500">
                  <Minus size={16} className="mt-1.5 shrink-0 text-sand-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-[0.8rem] font-semibold tracking-[0.08em] text-orange-600 uppercase">
              What StepIndus delivers
            </p>
            <ul className="mt-6 space-y-4">
              {stepindus.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[1.02rem] leading-relaxed text-navy-950">
                  <Check size={16} className="mt-1.5 shrink-0 text-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
