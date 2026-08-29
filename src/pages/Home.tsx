import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroPhone } from "@/components/hero/HeroPhone";
import { PrimaryCTA } from "@/components/hero/shared";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Button } from "@/components/ui/button";
import { APP } from "@/constants/app";
import { useSEO } from "@/hooks/useSEO";

const features: [string, string][] = [
	[
		"Accounts",
		"Cash, cards, savings, investments — as many as you keep, grouped how you like.",
	],
	[
		"Multi-currency",
		"Hold accounts in any currency. Live rates keep cross-currency transfers accurate.",
	],
	[
		"Budgets",
		"Set a limit per category and watch it draw down as the month goes.",
	],
	[
		"Recurring entries",
		"Write the rule once — daily, weekly, monthly, yearly — and it posts itself.",
	],
	["Themes", "60+ built in, from Catppuccin to Nord to plain Mint."],
	[
		"CSV import & export",
		"Bring an existing history in; take everything out whenever you want.",
	],
];

const steps: [string, string][] = [
	["Install", "From Google Play, or the APK straight from GitHub Releases."],
	["Add your accounts", "One line each, in whatever currency it holds."],
	[
		"Log as you go",
		"Enter each transaction when it happens. Balances keep themselves.",
	],
];

const spec: [string, string][] = [
	["Licence", "GPL-3.0"],
	["Platform", "Android — iOS in progress"],
	["Account required", "None"],
	["Trackers", "0"],
];

function SectionHeading({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="font-display text-[1.75rem] font-extrabold tracking-[-0.03em] text-foreground md:text-[2.125rem]">
			{children}
		</h2>
	);
}

export function Home() {
	const icon = `${import.meta.env.BASE_URL}icon.png`;
	useSEO({
		title: "Minty Flow — a private expense tracker for Android",
		description:
			"Minty Flow is a free, open-source expense tracker for Android. Every entry stays on your device — no account, no servers, no ads. Budgets, recurring entries, multi-currency, 60+ themes.",
		canonical: "https://minty-flow.github.io/",
	});

	return (
		<main className="mx-auto max-w-5xl px-5 sm:px-6">
			<section className="pb-16 pt-12 md:pt-20">
				<HeroPhone />
			</section>

			{/* FEATURES */}
			<section className="border-t border-border py-20 md:py-28">
				<SectionHeading>Everything the app does</SectionHeading>
				<p className="mt-3 max-w-md text-muted-foreground">
					Enough to run your money properly. Nothing that phones home.
				</p>

				<dl className="mt-10 grid gap-x-12 border-t border-border sm:grid-cols-2">
					{features.map(([term, desc]) => (
						<div key={term} className="border-b border-border py-5">
							<dt className="font-display text-base font-bold text-foreground">
								{term}
							</dt>
							<dd className="mt-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
								{desc}
							</dd>
						</div>
					))}
				</dl>
			</section>

			{/* HOW IT WORKS */}
			<section className="border-t border-border py-20 md:py-28">
				<SectionHeading>Three steps, no setup</SectionHeading>
				<ol className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
					{steps.map(([title, body], i) => (
						<li key={title}>
							<span className="font-display text-sm font-bold tabular text-primary">
								{String(i + 1).padStart(2, "0")}
							</span>
							<h3 className="mt-2 font-display text-lg font-bold tracking-[-0.02em] text-foreground">
								{title}
							</h3>
							<p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted-foreground">
								{body}
							</p>
						</li>
					))}
				</ol>
			</section>

			{/* OPEN SOURCE */}
			<section className="border-t border-border py-20 md:py-28">
				<div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-16">
					<div>
						<SectionHeading>See exactly what it does</SectionHeading>
						<p className="mt-4 max-w-prose text-muted-foreground">
							Every line of Minty Flow is on GitHub under the GPL-3.0 licence.
							The privacy claims aren&rsquo;t something to take on faith — read
							the code that makes them true, check what leaves the device, fork
							it, or send a fix.
						</p>
						<div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
							<Button asChild variant="outline" size="lg">
								<a
									href={APP.links.githubRepo}
									target="_blank"
									rel="noopener noreferrer"
								>
									<GithubIcon className="size-4" />
									View the repository
								</a>
							</Button>
							<Link
								to="/changelog"
								className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
							>
								Read the changelog
								<ArrowRight className="size-3.5" />
							</Link>
						</div>
					</div>

					<dl className="text-[0.9375rem]">
						{spec.map(([k, v]) => (
							<div
								key={k}
								className="flex items-baseline justify-between gap-4 border-t border-border py-3 first:border-t-0"
							>
								<dt className="text-muted-foreground">{k}</dt>
								<dd className="font-display font-bold text-foreground">{v}</dd>
							</div>
						))}
					</dl>
				</div>
			</section>

			{/* CLOSE */}
			<section className="border-t border-border py-24 text-center md:py-32">
				<img
					src={icon}
					alt=""
					className="mx-auto size-12 rounded-2xl border border-border"
				/>
				<h2 className="mt-7 font-display text-3xl font-extrabold tracking-[-0.03em] text-foreground md:text-4xl">
					Start tonight.
				</h2>
				<p className="mx-auto mt-3 max-w-sm text-muted-foreground">
					Free to download. No sign-up. Open it and write the first line.
				</p>
				<div className="mt-9 flex justify-center">
					<PrimaryCTA align="center" />
				</div>
				<p className="mt-8 text-sm text-muted-foreground">
					Still deciding?{" "}
					<Link
						to="/faq"
						className="text-foreground underline-offset-4 hover:underline"
					>
						Read the FAQ
					</Link>
					.
				</p>
			</section>
		</main>
	);
}
