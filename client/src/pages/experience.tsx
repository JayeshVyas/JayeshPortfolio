import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/timeline";
import { EXPERIENCE_DATA, PERSONAL_INFO } from "@/lib/constants";

export default function Experience() {
  useEffect(() => {
    document.title = "Experience - Jayesh Vyas";
  }, []);

  return (
    <section className="py-20 bg-muted/50" data-testid="experience-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              8+ years of technical leadership across enterprise platforms, microservices, and cloud-native solutions.
            </p>
            <div className="mt-8">
              <Button 
                className="inline-flex items-center gap-2"
                onClick={() => window.open('https://drive.google.com/file/d/1RAs1wkVER4t_PZDe2kzFulfzGc9e3CJI/view?usp=sharing', '_blank')}
                data-testid="button-download-cv"
              >
                📄 Download Detailed CV
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Timeline items={EXPERIENCE_DATA} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
