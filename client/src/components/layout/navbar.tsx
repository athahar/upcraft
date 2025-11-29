import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-display font-bold tracking-tighter hover:text-primary transition-colors flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            UpCraft
          </a>
        </Link>
        
        <div className="flex items-center gap-8">
          <a href="#contact" className="text-sm font-bold bg-accent/10 text-accent border border-accent/20 px-5 py-2.5 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300">
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
