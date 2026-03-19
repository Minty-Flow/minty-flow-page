import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/theme'
import icon from '@/assets/icon.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/faq', label: 'FAQ' },
  { to: '/privacy', label: 'Privacy' },
]

export function Navbar() {
  const { pathname } = useLocation()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={icon} alt="Minty Flow" className="size-8 rounded-xl" />
          <span className="text-lg font-semibold text-foreground">Minty Flow</span>
        </Link>

        <div className="flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={cn(
                    'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                    pathname === to
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="ml-1 size-9 rounded-full"
          >
            {theme === 'dark' ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </Button>
        </div>
      </nav>
    </header>
  )
}
