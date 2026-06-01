import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Calendar as CalendarIcon, 
  CheckCircle2, 
  Terminal, 
  Globe2, 
  Shield,
  Cpu,
  CornerDownRight,
  Send,
  AlertCircle
} from "lucide-react";
// @ts-ignore
import confetti from "canvas-confetti";

type ActiveTab = "brief" | "booking";
type TargetVector = "Hardware Prototyping" | "Hardware Diagnosis & Repair" | "Software Development" | "AI Implementation" | "Enterprise Architecture" | "General Inquiry" | "";

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mobile navigation toggle
  const [activeTab, setActiveTab] = useState<ActiveTab>("brief");

  // --- Module 1: System Brief States ---
  const [briefForm, setBriefForm] = useState({
    name: "",
    enterprise: "",
    email: "",
    vector: "" as TargetVector,
    specs: ""
  });
  const [briefStatus, setBriefStatus] = useState<"idle" | "validating" | "submitting" | "success">("idle");
  const [briefLogs, setBriefLogs] = useState<string[]>([]);
  const [briefTxId, setBriefTxId] = useState("");
  const [briefErrors, setBriefErrors] = useState<Record<string, string>>({});

  const handleBriefSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple Validation
    const errors: Record<string, string> = {};
    if (!briefForm.name.trim()) errors.name = "Identification required.";
    if (!briefForm.email.trim()) {
      errors.email = "Comms link required.";
    } else if (!/\S+@\S+\.\S+/.test(briefForm.email)) {
      errors.email = "Invalid link vector (email format).";
    }
    if (!briefForm.vector) errors.vector = "Target vector selection required.";
    if (!briefForm.specs.trim()) errors.specs = "System specifications required.";

    if (Object.keys(errors).length > 0) {
      setBriefErrors(errors);
      return;
    }

    setBriefErrors({});
    
    const message = `⚡ *GEOCLOUD INTAKE // SYSTEM BRIEF* ⚡

*Client Name:* ${briefForm.name}
*Enterprise Entity:* ${briefForm.enterprise || 'N/A'}
*Client Comms Link:* ${briefForm.email}
*Target Suite:* ${briefForm.vector}

*System Specifications:*
${briefForm.specs}`;

    const encodedString = encodeURIComponent(message);
    window.open(`https://wa.me/254707778961?text=${encodedString}`, '_blank');

    const txId = `TX-${Math.floor(100000 + Math.random() * 900000)}-${briefForm.vector.slice(0, 2).toUpperCase()}`;
    setBriefTxId(txId);
    setBriefStatus("success");
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#00d9ff", "#00ffea", "#ffffff"]
    });
  };

  const resetBriefForm = () => {
    setBriefForm({
      name: "",
      enterprise: "",
      email: "",
      vector: "",
      specs: ""
    });
    setBriefStatus("idle");
    setBriefLogs([]);
    setBriefTxId("");
  };

  return (
    <div className="min-h-screen bg-[#0a1628] text-white pt-28 pb-20 px-4 md:px-8 relative overflow-hidden font-sans">
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d9ff08_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Background Ambient Blur Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#00d9ff]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#00ffea]/5 blur-[140px] pointer-events-none" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00d9ff] transition-colors group"
          >
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-[#00d9ff]/30 group-hover:bg-[#00d9ff]/10 transition-all">
              <CornerDownRight className="w-4 h-4 transform rotate-180 text-gray-400 group-hover:text-[#00d9ff]" />
            </div>
            <span className="text-sm font-medium tracking-wide">Back to Landing Page</span>
          </a>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/20 text-[#00d9ff] text-xs font-semibold uppercase tracking-wider mb-6">
            <Terminal className="w-4 h-4" />
            <span>Communications Hub</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Establish <span className="bg-gradient-to-r from-[#00d9ff] to-[#00ffea] bg-clip-text text-transparent">Contact</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Initialize connection via our asynchronous intake system or schedule a live architecture blueprinting session directly with our experts.
          </p>
        </motion.div>

        {/* Mobile Tab Toggle */}
        <div className="flex lg:hidden justify-center mb-8">
          <div className="flex p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <button
              onClick={() => setActiveTab("brief")}
              className="relative px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase cursor-pointer outline-none"
            >
              <span className={`relative z-10 transition-colors duration-300 ${
                activeTab === "brief" ? "text-[#0a1628]" : "text-gray-400 hover:text-white"
              }`}>
                System Brief
              </span>
              {activeTab === "brief" && (
                <motion.div
                  layoutId="mobileActiveTabGlow"
                  className="absolute inset-0 rounded-full bg-[#00d9ff] shadow-[0_0_15px_rgba(0,217,255,0.4)] z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("booking")}
              className="relative px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase cursor-pointer outline-none"
            >
              <span className={`relative z-10 transition-colors duration-300 ${
                activeTab === "booking" ? "text-[#0a1628]" : "text-gray-400 hover:text-white"
              }`}>
                Booking Terminal
              </span>
              {activeTab === "booking" && (
                <motion.div
                  layoutId="mobileActiveTabGlow"
                  className="absolute inset-0 rounded-full bg-[#00d9ff] shadow-[0_0_15px_rgba(0,217,255,0.4)] z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Dual-Interface Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-20 items-stretch">
          
          {/* ==========================================
              MODULE 1: SYSTEM BRIEF TERMINAL
             ========================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`flex flex-col h-full bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#00d9ff]/30 transition-all duration-500 rounded-3xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden group ${
              activeTab !== "brief" ? "hidden lg:flex" : "flex"
            }`}
          >
            {/* Cyan Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent" />
            
            <div className="mb-6 flex justify-between items-start">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#00d9ff]" />
                  Submit a System Brief
                </h2>
                <p className="text-sm text-gray-400 mt-2 font-light leading-relaxed">
                  Outline your technical bottleneck, infrastructure requirements or digital transformation goals. Our engineering team will conduct a review and initiate contact within 24 hours.
                </p>
              </div>
            </div>

            <div className="flex-grow">
              <AnimatePresence mode="wait">
                
                {/* IDLE/FORM SUBMISSION STATE */}
                {briefStatus === "idle" && (
                  <motion.form
                    key="brief-form"
                    onSubmit={handleBriefSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="relative group">
                        <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-1.5">
                          Identification
                        </label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={briefForm.name}
                          onChange={e => setBriefForm({ ...briefForm, name: e.target.value })}
                          className={`w-full bg-[#030c17]/50 border-b ${
                            briefErrors.name ? "border-red-500" : "border-white/10 focus:border-[#00d9ff]"
                          } text-sm px-4 py-3 text-white transition-all duration-300 outline-none placeholder-gray-600 rounded-t-lg`}
                        />
                        <div className="absolute bottom-0 left-0 h-[1.5px] bg-[#00d9ff] w-0 group-focus-within:w-full transition-all duration-500" />
                        {briefErrors.name && (
                          <span className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {briefErrors.name}
                          </span>
                        )}
                      </div>

                      {/* Enterprise input */}
                      <div className="relative group">
                        <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-1.5">
                          Enterprise / Business Name
                        </label>
                        <input
                          type="text"
                          placeholder="Company Name (Optional)"
                          value={briefForm.enterprise}
                          onChange={e => setBriefForm({ ...briefForm, enterprise: e.target.value })}
                          className="w-full bg-[#030c17]/50 border-b border-white/10 focus:border-[#00d9ff] text-sm px-4 py-3 text-white transition-all duration-300 outline-none placeholder-gray-600 rounded-t-lg"
                        />
                        <div className="absolute bottom-0 left-0 h-[1.5px] bg-[#00d9ff] w-0 group-focus-within:w-full transition-all duration-500" />
                      </div>
                    </div>

                    {/* Email input */}
                    <div className="relative group">
                      <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-1.5">
                        Comms Link (Email)
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={briefForm.email}
                        onChange={e => setBriefForm({ ...briefForm, email: e.target.value })}
                        className={`w-full bg-[#030c17]/50 border-b ${
                          briefErrors.email ? "border-red-500" : "border-white/10 focus:border-[#00d9ff]"
                        } text-sm px-4 py-3 text-white transition-all duration-300 outline-none placeholder-gray-600 rounded-t-lg`}
                      />
                      <div className="absolute bottom-0 left-0 h-[1.5px] bg-[#00d9ff] w-0 group-focus-within:w-full transition-all duration-500" />
                      {briefErrors.email && (
                        <span className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {briefErrors.email}
                        </span>
                      )}
                    </div>

                    {/* Vector Dropdown */}
                    <div className="relative group">
                      <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-1.5">
                        Target Service Suite
                      </label>
                      <select
                        value={briefForm.vector}
                        onChange={e => setBriefForm({ ...briefForm, vector: e.target.value as TargetVector })}
                        className={`w-full bg-[#030c17]/90 border-b ${
                          briefErrors.vector ? "border-red-500" : "border-white/10 focus:border-[#00d9ff]"
                        } text-sm px-4 py-3 text-white transition-all duration-300 outline-none rounded-t-lg appearance-none cursor-pointer`}
                      >
                        <option value="" disabled className="bg-[#0a1628] text-gray-500">Select Area of Integration</option>
                        <option value="Hardware Prototyping" className="bg-[#0a1628] text-white">Hardware Prototyping</option>
                        <option value="Hardware Diagnosis & Repair" className="bg-[#0a1628] text-white">Hardware Diagnosis & Repair</option>
                        <option value="Software Development" className="bg-[#0a1628] text-white">Software Development</option>
                        <option value="AI Implementation" className="bg-[#0a1628] text-white">AI Implementation</option>
                        <option value="Enterprise Architecture" className="bg-[#0a1628] text-white">Enterprise Architecture</option>
                        <option value="General Inquiry" className="bg-[#0a1628] text-white">General Inquiry</option>
                      </select>
                      <div className="absolute bottom-0 left-0 h-[1.5px] bg-[#00d9ff] w-0 group-focus-within:w-full transition-all duration-500" />
                      <div className="absolute right-4 top-1/2 translate-y-1 pointer-events-none border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white" />
                      {briefErrors.vector && (
                        <span className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {briefErrors.vector}
                        </span>
                      )}
                    </div>

                    {/* Specs text area */}
                    <div className="relative group">
                      <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-1.5">
                        System Specifications
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Describe your current workflow, the technical block you are facing, or the scale of your intended deployment."
                        value={briefForm.specs}
                        onChange={e => setBriefForm({ ...briefForm, specs: e.target.value })}
                        className={`w-full bg-[#030c17]/50 border-b ${
                          briefErrors.specs ? "border-red-500" : "border-white/10 focus:border-[#00d9ff]"
                        } text-sm px-4 py-3 text-white transition-all duration-300 outline-none placeholder-gray-600 rounded-t-lg resize-none`}
                      />
                      <div className="absolute bottom-0 left-0 h-[1.5px] bg-[#00d9ff] w-0 group-focus-within:w-full transition-all duration-500" />
                      {briefErrors.specs && (
                        <span className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {briefErrors.specs}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#00d9ff] text-[#0a1628] font-bold text-xs uppercase tracking-wider rounded-xl hover:shadow-[0_0_20px_rgba(0,217,255,0.5)] transition-all duration-300 cursor-pointer"
                    >
                      <span>TRANSMIT BRIEF</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </motion.form>
                )}

                {/* TERMINAL DIAGNOSTIC SUBMISSION STATE */}
                {briefStatus === "submitting" && (
                  <motion.div
                    key="brief-terminal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-[#030a14] border border-[#00d9ff]/30 rounded-2xl p-5 font-mono text-xs text-[#00d9ff] space-y-2 min-h-[350px] flex flex-col justify-between"
                  >
                    <div className="space-y-1.5 select-none overflow-y-auto max-h-[300px]">
                      <div className="flex items-center gap-2 text-white border-b border-[#00d9ff]/20 pb-2 mb-3">
                        <Terminal className="w-4 h-4 text-[#00d9ff]" />
                        <span>GEOCLOUD COMMS HUB // INTAKE CORE</span>
                      </div>
                      
                      {briefLogs.map((log, i) => (
                        <div key={i} className="animate-fade-in">
                          {log}
                        </div>
                      ))}
                      
                      <div className="flex items-center gap-1 animate-pulse">
                        <span>&gt; CONNECTION PENDING_</span>
                      </div>
                    </div>
                    
                    <div className="text-[10px] text-gray-500 border-t border-[#00d9ff]/10 pt-2 flex justify-between items-center select-none">
                      <span>SECURE PORT ACTIVE</span>
                      <span>HASHING ENGINE v1.2</span>
                    </div>
                  </motion.div>
                )}

                {/* SUCCESS CONFIRMATION STATE */}
                {briefStatus === "success" && (
                  <motion.div
                    key="brief-success"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="flex flex-col items-center justify-center text-center p-8 border border-[#00ffea]/20 bg-[#00ffea]/5 rounded-3xl min-h-[400px] space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#00ffea]/10 border border-[#00ffea]/30 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-[#00ffea]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Brief Transmitted Successfully</h3>
                      <p className="text-gray-400 text-sm max-w-sm">
                        Our engineering core has received your parameters. A technical lead will contact you within 24 hours.
                      </p>
                    </div>
                    
                    <div className="bg-[#030a14] border border-white/5 rounded-xl px-5 py-3 font-mono text-xs w-full max-w-xs text-center">
                      <span className="text-gray-500 block mb-1">TRANSMISSION ID</span>
                      <span className="text-[#00d9ff] font-semibold">{briefTxId}</span>
                    </div>

                    <button
                      onClick={resetBriefForm}
                      className="px-6 py-2.5 border border-white/20 hover:border-[#00d9ff] hover:text-[#00d9ff] text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300"
                    >
                      Transmit New Brief
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>

          {/* ==========================================
              MODULE 2: THE BOOKING TERMINAL
             ========================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`flex flex-col h-full bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#00ffea]/30 transition-all duration-500 rounded-3xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden group ${
              activeTab !== "booking" ? "hidden lg:flex" : "flex"
            }`}
          >
            {/* Cyan-Glow Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00ffea] to-transparent" />
            
            <div className="mb-6 flex justify-between items-start">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-[#00ffea]" />
                  Book an Architecture Session
                </h2>
                <p className="text-sm text-gray-400 mt-2 font-light leading-relaxed">
                  Bypass the inbox. Lock in a direct consultation with our lead technical architects to map out your infrastructure.
                </p>
              </div>
            </div>

            <div className="flex-grow flex flex-col">
              <div className="w-full min-h-[580px] bg-[#030c17]/50 border border-white/10 rounded-2xl overflow-hidden relative shadow-[0_0_25px_rgba(0,217,255,0.05)]">
                <iframe 
                  src="https://calendar.app.google/3yMWURiyRW3EMxmG8"
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  className="relative z-10 opacity-90 filter invert-[0.9] hue-rotate-180"
                  title="GeoCloud Scheduling Hub"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* ==========================================
            SECTION 3: GLOBAL COORDINATES
           ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-[#00d9ff]/20 pt-16 relative"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold tracking-wider text-white uppercase flex items-center justify-center gap-2 mb-2">
              <Globe2 className="w-5 h-5 text-[#00d9ff] animate-[spin_8s_linear_infinite]" />
              Global Coordinates
            </h3>
            <p className="text-sm text-gray-500 font-mono tracking-widest">
              SYSTEM_LOCATION // MISSION_CONTROL_TELEMETRY
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
            {/* Headquarters Card */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#00d9ff]/30 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00d9ff]/40" />
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <MapPin className="w-5 h-5 text-[#00d9ff]" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Headquarters</span>
              </div>
              <p className="text-sm text-gray-300 mb-2">
                GeoCloud Technologies HQ<br/>Thika, Kenya
              </p>
              <span className="text-[10px] text-gray-500 font-mono block">
                COORD: 1.0383° S, 37.0751° E
              </span>
            </div>

            {/* Direct Comm Card */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#00d9ff]/30 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00ffea]/40" />
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <Mail className="w-5 h-5 text-[#00ffea]" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Direct Comm</span>
              </div>
              <p className="text-sm text-gray-300 mb-2 break-all">
                geocloudtechnologies@gmail.com
              </p>
              <span className="text-[10px] text-gray-500 font-mono block">
                PROTOCOL: secure://smtp.gmail.com:465
              </span>
            </div>

            {/* Encrypted Line Card */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#00d9ff]/30 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00d9ff]/40" />
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <Phone className="w-5 h-5 text-[#00d9ff]" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Encrypted Line</span>
              </div>
              <p className="text-sm text-gray-300 mb-2">
                +254 (707) 778-961
              </p>
              <span className="text-[10px] text-gray-500 font-mono block">
                GATEWAY: route://telephony.ke.safaricom
              </span>
            </div>

            {/* Social Vectors Card */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#00ffea]/30 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00ffea]/40" />
              <div>
                <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                  <Shield className="w-5 h-5 text-[#00ffea]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">Social Vectors</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-5">
                  <a
                    href="https://www.linkedin.com/company/geo-cloud-technologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-[#00d9ff]/10 border border-white/10 hover:border-[#00d9ff]/30 text-gray-400 hover:text-[#00d9ff] transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://web.facebook.com/geocloudtechnologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-[#00d9ff]/10 border border-white/10 hover:border-[#00d9ff]/30 text-gray-400 hover:text-[#00d9ff] transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/geocloudtechnologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-[#00d9ff]/10 border border-white/10 hover:border-[#00d9ff]/30 text-gray-400 hover:text-[#00d9ff] transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <span className="text-[10px] text-gray-500 font-mono block mt-4">
                NODE_ENCRYPTION // ACTIVE
              </span>
            </div>
          </div>
          
          {/* Coordinates Background Wireframe Globe SVG */}
          <div className="absolute right-0 bottom-[-50px] opacity-[0.03] pointer-events-none select-none overflow-hidden h-[300px] w-[300px] hidden lg:block">
            <svg viewBox="0 0 200 200" className="w-full h-full text-white fill-none stroke-current stroke-1 animate-[spin_60s_linear_infinite]">
              <circle cx="100" cy="100" r="80" />
              {[...Array(6)].map((_, i) => (
                <ellipse key={i} cx="100" cy="100" rx="80" ry={20 + i * 10} style={{ transform: `rotate(${i * 30}deg)`, transformOrigin: '100px 100px' }} />
              ))}
            </svg>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
