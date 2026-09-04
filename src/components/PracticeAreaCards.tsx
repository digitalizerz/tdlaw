import Image from "next/image";
import Link from "next/link";
import { LineIcon } from "@/components/icons";
import { practiceAreas } from "@/lib/content";
import { photos } from "@/lib/images";

const cards = [
  { area: practiceAreas[0], image: photos.courthouse, icon: "columns" as const },
  { area: practiceAreas[1], image: photos.stoneFacade, icon: "gavel" as const },
  { area: practiceAreas[2], image: photos.desk, icon: "document" as const },
  { area: practiceAreas[3], image: photos.sittingRoom, icon: "people" as const },
  { area: practiceAreas[4], image: photos.cityDusk, icon: "car" as const },
];

export function PracticeAreaCards() {
  return (
    <section className="bg-offwhite section-y">
      <div className="site-container grid items-end gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        <div>
          <p className="eyebrow text-bronze">Practice Areas</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-navy md:text-5xl">
            Legal representation you can
            <span className="italic text-bronze"> rely </span>
            on.
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-td-muted">
            Civil litigation, criminal defense, estate planning, family law, and
            personal injury — handled with the same preparation and attention to
            detail.
          </p>
          <Link href="/practice-areas/" className="btn-outline mt-8">
            View all practice areas
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3">
          {cards.map(({ area, image, icon }) => (
            <Link
              key={area.slug}
              href={`/practice-areas/#${area.slug}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="photo object-cover"
                  sizes="(min-width: 1024px) 16vw, 45vw"
                />
                <span className="absolute bottom-3 left-1/2 flex size-11 -translate-x-1/2 items-center justify-center rounded-full bg-white text-bronze shadow-[0_8px_20px_rgba(11,22,44,0.18)]">
                  <LineIcon name={icon} className="size-5" />
                </span>
              </div>
              <p className="mt-4 flex items-start justify-between gap-2 font-serif text-lg leading-snug text-navy">
                {area.name}
                <span className="arrow-shift mt-1 text-sm text-bronze" aria-hidden="true">
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
