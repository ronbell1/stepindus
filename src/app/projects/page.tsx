import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Container } from "@/components/ui/Container";
import { Picture } from "@/components/ui/Picture";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Real StepIndus builds — named clients where we can disclose them, honest detail where confidentiality applies. Four Global Capability Center projects across apparel, e-commerce, engineering and technology.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Real builds. Named clients where we can."
        description="Four Global Capability Center engagements — the requirement, the entity structure, how it was executed, and what shipped. Two clients are named with permission; two carry confidentiality obligations we respect in full."
        image="serverRoomWoman"
      />

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="divide-y divide-sand-200 border-y border-sand-200">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={0.04 * i}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group grid grid-cols-1 items-center gap-8 py-12 sm:gap-10 lg:grid-cols-12 lg:gap-12"
                >
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand-200 lg:col-span-5 ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Picture
                      image={project.heroImage}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="text-[0.78rem] font-medium tracking-wide text-orange-600 uppercase">
                      {project.industry} · {project.location}
                    </p>
                    <h2 className="mt-3 font-display text-2xl leading-snug text-navy-950 transition-colors group-hover:text-orange-600 sm:text-3xl">
                      {project.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-sand-600">
                      {project.summary}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                      {project.outcome.map((o) => (
                        <div key={o.label}>
                          <p className="font-display text-2xl text-navy-950">{o.value}</p>
                          <p className="text-[0.78rem] text-sand-500">{o.label}</p>
                        </div>
                      ))}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.9rem] font-medium text-navy-700 group-hover:text-orange-600">
                      Read the full project
                      <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
