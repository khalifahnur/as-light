import { Benefits } from "@/components/sections/Benefits";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Solutions } from "@/components/sections/Solutions";


export default function page() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Hero />
      <Solutions />
      <Benefits />
      <Projects />
      <Contact />
    </div>
  );
}
