import { Mail, MapPin, Phone, Linkedin, Github, Send, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Portfolio - ${formData.name}`);
    const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:emna.ouerghemmi@esprit.tn?subject=${subject}&body=${body}`;
    toast({
      title: "Redirection vers votre client email",
      description: "Envoyez le message depuis votre application email.",
    });
  };

  const contactItems = [
    { icon: Mail, color: "hsl(189 94% 53%)", label: "Email", value: "emna.ouerghemmi@esprit.tn", href: "mailto:emna.ouerghemmi@esprit.tn" },
    { icon: Phone, color: "hsl(258 90% 66%)", label: "Téléphone", value: "+216 51 865 355", href: "tel:+21651865355" },
    { icon: MapPin, color: "hsl(239 90% 66%)", label: "Localisation", value: "Tunis, Tunisie", href: undefined },
    { icon: Calendar, color: "hsl(189 94% 53%)", label: "Disponibilité", value: "Stage PFE • 6 mois", href: undefined },
  ];

  const inputClass = (name: string) =>
    `w-full px-4 py-3.5 rounded-xl text-sm bg-[hsl(220_25%_8%)] border transition-all duration-300 outline-none ${
      focused === name
        ? "border-[hsl(189_94%_53%_/_0.6)] shadow-[0_0_0_3px_hsl(189_94%_53%_/_0.1)]"
        : "border-[hsl(220_20%_18%)] hover:border-[hsl(220_20%_24%)]"
    } placeholder:text-muted-foreground/40`;

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[hsl(258_90%_66%_/_0.04)] blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[hsl(189_94%_53%_/_0.04)] blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-[hsl(189_94%_53%)] mb-4">Collaboration</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-5">
            Me <span className="text-gradient">Contacter</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[hsl(189_94%_53%)]" />
            <p className="text-muted-foreground text-sm">Intéressé par mon profil ? Discutons d'opportunités de stage PFE</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[hsl(258_90%_66%)]" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Left — Info */}
          <div className="md:col-span-2 space-y-4">
            {contactItems.map(({ icon: Icon, color, label, value, href }) => (
              <div
                key={label}
                className="group flex items-center gap-4 p-4 rounded-xl glass border border-[hsl(220_20%_16%)] hover:border-[hsl(189_94%_53%_/_0.3)] transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                  style={{ background: `${color}14`, border: `1px solid ${color}28` }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium hover:text-[hsl(189_94%_65%)] transition-colors truncate block">{value}</a>
                  ) : (
                    <p className="text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="flex gap-3 pt-2">
              {[
                { href: "https://linkedin.com/in/ouerghemmi-emna-10a468217", icon: Linkedin, label: "LinkedIn", color: "hsl(189 94% 53%)" },
                { href: "https://github.com/EmnaOuerghemmi", icon: Github, label: "GitHub", color: "hsl(258 90% 66%)" },
              ].map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass border border-[hsl(220_20%_16%)] hover:border-[hsl(189_94%_53%_/_0.4)] hover:shadow-[0_0_20px_hsl(189_94%_53%_/_0.2)] transition-all duration-300 text-sm font-medium text-muted-foreground hover:text-foreground group"
                >
                  <Icon className="w-4 h-4 transition-colors group-hover:text-[hsl(189_94%_65%)]" style={{ color }} />
                  {label}
                </a>
              ))}
            </div>

            {/* CTA card */}
            <div className="p-5 rounded-2xl border border-[hsl(189_94%_53%_/_0.2)] relative overflow-hidden"
              style={{ background: "hsl(189 94% 53% / 0.05)" }}>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[hsl(189_94%_53%_/_0.08)] blur-2xl pointer-events-none" />
              <p className="font-display font-semibold text-sm mb-2 text-[hsl(189_94%_75%)]">
                🎯 Recherche stage PFE
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Passionnée par l'IA collaborative, les architectures RAG et les systèmes multi-agents. Prête à contribuer à des projets innovants.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Nom</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  required
                  className={inputClass("name")}
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  required
                  className={inputClass("email")}
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                required
                rows={7}
                className={`${inputClass("message")} resize-none`}
                placeholder="Décrivez votre opportunité de stage, votre projet ou votre question..."
              />
            </div>

            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_hsl(189_94%_53%_/_0.4)]"
              style={{ background: "var(--gradient-cta)" }}
            >
              <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              Envoyer le message
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
