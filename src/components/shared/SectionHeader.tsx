import type { SectionHeaderProps } from "@/types/components";

export default function SectionHeader({
  label,
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 flex flex-col items-center text-center ${className}`}>
      {label && (
        <p className="text-sm uppercase tracking-[0.25em] text-brand-muted/70 mb-2">
          {label}
        </p>
      )}
      <div className="w-16 h-[2px] bg-gradient-to-l from-brand-accent to-brand-accent/20 rounded-full mb-4" />
      <h2 className="font-serif text-3xl text-brand-text lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm text-brand-muted/60">{subtitle}</p>
      )}
    </div>
  );
}
