import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
  variant?: "default" | "gold";
  size?: "sm" | "md";
}

export default function TechBadge({
  name,
  variant = "default",
  size = "sm",
}: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{ y: -2 }}
      className={`inline-flex items-center font-mono text-xs font-medium transition-all duration-200 ${
        variant === "gold"
          ? "bg-gold/10 text-gold border border-gold/20 hover:border-gold/40 hover:bg-gold/15"
          : "bg-white/5 text-muted-foreground border border-white/10 hover:border-gold/30 hover:text-gold"
      } ${size === "sm" ? "px-2.5 py-1" : "px-3 py-1.5"}`}
    >
      {name}
    </motion.span>
  );
}
