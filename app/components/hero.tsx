"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import workerImage from '../../public/images/worker-checking-his-work.jpeg';

function Hero() {
  const hasJumped = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (!hasJumped.current && window.scrollY > 15 && servicesSection) {
        hasJumped.current = true;
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
      if (window.scrollY <= 0) {
        hasJumped.current = false;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
      
      {/* 1. TECHNICAL BACKGROUND - Blueprint Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#050505]" />
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      {/* 2. IMAGE SIDE (Right side of the diagonal) */}
      <div 
        className="absolute inset-0 z-10 hidden md:block"
        style={{
          clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 65% 100%)'
        }}
      >
        <div className="relative w-full h-full">
          <Image 
            src={workerImage}
            alt="Engineering Detail"
            fill
            priority
            style={{ 
              transform: 'translateX(33%)', 
              objectFit: 'contain',
              filter: 'brightness(0.5)' 
            }}
          />
          
          {/* HEAVY DARK OVERLAY */}
          <div className="absolute inset-0 z-20 bg-black/20 pointer-events-none" />
          
          {/* VIGNETTE GRADIENT (Makes it even darker on the left edge) */}
          <div 
            className="absolute inset-0 z-21 pointer-events-none" 
            style={{
              background: 'linear-gradient(to right, #050505 0%, transparent 100%)'
            }}
          />
        </div>

        
      </div>

      {/* 3. CONTENT INTERFACE */}
      <div className="max-w-7xl mx-auto px-6 relative z-30 w-full">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-[#e5811f]" />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e5811f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
              <path d="M3 21h18" /><path d="M19 21v-7" /><path d="M7 21v-7" /><path d="M9 14h6" /><path d="M8 14l4-5 4 5" /><path d="M12 9V3" />
            </svg>
            <span className="text-[11px] font-mono tracking-[0.5em] text-[#e5811f] uppercase font-bold">
              Engineering Reality
            </span>
          </div>

          <h1 className="text-6xl md:text-[115px] font-black leading-[0.82] tracking-tighter text-white uppercase mb-12">
            Building <br />
            <span className="text-[#e5811f]">Your Dream</span> <br />
            Infrastructure.
          </h1>

          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-14 py-7 bg-[#e5811f] text-white font-bold uppercase text-[11px] tracking-[0.4em] transition-all hover:brightness-110 active:scale-95 shadow-2xl"
            >
              <span className="relative z-10">Initialize Project →</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
            <div className="hidden md:block h-[1px] w-24 bg-white/20" />
          </div>
        </div>
      </div>

      {/* 4. CORNER METRICS */}
      <div className="absolute bottom-12 right-12 z-40 hidden md:flex flex-col items-end gap-2">
        <span className="text-[9px] font-mono text-[#e5811f] uppercase tracking-widest opacity-80">System_Active</span>
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-[#e5811f] animate-ping" />
          <div className="w-1 h-1 bg-[#e5811f] opacity-50" />
          <div className="w-1 h-1 bg-[#e5811f] opacity-30" />
        </div>
      </div>
    </header>
  );
}

export default Hero;