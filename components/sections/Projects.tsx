import { MapPin, ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import Link from 'next/link';


const projects = [
  {
    city: 'Brussels',
    country: 'Belgium',
    lamps: '85,000',
    network: 'NB-IoT',
    image: 'https://images.unsplash.com/photo-1572978013898-d10bc93dbd23?q=80&w=2070&auto=format&fit=crop'
  },
  {
    city: 'Washington D.C.',
    country: 'USA',
    lamps: '75,000',
    network: 'NEMA Controllers',
    image: 'https://images.unsplash.com/photo-1617581629397-a72507c3de9e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    city: 'Santiago',
    country: 'Chile',
    lamps: '70,000',
    network: 'LoRaWAN',
    image: 'https://images.unsplash.com/photo-1587326442651-7f833b9e4a3c?q=80&w=2070&auto=format&fit=crop'
  }
];

export function Projects() {
  return (
    <section className="w-full flex flex-col gap-4" id="projects">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Reveal className="col-span-1 md:col-span-3 glass-card p-8 flex flex-col md:flex-row justify-between items-center gap-6">
             <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Global Implementation</h2>
                <p className="text-gray-600 max-w-xl">Connecting cities worldwide with intelligent, sustainable infrastructure. Explore our large-scale deployments.</p>
             </div>
             <Link href={"/projects"} className="px-6 py-3 bg-white border border-gray-200 text-gray-900 rounded-full font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors">
                View All <ArrowRight size={18} />
             </Link>
          </Reveal>

          {projects.map((p, i) => (
             <div key={i} className="flex h-full">
               <Reveal delay={i * 0.1} className="glass-card overflow-hidden group flex flex-col justify-between w-full">
                  <div className="h-48 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                     <img src={p.image} alt={p.city} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute bottom-4 left-4 z-20">
                        <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{p.city}</h3>
                        <p className="text-xs font-mono text-cyan uppercase tracking-widest drop-shadow-md">{p.country}</p>
                     </div>
                  </div>
                  <div className="p-6">
                     <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-cyan animate-pulse"></div>
                        <span className="text-xs font-mono font-bold text-gray-900 uppercase">Online & Active</span>
                     </div>
                     <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3 text-gray-600">
                           <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 shrink-0"><MapPin size={14} className="text-gray-400"/></div>
                           <span className="text-sm font-medium">{p.lamps} smart streetlamps</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-600">
                           <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 shrink-0"><MapPin size={14} className="text-gray-400"/></div>
                           <span className="text-sm font-medium">{p.network} connectivity</span>
                        </li>
                     </ul>
                     <Link href={"/projects"} className="block text-center w-full py-3 rounded-2xl bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 transition-colors font-bold text-sm">
                        View Details
                     </Link>
                  </div>
               </Reveal>
             </div>
          ))}
       </div>
    </section>
  );
}
