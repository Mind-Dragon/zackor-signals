import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;
    if (!name || !email) {
      return NextResponse.json({ success: false, error: "Name and email are required." }, { status: 400 });
    }
    // TODO: write to Google Sheets subscriber list
    console.log("New subscriber:", name, email);
    return NextResponse.json({ success: true, message: `You're on the list, ${name}! First signal drops at 8am CT.` });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}