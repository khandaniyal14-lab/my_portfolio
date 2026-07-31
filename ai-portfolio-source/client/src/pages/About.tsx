import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Target } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCard from "@/components/AnimatedCard";
import { experiences, education, skills } from "@/data/site";
import TechBadge from "@/components/TechBadge";

export default function About() {
  const coreCompetencies = Array.from(
    new Set(skills.map((s) => s.category))
  );

  return (
    <div className="min-h-screen">
      {/* ================= HERO ================= */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="text-gold text-sm font-display tracking-[0.2em] uppercase">
                About Me
              </span>

              <h1 className="mt-4 text-4xl lg:text-6xl font-display font-bold text-white leading-[1.1]">
                Building Production-Ready AI Systems That Create Business Impact
              </h1>

              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-3xl">
                I'm <span className="text-white font-semibold">Daniyal Khan</span>,
                an AI Fullstack Engineer with 2+ years of experience developing
                intelligent software powered by Large Language Models, Computer
                Vision, workflow automation, and modern cloud technologies. My
                passion is transforming complex AI capabilities into reliable,
                scalable products that solve real-world business challenges.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-white/10 bg-card p-5">
                  <h3 className="text-2xl font-display font-bold text-gold">
                    2+
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Years Building AI Products
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-card p-5">
                  <h3 className="text-2xl font-display font-bold text-gold">
                    10+
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Production AI Projects
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-card p-5">
                  <h3 className="text-2xl font-display font-bold text-gold">
                    50%
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Workflow Efficiency Gains
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-card p-5">
                  <h3 className="text-2xl font-display font-bold text-gold">
                    Global
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Clients Across UK, US & MENA
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= PROFILE ================= */}
      <section className="pb-20">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="text-xs font-display tracking-[0.2em] uppercase text-gold mb-6">
                  Professional Profile
                </h2>

                <div className="space-y-6 text-muted-foreground leading-relaxed text-[15px]">
                  <p>
                    I am an AI Fullstack Engineer based in Pakistan, currently
                    completing a Bachelor's degree in Artificial Intelligence
                    while working full-time designing and delivering production
                    AI solutions. Over the past two years, I have developed
                    intelligent software ranging from Computer Vision systems
                    and Retrieval-Augmented Generation (RAG) applications to
                    enterprise workflow automation platforms and multi-tenant
                    SaaS products.
                  </p>

                  <p>
                    My expertise spans the complete software lifecycle—from
                    backend architecture with FastAPI and PostgreSQL to
                    responsive React frontends, cloud deployment with Docker,
                    and advanced AI integration using LangChain, LangGraph,
                    vector search, embeddings, and modern LLM APIs. I enjoy
                    building systems that are not only technically impressive
                    but also deliver measurable business value.
                  </p>

                  <p>
                    Throughout my career I have collaborated with startups and
                    international clients across manufacturing, CRM,
                    recruitment, productivity, and e-commerce sectors. My work
                    focuses on reducing manual effort, improving operational
                    efficiency, and helping organizations adopt AI with
                    confidence through scalable, maintainable software.
                  </p>

                  <p>
                    Beyond development, I continuously explore emerging AI
                    technologies including autonomous agents, reasoning models,
                    multimodal AI, and workflow orchestration. I believe the
                    future belongs to engineers who can combine deep technical
                    expertise with strong product thinking and practical
                    problem-solving.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.15}>
                <AnimatedCard glow className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="text-gold" size={18} />

                    <h3 className="text-sm font-display font-semibold uppercase tracking-wider text-white">
                      Career Goals
                    </h3>
                  </div>

                  <ul className="space-y-5 text-sm text-muted-foreground">
                    {[
                      "Build AI products that positively impact millions of users worldwide.",
                      "Become a leading AI Fullstack Engineer specializing in Agentic AI systems.",
                      "Design autonomous workflow automation platforms for enterprise businesses.",
                      "Contribute to open-source AI frameworks and developer tools.",
                      "Work alongside world-class engineering teams solving challenging real-world problems.",
                      "Continue advancing expertise in LLMs, Computer Vision, distributed systems, and AI infrastructure.",
                    ].map((goal, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 leading-relaxed"
                      >
                        <span className="text-gold font-mono text-xs mt-1">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 rounded-lg border border-gold/20 bg-gold/5 p-5">
                    <h4 className="text-sm font-semibold text-white mb-3">
                      Currently Focusing On
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "Agentic AI",
                        "LangGraph",
                        "LLMs",
                        "Computer Vision",
                        "FastAPI",
                        "React",
                        "Docker",
                        "Workflow Automation",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-gold/20 bg-black/30 px-3 py-1 text-xs text-gold"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE COMPETENCIES ================= */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-gold text-xs font-display tracking-[0.2em] uppercase">
              Technical Expertise
            </span>

            <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreCompetencies.map((cat, i) => {
              const catSkills = skills.filter(
                (skill) => skill.category === cat
              );

              return (
                <ScrollReveal key={cat} delay={i * 0.08}>
                  <div className="rounded-xl border border-white/5 bg-card p-5 h-full">
                    <h4 className="mb-4 text-xs font-display uppercase tracking-wider text-gold">
                      {cat}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {catSkills.map((skill) => (
                        <TechBadge
                          key={skill.name}
                          name={skill.name}
                        />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

            {/* ================= EXPERIENCE ================= */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center gap-3 mb-10">
            <Briefcase size={16} className="text-gold" />
            <span className="text-xs font-display tracking-[0.2em] uppercase text-gold">
              Professional Experience
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="space-y-8">
            {/* Experience 1 */}
            <ScrollReveal>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.25 }}
                className="grid lg:grid-cols-4 gap-8 rounded-2xl border border-white/5 bg-card p-8 hover:border-gold/20 transition-all"
              >
                <div>
                  <span className="text-xs font-mono text-muted-foreground">
                    june 2024 — june 2026
                  </span>

                  <h3 className="mt-3 text-gold font-display font-semibold">
                    TechnoHub AI
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Haripur / Remote
                  </p>
                </div>

                <div className="lg:col-span-3">
                  <h2 className="text-2xl font-display font-semibold text-white">
                    AI Automation & Fullstack Engineer
                  </h2>

                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Designing and delivering production-ready AI software for
                    startups and enterprise clients. Responsible for backend
                    architecture, LLM integration, workflow automation,
                    deployment strategy, and scalable full-stack development.
                  </p>

                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    {[
                      "Architected and shipped AI copilots using FastAPI, Gemini API, REST architectures, and modern LLM workflows.",
                      "Built multi-tenant SaaS platforms with authentication, RBAC, subscription management, and production deployment.",
                      "Integrated n8n, Twilio, and third-party APIs to automate messaging, notifications, and business workflows.",
                      "Designed scalable backend architectures supporting production AI systems for international clients.",
                      "Developed intelligent automation pipelines reducing client response times by up to 40%.",
                      "Led deployment strategy using Docker, Render, PostgreSQL, and cloud infrastructure.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 items-start"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-gold shrink-0" />

                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "FastAPI",
                      "React",
                      "Gemini API",
                      "Docker",
                      "PostgreSQL",
                      "Redis",
                      "n8n",
                      "Twilio",
                      "LangChain",
                    ].map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Experience 2 */}
            <ScrollReveal delay={0.15}>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.25 }}
                className="grid lg:grid-cols-4 gap-8 rounded-2xl border border-white/5 bg-card p-8 hover:border-gold/20 transition-all"
              >
                <div>
                  <span className="text-xs font-mono text-muted-foreground">
                    Mar 2023 — Mar 2024
                  </span>

                  <h3 className="mt-3 text-gold font-display font-semibold">
                    Freelance
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Remote
                  </p>
                </div>

                <div className="lg:col-span-3">
                  <h2 className="text-2xl font-display font-semibold text-white">
                    AI Automation Developer
                  </h2>

                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Delivered AI-powered software solutions for businesses in
                    e-commerce, CRM, manufacturing, and productivity domains,
                    helping clients automate operations and leverage AI for
                    business growth.
                  </p>

                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    {[
                      "Developed Retrieval-Augmented Generation (RAG) chatbots with semantic document search.",
                      "Created reusable Python libraries for LLM integration and API orchestration.",
                      "Built intelligent workflow automation systems connecting multiple business platforms.",
                      "Automated reporting and data processing pipelines reducing manual effort by up to 50%.",
                      "Delivered production-ready AI applications while maintaining a 100% on-time delivery record.",
                      "Worked directly with international clients to design scalable AI solutions tailored to business needs.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 items-start"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-gold shrink-0" />

                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Python",
                      "Flask",
                      "FastAPI",
                      "LangChain",
                      "FAISS",
                      "React",
                      "REST APIs",
                      "Automation",
                    ].map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="py-20 bg-surface">
        <div className="container">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-gold text-xs font-display tracking-[0.2em] uppercase">
              Career Highlights
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                value: "40–50%",
                title: "Efficiency Improvement",
                desc: "Delivered workflow automation systems that significantly reduced manual operations for multiple clients.",
              },
              {
                value: "10+",
                title: "Production AI Projects",
                desc: "Successfully designed and deployed intelligent software across several business domains.",
              },
              {
                value: "Global",
                title: "International Clients",
                desc: "Built AI platforms used by organizations across the global region.",
              },
              {
                value: "100%",
                title: "On-Time Delivery",
                desc: "Maintained a perfect delivery record while managing multiple AI development projects.",
              },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <AnimatedCard glow className="h-full">
                  <h2 className="text-4xl font-display font-bold text-gold">
                    {item.value}
                  </h2>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION STARTS IN PART 3 ================= */}

            {/* ================= EDUCATION ================= */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap size={16} className="text-gold" />
            <span className="text-xs font-display tracking-[0.2em] uppercase text-gold">
              Education & Certifications
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Degree */}
            <ScrollReveal>
              <AnimatedCard glow className="h-full">
                <span className="text-xs font-mono text-muted-foreground">
                  2023 — Present
                </span>

                <h2 className="mt-3 text-2xl font-display font-semibold text-white">
                  Bachelor of Science in Artificial Intelligence
                </h2>

                <p className="mt-2 text-gold font-medium">
                  University of Haripur
                </p>

                <p className="mt-5 leading-relaxed text-muted-foreground">
                  Currently pursuing a Bachelor's degree in Artificial
                  Intelligence while working full-time as an AI Fullstack
                  Engineer. My studies focus on Machine Learning, Deep Learning,
                  Natural Language Processing, Computer Vision, Data Science,
                  and Software Engineering.
                </p>

                <div className="mt-8 flex items-center justify-between rounded-xl border border-gold/20 bg-gold/5 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Current CGPA
                    </p>

                    <h3 className="mt-1 text-3xl font-bold text-gold">
                      3.79/ 4.00
                    </h3>
                  </div>

                  <div className="text-right">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Status
                    </p>

                    <p className="mt-1 text-sm text-white">
                      Available for Full-Time Work
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            </ScrollReveal>

            {/* Certifications */}
            <ScrollReveal delay={0.15}>
              <AnimatedCard className="h-full">
                <h2 className="text-2xl font-display font-semibold text-white">
                  Certifications
                </h2>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      title: "Agentic AI",
                      provider: "DeepLearning.AI",
                    },
                    {
                      title: "Machine Learning",
                      provider: "Coursera",
                    },
                    {
                      title: "NumPy & Pandas",
                      provider: "Coursera",
                    },
                    {
                      title: "Scikit-learn",
                      provider: "Coursera",
                    },
                    {
                      title: "IELTS Overall Band 7.5",
                      provider: "Professional English",
                    },
                    {
                      title: "Game Development",
                      provider: "NAVTTC",
                    },
                  ].map((cert) => (
                    <div
                      key={cert.title}
                      className="flex items-start gap-4"
                    >
                      <div className="mt-2 h-2 w-2 rounded-full bg-gold" />

                      <div>
                        <h4 className="font-medium text-white">
                          {cert.title}
                        </h4>

                        <p className="text-sm text-muted-foreground">
                          {cert.provider}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= PERSONAL PHILOSOPHY ================= */}
      <section className="py-20 bg-surface">
        <div className="container">
          <ScrollReveal>
            <AnimatedCard glow className="max-w-5xl mx-auto text-center">
              <span className="text-gold text-xs uppercase tracking-[0.2em] font-display">
                My Philosophy
              </span>

              <h2 className="mt-6 text-3xl lg:text-5xl font-display font-bold text-white leading-tight">
                Great AI Is Built Around Real Problems,
                <br />
                Not Just Great Models.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                I believe successful AI products combine intelligent models,
                scalable software engineering, thoughtful user experiences, and
                measurable business outcomes. My goal is to build AI systems
                that people rely on every day—not experimental demos, but
                production-ready software that delivers lasting value.
              </p>
            </AnimatedCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="rounded-3xl border border-gold/20 bg-card p-10 lg:p-16 text-center">
              <span className="text-gold text-xs uppercase tracking-[0.2em] font-display">
                Let's Build Together
              </span>

              <h2 className="mt-5 text-4xl lg:text-5xl font-display font-bold text-white">
                Looking for an AI Engineer?
              </h2>

              <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground">
                Whether you need an AI-powered SaaS platform, intelligent
                automation, computer vision solution, LLM application, or a
                scalable backend architecture, I'm always interested in solving
                meaningful engineering challenges and building products that
                make a real impact.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-xl bg-gold px-6 py-3 text-black font-semibold transition hover:opacity-90"
                >
                  Let's Talk
                </a>

                <a
                  href="/projects"
                  className="rounded-xl border border-white/10 px-6 py-3 text-white transition hover:border-gold hover:text-gold"
                >
                  View Projects
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}