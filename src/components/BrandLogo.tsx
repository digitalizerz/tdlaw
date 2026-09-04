import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "navy" | "white";
  className?: string;
};

export function BrandLogo({ variant = "navy", className }: BrandLogoProps) {
  const src = variant === "white" ? "/images/logo.png" : "/images/logo-navy.png";

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label="T.D. Armstrong Law Firm, P.C. home"
    >
      <Image
        src={src}
        alt="T.D. Armstrong Law Firm, P.C."
        width={909}
        height={167}
        className="h-10 w-auto max-w-[220px] object-contain object-left sm:h-11 sm:max-w-[248px]"
        priority
      />
    </Link>
  );
}
