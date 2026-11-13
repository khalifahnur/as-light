import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { categories, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-white/70">
      <div className="grid-dots pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-amber/10 blur-3xl" />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">{site.description}</p>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">Products</h3>
          <ul className="space-y-3 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/products#${c.slug}`} className="transition-colors hover:text-amber">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">Company</h3>
          <ul className="space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition-colors hover:text-amber">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white">Reach us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-amber" />
              <a href={`tel:${site.phoneHref}`} className="hover:text-amber">{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-amber" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-amber">{site.email}</a>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-amber" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row">
          <span>© {new Date().getFullYear()} {site.name} {site.descriptor}. All rights reserved.</span>
          <span>Lighting up Kenya, one project at a time.</span>
        </div>
      </div>
    </footer>
  );
}
