import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero — asymmetric */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-gold text-sm font-display tracking-[0.2em] uppercase">
                Projects
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white leading-[1.1]">
                Systems Built, Systems Shipped
              </h1>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
                A curated collection of production systems — each designed to
                solve real engineering challenges at scale.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Grid — asymmetric 2+1 layout */}
      <section className="pb-24">
        <div className="container">
          <div className="space-y-8">
            {/* Featured project — full width */}
            {projects[0] && (
              <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                  <ProjectCard project={projects[0]} index={0} />
                </div>
                <div className="lg:col-span-2 flex flex-col gap-6">
                  {projects[1] && (
                    <ProjectCard project={projects[1]} index={1} />
                  )}
                </div>
              </div>
            )}

            {/* Third project — offset */}
            {projects[2] && (
              <ScrollReveal>
                <div className="grid lg:grid-cols-5 gap-6">
                  <div className="hidden lg:block lg:col-span-2" />
                  <div className="lg:col-span-3">
                    <ProjectCard project={projects[2]} index={2} />
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
