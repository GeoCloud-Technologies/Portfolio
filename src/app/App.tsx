import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServicePillars } from "./components/ServicePillars";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a1628] overflow-x-hidden">
      <Navbar />
      <Hero />
      <ServicePillars />
      <Footer />
    </div>
  );
}