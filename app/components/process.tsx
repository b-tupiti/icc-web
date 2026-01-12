"use client";
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    { 
      step: "01", 
      title: "Ideation & Feasibility", 
      text: "We translate abstract goals into technical reality, conducting site analysis to map out the architectural DNA before building begins."
    },
    { 
      step: "02", 
      title: "Precision Execution", 
      text: "Our crews operate with surgical accuracy, ensuring structural integrity and safety at every major milestone."
    },
    { 
      step: "03", 
      title: "Quality Handover", 
      text: "Rigorous final inspections ensure every specification is met and every expectation is exceeded before the final sign-off."
    },
  ];

  return (
    <section id="process" className="relative py-24 px-6 bg-white font-sans overflow-hidden">
      
      {/* --- GRID MESH BACKGROUND --- */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)',
        }}
      />
      {/* ----------------------------- */}

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Simplified Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#e5811f] font-bold">
            How we work
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-[#1a1a1a] mt-2">
            The <span className="text-[#e5811f]">Process.</span>
          </h2>
        </div>

        {/* Simplified Vertical List */}
        <div className="relative border-l-2 border-gray-100 ml-4 md:ml-0">
          {steps.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="mb-16 last:mb-0 pl-8 md:pl-12 relative"
            >
              {/* The "Node" on the timeline */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#e5811f] border-4 border-white shadow-sm" />
              
              <div className="flex flex-col gap-2">
                <span className="text-sm font-mono text-[#e5811f] font-bold">
                  STEP {item.step}
                </span>
                <h3 className="text-3xl font-black uppercase tracking-tight text-[#1a1a1a]">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Footer */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
            Standard Operating Procedure // ISO Certified
          </span>
          <div className="h-1 w-20 bg-gray-100 rounded-full overflow-hidden">
             <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5 }}
              className="h-full bg-[#e5811f]" 
             />
          </div>
        </div>
      </div>
    </section>
  );
}