import { type NextRequest, NextResponse } from "next/server";

// Version simplifiée sans dépendances externes
export async function POST(request: NextRequest) {
	try {
		const { email, name } = await request.json();

		// Simulation - vous pourrez ajouter les vraies APIs plus tard
		console.log("📧 Email would be sent to:", email);
		console.log("👤 Name:", name);

		// Retourne un succès immédiatement
		return NextResponse.json(
			{ message: "Email sent successfully" },
			{ status: 200 },
		);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to process request" },
			{ status: 500 },
		);
	}
}
