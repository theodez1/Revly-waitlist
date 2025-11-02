"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "motion/react";

interface PeopleProps {
	count?: number;
	initialCount?: number;
	className?: string;
}

export default function People({
	count = 500,
	initialCount = 0,
	className = "",
}: PeopleProps) {
	// Use count or default to 500 if 0
	const targetCount = count > 0 ? count : 500;
	const [displayCount, setDisplayCount] = useState(0);

	const avatars = [
		{ id: "avatar1", src: "/avatars/avatar1.avif" },
		{ id: "avatar2", src: "/avatars/avatar2.avif" },
		{ id: "avatar3", src: "/avatars/avatar3.avif" },
		{ id: "avatar4", src: "/avatars/avatar4.avif" },
	];

	// Animate count from 0 to targetCount when component mounts
	useEffect(() => {
		let startTime: number | null = null;
		let requestId: number | null = null;
		const duration = 2000; // Animation duration in ms

		const animateCount = (timestamp: number) => {
			if (!startTime) startTime = timestamp;
			const progress = Math.min((timestamp - startTime!) / duration, 1);

			// Easing function for a more natural count animation
			const easeOutQuart = 1 - (1 - progress) ** 4;

			const currentCount = Math.floor(easeOutQuart * targetCount);

			setDisplayCount(currentCount);

			if (progress < 1) {
				requestId = requestAnimationFrame(animateCount);
			} else {
				setDisplayCount(targetCount);
			}
		};

		// Small delay before starting animation
		const timeoutId = setTimeout(() => {
			requestId = requestAnimationFrame(animateCount);
		}, 100);

		return () => {
			clearTimeout(timeoutId);
			if (requestId) {
				cancelAnimationFrame(requestId);
			}
		};
	}, [targetCount]);

	// Format the number with commas
	const formattedCount = displayCount.toLocaleString();

	return (
		<motion.div
			className={`flex items-center justify-center gap-2 py-2 px-4 ${className}`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.4 }}
		>
			<div className="flex -space-x-2 mr-3">
				{avatars.map((avatar, index) => (
					<div
						key={avatar.id}
						className="w-8 h-8 rounded-full border-2 border-border overflow-hidden"
					>
						<img
							src={avatar.src}
							alt={`Membre ${index + 1}`}
							className="w-full h-full object-cover"
							onError={(e) => {
								// Fallback for missing images
								(e.target as HTMLImageElement).src =
									"https://via.placeholder.com/40";
							}}
						/>
					</div>
				))}
			</div>
			<div className="text-sm md:text-base text-muted-foreground">
				Rejoignez{" "}
				<span className="font-semibold text-foreground">
					{formattedCount}+
				</span>{" "}
				personnes sur la liste d'attente
			</div>
		</motion.div>
	);
}
