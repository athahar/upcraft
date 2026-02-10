import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@assets/generated_images/abstract_topographic_map_lines_on_dark_background.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Abstract Data Visualization" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>
      <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 inline-flex items-center justify-center text-black text-sm lg:text-xs font-bold uppercase tracking-widest bg-transparent"
          >
            Strategic Product & UX Design
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-10 text-foreground"
          >
            Build what's worth building
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 mt-8 px-0 lg:px-[104px]"
          >Shipping got easier. Adoption didn't. We help founders and product teams close that gap — through fast, focused engagements that move you forward in days, not months.</motion.p>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
