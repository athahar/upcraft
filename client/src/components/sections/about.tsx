import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest mb-8 border border-border"
          >
            The Approach
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-16 text-foreground"
          >
            Design for adoption, not just launch
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            Earning trust, changing behavior, and driving real adoption takes understanding how people actually work, what they actually need, and what will actually fit into their lives. We help dig past the surface request and feature asks to uncover underlying need and actual job to be done.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
