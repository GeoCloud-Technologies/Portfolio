import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Cpu,
  Eye,
  Activity,
  Workflow,
  Sparkles,
  Database,
  Network,
  Blocks,
  LineChart,
  Binary,
  Settings,
  Bot,
  Compass,
  Zap,
  Radio,
  FileText
} from "lucide-react";

export function AIIntegration() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      code: "COGNITIVE LOGIC",
      title: "Custom AI Models & Predictive Analytics",
      description: "Building bespoke machine learning models tailored to your specific business rules. We leverage historical data to forecast operational trends, optimize supply chains, and calculate precise projections, transforming stagnant corporate databases into active intelligence tools.",
      icon: LineChart,
      gradient: "from-[#00ffea]/20 to-[#00d9ff]/10",
      borderGlow: "group-hover:border-[#00ffea]/50",
      iconColor: "#00ffea"
    },
    {
      code: "VISUAL COGNITION",
      title: "Computer Vision & Spatial Intelligence",
      description: "Enabling systems to accurately see, interpret, and process visual inputs. We develop deep-learning pipelines for automated quality inspection, security monitoring, and spatial data tracking—bridging the gap between physical cameras and cloud-based intelligence.",
      icon: Eye,
      gradient: "from-[#00d9ff]/20 to-[#0088cc]/10",
      borderGlow: "group-hover:border-[#00d9ff]/50",
      iconColor: "#00d9ff"
    },
    {
      code: "SYSTEM AUTOMATION",
      title: "Natural Language Processing & Workflow Automation",
      description: "Streamlining complex, text-heavy operations and manual business processes. From structuring unstructured customer documentation to automating tedious multi-app enterprise workflows, we eliminate digital bottlenecks to maximize team productivity.",
      icon: Workflow,
      gradient: "from-[#0088cc]/20 to-[#00ffea]/10",
      borderGlow: "group-hover:border-[#0088cc]/50",
      iconColor: "#0088cc"
    },
    {
      code: "LOCAL INTEGRATION",
      title: "Accessible Automation for Local Operations",
      description: "Bringing high-tier automation standards down to local small businesses, innovators, and individuals. We design smart triggers, simple data-sorting pipelines, and localized automation tools to ensure small operations can scale intelligently without massive overhead.",
      icon: Blocks,
      gradient: "from-[#00ffea]/20 to-[#0088cc]/15",
      borderGlow: "group-hover:border-[#00ffea]/50",
      iconColor: "#00ffea"
    }
  ];

  const methodology = [
    {
      phase: "01 / Data Auditing",
      action: "Pipeline Assessment",
      objective: "We review your existing data sources, hardware endpoints, or manual tasks to determine structural feasibility and clear milestones.",
      color: "#00ffea"
    },
    {
      phase: "02 / Model Engineering",
      action: "Training & Optimization",
      objective: "Our team designs, trains, and refines the custom neural architectures or automation triggers under strict accuracy parameters.",
      color: "#00d9ff"
    },
    {
      phase: "03 / Ecosystem Linking",
      action: "Omnisphere Deployment",
      objective: "We securely wrap the model in robust APIs, deploying it smoothly onto your cloud infrastructure or embedding it directly onto your physical edge devices.",
      color: "#0088cc"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-full max-w-[800px] h-[600px] bg-[#00ffea]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-full max-w-[800px] h-[600px] bg-[#00d9ff]/5 blur-[140px] rounded-full pointer-events-none" />
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
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00ffea] transition-colors group"
          >
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-[#00ffea]/30 group-hover:bg-[#00ffea]/10 transition-all">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ffea]/10 border border-[#00ffea]/20 text-[#00ffea] text-xs font-semibold uppercase tracking-wider">
              <Brain className="w-3.5 h-3.5" />
              <span>04 // THE COGNITIVE MIND</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Intelligence, <br />
              <span className="bg-gradient-to-r from-[#00ffea] to-[#00d9ff] bg-clip-text text-transparent">
                Tangibly Engineered.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              At GeoCloud Technologies, we don't treat Artificial Intelligence as an abstract luxury or an isolated chatbot. We view AI as the critical cognitive layer that transforms raw data into actionable, automated decisions. Whether we are training bespoke computer vision models to interact with custom physical hardware, embedding predictive analytics into enterprise SaaS platforms, or deploying streamlined workflow automation for local businesses, our team engineers practical intelligence tailored strictly to your scale.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="#capability-grid"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#00ffea] text-[#0a1628] font-bold text-sm tracking-wide rounded-full hover:shadow-[0_0_25px_rgba(0,255,234,0.5)] transition-all duration-300"
              >
                <span>EXPLORE CAPABILITIES</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-white/20 text-white font-bold text-sm tracking-wide rounded-full hover:border-[#00ffea] hover:text-[#00ffea] transition-all duration-300"
              >
                <span>BOOK AI CONSULTATION</span>
              </Link>
            </div>
          </motion.div>

          {/* Interactive Neural Network SVG Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            <div className="relative aspect-square w-full max-w-[420px] bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-6 backdrop-blur-md overflow-hidden group hover:border-[#00ffea]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffea]/5 to-[#00d9ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Dynamic SVG Brain / Neural Mesh Graphic */}
              <svg viewBox="0 0 400 400" className="w-full h-full text-[#00ffea]/30">
                <defs>
                  <linearGradient id="neuralGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ffea" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00d9ff" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="neuralGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0088cc" stopOpacity="0.2" />
                  </linearGradient>
                  <filter id="neonGlowAI" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Circuit Grid Background */}
                <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="3,6" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="5,10" />

                {/* Grid Lines intersecting in center */}
                <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                
                {/* Neural Connections (Mesh lines between nodes) */}
                {/* Inputs to Hidden Layer 1 */}
                <line x1="60" y1="100" x2="160" y2="80" stroke="rgba(0, 255, 234, 0.08)" strokeWidth="1.5" />
                <line x1="60" y1="100" x2="160" y2="160" stroke="rgba(0, 255, 234, 0.08)" strokeWidth="1.5" />
                <line x1="60" y1="100" x2="160" y2="240" stroke="rgba(0, 255, 234, 0.08)" strokeWidth="1.5" />
                
                <line x1="60" y1="200" x2="160" y2="80" stroke="rgba(0, 255, 234, 0.08)" strokeWidth="1.5" />
                <line x1="60" y1="200" x2="160" y2="160" stroke="rgba(0, 255, 234, 0.08)" strokeWidth="1.5" />
                <line x1="60" y1="200" x2="160" y2="240" stroke="rgba(0, 255, 234, 0.08)" strokeWidth="1.5" />
                <line x1="60" y1="200" x2="160" y2="320" stroke="rgba(0, 255, 234, 0.08)" strokeWidth="1.5" />

                <line x1="60" y1="300" x2="160" y2="160" stroke="rgba(0, 255, 234, 0.08)" strokeWidth="1.5" />
                <line x1="60" y1="300" x2="160" y2="240" stroke="rgba(0, 255, 234, 0.08)" strokeWidth="1.5" />
                <line x1="60" y1="300" x2="160" y2="320" stroke="rgba(0, 255, 234, 0.08)" strokeWidth="1.5" />

                {/* Hidden 1 to Hidden 2 */}
                <line x1="160" y1="80" x2="260" y2="110" stroke="rgba(0, 217, 255, 0.08)" strokeWidth="1.5" />
                <line x1="160" y1="80" x2="260" y2="200" stroke="rgba(0, 217, 255, 0.08)" strokeWidth="1.5" />
                
                <line x1="160" y1="160" x2="260" y2="110" stroke="rgba(0, 217, 255, 0.08)" strokeWidth="1.5" />
                <line x1="160" y1="160" x2="260" y2="200" stroke="rgba(0, 217, 255, 0.08)" strokeWidth="1.5" />
                <line x1="160" y1="160" x2="260" y2="290" stroke="rgba(0, 217, 255, 0.08)" strokeWidth="1.5" />

                <line x1="160" y1="240" x2="260" y2="110" stroke="rgba(0, 217, 255, 0.08)" strokeWidth="1.5" />
                <line x1="160" y1="240" x2="260" y2="200" stroke="rgba(0, 217, 255, 0.08)" strokeWidth="1.5" />
                <line x1="160" y1="240" x2="260" y2="290" stroke="rgba(0, 217, 255, 0.08)" strokeWidth="1.5" />

                <line x1="160" y1="320" x2="260" y2="200" stroke="rgba(0, 217, 255, 0.08)" strokeWidth="1.5" />
                <line x1="160" y1="320" x2="260" y2="290" stroke="rgba(0, 217, 255, 0.08)" strokeWidth="1.5" />

                {/* Hidden 2 to Decision Engine (Output Hub) */}
                <line x1="260" y1="110" x2="340" y2="200" stroke="rgba(0, 255, 234, 0.08)" strokeWidth="2" />
                <line x1="260" y1="200" x2="340" y2="200" stroke="rgba(0, 255, 234, 0.08)" strokeWidth="2" />
                <line x1="260" y1="290" x2="340" y2="200" stroke="rgba(0, 255, 234, 0.08)" strokeWidth="2" />

                {/* Animated propagation trails */}
                <motion.path
                  d="M 60,200 Q 110,160 160,160 T 260,200 T 340,200"
                  fill="none"
                  stroke="url(#neuralGrad1)"
                  strokeWidth="2.5"
                  filter="url(#neonGlowAI)"
                  animate={{
                    strokeDasharray: ["0, 1000", "400, 1000"],
                    strokeDashoffset: [0, -600]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                <motion.path
                  d="M 60,300 Q 110,270 160,240 T 260,110 T 340,200"
                  fill="none"
                  stroke="url(#neuralGrad2)"
                  strokeWidth="2"
                  filter="url(#neonGlowAI)"
                  animate={{
                    strokeDasharray: ["0, 1000", "200, 1000"],
                    strokeDashoffset: [0, -600]
                  }}
                  transition={{
                    duration: 5,
                    delay: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Input Layer Nodes (Left) */}
                <g transform="translate(60, 100)" className="cursor-pointer">
                  <circle r="6" fill="#0a1628" stroke="#00ffea" strokeWidth="2" />
                  <motion.circle r="12" fill="none" stroke="#00ffea" strokeWidth="1" opacity="0.4"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </g>
                <g transform="translate(60, 200)">
                  <circle r="6" fill="#0a1628" stroke="#00ffea" strokeWidth="2" />
                  <motion.circle r="12" fill="none" stroke="#00ffea" strokeWidth="1" opacity="0.4"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.3, delay: 0.5, repeat: Infinity }}
                  />
                </g>
                <g transform="translate(60, 300)">
                  <circle r="6" fill="#0a1628" stroke="#00ffea" strokeWidth="2" />
                  <motion.circle r="12" fill="none" stroke="#00ffea" strokeWidth="1" opacity="0.4"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.1, delay: 1, repeat: Infinity }}
                  />
                </g>

                {/* Hidden Layer 1 Nodes (Mid-Left) */}
                <circle cx="160" cy="80" r="5" fill="#0a1628" stroke="#00d9ff" strokeWidth="1.5" />
                <circle cx="160" cy="160" r="5" fill="#0a1628" stroke="#00d9ff" strokeWidth="1.5" />
                <circle cx="160" cy="240" r="5" fill="#0a1628" stroke="#00d9ff" strokeWidth="1.5" />
                <circle cx="160" cy="320" r="5" fill="#0a1628" stroke="#00d9ff" strokeWidth="1.5" />

                {/* Hidden Layer 2 Nodes (Mid-Right) */}
                <circle cx="260" cy="110" r="5" fill="#0a1628" stroke="#0088cc" strokeWidth="1.5" />
                <circle cx="260" cy="200" r="5" fill="#0a1628" stroke="#0088cc" strokeWidth="1.5" />
                <circle cx="260" cy="290" r="5" fill="#0a1628" stroke="#0088cc" strokeWidth="1.5" />

                {/* Decision/Action Engine (Output Hub, Right) */}
                <g transform="translate(340, 200)" className="group/decision cursor-pointer">
                  <motion.circle
                    r="28"
                    fill="#0f223f"
                    stroke="#00ffea"
                    strokeWidth="2.5"
                    className="filter drop-shadow-[0_0_15px_rgba(0,255,234,0.3)]"
                    whileHover={{ scale: 1.05 }}
                  />
                  <circle r="34" fill="none" stroke="#00d9ff" strokeWidth="1" strokeDasharray="4,8" className="animate-spin" style={{ animationDuration: "10s" }} />
                  
                  <foreignObject x="-14" y="-14" width="28" height="28">
                    <div className="w-full h-full flex items-center justify-center text-[#00ffea]">
                      <Brain className="w-4.5 h-4.5" />
                    </div>
                  </foreignObject>
                  
                  <text x="0" y="44" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                    DECISION HUB
                  </text>
                  <text x="0" y="54" fill="#00ffea" fontSize="8" textAnchor="middle" opacity="0.8">
                    COGNITIVE
                  </text>
                </g>
                
                {/* Visual labels */}
                <text x="60" y="60" fill="#00ffea" fontSize="8" fontWeight="bold" letterSpacing="1.5" textAnchor="middle" opacity="0.7">
                  RAW INPUT
                </text>
                <text x="210" y="45" fill="#00d9ff" fontSize="8" fontWeight="bold" letterSpacing="1.5" textAnchor="middle" opacity="0.7">
                  COGNITIVE LAYER
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
              <Network className="w-5 h-5 text-[#00ffea]" />
              <span className="text-gray-400 font-medium text-sm tracking-widest uppercase">CAPABILITY MATRIX</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Focus <span className="bg-gradient-to-r from-[#00ffea] to-[#00d9ff] bg-clip-text text-transparent">Areas</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              We apply rigorous artificial intelligence standards to engineer custom decision engines, vision pipelines, and localized automations.
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
                  <div className={`h-full p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br ${cap.gradient} border border-white/10 transition-all duration-500 ${cap.borderGlow} flex flex-col justify-between hover:shadow-[0_0_30px_rgba(0,255,234,0.12)] hover:border-[#00ffea]/30`}>
                    
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#00ffea]/30 transition-all duration-300">
                          <Icon className="w-7 h-7" style={{ color: cap.iconColor }} />
                        </div>
                        <span className="text-xs font-mono font-bold tracking-widest px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-[#00ffea] group-hover:bg-[#00ffea]/10 transition-colors">
                          {cap.code}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold group-hover:text-[#00ffea] transition-colors duration-300 leading-snug">
                          {cap.title}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                          {cap.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold tracking-wider text-gray-400 group-hover:text-[#00ffea] transition-colors duration-300">
                      <span>INQUIRE ABOUT CAPABILITY</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ENGAGEMENT METHODOLOGY (THE AI LIFECYCLE TABLE) */}
        <section className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-1.5 justify-center mb-4">
              <Sparkles className="w-5 h-5 text-[#00d9ff]" />
              <span className="text-gray-400 font-medium text-sm tracking-widest uppercase">ENGAGEMENT METHODOLOGY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The AI <span className="bg-gradient-to-r from-[#00ffea] to-[#00d9ff] bg-clip-text text-transparent">Lifecycle</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              Building AI with GeoCloud is a rigorous, transparent pipeline rather than a black box. See how we guide custom models from audit to deployment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm shadow-xl"
          >
            {/* Desktop Table View */}
            <div className="hidden md:block">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="py-6 px-8 text-sm font-bold text-gray-400 uppercase tracking-wider w-1/4">Phase</th>
                    <th className="py-6 px-8 text-sm font-bold text-gray-400 uppercase tracking-wider w-1/4">Action</th>
                    <th className="py-6 px-8 text-sm font-bold text-gray-400 uppercase tracking-wider w-2/4">Objective</th>
                  </tr>
                </thead>
                <tbody>
                  {methodology.map((step, index) => (
                    <tr
                      key={step.phase}
                      className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group"
                    >
                      <td className="py-8 px-8 align-top">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: step.color, color: step.color }} />
                          <span className="font-bold text-white tracking-wide text-sm">{step.phase}</span>
                        </div>
                      </td>
                      <td className="py-8 px-8 align-top font-semibold text-[#00ffea] group-hover:text-white transition-colors duration-300">
                        {step.action}
                      </td>
                      <td className="py-8 px-8 align-top text-gray-400 leading-relaxed text-sm md:text-base font-light">
                        {step.objective}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked View */}
            <div className="md:hidden divide-y divide-white/10">
              {methodology.map((step) => (
                <div key={step.phase} className="p-6 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: step.color }} />
                    <span className="font-bold text-white text-sm">{step.phase}</span>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 block mb-1">Action:</span>
                    <p className="text-sm font-semibold text-[#00ffea]">{step.action}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 block mb-1">Objective:</span>
                    <p className="text-sm text-gray-400 leading-relaxed font-light">{step.objective}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-white/10 to-transparent border border-[#00ffea]/20 rounded-3xl p-8 md:p-12 text-center backdrop-blur-md overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[#00ffea]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00d9ff]/10 rounded-full blur-[100px] pointer-events-none" />

          <h2 className="text-2xl md:text-4xl font-bold mb-4 z-10 relative">Need Practical Intelligence Engineered?</h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed z-10 relative font-light">
            Bring your datasets, manual bottlenecks, or computer vision ideas. Our cognitive engineering team is ready to design, audit, train, and deploy.
          </p>

          <div className="flex justify-center gap-4 z-10 relative">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00ffea] text-[#0a1628] font-bold text-sm tracking-wide rounded-full hover:shadow-[0_0_30px_rgba(0,255,234,0.6)] transition-all duration-300"
            >
              <span>CONNECT WITH THE COGNITIVE TEAM</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
