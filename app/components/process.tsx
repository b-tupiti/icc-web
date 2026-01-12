"use client";
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    { 
      step: "01", 
      title: "Ideation & Feasibility", 
      text: "Translating abstract goals into technical reality. We conduct thorough site analysis and map out the architectural DNA before development begins.",
      tag: "Phase_01",
      coord: "PRE-CONSTRUCTION",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A2 2 0 013 15.487V6a2 2 0 011.106-1.789l6.522-3.261a2 2 0 011.744 0l6.522 3.261A2 2 0 0121 6v9.487a2 2 0 01-1.106 1.789L15 20m-6 0l6-3m-6 3V10m6 7V10m-6 0l6-3m-6 0l6 3m-6-3V4m6 3V4" />
        </svg>
      )
    },
    { 
      step: "02", 
      title: "Precision Execution", 
      text: "Where safety meets industrial strength. Our crews operate with surgical accuracy, ensuring structural integrity at every milestone.",
      tag: "Phase_02",
      coord: "ACTIVE_BUILDING",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      step: "03", 
      title: "Quality Handover", 
      text: "Rigorous final inspections and post-build support. We ensure every technical specification is met and every client expectation is exceeded.",
      tag: "Phase_03",
      coord: "ASSURANCE_QA",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 002-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
  ];

  return (
    <section id="process" className="py-40 px-6 bg-[#f4f4f4] relative overflow-hidden font-sans">
      {/* Heavy Duty Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '60px 60px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#e5811f] font-black">Technical Workflow</span>
            <div className="h-[2px] w-24 bg-[#e5811f]" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none text-[#1a1a1a]"
          >
            Project <span className="text-[#e5811f]">Protocol.</span>
          </motion.h2>
        </div>

        {/* Process List */}
        <div className="space-y-0 border-t-2 border-black/10">
          {steps.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative grid md:grid-cols-12 gap-8 py-24 border-b border-black/10 hover:bg-white transition-colors duration-300"
            >
              {/* Icon & Index Column */}
              <div className="md:col-span-2 flex flex-col gap-6">
                <div className="text-[#e5811f] transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="text-xs font-mono text-gray-400 font-bold">
                  SEQ_ID // {item.step}
                </span>
              </div>

              {/* Title Column */}
              <div className="md:col-span-4">
                <h3 className="text-4xl font-black uppercase tracking-tighter text-[#1a1a1a] leading-none mb-4">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-1">
                   <span className="text-[10px] font-mono text-[#e5811f] uppercase tracking-widest font-black">{item.tag}</span>
                   <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold opacity-60">LOC: {item.coord}</span>
                </div>
              </div>

              {/* Description Column */}
              <div className="md:col-span-6">
                <p className="text-xl text-gray-700 font-medium leading-relaxed max-w-xl">
                  {item.text}
                </p>
              </div>

              {/* Structural hover bar */}
              <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-2 bg-[#e5811f] transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Technical Specification Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t-4 border-black flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div className="text-[10px] font-mono text-black uppercase tracking-[0.3em] font-black">
            System Standard: ISO 9001:2015 <span className="text-[#e5811f] mx-2">|</span> Verified Operational Workflow
          </div>
          <div className="flex items-center gap-6">
             <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(dot => (
                  <div key={dot} className="w-1 h-4 bg-black/10" />
                ))}
             </div>
             <span className="text-[10px] font-mono text-gray-500 font-bold">STATUS: COMPLIANT</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}