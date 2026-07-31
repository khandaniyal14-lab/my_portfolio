import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import TechBadge from "./TechBadge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
        delay: index * 0.1,
      }}
    >
      <Link href={`/projects/${project.slug}`}>
        <motion.div
          whileHover={{ y: -6 }}
          className="group relative rounded-xl overflow-hidden border border-white/5 hover:border-gold/20 transition-all duration-300 hover:glow-gold"
        > 
          {/* Cover Image */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent" />
            <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight size={16} className="text-gold" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-display font-semibold text-white group-hover:text-gold transition-colors duration-300">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {project.shortDescription}
            </p>

            {/* Tech Badges */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
              {project.technologies.length > 5 && (
                <span className="inline-flex items-center px-2 py-1 text-xs text-muted-foreground">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
