"use client"
import { ArrowRight, Calculator } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal } from '../ui/Reveal';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="col-span-1 md:col-span-2 md:row-span-2 glass-card p-10 flex flex-col justify-between relative overflow-hidden group min-h-[500px]">
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-white/80 z-10"></div>
         <iframe 
            src="https://player.vimeo.com/video/449339757?background=1&autoplay=1&loop=1&byline=0&title=0"
            allow="autoplay; fullscreen"
            className="w-[150%] h-[150%] -top-[25%] -left-[25%] absolute pointer-events-none object-cover opacity-60"
            style={{ border: 'none' }}
         />
      </div>
      <div className="absolute -right-20 -bottom-20 w-80 h-80 border-[40px] border-gray-100 rounded-full z-0 mix-blend-overlay"></div>
      <div className="absolute right-10 top-10 w-24 h-24 bg-cyan/20 blur-3xl z-0"></div>
      <div className="absolute inset-0 z-0 mesh-bg opacity-30">
         {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-cyan"
              style={{
                boxShadow: '0 0 20px 5px rgba(181, 224, 62, 0.5)',
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.9, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
         ))}
      </div>
      <div className="relative z-10 flex flex-col h-full">
         <Reveal delay={0.1}>
           <span className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Next Generation Infrastructure</span>
           <h1 className="text-5xl md:text-6xl font-semibold leading-[0.9] tracking-tight mb-6 text-gray-900">
             Illuminating <br/>
             <span className="text-gray-400 italic font-serif">urban</span> life.
           </h1>
         </Reveal>
         
         <Reveal delay={0.3}>
           <p className="text-gray-600 max-w-[280px] text-lg leading-relaxed mb-10">
             Intelligent, sustainable, and connected street lighting solutions for modern cities. Empowering municipalities.
           </p>
         </Reveal>

         <Reveal delay={0.5} className="mt-auto flex flex-wrap gap-4 w-full">
            <Link href={"/solutions"} className="bg-gray-900 text-white font-bold px-6 py-3 rounded-full hover:bg-cyan hover:text-gray-900 transition-colors flex items-center justify-center gap-2 text-sm">
              Explore Solutions <ArrowRight size={16} />
            </Link>
            <Link href={"/about"} className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm hover:bg-gray-100 transition-colors">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
              <Calculator size={16} /> Calculate Savings
            </Link>
         </Reveal>
      </div>
    </section>
  );
}
