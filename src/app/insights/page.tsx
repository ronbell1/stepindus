import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Container } from "@/components/ui/Container";
import { Picture } from "@/components/ui/Picture";
import { Reveal } from "@/components/ui/Reveal";
import { insights, formatInsightDate } from "@/lib/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Policy and execution notes on India's GCC industry — SEZ strategy, budget reform, location studies and more, from the StepIndus team.",
};

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Policy and execution notes from the team on the ground."
        description="Written as the policy changes — safe harbour reform, SEZ strategy, state industrial schemes — alongside practical guides on engineering centers, shared services and India's GCC locations."
        image="flatlayDevices"
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <Link href={`/insights/${featured.slug}`} className="group grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-sand-200 lg:col-span-7">
                <Picture
                  image={featured.heroImage}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center lg:col-span-5">
                <p className="text-[0.78rem] font-medium tracking-wide text-orange-600 uppercase">
                  {featured.category} · {formatInsightDate(featured.date)}
                </p>
                <h2 className="mt-3 font-display text-3xl leading-[1.15] text-navy-950 transition-colors group-hover:text-orange-600 balance sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[1rem] leading-relaxed text-sand-600 pretty">{featured.dek}</p>
                <p className="mt-5 text-[0.85rem] text-sand-500">By {featured.author}</p>
              </div>
            </Link>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-14 border-t border-sand-200 pt-16 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={0.05 * i}>
                <Link href={`/insights/${post.slug}`} className="group block h-full">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-sand-200">
                    <Picture
                      image={post.heroImage}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-5 text-[0.78rem] font-medium tracking-wide text-orange-600 uppercase">
                    {post.category} · {formatInsightDate(post.date)}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-snug text-navy-950 transition-colors group-hover:text-orange-600">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 line-clamp-2 text-[0.92rem] leading-relaxed text-sand-600">
                    {post.dek}
                  </p>
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
