import Link from "next/link";
import { ArrowLink } from "@/components/ArrowLink";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { SectionNumber } from "@/components/SectionNumber";
import { practiceAreas } from "@/lib/content";

export function PracticeAreaList() {
  return (
    <div className="flex h-full flex-col justify-between bg-offwhite px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
      <div>
        <div className="mb-8 flex items-end gap-4">
          <SectionNumber>02</SectionNumber>
          <SectionEyebrow className="mb-1 text-navy">Practice Areas</SectionEyebrow>
        </div>
        <ul>
          {practiceAreas.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/practice-areas/#${area.slug}`}
                className="group flex items-center justify-between border-t border-bronze/40 py-5 text-lg text-navy transition-colors hover:text-bronze md:text-xl"
              >
                <span>{area.name}</span>
                <span className="arrow-shift text-sm text-bronze" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 border-t border-bronze/40 pt-6">
        <ArrowLink href="/practice-areas/">View all practice areas</ArrowLink>
      </div>
    </div>
  );
}
