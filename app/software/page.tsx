
import { Reveal } from '@/components/ui/Reveal';
import { Monitor, BarChart, Settings, Activity } from 'lucide-react';

export default function page() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Reveal>
        <div className="glass-card p-10 md:p-16 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Central Management System</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            A single pane of glass for your entire urban grid. Our CMS provides real-time analytics, automated scheduling, and predictive maintenance workflows.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Reveal delay={0.1} className="lg:col-span-2 glass-card p-8">
           <div className="flex items-center gap-3 mb-6">
             <Monitor className="text-cyan" size={28} />
             <h3 className="text-2xl font-bold text-gray-900">Dashboard & Analytics</h3>
           </div>
           <p className="text-gray-600 mb-8 max-w-2xl">
             Visualize city-wide energy consumption, fault reports, and operational status in real-time. Export customized reports for stakeholders and verify sustainability targets.
           </p>
           {/* Abstract Dashboard UI */}
           <div className="bg-gray-100 rounded-2xl p-4 border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                 <div className="w-32 h-4 bg-gray-200 rounded"></div>
                 <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm"></div>
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm"></div>
                 </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                 <div className="bg-white p-4 rounded-xl shadow-sm h-24 flex flex-col justify-end">
                    <div className="w-full h-8 bg-cyan/20 rounded"></div>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm h-24 flex flex-col justify-end">
                    <div className="w-2/3 h-12 bg-cyan/40 rounded"></div>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm h-24 flex flex-col justify-end">
                    <div className="w-5/6 h-16 bg-cyan rounded"></div>
                 </div>
              </div>
           </div>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-span-1 flex flex-col gap-6">
           <div className="glass-card p-8 flex-1">
             <div className="flex items-center gap-3 mb-4">
               <Settings className="text-gray-900" size={24} />
               <h3 className="text-xl font-bold text-gray-900">Dynamic Scheduling</h3>
             </div>
             <p className="text-gray-600 text-sm">
               Create complex calendric rules. Dim lights during low-traffic hours or increase brightness during events via automated astronomic clocks.
             </p>
           </div>
           
           <div className="glass-card p-8 flex-1">
             <div className="flex items-center gap-3 mb-4">
               <Activity className="text-cyan" size={24} />
               <h3 className="text-xl font-bold text-gray-900">Predictive Maintenance</h3>
             </div>
             <p className="text-gray-600 text-sm">
               Machine learning algorithms identify anomalies in voltage and current, alerting maintenance teams before a physical failure occurs.
             </p>
           </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Reveal delay={0.3} className="glass-card p-8">
           <h3 className="text-2xl font-bold text-gray-900 mb-4">API & Integrations</h3>
           <p className="text-gray-600 mb-6">
             Seamlessly push data into your existing Smart City platforms, ERP systems, or municipal dashboards using our robust RESTful API.
           </p>
           <div className="bg-gray-900 text-gray-300 font-mono text-sm p-4 rounded-xl overflow-x-auto">
             <code>
                GET /api/v1/luminaires?status=active<br/>
                Authorization: Bearer [TOKEN]<br/>
                <br/>
                {'{'}<br/>
                &nbsp;&nbsp;"data": [<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{'{'} "id": "LUM-104", "dimLevel": 80 {'}'}<br/>
                &nbsp;&nbsp;]<br/>
                {'}'}
             </code>
           </div>
        </Reveal>

        <Reveal delay={0.4} className="glass-card p-8 bg-cyan border-none text-gray-900 shadow-sm relative overflow-hidden group">
           <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 blur-3xl rounded-full"></div>
           <BarChart size={48} className="mb-6 opacity-80" />
           <h3 className="text-2xl font-bold mb-4">Mobile Field App</h3>
           <p className="opacity-90 font-medium mb-6">
             Empower installation teams with our iOS and Android application. Scan barcodes to auto-provision nodes via GPS.
           </p>
           <ul className="space-y-2 text-sm font-bold opacity-80">
             <li>✓ Barcode / QR scanning</li>
             <li>✓ GPS coordinate locking</li>
             <li>✓ Offline mode support</li>
           </ul>
        </Reveal>
      </div>
    </div>
  );
}
