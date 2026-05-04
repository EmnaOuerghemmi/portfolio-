import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["about", "projects", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "À propos", id: "about" },
    { href: "#projects", label: "Projets", id: "projects" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "glass-strong border-b border-[hsl(220_20%_14%)] shadow-[0_4px_30px_hsl(220_30%_4%_/_0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Emna Ouerghemmi"
              className="h-12 w-auto brightness-110 contrast-110 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] group-hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.9)] transition-all duration-300"
            />
            <div className="leading-tight hidden sm:block">
              <span className="block text-base font-bold font-display">
                <span className="text-foreground">Emna </span>
                <span className="text-gradient">Ouerghemmi</span>
              </span>
              <span className="text-[11px] text-muted-foreground tracking-wide">Full-Stack · AI Engineer</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeSection === link.id && (
                  <span
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "hsl(189 94% 53% / 0.08)", border: "1px solid hsl(189 94% 53% / 0.2)" }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl glass border border-[hsl(220_20%_18%)] hover:border-[hsl(189_94%_53%_/_0.4)] hover:shadow-[0_0_15px_hsl(189_94%_53%_/_0.25)] transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 text-[hsl(239_90%_66%)]" />
              )}
            </button>

            <a
              href="/CvEmna_Ouerghemmi1.pdf"
              download="CV_Emna_Ouerghemmi.pdf"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_hsl(189_94%_53%_/_0.4)]"
              style={{ background: "var(--gradient-cta)" }}
            >
              <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              Télécharger CV
            </a>
          </div>

          {/* Mobile — theme + burger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl glass border border-[hsl(220_20%_18%)]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 text-[hsl(239_90%_66%)]" />
              )}
            </button>
            <button
              className="p-2.5 rounded-xl glass border border-[hsl(220_20%_18%)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-5 border-t border-[hsl(220_20%_14%)] pt-4 animate-fade-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-[hsl(220_20%_10%)] transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/CvEmna_Ouerghemmi1.pdf"
                download="CV_Emna_Ouerghemmi.pdf"
                className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: "var(--gradient-cta)" }}
              >
                <Download className="w-4 h-4" />
                Télécharger CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
