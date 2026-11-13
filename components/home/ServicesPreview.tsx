import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/site";

export function ServicesPreview() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Our services" title="More than a shop — a complete electrical partner">
            Design, supply, installation and maintenance handled by one accountable team.
          </SectionHeading>
          <Button href="/services" variant="dark">
            All services <ArrowRight size={16} />
          </Button>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.07}>
              <article className="h-full rounded-3xl bg-white p-7 shadow-[0_1px_0_rgba(14,23,48,0.04)] transition-shadow hover:shadow-[0_20px_40px_-24px_rgba(14,23,48,0.3)]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber text-ink">
                    <s.icon size={22} />
                  </span>
                  <span className="font-display text-sm font-semibold text-navy/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
