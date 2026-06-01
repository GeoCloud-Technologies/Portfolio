import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  Layers,
  Radio,
  Settings,
  Wrench,
  Flame,
  Binary,
  Workflow,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Eye,
  Hammer,
  Zap,
  Gauge
} from "lucide-react";

export function HardwareRD() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      code: "HARDWARE RECOVERY",
      title: "Consumer Device Diagnosis & Repair",
      description: "Advanced, component-level diagnostics and precision repair for personal and business hardware. We bring elite engineering standards to resolve critical device failures and restore your daily operational tools, including mobile phones, computers, laptops, and specialized electronic devices.",
      icon: Wrench,
      gradient: "from-[#00d9ff]/20 to-[#0088cc]/10",
      borderGlow: "group-hover:border-[#00d9ff]/50",
      iconColor: "#00d9ff"
    },
    {
      code: "HARDWARE R&D",
      title: "PCB Design & Prototyping",
      description: "End-to-end circuit board development from schematic mapping to physical soldering. We deliver tailored spatial engineering built exactly to your unique operational and mechanical constraints, ensuring your custom hardware performs flawlessly in its intended environment.",
      icon: Layers,
      gradient: "from-[#00ffea]/20 to-[#00d9ff]/10",
      borderGlow: "group-hover:border-[#00ffea]/50",
      iconColor: "#00ffea"
    },
    {
      code: "ECOSYSTEM DATA & SECURITY",
      title: "IoT & Sensor Integration",
      description: "Developing hardware architectures to collect and transmit environmental data, giving your software ecosystems the physical senses required to measure the real world. This includes the installation of CCTV cameras, smoke detectors among others.",
      icon: Radio,
      gradient: "from-[#0088cc]/20 to-[#00ffea]/10",
      borderGlow: "group-hover:border-[#0088cc]/50",
      iconColor: "#0088cc"
    },
    {
      code: "BARE-METAL INFRASTRUCTURE",
      title: "Industrial Automation & Embedded Systems Design",
      description: "Programming microcontrollers (such as STM32 and ESP32) for dedicated industrial tasks while creating physical mechanisms to automate legacy manual processes. We build the core logic behind physical machinery, transitioning traditional workflows into high-efficiency automated frameworks at the bare-metal level.",
      icon: Settings,
      gradient: "from-[#00d9ff]/20 to-[#00ffea]/15",
      borderGlow: "group-hover:border-[#00d9ff]/50",
      iconColor: "#00ffea"
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Intake & Diagnostics",
      icon: Gauge,
      description: "Assessing the physical constraints of a new R&D blueprint or utilizing diagnostic tools to isolate failures in a broken consumer device.",
      color: "#00d9ff",
      gradient: "from-[#00d9ff]/20 to-transparent"
    },
    {
      step: "02",
      title: "Engineering & Restoration",
      icon: Hammer,
      description: "Executing precision soldering, custom circuit layouts, micro-code flashing, or component replacements under strict Quality Assurance standards.",
      color: "#00ffea",
      gradient: "from-[#00ffea]/20 to-transparent"
    },
    {
      step: "03",
      title: "Deployment & Optimization",
      icon: Zap,
      description: "Delivering fully tested, operational hardware, complete with the necessary middleware to bridge seamlessly into your software environment or daily workflow.",
      color: "#0088cc",
      gradient: "from-[#0088cc]/20 to-transparent"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-full max-w-[800px] h-[600px] bg-[#00d9ff]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-full max-w-[800px] h-[600px] bg-[#00ffea]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-full max-w-[600px] h-[500px] bg-[#0088cc]/5 blur-[140px] rounded-full pointer-events-none" />
      
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00d9ff] transition-colors group"
          >
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-[#00d9ff]/30 group-hover:bg-[#00d9ff]/10 transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium tracking-wide">Back to Landing Page</span>
          </Link>
        </motion.div>

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/20 text-[#00d9ff] text-xs font-semibold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>02 // THE PHYSICAL EDGE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Tangible Engineering. <br />
              <span className="bg-gradient-to-r from-[#00d9ff] to-[#00ffea] bg-clip-text text-transparent">
                Precision at Every Scale.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              At GeoCloud Technologies, we believe that true digital capability is rooted in the physical world. We do not just write abstract code; we architect, optimize, and restore the tangible hardware systems that run it. From engineering custom circuit boards and automating industrial machinery to executing component-level diagnostics on everyday electronics, our Hardware R&D suite provides precision engineering for global enterprises, local businesses, and individuals alike.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="#capability-grid"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#00d9ff] text-[#0a1628] font-bold text-sm tracking-wide rounded-full hover:shadow-[0_0_25px_rgba(0,217,255,0.5)] transition-all duration-300"
              >
                <span>EXPLORE CAPABILITIES</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-white/20 text-white font-bold text-sm tracking-wide rounded-full hover:border-[#00d9ff] hover:text-[#00d9ff] transition-all duration-300"
              >
                <span>BOOK HARDWARE CONSULTATION</span>
              </Link>
            </div>
          </motion.div>

          {/* Interactive Circuit Trace SVG Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative aspect-square w-full max-w-[420px] bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-6 backdrop-blur-md overflow-hidden group hover:border-[#00d9ff]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/5 to-[#00ffea]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Custom High-Tech Hardware Circuit Board Graphic */}
              <svg viewBox="0 0 400 400" className="w-full h-full text-[#00d9ff]/30">
                <defs>
                  <linearGradient id="traceGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00ffea" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="traceGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00ffea" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0088cc" stopOpacity="0.2" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Circuit Grid Background Lines */}
                <line x1="50" y1="50" x2="350" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50" y1="150" x2="350" y2="150" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50" y1="250" x2="350" y2="250" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="50" y1="350" x2="350" y2="350" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="5,5" />
                
                <line x1="50" y1="50" x2="50" y2="350" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="150" y1="50" x2="150" y2="350" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="250" y1="50" x2="250" y2="350" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="5,5" />
                <line x1="350" y1="50" x2="350" y2="350" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="5,5" />

                {/* Outer Tracks */}
                <path d="M 50,200 L 120,200 L 150,170 L 150,150" fill="none" stroke="url(#traceGrad1)" strokeWidth="2" />
                <path d="M 350,200 L 280,200 L 250,230 L 250,250" fill="none" stroke="url(#traceGrad2)" strokeWidth="2" />
                <path d="M 200,50 L 200,120 L 170,150" fill="none" stroke="url(#traceGrad1)" strokeWidth="1.5" />
                <path d="M 200,350 L 200,280 L 230,250" fill="none" stroke="url(#traceGrad2)" strokeWidth="1.5" />

                <path d="M 50,100 L 100,100 L 150,150" fill="none" stroke="rgba(0, 217, 255, 0.15)" strokeWidth="1.5" />
                <path d="M 350,100 L 300,100 L 250,150" fill="none" stroke="rgba(0, 255, 234, 0.15)" strokeWidth="1.5" />
                <path d="M 50,300 L 100,300 L 150,250" fill="none" stroke="rgba(0, 255, 234, 0.15)" strokeWidth="1.5" />
                <path d="M 350,300 L 300,300 L 250,250" fill="none" stroke="rgba(0, 217, 255, 0.15)" strokeWidth="1.5" />

                {/* Copper trace pads / junction nodes */}
                <circle cx="50" cy="200" r="4" fill="#00d9ff" />
                <circle cx="350" cy="200" r="4" fill="#00ffea" />
                <circle cx="200" cy="50" r="4" fill="#00d9ff" />
                <circle cx="200" cy="350" r="4" fill="#00ffea" />

                <circle cx="120" cy="200" r="3" fill="#0a1628" stroke="#00d9ff" strokeWidth="1.5" />
                <circle cx="280" cy="200" r="3" fill="#0a1628" stroke="#00ffea" strokeWidth="1.5" />

                {/* Moving Signal Pulse (Dynamic Hardware Flow) */}
                <motion.circle
                  r="4"
                  fill="#00ffea"
                  filter="url(#glow)"
                  animate={{
                    pathLength: [0, 1],
                    cx: [50, 120, 150, 150],
                    cy: [200, 200, 170, 150],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.circle
                  r="4"
                  fill="#00d9ff"
                  filter="url(#glow)"
                  animate={{
                    pathLength: [0, 1],
                    cx: [350, 280, 250, 250],
                    cy: [200, 200, 230, 250],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Central Microprocessor Chip (MCU) */}
                <g className="cursor-pointer group-hover:scale-105 transform origin-center transition-transform duration-500">
                  {/* Outer Chip glow glow shadow */}
                  <rect x="145" y="145" width="110" height="110" rx="16" fill="rgba(0, 217, 255, 0.05)" stroke="rgba(0, 217, 255, 0.2)" strokeWidth="1" />
                  
                  {/* Chip body */}
                  <rect x="150" y="150" width="100" height="100" rx="12" fill="#0f223f" stroke="#00d9ff" strokeWidth="2.5" className="filter drop-shadow-[0_0_15px_rgba(0,217,255,0.3)]" />
                  
                  {/* Chip internal circuit markings */}
                  <rect x="170" y="170" width="60" height="60" rx="6" fill="none" stroke="rgba(0, 255, 234, 0.3)" strokeWidth="1" strokeDasharray="4,2" />
                  
                  {/* Glowing processor core */}
                  <circle cx="200" cy="200" r="14" fill="#0a1628" stroke="#00ffea" strokeWidth="2" />
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="8"
                    fill="#00ffea"
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Pins extending from Chip */}
                  {/* Top Pins */}
                  <line x1="170" y1="150" x2="170" y2="140" stroke="#00d9ff" strokeWidth="2.5" />
                  <line x1="190" y1="150" x2="190" y2="140" stroke="#00d9ff" strokeWidth="2.5" />
                  <line x1="210" y1="150" x2="210" y2="140" stroke="#00d9ff" strokeWidth="2.5" />
                  <line x1="230" y1="150" x2="230" y2="140" stroke="#00d9ff" strokeWidth="2.5" />
                  {/* Bottom Pins */}
                  <line x1="170" y1="250" x2="170" y2="260" stroke="#00d9ff" strokeWidth="2.5" />
                  <line x1="190" y1="250" x2="190" y2="260" stroke="#00d9ff" strokeWidth="2.5" />
                  <line x1="210" y1="250" x2="210" y2="260" stroke="#00d9ff" strokeWidth="2.5" />
                  <line x1="230" y1="250" x2="230" y2="260" stroke="#00d9ff" strokeWidth="2.5" />
                  {/* Left Pins */}
                  <line x1="150" y1="170" x2="140" y2="170" stroke="#00d9ff" strokeWidth="2.5" />
                  <line x1="150" y1="190" x2="140" y2="190" stroke="#00d9ff" strokeWidth="2.5" />
                  <line x1="150" y1="210" x2="140" y2="210" stroke="#00d9ff" strokeWidth="2.5" />
                  <line x1="150" y1="230" x2="140" y2="230" stroke="#00d9ff" strokeWidth="2.5" />
                  {/* Right Pins */}
                  <line x1="250" y1="170" x2="260" y2="170" stroke="#00d9ff" strokeWidth="2.5" />
                  <line x1="250" y1="190" x2="260" y2="190" stroke="#00d9ff" strokeWidth="2.5" />
                  <line x1="250" y1="210" x2="260" y2="210" stroke="#00d9ff" strokeWidth="2.5" />
                  <line x1="250" y1="230" x2="260" y2="230" stroke="#00d9ff" strokeWidth="2.5" />
                </g>

                {/* Subtext markers */}
                <text x="200" y="285" fill="#00d9ff" fontSize="10" fontWeight="bold" letterSpacing="2" textAnchor="middle" opacity="0.8">
                  MCU // GEOCLOUD
                </text>
                <text x="200" y="300" fill="#00ffea" fontSize="8" letterSpacing="1.5" textAnchor="middle" opacity="0.6">
                  BARE-METAL ENG
                </text>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* CAPABILITY GRID (CORE FOCUS AREAS) */}
        <section id="capability-grid" className="mb-28 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-1.5 justify-center mb-4">
              <Workflow className="w-5 h-5 text-[#00d9ff]" />
              <span className="text-gray-400 font-medium text-sm tracking-widest uppercase">CAPABILITY MATRIX</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Focus <span className="bg-gradient-to-r from-[#00d9ff] to-[#00ffea] bg-clip-text text-transparent">Areas</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              We apply industrial-grade precision across consumer repairs, custom hardware architecture layouts, and complex IoT sensor systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative"
                >
                  <div className={`h-full p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br ${cap.gradient} border border-white/10 transition-all duration-500 ${cap.borderGlow} flex flex-col justify-between hover:shadow-[0_0_30px_rgba(0,217,255,0.12)] hover:border-[#00d9ff]/30`}>
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#00d9ff]/30 transition-all duration-300">
                          <Icon className="w-7 h-7" style={{ color: cap.iconColor }} />
                        </div>
                        <span className="text-xs font-mono font-bold tracking-widest px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-[#00d9ff] group-hover:bg-[#00d9ff]/10 transition-colors">
                          {cap.code}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold group-hover:text-[#00d9ff] transition-colors duration-300 leading-snug">
                          {cap.title}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                          {cap.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold tracking-wider text-gray-400 group-hover:text-[#00d9ff] transition-colors duration-300">
                      <span>INQUIRE ABOUT CAPABILITY</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* HARDWARE LIFECYCLE (METHODOLOGY) */}
        <section className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-1.5 justify-center mb-4">
              <Sparkles className="w-5 h-5 text-[#00ffea]" />
              <span className="text-gray-400 font-medium text-sm tracking-widest uppercase">OPERATIONAL LIFECYCLE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Engagement <span className="bg-gradient-to-r from-[#00ffea] to-[#00d9ff] bg-clip-text text-transparent">Methodology</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              How we guide your hardware concepts from diagnostic evaluations through to bare-metal embedded optimization.
            </p>
          </motion.div>

          {/* Stepper Timeline Visualizer */}
          <div className="relative">
            {/* Horizontal Line connecting steps (Desktop) */}
            <div className="hidden lg:block absolute top-[57px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#00d9ff] via-[#00ffea] to-[#0088cc] opacity-35 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              {methodology.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="relative group flex flex-col items-center text-center px-4"
                  >
                    {/* Glowing Circular Node indicator */}
                    <div className="w-28 h-28 rounded-full bg-[#0a1628] border-2 border-white/10 flex items-center justify-center relative z-20 group-hover:scale-105 transition-transform duration-500 hover:border-[#00d9ff]" style={{ borderColor: step.color }}>
                      {/* Ambient background glow inside the node */}
                      <div className="absolute inset-2 rounded-full bg-gradient-to-br opacity-10 blur-sm" style={{ backgroundColor: step.color }} />
                      
                      <StepIcon className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" style={{ color: step.color }} />
                      
                      {/* Step index overlay */}
                      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white/5 border border-white/10 text-xs font-bold font-mono flex items-center justify-center text-white group-hover:bg-[#0a1628] transition-colors">
                        {step.step}
                      </span>
                    </div>

                    {/* Step Card Text Box */}
                    <div className="mt-8 p-6 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 backdrop-blur-sm w-full transition-all duration-500 hover:border-white/10">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00d9ff] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-white/10 to-transparent border border-[#00d9ff]/20 rounded-3xl p-8 md:p-12 text-center backdrop-blur-md overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[#00d9ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00ffea]/10 rounded-full blur-[100px] pointer-events-none" />

          <h2 className="text-2xl md:text-4xl font-bold mb-4 z-10 relative">Need a Physical Engineering Edge?</h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed z-10 relative font-light">
            Bring your blueprints, failing electronics, or industrial process automation requirements. Our engineering-first lab is ready to prototype, restore, and optimize.
          </p>

          <div className="flex justify-center gap-4 z-10 relative">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d9ff] text-[#0a1628] font-bold text-sm tracking-wide rounded-full hover:shadow-[0_0_30px_rgba(0,217,255,0.6)] transition-all duration-300"
            >
              <span>CONNECT WITH THE LAB</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
