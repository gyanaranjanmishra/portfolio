import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { supabaseAdmin } from "@/lib/supabase";
import fs from "fs";
import path from "path";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  const { pdfPath, title } = await req.json();

  if (!pdfPath || !title) {
    return NextResponse.json({ error: "Missing pdfPath or title" }, { status: 400 });
  }

  // Check cache first
  const { data: cached } = await supabaseAdmin
    .from("summary_cache")
    .select("summary")
    .eq("drive_link", pdfPath)
    .single();

  if (cached?.summary) {
    return NextResponse.json({ summary: cached.summary, cached: true });
  }

  // Read PDF from public folder
  const filePath = path.join(process.cwd(), "public", pdfPath);
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "PDF not found" }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);
  const base64 = fileBuffer.toString("base64");

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
            text: `Provide a concise 3-5 sentence summary of this research paper titled "${title}". Focus on the objective, methodology, and key findings.`,
          },
        ],
      },
    ],
  });

  const summary = (message.content[0] as { type: string; text: string }).text;

  // Cache the summary
  await supabaseAdmin.from("summary_cache").insert({ drive_link: pdfPath, summary });

  return NextResponse.json({ summary, cached: false });
}
