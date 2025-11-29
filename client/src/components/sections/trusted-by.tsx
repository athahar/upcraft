import { motion } from "framer-motion";

const brands = [
  "Google",
  "PayPal",
  "Visa",
  "LinkedIn",
  "GoDaddy",
  "BCG Consulting"
];

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Trusted by founders previously at
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {brands.map((brand, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-xl md:text-2xl font-display font-bold text-white/80 hover:text-primary cursor-default transition-colors"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
