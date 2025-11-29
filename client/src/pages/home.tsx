import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import TrustedBy from "@/components/sections/trusted-by";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 UpCraft LLC</p>
          <p>San Francisco Bay Area</p>
        </div>
      </footer>
    </div>
  );
}
