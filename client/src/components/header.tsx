import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun, Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Articles", href: "/articles" },
  { name: "Contact", href: "/contact" }
];

export function Header() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        data-testid="skip-to-content"
      >
        Skip to main content
      </a>
      
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 lg:px-8" role="navigation" aria-label="Main navigation">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2" data-testid="logo">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg">
                JV
              </div>
              <span className="font-bold text-lg tracking-tight hidden sm:block">Jayesh Vyas</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 border-b-2 ${
                    location === item.href
                      ? "text-foreground border-primary"
                      : "text-muted-foreground border-transparent hover:text-primary hover:border-primary/50"
                  }`}
                  data-testid={`nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                data-testid="theme-toggle"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
              
              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                data-testid="mobile-menu-toggle"
              >
                {mobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background" data-testid="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 text-sm font-medium transition-colors ${
                      location === item.href
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-primary hover:bg-muted"
                    }`}
                    data-testid={`mobile-nav-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
