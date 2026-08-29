import {
	ArrowDownLeft,
	ArrowLeftRight,
	ArrowUpRight,
	CircleDot,
	CreditCard,
	EyeOff,
	LayoutGrid,
	LineChart,
	Plus,
	Search,
	Settings,
	ShoppingBasket,
	User,
	Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PrimaryCTA, TrustRow } from "./shared";

const rows = [
	{
		icon: ArrowLeftRight,
		title: "From Cash to Savings",
		meta: "Cash → Savings · 11:34 PM",
		amount: "$20",
		tone: "neutral" as const,
	},
	{
		icon: ShoppingBasket,
		title: "Groceries",
		meta: "Cash · 11:33 PM",
		amount: "-$80",
		tone: "negative" as const,
	},
	{
		icon: CircleDot,
		title: "Balance adjustment",
		meta: "Cash · 11:33 PM",
		amount: "$200",
		tone: "positive" as const,
	},
];

function StatCard({
	label,
	amount,
	tone,
}: {
	label: string;
	amount: string;
	tone: "positive" | "negative";
}) {
	const Icon = tone === "positive" ? ArrowDownLeft : ArrowUpRight;
	return (
		<div className="flex-1 rounded-2xl border border-border bg-card p-3.5">
			<div className="flex items-center gap-2">
				<span
					className={cn(
						"inline-flex size-6 items-center justify-center rounded-lg",
						tone === "positive"
							? "bg-primary/15 text-primary"
							: "bg-negative/15 text-negative",
					)}
				>
					<Icon className="size-3.5" />
				</span>
				<span className="eyebrow">{label}</span>
			</div>
			<div className="mt-3 flex items-end justify-between">
				<span className="text-[0.6875rem] text-muted-foreground">USD</span>
				<span
					className={cn(
						"font-display text-xl font-bold tabular",
						tone === "positive" ? "text-primary" : "text-negative",
					)}
				>
					{amount}
				</span>
			</div>
			<div
				className={cn(
					"mt-2 h-1 w-10 rounded-full",
					tone === "positive" ? "bg-primary" : "bg-negative",
				)}
			/>
		</div>
	);
}

function PhoneMockup() {
	return (
		<div className="relative mx-auto w-full max-w-[17rem] sm:max-w-[19rem]">
			<div className="rounded-[2.75rem] border border-border bg-card p-2.5">
				<div className="overflow-hidden rounded-[2.25rem] border border-border bg-background px-4 pb-4 pt-5">
					{/* header */}
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<User className="size-4 text-primary" />
							<span className="font-display text-sm font-bold">
								Hi, Minty flow!
							</span>
						</div>
						<EyeOff className="size-4 text-primary" />
					</div>

					{/* filter chips */}
					<div className="mt-4 flex gap-1.5 overflow-hidden">
						{[
							{ icon: Search, label: "Search" },
							{ icon: LayoutGrid, label: "This month" },
							{ icon: CreditCard, label: "Accounts" },
						].map(({ icon: Icon, label }) => (
							<span
								key={label}
								className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[0.6875rem] font-medium text-muted-foreground"
							>
								<Icon className="size-3 text-primary" />
								{label}
							</span>
						))}
					</div>

					{/* stat cards */}
					<div className="mt-4 flex gap-2.5">
						<StatCard label="Income" amount="$200" tone="positive" />
						<StatCard label="Expense" amount="-$80" tone="negative" />
					</div>

					{/* today */}
					<div className="mt-5 flex items-center gap-3">
						<span className="font-display text-base font-bold">Today</span>
						<span className="h-px flex-1 bg-border" />
					</div>
					<p className="mt-1 text-[0.6875rem] font-semibold text-muted-foreground">
						<span className="text-primary">+$120</span> · 3 transactions
					</p>

					{/* transactions */}
					<ul className="mt-3 flex flex-col gap-3">
						{rows.map(({ icon: Icon, title, meta, amount, tone }) => (
							<li key={title} className="flex items-center gap-3">
								<span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-card text-primary">
									<Icon className="size-4" />
								</span>
								<div className="min-w-0 flex-1">
									<div className="truncate text-xs font-semibold">{title}</div>
									<div className="truncate text-[0.625rem] text-muted-foreground">
										{meta}
									</div>
								</div>
								<span
									className={cn(
										"shrink-0 text-xs font-bold tabular",
										tone === "positive" && "text-primary",
										tone === "negative" && "text-negative",
										tone === "neutral" && "text-foreground",
									)}
								>
									{amount}
								</span>
							</li>
						))}
					</ul>

					{/* bottom nav */}
					<div className="mt-5 flex items-center justify-around rounded-2xl border border-border bg-card px-2 py-2">
						<CircleDot className="size-4 text-primary" />
						<LineChart className="size-4 text-muted-foreground" />
						<span className="inline-flex size-9 -translate-y-3 items-center justify-center rounded-2xl bg-primary text-primary-foreground mint-glow">
							<Plus className="size-4" />
						</span>
						<Wallet className="size-4 text-muted-foreground" />
						<Settings className="size-4 text-muted-foreground" />
					</div>
				</div>
			</div>
		</div>
	);
}

export function HeroPhone() {
	return (
		<div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
			<div className="animate-fade-up">
				<h1 className="font-display text-[2.75rem] font-extrabold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-5xl md:text-6xl lg:text-[4rem]">
					Your money.
					<br />
					<span className="text-primary">Your rules.</span>
				</h1>

				<p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-muted-foreground sm:mt-6">
					A free, open-source expense tracker for Android. Every entry stays on
					your device — no account, no servers, no ads.
				</p>

				<div className="mt-8">
					<PrimaryCTA />
				</div>

				<TrustRow />
			</div>

			<div className="flex justify-center">
				<PhoneMockup />
			</div>
		</div>
	);
}
