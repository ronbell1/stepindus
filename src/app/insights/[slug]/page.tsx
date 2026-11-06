import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Container } from "@/components/ui/Container";
import { Picture } from "@/components/ui/Picture";
import { Reveal } from "@/components/ui/Reveal";
import { insights, getInsight, formatInsightDate } from "@/lib/data/insights";
import { images } from "@/lib/images";

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};
  return { title: post.title, description: post.dek };
}

export default async function InsightDetailPage({
  params,
}: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const asset = images[post.heroImage];
  const more = insights.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="bg-white">
        <header className="bg-navy-950 pb-16 pt-36 text-white sm:pb-20 sm:pt-44">
          <Container className="max-w-3xl">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-[0.85rem] text-white/55 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} /> Insights
            </Link>
            <p className="mt-6 text-[0.8rem] font-semibold tracking-[0.08em] text-orange-400 uppercase">
              {post.category} · {formatInsightDate(post.date)}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.12] balance sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 pretty">{post.dek}</p>
            <p className="mt-6 text-[0.88rem] text-white/50">By {post.author}</p>
          </Container>
        </header>

        <Container className="max-w-3xl">
          <Reveal className="relative -mt-10 aspect-[16/9] overflow-hidden rounded-2xl sm:-mt-14">
            <Image
              src={`https://images.unsplash.com/photo-${asset.id}?auto=format&fit=crop&q=85`}
              alt={asset.alt}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </Reveal>

          <div className="py-16 sm:py-20">
            {post.sections.map((section, i) => (
              <Reveal key={i} delay={i === 0 ? 0 : 0.03} className="mb-10 last:mb-0">
                {section.heading && (
                  <h2 className="mb-4 font-display text-2xl leading-snug text-navy-950">
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-5 text-[1.05rem] leading-relaxed text-sand-700 pretty">
                  {section.paragraphs.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </article>

      <section className="bg-sand-50 py-20 sm:py-24">
        <Container>
          <p className="text-[0.8rem] font-semibold tracking-wide text-sand-500 uppercase">
            More insights
          </p>
          <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {more.map((p) => (
              <Link key={p.slug} href={`/insights/${p.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-sand-200">
                  <Picture
                    image={p.heroImage}
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg leading-snug text-navy-950 transition-colors group-hover:text-orange-600">
                  {p.title}
                </h3>
                <span className="mt-2 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-navy-700 group-hover:text-orange-600">
                  Read <ArrowUpRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
