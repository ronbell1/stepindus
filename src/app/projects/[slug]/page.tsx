import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { projects, getProject } from "@/lib/data/projects";
import { images } from "@/lib/images";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const asset = images[project.heroImage];

  return (
    <>
      <PageHero
        eyebrow={`${project.industry} · ${project.scheme}`}
        breadcrumb={`Projects / ${project.client}`}
        title={project.title}
        description={project.summary}
      />

      <section className="bg-white pt-0">
        <Container>
          <Reveal className="relative -mt-10 aspect-[21/9] overflow-hidden rounded-2xl sm:-mt-14">
            <Image
              src={`https://images.unsplash.com/photo-${asset.id}?auto=format&fit=crop&q=85`}
              alt={asset.alt}
              fill
              sizes="(min-width: 1024px) 1120px, 100vw"
              className="object-cover"
              priority
            />
          </Reveal>
        </Container>
      </section>

      {/* At a glance */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="text-[0.8rem] font-semibold tracking-wide text-sand-500 uppercase">Client</p>
                <p className="mt-2 font-display text-2xl text-navy-950">{project.client}</p>
                {project.clientConcealed && (
                  <p className="mt-2 flex items-center gap-1.5 text-[0.82rem] text-sand-500">
                    <ShieldCheck size={14} /> Name withheld under NDA
                  </p>
                )}
                {project.clientUrl && (
                  <a
                    href={project.clientUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-navy-700 hover:text-orange-600"
                  >
                    Visit site <ArrowUpRight size={13} />
                  </a>
                )}

                <dl className="mt-8 space-y-5 border-t border-sand-200 pt-6">
                  <div>
                    <dt className="text-[0.78rem] font-medium tracking-wide text-sand-500 uppercase">Industry</dt>
                    <dd className="mt-1 text-[0.95rem] text-navy-950">{project.industry}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.78rem] font-medium tracking-wide text-sand-500 uppercase">Location</dt>
                    <dd className="mt-1 text-[0.95rem] text-navy-950">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.78rem] font-medium tracking-wide text-sand-500 uppercase">Entity in India</dt>
                    <dd className="mt-1 text-[0.95rem] leading-relaxed text-navy-950">{project.entity}</dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.06}>
                <Eyebrow>Client requirement</Eyebrow>
                <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {project.requirement.map((r) => (
                    <li key={r} className="flex gap-2.5 text-[0.95rem] text-navy-950">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                      {r}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-10">
                  <Eyebrow>Our engagement</Eyebrow>
                  <ul className="mt-5 space-y-3">
                    {project.engagement.map((e) => (
                      <li key={e} className="text-[0.98rem] leading-relaxed text-sand-700">
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Execution */}
      <section className="bg-sand-50 py-24 sm:py-28">
        <Container>
          <Reveal>
            <Eyebrow>Execution</Eyebrow>
            <h2 className="mt-5 max-w-xl font-display text-3xl leading-[1.15] text-navy-950 balance sm:text-[2.3rem]">
              What we actually delivered
            </h2>
          </Reveal>
          <RevealGroup className="mt-12 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2">
            {project.execution.map((e) => (
              <RevealItem key={e.title}>
                <div className="border-t border-sand-300 pt-5">
                  <h3 className="font-display text-lg text-navy-950">{e.title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-sand-600">{e.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Outcome */}
      <section className="bg-navy-950 py-24 text-white sm:py-28">
        <Container>
          <Reveal>
            <Eyebrow tone="orange">Outcome</Eyebrow>
            <p className="mt-5 max-w-2xl font-display text-2xl leading-relaxed balance sm:text-3xl">
              {project.outcomeNote}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-x-14 gap-y-8 border-t border-white/10 pt-10">
            {project.outcome.map((o) => (
              <div key={o.label}>
                <p className="font-display text-4xl text-orange-400">{o.value}</p>
                <p className="mt-1.5 text-[0.88rem] text-white/55">{o.label}</p>
              </div>
            ))}
          </Reveal>

          {project.testimonial && (
            <Reveal delay={0.16} className="mt-16 max-w-2xl border-t border-white/10 pt-10">
              <blockquote className="font-display text-xl leading-relaxed text-white/90 pretty">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-5 text-[0.9rem] text-white/60">
                — {project.testimonial.name}, {project.testimonial.role}
              </p>
            </Reveal>
          )}
        </Container>
      </section>

      <ClosingCta
        eyebrow="Considering something similar?"
        heading="Every build starts with the same question: what does right-first-time look like for you?"
      />
    </>
  );
}
