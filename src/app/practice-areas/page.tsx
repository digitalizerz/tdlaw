import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EditorialHero } from "@/components/EditorialHero";
import { RequestConsultBand } from "@/components/RequestConsultBand";
import { Reveal } from "@/components/Reveal";
import { practiceAreas } from "@/lib/content";
import { photos } from "@/lib/images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Civil litigation, criminal defense, estate planning, family law, and personal injury representation from T.D. Armstrong Law Firm, P.C.",
};

const visuals = [
  { src: photos.desk.src, alt: photos.desk.alt, position: "center 40%", aspect: "aspect-[4/5] lg:min-h-[520px]" },
  { src: photos.stoneFacade.src, alt: photos.stoneFacade.alt, position: "center 30%", aspect: "aspect-[16/10] lg:min-h-[380px]" },
  { src: photos.residence.src, alt: photos.residence.alt, position: "center 40%", aspect: "aspect-[5/4] lg:min-h-[420px]" },
  { src: photos.sittingRoom.src, alt: photos.sittingRoom.alt, position: "center 45%", aspect: "aspect-[3/4] lg:min-h-[480px]" },
  { src: photos.cityDusk.src, alt: photos.cityDusk.alt, position: "center 50%", aspect: "aspect-[16/9] lg:min-h-[360px]" },
] as const;

export default function PracticeAreasPage() {
  return (
    <>
      <EditorialHero
        eyebrow="Practice Areas"
        title={
          <>
            Five practices.
            <span className="mt-2 block text-bronze">One firm.</span>
          </>
        }
      >
        <p>
          Civil litigation, criminal defense, estate planning, family law, and
          personal injury — handled with the same preparation and attention to
          detail.
        </p>
        <ol className="mt-8 columns-1 gap-x-12 text-sm text-navy sm:columns-2">
          {practiceAreas.map((area) => (
            <li key={area.slug} className="mb-2 break-inside-avoid">
              <a href={`#${area.slug}`} className="transition-colors hover:text-bronze">
                <span className="eyebrow mr-3 text-bronze">{area.number}</span>
                {area.name}
              </a>
            </li>
          ))}
        </ol>
      </EditorialHero>

      {practiceAreas.map((area, index) => {
        const reversed = index % 2 === 1;
        const visual = visuals[index];
        return (
          <Reveal key={area.slug}>
            <section
              id={area.slug}
              className={index % 2 === 0 ? "bg-white" : "bg-offwhite"}
            >
              <div
                className={cn(
                  "site-container grid items-center gap-10 section-y lg:grid-cols-[0.95fr_1.05fr] lg:gap-16",
                  reversed && "lg:grid-cols-[1.05fr_0.95fr] lg:[&>*:first-child]:order-2",
                )}
              >
                <div className={cn("group relative overflow-hidden", visual.aspect)}>
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    className="photo object-cover"
                    style={{ objectPosition: visual.position }}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                </div>
                <div className={reversed ? "lg:pr-6" : "lg:pl-2"}>
                  <p className="eyebrow text-bronze">{area.number}</p>
                  <h2 className="mt-3 font-serif text-4xl text-navy md:text-5xl">
                    {area.name}
                  </h2>
                  <div className="mt-6 max-w-xl space-y-4 text-base leading-8 text-td-muted">
                    {area.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 28)}>{paragraph}</p>
                    ))}
                  </div>
                  {"matters" in area && area.matters ? (
                    <ul className="mt-7 columns-1 gap-x-8 text-sm text-navy sm:columns-2">
                      {area.matters.map((matter) => (
                        <li key={matter} className="mb-1.5 break-inside-avoid">
                          {matter}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <Link
                    href="/contact/"
                    className="group mt-8 inline-flex items-center gap-3 text-bronze"
                  >
                    <span className="arrow-shift text-2xl leading-none">→</span>
                    <span className="eyebrow">Request a consultation</span>
                  </Link>
                </div>
              </div>
            </section>
          </Reveal>
        );
      })}

      <RequestConsultBand
        variant="split"
        headline={
          <>
            Feel free to schedule
            <span className="text-bronze"> a consultation.</span>
          </>
        }
        note="We work tirelessly and are on call 24/7."
      />
    </>
  );
}
