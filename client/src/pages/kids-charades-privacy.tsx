import { useEffect } from "react";
import { Link } from "wouter";

const EMAIL = "feedback@upcraft.xyz";

export default function KidsCharadesPrivacy() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Privacy Policy | Kids Charades";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
          <Link href="/" className="font-display text-2xl font-bold tracking-tight">
            upcraft
          </Link>
          <Link
            href="/app/kids-charades"
            className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to Kids Charades
          </Link>
        </div>
      </header>

      <div className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="font-bold">Kids Charades</p>
          <p className="mb-8 text-muted-foreground">Effective July 17, 2026</p>
          <h1 className="mb-10 font-display text-4xl font-bold">Privacy Policy</h1>

          {/* 1 */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">1. The short version</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Kids Charades is a tilt-to-play charades game for families. There are no accounts and
              no sign-up. We never ask for a name, an email address, a phone number, or anything else
              that could identify you or your child.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              The app shows no ads. It contains no advertising SDKs and does not track you across
              other apps or websites, so you will never see Apple's tracking permission prompt.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              To learn which parts of the game people enjoy and where it can be better, the app sends
              a small amount of anonymous usage data to a PostHog project we own. This is never tied
              to your identity. Everything is spelled out below.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              This policy covers both the Kids Charades iOS app and this page
              (upcraft.xyz/app/kids-charades).
            </p>
          </section>

          {/* 2 */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">2. What the app collects</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We use PostHog, a privacy-respecting analytics tool, to understand how the app is used
              in aggregate. It receives:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                An anonymous device identifier (Apple's "Identifier for Vendor," or IDFV). This is a
                random ID that belongs only to this app on your device. It is not the advertising ID,
                it is not linked to your name or an account, and it resets when you delete the app.
              </li>
              <li>
                Basic gameplay events: which screen you opened, which category you played, your score
                and how long a round lasted, and whether the upgrade screen was shown. That is the
                whole list. We do not read anything you type or record any audio or video.
              </li>
              <li>App version and build number, and the device model and iOS version.</li>
            </ul>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              PostHog's automatic screen capture and session replay are turned off. We only send the
              specific events above.
            </p>
          </section>

          {/* 3 */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">3. In-app purchase</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Kids Charades is free to start, with two categories always free. One optional one-time
              purchase, "Unlock Everything," opens the rest. It is a single purchase, not a
              subscription, and there is nothing else to buy.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              The purchase is handled entirely by Apple through the App Store. We never see or store
              your card number or billing details. On our side we only keep a flag on your device
              that remembers you unlocked the game.
            </p>
          </section>

          {/* 4 */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">4. App Store privacy disclosure</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              For Apple's privacy labels, the app declares two data points, both marked Not Linked to
              You because neither can be traced back to a real person:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Identifiers / Device ID, used for Analytics. This is the anonymous IDFV described in
                section 2.
              </li>
              <li>
                Usage Data / Product Interaction, used for Analytics. These are the gameplay events in
                section 2 (screens viewed, categories played, scores).
              </li>
            </ul>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We do not collect contact info, location, photos, audio, health data, or any content.
              We do not use this data for tracking under Apple's definition, and we never share it
              with advertisers or data brokers.
            </p>
          </section>

          {/* 5 */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">5. This website</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              This page uses PostHog for cookie-free analytics so we can see how people find Kids
              Charades. We collect pageviews, the general country or region PostHog infers from your
              IP address (we do not store the raw IP), your browser and device type, and the page that
              referred you. We do not use cookies here and we do not collect names or email addresses.
            </p>
          </section>

          {/* 6 */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">6. Third parties</h2>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                PostHog handles the anonymous analytics described above, on our behalf, hosted at
                us.i.posthog.com.{" "}
                <a
                  href="https://posthog.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  PostHog's Privacy Policy
                </a>{" "}
                applies to how they process it.
              </li>
              <li>
                Apple handles App Store delivery, the in-app purchase, and (only if you opt in via iOS
                Settings → Privacy → Analytics) anonymized crash reports.{" "}
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Apple's privacy policy
                </a>{" "}
                applies.
              </li>
            </ul>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              There are no advertising networks and no data brokers. This site is hosted on Railway,
              which receives standard server logs.
            </p>
          </section>

          {/* 7 */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">7. Children</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Kids Charades is made to be played by the whole family and is rated 4+. We do not
              knowingly collect personal information from children. The only data the app sends is the
              anonymous device identifier and the gameplay events in section 2, with no ads and no
              cross-app tracking. If you believe a child has provided us personal information, or you
              would like anything associated with your device deleted, email us and we will take care
              of it.
            </p>
          </section>

          {/* 8 */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">8. Your choices and deletion</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Because there are no accounts, this is simple. Deleting the app removes the anonymous
              identifier and the unlock flag from your device. To have the anonymous analytics events
              deleted from our PostHog project, email us and we will remove them. If you are in the
              EEA, UK, California, or a similar place, you can ask us to access or delete the small
              amount of data described here.
            </p>
          </section>

          {/* 9 */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">9. Changes to this policy</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We may update this policy as the app changes. The effective date at the top reflects the
              latest version.
            </p>
          </section>

          {/* 10 */}
          <section className="mb-4">
            <h2 className="mb-4 font-display text-2xl font-bold">10. Contact</h2>
            <p className="leading-relaxed text-muted-foreground">
              Questions, requests, or concerns? Email{" "}
              <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">
                {EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
