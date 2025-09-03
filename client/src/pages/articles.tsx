import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Articles() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Articles - Jayesh Vyas";
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Implement actual email subscription
    toast({
      title: "Subscription Successful!",
      description: "You'll be notified when new articles are published.",
    });
    
    setEmail("");
  };

  return (
    <section className="py-20" data-testid="articles-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Articles & Insights</h1>
            
            <div className="bg-card p-12 rounded-xl border border-border">
              <div className="text-6xl mb-6">✍️</div>
              <h2 className="text-xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                I'm preparing technical articles on microservices, cloud architecture, and team leadership. 
                Stay tuned for insights from the trenches of enterprise software development.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Get notified when articles are published"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  data-testid="input-email-subscription"
                />
                <Button 
                  type="submit"
                  data-testid="button-subscribe"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
