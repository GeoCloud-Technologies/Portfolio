import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import CroppedLogo from "@/imports/Cropped_Logo.png";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    "IT CONSULTING",
    "SOFTWARE DEVELOPMENT",
    "AI INTEGRATION",
    "HARDWARE R&D",
    "CONTACT"
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={CroppedLogo}
              alt="GeoCloud"
              className="h-10 w-10"
            />
            <div>
              <div className="text-white font-bold text-lg leading-tight">GeoCloud</div>
              <div className="text-[#00d9ff] text-xs">Technologies</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white text-xs font-medium tracking-wide hover:text-[#00d9ff] transition-colors duration-300 cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="hidden lg:block px-7 py-3 bg-[#00d9ff] text-[#0a1628] text-xs font-bold tracking-wide rounded-full hover:shadow-[0_0_20px_rgba(0,217,255,0.6)] transition-all duration-300">
            EXPLORE SOLUTIONS
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:text-[#00d9ff] transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 flex flex-col bg-[#0a1628]/95"
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src={CroppedLogo}
                  alt="GeoCloud"
                  className="h-10 w-10"
                />
                <div>
                  <div className="text-white font-bold text-lg leading-tight">GeoCloud</div>
                  <div className="text-[#00d9ff] text-xs">Technologies</div>
                </div>
              </div>
              <button
                className="p-2 text-white hover:text-[#00d9ff] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-xl font-medium tracking-wide hover:text-[#00d9ff] transition-colors duration-300"
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
                className="mt-8 px-8 py-4 bg-[#00d9ff] text-[#0a1628] text-sm font-bold tracking-wide rounded-full shadow-[0_0_20px_rgba(0,217,255,0.4)]"
              >
                EXPLORE SOLUTIONS
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
