import { Check } from "lucide-react";
import type { Metadata } from "next";
import { CtaBand } from "@/components/home/CtaBand";
import { Process } from "@/components/home/Process";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Electrical installation, lighting design, solar PV, street lighting, maintenance and project supply across Kenya.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title={<>Design, supply and install — <span className="text-gradient">done right.</span></>}>
        One accountable team from the first drawing to the final switch-on.
      </PageHeader>

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.07}>
              <article className="flex h-full flex-col gap-5 rounded-3xl border border-line bg-white p-8 sm:flex-row">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-amber text-ink">
                  <s.icon size={26} />
                </span>
                <div>
                  <h2 className="text-xl font-semibold">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.text}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-navy/80">
                        <Check size={15} className="shrink-0 text-amber-deep" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Process />
      <CtaBand />
    </>
  );
}
