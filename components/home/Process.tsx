import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process, sectors } from "@/lib/site";

export function Process() {
  return (
    <section className="container-x py-20 md:py-28">
      <SectionHeading center eyebrow="How it works" title="From first call to final switch‑on" />
      <ol className="mt-14 grid gap-6 md:grid-cols-4">
        {process.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <li className="relative list-none">
              <div className="mb-5 flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-navy font-display text-lg font-bold text-amber">
                  {i + 1}
                </span>
                {i < process.length - 1 && (
                  <span className="hidden h-px grow border-t border-dashed border-navy/25 md:block" />
                )}
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">{p.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>

      <div className="mt-20 overflow-hidden rounded-3xl border border-line bg-white py-5">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.22em] text-navy/40">
          Serving every kind of space
        </p>
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 gap-12 whitespace-nowrap pr-12">
            {[...sectors, ...sectors].map((s, i) => (
              <span key={i} className="flex items-center gap-12 font-display text-xl font-semibold text-navy/70">
                {s} <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              </span>
            ))}
          </div>
          <div aria-hidden="true" className="animate-marquee flex shrink-0 gap-12 whitespace-nowrap pr-12">
            {[...sectors, ...sectors].map((s, i) => (
              <span key={i} className="flex items-center gap-12 font-display text-xl font-semibold text-navy/70">
                {s} <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
