import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "À propos" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
              <img 
                    src="/logo.png"
                    alt="Emna Ouerghemmi"
                    className="
                h-16 w-auto
                brightness-125 contrast-125 saturate-110
                drop-shadow-[0_0_6px_rgba(255,255,255,0.99)]
                
  "

/>
 <div className="leading-tight">
    <span className="block text-xl font-bold">
      <span className="text-[#000957] drop-shadow-[0_0_8px_rgba(34,211,238,0.99)]">Emna </span>
      <span className="bg-gradient-to-r from-[#4F46E5] to-[#4F46E5] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">Ouerghemmi</span>
    </span>
    <span
      className="
        text-sm text-cyan-300
        drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]
      "
    >
      Full-Stack Developer
    </span>
  </div>
</a>


          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/50 hover:shadow-[0_0_15px_hsl(189_94%_53%_/_0.3)] transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-[#4F46E5]" />
              )}
            </button>

            <Button variant="hero" size="sm" asChild>
              <a href="/CVEmnaOuerghemmi.pdf" download="CV_Emna_Ouerghemmi.pdf">
                Télécharger CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border bg-secondary/50"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-[#4F46E5]" />
              )}
            </button>
            
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="sm" className="w-full mt-2" asChild>
                <a href="/CVEmnaOuerghemmi.pdf" download="CV_Emna_Ouerghemmi.pdf">
                  Télécharger CV
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
