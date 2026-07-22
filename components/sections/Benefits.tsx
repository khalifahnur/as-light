import { Activity, Shield, Wind, Trash } from 'lucide-react';
import { Reveal } from '../ui/Reveal';


export function Benefits() {
  return (
    <section className="w-full flex flex-col gap-6" id="benefits">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Reveal delay={0.1} className="glass-card p-8 flex flex-col justify-center items-center text-center">
             <div className="text-5xl font-mono font-bold text-gray-900 mb-2">40%</div>
             <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Energy Reduction</p>
          </Reveal>
          <Reveal delay={0.2} className="glass-card p-8 flex flex-col justify-center items-center text-center">
             <div className="text-5xl font-mono font-bold text-gray-900 mb-2">$2.5M</div>
             <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Avg. Annual Savings</p>
          </Reveal>
          <Reveal delay={0.3} className="glass-card p-8 flex flex-col justify-center items-center text-center">
             <div className="text-5xl font-mono font-bold text-gray-900 mb-2">-15k</div>
             <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Tons CO2/Year</p>
          </Reveal>
       </div>

       {/* Synergies */}
       <div className="glass-card p-8 md:p-12 text-center flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart City Synergies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Beyond illumination, our sensor-rich network forms the backbone of a connected, efficient metropolis.</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <Reveal delay={0.1} className="md:col-span-8 glass-card p-8 flex flex-col justify-between group">
             <div>
                <div className="flex items-center gap-3 mb-4">
                   <Activity className="text-cyan group-hover:animate-pulse" />
                   <h3 className="text-xl font-bold text-gray-900">Operational Efficiency</h3>
                </div>
                <p className="text-gray-600 max-w-lg">Predictive maintenance algorithms detect luminaire failures before they occur. Automated ticketing and routing reduce truck rolls by up to 30%, drastically cutting maintenance overhead.</p>
             </div>
             <div className="mt-8 flex">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm">
                   <div className="w-2 h-2 rounded-full bg-cyan animate-pulse"></div>
                   <span className="font-mono text-sm text-gray-700">System Online</span>
                </div>
             </div>
          </Reveal>
          <Reveal delay={0.2} className="md:col-span-4 glass-card p-8">
             <div className="flex items-center gap-3 mb-4">
                <Shield className="text-cyan" />
                <h3 className="text-xl font-bold text-gray-900">Public Safety</h3>
             </div>
             <p className="text-gray-600">Adaptive lighting responds to real-time pedestrian and vehicular traffic. Increased illumination during high-activity periods enhances visibility and deters crime.</p>
          </Reveal>
          <Reveal delay={0.3} className="md:col-span-6 glass-card p-8">
             <div className="flex items-center gap-3 mb-4">
                <Wind className="text-gray-900" />
                <h3 className="text-xl font-bold text-gray-900">Air Quality Monitoring</h3>
             </div>
             <p className="text-gray-600">Integrated environmental sensors track particulate matter (PM2.5, PM10) and NO2 levels, providing actionable data for urban planning and public health advisories.</p>
          </Reveal>
          <Reveal delay={0.4} className="md:col-span-6 glass-card p-8">
             <div className="flex items-center gap-3 mb-4">
                <Trash className="text-gray-900" />
                <h3 className="text-xl font-bold text-gray-900">Smart Waste Routing</h3>
             </div>
             <p className="text-gray-600">Mesh network connectivity extends to smart bins, communicating fill levels to municipal fleets to optimize collection routes and reduce fuel consumption.</p>
             <div className="mt-6 flex justify-between items-center bg-gray-50 p-4 rounded-full border border-gray-200">
                <span className="font-mono text-sm text-gray-500">Route Efficiency</span>
                <span className="text-gray-900 font-bold">+22%</span>
             </div>
          </Reveal>
       </div>
    </section>
  );
}
