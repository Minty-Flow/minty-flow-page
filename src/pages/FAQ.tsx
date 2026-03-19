import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { APP } from '@/constants/app'

const faqs: { q: string; a: string }[] = [
  {
    q: 'What is Minty Flow?',
    a: 'Minty Flow is a free, open-source, privacy-first expense tracker. It helps you record your income and expenses, visualize your spending habits, and manage your budget — all without an account or internet connection.',
  },
  {
    q: 'Where do I download Minty Flow?',
    a: 'Minty Flow is available on the App Store for iOS and on Google Play for Android. Search for "Minty Flow" or follow the download links on our home page.',
  },
  {
    q: 'Can I export all my data?',
    a: 'Yes. You can export your transactions as a CSV file at any time from the app settings. The export includes all accounts, categories, and transaction history.',
  },
  {
    q: 'Importing erased my data — how do I recover it?',
    a: 'Before importing, make sure to export a backup of your existing data from Settings → Export. If you did not have a backup, unfortunately the data cannot be recovered since Minty Flow stores everything locally on your device.',
  },
  {
    q: 'Does Minty Flow work offline?',
    a: 'Yes. Minty Flow is fully functional offline. All your data is stored locally on your device and every feature works without an internet connection.',
  },
  {
    q: 'Does Minty Flow have autobackup?',
    a: 'Minty Flow does not have an autobackup feature. We recommend manually exporting a CSV from Settings → Export regularly so you always have a copy of your data.',
  },
  {
    q: 'Does Minty Flow support multiple currencies?',
    a: 'Yes. You can create accounts in different currencies and record transactions in any currency. Exchange rates can be set manually or fetched automatically.',
  },
  {
    q: 'Can I make transfers between different currency accounts?',
    a: 'Yes. Minty Flow supports cross-currency transfers. When you transfer between accounts with different currencies, you can specify the exchange rate for that transaction so your balances stay accurate.',
  },
  {
    q: 'How do I import from other apps?',
    a: 'Minty Flow supports CSV import. You can export your data from apps like Ivy or any app that exports to CSV, then reformat the file to match the Minty Flow CSV template (available in the app) and import it via Settings → Import.',
  },
  {
    q: 'Can I add recurring transactions?',
    a: 'Yes. Minty Flow supports recurring transactions — daily, weekly, monthly, and yearly. Set up a recurring rule once and the transactions will be created automatically on the scheduled dates.',
  },
  {
    q: 'How does recurring transactions work?',
    a: 'When you create a recurring transaction, Minty Flow stores the rule on your device. The app checks for due transactions each time it opens and creates the entries automatically. You can edit or delete recurring rules at any time from the transaction detail view.',
  },
  {
    q: 'Is Minty Flow free?',
    a: 'Yes, Minty Flow is completely free with no premium tier, no ads, and no in-app purchases. If you find it valuable, you can support development via GitHub Sponsors or Buy Me a Coffee — but it is entirely optional.',
  },
  {
    q: 'Why is Minty Flow free and open source?',
    a: 'The developer believes personal finance tools should be accessible to everyone regardless of income. Open-sourcing the code means anyone can audit it for security, contribute improvements, or build on top of it.',
  },
  {
    q: 'Will feature X be implemented?',
    a: `Feature requests are tracked on GitHub Issues. Search the existing issues before opening a new one — if the feature is already requested, add a thumbs-up reaction to help prioritize it. The most popular requests are more likely to be implemented.`,
  },
  {
    q: 'How many accounts can I have?',
    a: 'There is no limit to the number of accounts you can create in Minty Flow. Create as many as you need for cash, cards, savings, investments, or any other purpose.',
  },
  {
    q: 'How do I contact the maintainer?',
    a: `You can reach the developer by email at ${APP.contact.email} or through the GitHub repository. Response times may vary but all messages are read.`,
  },
]

export function FAQ() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 md:py-20">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-muted-foreground">
          Everything you need to know about Minty Flow.
        </p>
      </div>

      <Accordion type="single" collapsible className="flex flex-col gap-2">
        {faqs.map(({ q, a }) => (
          <AccordionItem
            key={q}
            value={q}
            className="rounded-lg border border-border/60 px-4"
          >
            <AccordionTrigger className="py-4 text-left font-medium text-foreground hover:no-underline">
              {q}
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  )
}
