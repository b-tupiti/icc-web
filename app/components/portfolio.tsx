"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Obidien Vertical Forest",
    location: "Honiara, SI",
    year: "2024",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000",
  },
  {
    title: "The Grid Commercial Hub",
    location: "Guadalcanal",
    year: "2025",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000",
  },
  {
    title: "Coastal Bridge X-10",
    location: "Malaita Province",
    year: "2024",
    type: "Civil Infrastructure",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1000",
  },
  {
    title: "Solar Array Alpha",
    location: "Western Province",
    year: "2025",
    type: "Renewable Energy",
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb584850a?q=80&w=1000",
  },
];

export default function Portfolio() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Horizontal movement logic
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-65%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] bg-[#2a2a2a]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Subtle Drafting Lines instead of big watermark for a cleaner look */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '100px 100px' }} 
        />

        <motion.div style={{ x }} className="flex gap-12 pl-[5vw]">
          {/* Header Card */}
          <div className="flex-shrink-0 w-[450px] h-[550px] flex flex-col justify-center border-l border-white/10 pl-12 bg-[#333]/30 backdrop-blur-sm">
            <span className="text-[#e5811f] font-mono text-xs tracking-[0.5em] mb-6 uppercase font-bold">
              Projects
            </span>
            <h3 className="text-7xl font-light text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Structural <br /> 
              <span className="font-black text-[#e5811f]">Excellence.</span>
            </h3>
            <p className="text-gray-400 max-w-xs font-light leading-relaxed border-t border-white/5 pt-8">
              A curated selection of engineering milestones across the Solomon Islands, defined by precision and durability.
            </p>
          </div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-[85vw] md:w-[650px] h-[550px] bg-[#1a1a1a] overflow-hidden border border-white/5 shadow-2xl"
            >
              {/* Technical Overlay */}
              <div className="absolute top-8 left-8 z-20">
                <div className="bg-[#e5811f] text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest mb-3 shadow-lg">
                  {project.type}
                </div>
                <div className="text-white font-mono text-[9px] tracking-widest opacity-30">
                  SYSTEM_ID // 00{index + 1}
                </div>
              </div>

              {/* Image Transition */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000 ease-out"
              />

              {/* Info Panel */}
              <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <p className="text-[#e5811f] text-[10px] font-mono font-bold uppercase tracking-[0.3em]">
                      {project.location}
                    </p>
                    <h4 className="text-4xl font-black text-white uppercase tracking-tighter">
                      {project.title}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-white/10 font-black text-8xl leading-none tracking-tighter">
                      {project.year.slice(-2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Line */}
              <div className="absolute top-0 right-0 w-[2px] h-0 bg-[#e5811f] group-hover:h-full transition-all duration-1000 delay-100" />
            </div>
          ))}

          {/* Final Call to Action Card */}
          <div className="flex-shrink-0 w-[400px] h-[550px] flex items-center justify-center group cursor-pointer">
            <div className="text-center space-y-6">
              <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center mx-auto group-hover:border-[#e5811f] group-hover:scale-110 transition-all duration-500">
                <span className="text-white text-3xl group-hover:text-[#e5811f] transition-colors">→</span>
              </div>
              <p className="text-white/50 font-mono text-[10px] uppercase tracking-[0.5em] group-hover:text-white transition-colors">View full index</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}