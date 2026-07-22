import { Reveal } from '@/components/ui/Reveal';
import { Cpu, Wifi, Radio, BatteryCharging } from 'lucide-react';

export default function page() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Reveal>
        <div className="glass-card p-10 md:p-16 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Intelligent Hardware</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Robust, standard-compliant controllers and sensors engineered for harsh outdoor environments. 
            Plug-and-play interoperability ensures seamless deployment across diverse grid topologies.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Reveal delay={0.1} className="glass-card overflow-hidden group">
          <div className="h-64 bg-gray-100 flex items-center justify-center relative overflow-hidden">
             <img src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop" alt="Smart Street Light Controller" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gray-900/40"></div>
             <Cpu size={64} className="text-white drop-shadow-sm group-hover:text-cyan transition-colors duration-500 relative z-10" />
          </div>
          <div className="p-8">
             <h3 className="text-2xl font-bold text-gray-900 mb-3">NEMA Controllers</h3>
             <p className="text-gray-600 mb-4">
               ANSI C136.41 compliant controllers with 5 or 7 pin interfaces. Designed for immediate retrofit of existing streetlights.
             </p>
             <ul className="space-y-2 text-sm text-gray-500 font-mono">
                <li>• Cellular NB-IoT / LTE-M</li>
                <li>• GPS embedded for auto-commissioning</li>
                <li>• 110-277VAC wide input</li>
             </ul>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="glass-card overflow-hidden group">
          <div className="h-64 bg-gray-100 flex items-center justify-center relative overflow-hidden">
             <img src="https://images.unsplash.com/photo-1512401666750-f19b22bbf585?q=80&w=2070&auto=format&fit=crop" alt="Smart City Infrastructure" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gray-900/40"></div>
             <Wifi size={64} className="text-white drop-shadow-sm group-hover:text-cyan transition-colors duration-500 relative z-10" />
          </div>
          <div className="p-8">
             <h3 className="text-2xl font-bold text-gray-900 mb-3">Zhaga Book 18</h3>
             <p className="text-gray-600 mb-4">
               Compact, standardized interface for DALI-2 smart luminaires. Ideal for new urban deployments and decorative fixtures.
             </p>
             <ul className="space-y-2 text-sm text-gray-500 font-mono">
                <li>• 24V DC powered</li>
                <li>• D4i certified</li>
                <li>• Integrated tilt sensor</li>
             </ul>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="glass-card overflow-hidden group">
          <div className="h-64 bg-gray-100 flex items-center justify-center relative overflow-hidden">
             <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" alt="Street Light Cabinet" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gray-900/40"></div>
             <Radio size={64} className="text-white drop-shadow-sm group-hover:text-cyan transition-colors duration-500 relative z-10" />
          </div>
          <div className="p-8">
             <h3 className="text-2xl font-bold text-gray-900 mb-3">Cabinet Controllers</h3>
             <p className="text-gray-600 mb-4">
               Manage entire lighting segments from the distribution cabinet. Perfect for legacy grids requiring segmented control.
             </p>
             <ul className="space-y-2 text-sm text-gray-500 font-mono">
                <li>• Three-phase energy monitoring</li>
                <li>• Modbus RTU support</li>
                <li>• Door open / unauthorized access alerts</li>
             </ul>
          </div>
        </Reveal>

        <Reveal delay={0.4} className="glass-card overflow-hidden group">
          <div className="h-64 bg-gray-100 flex items-center justify-center relative overflow-hidden">
             <img src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=2070&auto=format&fit=crop" alt="Environmental Sensors" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gray-900/40"></div>
             <BatteryCharging size={64} className="text-white drop-shadow-sm group-hover:text-cyan transition-colors duration-500 relative z-10" />
          </div>
          <div className="p-8">
             <h3 className="text-2xl font-bold text-gray-900 mb-3">Environmental Sensor Hubs</h3>
             <p className="text-gray-600 mb-4">
               Modular nodes that attach to poles to collect rich telemetry without needing separate power drops.
             </p>
             <ul className="space-y-2 text-sm text-gray-500 font-mono">
                <li>• PM2.5 / PM10 / NO2</li>
                <li>• Ambient noise (dB)</li>
                <li>• Temperature and humidity</li>
             </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
