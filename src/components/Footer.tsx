import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[hsl(220_20%_12%)] overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(189 94% 53% / 0.4), transparent)" }} />

      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-lg font-display font-bold text-gradient">Emna Ouerghemmi</span>
            <p className="text-xs text-muted-foreground mt-1.5">
              © {currentYear} • Full-Stack Developer & AI Engineer
            </p>
          </div>

          {/* Built with */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Built with</span>
            <div className="flex items-center gap-1.5">
              {["React", "TypeScript", "Tailwind"].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded glass border border-[hsl(220_20%_18%)] text-[10px] font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Social + Back to top */}
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/EmnaOuerghemmi", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/ouerghemmi-emna-10a468217", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:emna.ouerghemmi@esprit.tn", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl glass border border-[hsl(220_20%_16%)] hover:border-[hsl(189_94%_53%_/_0.45)] hover:text-[hsl(189_94%_65%)] hover:shadow-[0_0_15px_hsl(189_94%_53%_/_0.25)] transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <div className="w-px h-5 bg-[hsl(220_20%_18%)] mx-1" />
            <a
              href="#"
              aria-label="Back to top"
              className="p-2.5 rounded-xl glass border border-[hsl(220_20%_16%)] hover:border-[hsl(258_90%_66%_/_0.45)] hover:text-[hsl(258_90%_72%)] hover:shadow-[0_0_15px_hsl(258_90%_66%_/_0.25)] transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
