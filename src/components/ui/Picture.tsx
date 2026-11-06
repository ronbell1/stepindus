import Image from "next/image";
import { images, type ImageKey } from "@/lib/images";

type PictureProps = {
  image: ImageKey;
  sizes?: string;
  priority?: boolean;
  className?: string;
  quality?: number;
};

/** Thin wrapper over next/image bound to the curated, pre-verified image catalog. */
export function Picture({
  image,
  sizes = "100vw",
  priority = false,
  className,
  quality = 82,
}: PictureProps) {
  const asset = images[image];
  return (
    <Image
      src={`https://images.unsplash.com/photo-${asset.id}?auto=format&fit=crop&q=${quality}`}
      alt={asset.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
