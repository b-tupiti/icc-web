"use client";
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white min-h-screen flex flex-col px-8 py-12 font-sans relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e5811f]/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[80px] pointer-events-none" />
      
      {/* Top Section: Minimalist CTA */}
      <div className="flex-grow flex flex-col justify-center max-w-7xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#e5811f]">
            Connect with us
          </span>
          <h2 className="text-5xl md:text-8xl font-extralight tracking-tighter leading-none uppercase">
            Let&apos;s build <br /> 
            <span className="font-medium">Something Lasting.</span>
          </h2>
          
          <div className="pt-12">
            <a 
              href="mailto:hello@icc.com.sb" 
              className="group text-2xl md:text-4xl font-light tracking-tight hover:text-[#e5811f] transition-colors duration-500 flex items-center gap-6"
            >
              hello@icc.com.sb
              <span className="h-[1px] w-12 bg-white/20 group-hover:w-24 group-hover:bg-[#e5811f] transition-all duration-500"></span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Middle Section: Organized Data */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-16 pb-24 border-t border-white/5 pt-16 relative z-10">
        
        {/* Identity */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 border border-white/20 flex items-center justify-center text-[10px] font-bold">IC</div>
             <span className="text-sm font-bold uppercase tracking-widest">Ideal Conceptz</span>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed max-w-[240px] font-light">
            Providing high-precision engineering and structural solutions across the Pacific.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-light">
              {['Portfolio', 'Services', 'Team'].map(link => (
                <li key={link} className="hover:text-white cursor-pointer transition-colors">{link}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Follow</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-light">
              {['LinkedIn', 'Instagram'].map(link => (
                <li key={link} className="hover:text-white cursor-pointer transition-colors">{link}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Physical Base */}
        <div className="md:text-right space-y-4">
          <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Location</h4>
          <p className="text-xs text-gray-400 font-light leading-relaxed">
            Kukum Highway, East Honiara<br />
            Solomon Islands<br />
            <span className="text-white mt-2 block">+677 7373112</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar: Clean Metadata */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8 relative z-10">
        <div className="flex flex-wrap justify-center md:justify-start gap-8 text-[9px] font-mono text-gray-600 uppercase tracking-widest">
          <span>© {currentYear} ICC Global</span>
          <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
          <span className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-green-500/50"></div>
            System Active
          </span>
          {/* Credit on the left, non-italicized */}
          <a 
            href="https://rebays.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-400 transition-colors"
          >
            Built by Rebays
          </a>
        </div>

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-4 text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em] hover:text-white transition-colors"
        >
          Back to Top
          <div className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:border-[#e5811f] transition-colors">
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" className="group-hover:-translate-y-0.5 transition-transform">
              <path d="M5 1V9M5 1L1 5M5 1L9 5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </button>
      </div>
    </footer>
  );
}

export default Footer;