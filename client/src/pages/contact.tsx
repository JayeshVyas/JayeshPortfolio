import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { PERSONAL_INFO } from "@/lib/constants";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Contact - Jayesh Vyas";
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // TODO: Implement EmailJS integration
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-muted/50" data-testid="contact-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's Connect</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next project or explore collaboration opportunities? Let's start a conversation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Topmate Booking Link */}
            <motion.div 
              className="bg-card p-8 rounded-xl border border-border flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-xl font-bold mb-6">Book a Session</h2>
              <p className="text-lg text-muted-foreground mb-6 text-center">
                Students and professionals can connect and book a 1:1 session for mentorship, career guidance, or technical help.
              </p>
              <a
                href="https://topmate.io/jayesh_vyas/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary/90 transition-colors text-lg"
              >
                Book on Topmate
              </a>
            </motion.div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div 
                className="bg-card p-8 rounded-xl border border-border"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-xl font-bold mb-6">Direct Contact</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      📧
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`} 
                        className="text-primary hover:text-primary/80 transition-colors"
                        data-testid="contact-email"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center">
                      📱
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">
                        {PERSONAL_INFO.phones.map((phone, index) => (
                          <div key={index}>
                            <a 
                              href={`tel:${phone}`} 
                              className="hover:text-primary transition-colors"
                              data-testid={`contact-phone-${index}`}
                            >
                              {phone}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                className="bg-card p-8 rounded-xl border border-border"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-xl font-bold mb-6">Connect Online</h2>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href={PERSONAL_INFO.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-primary/5 hover:border-primary/20 transition-all duration-200"
                    data-testid="social-linkedin"
                  >
                    <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center text-sm font-bold">
                      in
                    </div>
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a 
                    href={PERSONAL_INFO.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-primary/5 hover:border-primary/20 transition-all duration-200"
                    data-testid="social-github"
                  >
                    <div className="w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded flex items-center justify-center text-sm font-bold">
                      GH
                    </div>
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a 
                    href={PERSONAL_INFO.linktree}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-primary/5 hover:border-primary/20 transition-all duration-200 col-span-2"
                    data-testid="social-linktree"
                  >
                    <div className="w-8 h-8 bg-green-500 text-white rounded flex items-center justify-center text-sm font-bold">
                      🔗
                    </div>
                    <span className="font-medium">All Links (Linktree)</span>
                  </a>
                </div>
              </motion.div>
              
              {/* Education */}
              <motion.div 
                className="bg-card p-8 rounded-xl border border-border"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-xl font-bold mb-6">Education</h2>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    🎓
                  </div>
                  <div>
                    <div className="font-semibold">B.Tech, Computer Science Engineering</div>
                    <div className="text-primary">80% • Rajasthan Technical University, Kota</div>
                    <div className="text-sm text-muted-foreground">2013 – 2017</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
