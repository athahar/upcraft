import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-black text-xs font-bold uppercase tracking-widest mb-8 bg-transparent"
          >
            Get in Touch
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 text-foreground"
          >
            Let's build something<br /><span className="text-[#378c87]">remarkable.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 md:mb-16"
          >
            We'd love to hear about your project, and explore how to help.
          </motion.p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Email</p>
              <a href="mailto:mashaal@upcraft.xyz" className="text-xl md:text-2xl font-display text-foreground hover:text-accent transition-colors">
                mashaal@upcraft.xyz
              </a>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">TEXT</p>
              <a href="tel:+14089406685" className="text-xl md:text-2xl font-display text-foreground hover:text-accent transition-colors">+1 (408) 940-6685</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
