import { Github, Linkedin, Mail, Download, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const ROLES = [
  "Full-Stack Developer",
  "AI Integration Engineer",
  "Python & Angular Expert",
  "Multi-Agent Systems Builder",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[hsl(258_90%_66%_/_0.07)] blur-[100px] animate-blob" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[700px] h-[700px] rounded-full bg-[hsl(189_94%_53%_/_0.07)] blur-[120px] animate-blob" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full bg-[hsl(239_90%_66%_/_0.05)] blur-[80px] animate-blob" style={{ animationDelay: '-6s' }} />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(hsl(189 94% 53%) 1px, transparent 1px), linear-gradient(90deg, hsl(189 94% 53%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Diagonal line accent */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[hsl(189_94%_53%_/_0.15)] to-transparent" style={{ right: '15%' }} />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[hsl(258_90%_66%_/_0.1)] to-transparent" style={{ right: '30%' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div className="text-center lg:text-left">
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-[hsl(189_94%_53%_/_0.25)] mb-8 animate-fade-up"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-muted-foreground">Disponible • Stage PFE 6 mois</span>
              <Sparkles className="w-3.5 h-3.5 text-[hsl(189_94%_53%)]" />
            </div>

            {/* Name */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <p className="text-sm font-semibold tracking-[0.3em] uppercase text-[hsl(189_94%_53%)] mb-3">
                Hello, je suis
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.05] mb-4">
                <span className="block">Emna</span>
                <span className="block text-gradient">Ouerghemmi</span>
              </h1>
            </div>

            {/* Typewriter role */}
            <div
              className="flex items-center justify-center lg:justify-start gap-3 mb-6 animate-fade-up"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[hsl(189_94%_53%)]" />
              <p className="text-lg md:text-xl font-semibold text-muted-foreground min-w-[280px]">
                <span className="text-foreground">{displayed}</span>
                <span className="inline-block w-0.5 h-5 bg-[hsl(189_94%_53%)] ml-0.5 animate-glow-pulse" />
              </p>
            </div>

            {/* Location */}
            <div
              className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-6 text-sm animate-fade-up"
              style={{ animationDelay: '0.35s', opacity: 0 }}
            >
              <MapPin className="w-4 h-4 text-[hsl(189_94%_53%)]" />
              <span>Tunis, Tunisie</span>
              <span className="text-border">•</span>
              <span className="font-medium text-foreground">ESPRIT — 5ème année</span>
            </div>

            {/* Tags */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-10 animate-fade-up"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              {["Full-Stack Dev", "AI/ML", "RAG & LLMs", "Multi-Agents"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold glass border border-[hsl(220_20%_22%)] text-muted-foreground hover:border-[hsl(189_94%_53%_/_0.4)] hover:text-[hsl(189_94%_70%)] transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 animate-fade-up"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(189_94%_53%_/_0.45)]"
                style={{ background: 'var(--gradient-cta)' }}
              >
                <span className="relative z-10 flex items-center gap-2 text-white">
                  <Mail className="w-4 h-4" />
                  Me contacter
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border border-[hsl(220_20%_22%)] glass text-muted-foreground hover:border-[hsl(189_94%_53%_/_0.5)] hover:text-foreground hover:shadow-[0_0_30px_hsl(189_94%_53%_/_0.2)] transition-all duration-300"
              >
                Voir mes projets
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center justify-center lg:justify-start gap-3 animate-fade-up"
              style={{ animationDelay: '0.6s', opacity: 0 }}
            >
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
                  className="p-3 rounded-xl glass border border-[hsl(220_20%_18%)] hover:border-[hsl(189_94%_53%_/_0.5)] hover:shadow-[0_0_20px_hsl(189_94%_53%_/_0.3)] hover:scale-110 hover:text-[hsl(189_94%_65%)] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
              <div className="w-px h-6 bg-border mx-1" />
              <a
                href="/CvEmna_Ouerghemmi1.pdf"
                download="CV_Emna_Ouerghemmi.pdf"
                className="group inline-flex items-center gap-2 px-4 py-3 rounded-xl glass border border-[hsl(220_20%_18%)] hover:border-[hsl(258_90%_66%_/_0.5)] hover:shadow-[0_0_20px_hsl(258_90%_66%_/_0.3)] transition-all duration-300 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <Download className="w-4 h-4 group-hover:text-[hsl(258_90%_72%)] transition-colors" />
                CV
              </a>
            </div>
          </div>

          {/* Right — Profile */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <div className="relative">
              {/* Outer rotating rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-[420px] h-[420px] rounded-full border border-[hsl(189_94%_53%_/_0.15)] animate-spin-slow"
                  style={{ animationDuration: '20s' }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-[360px] h-[360px] rounded-full border border-[hsl(258_90%_66%_/_0.1)] animate-spin-reverse"
                />
              </div>

              {/* Glow blobs behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[hsl(189_94%_53%_/_0.15)] blur-[60px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[hsl(258_90%_66%_/_0.12)] blur-[50px]" style={{ transform: 'translate(-40%, -60%)' }} />

              {/* Image container */}
              <div className="relative z-10">
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px]">
                  {/* Gradient border ring */}
                  <div className="absolute inset-[-3px] rounded-full p-[2px]" style={{ background: 'var(--gradient-border)' }}>
                    <div className="w-full h-full rounded-full bg-background" />
                  </div>
                  <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-background">
                    <img
                      src="/profile.png"
                      alt="Emna Ouerghemmi"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_hsl(220_30%_4%_/_0.5)]" />
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              {[
                { label: "React", img: "https://techstack-generator.vercel.app/react-icon.svg", pos: "-top-6 -left-4", delay: "0s" },
                { label: "Python", img: "https://techstack-generator.vercel.app/python-icon.svg", pos: "-bottom-2 -left-10", delay: "-2s" },
                { label: "Java", img: "https://techstack-generator.vercel.app/java-icon.svg", pos: "top-1/2 -right-10", delay: "-4s" },
              ].map(({ label, img, pos, delay }) => (
                <div
                  key={label}
                  className={`absolute ${pos} z-20 flex items-center justify-center w-14 h-14 rounded-2xl glass border border-[hsl(220_20%_20%)] shadow-[0_0_20px_hsl(189_94%_53%_/_0.2)] animate-float hover:scale-110 transition-transform`}
                  style={{ animationDelay: delay }}
                >
                  <img src={img} alt={label} className="w-8 h-8" />
                </div>
              ))}

              {/* Stats badge */}
              <div className="absolute -bottom-8 right-0 z-20 glass border border-[hsl(220_20%_20%)] rounded-2xl px-4 py-3 shadow-[0_0_30px_hsl(258_90%_66%_/_0.2)] animate-float" style={{ animationDelay: '-1s' }}>
                <div className="text-xs text-muted-foreground mb-0.5">Projets IA</div>
                <div className="text-2xl font-bold text-gradient font-display">7+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-muted-foreground/25 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 rounded-full bg-[hsl(189_94%_53%)] animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
