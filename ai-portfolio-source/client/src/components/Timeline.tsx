import { motion } from "framer-motion";
import type { Experience } from "@/types";
import { Briefcase } from "lucide-react";

interface TimelineProps {
  experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" />

      <div className="space-y-12 lg:space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.23, 1, 0.32, 1],
              delay: index * 0.15,
            }}
            className={`relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 lg:left-1/2 w-3 h-3 -translate-x-1.5 mt-1.5 rounded-full bg-gold glow-gold-strong z-10" />

            {/* Content */}
            <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"} pl-10 lg:pl-0`}>
              <span className="inline-flex items-center gap-2 text-gold text-sm font-display font-medium">
                <Briefcase size={14} />
                {exp.period}
              </span>
              <h3 className="mt-2 text-xl font-display font-bold text-white">
                {exp.role}
              </h3>
              <p className="mt-1 text-gold-soft font-medium">{exp.company}</p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
              <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                {exp.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-gold mt-1.5 text-xs">◆</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Spacer for the other side */}
            <div className="hidden lg:block flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
