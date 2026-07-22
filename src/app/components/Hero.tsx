import { motion } from "motion/react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { EarthGlobe } from "./EarthGlobe";
import { Link } from "react-router";
import BIMAtelierLogo from "@/imports/BIMAtelier.jpeg";
import TotozWellnessLogo from "@/imports/TotozWellness.jpeg";

const showcaseProjects = [
  {
    title: "BIM Atelier Consult",
    subtitle: "Architecture & Engineering Consultancy",
    domain: "bimatelierconsult.co.ke",
    url: "https://bimatelierconsult.co.ke/",
    logo: BIMAtelierLogo,
    description: "Building Information Modeling (BIM) & structural engineering solutions."
  },
  {
    title: "Totoz Wellness",
    subtitle: "Health & Wellness Platform",
    domain: "totozwellness.org",
    url: "https://www.totozwellness.org/",
    logo: TotozWellnessLogo,
    description: "Comprehensive maternal, pediatric, and healthcare services."
  }
];


export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[#0a1628]" />

      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00d9ff] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          {/* <p className="text-[#00d9ff] text-sm uppercase tracking-[0.3em] mb-12">
            THE INTERACTIVE HERO
          </p> */}

          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] max-w-5xl mx-auto mb-8 md:mb-16 flex items-center justify-center">
            {/* Pointer */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute left-0 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 flex items-center gap-3 z-20 pointer-events-none hidden md:flex"
            >
              {/* <p className="text-white text-sm max-w-[150px] text-right leading-relaxed font-medium">
                Click and Drag the Globe<br/>to Explore Modules.
              </p> */}
              {/* <Play className="w-5 h-5 text-[#00d9ff] fill-current" /> */}
            </motion.div>
            
            {/* Globe */}
            <div className="w-full h-full max-w-3xl">
              <EarthGlobe />
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-5xl mx-auto px-4 sm:px-0 text-center whitespace-normal break-words"
          >
            Architecting Entire <br className="block sm:hidden" /> Ecosystems:
            {/* <br />
            Precision Meets{" "}
            <span className="relative inline-flex items-center gap-2">
              <Brain className="w-10 h-10 text-[#00d9ff] inline" />
              <span className="bg-gradient-to-r from-[#00d9ff] to-[#00ffea] bg-clip-text text-transparent">
                Digital Cognition
              </span>
            </span> */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-base md:text-lg mb-10 max-w-3xl mx-auto px-4 sm:px-0"
          >
            Build the systems, Run the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-6 sm:px-0 w-full max-w-sm mx-auto sm:max-w-none"
          >
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 bg-[#00d9ff] text-[#0a1628] text-sm font-bold tracking-wide rounded-full hover:shadow-[0_0_30px_rgba(0,217,255,0.6)] transition-all duration-300 text-center flex items-center justify-center cursor-pointer"
            >
              REQUEST A CONSULT
            </Link>
            <Link 
              to="/#service-pillars" 
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-white/30 text-white text-sm font-bold tracking-wide rounded-full hover:border-[#00d9ff] hover:text-[#00d9ff] transition-all duration-300 text-center flex items-center justify-center cursor-pointer"
            >
              LEARN MORE
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        id="trusted-by"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 pb-16 scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#00d9ff] text-xs uppercase tracking-[0.3em] font-semibold text-center mb-6">
            TRUSTED BY
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {showcaseProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00d9ff]/60 transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,217,255,0.25)] flex items-center gap-5 cursor-pointer"
              >
                {/* Background hover gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d9ff]/0 via-[#00d9ff]/10 to-[#00ffea]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Logo Frame */}
                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-white p-2.5 flex items-center justify-center shrink-0 border border-white/20 group-hover:border-[#00d9ff]/50 transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]">
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info Text */}
                <div className="relative z-10 flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-bold text-base sm:text-lg group-hover:text-[#00d9ff] transition-colors truncate">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-[#00d9ff] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </div>
                  <p className="text-[#00d9ff]/90 text-xs font-semibold mb-1">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-400 text-xs truncate">
                    {project.domain}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown className="w-6 h-6 text-[#00d9ff]/50" />
      </motion.div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
