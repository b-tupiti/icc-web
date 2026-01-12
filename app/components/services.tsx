"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import engImg from '../../public/images/a-building-out-in-the-sunshine.jpeg';

function Services() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animated background movement for the subtle orange glow
  const bgX = useTransform(scrollYProgress, [0, 1], ["20%", "80%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["10%", "90%"]);

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
    /* 1. Main Container with Radial Gradient */
    <div 
      ref={containerRef} 
      className="relative h-[400vh] bg-[#fffaf5]"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(229, 129, 31, 0.05) 0%, rgba(255, 250, 245, 1) 100%)'
      }}
    >
      
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* 2. Animated Background Glow - This makes the orange more apparent but still subtle */}
        <motion.div 
          style={{ left: bgX, top: bgY }}
          className="absolute w-[600px] h-[600px] bg-[#e5811f]/10 blur-[120px] rounded-full -z-10"
        />

        <div className="max-w-7xl mx-auto px-6 w-full relative h-[600px]">
          
          <div className="absolute top-0 left-0 z-50">
            <p className="text-[#e5811f] font-mono text-[10px] font-bold tracking-[0.4em] uppercase mb-2">
              Capabilities
            </p>
            <h2 className="text-4xl font-black text-[#1a1a1a] tracking-tighter uppercase">
              Core <span className="text-gray-300">Scope.</span>
            </h2>
          </div>

          {services.map((service, idx) => {
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
                  {/* Subtle overlay on images to pull in the orange theme */}
                  <div className="absolute inset-0 bg-orange-900/5 transition-colors hover:bg-transparent" />
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
                    {services[idx].items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-orange-100 px-4 py-2 rounded-full shadow-sm">
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