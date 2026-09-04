import Link from "next/link";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { site } from "@/lib/site";

type RequestConsultBandProps = {
  variant?: "trio" | "split";
  headline?: React.ReactNode;
  note?: string;
};

export function RequestConsultBand({
  variant = "trio",
  headline = (
    <>
      Start with a
      <span className="text-bronze"> strong defense.</span>
    </>
  ),
  note = "Feel free to schedule a consultation.",
}: RequestConsultBandProps) {
  const button = (
    <Link
      href="/contact/"
      className="group flex h-full min-h-[220px] items-center justify-center gap-5 px-8 py-12 text-white"
    >
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/50 text-xl transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
      <span className="eyebrow">Request a consultation</span>
    </Link>
  );

  const copy = (
    <div className="max-w-xl">
      <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">
        {headline}
      </h2>
      <p className="mt-4 text-white/70">{note}</p>
      <ul className="mt-8 space-y-3 text-sm text-white/80">
        <li className="flex items-center gap-3">
          <PhoneIcon className="size-5 text-bronze" />
          <a href={site.phoneHref}>{site.phone}</a>
        </li>
        <li className="flex items-center gap-3">
          <MailIcon className="size-5 text-bronze" />
          <a href={site.emailHref}>{site.email}</a>
        </li>
        <li className="flex items-start gap-3">
          <PinIcon className="size-5 text-bronze" />
          <span>
            {site.address.line1}, {site.address.line2}
          </span>
        </li>
      </ul>
    </div>
  );

  if (variant === "split") {
    return (
      <section className="bg-navy">
        <div className="site-container grid items-center gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-16">
          {copy}
          <div className="border border-white/35">{button}</div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="grid lg:grid-cols-[0.8fr_1.1fr_0.9fr]">
        <div className="relative min-h-[240px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/houston.jpg)" }}
            aria-hidden="true"
          />
        </div>
        <div className="bg-navy px-6 py-12 text-white sm:px-10 lg:px-12">{copy}</div>
        <div className="bg-bronze">{button}</div>
      </div>
    </section>
  );
}
