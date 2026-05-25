import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  GitMerge,
  RefreshCw,
  BrainCircuit,
  Wrench,
  LineChart,
  Layers,
  ArrowUpRight
} from "lucide-react";

export function ITConsulting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tiers = [
    {
      number: "01",
      icon: GitMerge,
      title: "Enterprise System Architecture",
      focus: "Complex, multi-layered industrial and enterprise challenges.",
      scope: "We design cross-platform infrastructure that smoothly bridges the boundary between hardware ecosystems and intelligent cloud platforms. We map out the exact integrations required for scalable, secure, and unified technological deployment.",
      gradient: "from-[#00d9ff]/20 to-[#0088cc]/10",
      borderGlow: "group-hover:border-[#00d9ff]/50"
    },
    {
      number: "02",
      icon: RefreshCw,
      title: "Local Digital Transformation",
      focus: "Upgrading scaling businesses for the modern digital shift.",
      scope: "Technical advancement shouldn't be gated by scale. We consult with local operations to transition legacy workflows, paper systems, and manual operations into sleek, cloud-enabled setups. We audit your current processes and build a roadmap for complete digitization.",
      gradient: "from-[#00ffea]/20 to-[#00d9ff]/10",
      borderGlow: "group-hover:border-[#00ffea]/50"
    },
    {
      number: "03",
      icon: BrainCircuit,
      title: "AI Strategy & Implementation",
      focus: "Cognitive technology readiness.",
      scope: "High-level advisory on implementing AI for maximum efficiency. We help organizations and businesses identify operational bottlenecks that can be solved via bespoke predictive models, NLP workflows, and advanced computer vision frameworks before a single line of code is written.",
      gradient: "from-[#0088cc]/20 to-[#00ffea]/10",
      borderGlow: "group-hover:border-[#0088cc]/50"
    },
    {
      number: "04",
      icon: Wrench,
      title: "Technical Recovery & Troubleshooting",
      focus: "Unblocking hard engineering barriers for individuals, founders, and technical teams.",
      scope: "We act as a definitive troubleshooting anchor for seemingly broken technical blocks. Whether it is diagnosing a failing cloud migration, fixing a disconnected API bridge, or resolving a hardware/software communication failure, we provide direct, hands-on technical resolution.",
      gradient: "from-[#00d9ff]/20 to-[#00ffea]/15",
      borderGlow: "group-hover:border-[#00d9ff]/50"
    }
  ];

  const methodology = [
    {
      phase: "01 -> The Audit",
      action: "Deep-Dive Assessment",
      objective: "We map your existing digital and physical infrastructure to identify inefficiencies, legacy bottlenecks, and integration failures.",
      color: "#00d9ff"
    },
    {
      phase: "02 -> The Architecture",
      action: "Ecosystem Blueprinting",
      objective: "We design a custom structural foundation tailored to your exact operational goals, whether it requires standalone modularity or a unified ecosystem.",
      color: "#00ffea"
    },
    {
      phase: "03 -> The Execution",
      action: "Strategic Handoff",
      objective: "We provide a detailed technical roadmap that can be executed internally by your team, or seamlessly transitioned into GeoCloud's Hardware, AI, or Software development suites.",
      color: "#0088cc"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-full max-w-[800px] h-[600px] bg-[#00d9ff]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-full max-w-[800px] h-[600px] bg-[#00ffea]/5 blur-[140px] rounded-full pointer-events-none" />
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

        {/* HERO / ADVISORY SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/20 text-[#00d9ff] text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Strategic Advisory Suite</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Architecting Ecosystems. <br />
              <span className="bg-gradient-to-r from-[#00d9ff] to-[#00ffea] bg-clip-text text-transparent">
                Demystifying Complexity.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              At GeoCloud Technologies, we do not just recommend isolated solutions. We provide high-level advisory to maximize operational efficiency across your entire physical and digital landscape. From localized digitization to enterprise system architecture, our consulting services are anchored in rigorous engineering principles to ensure structural longevity.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="#consulting-tiers"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#00d9ff] text-[#0a1628] font-bold text-sm tracking-wide rounded-full hover:shadow-[0_0_25px_rgba(0,217,255,0.5)] transition-all duration-300"
              >
                <span>EXPLORE TIERS</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-white/20 text-white font-bold text-sm tracking-wide rounded-full hover:border-[#00d9ff] hover:text-[#00d9ff] transition-all duration-300"
              >
                <span>BOOK A SESSION</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square max-w-[400px] mx-auto bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between overflow-hidden group hover:border-[#00d9ff]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/10 to-[#00ffea]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex justify-between items-start z-10">
                <div className="h-12 w-12 rounded-2xl bg-[#00d9ff]/10 border border-[#00d9ff]/30 flex items-center justify-center">
                  <LineChart className="w-6 h-6 text-[#00d9ff]" />
                </div>
                <div className="text-[#00d9ff] text-xs font-bold uppercase tracking-wider border border-[#00d9ff]/20 px-3 py-1 rounded-full">
                  Overview
                </div>
              </div>

              <div className="space-y-4 z-10">
                <h3 className="text-2xl font-bold">The Strategic Umbrella</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  IT Consulting links our three technical pillars (Hardware, AI, Software) under a single engineering roadmap. We ensure code, circuits, and cognitive intelligence align perfectly with your business goals.
                </p>
                <div className="h-px bg-white/10 w-full" />
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>SYSTEM ARCHITECTURE</span>
                  <span>•</span>
                  <span>DIGITIZATION</span>
                  <span>•</span>
                  <span>RECOVERY</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CONSULTING TIERS SECTION */}
        <section id="consulting-tiers" className="mb-28 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Consulting <span className="bg-gradient-to-r from-[#00d9ff] to-[#00ffea] bg-clip-text text-transparent">Tiers</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              We engineer for your specific entry point. Whether you need a unified end-to-end framework or targeted technical recovery, our advisory adapts to your scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative"
                >
                  <div className={`h-full p-8 rounded-3xl backdrop-blur-xl bg-gradient-to-br ${tier.gradient} border border-white/10 transition-all duration-500 ${tier.borderGlow} flex flex-col justify-between hover:shadow-[0_0_30px_rgba(0,217,255,0.15)]`}>

                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#00d9ff]/30 transition-all duration-300">
                          <Icon className="w-7 h-7 text-[#00d9ff]" />
                        </div>
                        <span className="text-gray-600 font-bold text-2xl tracking-widest">{tier.number}</span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold group-hover:text-[#00d9ff] transition-colors duration-300">
                          {tier.title}
                        </h3>
                        <div>
                          <span className="text-[#00ffea] text-xs font-semibold uppercase tracking-wider block mb-1">Focus:</span>
                          <p className="text-gray-200 text-sm leading-relaxed font-medium">
                            {tier.focus}
                          </p>
                        </div>
                        <div className="pt-2">
                          <span className="text-[#00d9ff] text-xs font-semibold uppercase tracking-wider block mb-1">Scope:</span>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {tier.scope}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold tracking-wider text-gray-400 group-hover:text-[#00d9ff] transition-colors duration-300">
                      <span>DISCUSS REQUIREMENT</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* METHODOLOGY SECTION */}
        <section className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Engagement <span className="bg-gradient-to-r from-[#00ffea] to-[#00d9ff] bg-clip-text text-transparent">Methodology</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Our process table maps out exactly how a consulting engagement with GeoCloud Technologies unfolds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm"
          >
            {/* Desktop Table */}
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
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: step.color }} />
                          <span className="font-bold text-white tracking-wide">{step.phase}</span>
                        </div>
                      </td>
                      <td className="py-8 px-8 align-top font-semibold text-[#00d9ff] group-hover:text-white transition-colors duration-300">
                        {step.action}
                      </td>
                      <td className="py-8 px-8 align-top text-gray-400 leading-relaxed text-sm">
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.color }} />
                      <span className="font-bold text-white text-sm">{step.phase}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 block mb-1">Action:</span>
                    <p className="text-sm font-semibold text-[#00d9ff]">{step.action}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 block mb-1">Objective:</span>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.objective}</p>
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
          className="relative bg-gradient-to-br from-white/10 to-transparent border border-[#00d9ff]/20 rounded-3xl p-8 md:p-12 text-center backdrop-blur-md overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[#00d9ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00ffea]/10 rounded-full blur-[100px] pointer-events-none" />

          <h2 className="text-2xl md:text-4xl font-bold mb-4 z-10 relative">Ready to Architect Your Roadmap?</h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed z-10 relative">
            Let's resolve your technical bottlenecks and build scalable foundations. Contact our engineering-first advisory team today.
          </p>

          <div className="flex justify-center gap-4 z-10 relative">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d9ff] text-[#0a1628] font-bold text-sm tracking-wide rounded-full hover:shadow-[0_0_30px_rgba(0,217,255,0.6)] transition-all duration-300"
            >
              <span>INQUIRE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
