"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/content";
import { cn } from "@/lib/utils";

export function TestimonialFeature() {
  const [index, setIndex] = useState(1);
  const item = testimonials[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 10000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-navy text-white" aria-label="Featured testimonial">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <p className="font-serif text-7xl leading-none text-bronze" aria-hidden="true">
            “
          </p>
          <blockquote className="mt-2 max-w-2xl font-serif text-2xl leading-snug md:text-4xl">
            {item.quote}
          </blockquote>
          <p className="mt-8 eyebrow text-bronze">
            {item.name}
            <span className="text-white/70"> / {item.role}</span>
          </p>
          <div className="mt-10 flex gap-2" role="tablist" aria-label="Testimonials">
            {testimonials.map((testimonial, testimonialIndex) => (
              <button
                key={testimonial.name}
                type="button"
                role="tab"
                aria-selected={index === testimonialIndex}
                aria-label={`Show testimonial from ${testimonial.name}`}
                className={cn(
                  "h-2.5 w-2.5 rounded-full border border-bronze transition-colors",
                  index === testimonialIndex ? "bg-bronze" : "bg-transparent",
                )}
                onClick={() => setIndex(testimonialIndex)}
              />
            ))}
          </div>
        </div>
        <div className="relative min-h-[280px] lg:min-h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/reading-room.jpg)" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
