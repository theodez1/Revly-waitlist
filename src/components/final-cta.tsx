"use client";

export default function FinalCta() {
	const scrollToForm = () => {
		const formElement = document.getElementById("email-form");
		if (formElement) {
			formElement.scrollIntoView({ behavior: "smooth", block: "center" });
			// Focus sur l'input après un court délai
			setTimeout(() => {
				const emailInput = formElement.querySelector('input[type="email"]') as HTMLInputElement;
				if (emailInput) {
					emailInput.focus();
				}
			}, 500);
		}
	};

	return (
		<section className="mx-auto max-w-3xl w-full py-12 sm:px-0 px-4">
			<div className="rounded-2xl border border-border bg-muted/40 p-8 text-center relative overflow-hidden">
				<h3 className="text-2xl font-semibold text-foreground mb-2">Être prévenu au lancement</h3>
				<p className="text-sm text-muted-foreground mb-4">Revly, le compagnon des belles routes: précis, simple, pensé pour les passionnés de la route.</p>
				<button
					onClick={scrollToForm}
					className="bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1E3A8A]/90 transition-all duration-200 shadow-md hover:shadow-lg mt-2"
				>
					Rejoindre la liste d'attente
				</button>
			</div>
		</section>
	);
}




