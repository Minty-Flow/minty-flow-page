import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				// the mint FAB
				default:
					"bg-primary text-primary-foreground mint-glow hover:brightness-105 active:brightness-95",
				// an outlined chip, like the app's filter row
				outline:
					"border border-border bg-transparent text-foreground hover:bg-surface",
				secondary:
					"bg-surface text-foreground hover:bg-accent hover:text-accent-foreground",
				ghost: "text-muted-foreground hover:bg-surface hover:text-foreground",
				link: "text-primary underline-offset-4 hover:underline",
				destructive: "bg-negative text-white hover:brightness-105",
			},
			size: {
				default: "h-11 px-5",
				sm: "h-9 rounded-xl px-3.5 text-[0.8125rem]",
				lg: "h-12 px-6 text-base",
				icon: "size-11",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
