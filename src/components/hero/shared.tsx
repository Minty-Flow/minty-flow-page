import { GithubIcon } from "@/components/icons/GithubIcon";
import { Button } from "@/components/ui/button";
import { APP } from "@/constants/app";
import { cn } from "@/lib/utils";

export const trustRow = [
	"No account",
	"Works offline",
	"Local-only data",
	"GPL-3.0",
];

export function PrimaryCTA({ align = "left" }: { align?: "left" | "center" }) {
	return (
		<div
			className={cn(
				"flex flex-col items-stretch gap-3 sm:flex-row sm:items-center",
				align === "center" && "sm:justify-center",
			)}
		>
			<Button asChild size="lg">
				<a
					href={APP.links.googlePlay}
					target="_blank"
					rel="noopener noreferrer"
				>
					Get it on Google Play
				</a>
			</Button>
			<Button asChild variant="outline" size="lg">
				<a
					href={APP.links.githubReleases}
					target="_blank"
					rel="noopener noreferrer"
				>
					<GithubIcon className="size-4" />
					Download the APK
				</a>
			</Button>
		</div>
	);
}

export function TrustRow({ centered = false }: { centered?: boolean }) {
	return (
		<ul
			className={cn(
				"mt-8 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[0.8125rem] text-muted-foreground",
				centered && "justify-center",
			)}
		>
			{trustRow.map((label, i) => (
				<li key={label} className="flex items-center gap-2.5">
					{i > 0 && (
						<span aria-hidden className="size-1 rounded-full bg-border" />
					)}
					{label}
				</li>
			))}
		</ul>
	);
}
