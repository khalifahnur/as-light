"use client";
import { Check, MessageCircle, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductArt } from "@/components/ui/ProductArt";
import { categories, whatsappLink } from "@/lib/site";

export function ProductCatalog() {
  const [active, setActive] = useState<string>("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .map((c, i) => ({ c, i }))
      .filter(({ c }) => active === "all" || c.slug === active)
      .filter(
        ({ c }) =>
          !q ||
          c.name.toLowerCase().includes(q) ||
          c.blurb.toLowerCase().includes(q) ||
          c.items.some((it) => it.toLowerCase().includes(q)),
      );
  }, [active, query]);

  return (
    <div className="container-x py-12 md:py-16">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div role="tablist" aria-label="Product categories" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-wrap lg:px-0">
          {[{ slug: "all", name: "All" }, ...categories].map((c) => (
            <button
              key={c.slug}
              role="tab"
              aria-selected={active === c.slug}
              onClick={() => setActive(c.slug)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === c.slug
                  ? "border-navy bg-navy text-white"
                  : "border-line bg-white text-navy/70 hover:border-navy/40"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
        <label className="relative block lg:w-72">
          <span className="sr-only">Search products</span>
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search e.g. floodlight, MCB…"
            className="w-full rounded-full border border-line bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-amber"
          />
        </label>
      </div>

      {visible.length === 0 ? (
        <div className="mt-16 rounded-3xl border border-dashed border-line bg-white p-12 text-center">
          <p className="font-display text-xl font-semibold">No matches for “{query}”</p>
          <p className="mt-2 text-navy/60">
            We stock far more than we list here — ask us and we&apos;ll source it.
          </p>
          <a
            href={whatsappLink(`Hello, do you have: ${query}?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink"
          >
            <MessageCircle size={16} /> Ask on WhatsApp
          </a>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map(({ c, i }) => (
            <article
              key={c.slug}
              id={c.slug}
              className="flex scroll-mt-28 flex-col rounded-3xl border border-line bg-white p-5 transition-shadow hover:shadow-[0_24px_48px_-28px_rgba(14,23,48,0.35)]"
            >
              <ProductArt icon={c.icon} tone={i} />
              <h2 className="mt-5 text-xl font-semibold">{c.name}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-navy/60">{c.blurb}</p>
              <ul className="mt-5 space-y-2.5 border-t border-line pt-5 text-sm">
                {c.items.map((it) => (
                  <li key={it} className="flex items-center gap-2.5 text-navy/80">
                    <Check size={15} className="shrink-0 text-amber-deep" /> {it}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(`Hello, I'd like a quote for ${c.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber hover:text-ink"
              >
                <MessageCircle size={16} /> Request a quote
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
