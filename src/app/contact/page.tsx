import type { Metadata } from "next";
import Image from "next/image";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { ContactForm } from "@/components/ContactForm";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact T.D. Armstrong Law Firm, P.C. in Houston, Texas for a consultation.",
};

const mapSrc =
  "https://maps.google.com/maps?q=6200%20Savoy%20Drive%20Suite%20548%20Houston%20Texas%2077036&z=15&output=embed";

export default function ContactPage() {
  return (
    <>
      <section className="bg-offwhite">
        <div className="site-container grid items-end gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <div className="flex items-center gap-4">
              <span className="rule w-10" aria-hidden="true" />
              <SectionEyebrow>Contact</SectionEyebrow>
            </div>
            <h1 className="mt-6 font-serif text-5xl leading-[0.9] text-navy md:text-7xl">
              Call the office.
            </h1>
            <p className="mt-8 max-w-md text-base leading-8 text-td-muted">
              We are here for you. 24 hours a day, 7 days a week. Feel free to
              schedule a consultation.
            </p>
          </div>
          <div>
            <a
              href={site.phoneHref}
              className="block font-serif text-4xl leading-none text-bronze transition-colors hover:text-navy md:text-5xl"
            >
              {site.phone}
            </a>
            <p className="mt-4 eyebrow text-navy">{site.hours.note}</p>
            <p className="mt-6 text-sm leading-7 text-td-muted">
              {site.hours.weekday}
              <br />
              {site.hours.saturday}
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-[42vh] min-h-[280px] overflow-hidden">
        <Image
          src={photos.houstonSkyline.src}
          alt={photos.houstonSkyline.alt}
          fill
          className="photo object-cover"
          sizes="100vw"
          priority
        />
      </section>

      <section>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-navy px-6 py-14 text-white sm:px-10 lg:px-14 lg:py-16">
            <p className="eyebrow text-bronze">Get in touch</p>
            <dl className="mt-10 space-y-8">
              <div className="flex gap-4">
                <PhoneIcon className="text-bronze" />
                <div>
                  <dt className="eyebrow text-white/55">Phone</dt>
                  <dd className="mt-2">
                    <a href={site.phoneHref}>{site.phone}</a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <MailIcon className="text-bronze" />
                <div>
                  <dt className="eyebrow text-white/55">Email</dt>
                  <dd className="mt-2">
                    <a href={site.emailHref}>{site.email}</a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <PinIcon className="text-bronze" />
                <div>
                  <dt className="eyebrow text-white/55">Office</dt>
                  <dd className="mt-2">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <ClockIcon className="text-bronze" />
                <div>
                  <dt className="eyebrow text-white/55">Hours</dt>
                  <dd className="mt-2">
                    {site.hours.weekday}
                    <br />
                    {site.hours.saturday}
                    <br />
                    {site.hours.note}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
          <div id="message" className="bg-offwhite px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
            <h2 className="font-serif text-3xl text-navy md:text-4xl">Send us a message</h2>
            <p className="mt-3 text-sm leading-7 text-td-muted">
              Feel free to schedule a consultation.
            </p>
            <div className="mt-8">
              <ContactForm variant="light" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="site-container grid gap-8 section-y lg:grid-cols-[1.2fr_0.8fr]">
          <div className="min-h-[360px] overflow-hidden">
            <iframe
              title="T.D. Armstrong Law Firm office location"
              src={mapSrc}
              className="h-full min-h-[360px] w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col justify-end bg-cream px-8 py-10">
            <PinIcon className="text-bronze" />
            <p className="mt-6 font-serif text-2xl text-navy md:text-3xl">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
            <a
              href="#message"
              className="group mt-8 inline-flex items-center gap-3 eyebrow text-navy"
            >
              Write from here
              <span className="arrow-shift text-bronze" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
