"use client";

import { useState } from "react";
import { practiceAreaOptions } from "@/lib/content";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  variant?: "bronze" | "light";
  className?: string;
};

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ variant = "bronze", className }: ContactFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          matter: data.get("matter"),
          message: data.get("message"),
          company: data.get("company"),
        }),
      });
      const payload = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Unable to send your message.");
      }

      form.reset();
      setState("success");
      setMessage("Thank you. We received your message and will be in touch.");
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please call 713.265.8834.",
      );
    }
  }

  const fieldClass = variant === "bronze" ? "field-bronze" : "field-light";

  return (
    <form onSubmit={onSubmit} className={cn("space-y-4", className)} noValidate>
      <label className="sr-only" htmlFor="company">
        Company
      </label>
      <input
        id="company"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Name</span>
          <input className={fieldClass} name="name" placeholder="Name" required />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input
            className={fieldClass}
            name="email"
            type="email"
            placeholder="Email"
            required
          />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Phone</span>
        <input className={fieldClass} name="phone" type="tel" placeholder="Phone" required />
      </label>
      <label className="block">
        <span className="sr-only">Matter / Practice Area</span>
        <select className={fieldClass} name="matter" defaultValue="" required>
          <option value="" disabled>
            Matter / Practice Area
          </option>
          {practiceAreaOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="sr-only">How can we help?</span>
        <textarea
          className={cn(fieldClass, "min-h-32 resize-y")}
          name="message"
          placeholder="How can we help?"
          required
        />
      </label>
      <button
        type="submit"
        disabled={state === "submitting"}
        className="group flex w-full items-center justify-between bg-navy px-5 py-4 text-white disabled:opacity-70"
      >
        <span className="eyebrow">
          {state === "submitting" ? "Sending" : "Send Message"}
        </span>
        <span className="arrow-shift text-bronze" aria-hidden="true">
          →
        </span>
      </button>
      {message ? (
        <p
          className={cn(
            "text-sm leading-6",
            state === "success" ? "text-navy" : "text-navy",
          )}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
