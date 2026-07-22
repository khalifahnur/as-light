import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";


export default function page() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Reveal>
        <div className="glass-card flex flex-col md:flex-row items-stretch text-center md:text-left relative overflow-hidden h-[400px]">
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center items-center md:items-start z-10 bg-white/90 backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Pioneering Urban Infrastructure</h1>
            <p className="text-lg text-gray-600 max-w-lg">
              We are a technology company dedicated to transforming how cities manage their most ubiquitous asset: street lighting.
              Our mission is to provide open, scalable, and secure IoT solutions that bridge the gap between legacy infrastructure and smart city futures.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative min-h-[300px]">
             <img src="https://images.unsplash.com/photo-1542384701-c0e46e0eda04?q=80&w=2065&auto=format&fit=crop" alt="Smart City Infrastructure" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gray-900/10"></div>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <Reveal delay={0.1} className="glass-card p-10 bg-gray-900 text-white">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              We envision a world where urban lighting does more than just illuminate. It senses, communicates, and adapts. 
              By turning every streetlamp into a smart node, we unlock possibilities for environmental monitoring, traffic optimization, and unprecedented energy efficiency.
            </p>
         </Reveal>
         
         <Reveal delay={0.2} className="glass-card p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Open Standards</h2>
            <p className="text-gray-600 leading-relaxed">
              We reject vendor lock-in. Our hardware adheres to strict global standards like Zhaga and NEMA, and our software communicates via open APIs. 
              We believe municipalities should retain full control and flexibility over their infrastructure investments.
            </p>
         </Reveal>
      </div>

      {/* Render the Contact section here as the call to action */}
      <Contact />
    </div>
  );
}
