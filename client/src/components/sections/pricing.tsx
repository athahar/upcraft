import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Idea → Prototype",
    description: "Turn your idea into something people can try.",
    timeline: "~1 week",
    price: "Starting at $3,000",
    features: [
      "Clear user flows and core screens",
      "Clickable prototype (no code)",
      "Design assets ready for your dev team"
    ]
  },
  {
    name: "AI Product Polish",
    description: "Make your AI experience feel finished, not experimental.",
    timeline: "~1 week",
    price: "Starting at $5,000",
    features: [
      "UX audit focused on trust and clarity",
      "Prompt and interaction improvements",
      "Prioritized fixes you can ship this sprint"
    ]
  },
  {
    name: "Pitch & Narrative",
    description: "Help the right people say yes.",
    timeline: "1–2 weeks",
    price: "Starting at $4,000",
    features: [
      "Sharp problem/value story",
      "Structured pitch deck",
      "Visual and messaging direction"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-black text-xs font-bold uppercase tracking-widest mb-8 bg-transparent"
          >
            Pricing
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8 text-foreground"
          >
            Simple, transparent <span className="text-accent">pricing</span>.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            For founders and product teams who need to move fast and ship right.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
              className="flex flex-col bg-card/30 p-8 rounded-2xl border border-border/50 hover:border-accent/30 transition-all hover:shadow-[0_0_30px_-10px_var(--color-accent)] group"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed min-h-[40px]">{plan.description}</p>
              </div>
              
              <div className="mb-8 pb-8 border-b border-border/50">
                <div className="text-3xl font-display font-bold text-foreground mb-1">{plan.price}</div>
                <div className="text-sm font-medium text-accent uppercase tracking-wide">Timeline: {plan.timeline}</div>
              </div>

              <div className="flex-grow">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">Includes</span>
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
