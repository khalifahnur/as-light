"use client";
import { ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

function Field({
  label,
  value,
  onChange,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  suffix: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
        {label}
      </span>
      <span className="flex items-center rounded-xl border border-white/15 bg-white/5 focus-within:border-amber">
        <input
          type="number"
          inputMode="decimal"
          min={0}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
          className="w-full bg-transparent px-4 py-3 text-white outline-none"
        />
        <span className="whitespace-nowrap pr-4 text-sm text-white/50">{suffix}</span>
      </span>
    </label>
  );
}

const fmt = (n: number) => Math.round(n).toLocaleString("en-KE");

export function SavingsCalculator() {
  const [qty, setQty] = useState(40);
  const [oldW, setOldW] = useState(60);
  const [newW, setNewW] = useState(9);
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(25);

  const oldKwhYr = (qty * oldW * hours * 365) / 1000;
  const newKwhYr = (qty * newW * hours * 365) / 1000;
  const savedKwh = Math.max(0, oldKwhYr - newKwhYr);
  const savedKes = savedKwh * rate;
  const pct = oldKwhYr > 0 ? (savedKwh / oldKwhYr) * 100 : 0;

  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 text-white md:py-28">
      <div className="grid-dots absolute inset-0 -z-10" />
      <div className="absolute -right-24 top-10 -z-10 h-96 w-96 rounded-full bg-amber/10 blur-3xl" />
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            light
            eyebrow="Savings calculator"
            title={
              <>
                See what switching to <span className="text-gradient">LED</span> could save you
              </>
            }
          >
            Enter your current lighting and get an instant estimate. Our team can then
            prepare an exact, no-obligation quote.
          </SectionHeading>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Field label="Number of lights" value={qty} onChange={setQty} suffix="pcs" />
            <Field label="Hours per day" value={hours} onChange={setHours} suffix="hrs" />
            <Field label="Current wattage" value={oldW} onChange={setOldW} suffix="W" />
            <Field label="LED wattage" value={newW} onChange={setNewW} suffix="W" />
            <div className="col-span-2">
              <Field label="Electricity cost" value={rate} onChange={setRate} suffix="KES / kWh" />
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm sm:p-10">
          <div className="flex items-center gap-2 text-sm font-semibold text-amber">
            <Calculator size={18} /> Estimated yearly saving
          </div>
          <p className="mt-3 font-display text-5xl font-bold sm:text-6xl" aria-live="polite">
            KES {fmt(savedKes)}
          </p>
          <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber to-[#ff8a00] transition-all duration-500"
              style={{ width: `${Math.min(100, pct)}%` }}
            />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-white/50">Energy saved</p>
              <p className="font-display text-xl font-semibold">{fmt(savedKwh)} kWh/yr</p>
            </div>
            <div>
              <p className="text-white/50">Less power used</p>
              <p className="font-display text-xl font-semibold">{Math.round(pct)}%</p>
            </div>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-white/45">
            Estimate only — based on the figures you enter and excludes product cost,
            installation and tariff changes. Actual savings vary.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-deep"
          >
            Get an exact quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
