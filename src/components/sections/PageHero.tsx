import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { ImageKey } from "@/lib/images";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumb,
  size = "default",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: ImageKey;
  breadcrumb?: string;
  size?: "default" | "compact";
}) {
  const asset = image ? images[image] : null;

  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {asset && (
        <div className="absolute inset-0">
          <Image
            src={`https://images.unsplash.com/photo-${asset.id}?auto=format&fit=crop&q=78`}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/55" />
        </div>
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-3xl"
      />
      <Container
        className={cn(
          "relative",
          size === "compact" ? "pb-14 pt-32 sm:pb-16 sm:pt-36" : "pb-20 pt-36 sm:pb-24 sm:pt-44"
        )}
      >
        {breadcrumb && (
          <p className="mb-5 text-[0.8rem] text-white/45">{breadcrumb}</p>
        )}
        <Eyebrow tone="orange">{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.1] balance sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 pretty">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
