import Link from "next/link";
import { AttorneyProfile } from "@/components/AttorneyProfile";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { CredibilityBand } from "@/components/CredibilityBand";
import { PracticeAreaList } from "@/components/PracticeAreaList";
import { Reveal } from "@/components/Reveal";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { SlicedPortrait } from "@/components/SlicedPortrait";
import { TestimonialBand } from "@/components/TestimonialBand";
import { firmCopy } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-offwhite">
        <span
          className="pointer-events-none absolute top-0 bottom-0 left-[max(1.25rem,calc((100%-1360px)/2+1.5rem))] hidden w-px bg-bronze/25 lg:block"
          aria-hidden="true"
        />
        <div className="site-container grid items-end gap-10 pt-20 pb-0 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:pt-28">
          <div className="pb-16 lg:pb-28">
            <SectionEyebrow className="reveal">{site.address.city}</SectionEyebrow>
            <h1 className="reveal reveal-delay-1 mt-6 font-serif text-[4.6rem] leading-[0.86] text-navy sm:text-8xl lg:text-[8rem]">
              The Strong
              <span className="block italic text-bronze">Defense</span>
            </h1>
            <div className="rule mt-8 w-20" />
            <div className="reveal reveal-delay-2 mt-9 max-w-md space-y-3 text-[1.15rem] leading-8 text-navy/85">
              {firmCopy.heroLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <Link
              href="/contact/"
              className="group mt-12 inline-flex items-center gap-4"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>
              <span className="flex flex-col">
                <span className="eyebrow text-navy">Request a consultation</span>
                <span className="mt-1 text-sm text-td-muted">{site.phone}</span>
              </span>
            </Link>
          </div>
          <div className="reveal reveal-delay-3 lg:translate-x-6 lg:translate-y-4">
            <SlicedPortrait
              src="/images/hero-visual.jpg"
              alt="Architectural legal imagery for T.D. Armstrong Law Firm"
            />
          </div>
        </div>
      </section>

      <Reveal>
        <CredibilityBand />
      </Reveal>

      <Reveal>
        <section className="grid lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
          <PracticeAreaList />
          <AttorneyProfile />
        </section>
      </Reveal>

      <Reveal>
        <TestimonialBand />
      </Reveal>
      <ConsultationCTA />
    </>
  );
}
