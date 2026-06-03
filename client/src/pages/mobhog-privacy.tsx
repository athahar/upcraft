import { useEffect } from "react";
import { Link } from "wouter";

const EMAIL = "feedback@upcraft.xyz";

export default function MobHogPrivacy() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Privacy Policy | mobHog";
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
            href="/app/mobhog"
            className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to mobHog
          </Link>
        </div>
      </header>

      <div className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="font-bold">mobHog</p>
          <p className="mb-8 text-muted-foreground">Effective May 12, 2026</p>
          <h1 className="mb-10 font-display text-4xl font-bold">Privacy Policy</h1>

          {/* 1 */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">1. The short version</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              mobHog is an iOS client for PostHog analytics. We do not run a backend that stores your
              PostHog data, we do not have user accounts, and we never see the content of your PostHog
              account. Your PostHog data flows directly from PostHog's servers to your iPhone using a
              Personal API Key that you provide and that lives only in your device's secure Keychain.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              The iOS app does send a small amount of anonymous product analytics (which screen you
              opened, which feature you used) to a PostHog project we own, so we can understand how the
              app is used in aggregate. This data is never linked to your identity and never includes
              anything from inside your own PostHog account. The iOS app also uses RevenueCat to manage
              Apple In-App Purchase subscriptions. Both flows are detailed in section 3.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              This marketing site (mobhog.app) uses PostHog for cookie-free analytics so we can see how
              people discover mobHog. We do not collect email addresses, names, or anything personally
              identifying on this site.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              This policy applies to both the mobHog iOS app and the mobhog.app marketing site.
            </p>
          </section>

          {/* 2 */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">2. What the marketing site collects</h2>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Pageviews and interaction events via PostHog: things like "visited the homepage" and
                "clicked a feature card."
              </li>
              <li>
                Approximate location derived by PostHog from your IP address at the country/region level.
                We do not store raw IP addresses.
              </li>
              <li>
                Browser and device type: the user-agent string (Chrome on macOS, Safari on iPhone, etc.).
              </li>
              <li>Referrer: the page that linked to ours, if any.</li>
            </ul>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We do not use cookies on this site. PostHog can be configured to use cookies, but our
              integration uses cookieless tracking.
            </p>
          </section>

          {/* 3 */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">3. What the mobHog iOS app collects</h2>

            <h3 className="mb-3 font-display text-xl font-bold">3.1 On-device only (never leaves your phone)</h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              The mobHog iOS app stores the following on your device:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Your PostHog Personal API Key stored in the iOS Keychain, encrypted by the operating
                system, and used only to authenticate requests directly to PostHog's API. We never
                receive it.
              </li>
              <li>Cached dashboard data from the last fetch, so the app can show something while offline.</li>
              <li>
                App settings: your selected default project, dashboard configuration, region preference,
                and theme.
              </li>
            </ul>

            <h3 className="mb-3 font-display text-xl font-bold">
              3.2 Anonymous product analytics (sent to a PostHog project we own)
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              So we can understand how the app is used in aggregate, mobHog sends a small set of anonymous
              events to a PostHog project we own (hosted at us.i.posthog.com). This data covers:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Anonymous device identifier: a random UUID generated on first launch and stored in the
                app's local storage. It is not tied to your Apple ID, your PostHog identity, your email, or
                any other personal info. Reinstalling the app produces a fresh UUID.
              </li>
              <li>
                App usage events: which screen was opened, which paywall was shown, which tab was tapped,
                whether the user was in Demo Mode. No event ever includes data from your own PostHog
                account (no insight names, no event names, no project names, no person properties, no chart
                values).
              </li>
              <li>App version, build number, region ("us", "eu", or "self-hosted").</li>
              <li>
                App lifecycle: opened, backgrounded, became active. These are the standard PostHog SDK
                lifecycle events.
              </li>
            </ul>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              PostHog's autocapture (screen recordings, automatic touch capture) and session replay
              features are disabled. We only send the explicit events listed above.
            </p>

            <h3 className="mb-3 font-display text-xl font-bold">3.3 Subscription management (RevenueCat)</h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              When you reach the paywall or purchase mobHog Pro, the app uses RevenueCat to manage Apple
              In-App Purchase state. RevenueCat receives:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                An anonymous App User ID generated by the RevenueCat SDK. It is not tied to your Apple ID
                directly and not tied to your PostHog identity.
              </li>
              <li>
                Purchase events: subscription start, renewal, cancellation, restore, and trial state, as
                required to validate entitlements server-side.
              </li>
              <li>
                Device info (iOS version, app version, locale) used by RevenueCat for receipt validation
                routing.
              </li>
            </ul>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              RevenueCat does not receive anything from inside your own PostHog account.
            </p>

            <h3 className="mb-3 font-display text-xl font-bold">3.4 No mobHog account</h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              mobHog does not have user accounts. There is no sign-up, no email address required, and no
              profile maintained by us. You authenticate to PostHog directly using your own Personal API
              Key. The anonymous identifiers in sections 3.2 and 3.3 are not accounts; they are opaque
              random strings we cannot use to look you up or contact you.
            </p>

            <h3 className="mb-3 font-display text-xl font-bold">3.5 App permissions and network calls</h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              mobHog does not request access to your location, contacts, camera, microphone, photos,
              calendar, health data, motion data, Bluetooth, or local network.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              The app makes outbound network calls to:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Your PostHog instance (us.posthog.com, eu.posthog.com, or your self-hosted URL) to read
                your data.
              </li>
              <li>
                us.i.posthog.com to send the anonymous app-usage analytics described in section 3.2.
              </li>
              <li>RevenueCat (api.revenuecat.com) for the subscription management described in section 3.3.</li>
              <li>
                Apple StoreKit endpoints for In-App Purchase, which RevenueCat handles on the app's behalf.
              </li>
            </ul>
          </section>

          {/* 3a */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">3a. App Store privacy disclosure</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              For Apple's privacy nutrition labels, the mobHog iOS app declares the following four data
              points, all marked Not Linked to User because none can be tied back to your real-world
              identity:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Identifiers / User ID, used for App Functionality. This is the anonymous App User ID that
                RevenueCat generates to track subscription entitlements.
              </li>
              <li>
                Identifiers / Device ID, used for Analytics. This is the anonymous UUID mobHog generates on
                first launch and uses to attribute product-analytics events to a device. It is not the
                IDFA and not the iOS device identifier; it is a random value we own.
              </li>
              <li>
                Purchases / Purchase History, used for App Functionality. This is the subscription state
                RevenueCat maintains so that Pro features unlock on devices you have already purchased on.
              </li>
              <li>
                Usage Data / Product Interaction, used for Analytics. This is the set of anonymous events
                listed in section 3.2 (screen views, taps on specific UI elements, feature usage).
              </li>
            </ul>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We do not collect contact info, location, financial info, health data, sensitive info, user
              content, browsing history, search history, or any data the user reads from their own PostHog
              account.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We do not use any of the data above for tracking purposes (under Apple's definition of
              tracking), and we do not share it with data brokers or advertising networks.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              If you opt in to Apple's "Share with App Developers" setting in iOS Settings → Privacy →
              Analytics &amp; Improvements, Apple may send us anonymized crash reports. This is governed by
              Apple, not by us.
            </p>
          </section>

          {/* 4 */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">4. Third parties</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              mobHog connects to the following services in the course of normal operation:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Your PostHog instance (the analytics service whose data the app displays). Your
                relationship is governed by PostHog's Terms and Privacy Policy. mobHog reads from this with
                the Personal API Key you provide; we never receive your key.
              </li>
              <li>
                PostHog (a project we own) for the anonymous app-usage analytics described in section 3.2.
                Same vendor as above, different project, separate data flow. Hosted at us.i.posthog.com.{" "}
                <a
                  href="https://posthog.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  PostHog's Privacy Policy
                </a>{" "}
                applies to how PostHog handles the data on our behalf.
              </li>
              <li>
                RevenueCat for subscription management as described in section 3.3. See{" "}
                <a
                  href="https://www.revenuecat.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  RevenueCat's privacy policy
                </a>
                .
              </li>
              <li>
                Apple for App Store delivery, In-App Purchase transactions, crash reports (if you opt in
                via iOS Settings → Privacy → Analytics), and TestFlight (for beta testers).{" "}
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
              The marketing site itself uses PostHog as described in section 2 and is hosted on Vercel,
              which receives standard server logs (IP, request path) per{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Vercel's policy
              </a>
              .
            </p>
          </section>

          {/* 5 */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">5. Your rights and data deletion</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Because mobHog has no user accounts and we do not store personal data on our own servers,
              deletion is straightforward:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Delete on-device app data: Uninstall the mobHog app from your device. This removes the API
                key, all cached PostHog data, all app settings, and the anonymous analytics device UUID
                from your phone.
              </li>
              <li>
                Delete the anonymous product-analytics events we received: Email us with the device UUID
                stored at first launch (we can help you locate it if you still have the app installed) and
                we will delete the events associated with it from our PostHog project. If you have already
                uninstalled, the UUID is gone from your phone and we have no way to identify which subset of
                events were yours, but you can email us anyway and we will explain options.
              </li>
              <li>
                Delete RevenueCat subscription data: Email us with your RevenueCat App User ID (or your
                Apple receipt) and we will request deletion via RevenueCat. Note that Apple's receipt
                records may need to be retained for tax and refund purposes.
              </li>
              <li>
                Delete marketing-site analytics: Email us and we will request deletion of any visit data
                PostHog associates with your IP or device, via PostHog's data-deletion controls.
              </li>
              <li>
                Delete data inside your PostHog account: Contact PostHog directly. mobHog has no ability to
                modify, delete, or export data inside your PostHog tenant.
              </li>
            </ul>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              If you are in the EEA, UK, California, or another jurisdiction with additional privacy
              rights, you may have rights of access, deletion, correction, portability, and objection
              regarding the small amount of data PostHog collects about your visit to this marketing site.
              Email us to exercise them.
            </p>
          </section>

          {/* 6 */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">6. Children</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              mobHog is not directed to children under 13. If you believe a child has used the app, contact
              us so we can help.
            </p>
          </section>

          {/* 7 */}
          <section className="mb-8">
            <h2 className="mb-4 font-display text-2xl font-bold">7. Changes to this policy</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              We may update this policy as the app evolves. The effective date at the top of this page
              reflects the most recent revision. Significant changes will be announced on the marketing
              site.
            </p>
          </section>

          {/* 8 */}
          <section className="mb-4">
            <h2 className="mb-4 font-display text-2xl font-bold">8. Contact</h2>
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
