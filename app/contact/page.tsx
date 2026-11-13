import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { QuoteForm } from "@/components/ui/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & quotes",
  description: `Request a quote or speak to ${site.name}. Call, WhatsApp or email — we respond quickly.`,
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const interest = typeof sp.interest === "string" ? sp.interest : "";

  const info = [
    { icon: Phone, label: "Call us", value: site.phone, href: `tel:${site.phoneHref}` },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Visit", value: site.address },
    { icon: Clock, label: "Hours", value: site.hours },
  ];

  return (
    <>
      <PageHeader eyebrow="Contact" title={<>Let&apos;s talk about <span className="text-gradient">your project.</span></>}>
        Request a free quote — we typically respond the same working day.
      </PageHeader>

      <section className="container-x py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-line bg-white p-6 sm:p-10">
            <h2 className="mb-6 text-2xl font-bold">Request a quote</h2>
            <QuoteForm initialInterest={interest} />
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl bg-navy p-8 text-white">
              <h2 className="font-display text-xl font-semibold text-amber">Get in touch</h2>
              <ul className="mt-6 space-y-6">
                {info.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-amber">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50">{label}</p>
                      {href ? (
                        <a href={href} className="break-all font-medium hover:text-amber">{value}</a>
                      ) : (
                        <p className="font-medium">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-line bg-amber-soft p-6 text-sm leading-relaxed text-navy/80">
              <strong className="font-semibold text-navy">Need it fast?</strong>{" "}
              Message us on WhatsApp with a photo or a list — it&apos;s the quickest way to get a price.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
