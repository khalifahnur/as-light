import {
  Battery,
  Cable,
  Cpu,
  Lightbulb,
  PlugZap,
  ShieldCheck,
  Sun,
  ToggleRight,
  type LucideIcon,
} from "lucide-react";

/**
 * Single source of truth for brand + content.
 * TODO: replace every value marked "PLACEHOLDER" with real company details
 * before going live — they are NOT real numbers/addresses.
 */
export const site = {
  name: "Mwangaza",
  descriptor: "Power & Lighting",
  tagline: "Brighter spaces. Smarter power.",
  description:
    "Mwangaza supplies and installs quality LED lighting, solar, switchgear and electrical solutions for homes, businesses and industry across Kenya.",
  url: "https://mwangaza.example.co.ke", // PLACEHOLDER
  phone: "+254 700 000 000", // PLACEHOLDER
  phoneHref: "+254700000000", // PLACEHOLDER
  whatsapp: "254700000000", // PLACEHOLDER (international format, no +)
  email: "info@mwangaza.example.co.ke", // PLACEHOLDER
  address: "Nairobi, Kenya", // PLACEHOLDER — add street / building
  hours: "Mon – Fri 8:00 – 17:30 · Sat 9:00 – 14:00", // PLACEHOLDER
};

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  icon: LucideIcon;
  items: string[];
};

export const categories: Category[] = [
  {
    slug: "led-lighting",
    name: "LED Lighting",
    blurb: "Efficient indoor lighting for homes, offices, shops and warehouses.",
    icon: Lightbulb,
    items: [
      "LED bulbs & tubes",
      "Panel lights",
      "Downlights & spotlights",
      "High-bay & industrial",
      "Decorative & strip lighting",
    ],
  },
  {
    slug: "outdoor-street",
    name: "Outdoor & Street Lighting",
    blurb: "Weatherproof floodlights, street lights and security lighting.",
    icon: Sun,
    items: [
      "Floodlights",
      "Street lights",
      "Garden & bollard lights",
      "Solar street lights",
      "Security lighting",
    ],
  },
  {
    slug: "solar",
    name: "Solar & Backup Power",
    blurb: "Panels, inverters and batteries to cut bills and beat blackouts.",
    icon: Battery,
    items: [
      "Solar panels",
      "Hybrid inverters",
      "Lithium & gel batteries",
      "Charge controllers",
      "UPS & stabilisers",
    ],
  },
  {
    slug: "switchgear",
    name: "Switchgear & Protection",
    blurb: "Distribution boards and protection devices built for safety.",
    icon: ShieldCheck,
    items: [
      "Distribution boards",
      "MCBs, MCCBs & RCDs",
      "Isolators & contactors",
      "Surge protection",
      "Changeover switches",
    ],
  },
  {
    slug: "cables-wiring",
    name: "Cables & Wiring",
    blurb: "Quality cables, conduits and accessories for every installation.",
    icon: Cable,
    items: [
      "Twin & earth cable",
      "Single-core cable",
      "Armoured cable",
      "Conduits & trunking",
      "Cable glands & lugs",
    ],
  },
  {
    slug: "switches-sockets",
    name: "Switches & Sockets",
    blurb: "Modern wiring accessories with finishes to suit any interior.",
    icon: ToggleRight,
    items: [
      "Switches & dimmers",
      "13A sockets & USB",
      "Weatherproof outlets",
      "Cooker & shaver units",
      "Plates & fittings",
    ],
  },
  {
    slug: "smart-controls",
    name: "Smart Controls",
    blurb: "Sensors, timers and automation that save energy automatically.",
    icon: Cpu,
    items: [
      "Motion & daylight sensors",
      "Timers & photocells",
      "Smart switches",
      "Dimming controllers",
      "Energy meters",
    ],
  },
  {
    slug: "industrial",
    name: "Industrial & Motors",
    blurb: "Control gear and power equipment for plants and workshops.",
    icon: PlugZap,
    items: [
      "Motors & starters",
      "Control panels",
      "Generators & ATS",
      "Power factor correction",
      "Industrial plugs & sockets",
    ],
  },
];

export const services = [
  {
    title: "Electrical Installation",
    text: "Safe, code-compliant wiring and distribution for new builds, extensions and refurbishments.",
    icon: PlugZap,
    points: ["Residential & commercial", "Distribution boards & earthing", "Testing & certification"],
  },
  {
    title: "Lighting Design & Supply",
    text: "Layouts that look great and use less power — from a single showroom to an entire estate.",
    icon: Lightbulb,
    points: ["Lux-level planning", "LED retrofits", "Decorative & architectural"],
  },
  {
    title: "Solar PV & Backup Power",
    text: "Solar, batteries and inverters sized to your load, so the lights stay on when the grid doesn't.",
    icon: Sun,
    points: ["Hybrid & off-grid systems", "Solar street lighting", "UPS & generator changeover"],
  },
  {
    title: "Street & Outdoor Lighting",
    text: "Roads, compounds, car parks and perimeters lit safely and efficiently.",
    icon: ShieldCheck,
    points: ["Mains & solar options", "Photocell & timer control", "Poles & installation"],
  },
  {
    title: "Maintenance & Energy Audits",
    text: "Find where power is being wasted, then fix it — with ongoing support to keep it that way.",
    icon: Cpu,
    points: ["Load & lighting audits", "Preventive maintenance", "Fault finding & repair"],
  },
  {
    title: "Project Supply & Procurement",
    text: "Bulk supply for contractors, developers and facility managers, with project pricing.",
    icon: Cable,
    points: ["Bills of quantities", "Scheduled deliveries", "Technical product advice"],
  },
];

export const sectors = [
  "Homes & Apartments",
  "Offices & Retail",
  "Hotels & Restaurants",
  "Schools & Hospitals",
  "Factories & Warehouses",
  "Counties & Estates",
];

export const process = [
  { title: "Tell us what you need", text: "Call, WhatsApp or send a quote request with your plans or a simple description." },
  { title: "We assess & advise", text: "We recommend the right products and layout — and show the energy savings." },
  { title: "Supply & install", text: "Quality products delivered on schedule, installed by competent technicians." },
  { title: "Support after handover", text: "Testing, guidance and maintenance so your system keeps performing." },
];
