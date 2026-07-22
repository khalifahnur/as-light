import Link from "next/link";


export function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-8 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
         <div className="md:col-span-1">
            <Link href={"/"} className="text-xl font-bold tracking-tighter text-gray-900 mb-4 block">LUX CITY</Link>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] leading-loose">
              © {new Date().getFullYear()} Lux City Smart Infrastructure.<br/>Sustaining the Urban Glow.
            </p>
         </div>
         
         <div>
            <h4 className="text-gray-900 font-mono text-xs mb-6 uppercase tracking-widest font-bold">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href={"/software"} className="text-gray-500 hover:text-cyan text-xs uppercase tracking-wider transition-colors font-mono">Software Platform</Link></li>
              <li><Link href={"/hardware"} className="text-gray-500 hover:text-cyan text-xs uppercase tracking-wider transition-colors font-mono">Controllers & Hardware</Link></li>
              <li><Link href={"/solutions"} className="text-gray-500 hover:text-cyan text-xs uppercase tracking-wider transition-colors font-mono">Energy Ecosystem</Link></li>
            </ul>
         </div>
         
         <div>
            <h4 className="text-gray-900 font-mono text-xs mb-6 uppercase tracking-widest font-bold">Company</h4>
            <ul className="space-y-4">
              <li><Link href={"/projects"} className="text-gray-500 hover:text-cyan text-xs uppercase tracking-wider transition-colors font-mono">Global Case Studies</Link></li>
              <li><Link href={"/about"} className="text-gray-500 hover:text-cyan text-xs uppercase tracking-wider transition-colors font-mono">About Us</Link></li>
              <li><Link href={"/about#contact"} className="text-gray-500 hover:text-cyan text-xs uppercase tracking-wider transition-colors font-mono">Contact Sales</Link></li>
            </ul>
         </div>
         <div>
            <h4 className="text-gray-900 font-mono text-xs mb-6 uppercase tracking-widest font-bold">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-cyan text-xs uppercase tracking-wider transition-colors font-mono">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cyan text-xs uppercase tracking-wider transition-colors font-mono">Terms of Service</a></li>
            </ul>
         </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-gray-400 border-t border-gray-200 pt-8 gap-4">
        <div>&copy; {new Date().getFullYear()} LUX CITY ARCHITECTURE</div>
        <div className="flex gap-6">
          <span>Twitter (X)</span>
          <span>LinkedIn</span>
          <span>GitHub</span>
        </div>
      </div>
    </footer>
  );
}
