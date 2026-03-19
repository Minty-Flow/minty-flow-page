import { Separator } from '@/components/ui/separator'
import { APP } from '@/constants/app'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-semibold text-foreground">{title}</h2>
      <div className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  )
}

export function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 md:py-20">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: March 2026
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <Section title="Overview">
          <p>
            Minty Flow is designed with privacy as a core principle. We do not
            collect, store, or transmit your personal financial data. All data
            you enter into the app stays on your device under your control.
          </p>
          <p>
            This Privacy Policy explains what (minimal) information we may
            encounter and how we handle it.
          </p>
        </Section>

        <Separator />

        <Section title="Data We Do Not Collect">
          <p>Minty Flow does not collect or store:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Your financial transactions, accounts, or balances</li>
            <li>Your name, email address, or any personal identifiers</li>
            <li>Device identifiers or advertising IDs</li>
            <li>Location data</li>
            <li>Usage analytics or behavioral data sent to our servers</li>
          </ul>
        </Section>

        <Separator />

        <Section title="Local Storage">
          <p>
            All app data — your accounts, transactions, categories, and
            settings — is stored locally on your device using on-device
            databases (SQLite / Core Data). This data never leaves your device
            unless you explicitly export it or enable iCloud sync.
          </p>
        </Section>

        <Separator />

        <Separator />

        <Section title="Crash Reporting">
          <p>
            The app may collect anonymized crash reports to help us identify
            and fix bugs. These reports do not contain any personal information
            or financial data. They include technical details such as the
            device model, OS version, and the stack trace at the point of
            crash.
          </p>
          <p>
            You can opt out of crash reporting in app settings.
          </p>
        </Section>

        <Separator />

        <Section title="Third-Party Services">
          <p>
            Minty Flow does not integrate third-party advertising networks,
            social SDKs, or analytics platforms that would track you across
            apps or websites.
          </p>
          <p>
            The optional exchange rate feature fetches publicly available
            exchange rate data from a financial data API. No personal
            information is included in these requests.
          </p>
        </Section>

        <Separator />

        <Section title="Children's Privacy">
          <p>
            Minty Flow does not knowingly collect any information from children
            under the age of 13. The app does not collect personal information
            from any user, regardless of age.
          </p>
        </Section>

        <Separator />

        <Section title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will post
            any changes on this page and update the "Last updated" date at the
            top. We encourage you to review this page periodically.
          </p>
        </Section>

        <Separator />

        <Section title="Contact">
          <p>
            If you have any questions or concerns about this Privacy Policy or
            how Minty Flow handles data, please contact us at:
          </p>
          <p>
            <a
              href={`mailto:${APP.contact.email}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              {APP.contact.email}
            </a>
          </p>
        </Section>
      </div>
    </main>
  )
}
