# Mwangaza Power & Lighting

Marketing site for a Kenyan electrical, lighting and solar supplier. Built with
Next.js 16 (App Router), React 19, Tailwind CSS v4 and Motion.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where to edit things

| What | Where |
| --- | --- |
| Brand name, tagline, phone, WhatsApp, email, address, hours | `lib/site.ts` (`site`) — values marked `PLACEHOLDER` must be replaced |
| Product categories & example items | `lib/site.ts` (`categories`) |
| Services, sectors, "how it works" steps | `lib/site.ts` |
| Colours, fonts, animations | `app/globals.css` (`@theme`) + `app/layout.tsx` |
| Home page sections | `components/home/*` |

The quote form has no backend yet: it opens a pre-filled WhatsApp message or the
visitor's email app. Replace `components/ui/QuoteForm.tsx` with a server action or
API route when you want submissions stored.

Product tiles use illustrative icon art — drop in real photography when available.
