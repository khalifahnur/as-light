import { Reveal } from '@/components/ui/Reveal';
import { Shield, Zap, Wifi, Lightbulb, Map, Wind, Sprout } from 'lucide-react';

export default function page() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Reveal>
        <div className="glass-card flex flex-col md:flex-row items-stretch text-center md:text-left overflow-hidden h-[400px]">
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center items-center md:items-start z-10 bg-white/90 backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Smart Street Lighting Solutions</h1>
            <p className="text-lg text-gray-600 max-w-lg">
              We provide end-to-end solutions for intelligent urban illumination. By upgrading your city's street lighting, you create a foundation for IoT services, energy efficiency, and a sustainable future.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative min-h-[300px]">
             <div className="absolute inset-0 bg-gray-900/20 z-10"></div>
             <iframe 
                src="https://player.vimeo.com/video/517088514?background=1&autoplay=1&loop=1&byline=0&title=0"
                allow="autoplay; fullscreen"
                className="absolute inset-0 w-[150%] h-[150%] -top-[25%] -left-[25%] pointer-events-none object-cover"
                style={{ border: 'none' }}
             />
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Reveal delay={0.1} className="glass-card p-8 flex flex-col gap-4">
          <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center text-gray-900">
            <Zap size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Energy Efficiency</h3>
          <p className="text-gray-600">Adaptive dimming and precise scheduling reduce energy consumption by up to 60% compared to traditional LED solutions without smart controls.</p>
        </Reveal>
        
        <Reveal delay={0.2} className="glass-card p-8 flex flex-col gap-4">
          <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center text-gray-900">
            <Wind size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Environmental Monitoring</h3>
          <p className="text-gray-600">Integrate air quality, noise, and temperature sensors to gather actionable environmental data across the urban landscape.</p>
        </Reveal>

        <Reveal delay={0.3} className="glass-card p-8 flex flex-col gap-4">
          <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center text-gray-900">
            <Shield size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Public Safety</h3>
          <p className="text-gray-600">Motion-triggered lighting enhances visibility for pedestrians and vehicles, adapting to real-time traffic conditions.</p>
        </Reveal>

        <Reveal delay={0.4} className="glass-card p-8 flex flex-col gap-4">
          <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center text-gray-900">
            <Wifi size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">IoT Connectivity Backbone</h3>
          <p className="text-gray-600">Transform streetlights into communication nodes. Our solutions support NB-IoT, LoRaWAN, and LTE-M networks.</p>
        </Reveal>

        <Reveal delay={0.5} className="glass-card p-8 flex flex-col gap-4">
          <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center text-gray-900">
            <Lightbulb size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Asset Management</h3>
          <p className="text-gray-600">Digital twin capabilities and predictive maintenance reduce truck rolls and ensure maximum system uptime.</p>
        </Reveal>

        <Reveal delay={0.6} className="glass-card p-8 flex flex-col gap-4">
          <div className="w-12 h-12 bg-cyan/20 rounded-2xl flex items-center justify-center text-gray-900">
            <Map size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Smart Parking Integration</h3>
          <p className="text-gray-600">Use elevated vantage points for parking availability sensors, guiding drivers and reducing congestion.</p>
        </Reveal>
      </div>
      
      <Reveal className="glass-card p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gray-900 text-white mt-4">
         <div>
            <h3 className="text-2xl font-bold mb-2">Ready to modernize?</h3>
            <p className="text-gray-400">Discover how quickly your city can achieve ROI through smart lighting.</p>
         </div>
         <div className="flex items-center gap-4">
            <Sprout size={32} className="text-cyan" />
            <div className="text-right">
               <div className="text-xl font-bold text-cyan">Sustainable Future</div>
               <div className="text-sm text-gray-400">Carbon offset programs available</div>
            </div>
         </div>
      </Reveal>
    </div>
  );
}
