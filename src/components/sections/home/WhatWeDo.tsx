import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Picture } from "@/components/ui/Picture";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { NAV_SERVICE_GROUPS } from "@/lib/site";

const coreServices = NAV_SERVICE_GROUPS[0].items;

export function WhatWeDo() {
  return (
    <section className="bg-sand-50 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-5 font-display text-3xl leading-[1.15] text-navy-950 balance sm:text-[2.5rem]">
                GCCs stall from fragmented execution, not a lack of intent.
              </h2>
              <p className="mt-6 text-[1.05rem] leading-relaxed text-sand-600 pretty">
                Too many advisors, no single owner. Regulatory risk
                underestimated. Timelines that drift past board patience.
                StepIndus exists to close that gap — one team accountable
                for the entire build, across four core service lines.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-9 overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3]">
                <Picture image="openPlanFloor" sizes="(min-width: 1024px) 420px, 90vw" className="object-cover" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-2">
            <ul className="divide-y divide-sand-200 border-y border-sand-200">
              {coreServices.map((service, i) => (
                <Reveal key={service.slug} delay={0.05 * i}>
                  <li>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex items-start justify-between gap-6 py-7 transition-colors hover:bg-white/60"
                    >
                      <div className="flex items-start gap-5">
                        <span className="pt-1 font-display text-sm text-orange-500">
                          0{i + 1}
                        </span>
                        <div>
                          <h3 className="font-display text-xl text-navy-950 transition-colors group-hover:text-orange-600 sm:text-2xl">
                            {service.title}
                          </h3>
                          <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-sand-600">
                            {service.blurb}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={20}
                        className="mt-2 shrink-0 text-sand-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-600"
                      />
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.2}>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-[0.95rem] font-medium text-navy-700 transition-colors hover:text-orange-600"
              >
                Explore all ten services, including India entry, SEZ and semiconductor GCC setup
                <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
