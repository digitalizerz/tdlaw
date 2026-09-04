import Link from "next/link";
import { cn } from "@/lib/utils";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  tone?: "navy" | "white" | "bronze";
  className?: string;
};

export function ArrowLink({
  href,
  children,
  tone = "navy",
  className,
}: ArrowLinkProps) {
  const color =
    tone === "white"
      ? "text-white"
      : tone === "bronze"
        ? "text-bronze"
        : "text-navy";

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 eyebrow font-medium",
        color,
        className,
      )}
    >
      <span>{children}</span>
      <span className="arrow-shift text-bronze" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
