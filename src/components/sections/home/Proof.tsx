import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Picture } from "@/components/ui/Picture";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/data/projects";

const featured = projects.filter((p) =>
  ["ua-brands", "alamy-images", "captive-offshore-center"].includes(p.slug)
);

export function Proof() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Eyebrow>Selected projects</Eyebrow>
            <h2 className="mt-5 max-w-xl font-display text-3xl leading-[1.15] text-navy-950 balance sm:text-[2.5rem]">
              Real builds. Named clients where we can, honest detail where we can&apos;t.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-navy-700 transition-colors hover:text-orange-600"
            >
              All projects
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={0.08 * i}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand-200">
                  <Picture
                    image={project.heroImage}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[0.78rem] font-medium tracking-wide text-orange-300 uppercase">
                      {project.industry}
                    </p>
                    <h3 className="mt-2 font-display text-xl leading-snug text-white">
                      {project.client}
                    </h3>
                    <p className="mt-3 flex items-center gap-1.5 text-[0.85rem] font-medium text-white/80">
                      {project.outcome[0].value} to go-live
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
