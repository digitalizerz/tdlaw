import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { FacebookIcon } from "@/components/icons";
import { legalLinks, navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="site-container py-10 md:py-12">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <BrandLogo variant="white" />
          <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Footer">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="eyebrow text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={site.social.facebook}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-bronze hover:text-bronze"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={site.phoneHref}
            className="font-serif text-2xl text-white transition-colors hover:text-bronze md:text-3xl"
          >
            {site.phone}
          </a>
          <p className="eyebrow text-bronze">{site.hours.note}</p>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright © {site.name} {new Date().getFullYear()}
          </p>
          <div className="flex flex-wrap gap-6">
            {legalLinks
              .filter((link) =>
                ["/privacy-policy/", "/terms/"].includes(link.href),
              )
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="eyebrow hover:text-white"
                >
                  {link.href === "/privacy-policy/"
                    ? "Privacy Policy"
                    : "Terms of Service"}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
