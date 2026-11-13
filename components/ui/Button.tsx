import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "ghost-light";

const styles: Record<Variant, string> = {
  primary:
    "bg-amber text-ink shadow-[0_8px_24px_-8px_rgba(255,180,0,0.7)] hover:bg-amber-deep",
  dark: "bg-navy text-white hover:bg-navy-2",
  outline: "border border-navy/20 text-navy hover:border-navy hover:bg-white",
  "ghost-light": "border border-white/25 text-white hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${styles[variant]} ${className}`;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
