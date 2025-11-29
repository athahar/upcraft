import { Linkedin } from "lucide-react";
import mashaalImage from "@assets/image_1764408669428.png";
import athaharImage from "@assets/image_1764408716381.png";

const people = [
  {
    name: "Mashaal",
    role: "Design",
    linkedin: "http://linkedin.com/in/mashaal",
    image: mashaalImage
  },
  {
    name: "Athahar",
    role: "Strategy",
    linkedin: "https://www.linkedin.com/in/athahar/",
    image: athaharImage
  }
];

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-sm text-muted-foreground text-center md:text-left order-3 md:order-1">
            <p>&copy; 2025 UpCraft LLC</p>
          </div>

          <div className="flex flex-col items-center order-1 md:order-2">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">The Team</p>
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
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="text-sm text-muted-foreground text-center md:text-right order-2 md:order-3">
            <p>San Francisco Bay Area</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
