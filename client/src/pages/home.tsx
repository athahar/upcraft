import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import TrustedBy from "@/components/sections/trusted-by";
import About from "@/components/sections/about";
import Pricing from "@/components/sections/pricing";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Pricing />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
