import { cn } from "@/lib/utils";

export function SectionEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("eyebrow text-bronze", className)}>{children}</p>
  );
}
