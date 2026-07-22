import { Monitor, Smartphone, Zap, Cpu, Wifi } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import Link from 'next/link';

export function Solutions() {
  return (
    <section className="w-full flex flex-col gap-6" id="solutions">
      <Reveal>
        <div className="glass-card p-8 md:p-12 text-center flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ecosystem Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
             Discover the sophisticated intersection of urban infrastructure and cutting-edge IoT technology.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
         <Reveal className="md:col-span-2 lg:col-span-3 glass-card p-8 relative overflow-hidden group block">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50/90 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-0 mesh-bg opacity-30 group-hover:opacity-50 transition-all"></div>
            <div className="relative z-20 h-full flex flex-col justify-between">
               <div className="flex items-center gap-3 mb-6">
                 <Monitor className="text-cyan" size={28} />
                 <h3 className="text-xl font-semibold text-gray-900">Central Management Software</h3>
               </div>
               <div>
                 <h4 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Real-time Analytics Dashboard</h4>
                 <p className="text-gray-600 mb-4">Monitor city-wide energy consumption, system health, and automated schedules from a single pane of glass.</p>
                 <Link href={"/software"} className="text-sm font-bold text-gray-900 hover:text-cyan transition-colors underline underline-offset-4">Learn More About Software</Link>
               </div>
            </div>
         </Reveal>

         <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-4 h-full">
            <Reveal delay={0.1} className="flex-1 glass-card p-8 flex flex-col justify-center relative overflow-hidden group">
               <Zap className="text-cyan mb-4" size={32} />
               <h4 className="text-lg font-bold text-gray-900 mb-2">Automations</h4>
               <p className="text-xs text-gray-500 uppercase tracking-tight font-bold">Intelligent scheduling</p>
            </Reveal>

            <Reveal delay={0.2} className="flex-1 bg-cyan border border-gray-200 rounded-[32px] p-8 flex flex-col justify-center relative overflow-hidden text-gray-900 shadow-sm">
               <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/50 px-3 py-1 rounded-full border border-gray-200 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-gray-900 animate-pulse"></div>
                  <span className="text-xs font-mono font-bold">Live Sync</span>
               </div>
               <Smartphone className="mb-4" size={32} />
               <h4 className="text-lg font-bold mb-2">Mobile First</h4>
               <p className="text-xs text-gray-700 uppercase tracking-tight font-bold">Field optimized</p>
            </Reveal>
         </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Reveal delay={0.1} className="glass-card p-8 group relative block overflow-hidden">
             <div className="flex items-center gap-3 mb-6 relative z-10">
               <Cpu className="text-cyan" size={28} />
               <h3 className="text-xl font-semibold text-gray-900">Intelligent Controllers</h3>
             </div>
             <div className="h-48 bg-gray-50 rounded-[24px] mb-6 flex items-center justify-center border border-gray-100 relative overflow-hidden z-10">
                <img src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop" alt="Smart Controller" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-multiply" />
                <Cpu size={64} className="text-white drop-shadow-md group-hover:text-cyan transition-colors relative z-20" />
             </div>
             <div className="relative z-10">
               <h4 className="text-xl font-bold text-gray-900 mb-2">Versatile Control Units</h4>
               <p className="text-gray-600 mb-4">A wide range of form factors engineered for diverse cabinet and luminaire integrations.</p>
               <Link href={"/hardware"} className="text-sm font-bold text-gray-900 hover:text-cyan transition-colors underline underline-offset-4">Explore Hardware</Link>
             </div>
          </Reveal>

          <Reveal delay={0.2} className="glass-card p-8 group relative block overflow-hidden">
             <div className="flex items-center gap-3 mb-6 relative z-10">
               <Wifi className="text-cyan" size={28} />
               <h3 className="text-xl font-semibold text-gray-900">Standardized Hubs</h3>
             </div>
             <div className="h-48 bg-gray-50 rounded-[24px] mb-6 flex items-center justify-center border border-gray-100 relative overflow-hidden z-10">
                <img src="https://images.unsplash.com/photo-1512401666750-f19b22bbf585?q=80&w=2070&auto=format&fit=crop" alt="Smart Hub" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-multiply" />
                <Wifi size={64} className="text-white drop-shadow-md group-hover:text-cyan transition-colors relative z-20" />
             </div>
             <div className="relative z-10">
               <h4 className="text-xl font-bold text-gray-900 mb-2">Zhaga & NEMA Standard</h4>
               <p className="text-gray-600 mb-4">Plug-and-play interoperability ensuring future-proof deployments across urban grids.</p>
               <Link href={"/hardware"} className="text-sm font-bold text-gray-900 hover:text-cyan transition-colors underline underline-offset-4">Explore Hardware</Link>
             </div>
          </Reveal>
      </div>
    </section>
  );
}
