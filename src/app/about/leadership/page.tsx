import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { leadership } from "@/lib/data/company";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Leadership",
  description: `${leadership.name} — ${leadership.role}. Three decades across India's technology industry, government, GCCs and public policy.`,
};

const relatedProject = projects.find((p) => p.slug === "captive-offshore-center")!;

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        breadcrumb="About / Leadership"
        title={leadership.name}
        description={leadership.role}
        size="compact"
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-navy-950">
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-display text-[7rem] leading-none text-orange-500">
                      SS
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between rounded-xl border border-sand-200 px-5 py-4">
                  <div>
                    <p className="text-[0.95rem] font-medium text-navy-950">{leadership.name}</p>
                    <p className="text-[0.82rem] text-sand-500">{leadership.role}</p>
                  </div>
                  <a
                    href={leadership.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Sudhir Singh on LinkedIn"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand-100 text-[0.8rem] font-bold text-navy-700 transition-colors hover:bg-navy-950 hover:text-white"
                  >
                    in
                  </a>
                </div>

                <div className="mt-8">
                  <p className="text-[0.8rem] font-semibold tracking-wide text-orange-600 uppercase">
                    Focus areas
                  </p>
                  <ul className="mt-4 space-y-4">
                    {leadership.focusAreas.map((f) => (
                      <li key={f.label} className="border-t border-sand-200 pt-4 first:border-t-0 first:pt-0">
                        <p className="text-[0.95rem] font-medium text-navy-950">{f.label}</p>
                        <p className="mt-1 text-[0.88rem] text-sand-500">{f.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8 lg:pl-4">
              <Reveal className="space-y-6 text-[1.05rem] leading-relaxed text-sand-700 pretty">
                {leadership.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-12 rounded-2xl border border-sand-200 bg-sand-50 p-8">
                  <p className="text-[0.8rem] font-semibold tracking-wide text-sand-500 uppercase">
                    Proof point
                  </p>
                  <p className="mt-3 font-display text-xl leading-snug text-navy-950">
                    Retained as a board director for eight years following a
                    captive center build that grew from 100 to 800 people.
                  </p>
                  <Link
                    href={`/projects/${relatedProject.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-[0.9rem] font-medium text-navy-700 hover:text-orange-600"
                  >
                    Read the project
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <ClosingCta
        eyebrow="Work with Sudhir's team"
        heading="Bring your India GCC question to someone who has sat on the other side of the table."
        primaryLabel="Start a conversation"
      />
    </>
  );
}
