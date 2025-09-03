import { TechChip } from "./tech-chip";
import { Badge } from "@/components/ui/badge";

interface TimelineItem {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  current?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-12">
      {items.map((item, index) => (
        <div key={index} className={`relative ${index < items.length - 1 ? 'timeline-line' : ''}`}>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Meta Info */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={item.current ? "default" : "secondary"} className="text-xs">
                    {item.period}
                  </Badge>
                  {item.current && (
                    <Badge variant="outline" className="text-xs text-accent border-accent">
                      Current
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="text-primary font-semibold mb-1">{item.company}</div>
                <div className="text-sm text-muted-foreground">{item.location}</div>
              </div>
            </div>
            
            {/* Right Column - Content */}
            <div className="lg:w-2/3 relative timeline-item">
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="mb-4">
                  <h4 className="font-semibold mb-3 text-primary">{item.description}</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm leading-relaxed">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technology Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.technologies.map((tech) => (
                    <TechChip
                      key={tech}
                      technology={tech}
                      variant={item.current ? "primary" : "accent"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
