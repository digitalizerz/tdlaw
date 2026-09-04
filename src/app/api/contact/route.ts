import { NextResponse } from "next/server";
import { practiceAreaOptions } from "@/lib/content";
import { site } from "@/lib/site";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  matter?: string;
  message?: string;
  company?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const matter = body.matter?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !phone || !matter || !message) {
    return NextResponse.json(
      { ok: false, error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }

  if (!practiceAreaOptions.includes(matter as (typeof practiceAreaOptions)[number])) {
    return NextResponse.json({ ok: false, error: "Please choose a valid matter." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "T.D. Armstrong Law Firm <onboarding@resend.dev>";

  if (apiKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website consultation request from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Matter: ${matter}`,
          "",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: `Unable to send your message. Please call ${site.phone}.` },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
