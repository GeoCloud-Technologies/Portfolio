import { motion } from "motion/react";
import { Cpu, Brain, Code, ChevronDown, Play } from "lucide-react";
import { EarthGlobe } from "./EarthGlobe";

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
            <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 bg-[#00d9ff] text-[#0a1628] text-sm font-bold tracking-wide rounded-full hover:shadow-[0_0_30px_rgba(0,217,255,0.6)] transition-all duration-300">
              REQUEST A CONSULT
            </button>
            <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-white/30 text-white text-sm font-bold tracking-wide rounded-full hover:border-[#00d9ff] hover:text-[#00d9ff] transition-all duration-300">
              LEARN MORE
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 pb-16"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#00d9ff] text-xs uppercase tracking-wider text-center mb-6">
            SERVICE MODULES
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Cpu, title: "HARDWARE R&D", subtitle: "Physical Infrastructure" },
              { icon: Brain, title: "AI INTEGRATION", subtitle: "Cognitive Systems" },
              { icon: Code, title: "SOFTWARE DEVELOPMENT", subtitle: "Digital Platforms" }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="group relative overflow-hidden"
                >
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#00d9ff]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00d9ff]/20 to-[#00ffea]/20 flex items-center justify-center border border-[#00d9ff]/30">
                        <Icon className="w-6 h-6 text-[#00d9ff]" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-sm mb-1">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-xs">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
