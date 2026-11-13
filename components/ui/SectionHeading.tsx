import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p
        className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-amber" : "text-amber-deep"}`}
      >
        <span className="h-px w-8 bg-current" /> {eyebrow}
      </p>
      <h2
        className={`text-balance text-3xl font-bold leading-[1.1] sm:text-4xl md:text-[2.75rem] ${light ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/70" : "text-navy/65"}`}>
          {children}
        </p>
      )}
    </div>
  );
}
