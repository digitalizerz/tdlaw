import type { Metadata } from "next";
import { EditorialHero } from "@/components/EditorialHero";
import { RequestConsultBand } from "@/components/RequestConsultBand";
import { Reveal } from "@/components/Reveal";
import { TestimonialFeature } from "@/components/TestimonialFeature";
import { testimonials } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Client testimonials for T.D. Armstrong Law Firm, P.C.",
};

export default function TestimonialsPage() {
  const remaining = testimonials.filter((_, index) => index !== 1);

  return (
    <>
      <EditorialHero
        eyebrow="Testimonials"
        title={
          <>
            In their
            <span className="mt-2 block italic text-bronze">words.</span>
          </>
        }
      >
        Four clients, in their own language — divorce, a dismissed felony, a
        dismissed DWI, and an accident claim.
      </EditorialHero>

      <Reveal>
        <TestimonialFeature />
      </Reveal>

      <section className="bg-offwhite">
        <div className="site-container section-y space-y-16 md:space-y-24">
          {remaining.map((item, index) => (
            <Reveal key={item.name} delay={index * 80}>
              <article
                className={cn(
                  "max-w-3xl",
                  index === 1 && "ml-auto md:max-w-2xl",
                  index === 2 && "md:max-w-xl",
                )}
              >
                <p
                  className="font-serif text-6xl leading-none text-bronze"
                  aria-hidden="true"
                >
                  “
                </p>
                <blockquote className="-mt-4 font-serif text-2xl leading-snug text-navy md:text-[2rem]">
                  {item.quote}
                </blockquote>
                <p className="mt-8 eyebrow text-bronze">
                  {item.name}
                  <span className="text-navy/50"> / {item.role}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <RequestConsultBand
        headline={
          <>
            Welcome to the
            <span className="text-bronze"> family.</span>
          </>
        }
        note="Feel free to schedule a consultation."
      />
    </>
  );
}
