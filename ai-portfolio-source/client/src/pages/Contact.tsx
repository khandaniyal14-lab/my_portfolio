import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCard from "@/components/AnimatedCard";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero — asymmetric */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-gold text-sm font-display tracking-[0.2em] uppercase">
                Contact
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white leading-[1.1]">
                Let&apos;s Build Something Together
              </h1>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
                For technical collaborations, consulting inquiries, or
                engineering leadership roles — I respond within 24 hours.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Grid — asymmetric */}
      <section className="pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left: contact channels */}
            <div className="lg:col-span-2 space-y-4">
              <ScrollReveal>
                <a
                  href="mailto:Khandaniyal1144@gmail.com"
                  className="block group"
                >
                  <div className="flex items-center gap-5 p-6 rounded-xl border border-white/5 bg-card hover:border-gold/20 transition-all duration-300 hover:glow-gold">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-sm font-display font-medium text-white group-hover:text-gold transition-colors">
                        Email
                      </h3>
                      <p className="text-muted-foreground text-sm mt-0.5">
                        Khandaniyal1144@gmail.com
                      </p>
                    </div>
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <a
                  href="https://github.com/khandaniyal14-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex items-center gap-5 p-6 rounded-xl border border-white/5 bg-card hover:border-gold/20 transition-all duration-300 hover:glow-gold">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Github size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-sm font-display font-medium text-white group-hover:text-gold transition-colors">
                        GitHub
                      </h3>
                      <p className="text-muted-foreground text-sm mt-0.5">
                        github.com/khandaniyal14-lab
                      </p>
                    </div>
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <a
                  href="https://www.linkedin.com/in/daniyal-khan-760411218/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex items-center gap-5 p-6 rounded-xl border border-white/5 bg-card hover:border-gold/20 transition-all duration-300 hover:glow-gold">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-sm font-display font-medium text-white group-hover:text-gold transition-colors">
                        LinkedIn
                      </h3>
                      <p className="text-muted-foreground text-sm mt-0.5">
                        linkedin.com/in/daniyal-khan-760411218
                      </p>
                    </div>
                  </div>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.24}>
                <a
                  href="https://wa.me/+923185941909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex items-center gap-5 p-6 rounded-xl border border-white/5 bg-card hover:border-gold/20 transition-all duration-300 hover:glow-gold">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-sm font-display font-medium text-white group-hover:text-gold transition-colors">
                        WhatsApp
                      </h3>
                      <p className="text-muted-foreground text-sm mt-0.5">
                        +923185941909
                      </p>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            </div>

            {/* Right: location + availability */}
            <div className="space-y-4">
              <ScrollReveal delay={0.1}>
                <div className="p-6 rounded-xl border border-white/5 bg-card h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin size={16} className="text-gold" />
                    <h3 className="text-sm font-display font-medium text-white">
                      Based In
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Haripur, KPK, Pakistan
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Open to remote collaboration worldwide.
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                      <span className="text-xs text-gold font-mono tracking-wider uppercase">
                        Available
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Currently accepting  AI engineering roles and
                      consulting engagements.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
