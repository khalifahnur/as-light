import { Headset, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safety & quality first",
    text: "We stock products from reputable manufacturers and recommend only what is right and safe for your installation.",
  },
  {
    icon: Wallet,
    title: "Fair, transparent pricing",
    text: "Clear quotations with no hidden extras — plus project pricing for contractors and bulk buyers.",
  },
  {
    icon: Sparkles,
    title: "Honest technical advice",
    text: "We size systems to your actual load, so you don't overspend on capacity you don't need.",
  },
  {
    icon: Headset,
    title: "Support that stays",
    text: "Reach us by phone or WhatsApp before, during and after the job. We pick up.",
  },
];

export function WhyUs() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Why choose us"
            title="Electrical expertise you can switch on and trust"
          >
            We built our business on getting the basics right: the right product, installed
            properly, at a fair price — and standing behind it.
          </SectionHeading>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.07}>
              <div className="h-full rounded-3xl border border-line bg-white p-7">
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-navy text-amber">
                  <r.icon size={22} />
                </span>
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
