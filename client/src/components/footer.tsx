import { PERSONAL_INFO } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border bg-background/95 backdrop-blur-md py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-sm">
                  JV
                </div>
                <span className="font-bold">Jayesh Vyas</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-md">
                Technical Team Lead building scalable solutions and leading high-performing engineering teams.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn Profile"
                data-testid="footer-linkedin"
              >
                💼
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="GitHub Profile"
                data-testid="footer-github"
              >
                👨‍💻
              </a>
              <a
                href={PERSONAL_INFO.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="All Links"
                data-testid="footer-linktree"
              >
                🔗
              </a>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Jayesh Vyas. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
