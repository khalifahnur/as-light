import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffd166" />
          <stop offset="1" stopColor="#ff9a00" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="#0e1730" />
      {/* rising sun / bulb dome */}
      <path d="M12 31a12 12 0 0 1 24 0z" fill="url(#lm-g)" />
      <rect x="10" y="33.5" width="28" height="3.2" rx="1.6" fill="url(#lm-g)" />
      {/* rays */}
      <g stroke="#ffd166" strokeWidth="2.4" strokeLinecap="round">
        <path d="M24 9.5v4.5" />
        <path d="M11.5 14.5l3.2 3.2" />
        <path d="M36.5 14.5l-3.2 3.2" />
        <path d="M6.5 25.5h4" />
        <path d="M41.5 25.5h-4" />
      </g>
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
      <LogoMark />
      <span className="leading-none">
        <span
          className={`block font-display text-xl font-bold tracking-tight ${light ? "text-white" : "text-navy"}`}
        >
          {site.name}
        </span>
        <span
          className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] ${light ? "text-amber" : "text-amber-deep"}`}
        >
          {site.descriptor}
        </span>
      </span>
    </Link>
  );
}
