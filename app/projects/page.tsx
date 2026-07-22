import { Reveal } from '@/components/ui/Reveal';
import { MapPin, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    city: 'Brussels',
    country: 'Belgium',
    lamps: '85,000',
    network: 'NB-IoT',
    savings: '45%',
    image: 'https://images.unsplash.com/photo-1572978013898-d10bc93dbd23?q=80&w=2070&auto=format&fit=crop',
    description: 'A massive municipal rollout converting legacy sodium lamps to intelligent LEDs, resulting in a dramatic reduction in the carbon footprint and improved lighting uniformity across historic districts.'
  },
  {
    city: 'Washington D.C.',
    country: 'USA',
    lamps: '75,000',
    network: 'NEMA Controllers',
    savings: '50%',
    image: 'https://images.unsplash.com/photo-1617581629397-a72507c3de9e?q=80&w=2070&auto=format&fit=crop',
    description: 'Implementing NEMA-based controllers to rapidly retrofit the capital\'s infrastructure. Integrated with existing city management dashboards for seamless operational transition.'
  },
  {
    city: 'Santiago',
    country: 'Chile',
    lamps: '70,000',
    network: 'LoRaWAN',
    savings: '42%',
    image: 'https://images.unsplash.com/photo-1587326442651-7f833b9e4a3c?q=80&w=2070&auto=format&fit=crop',
    description: 'Leveraging LoRaWAN over vast geographical areas to overcome challenging topographies. The project introduced smart dimming protocols tailored to varied neighborhood traffic patterns.'
  },
  {
    city: 'Brasov',
    country: 'Romania',
    lamps: '22,000',
    network: 'LTE-M',
    savings: '48%',
    image: 'https://images.unsplash.com/photo-1588698547481-2c062c3f81e8?q=80&w=2070&auto=format&fit=crop',
    description: 'Our home city acts as a living laboratory. Complete integration of street lighting with environmental sensors to monitor air quality in real-time near the Carpathian mountains.'
  }
];

export default function page() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Reveal>
        <div className="glass-card p-10 md:p-16 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Global Case Studies</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore how cities worldwide are leveraging our technology to reduce emissions, save millions in energy costs, and build safer urban environments.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6">
        {caseStudies.map((project, idx) => (
           <Reveal delay={idx * 0.1} key={idx} className="glass-card overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 h-64 md:h-auto relative">
                 <img src={project.image} alt={project.city} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-900/60 to-transparent"></div>
                 <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-1 drop-shadow-md">{project.city}</h3>
                    <p className="text-cyan font-mono text-sm tracking-widest uppercase drop-shadow-sm">{project.country}</p>
                 </div>
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                 <div>
                    <p className="text-gray-600 text-lg mb-8">{project.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                       <div>
                          <div className="text-xs text-gray-400 font-mono uppercase mb-1">Scale</div>
                          <div className="font-bold text-gray-900">{project.lamps} nodes</div>
                       </div>
                       <div>
                          <div className="text-xs text-gray-400 font-mono uppercase mb-1">Network</div>
                          <div className="font-bold text-gray-900">{project.network}</div>
                       </div>
                       <div>
                          <div className="text-xs text-gray-400 font-mono uppercase mb-1">Savings</div>
                          <div className="font-bold text-cyan text-xl">{project.savings}</div>
                       </div>
                    </div>
                 </div>
                 <button className="self-start px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-900 font-bold text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors">
                    Read Full Study <ExternalLink size={16} />
                 </button>
              </div>
           </Reveal>
        ))}
      </div>
    </div>
  );
}
