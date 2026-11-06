import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Picture } from "@/components/ui/Picture";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Ten services spanning GCC setup, engineering and R&D, shared services, manufacturing, SEZ, consulting, talent, India entry, semiconductor and startup regulatory advisory.",
};

const groups = ["GCC Services", "Specialised Services"] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Ten ways to build a global presence in India."
        description="Four core GCC services, and six specialised services that cover entry strategy, SEZ structuring, semiconductor setup, consulting, talent and regulatory advisory — all delivered by the same accountable team."
        image="circuitBoard"
      />

      {groups.map((group, gi) => (
        <section key={group} className={gi % 2 === 0 ? "bg-white py-24 sm:py-28" : "bg-sand-50 py-24 sm:py-28"}>
          <Container>
            <Reveal>
              <Eyebrow>{group}</Eyebrow>
            </Reveal>
            <div
              className={
                group === "GCC Services"
                  ? "mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2"
                  : "mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
              }
            >
              {services
                .filter((s) => s.group === group)
                .map((service, i) => (
                  <Reveal key={service.slug} delay={0.05 * i}>
                    <Link href={`/services/${service.slug}`} className="group block h-full">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand-200">
                        <Picture
                          image={service.heroImage}
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/0 to-transparent" />
                      </div>
                      <div className="mt-5 flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-xl leading-snug text-navy-950 transition-colors group-hover:text-orange-600">
                            {service.title}
                          </h3>
                          <p className="mt-2 text-[0.92rem] leading-relaxed text-sand-600">
                            {service.tagline}
                          </p>
                        </div>
                        <ArrowUpRight
                          size={18}
                          className="mt-1.5 shrink-0 text-sand-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-600"
                        />
                      </div>
                    </Link>
                  </Reveal>
                ))}
            </div>
          </Container>
        </section>
      ))}

      <ClosingCta />
    </>
  );
}
