import { NextResponse } from "next/server";

// Version simplifiée sans dépendances externes
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simulation - vous pourrez ajouter Notion plus tard
    console.log("💾 Would save to Notion:");
    console.log("  Email:", body?.email);
    console.log("  Name:", body?.name);

    // Retourne un succès immédiatement
    return NextResponse.json(
      { message: "Email added successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save", success: false },
      { status: 500 }
    );
  }
}
