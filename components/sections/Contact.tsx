"use client"
import { Mail, Phone, MapPin, CloudUpload, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Reveal } from '../ui/Reveal';

export function Contact() {
  return (
    <section className="w-full flex flex-col gap-4" id="contact">
      <Reveal>
         <div className="bg-cyan rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-gray-900 gap-6 shadow-sm">
           <div>
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Start Your Smart City Journey.</h2>
             <p className="text-gray-700 max-w-xl">Connect with our experts to design sustainable, efficient, and interconnected urban environments.</p>
           </div>
           <Link href={"/about"} className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold flex items-center gap-2 group hover:gap-4 transition-all whitespace-nowrap shadow-sm hover:bg-gray-800">
             Get in touch
             <ArrowRight size={20} />
           </Link>
         </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
         <Reveal delay={0.1} className="lg:col-span-8 glass-card p-8 relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 relative z-10">Connect With Us</h3>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                     <label className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-mono text-gray-500 z-10">Name</label>
                     <input type="text" placeholder="Jane Doe" className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-gray-900 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all" />
                  </div>
                  <div className="relative group">
                     <label className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-mono text-gray-500 z-10">Email</label>
                     <input type="email" placeholder="jane@citygov.org" className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-gray-900 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all" />
                  </div>
               </div>
               <div className="relative group">
                  <label className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-mono text-gray-500 z-10">Organization</label>
                  <input type="text" placeholder="Department of Urban Planning" className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-gray-900 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all" />
               </div>
               <div className="relative group">
                  <label className="absolute -top-2.5 left-4 bg-white px-1 text-xs font-mono text-gray-500 z-10">Message</label>
                  <textarea rows={4} placeholder="Describe your infrastructure needs..." className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-gray-900 focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all resize-none"></textarea>
               </div>
               
               <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-cyan transition-colors cursor-pointer group bg-gray-50">
                  <CloudUpload className="mx-auto text-gray-400 group-hover:text-cyan mb-3 transition-colors" size={32} />
                  <h4 className="text-gray-900 font-semibold mb-1">Submit your city data</h4>
                  <p className="text-sm font-mono text-gray-500">Drag & drop JSON, CSV, or ZIP files here</p>
               </div>
               
               <button type="submit" className="w-full bg-cyan text-gray-900 font-bold tracking-wider uppercase py-4 rounded-2xl hover:bg-[#a6d136] transition-all">
                  Initialize Connection
               </button>
            </form>
         </Reveal>

         <Reveal delay={0.2} className="lg:col-span-4 flex flex-col gap-4">
            <div className="glass-card p-8 flex-1">
               <h3 className="text-xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Global HQ</h3>
               <ul className="space-y-8">
                  <li className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-200"><Mail className="text-cyan" size={18}/></div>
                     <div>
                        <p className="text-xs font-mono text-gray-500 mb-1">Electronic Mail</p>
                        <p className="text-gray-900 font-medium">solutions@luxcity.ro</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-200"><Phone className="text-cyan" size={18}/></div>
                     <div>
                        <p className="text-xs font-mono text-gray-500 mb-1">Secure Line</p>
                        <p className="text-gray-900 font-medium">+40 (0) 000 000 000</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-200"><MapPin className="text-cyan" size={18}/></div>
                     <div>
                        <p className="text-xs font-mono text-gray-500 mb-1">Physical Node</p>
                        <p className="text-gray-900 font-medium">Brasov, Romania<br/>Tech District, Sector 1</p>
                     </div>
                  </li>
               </ul>
            </div>
            
            {/* stylized map placeholder */}
            <div className="h-48 glass-card overflow-hidden relative group">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity grayscale contrast-150"></div>
               <div className="absolute inset-0 bg-white/40 mix-blend-screen"></div>
               <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full border border-gray-200 backdrop-blur-md shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-cyan animate-pulse"></div>
                  <span className="text-xs font-mono text-gray-900 font-bold uppercase">Node Active</span>
               </div>
            </div>
         </Reveal>
      </div>
    </section>
  );
}
