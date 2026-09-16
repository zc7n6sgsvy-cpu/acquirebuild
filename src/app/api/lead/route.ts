import { NextResponse } from "next/server";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const layers = new Set(["software", "hardware", "both"]);
const timelines = new Set(["now", "month", "quarter", "scouting"]);

type Lead = {
  name: string;
  email: string;
  sellNow: string;
  layer: string;
  timeline: string;
  company_website?: string;
};

function parseLead(body: unknown): { lead?: Lead; error?: string } {
  if (!body || typeof body !== "object") {
    return { error: "Invalid payload." };
  }
  const data = body as Record<string, unknown>;
  const lead: Lead = {
    name: String(data.name ?? "").trim(),
    email: String(data.email ?? "").trim(),
    sellNow: String(data.sellNow ?? "").trim(),
    layer: String(data.layer ?? "").trim(),
    timeline: String(data.timeline ?? "").trim(),
    company_website: String(data.company_website ?? ""),
  };
  if (lead.company_website) {
    return { lead };
  }
  if (lead.name.length < 2) return { error: "Name is required." };
  if (!emailRe.test(lead.email)) return { error: "A real email is required." };
  if (lead.sellNow.length < 8) return { error: "Tell me what you sell now." };
  if (!layers.has(lead.layer)) return { error: "Pick software, hardware, or both." };
  if (!timelines.has(lead.timeline)) return { error: "Pick a timeline." };
  return { lead };
}

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const parsed = parseLead(json);
  if (parsed.error) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }
  const lead = parsed.lead!;
  if (lead.company_website) {
    return NextResponse.json({ ok: true });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";

  // TODO: wire the live form backend (Resend → LEADS_TO) when keys are in Vercel env.
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_TO ?? process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  if (key && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Acquire Build <noreply@acquirebuild.com>",
        to,
        reply_to: lead.email,
        subject: `Asset request from ${lead.name}`,
        text: [
          `Name: ${lead.name}`,
          `Email: ${lead.email}`,
          `Layer: ${lead.layer}`,
          `Timeline: ${lead.timeline}`,
          `IP: ${ip}`,
          "",
          "What they sell now:",
          lead.sellNow,
        ].join("\n"),
      }),
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error("lead email failed", detail);
      return NextResponse.json(
        { error: "Could not deliver. Use email." },
        { status: 502 },
      );
    }
  } else {
    console.info("lead.accepted", {
      name: lead.name,
      email: lead.email,
      layer: lead.layer,
      timeline: lead.timeline,
      sellNow: lead.sellNow,
      ip,
    });
  }

  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
