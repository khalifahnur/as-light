import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-16 text-white md:py-24">
      <div className="grid-dots absolute inset-0 -z-10" />
      <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-amber/15 blur-3xl" />
      <div className="container-x">
        <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber">
          <span className="h-px w-8 bg-current" /> {eyebrow}
        </p>
        <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">{title}</h1>
        {children && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{children}</p>}
      </div>
    </section>
  );
}
