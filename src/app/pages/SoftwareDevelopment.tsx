import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code,
  Laptop,
  Workflow,
  CloudLightning,
  Sparkles,
  Database,
  Terminal,
  Server,
  Layers,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export function SoftwareDevelopment() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      code: "ACCESSIBLE TECH",
      title: "Custom Local & Individual Solutions",
      description: "Bringing elite engineering standards to localized digital needs. We build tailored solutions ranging from high-performance custom websites for individuals to comprehensive management platforms for local small businesses. We ensure no founder, individual, or local operation is left behind in the digital shift.",
      icon: Laptop,
      gradient: "from-[#00d9ff]/20 to-[#0088cc]/10",
      borderGlow: "group-hover:border-[#00d9ff]/50",
      iconColor: "#00d9ff"
    },
    {
      code: "WORKFLOW HARMONIZATION",
      title: "Digital Transformation & Technological Integration",
      description: "Executing the full-scale digitization of manual, paper-based business operations while ensuring any new software deployed integrates flawlessly with your existing hardware and custom AI models. We eliminate technological silos, treating your digital infrastructure as one unified, living ecosystem.",
      icon: Workflow,
      gradient: "from-[#00ffea]/20 to-[#00d9ff]/10",
      borderGlow: "group-hover:border-[#00ffea]/50",
      iconColor: "#00ffea"
    },
    {
      code: "ENTERPRISE CLOUD ARCHITECTURE",
      title: "Enterprise Full-Stack, Cloud & Middleware",
      description: "Developing high-performance SaaS and enterprise-grade platforms (React, Node.js, Django) backed by secure, zero-downtime cloud infrastructure. We engineer the crucial API and middleware bridges that ensure your legacy databases, new applications, and physical edge devices communicate flawlessly in real-time.",
      icon: CloudLightning,
      gradient: "from-[#0088cc]/20 to-[#00ffea]/10",
      borderGlow: "group-hover:border-[#0088cc]/50",
      iconColor: "#0088cc"
    }
  ];

  const methodology = [
    {
      step: "01",
      phase: "Blueprinting",
      title: "System Scoping",
      icon: Terminal,
      description: "Mapping your existing operational bottlenecks, database architecture, and required hardware/software integration points regardless of project size.",
      color: "#00d9ff"
    },
    {
      step: "02",
      phase: "Engineering",
      title: "Agile Development",
      icon: Code,
      description: "Sprint-based coding of your environment—from local websites to enterprise full-stack platforms—while simultaneously building necessary API bridges.",
      color: "#00ffea"
    },
    {
      step: "03",
      phase: "Launch",
      title: "Cloud Deployment",
      icon: Server,
      description: "Securely launching your platform onto scalable architecture, fully tested for stability, security, and cross-platform communication.",
      color: "#0088cc"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-full max-w-[800px] h-[600px] bg-[#00d9ff]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-full max-w-[800px] h-[600px] bg-[#00ffea]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-full max-w-[600px] h-[500px] bg-[#0088cc]/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Noise Texture overlay */}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0088cc]/10 border border-[#0088cc]/20 text-[#00d9ff] text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>03 // THE SCALABLE PLATFORM</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Building the Digital Backbone. <br />
              <span className="bg-gradient-to-r from-[#00d9ff] to-[#00ffea] bg-clip-text text-transparent">
                Architecting for Scale & Accessibility.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              At GeoCloud Technologies, we build secure, scalable environments where physical precision meets digital cognition. We do not just deploy isolated software patches. We architect robust digital platforms designed to bridge the gap between complex hardware ecosystems and intelligent cognitive models. From delivering custom digital foundations for local innovators and individuals to engineering secure cloud infrastructure for global enterprises, our software team builds the backbone of your digital journey at any scale.
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
                <span>BOOK SOFTWARE CONSULTATION</span>
              </Link>
            </div>
          </motion.div>

          {/* Interactive Code Architecture & Cloud SVG Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative aspect-square w-full max-w-[420px] bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-6 backdrop-blur-md overflow-hidden group hover:border-[#00d9ff]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/5 to-[#00ffea]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <svg viewBox="0 0 400 400" className="w-full h-full text-[#00d9ff]/30">
                <defs>
                  <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0088cc" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="clientGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ffea" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00d9ff" stopOpacity="0.2" />
                  </linearGradient>
                  <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Connection lines / architecture traces */}
                {/* Client Device to API Gateway */}
                <path d="M 90,280 L 200,200" fill="none" stroke="url(#clientGrad)" strokeWidth="2" strokeDasharray="4,4" />
                {/* API Gateway to Cloud Services */}
                <path d="M 200,200 L 200,100" fill="none" stroke="url(#cloudGrad)" strokeWidth="2" />
                {/* Cloud Services to Database */}
                <path d="M 200,100 L 310,280" fill="none" stroke="url(#cloudGrad)" strokeWidth="2" />
                {/* Database back to Client (unified loop) */}
                <path d="M 310,280 L 90,280" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />

                {/* Animated data pulses */}
                <motion.circle
                  r="5"
                  fill="#00ffea"
                  filter="url(#neonGlow)"
                  animate={{
                    cx: [90, 200],
                    cy: [280, 200],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.circle
                  r="5"
                  fill="#00d9ff"
                  filter="url(#neonGlow)"
                  animate={{
                    cx: [200, 200],
                    cy: [200, 100],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.circle
                  r="5"
                  fill="#0088cc"
                  filter="url(#neonGlow)"
                  animate={{
                    cx: [200, 310],
                    cy: [100, 280],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Node 1: Client Application (UX Layer) */}
                <g className="cursor-pointer group/node" transform="translate(90, 280)">
                  <circle r="36" fill="#0f223f" stroke="#00ffea" strokeWidth="2" className="filter drop-shadow-[0_0_10px_rgba(0,255,234,0.2)]" />
                  <circle r="42" fill="none" stroke="#00ffea" strokeWidth="1" strokeDasharray="3,6" className="animate-spin" style={{ animationDuration: "12s" }} />
                  <foreignObject x="-18" y="-18" width="36" height="36">
                    <div className="w-full h-full flex items-center justify-center text-[#00ffea]">
                      <Laptop className="w-5 h-5" />
                    </div>
                  </foreignObject>
                  <text y="58" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                    CLIENT UI
                  </text>
                  <text y="70" fill="#00ffea" fontSize="8" textAnchor="middle" opacity="0.8">
                    ACCESSIBLE
                  </text>
                </g>

                {/* Node 2: Secure API Gateway (Middleware Layer) */}
                <g className="cursor-pointer group/node" transform="translate(200, 200)">
                  <circle r="36" fill="#0f223f" stroke="#00d9ff" strokeWidth="2" className="filter drop-shadow-[0_0_10px_rgba(0,217,255,0.2)]" />
                  <rect x="-24" y="-24" width="48" height="48" rx="8" fill="none" stroke="#00d9ff" strokeWidth="1" strokeDasharray="4,4" className="animate-spin" style={{ animationDuration: "8s" }} />
                  <foreignObject x="-18" y="-18" width="36" height="36">
                    <div className="w-full h-full flex items-center justify-center text-[#00d9ff]">
                      <Terminal className="w-5 h-5" />
                    </div>
                  </foreignObject>
                  <text y="58" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                    API BRIDGE
                  </text>
                  <text y="70" fill="#00d9ff" fontSize="8" textAnchor="middle" opacity="0.8">
                    ZERO-DOWNTIME
                  </text>
                </g>

                {/* Node 3: Cloud Infrastructure (Scalable Server backend) */}
                <g className="cursor-pointer group/node" transform="translate(200, 100)">
                  <circle r="36" fill="#0f223f" stroke="#ffffff" strokeWidth="1.5" className="filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
                  <path d="M -12,-6 Q 0,-24 12,-6 Q 24,-6 18,12 L -18,12 Q -24,-6 -12,-6 Z" fill="none" stroke="#00d9ff" strokeWidth="2" transform="translate(0, -6) scale(0.7)" />
                  <foreignObject x="-18" y="-18" width="36" height="36">
                    <div className="w-full h-full flex items-center justify-center text-[#0088cc]">
                      <Server className="w-5 h-5" />
                    </div>
                  </foreignObject>
                  <text y="-50" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                    CLOUD PLATFORM
                  </text>
                  <text y="-40" fill="#0088cc" fontSize="8" textAnchor="middle" opacity="0.8">
                    DOCKER & K8S
                  </text>
                </g>

                {/* Node 4: Database / AI (Cognitive Engine) */}
                <g className="cursor-pointer group/node" transform="translate(310, 280)">
                  <circle r="36" fill="#0f223f" stroke="#0088cc" strokeWidth="2" className="filter drop-shadow-[0_0_10px_rgba(0,136,204,0.2)]" />
                  <circle r="42" fill="none" stroke="#0088cc" strokeWidth="1" strokeDasharray="5,3" className="animate-spin" style={{ animationDuration: "16s" }} />
                  <foreignObject x="-18" y="-18" width="36" height="36">
                    <div className="w-full h-full flex items-center justify-center text-[#0088cc]">
                      <Database className="w-5 h-5" />
                    </div>
                  </foreignObject>
                  <text y="58" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                    ENTERPRISE DATA
                  </text>
                  <text y="70" fill="#0088cc" fontSize="8" textAnchor="middle" opacity="0.8">
                    SECURE / RELIABLE
                  </text>
                </g>
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
              <Code className="w-5 h-5 text-[#00d9ff]" />
              <span className="text-gray-400 font-medium text-sm tracking-widest uppercase">CAPABILITY MATRIX</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Focus <span className="bg-gradient-to-r from-[#00d9ff] to-[#00ffea] bg-clip-text text-transparent">Areas</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              We apply elite software engineering standards across bespoke consumer solutions, digital process migrations, and complex cloud-native architectures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative flex"
                >
                  <div className={`w-full p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br ${cap.gradient} border border-white/10 transition-all duration-500 ${cap.borderGlow} flex flex-col justify-between hover:shadow-[0_0_30px_rgba(0,217,255,0.12)] hover:border-[#00d9ff]/30`}>
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#00d9ff]/30 transition-all duration-300">
                          <Icon className="w-7 h-7" style={{ color: cap.iconColor }} />
                        </div>
                        <span className="text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-[#00d9ff] group-hover:bg-[#00d9ff]/10 transition-colors">
                          {cap.code}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-bold group-hover:text-[#00d9ff] transition-colors duration-300 leading-snug">
                          {cap.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed font-light">
                          {cap.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold tracking-wider text-gray-400 group-hover:text-[#00d9ff] transition-colors duration-300">
                      <span>INQUIRE ABOUT SOLUTION</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* DEVELOPMENT LIFECYCLE (METHODOLOGY) */}
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
              <span className="text-gray-400 font-medium text-sm tracking-widest uppercase">DEVELOPMENT LIFECYCLE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Engagement <span className="bg-gradient-to-r from-[#00ffea] to-[#00d9ff] bg-clip-text text-transparent">Methodology</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              How we guide your software concepts from blueprinting assessments through agile engineering to zero-downtime cloud launches.
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
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">
                        PHASE {step.step} / {step.phase}
                      </span>
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

          <h2 className="text-2xl md:text-4xl font-bold mb-4 z-10 relative">Need a Scalable Software Backbone?</h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed z-10 relative font-light">
            Bring your blueprints, operational roadblocks, cloud scaling requirements, or system integrations. Our software engineering team is ready to design, code, and deploy.
          </p>

          <div className="flex justify-center gap-4 z-10 relative">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d9ff] text-[#0a1628] font-bold text-sm tracking-wide rounded-full hover:shadow-[0_0_30px_rgba(0,217,255,0.6)] transition-all duration-300"
            >
              <span>CONNECT WITH THE TEAM</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
