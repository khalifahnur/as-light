import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="font-display text-8xl font-bold text-gradient">404</p>
        <h1 className="mt-4 text-3xl font-bold">This page has lost power.</h1>
        <p className="mt-3 text-navy/60">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Back home</Button>
          <Button href="/products" variant="outline">Browse products</Button>
        </div>
      </div>
    </section>
  );
}
