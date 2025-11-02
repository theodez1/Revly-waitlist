"use client";

import { useState } from "react";

interface VideoItem {
	id: string;
	src: string; // URL vidéo MP4 (hébergée dans /public ou sur un CDN)
	poster?: string; // Image de prévisualisation (optionnel)
	title: string;
}

// Remplis avec tes vidéos MP4 hébergées dans /public/videos/ ou sur un CDN
// Format recommandé : MP4, ratio 9:16 (vertical comme TikTok)
const DEFAULT_VIDEOS: VideoItem[] = [
	{ 
		id: "v1", 
		src: "/videos/balade-nuit.mp4", 
		poster: "/videos/balade-nuit-poster.jpg",
		title: "Balade de nuit" 
	},
	{ 
		id: "v2", 
		src: "/videos/montagne.mp4", 
		poster: "/videos/montagne-poster.jpg",
		title: "Route de montagne" 
	},
	{ 
		id: "v3", 
		src: "/videos/cotiere.mp4", 
		poster: "/videos/cotiere-poster.jpg",
		title: "Balade côtière" 
	},
];

export default function Videos({ items = DEFAULT_VIDEOS }: { items?: VideoItem[] }) {
	const [playingId, setPlayingId] = useState<string | null>(null);

	const handlePlay = (id: string) => {
		setPlayingId(id);
	};

	const handlePause = () => {
		setPlayingId(null);
	};
	return (
		<section className="mx-auto max-w-6xl w-full py-12 sm:px-0 px-4">
			<div className="flex flex-col items-center justify-center gap-4 mb-8">
				<h3 className="text-2xl md:text-3xl font-semibold text-foreground text-center">
					Découvrez l'expérience Revly en action
				</h3>
				<p className="text-sm text-muted-foreground text-center max-w-md">
					Des balades enregistrées par notre communauté
				</p>
			</div>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
				{items.map((video) => {
					const isPlaying = playingId === video.id;
					return (
						<div
							key={video.id}
							className="rounded-xl border border-border bg-muted/40 overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer"
							onClick={() => !isPlaying && handlePlay(video.id)}
						>
							<div className="relative aspect-[9/16] bg-black">
								<video
									src={video.src}
									poster={video.poster}
									className="w-full h-full object-cover"
									playsInline
									muted={!isPlaying}
									loop
									controls={isPlaying}
									autoPlay={isPlaying}
									onClick={(e) => {
										e.stopPropagation();
										if (isPlaying) {
											const videoEl = e.currentTarget;
											if (videoEl.paused) {
												videoEl.play();
											} else {
												videoEl.pause();
											}
										}
									}}
									onPause={() => !isPlaying && handlePause()}
								/>
								{!isPlaying && (
									<div 
										className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer group-hover:bg-black/30 transition-colors"
										onClick={() => handlePlay(video.id)}
									>
										<div className="w-16 h-16 rounded-full bg-[#1E3A8A]/80 flex items-center justify-center group-hover:bg-[#1E3A8A] transition-colors">
											<svg
												className="w-8 h-8 text-white ml-1"
												fill="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path d="M8 5v14l11-7z" />
											</svg>
										</div>
									</div>
								)}
							</div>
							<div className="p-4">
								<h4 className="text-sm font-semibold text-foreground">{video.title}</h4>
							</div>
						</div>
					);
				})}
			</div>
			<p className="text-xs text-muted-foreground mt-6 text-center">
				Vidéos de la communauté Revly. Cliquez sur une vidéo pour la lire.
			</p>
		</section>
	);
}

