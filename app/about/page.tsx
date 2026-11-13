import { Eye, Handshake, Lightbulb, Target } from "lucide-react";
import type { Metadata } from "next";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { sectors, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description: `Learn about ${site.name} ${site.descriptor} — our story, values and commitment to quality electrical and lighting solutions in Kenya.`,
};

const values = [
  { icon: Target, title: "Mission", text: "To make safe, efficient and reliable power and lighting accessible to every home and business in Kenya." },
  { icon: Eye, title: "Vision", text: "To be the most trusted name in electrical and lighting supply — known for honest advice and lasting quality." },
  { icon: Handshake, title: "Integrity", text: "We recommend what you need, not what earns us most, and we stand behind everything we sell." },
  { icon: Lightbulb, title: "Efficiency", text: "Every recommendation is weighed against the long-term energy and cost savings it delivers." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About us" title={<>Why we are called <span className="text-gradient">Mwangaza.</span></>}>
        In Swahili, <em>mwangaza</em> means light and brightness — the simple promise behind
        everything we do.
      </PageHeader>

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">Power and lighting, made dependable.</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-navy/70">
              <p>
                {site.name} {site.descriptor} supplies and installs electrical, lighting and solar
                solutions for homes, businesses, institutions and industry across Kenya.
              </p>
              <p>
                We combine a broad product range with practical technical advice, so you get the
                right solution the first time — safe, efficient and built to last.
              </p>
              {/* TODO: add company history, founding year, licences & accreditations here */}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-navy p-8 text-white sm:p-10">
              <h3 className="font-display text-xl font-semibold text-amber">Who we serve</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {sectors.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-white/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07}>
              <div className="h-full rounded-3xl border border-line bg-white p-7">
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-amber-soft text-amber-deep">
                  <v.icon size={22} />
                </span>
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
