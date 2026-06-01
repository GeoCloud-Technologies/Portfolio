import { motion } from "motion/react";
import { Cpu, Brain, Code } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    icon: Cpu,
    title: "Hardware R&D",
    subtitle: "The Physical Edge",
    description: "Cutting-edge hardware diagnostics and repair; development and research. From concept to prototype, we engineer the physical foundations of tomorrow's technology.",
    features: ["Hardware Diagnostics & Repair", "IoT Device Development", "Embedded Systems", "Custom PCB Design"],
    gradient: "from-[#00d9ff] to-[#0088cc]",
    link: "/hardware-rd"
  },
  {
    icon: Brain,
    title: "AI Integration",
    subtitle: "Cognitive Focus",
    description: "Intelligent systems that learn, adapt, and evolve. We build AI solutions that transform data into actionable insights and automated decisions.",
    features: ["Machine Learning Models", "Neural Networks", "Computer Vision", "NLP Solutions"],
    gradient: "from-[#00ffea] to-[#00d9ff]",
    link: "/ai-integration"
  },
  {
    icon: Code,
    title: "Software Development",
    subtitle: "Scalable Platform",
    description: "Enterprise-grade software solutions built for scale. Modern architectures, cloud-native design, and seamless integration across your tech stack.",
    features: ["Web/ Mobile Applications", "Cloud Architecture", "API Development", "DevOps Integration"],
    gradient: "from-[#0088cc] to-[#00ffea]",
    link: "/software-development"
  }
];

export function ServicePillars() {
  return (
    <section id="service-pillars" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f1f3a] to-[#0a1628]" />

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Service <span className="bg-gradient-to-r from-[#00d9ff] to-[#00ffea] bg-clip-text text-transparent">Pillars</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three core competencies that power modern technology solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const cardId = service.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "r-d");
            return (
              <motion.div
                key={service.title}
                id={cardId}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group relative scroll-mt-24"
              >
                <div className="h-full p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#00d9ff]/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(0,217,255,0.2)]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00d9ff]/0 to-[#00d9ff]/0 group-hover:from-[#00d9ff]/5 group-hover:to-[#00ffea]/5 transition-all duration-500" />

                  <div className="relative z-10 space-y-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-[0_0_30px_rgba(0,217,255,0.3)]`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[#00d9ff] text-sm uppercase tracking-wider mb-4">
                        {service.subtitle}
                      </p>
                      <p data-nosnippet className="text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00d9ff] mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to={service.link} className={`block text-center w-full mt-6 px-6 py-3 rounded-lg bg-gradient-to-r ${service.gradient} text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)]`}>
                      Learn More
                    </Link>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00d9ff]/20 to-transparent rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
