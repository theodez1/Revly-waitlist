import { type NextRequest, NextResponse } from "next/server";

// API mail désactivée pour le moment
export async function POST(request: NextRequest) {
	return NextResponse.json(
		{ message: "Email service disabled" },
		{ status: 200 }
	);
}
