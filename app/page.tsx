import { Categories } from "@/components/home/Categories";
import { CtaBand } from "@/components/home/CtaBand";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { SavingsCalculator } from "@/components/home/SavingsCalculator";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyUs } from "@/components/home/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <SavingsCalculator />
      <WhyUs />
      <ServicesPreview />
      <Process />
      <CtaBand />
    </>
  );
}
