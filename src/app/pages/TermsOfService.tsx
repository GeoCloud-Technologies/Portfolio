import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowLeft,
  Scale,
  FileSignature,
  Wrench,
  Code2,
  ShieldAlert
} from "lucide-react";

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Engagement Parameters & Scoping Tiers",
      tag: "[ CONTRACTUAL ACCORD ]",
      icon: FileSignature,
      intro: "GeoCloud Technologies delivers architectural services across tiered operational scopes:",
      points: [
        { strong: "Consulting & Advisory", text: "Strategic roadmaps are based on system states at the time of auditing. Execution roadmaps are advisory unless explicitly bound by a continuous engineering contract." },
        { strong: "Bespoke Deployments", text: "Software, AI models, and custom PCBs are engineered to the exact specifications agreed upon during the system blueprinting phase. Post-deployment structural modifications outside the initial scope require a new intake brief." }
      ]
    },
    {
      title: "2. Hardware Diagnostics & Intake Indemnification",
      tag: "[ HARDWARE LIABILITY PROTOCOL ]",
      icon: Wrench,
      intro: "For individuals and businesses routing physical electronics (laptops, mobile phones, computers, specialized microcontrollers) to our engineering hub in Thika for component-level diagnostics and repair:",
      points: [
        { strong: "Risk Acknowledgment", text: "You recognize that physical hardware subjected to component-level analysis, advanced micro-soldering, or hardware flashing may possess hidden, systemic internal flaws." },
        { strong: "Data Safeguard Directive", text: "While GeoCloud Technologies enforces strict security safeguards to protect physical integrity, you are required to back up all internal data volumes prior to handing over the device. GeoCloud Technologies is not liable for data loss occurring due to pre-existing bare-metal hardware failure during the diagnostic process." }
      ]
    },
    {
      title: "3. Code, Intellectual Property, & Deployment Permissions",
      tag: "[ DIGITAL INTELLECTUAL PROPERTY ]",
      icon: Code2,
      intro: "The distribution of source code and physical assets is strictly determined by your explicit service contract:",
      points: [
        { strong: "Bespoke Client Assets", text: "Upon full financial settlement of production milestones, all rights to custom software platforms, unique database middleware, and tailored AI models are transferred directly to the client." },
        { strong: "Ecosystem Infrastructure", text: "Core backend utilities, proprietary boilerplate frameworks, and standard 3D visual modules (such as our signature Omnisphere interface mechanics) remain the permanent property of GeoCloud Technologies." }
      ]
    },
    {
      title: "4. Acceptable System Utilization",
      tag: "[ OPERATIONAL SAFEGUARDS ]",
      icon: ShieldAlert,
      intro: "Users and client systems are strictly prohibited from exploiting our deployed networks, custom APIs, or software environments for malicious activities, including but not limited to: reverse engineering hardware code, executing DDoS vectors against our cloud infrastructure, or utilizing our AI architectures to process unauthorized metrics.",
      points: []
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-full max-w-[800px] h-[600px] bg-[#00d9ff]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-full max-w-[800px] h-[600px] bg-[#00ffea]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
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

        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/20 text-[#00d9ff] text-xs font-semibold uppercase tracking-wider mb-6">
            <Scale className="w-4 h-4" />
            <span>07 // LEGAL ARCHITECTURE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-white">
            Terms of Service & System Governance
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400 font-medium mb-10 tracking-wide">
            <span>Last Updated: June 2026</span>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#00d9ff] rounded-l-2xl" />
            <h3 className="text-xl font-semibold mb-4 text-white">Pre-Execution Notice</h3>
            <p className="text-gray-300 leading-relaxed font-light text-lg">
              By accessing this platform, initiating an IT consulting audit, commissioning custom development pipelines, or submitting physical components for device recovery, you explicitly agree to the architectural rules, security boundaries, and liability structures outlined below.
            </p>
          </div>
        </motion.div>

        {/* GOVERNANCE MODULES MATRIX */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <span className="text-2xl">⚖️</span> Governance Modules
          </h2>

          <div className="space-y-12">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div key={idx} className="relative group">
                  <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-px bg-white/10 group-hover:bg-[#00d9ff]/50 transition-colors hidden md:block" />
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-6 h-6 text-[#00d9ff]" />
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#00d9ff] transition-colors">{section.title}</h3>
                    </div>
                    <span className="inline-block text-[#00ffea] text-sm font-semibold tracking-widest">{section.tag}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg font-light leading-relaxed">
                    {section.intro}
                  </p>

                  {section.points.length > 0 && (
                    <ul className="space-y-4">
                      {section.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 bg-white/5 border border-white/5 p-4 rounded-xl hover:border-white/10 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00d9ff] mt-2.5 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">
                            {point.strong && <strong className="text-white font-semibold">{point.strong}: </strong>}
                            {point.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
