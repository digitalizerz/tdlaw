import { cn } from "@/lib/utils";

export function SectionNumber({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-serif text-4xl leading-none text-bronze md:text-5xl",
        className,
      )}
    >
      {children}
    </span>
  );
}
