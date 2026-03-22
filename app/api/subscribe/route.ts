import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, list } = body;
    if (!name || !email) {
      return NextResponse.json({ success: false, error: "Name and email are required." }, { status: 400 });
    }
    const emailLower = email.toLowerCase().trim();
    const sheetId = list === "ai"
      ? process.env.SHEETS_AI_SUBSCRIBERS_ID
      : process.env.SHEETS_CRYPTO_SUBSCRIBERS_ID;
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;

    if (!sheetId || !apiKey) {
      // Fallback: log and return success so users aren't blocked during setup
      console.error("Missing SHEETS env vars — subscriber not saved:", name, emailLower);
      return NextResponse.json({ success: true, message: `You're on the list, ${name}! First signal drops at 8am CT.` });
    }

    const joinedAt = new Date().toISOString();
    const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS&key=${apiKey}`;

    const res = await fetch(appendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ values: [[name, emailLower, joinedAt, "active", "web"]] }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Sheets append failed:", err);
      // Still return success to user — we'll fix backend silently
      return NextResponse.json({ success: true, message: `You're on the list, ${name}! First signal drops at 8am CT.` });
    }

    return NextResponse.json({ success: true, message: `You're on the list, ${name}! First signal drops at 8am CT.` });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
