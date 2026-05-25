import { Mail, MapPin, Phone, Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { Link } from "react-router";
import LogoWithName from "@/imports/Logo_with_name.png";

export function Footer() {
  return (
    <footer id="contact" className="relative py-16 px-6 border-t border-[#00d9ff]/20 scroll-mt-10">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <img
              src={LogoWithName}
              alt="GeoCloud Technologies"
              className="h-12 w-auto"
            />
            <p className="text-gray-400 text-sm">
              Your vision, digitized. Your infrastructure, intelligent. Your growth, realized.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.linkedin.com/company/geo-cloud-technologies/" className="text-gray-400 hover:text-[#00d9ff] transition-colors" aria-label="LinkedIn" target="_blank">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://web.facebook.com/geocloudtechnologies/" className="text-gray-400 hover:text-[#00d9ff] transition-colors" aria-label="Facebook" target="_blank">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/geocloudtechnologies/" className="text-gray-400 hover:text-[#00d9ff] transition-colors" aria-label="Instagram" target="_blank">
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a href="https://github.com/GeoCloud-Technologies" className="text-gray-400 hover:text-[#00d9ff] transition-colors" aria-label="GitHub" target="_blank">
                <Github className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/#hardware-r-d" className="hover:text-[#00d9ff] cursor-pointer transition-colors block">
                  Hardware R&D
                </Link>
              </li>
              <li>
                <Link to="/#ai-integration" className="hover:text-[#00d9ff] cursor-pointer transition-colors block">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link to="/#software-development" className="hover:text-[#00d9ff] cursor-pointer transition-colors block">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/it-consulting" className="hover:text-[#00d9ff] cursor-pointer transition-colors block">
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-[#00d9ff] cursor-pointer transition-colors block">
                  About Us
                </Link>
              </li>
              <li className="hover:text-[#00d9ff] cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-[#00d9ff] cursor-pointer transition-colors">Case Studies</li>
              <li className="hover:text-[#00d9ff] cursor-pointer transition-colors">Blog</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#00d9ff] mt-0.5 flex-shrink-0" />
                <span>geocloudtechnologies@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#00d9ff] mt-0.5 flex-shrink-0" />
                <span>+254 (707) 778-961 </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00d9ff] mt-0.5 flex-shrink-0" />
                <span>Thika, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#00d9ff]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 text-center md:text-left">
          <p>© 2026 GeoCloud Technologies. All rights reserved.</p>
          <p>Designed by <a href="https://www.georgeclaudio.me/" className="hover:text-[#00d9ff] transition-colors">George Claudio</a></p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#00d9ff] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00d9ff] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
