"use client";
import { motion } from 'framer-motion';

function Services() {
  const serviceCategories = [
    {
      id: "ENG",
      title: "Engineering & Design",
      tagline: "SURVEY_AND_SERVICE",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000",
      items: [
        "Concept & Detail Design",
        "Costing & BOQ (Bill of Quantities)",
        "Field Visits & Site Supervision",
        "Inspection & Technical Reporting",
        "Traffic Count Analysis",
        "Project Coordination & Management"
      ]
    },
    {
      id: "BLD",
      title: "Buildings & Infrastructure",
      tagline: "VERTICAL_CONSTRUCTION",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=1000",
      items: [
        "Residential & Commercial Renovations",
        "Electrical & Airconditioning Systems",
        "Solar Power Installations",
        "Security Guard Houses & Bungalows",
        "High-Security Fencing Work",
        "Ablution Blocks & Slab Work"
      ]
    },
    {
      id: "CIV",
      title: "Civil & Infrastructure",
      tagline: "STRUCTURAL_WORKS",
      image: "https://images.unsplash.com/photo-1545459720-aac273a27765?q=80&w=1000",
      items: [
        "Retaining Walls & Earthworks",
        "Drainage Systems & Culverts",
        "Footbridges & Specialized Pedestrian Paths",
        "8m–10m Span Bridge Engineering",
        "Mini Dam Construction"
      ]
    },
    {
      id: "WTR",
      title: "Water & Sanitation",
      tagline: "HYDRO_ENGINEERING",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1000",
      items: [
        "Water Supply Stands",
        "Boreholes & Pump Installations",
        "Tank Base & Foundation Slabs",
        "Mini Dam Systems",
        "Sanitation & Ablution Facilities"
      ]
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-[#fafafa] relative overflow-hidden">
      {/* Background Text Overlay - Matching Portfolio Style */}
      <div className="absolute top-20 left-10 z-0 select-none pointer-events-none">
        <h2 className="text-[15vw] font-black text-black/[0.02] leading-none uppercase tracking-tighter">
          Our <br /> Expertise
        </h2>
      </div>

      {/* Drafting Lines Background */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px)`, backgroundSize: '100% 80px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Animation */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#e5811f] text-white text-[10px] font-mono px-2 py-1 uppercase tracking-tighter">
              Approved Services
            </span>
            <div className="h-[1px] flex-grow bg-gray-200" />
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-[#3f3b3c] leading-[0.9]">
            Core <span className="text-[#e5811f]">Solutions.</span>
          </h2>
        </motion.div>

        {/* The Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
          {serviceCategories.map((cat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
                delay: idx * 0.1 
              }}
              className="bg-white p-12 group relative overflow-hidden h-[500px] flex flex-col justify-between"
            >
              {/* Image with Grayscale to Color Transition (Portfolio Match) */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-white group-hover:bg-[#3f3b3c] transition-colors duration-700 z-10 opacity-100 group-hover:opacity-90" />
                <img 
                  src={cat.image} 
                  alt="" 
                  className="w-full h-full object-cover grayscale opacity-0 group-hover:opacity-40 group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                />
              </div>

              {/* ID Watermark - Consistent Mono font */}
              <div className="absolute top-8 right-8 text-5xl font-black text-gray-100 group-hover:text-white/10 transition-colors font-mono z-20">
                {cat.id}
              </div>

              {/* Content Panel */}
              <div className="relative z-20 transition-transform duration-500 group-hover:-translate-y-2">
                <p className="text-[#e5811f] font-mono text-[10px] tracking-[0.4em] mb-4 uppercase font-bold">
                  {cat.tagline}
                </p>
                <h3 className="text-4xl font-black uppercase mb-8 group-hover:text-white transition-colors tracking-tighter">
                  {cat.title}
                </h3>
                
                {/* List that slides up on hover */}
                <ul className="space-y-3 opacity-60 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {cat.items.slice(0, 5).map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#e5811f] mt-1.5 flex-shrink-0" />
                      <span className="text-sm font-bold text-gray-500 group-hover:text-gray-200 transition-colors uppercase tracking-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Design Line Decoration - Top right growing down */}
              <div className="absolute top-0 right-0 w-[2px] h-0 bg-[#e5811f] group-hover:h-full transition-all duration-1000 delay-100" />
              {/* Bottom horizontal bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#e5811f] group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-gray-200 pt-12"
        >
          <div className="max-w-md">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-relaxed">
              * Technical Specifications available upon request. All operations compliant with Solomon Islands SIBC standards.
            </p>
          </div>
          <button className="group relative bg-[#e5811f] text-white px-14 py-6 font-black text-[11px] uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-black">
            <span className="relative z-10">Request Project Quote →</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;