interface SkillChipProps {
  name: string;
  proficiency: number;
  variant?: "primary" | "accent";
}

export function SkillChip({ name, proficiency, variant = "primary" }: SkillChipProps) {
  const barColor = variant === "accent" ? "bg-accent" : "bg-primary";
  
  return (
    <div className="skill-chip flex items-center justify-between p-3 bg-card rounded-lg border border-border" data-testid={`skill-${name.toLowerCase().replace(/\s+/g, "-")}`}>
      <span className="font-medium">{name}</span>
      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full ${barColor} rounded-full transition-all duration-300`} 
          style={{ width: `${proficiency}%` }}
        />
      </div>
    </div>
  );
}
