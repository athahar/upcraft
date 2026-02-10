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
  },
  {
    name: "Apple",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    className: "h-6 md:h-8"
  },
  {
    name: "Microsoft",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    className: "h-6 md:h-8"
  },
  {
    name: "Amazon",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    className: "h-6 md:h-8"
  }
];

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-center text-sm md:text-xs font-bold text-black mb-8 uppercase tracking-widest">Trusted by founders who built at</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center max-w-5xl mx-auto">
          {brandLogos.map((brand, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center justify-center w-full transition-all duration-300 opacity-60 hover:opacity-100 grayscale hover:grayscale-0"
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
