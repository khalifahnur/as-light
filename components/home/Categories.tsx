import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/lib/site";

export function Categories() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading eyebrow="What we supply" title="Everything you need, from one trusted supplier">
          From a single bulb to a full distribution board — find what your project needs.
        </SectionHeading>
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline-offset-4 hover:underline"
        >
          View full catalogue <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c, i) => (
          <Reveal key={c.slug} delay={(i % 4) * 0.06}>
            <Link
              href={`/products#${c.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber hover:shadow-[0_20px_40px_-20px_rgba(14,23,48,0.25)]"
            >
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-amber-soft text-amber-deep transition-colors group-hover:bg-amber group-hover:text-ink">
                <c.icon size={22} />
              </span>
              <h3 className="text-lg font-semibold">{c.name}</h3>
              <p className="mt-2 grow text-sm leading-relaxed text-navy/60">{c.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy">
                Explore <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
