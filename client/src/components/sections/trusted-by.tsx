import { motion } from "framer-motion";

const brandLogos = [
  { 
    name: "Google", 
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    className: "h-6 md:h-8"
  },
  { 
    name: "PayPal", 
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    className: "h-6 md:h-8"
  },
  { 
    name: "Visa", 
    url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
    className: "h-4 md:h-6"
  },
  { 
    name: "LinkedIn", 
    url: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
    className: "h-6 md:h-8"
  },
  { 
    name: "Square", 
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Square%2C_Inc._logo.svg",
    className: "h-6 md:h-8" 
  }
];

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">Trusted by founders FROM
</p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16">
          {brandLogos.map((brand, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center justify-center transition-all duration-300 opacity-60 hover:opacity-100 grayscale hover:grayscale-0"
            >
              <img
                src={brand.url}
                alt={`${brand.name} logo`}
                className={`${brand.className} w-auto object-contain`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
