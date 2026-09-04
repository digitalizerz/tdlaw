import Image from "next/image";
import Link from "next/link";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { CredibilityBand } from "@/components/CredibilityBand";
import { PracticeAreaCards } from "@/components/PracticeAreaCards";
import { Reveal } from "@/components/Reveal";
import { TestimonialBand } from "@/components/TestimonialBand";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[58%]">
          <Image
            src={photos.heroGavel.src}
            alt={photos.heroGavel.alt}
            fill
            priority
            className="object-cover object-[center_right]"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, var(--td-navy) 0%, rgba(11,22,44,0.88) 36%, rgba(11,22,44,0.28) 70%, rgba(11,22,44,0.08) 100%)",
            }}
          />
        </div>
        <div className="site-container relative grid min-h-[78vh] items-center py-20 lg:min-h-[86vh] lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-xl">
            <h1 className="reveal font-serif text-6xl leading-[0.9] sm:text-7xl lg:text-[5.6rem]">
              The Strong
              <span className="mt-1 block italic text-bronze">Defense</span>
            </h1>
            <p className="reveal reveal-delay-1 mt-8 max-w-md text-base leading-8 text-white/80">
              Our clients are our top priority. We work tirelessly and are on
              call 24/7.
            </p>
            <div className="reveal reveal-delay-2 mt-10 flex flex-wrap items-center gap-5">
              <Link href="/contact/" className="btn-bronze">
                Request a consultation
                <span aria-hidden="true">→</span>
              </Link>
              <a href={site.phoneHref} className="eyebrow text-bronze">
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <CredibilityBand />
      </Reveal>
      <Reveal>
        <PracticeAreaCards />
      </Reveal>
      <Reveal>
        <TestimonialBand />
      </Reveal>
      <ConsultationCTA />
    </>
  );
}
