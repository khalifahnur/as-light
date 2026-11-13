"use client";
import { Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-amber";

/**
 * No backend yet: the form composes the enquiry and hands it to WhatsApp or the
 * visitor's email app. Swap for a server action / API route when ready.
 */
export function QuoteForm({ initialInterest = "" }: { initialInterest?: string }) {
  const [f, setF] = useState({ name: "", phone: "", email: "", interest: initialInterest, message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  const body = [
    `Name: ${f.name}`,
    `Phone: ${f.phone}`,
    f.email ? `Email: ${f.email}` : "",
    f.interest ? `Interested in: ${f.interest}` : "",
    "",
    f.message,
  ]
    .filter((l, i) => l !== "" || i === 4)
    .join("\n");

  const valid = f.name.trim() && f.phone.trim() && f.message.trim();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (valid) window.open(whatsappLink(`Quote request\n${body}`), "_blank", "noopener,noreferrer");
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Full name *</span>
          <input required value={f.name} onChange={set("name")} className={inputCls} placeholder="Jane Wanjiku" autoComplete="name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Phone *</span>
          <input required type="tel" value={f.phone} onChange={set("phone")} className={inputCls} placeholder="07XX XXX XXX" autoComplete="tel" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Email</span>
          <input type="email" value={f.email} onChange={set("email")} className={inputCls} placeholder="you@example.com" autoComplete="email" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">I&apos;m interested in</span>
          <input list="interests" value={f.interest} onChange={set("interest")} className={inputCls} placeholder="Choose or type…" />
          <datalist id="interests">
            {["LED Lighting", "Outdoor & Street Lighting", "Solar & Backup Power", "Switchgear & Protection", "Cables & Wiring", "Switches & Sockets", "Smart Controls", "Industrial & Motors", "Installation service"].map((o) => (
              <option key={o} value={o} />
            ))}
          </datalist>
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">Project details *</span>
        <textarea required rows={5} value={f.message} onChange={set("message")} className={`${inputCls} resize-none`} placeholder="Tell us what you need — quantities, location, timeline…" />
      </label>

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          disabled={!valid}
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-opacity disabled:opacity-50"
        >
          <MessageCircle size={17} /> Send via WhatsApp
        </button>
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent("Quote request")}&body=${encodeURIComponent(body)}`}
          className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3.5 text-sm font-semibold text-navy hover:border-navy"
        >
          <Mail size={17} /> Send via email
        </a>
      </div>
    </form>
  );
}
