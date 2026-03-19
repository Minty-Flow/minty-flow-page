import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-semibold text-foreground">Minty Flow</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Free, open-source expense tracker.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Download</p>
            <ul className="mt-2 flex flex-col gap-1.5">
              <li>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Google Play
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/flow-mn/minty-flow/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  GitHub Releases
                </a>
              </li>
              <li className="text-sm text-muted-foreground/60">
                App Store (coming soon)
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Community</p>
            <ul className="mt-2 flex flex-col gap-1.5">
              <li>
                <a
                  href="https://github.com/flow-mn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Legal</p>
            <ul className="mt-2 flex flex-col gap-1.5">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Minty Flow. Free and open source.
        </p>
      </div>
    </footer>
  )
}
