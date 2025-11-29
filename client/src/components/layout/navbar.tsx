import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-display font-bold tracking-tighter hover:opacity-70 transition-opacity">
            UpCraft
          </a>
        </Link>
        
        <div className="flex items-center gap-8">
          <a href="#about" className="hidden md:block text-sm font-medium hover:text-muted-foreground transition-colors">
            Philosophy
          </a>
          <a href="#contact" className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 hover:bg-primary/90 transition-colors">
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
