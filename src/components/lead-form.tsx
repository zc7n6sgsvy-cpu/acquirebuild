"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const layers = [
  { value: "software", label: "Software" },
  { value: "hardware", label: "Hardware" },
  { value: "both", label: "Both" },
] as const;

const timelines = [
  { value: "now", label: "Now" },
  { value: "month", label: "This month" },
  { value: "quarter", label: "This quarter" },
  { value: "scouting", label: "Scouting" },
] as const;

function mailtoHref(payload: {
  name: string;
  email: string;
  sellNow: string;
  layer: string;
  timeline: string;
}) {
  const subject = encodeURIComponent(`Asset request from ${payload.name}`);
  const body = encodeURIComponent(
    `Name: ${payload.name}\nEmail: ${payload.email}\nLayer: ${payload.layer}\nTimeline: ${payload.timeline}\n\nWhat I sell now:\n${payload.sellNow}`,
  );
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      sellNow: String(data.get("sellNow") ?? "").trim(),
      layer: String(data.get("layer") ?? "").trim(),
      timeline: String(data.get("timeline") ?? "").trim(),
      company_website: String(data.get("company_website") ?? ""),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Could not send.");
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("The form could not post. Opening email instead.");
      window.location.href = mailtoHref(payload);
    }
  }

  if (status === "sent") {
    return (
      <div
        className="border border-cyan/40 bg-cyan/5 px-6 py-10"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-3xl text-paper">Received.</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-steel">
          I will reply if the asset is a fit. Work starts after a commercial agreement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            className="field"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="field"
          />
        </Field>
      </div>

      <Field label="What you sell now" htmlFor="sellNow">
        <textarea
          id="sellNow"
          name="sellNow"
          required
          minLength={8}
          rows={4}
          className="field min-h-28 resize-y"
          placeholder="The product, the unit, the offer."
        />
      </Field>

      <fieldset>
        <legend className="label">Software / hardware / both</legend>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {layers.map((layer) => (
            <label
              key={layer.value}
              className="flex cursor-pointer items-center justify-center border border-white/10 px-2 py-3 text-[12px] tracking-[0.14em] text-steel uppercase has-[:checked]:border-cyan has-[:checked]:text-paper"
            >
              <input
                type="radio"
                name="layer"
                value={layer.value}
                required
                className="sr-only"
                defaultChecked={layer.value === "both"}
              />
              {layer.label}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Timeline" htmlFor="timeline">
        <select id="timeline" name="timeline" required className="field appearance-none" defaultValue="month">
          {timelines.map((item) => (
            <option key={item.value} value={item.value} className="bg-ink text-paper">
              {item.label}
            </option>
          ))}
        </select>
      </Field>

      <div className="hidden" aria-hidden>
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      {error ? (
        <p className="text-sm text-steel" role="alert">
          {error}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="border border-cyan bg-cyan/10 px-6 py-3 text-[12px] tracking-[0.18em] text-paper uppercase transition-colors hover:bg-cyan/20 disabled:opacity-50"
        >
          {status === "sending" ? "Sending" : "Send"}
        </button>
        <p className="max-w-sm text-xs leading-relaxed text-steel">
          Work starts after a commercial agreement. I use this to reply. Nothing else.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="label">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
