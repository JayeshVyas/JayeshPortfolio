interface TechChipProps {
  technology: string;
  variant?: "primary" | "accent" | "muted";
}

export function TechChip({ technology, variant = "primary" }: TechChipProps) {
  const variantClasses = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    muted: "bg-muted/50 text-muted-foreground"
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${variantClasses[variant]}`}
      data-testid={`tech-chip-${technology.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {technology}
    </span>
  );
}
