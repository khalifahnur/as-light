"use client"
import { Menu, X } from 'lucide-react';
import { useState} from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="flex justify-between items-center px-4 py-4 border-b border-gray-200 max-w-7xl mx-auto w-full mb-6 relative">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-cyan rounded-lg"></div>
        <span className="text-xl font-bold tracking-tighter text-gray-900">LUX CITY</span>
      </Link>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
        <Link   href={"/solutions"} className="hover:text-gray-900 transition-colors">Solutions</Link>
        <Link   href={"/hardware"} className="hover:text-gray-900 transition-colors">Hardware</Link>
        <Link   href={"/software"} className="hover:text-gray-900 transition-colors">Software</Link>
        <Link   href={"/projects"} className="hover:text-gray-900 transition-colors">Projects</Link>
        <Link   href={"/about"} className="hover:text-gray-900 transition-colors">About</Link>
      </div>

      <div className="flex items-center gap-4">
         <Link href={"/about"} className="hidden md:flex px-5 py-2 bg-gray-900 text-white rounded-full text-sm font-bold hover:bg-cyan hover:text-gray-900 transition-colors">
           Get a Quote
         </Link>
         <button 
           className="md:hidden text-gray-500 hover:text-gray-900 z-50 relative"
           onClick={() => setIsOpen(!isOpen)}
         >
           {isOpen ? <X /> : <Menu />}
         </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg p-4 md:hidden z-40 flex flex-col gap-4"
          >
            <Link href={"/solutions"} className="text-gray-900 font-medium py-2 border-b border-gray-100">Solutions</Link>
            <Link href={"/hardware"} className="text-gray-900 font-medium py-2 border-b border-gray-100">Hardware</Link>
            <Link href={"/software"} className="text-gray-900 font-medium py-2 border-b border-gray-100">Software</Link>
            <Link href={"/projects"} className="text-gray-900 font-medium py-2 border-b border-gray-100">Projects</Link>
            <Link href={"/about"} className="text-gray-900 font-medium py-2 border-b border-gray-100">About</Link>
            <Link href={"/about"} className="inline-block mt-2 px-5 py-3 bg-gray-900 text-white text-center rounded-full text-sm font-bold hover:bg-cyan hover:text-gray-900 transition-colors">
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
