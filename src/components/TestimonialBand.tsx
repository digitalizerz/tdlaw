"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/content";
import { cn } from "@/lib/utils";

export function TestimonialBand() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 9000);
    return () => window.clearInterval(timer);
  }, []);

  const visible = [0, 1, 2].map(
    (offset) => testimonials[(index + offset) % testimonials.length],
  );

  return (
    <section className="bg-white section-y" aria-label="Client testimonials">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-bronze">Testimonials</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-navy md:text-5xl">
            Trusted by clients.
            <span className="italic text-bronze"> Proven </span>
            by results.
          </h2>
        </div>

        <div className="relative mt-12">
          <button
            type="button"
            className="absolute top-1/2 left-0 z-10 hidden size-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-td-border text-navy lg:flex"
            aria-label="Previous testimonials"
            onClick={() =>
              setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
            }
          >
            ←
          </button>
          <button
            type="button"
            className="absolute top-1/2 right-0 z-10 hidden size-10 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-td-border text-navy lg:flex"
            aria-label="Next testimonials"
            onClick={() => setIndex((current) => (current + 1) % testimonials.length)}
          >
            →
          </button>

          <div className="grid gap-5 md:grid-cols-3">
            {visible.map((item) => (
              <article key={item.name} className="bg-offwhite px-6 py-8">
                <p className="font-serif text-4xl leading-none text-bronze" aria-hidden="true">
                  “
                </p>
                <blockquote className="mt-3 font-serif text-lg leading-snug text-navy line-clamp-6">
                  {item.quote}
                </blockquote>
                <p className="mt-6 eyebrow text-bronze">— {item.name}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Testimonials">
          {testimonials.map((testimonial, testimonialIndex) => (
            <button
              key={testimonial.name}
              type="button"
              role="tab"
              aria-selected={index === testimonialIndex}
              aria-label={`Show testimonials starting with ${testimonial.name}`}
              className={cn(
                "h-2.5 w-2.5 rounded-full border border-bronze transition-colors",
                index === testimonialIndex ? "bg-bronze" : "bg-transparent",
              )}
              onClick={() => setIndex(testimonialIndex)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
