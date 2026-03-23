import { Separator } from '@/components/ui/separator'
import { APP } from '@/constants/app'
import { useSEO } from '@/hooks/useSEO'

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
  useSEO({
    title: 'Privacy Policy — Minty Flow',
    description: 'Minty Flow stores all your data locally on your device. We collect no personal information, use no analytics, and have no servers. Read our full privacy policy.',
    canonical: 'https://flow-mn.github.io/minty-flow-page/privacy',
  })

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 md:py-20">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Effective Date: May 17, 2025</p>
      </div>

      <div className="flex flex-col gap-8">
        <Section title="Introduction">
          <p>
            This Privacy Policy describes how Flow, a personal finance app developed by Batmend
            Ganbaatar ("we", "us", or "our"), handles your information. We built Flow with your
            privacy in mind — your data belongs to you.
          </p>
        </Section>

        <Separator />

        <Section title="Information We Collect">
          <p>
            Flow does not collect, transmit, or store any personal information on our servers. All
            your data — including preferences, settings, and saved content — lives entirely on your
            device and is never accessible to us.
          </p>
          <p>
            That said, the app does make secure HTTPS requests to external services (for example, to
            fetch live exchange rates or load contributor information). These requests may expose
            some technical metadata — such as your device's IP address or request headers — to those
            third-party services.
          </p>
        </Section>

        <Separator />

        <Section title="Use of Information">
          <p>
            Since we don't collect any personal information, we have no personal data to use for
            analytics, advertising, or any other purpose. Plain and simple.
          </p>
        </Section>

        <Separator />

        <Section title="Data Sharing">
          <p>
            We do not share, sell, or hand over any personal data to third parties — and because we
            don't collect your data in the first place, there is nothing to share.
          </p>
          <p>
            <span className="font-medium text-foreground">Note for Apple users:</span> If you use
            Flow on macOS or iOS, your local app data may be included in iCloud backups. We have no
            control over or access to iCloud data. Please review{' '}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Apple's Privacy Policy
            </a>{' '}
            for details.
          </p>
        </Section>

        <Separator />

        <Section title="Data Security">
          <p>
            We take reasonable precautions to help protect the information you store within Flow.
            That said, no software can guarantee absolute security. You are responsible for keeping
            your device secure and your data backed up.
          </p>
        </Section>

        <Separator />

        <Section title="Third-Party Services">
          <p>
            Flow does not integrate any advertising networks, social media SDKs, or cross-app
            tracking tools.
          </p>
          <p>
            To power certain features — like live currency exchange rates or displaying project
            contributors — Flow sends HTTPS requests to third-party APIs. These services may receive
            technical metadata such as your IP address, OS type, or request headers. We don't
            control how those services handle that data, so we encourage you to review their
            respective privacy policies.
          </p>
        </Section>

        <Separator />

        <Section title="Changes to This Policy">
          <p>
            We may revise this Privacy Policy occasionally. When we do, we'll update the effective
            date at the top of this page. Continuing to use Flow after any changes means you accept
            the updated policy. We recommend checking back periodically.
          </p>
        </Section>

        <Separator />

        <Section title="Contact">
          <p>
            Have questions or concerns about this Privacy Policy? Reach out to us at:
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
