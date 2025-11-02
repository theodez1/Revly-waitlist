"use client";

import { cn } from "~/lib/utils";
// Header simplifié: suppression des boutons Notion DB et Use this template

export default function Header() {
	return (
		<header
			className={cn(
				"py-4 flex flex-row gap-2 justify-between items-center md:px-10 sm:px-6 px-4 sticky top-0 z-50",
			)}
		>
			{/* Espace réservé pour un éventuel logo ou navigation future */}
		</header>
	);
}
