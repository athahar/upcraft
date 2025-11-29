import { motion } from "framer-motion";

const brands = [
  { name: "Google", url: "https://cdn.simpleicons.org/google/A3A3A3" },
  { name: "PayPal", url: "https://cdn.simpleicons.org/paypal/A3A3A3" },
  { name: "Visa", url: "https://cdn.simpleicons.org/visa/A3A3A3" },
  { name: "LinkedIn", url: "https://cdn.simpleicons.org/linkedin/A3A3A3" },
  { name: "GoDaddy", url: "https://cdn.simpleicons.org/godaddy/A3A3A3" },
  { name: "BCG", url: "https://cdn.simpleicons.org/bostonconsultinggroup/A3A3A3" }
];

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Trusted by founders previously at
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {brands.map((brand, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <img 
                src={brand.url} 
                alt={`${brand.name} logo`}
                className="h-6 md:h-8 w-auto object-contain opacity-70" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
