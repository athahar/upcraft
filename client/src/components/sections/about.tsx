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
            className="inline-block py-1 px-3 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-widest mb-8 border border-white/5"
          >
            The Approach
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-medium leading-tight mb-12"
          >
            Great products aren't just designed. They are engineered through <span className="text-primary">rigorous strategy</span> and deep empathy.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Discovery",
              desc: "We don't assume. We investigate. Through user interviews and data analysis, we uncover the real problems worth solving."
            },
            {
              title: "Strategy",
              desc: "We bridge business goals with user needs. We define the product vision, roadmap, and metrics for success."
            },
            {
              title: "Execution",
              desc: "We craft pixel-perfect interfaces backed by robust design systems that scale with your product."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="p-8 rounded-2xl bg-secondary/30 border border-white/5 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-display font-bold text-xl mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
