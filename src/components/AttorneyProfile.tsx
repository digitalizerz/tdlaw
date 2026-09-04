import { ArrowLink } from "@/components/ArrowLink";
import { SectionNumber } from "@/components/SectionNumber";
import { attorney } from "@/lib/content";

export function AttorneyProfile() {
  return (
    <div className="relative min-h-[560px] overflow-hidden bg-navy lg:min-h-full">
      <div
        className="absolute inset-0 bg-cover bg-[center_20%]"
        style={{ backgroundImage: "url(/images/columns.jpg)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy/55" aria-hidden="true" />
      <div className="relative flex min-h-[560px] items-center justify-center px-6 py-16 sm:px-10 lg:min-h-[720px] lg:px-14">
        <div className="w-full max-w-xl border border-white/70 px-7 py-10 sm:px-10 sm:py-12">
          <div className="mb-5 flex items-end gap-4">
            <SectionNumber>03</SectionNumber>
            <p className="eyebrow mb-1 text-bronze">{attorney.role}</p>
          </div>
          <h2 className="font-serif text-4xl text-white md:text-5xl">{attorney.name}</h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-white/82 md:text-base">
            {attorney.excerpt}
          </p>
          <div className="mt-8">
            <ArrowLink href="/about-us/#managing-attorney" tone="white">
              View attorney profile
            </ArrowLink>
          </div>
        </div>
      </div>
    </div>
  );
}
