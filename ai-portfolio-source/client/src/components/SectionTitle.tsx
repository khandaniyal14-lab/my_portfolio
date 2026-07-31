import ScrollReveal from "./ScrollReveal";

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <ScrollReveal className={`text-center mb-12 lg:mb-16 ${className}`}>
      <span className="text-gold text-sm font-display font-medium tracking-[0.2em] uppercase">
        {label}
      </span>
      <h2 className="mt-4 text-3xl lg:text-4xl font-display font-bold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </ScrollReveal>
  );
}
