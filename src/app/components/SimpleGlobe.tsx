import { useState, useEffect } from "react";
import { motion } from "motion/react";

type ServiceMode = "globe" | "hardware" | "ai" | "software";

interface SimpleGlobeProps {
  onModeChange?: (mode: ServiceMode) => void;
}

export function SimpleGlobe({ onModeChange }: SimpleGlobeProps) {
  const [mode, setMode] = useState<ServiceMode>("globe");

  const handleModeChange = (newMode: ServiceMode) => {
    setMode(newMode);
    onModeChange?.(newMode);
  };

  const getModeVisual = () => {
    switch (mode) {
      case "hardware":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d9ff" />
                <stop offset="100%" stopColor="#00ffea" />
              </linearGradient>
            </defs>
            {[...Array(20)].map((_, i) => (
              <g key={i}>
                <motion.line
                  x1={Math.random() * 200}
                  y1={Math.random() * 200}
                  x2={Math.random() * 200}
                  y2={Math.random() * 200}
                  stroke="url(#circuit-grad)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                />
                <motion.circle
                  cx={Math.random() * 200}
                  cy={Math.random() * 200}
                  r="3"
                  fill="#00d9ff"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                />
              </g>
            ))}
          </svg>
        );
      case "ai":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <radialGradient id="neural-grad">
                <stop offset="0%" stopColor="#00d9ff" />
                <stop offset="100%" stopColor="#00ffea" />
              </radialGradient>
            </defs>
            {[...Array(8)].map((_, layer) => (
              <g key={layer}>
                {[...Array(6)].map((_, node) => {
                  const angle = (node / 6) * Math.PI * 2;
                  const radius = 30 + layer * 10;
                  const x = 100 + Math.cos(angle) * radius;
                  const y = 100 + Math.sin(angle) * radius;
                  return (
                    <motion.circle
                      key={`${layer}-${node}`}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="url(#neural-grad)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.8 }}
                      transition={{ duration: 0.5, delay: layer * 0.1 }}
                    />
                  );
                })}
              </g>
            ))}
          </svg>
        );
      case "software":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="layer-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00ffea" />
                <stop offset="100%" stopColor="#00d9ff" />
              </linearGradient>
            </defs>
            {[...Array(10)].map((_, i) => (
              <motion.rect
                key={i}
                x="20"
                y={10 + i * 18}
                width="160"
                height="15"
                rx="3"
                fill="url(#layer-grad)"
                opacity={0.7 - i * 0.05}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.7 - i * 0.05 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              />
            ))}
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="globe-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d9ff" />
                <stop offset="100%" stopColor="#00ffea" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="url(#globe-grad)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1.5 }}
            />
            {[...Array(8)].map((_, i) => (
              <motion.ellipse
                key={i}
                cx="100"
                cy="100"
                rx="80"
                ry={20 + i * 10}
                fill="none"
                stroke="#00d9ff"
                strokeWidth="1"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
                style={{ transform: `rotate(${i * 22.5}deg)`, transformOrigin: '100px 100px' }}
              />
            ))}
          </svg>
        );
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-80 h-80 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/20 to-[#00ffea]/20 rounded-full blur-3xl" />
          <div className="relative w-full h-full">
            {getModeVisual()}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        <button
          onClick={() => handleModeChange("globe")}
          className={`px-4 py-2 rounded-lg backdrop-blur-xl border text-xs font-medium transition-all duration-300 ${
            mode === "globe"
              ? "bg-[#00d9ff] text-[#0a1628] border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.6)]"
              : "bg-white/5 text-white border-white/20 hover:border-[#00d9ff]"
          }`}
        >
          GLOBE
        </button>
        <button
          onClick={() => handleModeChange("hardware")}
          className={`px-4 py-2 rounded-lg backdrop-blur-xl border text-xs font-medium transition-all duration-300 ${
            mode === "hardware"
              ? "bg-[#00d9ff] text-[#0a1628] border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.6)]"
              : "bg-white/5 text-white border-white/20 hover:border-[#00d9ff]"
          }`}
        >
          HARDWARE
        </button>
        <button
          onClick={() => handleModeChange("ai")}
          className={`px-4 py-2 rounded-lg backdrop-blur-xl border text-xs font-medium transition-all duration-300 ${
            mode === "ai"
              ? "bg-[#00d9ff] text-[#0a1628] border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.6)]"
              : "bg-white/5 text-white border-white/20 hover:border-[#00d9ff]"
          }`}
        >
          AI
        </button>
        <button
          onClick={() => handleModeChange("software")}
          className={`px-4 py-2 rounded-lg backdrop-blur-xl border text-xs font-medium transition-all duration-300 ${
            mode === "software"
              ? "bg-[#00d9ff] text-[#0a1628] border-[#00d9ff] shadow-[0_0_20px_rgba(0,217,255,0.6)]"
              : "bg-white/5 text-white border-white/20 hover:border-[#00d9ff]"
          }`}
        >
          SOFTWARE
        </button>
      </div>
    </div>
  );
}
