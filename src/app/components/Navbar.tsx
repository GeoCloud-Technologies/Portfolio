import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ExternalLink, ChevronDown, Layers } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router";
import CroppedLogo from "@/imports/Cropped_Logo.png";
import BIMAtelierLogo from "@/imports/BIMAtelier.jpeg";
import TotozWellnessLogo from "@/imports/TotozWellness.jpeg";

const MotionLink = motion(Link);

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileShowcaseOpen, setIsMobileShowcaseOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const exploreRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "IT CONSULTING", path: "/it-consulting" },
    { name: "SOFTWARE DEVELOPMENT", path: "/software-development" },
    { name: "AI INTEGRATION", path: "/ai-integration" },
    { name: "HARDWARE R&D", path: "/hardware-rd" },
    { name: "CONTACT", path: "/contact" }
  ];

  const showcaseProjects = [
    {
      title: "BIM Atelier Consult",
      domain: "bimatelierconsult.co.ke",
      url: "https://bimatelierconsult.co.ke/",
      logo: BIMAtelierLogo,
      category: "Architecture & Engineering"
    },
    {
      title: "Totoz Wellness",
      domain: "totozwellness.org",
      url: "https://www.totozwellness.org/",
      logo: TotozWellnessLogo,
      category: "Health & Care Platform"
    }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (exploreRef.current && !exploreRef.current.contains(event.target as Node)) {
        setIsExploreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScrollToTrustedBy = () => {
    setIsExploreOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileShowcaseOpen(false);
    if (location.pathname !== "/") {
      navigate("/#trusted-by");
    } else {
      document.getElementById("trusted-by")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <img
              src={CroppedLogo}
              alt="GeoCloud"
              className="h-10 w-10 transition-transform group-hover:scale-105"
            />
            <div>
              <div className="text-white font-bold text-lg leading-tight group-hover:text-[#00d9ff] transition-colors">GeoCloud</div>
              <div className="text-[#00d9ff] text-xs">Technologies</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white text-xs font-medium tracking-wide hover:text-[#00d9ff] transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Explore Solutions Dropdown */}
          <div className="relative hidden lg:block" ref={exploreRef}>
            <button
              onClick={() => setIsExploreOpen(!isExploreOpen)}
              className="px-7 py-3 bg-[#00d9ff] text-[#0a1628] text-xs font-bold tracking-wide rounded-full hover:shadow-[0_0_25px_rgba(0,217,255,0.7)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>EXPLORE SOLUTIONS</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExploreOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isExploreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-3 w-96 rounded-2xl backdrop-blur-2xl bg-[#0a1628]/95 border border-[#00d9ff]/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)] p-5 z-50"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                    <span className="text-white text-xs font-bold tracking-wider uppercase flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#00d9ff]" />
                      Featured Client Projects
                    </span>
                    <span className="text-[#00d9ff] text-[10px] bg-[#00d9ff]/10 px-2 py-0.5 rounded-full border border-[#00d9ff]/20">
                      Live Sites
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    {showcaseProjects.map((project) => (
                      <a
                        key={project.title}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsExploreOpen(false)}
                        className="group flex items-center gap-3.5 p-3 rounded-xl bg-white/5 hover:bg-[#00d9ff]/10 border border-white/10 hover:border-[#00d9ff]/40 transition-all duration-200"
                      >
                        <div className="w-12 h-12 rounded-lg bg-white p-1.5 flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-105 transition-transform">
                          <img src={project.logo} alt={project.title} className="w-full h-full object-contain rounded" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-white font-semibold text-xs group-hover:text-[#00d9ff] transition-colors truncate">
                              {project.title}
                            </span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#00d9ff] opacity-80 shrink-0" />
                          </div>
                          <p className="text-[#00d9ff]/90 text-[11px] font-medium">{project.category}</p>
                          <p className="text-gray-400 text-[10px] truncate">{project.domain}</p>
                        </div>
                      </a>
                    ))}
                  </div>

                  <button
                    onClick={handleScrollToTrustedBy}
                    className="w-full py-2.5 bg-gradient-to-r from-[#00d9ff]/20 to-[#00ffea]/20 border border-[#00d9ff]/40 text-[#00d9ff] text-xs font-semibold rounded-xl hover:bg-[#00d9ff] hover:text-[#0a1628] transition-all duration-200 text-center cursor-pointer"
                  >
                    View All Showcase Projects &rarr;
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:text-[#00d9ff] transition-colors"
            onClick={() => {
              setIsMobileMenuOpen(true);
              setIsMobileShowcaseOpen(false);
            }}
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
            className="fixed inset-0 z-50 flex flex-col bg-[#0a1628]/95 overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 cursor-pointer">
                <img
                  src={CroppedLogo}
                  alt="GeoCloud"
                  className="h-10 w-10"
                />
                <div>
                  <div className="text-white font-bold text-lg leading-tight">GeoCloud</div>
                  <div className="text-[#00d9ff] text-xs">Technologies</div>
                </div>
              </Link>
              <button
                className="p-2 text-white hover:text-[#00d9ff] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-6 py-8 px-6">
              {menuItems.map((item, i) => (
                <MotionLink
                  key={item.name}
                  to={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-lg font-medium tracking-wide hover:text-[#00d9ff] transition-colors duration-300"
                >
                  {item.name}
                </MotionLink>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.05 + 0.1 }}
                onClick={() => setIsMobileShowcaseOpen(!isMobileShowcaseOpen)}
                className="mt-4 px-8 py-3.5 bg-[#00d9ff] text-[#0a1628] text-xs font-bold tracking-wide rounded-full shadow-[0_0_20px_rgba(0,217,255,0.4)] w-full max-w-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <span>EXPLORE ALL SOLUTIONS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMobileShowcaseOpen ? "rotate-180" : ""}`} />
              </motion.button>

              {/* Showcase Projects collapsible section in mobile menu */}
              <AnimatePresence>
                {isMobileShowcaseOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-sm space-y-3 overflow-hidden"
                  >
                    <p className="text-[#00d9ff] text-xs font-semibold uppercase tracking-wider text-center pt-2 mb-1">
                      Featured Client Projects
                    </p>

                    {showcaseProjects.map((project) => (
                      <a
                        key={project.title}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00d9ff] transition-all"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white p-1 shrink-0 flex items-center justify-center">
                          <img src={project.logo} alt={project.title} className="w-full h-full object-contain rounded" />
                        </div>
                        <div className="text-left flex-1 min-w-0">
                          <div className="text-white text-sm font-semibold flex items-center gap-1.5 truncate">
                            {project.title} <ExternalLink className="w-3.5 h-3.5 text-[#00d9ff] shrink-0" />
                          </div>
                          <div className="text-gray-400 text-xs truncate">{project.domain}</div>
                        </div>
                      </a>
                    ))}

                    <button
                      onClick={handleScrollToTrustedBy}
                      className="w-full py-2.5 bg-gradient-to-r from-[#00d9ff]/20 to-[#00ffea]/20 border border-[#00d9ff]/40 text-[#00d9ff] text-xs font-semibold rounded-xl hover:bg-[#00d9ff] hover:text-[#0a1628] transition-all duration-200 text-center cursor-pointer mt-2"
                    >
                      View Showcase Section &rarr;
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

