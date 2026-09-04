"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const LEAVE_MS = 300;

function isModifiedClick(event: MouseEvent) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
}

function shouldIgnore(anchor: HTMLAnchorElement) {
  if (anchor.target && anchor.target !== "_self") return true;
  if (anchor.hasAttribute("download")) return true;
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("#")) {
    return true;
  }
  return false;
}

export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const leaving = useRef(false);
  const [progress, setProgress] = useState<"idle" | "going" | "done">("idle");

  useEffect(() => {
    leaving.current = false;
    document.documentElement.classList.remove("is-leaving");
    setProgress((current) => (current === "going" ? "done" : current));
    const done = window.setTimeout(() => setProgress("idle"), 420);
    return () => window.clearTimeout(done);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (leaving.current) {
        event.preventDefault();
        return;
      }
      if (event.defaultPrevented || isModifiedClick(event)) return;

      const anchor = (event.target as Element | null)?.closest("a");
      if (!(anchor instanceof HTMLAnchorElement) || shouldIgnore(anchor)) return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      event.preventDefault();
      leaving.current = true;
      document.documentElement.classList.add("has-navigated", "is-leaving");
      setProgress("going");

      window.setTimeout(() => {
        router.push(`${url.pathname}${url.search}${url.hash}`);
      }, LEAVE_MS);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed top-0 left-0 z-[90] h-0.5 bg-bronze",
        progress === "idle" && "opacity-0",
        progress === "going" && "route-progress-run",
        progress === "done" && "route-progress-done",
      )}
      aria-hidden="true"
    />
  );
}
