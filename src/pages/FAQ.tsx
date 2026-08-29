import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { APP } from "@/constants/app";
import { useSEO } from "@/hooks/useSEO";
import { cn } from "@/lib/utils";

interface FAQ {
	q: string;
	a: React.ReactNode;
	plain: string;
}

interface FAQGroup {
	id: string;
	title: string;
	faqs: FAQ[];
}

const groups: FAQGroup[] = [
	{
		id: "basics",
		title: "Basics",
		faqs: [
			{
				q: "What is Minty Flow?",
				plain:
					"Minty Flow is a free, open-source, privacy-first expense tracker. It helps you record your income and expenses, visualize your spending habits, and manage your budget — all without an account or internet connection.",
				a: "Minty Flow is a free, open-source, privacy-first expense tracker. It helps you record your income and expenses, visualize your spending habits, and manage your budget — all without an account or internet connection.",
			},
			{
				q: "Where do I download Minty Flow?",
				plain:
					"Minty Flow is on Google Play for Android. You can also download the APK directly from GitHub Releases. An iOS version is planned but not yet available.",
				a: "Minty Flow is on Google Play for Android. You can also download the APK directly from GitHub Releases. An iOS version is planned but not yet available.",
			},
			{
				q: "Is Minty Flow free?",
				plain:
					"Yes. Minty Flow is completely free — no premium tier, no ads, no in-app purchases, and no upsells. Every feature is available to everyone.",
				a: "Yes. Minty Flow is completely free — no premium tier, no ads, no in-app purchases, and no upsells. Every feature is available to everyone.",
			},
			{
				q: "Why is Minty Flow free and open source?",
				plain:
					"The developer believes personal finance tools should be accessible to everyone regardless of income. Open-sourcing the code means anyone can audit it for security, contribute improvements, or build on top of it.",
				a: "The developer believes personal finance tools should be accessible to everyone regardless of income. Open-sourcing the code means anyone can audit it for security, contribute improvements, or build on top of it.",
			},
		],
	},
	{
		id: "privacy",
		title: "Data & privacy",
		faqs: [
			{
				q: "Does Minty Flow work offline?",
				plain:
					"Yes. Minty Flow is fully functional offline. All your data is stored locally on your device and every feature works without an internet connection.",
				a: "Yes. Minty Flow is fully functional offline. All your data is stored locally on your device and every feature works without an internet connection.",
			},
			{
				q: "Can I export all my data?",
				plain:
					"Yes. You can export your transactions as a CSV file at any time from the app settings. The export includes all accounts, categories, and transaction history.",
				a: "Yes. You can export your transactions as a CSV file at any time from the app settings. The export includes all accounts, categories, and transaction history.",
			},
			{
				q: "How do I import from other apps?",
				plain:
					"Minty Flow supports CSV import. Export your data from your current app (any app that can export to CSV works), reformat the file to match the Minty Flow CSV template (available in the app), then import it via Settings → Import.",
				a: "Minty Flow supports CSV import. Export your data from your current app (any app that can export to CSV works), reformat the file to match the Minty Flow CSV template (available in the app), then import it via Settings → Import.",
			},
			{
				q: "Importing erased my data — how do I recover it?",
				plain:
					"Before importing, make sure to export a backup of your existing data from Settings → Export. If you did not have a backup, unfortunately the data cannot be recovered since Minty Flow stores everything locally on your device.",
				a: "Before importing, make sure to export a backup of your existing data from Settings → Export. If you did not have a backup, unfortunately the data cannot be recovered since Minty Flow stores everything locally on your device.",
			},
			{
				q: "Does Minty Flow have autobackup?",
				plain:
					"Minty Flow does not have an autobackup feature. We recommend manually exporting a CSV from Settings → Export regularly so you always have a copy of your data.",
				a: "Minty Flow does not have an autobackup feature. We recommend manually exporting a CSV from Settings → Export regularly so you always have a copy of your data.",
			},
		],
	},
	{
		id: "features",
		title: "Features",
		faqs: [
			{
				q: "Does Minty Flow support multiple currencies?",
				plain:
					"Yes. You can create accounts in different currencies and record transactions in any currency. Exchange rates can be set manually or fetched automatically.",
				a: "Yes. You can create accounts in different currencies and record transactions in any currency. Exchange rates can be set manually or fetched automatically.",
			},
			{
				q: "Can I make transfers between different currency accounts?",
				plain:
					"Yes. Minty Flow supports cross-currency transfers. When you transfer between accounts with different currencies, you can specify the exchange rate for that transaction so your balances stay accurate.",
				a: "Yes. Minty Flow supports cross-currency transfers. When you transfer between accounts with different currencies, you can specify the exchange rate for that transaction so your balances stay accurate.",
			},
			{
				q: "Can I add recurring transactions?",
				plain:
					"Yes. Minty Flow supports recurring transactions — daily, weekly, monthly, and yearly. Set up a recurring rule once and the transactions will be created automatically on the scheduled dates.",
				a: "Yes. Minty Flow supports recurring transactions — daily, weekly, monthly, and yearly. Set up a recurring rule once and the transactions will be created automatically on the scheduled dates.",
			},
			{
				q: "How do recurring transactions work?",
				plain:
					"When you create a recurring transaction, Minty Flow stores the rule on your device. The app checks for due transactions each time it opens and creates the entries automatically. You can edit or delete recurring rules at any time from the transaction detail view.",
				a: "When you create a recurring transaction, Minty Flow stores the rule on your device. The app checks for due transactions each time it opens and creates the entries automatically. You can edit or delete recurring rules at any time from the transaction detail view.",
			},
			{
				q: "How many accounts can I have?",
				plain:
					"There is no limit to the number of accounts you can create in Minty Flow. Create as many as you need for cash, cards, savings, investments, or any other purpose.",
				a: "There is no limit to the number of accounts you can create in Minty Flow. Create as many as you need for cash, cards, savings, investments, or any other purpose.",
			},
		],
	},
	{
		id: "support",
		title: "Support",
		faqs: [
			{
				q: "Will feature X be implemented?",
				plain:
					"Feature requests are tracked on GitHub Issues. Search the existing issues before opening a new one — if the feature is already requested, add a thumbs-up reaction to help prioritize it. The most popular requests are more likely to be implemented.",
				a: "Feature requests are tracked on GitHub Issues. Search the existing issues before opening a new one — if the feature is already requested, add a thumbs-up reaction to help prioritize it. The most popular requests are more likely to be implemented.",
			},
			{
				q: "How do I contact the maintainer?",
				plain: `You can reach the developer by email at ${APP.contact.email} or through the GitHub repository. Response times may vary but all messages are read.`,
				a: (
					<>
						You can reach the developer by email at{" "}
						<a
							href={`mailto:${APP.contact.email}`}
							className="text-foreground underline-offset-4 hover:underline"
						>
							{APP.contact.email}
						</a>{" "}
						or through the GitHub repository. Response times may vary but all
						messages are read.
					</>
				),
			},
		],
	},
];

const TOTAL_FAQS = groups.reduce((sum, g) => sum + g.faqs.length, 0);

export function FAQ() {
	const [activeGroup, setActiveGroup] = useState(groups[0].id);

	useSEO({
		title: "FAQ — Minty Flow",
		description:
			"Answers to common questions about Minty Flow: how it works, privacy, multi-currency, recurring transactions, data export, and more.",
		canonical: "https://minty-flow.github.io/faq",
	});

	useEffect(() => {
		const allFaqs = groups.flatMap((g) => g.faqs);
		const schema = {
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: allFaqs.map(({ q, plain }) => ({
				"@type": "Question",
				name: q,
				acceptedAnswer: { "@type": "Answer", text: plain },
			})),
		};
		const el = document.createElement("script");
		el.type = "application/ld+json";
		el.id = "faq-schema";
		el.textContent = JSON.stringify(schema);
		document.head.appendChild(el);
		return () => {
			document.getElementById("faq-schema")?.remove();
		};
	}, []);

	return (
		<main className="mx-auto max-w-5xl px-5 sm:px-6">
			<section className="max-w-2xl pt-14 md:pt-20">
				<h1 className="font-display text-4xl font-extrabold tracking-[-0.035em] text-foreground md:text-5xl">
					Questions &amp; answers
				</h1>
				<p className="mt-4 text-muted-foreground">
					{TOTAL_FAQS} answers on how Minty Flow works — privacy, features,
					import and export.
				</p>
			</section>

			<section className="py-14 md:py-20">
				<div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
					{/* Section nav */}
					<aside className="lg:sticky lg:top-24 lg:self-start">
						<p className="text-[0.8125rem] font-semibold text-foreground">
							Categories
						</p>
						<ul className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
							{groups.map((g) => {
								const active = activeGroup === g.id;
								return (
									<li key={g.id}>
										<a
											href={`#${g.id}`}
											onClick={() => setActiveGroup(g.id)}
											className={cn(
												"inline-flex w-full items-center justify-between gap-3 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition-colors duration-150 lg:rounded-[0.85rem] lg:py-2",
												active
													? "border-transparent bg-primary font-medium text-primary-foreground"
													: "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
											)}
										>
											{g.title}
											<span
												className={cn(
													"text-xs tabular-nums",
													active
														? "text-primary-foreground/70"
														: "text-muted-foreground",
												)}
											>
												{g.faqs.length}
											</span>
										</a>
									</li>
								);
							})}
						</ul>
					</aside>

					{/* Groups */}
					<div className="flex flex-col gap-16">
						{groups.map((group) => (
							<section key={group.id} id={group.id} className="scroll-mt-28">
								<div className="flex items-baseline justify-between border-b border-border/60 pb-3">
									<h2 className="font-display text-xl font-semibold tracking-tight">
										{group.title}
									</h2>
									<span className="text-xs text-muted-foreground">
										{group.faqs.length}{" "}
										{group.faqs.length === 1 ? "answer" : "answers"}
									</span>
								</div>

								<Accordion type="single" collapsible className="flex flex-col">
									{group.faqs.map((f, i) => (
										<AccordionItem
											key={f.q}
											value={`${group.id}-${i}`}
											className="border-border/60"
										>
											<AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
												{f.q}
											</AccordionTrigger>
											<AccordionContent className="text-sm leading-relaxed text-muted-foreground">
												{f.a}
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</section>
						))}
					</div>
				</div>
			</section>

			<section className="border-t border-border py-16 md:py-20">
				<div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<h2 className="font-display text-xl font-bold tracking-[-0.02em]">
							Still stuck?
						</h2>
						<p className="mt-1.5 text-[0.9375rem] text-muted-foreground">
							Email the maintainer directly — every message gets read.
						</p>
					</div>
					<Button asChild variant="outline" size="lg">
						<a href={`mailto:${APP.contact.email}`}>
							<Mail className="size-4" />
							Email support
						</a>
					</Button>
				</div>
			</section>
		</main>
	);
}
