import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Home from "@/pages/home";
import Experience from "@/pages/experience";
import Projects from "@/pages/projects";
import Skills from "@/pages/skills";
import Articles from "@/pages/articles";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/experience" component={Experience} />
      <Route path="/projects" component={Projects} />
      <Route path="/skills" component={Skills} />
      <Route path="/articles" component={Articles} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main id="main-content">
            <Router />
          </main>
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
