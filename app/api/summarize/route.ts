import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { supabaseAdmin } from "@/lib/supabase";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

function extractDriveId(driveLink: string): string | null {
  const match = driveLink.match(/\/d\/([a-zA-Z0-9_-]{25,})/);
  return match ? match[1] : null;
}

export async function POST(req: NextRequest) {
  const { driveLink, title } = await req.json();

  if (!driveLink || !title) {
    return NextResponse.json({ error: "Missing driveLink or title" }, { status: 400 });
  }

  // Check cache first
  const { data: cached } = await supabaseAdmin
    .from("summary_cache")
    .select("summary")
    .eq("drive_link", driveLink)
    .single();

  if (cached?.summary) {
    return NextResponse.json({ summary: cached.summary, cached: true });
  }

  const fileId = extractDriveId(driveLink);
  if (!fileId) {
    return NextResponse.json({ error: "Invalid Google Drive link" }, { status: 400 });
  }

  // Fetch PDF from Google Drive
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const response = await fetch(downloadUrl);

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to fetch PDF from Google Drive" }, { status: 502 });
  }

  const arrayBuffer = await response.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString("base64");

  const message = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 512,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "document",
            source: { type: "base64", media_type: "application/pdf", data: base64 },
          },
          {
            type: "text",
            text: `Provide a concise 3-5 sentence summary of this document titled "${title}". Focus on the objective, methodology, and key findings.`,
          },
        ],
      },
    ],
  });

  const summary = (message.content[0] as { type: string; text: string }).text;

  await supabaseAdmin.from("summary_cache").insert({ drive_link: driveLink, summary });

  return NextResponse.json({ summary, cached: false });
}
