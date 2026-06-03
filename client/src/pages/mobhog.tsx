import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  BarChart3,
  Flame,
  Activity,
  Terminal,
  RefreshCw,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import Footer from "@/components/layout/footer";

const APP_STORE_URL = "https://apps.apple.com/app/id6758762467";
const SUPPORT_EMAIL = "feedback@upcraft.xyz";

const FEATURES = [
  {
    icon: BarChart3,
    title: "Every insight type",
    body: "Trends, funnels, retention, paths, lifecycle, and stickiness. The full PostHog library, rendered natively, not just raw events.",
  },
  {
    icon: Flame,
    title: "Catch fires early",
    body: "Top errors ranked by recency, frequency, or affected users, plus the raw exception stream as it happens.",
  },
  {
    icon: Activity,
    title: "Live event feed",
    body: "Watch events land in real time, with properties and URLs, so you can confirm a release is firing the way you expect.",
  },
  {
    icon: Terminal,
    title: "SQL & breakdowns",
    body: "Run HogQL and read any breakdown, from users-by-country to conversion-by-source, straight from your phone.",
  },
  {
    icon: RefreshCw,
    title: "Data you can trust",
    body: "Every chart shows when it last refreshed. Pull to refresh and verify against the web. No stale numbers, no guessing.",
  },
  {
    icon: ShieldCheck,
    title: "Private & multi-region",
    body: "US Cloud, EU Cloud, and self-hosted. Your API key lives in the iOS Keychain and talks straight to PostHog. mobHog never sees your data.",
  },
];

const SHOTS = [
  { src: "/mobhog/dashboard.png", alt: "mobHog dashboard with saved insights" },
  { src: "/mobhog/funnel.png", alt: "Conversion funnel with period comparison" },
  { src: "/mobhog/trends.png", alt: "Trends insight with breakdown bars" },
  { src: "/mobhog/errors.png", alt: "Errors ranked by recency and impact" },
  { src: "/mobhog/breakdown.png", alt: "SQL query results: users by country" },
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

export default function MobHog() {
  useEffect(() => {
    const prev = document.title;
    document.title = "mobHog: PostHog in your pocket | UpCraft";
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
                  src="/mobhog/icon.png"
                  alt="mobHog app icon"
                  className="h-16 w-16 rounded-2xl shadow-lg"
                  draggable={false}
                />
                <span className="font-display text-3xl font-bold tracking-tight">mobHog</span>
              </div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight lg:text-6xl">
                PostHog in your pocket.
                <br />
                <span className="text-accent">Without the doubt.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                A native iOS client for the people who live in PostHog. Check your real product
                metrics between meetings, in an Uber, or the second something moves. And trust
                that what you see is fresh.
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
                  href="#features"
                  className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
                >
                  See what it does
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">iPhone · iOS 16+ · Free</p>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <Phone
                src="/mobhog/dashboard.png"
                alt="mobHog dashboard"
                className="w-[260px] lg:w-[300px]"
              />
            </motion.div>
          </div>
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
              The whole product, on a phone.
            </motion.h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              mobHog talks directly to PostHog's API. No webviews, no laptop, no waiting until
              you're back at your desk.
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

        {/* Support / contact */}
        <section id="support" className="px-6 py-20">
          <div className="container mx-auto max-w-3xl rounded-3xl border border-border bg-card p-10 text-center lg:p-14">
            <h2 className="font-display text-3xl font-bold tracking-tight lg:text-4xl">
              Support & contact
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Questions, bug reports, or feature requests? We read every message and usually reply
              within a day.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
            >
              {SUPPORT_EMAIL}
            </a>
            <p className="mt-8 text-sm text-muted-foreground">
              mobHog is an independent third-party app and is not affiliated with, endorsed by, or
              sponsored by PostHog Inc.{" "}
              <Link href="/app/mobhog/privacy-policy" className="text-accent hover:underline">
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
