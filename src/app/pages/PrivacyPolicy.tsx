import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ShieldCheck,
  Database,
  Lock,
  Server,
  Layers
} from "lucide-react";

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Information We Ingest",
      tag: "[ DATA INGESTION ]",
      icon: Database,
      intro: "We only collect info necessary to execute your specific technical requests:",
      points: [
        { strong: "Identity & Scoping Data", text: "Names, business emails, and organizational details submitted via our System Intake forms." },
        { strong: "Diagnostic Profiles", text: "Technical specifications, system logs, and fault data provided when individuals request consumer device recovery or hardware troubleshooting." },
        { strong: "Operational Telemetry", text: "Standard, non-identifying analytical metrics (IP addresses, browser vectors) used strictly to optimize the performance of our interactive 3D web features." }
      ]
    },
    {
      title: "2. How Your Data Loops Through Our Systems",
      tag: "[ ARCHITECTURAL PROCESSING ]",
      icon: Layers,
      intro: "Your information is processed strictly to fulfill operational milestones:",
      points: [
        { text: "To populate our internal project blueprints and scheduling architectures." },
        { text: "To automate calendar invites, alerts, and diagnostic tickets directly within our secure Google Workspace environment." },
        { text: "To refine, calibrate, and deploy custom software, AI models, or hardware systems tailored to your explicitly contracted needs." }
      ]
    },
    {
      title: "3. Data Isolation & Third-Party Guardrails",
      tag: "[ ECOSYSTEM ISOLATION ]",
      icon: Server,
      intro: "GeoCloud Technologies does not sell, lease, or monetize your personal or operational data to third-party brokers. Information is shared strictly with trusted API frameworks necessary to run our infrastructure:",
      points: [
        { strong: "Google Cloud Platform / Workspace", text: "For secure calendar streaming, video conferencing links, and internal communication routing." },
        { strong: "Cloud Infrastructure Providers", text: "Highly secure, encrypted hosting environments hosting our development pipelines." }
      ]
    },
    {
      title: "4. Security & Hardware-Level Protection",
      tag: "[ CRYPTOGRAPHIC SAFEGUARDS ]",
      icon: Lock,
      intro: "Whether your data lives in a cloud-scaled enterprise platform or sits physically within our engineering hub in Thika, Kenya, we implement multi-layer protective protocols:",
      points: [
        { strong: "Digital Layers", text: "End-to-end encryption (SSL/TLS) for all data in transit, combined with isolated database environments." },
        { strong: "Physical Layers", text: "Strict operational control and secure handling of all consumer laptops, mobile phones, and specialized electronics during the component-level diagnostics and repair lifecycle." }
      ]
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
            <ShieldCheck className="w-4 h-4" />
            <span>06 // GOVERNANCE & TRUST</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-white">
            Privacy Policy & Data Architecture Governance
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400 font-medium mb-10 tracking-wide">
            <span>Last Updated: June 2026</span>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#00d9ff] rounded-l-2xl" />
            <h3 className="text-xl font-semibold mb-4 text-white">Operational Commitment</h3>
            <p className="text-gray-300 leading-relaxed font-light text-lg">
              At GeoCloud Technologies, we treat data architecture with the same rigorous precision we apply to hardware engineering and AI training. This document outlines how our ecosystem collects, processes, secures, and routes information across our consulting, development, and diagnostic workflows.
            </p>
          </div>
        </motion.div>

        {/* DATA HANDLING MATRIX */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <span className="text-2xl">🛠️</span> Data Handling Matrix
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
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
