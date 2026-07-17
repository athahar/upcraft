import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Rabbit,
  Globe,
  Split,
  BookOpen,
  Search,
  Drama,
  WifiOff,
  Heart,
  Baby,
  ShieldCheck,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import Footer from "@/components/layout/footer";

const APP_STORE_URL = "https://apps.apple.com/app/id6753095421";
const SUPPORT_EMAIL = "kidsgameslearnandplay@gmail.com";

const GAMES = [
  {
    icon: Rabbit,
    title: "Guess the Animal",
    body: "Reveal 200+ animals and discover a fun fact about each one — from house pets to the wild.",
  },
  {
    icon: Globe,
    title: "Guess the Country",
    body: "Explore 175 countries through cultural clues. Geography that actually sticks.",
  },
  {
    icon: Split,
    title: "Would You Rather",
    body: "Silly, thought-provoking choices that spark giggles and real conversation.",
  },
  {
    icon: BookOpen,
    title: "Story Starter",
    body: "Creative prompts that turn kids into storytellers.",
  },
  {
    icon: Search,
    title: "Scavenger Hunt",
    body: "Indoor and outdoor hunts that get kids up, moving, and away from the screen.",
  },
  {
    icon: Drama,
    title: "Charades",
    body: "Hold the phone to your forehead, act it out, and tilt to score. 10+ kid-friendly categories.",
  },
];

const FEATURES = [
  {
    icon: WifiOff,
    title: "Works fully offline",
    body: "No wifi, no problem. Perfect for road trips, flights, restaurants, and waiting rooms.",
  },
  {
    icon: Heart,
    title: "Free to play",
    body: "Every game is free. An optional “Feed the Penguin” tip jar lets fans support new content — never required.",
  },
  {
    icon: Baby,
    title: "Made for ages 4+",
    body: "Simple enough for preschoolers, fun for the whole family up to 99.",
  },
  {
    icon: ShieldCheck,
    title: "Kid-safe & private",
    body: "COPPA-conscious with minimal, anonymous analytics. No sign-up, no personal info, and no ads.",
  },
  {
    icon: Clock,
    title: "2–15 minute rounds",
    body: "Quick to start, easy to stop. Built for real-life in-between moments.",
  },
];

const SHOTS = [
  { src: "/waddleplay/shot1.png", alt: "WaddlePlay game screen" },
  { src: "/waddleplay/shot2.png", alt: "WaddlePlay game screen" },
  { src: "/waddleplay/shot3.png", alt: "WaddlePlay game screen" },
  { src: "/waddleplay/shot4.png", alt: "WaddlePlay game screen" },
  { src: "/waddleplay/shot5.png", alt: "WaddlePlay game screen" },
];

const FAQ = [
  {
    q: "What ages is WaddlePlay for?",
    a: "Designed for kids 4 and up, with content the whole family (up to 99!) can enjoy together.",
  },
  {
    q: "Does it work offline?",
    a: "Yes — every game works fully offline. Great for travel, restaurants, and anywhere without wifi.",
  },
  {
    q: "Is it really free?",
    a: "Yes. All games are free to play. There's an optional tip jar to support development, but you never have to pay.",
  },
  {
    q: "Is my child's data safe?",
    a: "Yes. WaddlePlay requires no sign-up or personal information and uses only minimal, anonymous analytics to improve the games.",
  },
  {
    q: "How long is a game?",
    a: "Rounds run about 2–15 minutes — perfect for filling a wait.",
  },
];

function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`rounded-[2rem] border border-black/10 bg-black p-1.5 shadow-2xl shadow-black/20 ${className}`}
    >
      <img src={src} alt={alt} className="block w-full rounded-[1.6rem]" draggable={false} />
    </div>
  );
}

export default function WaddlePlay() {
  useEffect(() => {
    const prev = document.title;
    document.title = "WaddlePlay: Family Fun Games | UpCraft";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20 lg:px-6">
          <Link href="/" className="font-display text-2xl font-bold tracking-tight lg:text-3xl">
            upcraft
          </Link>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-accent/20 bg-accent/10 px-5 py-2.5 text-sm font-bold text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            App Store
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="px-6 pt-32 pb-16 lg:pt-40">
          <div className="container mx-auto grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex items-center gap-4">
                <img
                  src="/waddleplay/icon.png"
                  alt="WaddlePlay app icon"
                  className="h-16 w-16 rounded-2xl shadow-lg"
                  draggable={false}
                />
                <span className="font-display text-3xl font-bold tracking-tight">WaddlePlay</span>
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
                Turn wait time
                <br />
                <span className="text-accent">into play time.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Six delightful games that transform restaurants, road trips, and everyday moments
                into little adventures. Quick to learn, endlessly replayable, and secretly
                educational.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
                >
                  Download on the App Store
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#games"
                  className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
                >
                  See the games
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">iPhone · Ages 4+ · Free to play</p>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <Phone
                src="/waddleplay/shot1.png"
                alt="WaddlePlay game screen"
                className="w-[260px] lg:w-[300px]"
              />
            </motion.div>
          </div>
        </section>

        {/* Games */}
        <section id="games" className="px-6 py-20">
          <div className="container mx-auto">
            <motion.h2
              className="font-display text-3xl font-bold tracking-tight lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Six games in one app.
            </motion.h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Pass the phone around the table or hand it to your little one. Every game is quick to
              start and fun to replay.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GAMES.map((g, i) => (
                <motion.div
                  key={g.title}
                  className="rounded-2xl border border-border bg-card p-7"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{g.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{g.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshot gallery */}
        <section className="px-6 py-12">
          <div className="container mx-auto">
            <div className="flex snap-x gap-6 overflow-x-auto pb-6 lg:grid lg:grid-cols-5 lg:overflow-visible">
              {SHOTS.map((s, i) => (
                <motion.div
                  key={s.src}
                  className="w-[200px] flex-shrink-0 snap-center lg:w-auto"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                >
                  <Phone src={s.src} alt={s.alt} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why parents love it */}
        <section className="px-6 py-20">
          <div className="container mx-auto">
            <motion.h2
              className="font-display text-3xl font-bold tracking-tight lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why parents love it.
            </motion.h2>
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

        {/* FAQ */}
        <section id="faq" className="px-6 py-16">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight lg:text-4xl">
              Frequently asked questions
            </h2>
            <div className="mt-10 divide-y divide-border">
              {FAQ.map((item) => (
                <div key={item.q} className="py-6">
                  <h3 className="font-display text-lg font-bold">{item.q}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{item.a}</p>
                </div>
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
              Questions, bug reports, or a game idea? We read every message and usually reply within
              a day.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
            >
              {SUPPORT_EMAIL}
            </a>
            <p className="mt-8 text-sm text-muted-foreground">
              WaddlePlay is made by UpCraft, an independent family-run studio.{" "}
              <Link href="/apps/privacy" className="text-accent hover:underline">
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
