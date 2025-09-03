import { TechChip } from "./tech-chip";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  status: string;
  technologies: string[];
  icon: string;
  gradient: string;
  enterprise?: boolean;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  status,
  technologies,
  icon,
  gradient,
  enterprise = false
}: ProjectCardProps) {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Production":
        return "accent";
      case "In Progress":
        return "accent";
      default:
        return "muted";
    }
  };

  return (
    <div className="project-card bg-card rounded-xl border border-border overflow-hidden" data-testid={`project-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      {/* Project Header */}
      <div className={`h-48 bg-gradient-to-br ${gradient} p-8 flex items-center justify-center`}>
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto text-2xl">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <TechChip
              key={tech}
              technology={tech}
              variant={index < 4 ? "primary" : "accent"}
            />
          ))}
          <TechChip
            technology={status}
            variant={getStatusVariant(status)}
          />
        </div>
        
        <h3 className="text-lg font-bold mb-2">{subtitle}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex gap-3">
          {!enterprise ? (
            <>
              <button 
                className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                data-testid={`project-demo-${title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                View Demo →
              </button>
              <button 
                className="text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                data-testid={`project-code-${title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                View Code →
              </button>
            </>
          ) : (
            <span className="text-muted-foreground text-sm">Enterprise Project</span>
          )}
        </div>
      </div>
    </div>
  );
}
