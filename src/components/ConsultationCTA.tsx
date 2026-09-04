import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { ContactForm } from "@/components/ContactForm";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { SectionNumber } from "@/components/SectionNumber";
import { contactIntro } from "@/lib/content";
import { site } from "@/lib/site";

type ConsultationCTAProps = {
  variant?: "trio" | "split";
};

export function ConsultationCTA({ variant = "trio" }: ConsultationCTAProps) {
  const details = (
    <ul className="mt-10 space-y-5 text-sm text-white/85">
      <li className="flex items-start gap-3">
        <PhoneIcon className="mt-0.5 text-bronze" />
        <a href={site.phoneHref}>{site.phone}</a>
      </li>
      <li className="flex items-start gap-3">
        <MailIcon className="mt-0.5 text-bronze" />
        <a href={site.emailHref}>{site.email}</a>
      </li>
      <li className="flex items-start gap-3">
        <PinIcon className="mt-0.5 text-bronze" />
        <span>
          {site.address.line1}
          <br />
          {site.address.line2}
        </span>
      </li>
    </ul>
  );

  if (variant === "split") {
    return (
      <section aria-labelledby="contact-heading">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden px-6 py-14 text-white sm:px-10 lg:px-14 lg:py-20">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/images/houston.jpg)" }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-navy/55" aria-hidden="true" />
            <div className="relative max-w-lg">
              <h2
                id="contact-heading"
                className="font-serif text-4xl leading-tight md:text-5xl"
              >
                Start with a
                <span className="block text-bronze">strong defense.</span>
              </h2>
              <p className="mt-5 text-white/75">{contactIntro.availability}</p>
              {details}
            </div>
          </div>
          <div className="bg-bronze px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
            <ContactForm />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="contact-heading">
      <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)_minmax(0,1.15fr)]">
        <div className="relative min-h-[280px] overflow-hidden lg:min-h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/houston.jpg)" }}
            aria-hidden="true"
          />
        </div>
        <div className="bg-navy px-6 py-14 text-white sm:px-10 lg:px-12 lg:py-16">
          <div className="mb-6 flex items-end gap-4">
            <SectionNumber>04</SectionNumber>
            <SectionEyebrow className="mb-1">Contact</SectionEyebrow>
          </div>
          <h2
            id="contact-heading"
            className="max-w-md font-serif text-4xl leading-tight text-white md:text-5xl"
          >
            Start with a
            <br />
            strong defense.
          </h2>
          <p className="mt-5 text-white/75">{contactIntro.availability}</p>
          {details}
        </div>
        <div className="bg-bronze px-6 py-14 sm:px-10 lg:px-12 lg:py-16">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
