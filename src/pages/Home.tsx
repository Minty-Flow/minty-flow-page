import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useSEO } from '@/hooks/useSEO'
import {
  Globe2,
  ShieldCheck,
  Zap,
  Palette,
  ArrowLeftRight,
  BadgeCheck,
  Lock,
  DollarSign,
  UserX,
  HardDrive,
} from 'lucide-react'
import icon from '@/assets/icon.png'
import { APP } from '@/constants/app'

const features = [
  {
    icon: Globe2,
    title: 'Free & Open Source',
    description:
      'No hidden fees, no paywalls — ever. The source code is public so you can inspect, contribute, or self-host with full confidence.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy First',
    description:
      'Your financial data never leaves your device. No cloud sync, no third-party servers, no data harvesting — just you and your numbers.',
  },
  {
    icon: Zap,
    title: 'Smart Automation',
    description:
      'Set recurring transactions and automated rules once, then let Minty Flow handle the rest so your books stay current with zero effort.',
  },
  {
    icon: Palette,
    title: 'Beautiful UX',
    description:
      'Carefully crafted interface with 60+ themes — including Catppuccin, Nord, and custom Minty palettes. Finance tracking that actually feels good.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Multi-Currency',
    description:
      'Track expenses across multiple currencies and accounts. Transfers between currencies use live exchange rates automatically.',
  },
]

const differentiators = [
  {
    icon: DollarSign,
    title: 'No subscription. Ever.',
    description: 'Minty Flow is 100% free, permanently. No free tier with hidden paywalls.',
  },
  {
    icon: UserX,
    title: 'No account required.',
    description: 'Open the app and start tracking. No email, no sign-up, no friction.',
  },
  {
    icon: HardDrive,
    title: 'Your data stays local.',
    description: 'Everything is stored on your device. Minty Flow never touches a server.',
  },
]

const stats = [
  { value: '100%', label: 'Free forever' },
  { value: '0', label: 'Ads or trackers' },
  { value: '60+', label: 'Beautiful themes' },
  { value: '∞', label: 'Accounts & budgets' },
]

function DownloadButtons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button asChild size="lg" className="rounded-full shadow-md">
        <a href={APP.links.googlePlay} target="_blank" rel="noopener noreferrer">
          Get it on Google Play
        </a>
      </Button>

      <Button asChild size="lg" variant="outline" className="rounded-full">
        <a href={APP.links.githubReleases} target="_blank" rel="noopener noreferrer">
          Download on GitHub
        </a>
      </Button>

      <p className="w-full text-center text-xs text-muted-foreground">
        iOS / App Store coming soon
      </p>
    </div>
  )
}

export function Home() {
  useSEO({
    title: 'Minty Flow — Free Expense Tracker, No Account Required',
    description: 'Minty Flow is a free, open-source expense tracker that works 100% offline. No account, no ads, no subscriptions. Track income, expenses, and budgets with 60+ themes on Android.',
    canonical: 'https://flow-mn.github.io/minty-flow-page/',
  })

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* Layered glow background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 size-[700px] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute -top-20 left-1/4 size-[400px] rounded-full bg-primary/5 blur-2xl" />
          <div className="absolute top-10 right-1/4 size-[300px] rounded-full bg-secondary/40 blur-2xl" />
        </div>

        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center md:py-36">
          <img
            src={icon}
            alt="Minty Flow app icon"
            className="mb-6 size-20 rounded-3xl shadow-2xl ring-1 ring-border/50"
          />

          <Badge variant="secondary" className="mb-5 gap-1.5 px-3 py-1 text-xs font-medium">
            <BadgeCheck className="size-3.5" />
            Free · Open Source · Privacy First
          </Badge>

          <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Your money.{' '}
            <span className="text-gradient">Your rules.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Minty Flow is 100% free, open-source, and keeps your data where it belongs — on your device. No accounts. No ads. No compromises.
          </p>

          {/* Trust pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { icon: BadgeCheck, label: '100% Free' },
              { icon: ShieldCheck, label: 'Zero Ads' },
              { icon: Lock, label: 'No Account' },
              { icon: Globe2, label: 'Open Source' },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
              >
                <Icon className="size-3.5 text-primary" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <DownloadButtons />
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-border/40 bg-muted/20 py-8">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 text-center"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="text-3xl font-extrabold tracking-tight text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {value}
                </span>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features (Bento Grid) ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Built different — <span className="text-gradient">by design</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need to stay on top of your money. Nothing you don't.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }, i) => (
              <Card
                key={title}
                className={`group border-border/60 transition-all duration-300 hover:border-primary/30 hover:shadow-lg ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-200 group-hover:scale-110">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Differentiator ── */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Why choose Minty Flow?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Most expense trackers ask too much. Minty Flow asks nothing.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {differentiators.map(({ icon: Icon, title, description }, i) => (
              <Card
                key={title}
                className="group border-border/60 bg-background transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <CardContent className="flex flex-col items-start gap-4 p-6">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-200 group-hover:scale-110">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary/30 px-8 py-14 text-center shadow-sm">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ready to take control?
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-muted-foreground">
              Download free. No sign-up. Just open it and start.
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
        </div>
      </section>
    </main>
  )
}
