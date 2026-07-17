import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Smartphone,
  Layers,
  Users,
  ShieldCheck,
  Sparkles,
  Timer,
  ArrowUpRight,
} from "lucide-react";
import Footer from "@/components/layout/footer";

// Set this to the App Store URL once the app is live (e.g.
// "https://apps.apple.com/app/id0000000000"). While empty, the CTA shows
// "Coming soon" instead of a dead link.
const APP_STORE_URL = "";
const SUPPORT_EMAIL = "feedback@upcraft.xyz";

const FEATURES = [
  {
    icon: Smartphone,
    title: "Tilt to play",
    body: "Phone on your forehead, act out the word your friends can see. Tilt down when you get it, up to pass. No reading required, so even little kids can play.",
  },
  {
    icon: Layers,
    title: "12 categories, 654 cards",
    body: "Animals, actions, food, characters, sports, jobs, and more. Cards don't repeat across rounds, so a game night stays fresh.",
  },
  {
    icon: Timer,
    title: "60-second rounds",
    body: "Short, loud, and fast. Perfect for passing the phone around a table and keeping everyone laughing.",
  },
  {
    icon: Users,
    title: "Made for family game night",
    body: "Big, high-contrast cards and giant touch targets. Designed for a room full of people, not a single player staring at a screen.",
  },
  {
    icon: ShieldCheck,
    title: "No ads. Ever.",
    body: "No banners, no pop-ups, no video ads, no tracking. It's a kids app and it stays that way, as a matter of principle.",
  },
  {
    icon: Sparkles,
    title: "One-time unlock",
    body: "Two categories are always free. Unlock the rest with a single purchase. No subscriptions and nothing else to buy.",
  },
];

export default function KidsCharades() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Kids Charades: tilt-to-play family charades | UpCraft";
    return () => {
      document.title = prev;
    };
  }, []);

  const hasStore = APP_STORE_URL.length > 0;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20 lg:px-6">
          <Link href="/" className="font-display text-2xl font-bold tracking-tight lg:text-3xl">
            upcraft
          </Link>
          {hasStore ? (
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent/20 bg-accent/10 px-5 py-2.5 text-sm font-bold text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              App Store
            </a>
          ) : (
            <span className="rounded-full border border-border px-5 py-2.5 text-sm font-bold text-muted-foreground">
              Coming soon
            </span>
          )}
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="px-6 pt-32 pb-16 text-center lg:pt-44">
          <motion.div
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/kids-charades/icon.png"
              alt="Kids Charades app icon"
              className="mx-auto mb-8 h-24 w-24 rounded-[1.375rem] shadow-lg"
              draggable={false}
            />
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
              Charades for the
              <br />
              <span className="text-accent">whole family.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Put the phone on your forehead, act it out, and tilt to score. A silly, fast,
              read-free party game that works for kids and grown-ups alike. No ads, ever.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {hasStore ? (
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
                >
                  Download on the App Store
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-7 py-3.5 text-base font-bold text-primary-foreground">
                  Coming soon to the App Store
                </span>
              )}
              <a
                href="#features"
                className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
              >
                See how it plays
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">iPhone · iOS 15+ · Free to play</p>
          </motion.div>
        </section>

        {/* Features */}
        <section id="features" className="px-6 py-20">
          <div className="container mx-auto">
            <motion.h2
              className="font-display text-3xl font-bold tracking-tight lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Silly on purpose.
            </motion.h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              A quick round of charades whenever people are together, with none of the friction and
              none of the ads.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="rounded-2xl border border-border bg-card p-7"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{f.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support / contact */}
        <section id="support" className="px-6 py-20">
          <div className="container mx-auto max-w-3xl rounded-3xl border border-border bg-card p-10 text-center lg:p-14">
            <h2 className="font-display text-3xl font-bold tracking-tight lg:text-4xl">
              Support & contact
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Questions, bug reports, or an idea for a new category? We read every message and
              usually reply within a day.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
            >
              {SUPPORT_EMAIL}
            </a>
            <p className="mt-8 text-sm text-muted-foreground">
              Kids Charades is made by Upcraft. No ads, no accounts, no tracking.{" "}
              <Link href="/app/kids-charades/privacy-policy" className="text-accent hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
