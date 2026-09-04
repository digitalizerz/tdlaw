"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/content";
import { cn } from "@/lib/utils";

export function TestimonialBand() {
  const [index, setIndex] = useState(1);
  const item = testimonials[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 9000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-bronze text-white" aria-label="Client testimonial">
      <div className="site-container grid items-center gap-8 py-16 md:grid-cols-[auto_1fr_auto] md:gap-12 md:py-20">
        <p className="font-serif text-7xl leading-none text-white/90 md:text-8xl" aria-hidden="true">
          “
        </p>
        <blockquote>
          <p className="font-serif text-2xl leading-snug md:text-[2rem] md:leading-snug">
            {item.quote}
          </p>
        </blockquote>
        <div className="flex flex-col gap-6 md:border-l md:border-white/35 md:pl-10">
          <p className="eyebrow text-white">
            {item.name}
            <span className="block text-white/80"> / {item.role}</span>
          </p>
          <div className="flex gap-2" role="tablist" aria-label="Testimonials">
            {testimonials.map((testimonial, testimonialIndex) => (
              <button
                key={testimonial.name}
                type="button"
                role="tab"
                aria-selected={index === testimonialIndex}
                aria-label={`Show testimonial from ${testimonial.name}`}
                className={cn(
                  "h-2.5 w-2.5 rounded-full border border-white transition-colors",
                  index === testimonialIndex ? "bg-white" : "bg-transparent",
                )}
                onClick={() => setIndex(testimonialIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
