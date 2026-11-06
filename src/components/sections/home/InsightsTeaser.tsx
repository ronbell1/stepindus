import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Picture } from "@/components/ui/Picture";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { insights, formatInsightDate } from "@/lib/data/insights";

const latest = insights.slice(0, 3);

export function InsightsTeaser() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Eyebrow>Insights</Eyebrow>
            <h2 className="mt-5 max-w-xl font-display text-3xl leading-[1.15] text-navy-950 balance sm:text-[2.5rem]">
              Policy and execution notes from the team on the ground.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-navy-700 transition-colors hover:text-orange-600"
            >
              All insights
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={0.08 * i}>
              <Link href={`/insights/${post.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-sand-200">
                  <Picture
                    image={post.heroImage}
                    sizes="(min-width: 640px) 33vw, 100vw"
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
  );
}
