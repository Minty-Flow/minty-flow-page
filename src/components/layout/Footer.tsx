import { Link } from "react-router-dom";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { APP } from "@/constants/app";

const groups = [
	{
		title: "Get it",
		links: [
			{ label: "Google Play", href: APP.links.googlePlay, external: true },
			{
				label: "APK — GitHub Releases",
				href: APP.links.githubReleases,
				external: true,
			},
			{ label: "Changelog", href: "/changelog", external: false },
		],
	},
	{
		title: "Project",
		links: [
			{ label: "Source (GPL-3.0)", href: APP.links.githubRepo, external: true },
			{ label: "Issues", href: APP.links.githubIssues, external: true },
			{ label: "Organisation", href: APP.links.githubOrg, external: true },
		],
	},
	{
		title: "About",
		links: [
			{ label: "FAQ", href: "/faq", external: false },
			{ label: "Privacy", href: "/privacy", external: false },
			{ label: "Contact", href: `mailto:${APP.contact.email}`, external: true },
		],
	},
];

export function Footer() {
	const icon = `${import.meta.env.BASE_URL}icon.png`;
	return (
		<footer className="border-t border-border">
			<div className="mx-auto max-w-5xl px-5 py-14 sm:px-6">
				<div className="grid gap-10 sm:grid-cols-[1.5fr_1fr_1fr_1fr]">
					<div className="max-w-xs">
						<Link
							to="/"
							className="inline-flex items-center gap-2.5 text-foreground"
						>
							<img
								src={icon}
								alt=""
								className="size-7 rounded-lg border border-border"
							/>
							<span className="font-display text-base font-bold tracking-[-0.02em]">
								{APP.name}
							</span>
						</Link>
						<p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
							{APP.tagline} Kept on your device.
						</p>
						<a
							href={APP.links.githubRepo}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="mt-4 inline-flex text-muted-foreground transition-colors hover:text-foreground"
						>
							<GithubIcon className="size-[1.15rem]" />
						</a>
					</div>

					{groups.map((g) => (
						<nav key={g.title} aria-label={g.title}>
							<p className="text-[0.8125rem] font-semibold text-foreground">
								{g.title}
							</p>
							<ul className="mt-3 flex flex-col gap-2.5">
								{g.links.map((l) =>
									l.external ? (
										<li key={l.label}>
											<a
												href={l.href}
												target={
													l.href.startsWith("mailto:") ? undefined : "_blank"
												}
												rel="noopener noreferrer"
												className="text-[0.9375rem] text-muted-foreground transition-colors hover:text-foreground"
											>
												{l.label}
											</a>
										</li>
									) : (
										<li key={l.label}>
											<Link
												to={l.href}
												className="text-[0.9375rem] text-muted-foreground transition-colors hover:text-foreground"
											>
												{l.label}
											</Link>
										</li>
									),
								)}
							</ul>
						</nav>
					))}
				</div>

				<p className="mt-12 border-t border-border pt-6 text-[0.8125rem] text-muted-foreground">
					&copy; {new Date().getFullYear()} {APP.name} &middot; GPL-3.0 licensed
					&middot; no analytics on this site
				</p>
			</div>
		</footer>
	);
}
