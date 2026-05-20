import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Code2, Globe2, Quote, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import ProfilePic from "@/imports/profile.jpeg";

export function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-[#00d9ff]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Back to Home Button */}
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

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/20 text-[#00d9ff] text-sm font-medium mb-6">
            <Globe2 className="w-4 h-4" />
            <span>Our Mission & Vision</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            About GeoCloud <span className="text-[#00d9ff]">Technologies</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Pioneering structural longevity and operational stability for everyone—from local businesses to global enterprises.
          </p>
        </motion.div>

        {/* The Inclusive Corporate Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-white/5 border border-[#00d9ff]/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm mb-20"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#00d9ff] to-transparent rounded-l-3xl" />
          
          {/* <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white flex items-center gap-3">
            <Code2 className="w-8 h-8 text-[#00d9ff]" />
            The Inclusive Corporate Narrative
          </h2> */}
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
            <p>
              <strong className="text-white font-medium">GeoCloud Technologies</strong> exists at the intersection of Physical Precision and Digital Cognition. Founded and headquartered as an engineering-first collective in Thika, Kenya; we serve as a dedicated technology partner for operations navigating the modern digital shift.
            </p>
            <p>
              We believe that technical advancement shouldn't be gated by scale. While we routinely architect multi-layered frameworks for enterprise networks, our ecosystem is built for everyone. We are deeply committed to driving local digital transformation - meaning local businesses seeking to completely digitize their manual operations are just as vital to our mission as enterprise firms.
            </p>
            <p>
              Furthermore, we act as a definitive troubleshooting anchor for individual innovators, founders, and professionals encountering complex, seemingly broken technical blocks. Whether your challenge requires an advanced cross-platform infrastructure, localized digitization, or dedicated, hands-on technical resolution, our approach remains anchored in rigorous engineering principles, operational integrity and a commitment to solving the problem.
            </p>
          </div>
        </motion.div>

        {/* Executive Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center text-white">
            Executive Leadership
          </h2>
          
          <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden group hover:border-[#00d9ff]/30 transition-all duration-500">
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
              
              {/* Avatar Column */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-br from-[#00d9ff] to-[#00d9ff]/20 mb-6 group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0a1628] flex items-center justify-center">
                    <img 
                      src={ProfilePic} 
                      alt="George Claudio" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative orbital ring */}
                  <div className="absolute inset-[-10px] border border-[#00d9ff]/30 rounded-full animate-[spin_10s_linear_infinite]" />
                </div>
                
                <a 
                  href="https://www.georgeclaudio.me/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#00d9ff] hover:text-white transition-colors border border-[#00d9ff]/30 px-5 py-2.5 rounded-full hover:bg-[#00d9ff]/10"
                >
                  <User className="w-4 h-4" />
                  <span>View Portfolio</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* Info Column */}
              <div className="flex-grow">
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#00d9ff] transition-colors">
                  George Claudio
                </h3>
                <p className="text-gray-400 font-medium mb-8 tracking-wide">
                  Founder and Chief Executive & Technology Officer (CETO)
                </p>

                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8">
                  <Quote className="absolute top-4 left-4 w-8 h-8 text-[#00d9ff]/20 rotate-180" />
                  <p className="text-gray-300 text-lg leading-relaxed italic relative z-10 pl-6 border-l-2 border-[#00d9ff]/50">
                    "Unlike single-stack providers, our focus is on building complete structural longevity for your needs. We treat technology as a living, breathing ecosystem. Our engineering directive is simple: we design the structural foundations, ensure operational stability and build frameworks optimized for the next generation of workflows while ensuring no business, local project or individual is left stranded in the digital past."
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
