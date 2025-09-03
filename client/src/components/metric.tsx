interface MetricProps {
  value: string;
  label: string;
  color?: "primary" | "accent";
}

export function Metric({ value, label, color = "primary" }: MetricProps) {
  const colorClass = color === "accent" ? "text-accent" : "text-primary";
  
  return (
    <div className="text-center p-6 bg-card rounded-xl border border-border" data-testid={`metric-${label.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className={`text-3xl font-bold ${colorClass} mb-2`}>{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}
