import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLink } from "@/components/ArrowLink";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { FramedImage } from "@/components/FramedImage";
import { Reveal } from "@/components/Reveal";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { SectionNumber } from "@/components/SectionNumber";
import { ValuesGrid } from "@/components/ValuesGrid";
import { attorney, firmCopy } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About T.D. Armstrong Law Firm, P.C. and managing attorney Taylor D. Armstrong.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-offwhite overflow-hidden">
        <div className="site-container grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          <div>
            <div className="flex items-center gap-4">
              <span className="rule w-10" aria-hidden="true" />
              <SectionEyebrow>About Us</SectionEyebrow>
            </div>
            <h1 className="mt-6 font-serif text-5xl leading-[0.95] text-navy md:text-7xl">
              Our clients are
              <span className="mt-2 block text-bronze">our top priority.</span>
            </h1>
            <blockquote className="relative mt-10 max-w-xl pl-2">
              <span
                className="absolute -top-8 left-0 font-serif text-7xl leading-none text-bronze/80"
                aria-hidden="true"
              >
                “
              </span>
              <p className="pt-6 font-serif text-2xl leading-snug text-navy md:text-[1.85rem]">
                {firmCopy.aristotle}
              </p>
              <footer className="mt-6 flex items-center gap-4 eyebrow text-bronze">
                <span className="rule w-8" aria-hidden="true" />
                {firmCopy.aristotleAttribution}
              </footer>
            </blockquote>
          </div>
          <div className="group relative aspect-[4/5] w-full min-h-[320px] translate-y-2 lg:min-h-[560px] lg:translate-x-4">
            <Image
              src="/images/columns.jpg"
              alt="Classical stone columns"
              fill
              className="photo object-cover"
              style={{ objectPosition: "center 20%" }}
              sizes="(min-width: 1024px) 46vw, 100vw"
              priority
            />
            <div
              className="absolute inset-y-8 right-6 flex gap-3"
              aria-hidden="true"
            >
              <span className="w-px bg-bronze" />
              <span className="w-px bg-bronze" />
              <span className="w-px bg-bronze" />
            </div>
          </div>
        </div>
      </section>

      <Reveal>
      <section className="bg-white">
        <div className="site-container grid items-center gap-12 section-y lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionNumber>02</SectionNumber>
            <h2 className="mt-3 font-serif text-4xl text-navy md:text-5xl">
              The Firm
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-td-muted">
              {firmCopy.theFirmParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <ArrowLink href="#managing-attorney">View attorney profile</ArrowLink>
            </div>
          </div>
          <FramedImage
            src="/images/houston.jpg"
            alt="Houston street view"
            objectPosition="center 35%"
            className="min-h-[360px] lg:min-h-[480px]"
          />
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section id="managing-attorney" className="bg-navy text-white">
        <div className="site-container grid items-center gap-12 section-y lg:grid-cols-2 lg:gap-20">
          <FramedImage
            src="/images/hero-visual.jpg"
            alt="Placeholder for Taylor D. Armstrong portrait"
            offset="top-left"
            objectPosition="68% 30%"
            className="min-h-[420px] lg:min-h-[520px]"
          />
          <div>
            <div className="flex items-end gap-4">
              <SectionNumber>03</SectionNumber>
              <SectionEyebrow className="mb-1">{attorney.role}</SectionEyebrow>
            </div>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl">
              Taylor D. <span className="text-bronze">Armstrong</span>
            </h2>
            <p className="mt-8 text-base leading-8 text-white/80">{attorney.bio}</p>
            <p className="mt-6 text-base leading-8 text-white/80">{attorney.motto}</p>
            <div className="mt-8">
              <ArrowLink href="/contact/" tone="white">
                Request a consultation
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <ValuesGrid />
      </Reveal>
      <ConsultationCTA variant="split" />
    </>
  );
}
