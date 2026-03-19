import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import icon from '@/assets/icon.png'
import { APP } from '@/constants/app'

const features = [
  {
    emoji: '🌐',
    title: 'Free & Open Source',
    description:
      'Minty Flow is completely free with no hidden fees. The source code is publicly available for anyone to inspect, contribute to, or self-host.',
  },
  {
    emoji: '🔐',
    title: 'Privacy First',
    description:
      'Your financial data stays on your device. No accounts required, no data sent to third-party servers — your money, your business.',
  },
  {
    emoji: '🤖',
    title: 'Smart Automation',
    description:
      'Set up recurring transactions and automated rules to keep your finances up to date with minimal effort.',
  },
  {
    emoji: '✨',
    title: 'Beautiful UX',
    description:
      'Carefully crafted interface with 60+ themes including Catppuccin, Nord, and custom Minty palettes. Finance tracking that feels good.',
  },
  {
    emoji: '💱',
    title: 'Multi-Currency',
    description:
      'Track expenses in multiple currencies. Supports transfers between different currency accounts with live exchange rates.',
  },
]

function DownloadButtons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button asChild size="lg" className="rounded-full">
        <a
          href={APP.links.googlePlay}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get it on Google Play
        </a>
      </Button>

      <Button asChild size="lg" variant="outline" className="rounded-full">
        <a
          href={APP.links.githubReleases}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Releases on GitHub
        </a>
      </Button>

      <p className="w-full text-center text-xs text-muted-foreground">
        iOS / App Store coming soon
      </p>
    </div>
  )
}

export function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -z-10 hidden -translate-x-1/2 md:block"
        >
          <div className="size-[600px] rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center md:py-32">
          <img
            src={icon}
            alt="Minty Flow app icon"
            className="mb-6 size-24 rounded-3xl shadow-xl"
          />

          <Badge variant="secondary" className="mb-4 text-xs font-medium">
            Free · Open Source · Privacy First
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Take control of{' '}
            <span className="text-primary">your finances</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Minty Flow is a beautiful, free, and open-source expense tracker.
            No subscription. No ads. No account required — just you and your
            money.
          </p>

          <div className="mt-8">
            <DownloadButtons />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Everything you need, nothing you don't
            </h2>
            <p className="mt-3 text-muted-foreground">
              Built with simplicity and privacy in mind — from day one.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ emoji, title, description }) => (
              <Card key={title} className="border-border/60 transition-shadow hover:shadow-md">
                <CardContent className="flex flex-col gap-3 p-6">
                  <span className="text-3xl" role="img" aria-label={title}>
                    {emoji}
                  </span>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Ready to get started?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Download Minty Flow for free and start tracking your finances today.
          </p>
          <div className="mt-8">
            <DownloadButtons />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Have questions?{' '}
            <Link to="/faq" className="text-primary underline-offset-4 hover:underline">
              Check our FAQ
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
