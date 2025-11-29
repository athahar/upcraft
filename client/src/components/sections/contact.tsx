import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-mono uppercase tracking-widest text-muted-foreground block mb-8"
          >
            02 — Get in Touch
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-16"
          >
            Let's build something<br />remarkable.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.a 
              href="mailto:hello@upcraft.design"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col p-8 bg-card border border-border hover:border-primary/20 transition-colors h-full justify-between min-h-[240px]"
            >
              <div className="flex justify-between items-start">
                <Mail className="w-8 h-8 text-primary" />
                <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">For project inquiries and collaborations.</p>
                <span className="text-lg underline decoration-1 underline-offset-4">hello@upcraft.design</span>
              </div>
            </motion.a>

            <motion.a 
              href="https://wa.me/1234567890"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col p-8 bg-primary text-primary-foreground h-full justify-between min-h-[240px]"
            >
              <div className="flex justify-between items-start">
                <MessageCircle className="w-8 h-8" />
                <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Chat Now</h3>
                <p className="text-primary-foreground/70 mb-4">Quick questions? Text us on WhatsApp.</p>
                <span className="text-lg underline decoration-1 underline-offset-4">Start a conversation</span>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
