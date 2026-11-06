import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export function ClosingCta({
  eyebrow = "Ready to go live?",
  heading = "If your board has approved an India GCC, the next question is execution.",
  description = "We can help you plan a compliant, cost-controlled GCC launch in 90–120 days — with one team accountable from approval to go-live.",
  primaryLabel = "Book a 90-day working session",
}: {
  eyebrow?: string;
  heading?: string;
  description?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-orange-500/[0.12] blur-3xl"
      />
      <Container className="relative text-center">
        <Reveal>
          <p className="text-[0.8rem] font-semibold tracking-[0.1em] text-orange-400 uppercase">
            {eyebrow}
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl leading-[1.18] balance sm:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/65 pretty">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-[0.95rem] font-medium text-white transition-colors hover:bg-orange-400"
            >
              {primaryLabel}
              <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={siteConfig.contact.phonePrimaryHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-[0.95rem] font-medium text-white/90 transition-colors hover:border-white/60 hover:text-white"
            >
              <Phone size={16} />
              {siteConfig.contact.phonePrimary}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
