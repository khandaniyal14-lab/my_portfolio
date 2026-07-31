import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glow?: boolean;
}

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  glow = false,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
        delay,
      }}
      whileHover={glow ? { y: -4 } : undefined}
      className={`rounded-xl border border-white/5 bg-card p-6 transition-all duration-300 hover:border-gold/20 ${
        glow ? "hover:glow-gold" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface SkillCardProps {
  name: string;
  level: number;
  category: string;
  index: number;
}

export function SkillCard({ name, level, category, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
        delay: index * 0.05,
      }}
      className="group relative p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:border-gold/20 hover:bg-gold/[0.03] transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.23, 1, 0.32, 1],
            delay: index * 0.05 + 0.3,
          }}
          className="h-full rounded-full bg-gradient-to-r from-gold to-gold-soft"
        />
      </div>
      <span className="mt-2 inline-block text-[10px] uppercase tracking-wider text-muted-foreground/50">
        {category}
      </span>
    </motion.div>
  );
}
