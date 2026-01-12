"use client";
import { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ["hero", "solutions", "projects", "process"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Solutions", href: "#solutions", id: "solutions" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Process", href: "#process", id: "process" },
  ];

  return (
    <nav className="fixed w-full z-[100] px-6 top-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#1a1a1a]/80 backdrop-blur-xl border-t border-b border-white/10 px-8 py-3 relative overflow-hidden">
        
        {/* Technical Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-[2px] bg-[#e5811f]" />
        <div className="absolute top-0 right-0 w-2 h-[2px] bg-[#e5811f]" />

        {/* Brand/Logo */}
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 bg-[#e5811f] flex items-center justify-center font-black text-white text-sm transform transition-transform group-hover:rotate-90">
            IC
          </div>
          <div className="hidden lg:block">
            <h1 className="text-white font-black text-sm uppercase tracking-tighter leading-none">
              Ideal Conceptz <br />
              <span className="text-[#e5811f] text-[10px] tracking-[0.2em]">Construction</span>
            </h1>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-2 text-[10px] font-mono uppercase tracking-[0.3em] transition-all duration-300 relative group
                ${activeSection === link.id ? "text-[#e5811f]" : "text-gray-400 hover:text-white"}`}
            >
              {link.name}
              {/* Active Indicator Line */}
              {activeSection === link.id && (
                <div className="absolute -bottom-[13px] left-0 w-full h-[2px] bg-[#e5811f]" />
              )}
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex items-center gap-6">
          
          
          <button className="relative px-6 py-3 bg-[#e5811f] text-white text-[10px] font-black uppercase tracking-widest overflow-hidden group">
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 group-hover:text-[#1a1a1a]">Request Quote</span>
          </button>
        </div>

        {/* Bottom Technical Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </nav>
  );
}

export default Navbar;