import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { services, getService } from "@/lib/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.group}
        breadcrumb={`Services / ${service.navTitle}`}
        title={service.title}
        description={service.tagline}
        image={service.heroImage}
      />

      {/* Intro + stats */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal className="space-y-5 text-[1.05rem] leading-relaxed text-sand-700 pretty">
                {service.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>
            </div>
            {service.stats.length > 0 && (
              <div className="lg:col-span-5">
                <Reveal delay={0.1} className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
                  {service.stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-sand-200 p-5">
                      <p className="font-display text-2xl text-orange-600">{stat.value}</p>
                      <p className="mt-1.5 text-[0.85rem] leading-snug text-sand-600">{stat.label}</p>
                    </div>
                  ))}
                </Reveal>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Scope */}
      {service.scope.length > 0 && (
        <section className="bg-sand-50 py-24 sm:py-28">
          <Container>
            <Reveal>
              <Eyebrow>Scope of work</Eyebrow>
              <h2 className="mt-5 max-w-xl font-display text-3xl leading-[1.15] text-navy-950 balance sm:text-[2.3rem]">
                How the engagement runs
              </h2>
            </Reveal>

            <RevealGroup className="mt-14 space-y-5">
              {service.scope.map((step) => (
                <RevealItem key={step.title}>
                  <div className="rounded-2xl border border-sand-200 bg-white p-7 sm:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h3 className="font-display text-xl text-navy-950 sm:text-2xl">{step.title}</h3>
                      {step.label && (
                        <span className="text-[0.78rem] font-medium tracking-wide text-orange-600 uppercase">
                          {step.label}
                        </span>
                      )}
                    </div>
                    {step.description && (
                      <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-sand-600">
                        {step.description}
                      </p>
                    )}
                    {step.points.length > 0 && (
                      <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-3">
                        {step.points.map((p) => (
                          <li key={p} className="flex gap-2.5 text-[0.9rem] leading-snug text-navy-950">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange-500" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      {/* Who it's for + benefits */}
      <section className="bg-navy-950 py-24 text-white sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow tone="orange">Who it&apos;s for</Eyebrow>
                <ul className="mt-6 space-y-4">
                  {service.whoItsFor.map((w) => (
                    <li key={w} className="flex gap-3 text-[0.98rem] leading-relaxed text-white/75">
                      <Check size={16} className="mt-1 shrink-0 text-orange-400" />
                      {w}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.08}>
                <Eyebrow tone="orange">Why StepIndus</Eyebrow>
              </Reveal>
              <RevealGroup className="mt-6 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <RevealItem key={b.title}>
                    <h3 className="font-display text-lg text-white">{b.title}</h3>
                    <p className="mt-2 text-[0.92rem] leading-relaxed text-white/60">{b.description}</p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="bg-white py-24 sm:py-28">
          <Container className="max-w-3xl">
            <Reveal>
              <Eyebrow>Questions</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-[1.15] text-navy-950 sm:text-[2.3rem]">
                Frequently asked
              </h2>
            </Reveal>
            <div className="mt-10 divide-y divide-sand-200 border-y border-sand-200">
              {service.faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={0.04 * i}>
                  <details className="group py-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[1.02rem] font-medium text-navy-950">
                      {faq.q}
                      <span className="shrink-0 text-xl font-light text-orange-500 transition-transform duration-200 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-sand-600">
                      {faq.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related services */}
      <section className="bg-sand-50 py-20 sm:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Explore more</Eyebrow>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-sand-300 bg-white px-5 py-3 text-[0.88rem] font-medium text-navy-950 transition-colors hover:border-navy-950 hover:bg-navy-950 hover:text-white"
              >
                {s.navTitle}
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
