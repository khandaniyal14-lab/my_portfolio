import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/projects";
import TechBadge from "@/components/TechBadge";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCard from "@/components/AnimatedCard";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:slug");
  const [selectedScreenshot, setSelectedScreenshot] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const project = projects.find((p) => p.slug === params?.slug);

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold text-white">
            Project Not Found
          </h2>
          <Link href="/projects">
            <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-gold border border-gold/30 rounded-lg hover:bg-gold/10 transition-colors">
              <ArrowLeft size={16} />
              Back to Projects
            </button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-24 lg:pt-32 pb-16">
        <div className="container">
          <Link href="/projects">
            <button className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm mb-8">
              <ArrowLeft size={16} />
              Back to Projects
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <h1 className="text-3xl lg:text-5xl font-display font-bold text-white">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} variant="gold" size="md" />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gold/30 text-gold text-sm font-medium hover:bg-gold/10 transition-all"
            >
              <Github size={16} />
              View Source
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold text-background text-sm font-semibold hover:bg-gold-soft transition-all hover:glow-gold"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 bg-surface">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-sm font-display tracking-[0.2em] uppercase text-gold mb-8">
              Screenshots
            </h2>
          </ScrollReveal>

          <div className="relative rounded-xl overflow-hidden border border-white/5 bg-card">
            <img
              src={project.screenshots[selectedScreenshot]}
              alt={`Screenshot ${selectedScreenshot + 1}`}
              className="w-full aspect-[16/9] object-cover cursor-pointer"
              onClick={() => setModalOpen(true)}
            />
            {project.screenshots.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setSelectedScreenshot((prev) =>
                      prev === 0 ? project.screenshots.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-gold/20 transition-colors"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() =>
                    setSelectedScreenshot((prev) =>
                      prev === project.screenshots.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-gold/20 transition-colors"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail strip */}
          {project.screenshots.length > 1 && (
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {project.screenshots.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedScreenshot(i)}
                  className={`flex-shrink-0 w-32 h-20 rounded-lg overflow-hidden border transition-all ${
                    i === selectedScreenshot
                      ? "border-gold glow-gold"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Demo Video */}
      {project.demoVideo && (
        <section className="py-16">
          <div className="container">
            <ScrollReveal>
              <h2 className="text-sm font-display tracking-[0.2em] uppercase text-gold mb-8">
                Demo Video
              </h2>
            </ScrollReveal>
            <div className="rounded-xl overflow-hidden border border-white/5 bg-card aspect-video">
              <video
                src={project.demoVideo}
                controls
                className="w-full h-full"
                preload="metadata"
              >
                Your browser does not support the video element.
              </video>
            </div>
          </div>
        </section>
      )}

      {/* Problem Statement */}
      <section className="py-16 bg-surface">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-sm font-display tracking-[0.2em] uppercase text-gold mb-4">
              Problem Statement
            </h2>
            <p className="text-lg text-white leading-relaxed max-w-3xl">
              {project.shortDescription}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-sm font-display tracking-[0.2em] uppercase text-gold mb-8">
              Key Features
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, i) => (
              <AnimatedCard key={i} delay={i * 0.08}>
                <div className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">◆</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      {project.architectureImage && (
        <section className="py-16 bg-surface">
          <div className="container">
            <ScrollReveal>
              <h2 className="text-sm font-display tracking-[0.2em] uppercase text-gold mb-8">
                Architecture
              </h2>
            </ScrollReveal>
            <div className="rounded-xl overflow-hidden border border-white/5 bg-card p-4">
              <img
                src={project.architectureImage}
                alt="System architecture"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </section>
      )}

      {/* AI Workflow */}
      {project.aiWorkflow && project.aiWorkflow.length > 0 && (
        <section className="py-16">
          <div className="container">
            <ScrollReveal>
              <h2 className="text-sm font-display tracking-[0.2em] uppercase text-gold mb-8">
                AI Workflow
              </h2>
            </ScrollReveal>
            <div className="space-y-4">
              {project.aiWorkflow.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-xs font-display font-bold">
                      {i + 1}
                    </div>
                    {i < project.aiWorkflow!.length - 1 && (
                      <div className="w-px h-8 bg-gold/20 mt-1" />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="text-white font-medium">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technical Challenges */}
      <section className="py-16 bg-surface">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-sm font-display tracking-[0.2em] uppercase text-gold mb-8">
              Technical Challenges
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {project.challenges.map((c, i) => (
              <AnimatedCard key={i} delay={i * 0.1} glow>
                <h3 className="text-white font-display font-semibold mb-3">
                  {c.challenge}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <span className="text-gold font-medium">Solution:</span>{" "}
                  {c.solution}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-sm font-display tracking-[0.2em] uppercase text-gold mb-8">
              Lessons Learned
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {project.lessonsLearned.map((lesson, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-lg border border-white/5 bg-card"
              >
                <span className="text-gold mt-1">✦</span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {lesson}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 bg-surface">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-sm font-display tracking-[0.2em] uppercase text-gold mb-8">
              Technologies Used
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} variant="gold" size="md" />
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white hover:text-gold transition-colors"
            onClick={() => setModalOpen(false)}
            aria-label="Close modal"
          >
            ✕
          </button>
          <img
            src={project.screenshots[selectedScreenshot]}
            alt="Full size screenshot"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
