import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Landing } from "./pages/Landing";
import { AboutUs } from "./pages/AboutUs";
import { ITConsulting } from "./pages/ITConsulting";
import { HardwareRD } from "./pages/HardwareRD";
import { SoftwareDevelopment } from "./pages/SoftwareDevelopment";
import { AIIntegration } from "./pages/AIIntegration";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { Careers } from "./pages/Careers";
import { CaseStudies } from "./pages/CaseStudies";
import { Blog } from "./pages/Blog";

function ScrollToHashElement() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <div className="min-h-screen bg-[#0a1628] overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/it-consulting" element={<ITConsulting />} />
          <Route path="/hardware-rd" element={<HardwareRD />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/ai-integration" element={<AIIntegration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}