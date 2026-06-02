import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";

export function CaseStudies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white pt-24 pb-16 px-6 relative overflow-hidden flex items-center justify-center">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] bg-[#00ffea]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10 space-y-8">
        
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00d9ff] transition-colors group mb-4"
          >
            <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-[#00d9ff]/30 group-hover:bg-[#00d9ff]/10 transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium tracking-wide">Back to Landing Page</span>
          </Link>
        </motion.div>

        {/* Icon & Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex p-5 rounded-3xl bg-[#00ffea]/10 border border-[#00ffea]/20 text-[#00ffea] mb-4">
            <BookOpen className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Case <span className="bg-gradient-to-r from-[#00ffea] to-[#00d9ff] bg-clip-text text-transparent">Studies</span>
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#00d9ff]" />
            <span>Architecture Records</span>
          </div>
        </motion.div>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ffea] to-transparent" />
          <p className="text-gray-300 text-lg leading-relaxed font-light">
            We are compiling detailed architectural breakdowns of our deployment milestones; ranging from local digital transitions to custom physical hardware architectures.
          </p>
          <div className="mt-6 pt-6 border-t border-white/5 text-sm text-gray-400">
            Our engineering diaries, system designs and integration case studies will be published soon.
          </div>
        </motion.div>

      </div>
    </div>
  );
}
