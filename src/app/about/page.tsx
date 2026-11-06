import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Picture } from "@/components/ui/Picture";
import { fitFor, notFitFor, history, leadership } from "@/lib/data/company";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "About",
  description:
    "StepIndus is an execution-led partner for building Global Capability Centres in India — the story, the people, and who we're built for.",
};

const locations = [
  { tier: "Primary presence", cities: "Delhi-NCR, Pune, Bangalore" },
  { tier: "Deep Tier-2/3 experience", cities: "Trivandrum, Gandhinagar, Jaipur, Chandigarh" },
  { tier: "Also delivered in", cities: "Noida, Gurgaon, Hyderabad, Chennai, Mumbai" },
];

const testimonialProjects = projects.filter((p) => p.testimonial);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About StepIndus"
        title="An execution-led partner for building India GCCs."
        description="At StepIndus, we take end-to-end ownership of building Global Capability Centers in India — from approval to go-live. GCCs fail from fragmented execution, not from a lack of intent. We exist to close that gap."
        image="modernOfficeHallway"
      />

      {/* Why we exist */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow>Why we exist</Eyebrow>
                <h2 className="mt-5 font-display text-3xl leading-[1.15] text-navy-950 balance sm:text-[2.3rem]">
                  India has advisors, platforms and recruiters — but no single owner.
                </h2>
                <div className="mt-6 space-y-5 text-[1.02rem] leading-relaxed text-sand-600 pretty">
                  <p>
                    Large infrastructure companies and HR or recruitment
                    firms increasingly project themselves as GCC providers.
                    Execution gets diluted across heavy consulting layers and
                    multiple teams. StepIndus was built to close that gap.
                  </p>
                  <p>
                    Our leadership has been associated with India GCC and
                    offshore delivery since 1993 — through the Software
                    Technology Park scheme, the Special Economic Zones Act,
                    and the broader foreign trade policy shift that first
                    made India a global GCC destination. That ground-level
                    experience is what lets us price and de-risk an India
                    entry decision realistically, not theoretically.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:pl-8">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-sand-200 bg-sand-50 p-8">
                  <p className="text-[0.8rem] font-semibold tracking-wide text-orange-600 uppercase">
                    StepIndus is built for
                  </p>
                  <ul className="mt-4 space-y-3">
                    {fitFor.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.98rem] leading-relaxed text-navy-950">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 rounded-2xl border border-sand-200 p-8">
                  <p className="text-[0.8rem] font-semibold tracking-wide text-sand-500 uppercase">
                    We may not be the right partner for
                  </p>
                  <ul className="mt-4 space-y-3">
                    {notFitFor.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.98rem] leading-relaxed text-sand-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sand-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* History / brand */}
      <section className="bg-navy-950 py-24 text-white sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow tone="orange">Background &amp; history</Eyebrow>
                <h2 className="mt-5 font-display text-3xl leading-[1.15] balance sm:text-[2.3rem]">
                  Step + Indus. Consult. Connect. Catalyse.
                </h2>
                <p className="mt-6 text-[1.02rem] leading-relaxed text-white/65 pretty">
                  The name is a fusion of Step and Indus — India. The chakra
                  at the centre of our mark is the same wheel that sits on
                  the Indian flag: a symbol of continuous motion, representing
                  the global reach we help clients build from an Indian base.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1} className="space-y-6 text-[1.02rem] leading-relaxed text-white/70 pretty">
                {history.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                  <div>
                    <p className="font-display text-3xl text-orange-400">2003</p>
                    <p className="mt-1 text-[0.85rem] text-white/55">Excelict founded</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl text-orange-400">2005</p>
                    <p className="mt-1 text-[0.85rem] text-white/55">Reformed as Pvt Ltd</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl text-orange-400">2024</p>
                    <p className="mt-1 text-[0.85rem] text-white/55">StepIndus Consulting LLP</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Locations */}
      <section className="bg-sand-50 py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Where we work</Eyebrow>
                <h2 className="mt-5 font-display text-3xl leading-[1.15] text-navy-950 balance sm:text-[2.3rem]">
                  Location-independent, Tier-2 fluent.
                </h2>
                <p className="mt-6 text-[1.02rem] leading-relaxed text-sand-600 pretty">
                  We execute using a project-office methodology wherever
                  the business case takes us — including Tier 2 and Tier 3
                  cities that offer genuine value for money and original
                  talent at a more affordable cost than the metro core.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-sand-200 border-y border-sand-200">
                {locations.map((loc, i) => (
                  <Reveal key={loc.tier} delay={0.06 * i}>
                    <li className="flex flex-col gap-1.5 py-6 sm:flex-row sm:items-baseline sm:justify-between">
                      <span className="flex items-center gap-2.5 text-[0.95rem] font-medium text-navy-950">
                        <MapPin size={15} className="text-orange-500" />
                        {loc.tier}
                      </span>
                      <span className="text-[0.95rem] text-sand-600">{loc.cities}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <Reveal>
            <Eyebrow>What clients say</Eyebrow>
            <h2 className="mt-5 max-w-xl font-display text-3xl leading-[1.15] text-navy-950 balance sm:text-[2.3rem]">
              Direct feedback on our leadership, from the field.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
            {testimonialProjects.map((project, i) => (
              <Reveal key={project.slug} delay={0.08 * i}>
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-sand-200 p-8">
                  <blockquote className="font-display text-xl leading-relaxed text-navy-950 pretty">
                    &ldquo;{project.testimonial!.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 flex items-center justify-between gap-4 border-t border-sand-200 pt-5">
                    <div>
                      <p className="text-[0.95rem] font-medium text-navy-950">
                        {project.testimonial!.name}
                      </p>
                      <p className="text-[0.85rem] text-sand-500">{project.testimonial!.role}</p>
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="shrink-0 text-[0.82rem] font-medium text-navy-700 hover:text-orange-600"
                    >
                      View project
                    </Link>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership teaser */}
      <section className="bg-sand-100 py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Picture image="meetingBrickWall" sizes="(min-width: 1024px) 420px, 90vw" className="object-cover" />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.08}>
                <Eyebrow>Leadership</Eyebrow>
                <h2 className="mt-5 font-display text-3xl leading-[1.15] text-navy-950 balance sm:text-[2.3rem]">
                  {leadership.name} — {leadership.role}
                </h2>
                <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-sand-600 pretty">
                  {leadership.bio[0]}
                </p>
                <Link
                  href="/about/leadership"
                  className="mt-8 inline-flex items-center gap-2 text-[0.95rem] font-medium text-navy-700 transition-colors hover:text-orange-600"
                >
                  Read the full profile
                  <ArrowUpRight size={16} />
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
