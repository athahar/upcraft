import { Linkedin } from "lucide-react";

const people = [
  {
    name: "Founder Name",
    role: "Role",
    linkedin: "https://linkedin.com",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=1" 
  },
  {
    name: "Co-founder Name",
    role: "Role",
    linkedin: "https://linkedin.com",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=2"
  }
];

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p className="mb-1">&copy; 2025 UpCraft LLC</p>
            <p>San Francisco Bay Area</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">The team behind this</p>
            <div className="flex gap-6">
              {people.map((person, i) => (
                <a 
                  key={i}
                  href={person.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 overflow-hidden border border-border group-hover:border-accent transition-colors">
                     {/* Using a placeholder pattern or initial if image fails, but here using a gradient div as fallback or just the image */}
                     <img 
                        src={person.image} 
                        alt={person.name}
                        className="w-full h-full object-cover"
                     />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">{person.name}</span>
                      <Linkedin className="w-3 h-3 text-[#0077b5]" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
