import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Metric } from "./metric";
import { PERSONAL_INFO, KEY_METRICS } from "@/lib/constants";
import { useLocation } from "wouter";

export function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // ...existing code...
  const [, setLocation] = useLocation();
  return (
    <section className="py-20 lg:py-32" data-testid="hero-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <motion.div 
            className="text-center mb-16 content-container p-8 mx-4 lg:mx-0"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              variants={fadeInUp}
              data-testid="hero-title"
            >
              {PERSONAL_INFO.name}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light"
              variants={fadeInUp}
              data-testid="hero-subtitle"
            >
              {PERSONAL_INFO.title}
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
              variants={fadeInUp}
              data-testid="hero-description"
            >
              {PERSONAL_INFO.description}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <Button 
                size="lg" 
                className="px-8"
                data-testid="button-view-projects"
                onClick={() => setLocation('/projects')}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8"
                data-testid="button-download-resume"
                onClick={() => window.open('https://drive.google.com/file/d/1RAs1wkVER4t_PZDe2kzFulfzGc9e3CJI/view?usp=sharing', '_blank')}
              >
                Download Resume
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                data-testid="button-contact-me"
                onClick={() => setLocation('/contact')}
              >
                Contact Me →
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Key Highlights Metrics */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            {KEY_METRICS.map((metric, index) => (
              <motion.div key={metric.label} variants={fadeInUp} className="card-enhanced p-4">
                <Metric 
                  value={metric.value} 
                  label={metric.label}
                  color={index % 2 === 0 ? "primary" : "accent"}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* About Section */}
          <motion.div 
            className="max-w-4xl mx-auto text-center content-container p-8 mx-4 lg:mx-0"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">About</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="about-description">
              I'm a Technical Team Lead and Solution Architect specializing in cloud-native microservices, 
              secure device platforms, and enterprise product delivery. I lead 10–14 engineer teams, 
              ship faster with robust CI/CD, and design systems that scale reliably on AWS.
            </p>
            
            {/* Company Badges */}
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium">Zucitech</div>
              <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium">Siemens</div>
              <div className="px-4 py-2 bg-muted rounded-full text-sm font-medium">Acnovate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
