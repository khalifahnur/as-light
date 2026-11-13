import type { LucideIcon } from "lucide-react";

/** Illustrative tile (swap for real product photography when available). */
export function ProductArt({
  icon: Icon,
  tone = 0,
}: {
  icon: LucideIcon;
  tone?: number;
}) {
  const tones = [
    "from-navy to-navy-2",
    "from-amber-soft to-white",
    "from-navy-2 to-navy",
    "from-mist to-white",
  ];
  const dark = tone % 4 === 0 || tone % 4 === 2;
  return (
    <div
      className={`relative grid h-40 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br ${tones[tone % 4]}`}
    >
      <div
        className={`${dark ? "grid-dots" : "grid-dots-dark"} absolute inset-0`}
      />
      <div className="absolute h-28 w-28 rounded-full bg-amber/30 blur-2xl" />
      <Icon
        className={`relative ${dark ? "text-amber" : "text-navy"}`}
        size={52}
        strokeWidth={1.4}
      />
    </div>
  );
}
