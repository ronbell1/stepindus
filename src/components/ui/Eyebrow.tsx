import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "orange",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "orange" | "teal" | "sand";
}) {
  const toneClass =
    tone === "orange" ? "text-orange-600" : tone === "teal" ? "text-teal-600" : "text-sand-400";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[0.8rem] font-semibold tracking-[0.08em] uppercase",
        toneClass,
        className
      )}
    >
      <span className="h-[3px] w-5 rounded-full bg-current" />
      {children}
    </span>
  );
}
