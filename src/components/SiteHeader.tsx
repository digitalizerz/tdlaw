"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

function MenuDots({ open }: { open: boolean }) {
  return (
    <span className="grid grid-cols-3 gap-1" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, index) => (
        <span
          key={index}
          className={cn(
            "h-1 w-1 rounded-full bg-bronze transition-transform duration-300",
            open && "scale-75",
          )}
        />
      ))}
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/95 backdrop-blur-[2px] transition-shadow duration-300",
        scrolled ? "border-bronze/20 shadow-[0_1px_0_rgba(11,22,44,0.04)]" : "border-transparent",
      )}
    >
      <div className="site-container grid h-[78px] grid-cols-[1fr_auto] items-center gap-6 md:h-[88px] lg:grid-cols-[1fr_auto_1fr]">
        <BrandLogo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "eyebrow relative py-2 text-navy transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-bronze after:transition-transform after:duration-300 hover:after:scale-x-100",
                  active && "after:scale-x-100",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center justify-end gap-5">
          <a
            href={site.phoneHref}
            className="hidden eyebrow text-bronze transition-colors hover:text-navy xl:inline"
          >
            {site.phone}
          </a>
          <span className="hidden h-11 w-11 items-center justify-center lg:inline-flex" aria-hidden="true">
            <MenuDots open={false} />
          </span>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <MenuDots open={open} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-bronze/20 bg-offwhite lg:hidden"
      >
        <nav className="site-container flex flex-col py-6" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between border-b border-bronze/25 py-4 eyebrow text-navy"
            >
              {link.label}
              <span className="text-bronze" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
          <a href={site.phoneHref} className="py-4 eyebrow text-bronze">
            {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
