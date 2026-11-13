import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site, whatsappLink } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="container-x">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber via-[#ffc83d] to-[#ff9a00] p-8 text-ink sm:p-12 lg:p-16">
        <div className="grid-dots-dark absolute inset-0 -z-10 opacity-60" />
        <div className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Ready to light up your next project?
            </h2>
            <p className="mt-3 text-lg text-ink/75">
              Tell us what you need and we&apos;ll come back with a clear, no-obligation quote.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:shrink-0 lg:flex-nowrap">
            <Button href="/contact" variant="dark">
              Request a quote
            </Button>
            <Button
              href={whatsappLink("Hello, I'd like a quote for a project.")}
              external
              variant="outline"
              className="border-ink/30 text-ink hover:bg-white/60"
            >
              <MessageCircle size={16} /> WhatsApp
            </Button>
            <Button href={`tel:${site.phoneHref}`} external variant="outline" className="border-ink/30 text-ink hover:bg-white/60">
              <Phone size={16} /> Call now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
