import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  showArrow?: boolean;
  external?: boolean;
};

const variants = {
  primary: "bg-navy-950 text-white hover:bg-orange-600",
  secondary: "border border-navy-950/15 text-navy-950 hover:border-navy-950 hover:bg-navy-950 hover:text-white",
  ghost: "text-navy-950 hover:text-orange-600",
  light: "bg-white text-navy-950 hover:bg-orange-500 hover:text-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
  external,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.9rem] font-medium transition-all duration-300";
  const cls = cn(base, variants[variant], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
        {showArrow && (
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
      {showArrow && (
        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Link>
  );
}
