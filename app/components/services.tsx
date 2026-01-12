"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import engImg from '../../public/images/a-building-out-in-the-sunshine.jpeg';

function Services() {
  const containerRef = useRef(null);
  
  // Track scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const services = [
    {
      title: "Engineering & Design",
      desc: "Comprehensive technical planning from concept design to site supervision and reporting.",
      image: engImg,
      tagline: "SURVEY_AND_SERVICE",
      items: ["BOQ Costing", "Site Supervision", "Traffic Analysis"]
    },
    {
      title: "Buildings & Infrastructure",
      desc: "Specialized in high-security fencing, solar installations, and commercial renovations.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
      tagline: "VERTICAL_CONSTRUCTION",
      items: ["Solar Power", "Security Infrastructure", "Renovations"]
    },
    {
      title: "Civil & Structural",
      desc: "Heavy-duty structural works including retaining walls, drainage systems, and bridge engineering.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1000",
      tagline: "STRUCTURAL_WORKS",
      items: ["Bridge Engineering", "Drainage", "Mini Dams"]
    },
    {
      title: "Water & Sanitation",
      desc: "Sustainable water solutions, borehole installations, and industrial sanitation facilities.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?q=80&w=1000",
      tagline: "HYDRO_ENGINEERING",
      items: ["Boreholes", "Pump Systems", "Ablution Blocks"]
    }
  ];

  return (
    /* 1. THE TRACK: 400vh gives enough room for 4 services to scroll through */
    <div ref={containerRef} className="relative h-[400vh] bg-[#fcfcfc]">
      
      {/* 2. THE STICKY VIEWPORT: Stays fixed while user scrolls the track */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 w-full relative h-[600px]">
          
          {/* Section Header - remains visible */}
          <div className="absolute top-0 left-0 z-50">
            <p className="text-[#e5811f] font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-2">
              Capabilities
            </p>
            <h2 className="text-4xl font-black text-[#1a1a1a] tracking-tighter uppercase">
              Core <span className="text-gray-300">Scope.</span>
            </h2>
          </div>

          {/* 3. THE MAPPING: Each service is layered on top of each other */}
          {services.map((service, idx) => {
            // Logic to determine when each card fades in/out
            const start = idx * 0.25;
            const end = (idx + 1) * 0.25;
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [start, start + 0.1, end], [100, 0, -100]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(scrollYProgress, [start, start + 0.1], [0.9, 1]);

            return (
              <motion.div
                key={idx}
                style={{ opacity, y, scale }}
                className="absolute inset-0 flex flex-col lg:flex-row items-center gap-12 pt-20"
              >
                {/* Image Block */}
                <div className="w-full lg:w-1/2 h-[300px] lg:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={typeof service.image === 'string' ? service.image : service.image.src}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors hover:bg-transparent" />
                </div>

                {/* Content Block */}
                <div className="w-full lg:w-1/2">
                  <span className="text-[10px] font-mono text-[#e5811f] tracking-widest font-bold">
                    {service.tagline}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#1a1a1a] mt-2 mb-6 leading-none">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-lg mb-8 max-w-md">
                    {service.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e5811f]" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;