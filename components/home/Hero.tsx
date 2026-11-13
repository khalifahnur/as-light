import { ArrowRight, BadgeCheck, Truck, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const points = [
  { icon: BadgeCheck, label: "Quality-assured brands" },
  { icon: Wrench, label: "Supply + professional install" },
  { icon: Zap, label: "Energy-saving by design" },
  { icon: Truck, label: "Delivery across Kenya" },
];

function LampArt() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="animate-glow absolute inset-[8%] rounded-full bg-amber/25 blur-3xl" />
      <div className="absolute inset-[22%] rounded-full bg-amber/20 blur-2xl" />
      <svg viewBox="0 0 400 400" className="animate-float relative h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="bulb" cx="50%" cy="45%" r="55%">
            <stop offset="0" stopColor="#fff6d6" />
            <stop offset="0.55" stopColor="#ffd166" />
            <stop offset="1" stopColor="#ffb400" />
          </radialGradient>
          <linearGradient id="cap" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#3a4a7a" />
            <stop offset="0.5" stopColor="#5b6fa8" />
            <stop offset="1" stopColor="#2a3866" />
          </linearGradient>
        </defs>
        {/* cord */}
        <path d="M200 0v92" stroke="#5b6fa8" strokeWidth="3" />
        {/* cap */}
        <rect x="170" y="92" width="60" height="46" rx="8" fill="url(#cap)" />
        <rect x="170" y="108" width="60" height="4" fill="#0e1730" opacity=".5" />
        <rect x="170" y="122" width="60" height="4" fill="#0e1730" opacity=".5" />
        {/* glass */}
        <path
          d="M158 150c0-16 18-24 42-24s42 8 42 24c0 22 38 42 38 92 0 52-36 88-80 88s-80-36-80-88c0-50 38-70 38-92z"
          fill="url(#bulb)"
        />
        {/* filament */}
        <path
          d="M178 300v-48c0-14 10-14 14-4l8 16 8-16c4-10 14-10 14 4v48"
          fill="none"
          stroke="#e59a00"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity=".85"
        />
        {/* highlight */}
        <path d="M150 232c4-30 18-46 34-58" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity=".55" fill="none" />
        {/* rays */}
        <g stroke="#ffd166" strokeWidth="5" strokeLinecap="round" opacity=".8">
          <path d="M48 220h30" />
          <path d="M322 220h30" />
          <path d="M72 130l24 18" />
          <path d="M328 130l-24 18" />
          <path d="M82 306l26-14" />
          <path d="M318 306l-26-14" />
        </g>
      </svg>
      <div className="absolute -left-2 bottom-10 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur-md sm:block">
        <p className="text-[11px] uppercase tracking-widest text-amber">LED retrofit</p>
        <p className="font-display text-lg font-semibold">Up to 80% less energy</p>
      </div>
      <div className="absolute -right-2 top-28 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur-md sm:block">
        <p className="text-[11px] uppercase tracking-widest text-amber">Solar-ready</p>
        <p className="font-display text-lg font-semibold">Power through outages</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div className="grid-dots absolute inset-0 -z-10" />
      <div className="absolute -left-40 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-navy-2 blur-3xl" />
      <div className="absolute -right-32 -top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-amber/10 blur-3xl" />

      <div className="container-x grid items-center gap-12 pb-20 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-24">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
            Lighting · Solar · Electrical
          </p>
          <h1 className="text-[2.6rem] font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
            Brighter spaces.
            <br />
            <span className="text-gradient">Smarter power.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            {site.name} supplies and installs quality LED lighting, solar systems and electrical
            equipment for homes, businesses and industry across Kenya — with honest advice and
            dependable after-sales support.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact">
              Request a free quote <ArrowRight size={16} />
            </Button>
            <Button href="/products" variant="ghost-light">
              Browse products
            </Button>
          </div>
        </div>
        <LampArt />
      </div>

      <div className="border-t border-white/10 bg-white/[0.03]">
        <ul className="container-x grid grid-cols-2 gap-x-6 gap-y-4 py-6 lg:grid-cols-4">
          {points.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-sm text-white/80">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-amber/15 text-amber">
                <Icon size={17} />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
