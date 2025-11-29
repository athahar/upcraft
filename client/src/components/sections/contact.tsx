import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-secondary/20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-widest mb-8 border border-white/5"
          >
            Get in Touch
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-16 text-white"
          >
            Let's build something<br /><span className="text-primary">remarkable.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.a 
              href="mailto:hello@upcraft.design"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_-10px_var(--color-primary)]"
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-lg font-bold text-white">Email Us</h3>
                <p className="text-muted-foreground text-sm">hello@upcraft.design</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a 
              href="https://wa.me/1234567890"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_-10px_var(--color-primary)]"
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-lg font-bold text-white">Chat Now</h3>
                <p className="text-muted-foreground text-sm">WhatsApp / Telegram</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
