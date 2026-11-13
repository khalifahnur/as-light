import type { Metadata } from "next";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductCatalog } from "@/components/ui/ProductCatalog";

export const metadata: Metadata = {
  title: "Products",
  description:
    "LED lighting, solar and backup power, switchgear, cables, switches and sockets, smart controls and industrial electrical equipment.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader eyebrow="Product catalogue" title={<>Quality electrical products, <span className="text-gradient">ready when you are.</span></>}>
        Browse our main ranges. Don&apos;t see the exact item? Ask — we source quickly.
      </PageHeader>
      <ProductCatalog />
      <div className="pb-4 pt-8">
        <CtaBand />
      </div>
    </>
  );
}
