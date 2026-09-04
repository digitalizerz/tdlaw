import Image from "next/image";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { cn } from "@/lib/utils";

type EditorialHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  imageSrc?: string | null;
  imageAlt?: string;
  imagePosition?: string;
  compact?: boolean;
};

export function EditorialHero({
  eyebrow,
  title,
  children,
  imageSrc,
  imageAlt = "",
  imagePosition = "center 20%",
  compact = false,
}: EditorialHeroProps) {
  const hasImage = Boolean(imageSrc);

  return (
    <section className="relative overflow-hidden bg-offwhite">
      {hasImage ? (
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-1/2">
          <Image
            src={imageSrc!}
            alt={imageAlt}
            fill
            priority
            className="photo object-cover opacity-30 lg:opacity-100"
            style={{ objectPosition: imagePosition }}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, var(--td-offwhite) 0%, rgba(245,243,240,0.88) 42%, rgba(245,243,240,0.15) 100%)",
            }}
          />
        </div>
      ) : null}
      <div
        className={cn(
          "site-container relative grid items-center py-16 lg:py-24",
          hasImage && "min-h-[420px] lg:min-h-[520px] lg:grid-cols-[1.1fr_0.9fr]",
          compact && "py-14 lg:py-20",
        )}
      >
        <div className={cn("max-w-xl", !hasImage && "max-w-3xl")}>
          <div className="flex items-center gap-4">
            <span className="rule w-10" aria-hidden="true" />
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
          </div>
          <h1 className="mt-6 font-serif text-5xl leading-[0.95] text-navy md:text-7xl">
            {title}
          </h1>
          {children ? (
            <div className="mt-8 max-w-xl text-base leading-8 text-td-muted">
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
