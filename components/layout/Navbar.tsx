"use client";
import { Mail, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { nav, site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* utility bar */}
      <div className="hidden bg-ink text-xs text-white/70 md:block">
        <div className="container-x flex items-center justify-between py-2">
          <span>{site.hours}</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phoneHref}`} className="flex items-center gap-2 hover:text-amber">
              <Phone size={13} /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-amber">
              <Mail size={13} /> {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-line bg-white/85 backdrop-blur-xl">
        <nav className="container-x flex h-[72px] items-center justify-between" aria-label="Main">
          <Logo />

          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active ? "bg-amber-soft text-navy" : "text-navy/70 hover:text-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber hover:text-ink md:inline-flex"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-navy md:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-line bg-white md:hidden">
            <ul className="container-x flex flex-col py-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-3.5 font-medium text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="flex gap-3 pt-4">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full bg-amber py-3 text-center text-sm font-semibold text-ink"
                >
                  Get a Quote
                </Link>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="grid h-12 w-12 place-items-center rounded-full border border-line text-navy"
                  aria-label="Call us"
                >
                  <Phone size={18} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
