"use client";

import { useEffect, useRef, useState } from "react";

export default function ValueProps() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<section ref={sectionRef} className="mx-auto max-w-6xl w-full py-12 sm:px-0 px-4">
			{/* Section title */}
			<div className="text-center">
				<h2 className="text-3xl md:text-4xl font-bold text-foreground">
					Une expérience pensée pour vous
				</h2>
				<p className="text-base text-muted-foreground max-w-2xl mx-auto">
					Gérez vos véhicules, enregistrez vos trajets en temps réel et partagez vos plus belles routes avec la communauté
				</p>
			</div>

			{/* Mockup de l'app */}
			<div className="flex justify-center mb-8 relative">
				<div className={`relative w-full max-w-4xl transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
					{/* Enhanced glow effect behind mockup */}
					<div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/20 via-[#1E3A8A]/40 to-[#1E3A8A]/20 blur-[120px] rounded-full transform scale-110 -z-10"></div>
					<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1E3A8A]/25 blur-[80px] rounded-full -z-10 animate-pulse"></div>
					<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#1E3A8A]/25 blur-[80px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
					<img
						src="/mockup-screens.png"
						alt="Mockup Revly - Interface de l'application"
						className="w-full h-auto relative z-10 drop-shadow-2xl"
					/>
				</div>
			</div>
			
			<div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                <div className={`rounded-xl border border-border bg-muted/40 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-[#1E3A8A]/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: isVisible ? '50ms' : '0ms' }}>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Capturez vos plus beaux moments</h3>
                    <p className="text-sm text-muted-foreground">Ajoutez des photos de vos véhicules devant les plus beaux paysages rencontrés sur vos trajets.</p>
                </div>
				<div className={`rounded-xl border border-border bg-muted/40 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-[#1E3A8A]/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
					<h3 className="text-lg font-semibold text-foreground mb-2">Partagez vos exploits</h3>
					<p className="text-sm text-muted-foreground">Montrez vos plus belles routes et partagez vos balades avec une communauté de passionnés.</p>
				</div>
                <div className={`rounded-xl border border-border bg-muted/40 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-[#1E3A8A]/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: isVisible ? '150ms' : '0ms' }}>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Découvrez de nouveaux spots</h3>
                    <p className="text-sm text-muted-foreground">Explorez les plus beaux panoramas et routes partagés par la communauté pour vos prochaines sorties.</p>
                </div>
			</div>
		</section>
	);
}


