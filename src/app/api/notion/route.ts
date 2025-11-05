import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!databaseId || !process.env.NOTION_API_KEY) {
      return NextResponse.json(
        { error: "Notion not configured", success: false },
        { status: 500 }
      );
    }

    if (!email || !name) {
      return NextResponse.json(
        { error: "Email and name required", success: false },
        { status: 400 }
      );
    }

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Email: { email },
        Nom: {
          title: [{ text: { content: name } }],
        },
        "Date d'inscription": {
          date: { start: new Date().toISOString() },
        },
        statut: {
          select: { name: "En attente" },
        },
      },
    });

    return NextResponse.json(
      { message: "Saved successfully", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Save failed", success: false },
      { status: 500 }
    );
  }
}
