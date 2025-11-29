import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-mono uppercase tracking-widest text-muted-foreground"
            >
              01 — The Approach
            </motion.span>
          </div>
          
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-medium leading-tight mb-12">
                Great products aren't just designed. They are engineered through rigorous strategy and deep empathy.
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In a digital landscape clutter with noise, we focus on the signal. Our methodology bridges the gap between business objectives and user needs, ensuring every pixel serves a purpose.
                </p>
                <p>
                  We don't just deliver screens; we deliver systems. From initial discovery to final polish, we partner with you to define the product vision and execute it with Swiss-style precision.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
