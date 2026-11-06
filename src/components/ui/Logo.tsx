import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "default" | "reversed";
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = "default", className, priority }: LogoProps) {
  const src =
    variant === "reversed"
      ? "/brand/stepindus-logo-reversed.svg"
      : "/brand/stepindus-logo.svg";

  return (
    <Link href="/" className={className} aria-label="StepIndus — home">
      <Image
        src={src}
        alt="StepIndus"
        width={233}
        height={59}
        priority={priority}
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/stepindus-icon.svg"
      alt=""
      aria-hidden
      width={48}
      height={48}
      className={className}
    />
  );
}
