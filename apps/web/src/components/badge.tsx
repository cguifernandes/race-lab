import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

const badgeVariants = cva(
	[
		"group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1",
		"overflow-hidden rounded-full border border-transparent px-2 py-0.5",
		"text-xs font-medium whitespace-nowrap transition-all",
		"focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
		"[&>svg]:pointer-events-none [&>svg]:size-3 [&>svg]:shrink-0",
	],
	{
		variants: {
			variant: {
				default: "bg-primary text-white",
				secondary: "border-primary bg-primary/30 text-white",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

interface BadgeProps
	extends HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, children, ...props }: BadgeProps) {
	return (
		<span
			data-slot="badge"
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		>
			{children}
		</span>
	);
}
