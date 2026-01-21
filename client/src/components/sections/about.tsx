import { motion } from "framer-motion";
import { HelpCircle, Target, FlaskConical } from "lucide-react";

const topics = [
  {
    icon: HelpCircle,
    title: "Question what you think you know",
    description: "We help you pressure-test assumptions, and hear what people are not saying, and uncover real context."
  },
  {
    icon: Target,
    title: "Find the problem worth solving",
    description: "We help you dig deep — past the feature ask to the underlying customer need, to the actual job-to-be-done."
  },
  {
    icon: FlaskConical,
    title: "Build what matters, not just what's easy",
    description: "Most MVPs chase speed. We focus on building something people will use, in the leanest way possible."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
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
            Design for <span className="text-accent">adoption</span>,<br />not just launch.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >Earning trust, changing behavior, and driving real adoption takes understanding how people actually work, what they actually need, and what will actually fit into their lives.</motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-12 max-w-6xl mx-auto">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
              className="bg-transparent p-8 rounded-2xl border border-border/50 hover:border-accent/30 transition-colors"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                <topic.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-foreground">{topic.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{topic.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
