import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import { SkillCard } from "@/components/AnimatedCard";
import { projects } from "@/data/projects";
import { skills, experiences } from "@/data/site";

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/hero-bg_092c5eac.png"
          alt=""
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/3 left-10 w-32 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent hidden lg:block" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold text-xs font-display tracking-wider uppercase mb-8">
              <Sparkles size={12} />
              AI Full-Stack Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight"
          >
            <span className="text-white">Building </span>
            <span className="text-gradient-gold">Intelligent</span>
            <br />
            <span className="text-white">Systems</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            I architect and build production-grade AI systems — from LLM-powered
            agents to scalable full-stack applications that solve real-world
            problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link href="/projects">
              <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold text-background font-display font-semibold text-sm transition-all duration-300 hover:bg-gold-soft hover:glow-gold-strong">
                Explore the Work
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </Link>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gold/30 text-gold font-display font-medium text-sm transition-all duration-300 hover:bg-gold/10 hover:border-gold/50">
                Get in Touch
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex items-center gap-6"
          >
            <a
              href="https://github.com/khandaniyal14-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/daniyal-khan-760411218"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:Khandaniyal1144@gmail.com"
              className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-card px-4 py-3 hover:border-gold hover:bg-gold/5 transition-all"
            >
              <Mail className="text-gold" size={18} />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">
                  Contact
                </p>
                <p className="text-sm">
                  Khandaniyal1144@gmail.com
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── About Section — asymmetric ─── */
function AboutSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: section label + title — takes 2 cols */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <span className="text-gold text-sm font-display tracking-[0.2em] uppercase">
                About
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-white leading-tight">
                Engineered with Purpose
              </h2>
              <div className="mt-6 w-20 h-px bg-gradient-to-r from-gold to-transparent" />
              <p className="mt-6 text-muted-foreground leading-relaxed">
                I bridge the gap between cutting-edge AI research and
                production-ready software — building systems that are
                intelligent, scalable, and elegant.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: cards — takes 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            {[
              {
                title: "AI & Machine Learning",
                description:
                  "Deep expertise in building LLM-powered applications, NLP pipelines, and computer vision systems using PyTorch, LangChain, and transformer architectures.",
              },
              {
                title: "Full-Stack Engineering",
                description:
                  "End-to-end development from React frontends to FastAPI backends, with deep knowledge of databases, caching, and cloud infrastructure.",
              },
              {
                title: "System Architecture",
                description:
                  "Designing scalable microservices, event-driven architectures, and distributed systems that handle millions of requests with reliability.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group p-6 rounded-xl border border-white/5 bg-card hover:border-gold/20 transition-all duration-300 hover:glow-gold">
                  <div className="flex items-start gap-4">
                    <span className="text-gold font-display font-bold text-lg mt-0.5">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-display font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Skills Section — asymmetric ─── */
function SkillsSection() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: label */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <span className="text-gold text-sm font-display tracking-[0.2em] uppercase">
                Expertise
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-white leading-tight">
                Technical Arsenal
              </h2>
              <div className="mt-6 w-20 h-px bg-gradient-to-r from-gold to-transparent" />
              <p className="mt-6 text-muted-foreground leading-relaxed">
                A curated set of technologies mastered through years of building
                production systems.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: skill categories */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            {categories.map((category) => (
              <ScrollReveal key={category}>
                <div>
                  <h3 className="text-xs font-display font-medium text-gold tracking-wider uppercase mb-4">
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {skills
                      .filter((s) => s.category === category)
                      .map((skill, i) => (
                        <SkillCard
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          category={skill.category}
                          index={i}
                        />
                      ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Projects Section — asymmetric ─── */
function FeaturedProjectsSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <span className="text-gold text-sm font-display tracking-[0.2em] uppercase">
                Portfolio
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-white leading-tight">
                Featured Work
              </h2>
              <div className="mt-6 w-20 h-px bg-gradient-to-r from-gold to-transparent" />
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Selected projects that showcase my approach to building
                intelligent, production-grade systems.
              </p>
              <Link href="/projects">
                <button className="group mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gold/30 text-gold font-display font-medium text-sm transition-all duration-300 hover:bg-gold/10 hover:border-gold/50">
                  View All
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </Link>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-3 grid md:grid-cols-2 gap-5">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Experience Section ─── */
function ExperienceSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-display tracking-[0.2em] uppercase">
              Career
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-white">
              Professional Journey
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A track record of delivering high-impact AI systems across startups
              and enterprises.
            </p>
            <div className="mt-6 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </ScrollReveal>
        <Timeline experiences={experiences} />
      </div>
    </section>
  );
}

/* ─── Contact CTA Section ─── */
function ContactCTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-gold text-sm font-display tracking-[0.2em] uppercase">
              Let&apos;s Connect
            </span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-white">
              Ready to Build Something{" "}
              <span className="text-gradient-gold">Extraordinary</span>?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you&apos;re looking for an AI engineer to join your team,
              a collaborator for a groundbreaking project, or just want to
              connect — I&apos;d love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold text-background font-display font-semibold text-sm transition-all duration-300 hover:bg-gold-soft hover:glow-gold-strong">
                  Get in Touch
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </Link>
              <a
                href="https://github.com/khandaniyal14-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-white font-display font-medium text-sm transition-all duration-300 hover:border-gold/30 hover:text-gold"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <ContactCTASection />
    </>
  );
}
