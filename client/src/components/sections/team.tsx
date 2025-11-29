import { motion } from "framer-motion";
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

export default function Team() {
  return (
    <section className="py-24 bg-background border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground"
          >
            The Team
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {people.map((person, i) => (
            <motion.a 
              key={i} 
              href={person.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-border group-hover:border-accent transition-colors mb-6">
                <img 
                  src={person.image} 
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-1">{person.name}</h3>
              <p className="text-sm text-muted-foreground font-medium tracking-wide uppercase">{person.role}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
