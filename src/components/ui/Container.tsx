import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto max-w-8xl px-5 sm:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}
