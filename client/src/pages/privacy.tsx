export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <div className="max-w-3xl mx-auto pt-12">
        <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
        
        <div className="mb-8">
          <p className="font-bold">Beemo</p>
          <p className="text-muted-foreground">Last Updated: February 9, 2026</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold mb-4">Overview</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            UpCraft LLC ("we", "us", or "our") built Beemo ("the App") as a personal habit tracking application. Your privacy is important to us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold mb-4">Data Collection</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Beemo does not collect or store any personal data. All habit tracking data is stored locally on your device and never leaves it.
          </p>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            We do not require you to create an account or provide any personal information to use the App.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold mb-4">Analytics</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            We use PostHog, a third-party analytics service, to collect anonymized usage data. This helps us understand how the App is used so we can improve it. The information collected may include:
          </p>
          <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
            <li>Device type and operating system version</li>
            <li>App version</li>
            <li>General usage patterns (e.g., screens viewed, features used)</li>
            <li>App launch and session duration</li>
            <li>Country or region (derived from IP address, which is not stored)</li>
          </ul>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            This data is anonymized and cannot be used to identify you personally. We do not track individual habits, goals, or any content you enter into the App.
          </p>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            For more information on how PostHog handles data, see their privacy policy at <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://posthog.com/privacy</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold mb-4">No Personal Data</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            We do not collect names, email addresses, or any other personally identifiable information. We do not sell, share, or rent any data to third parties for advertising or marketing purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold mb-4">Data Storage</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Your habit tracking data is stored locally on your device. If you delete the App, your data is deleted with it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold mb-4">Children's Privacy</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            Beemo does not collect personal information from anyone, including children under 13. The anonymized analytics data described above does not identify individual users of any age.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-display font-bold mb-4">Changes to This Policy</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be posted within the App or on our website and are effective when posted.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-4">Contact Us</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-muted/30 p-6 rounded-xl border border-border">
            <p className="font-bold text-foreground">UpCraft LLC</p>
            <p className="text-muted-foreground">Email: <a href="mailto:feedback@upcraft.xyz" className="text-accent hover:underline">feedback@upcraft.xyz</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
