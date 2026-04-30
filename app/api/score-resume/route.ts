import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { supabaseAdmin } from "@/lib/supabase";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const DAILY_LIMIT = 3;

function getClientIP(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  const ip = getClientIP(req);

  // Rate limit check
  const since = new Date(Date.now() - 86400000).toISOString();
  const { count } = await supabaseAdmin
    .from("resume_score_logs")
    .select("*", { count: "exact", head: true })
    .eq("ip", ip)
    .gte("created_at", since);

  const used = count ?? 0;

  if (used >= DAILY_LIMIT) {
    return NextResponse.json(
      { error: "Daily limit reached. Try again in 24 hours.", used, limit: DAILY_LIMIT },
      { status: 429 }
    );
  }

  const { resume, jobDescription } = await req.json();

  if (!resume || !jobDescription) {
    return NextResponse.json({ error: "Missing resume or job description" }, { status: 400 });
  }

  const message = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `You are an expert recruiter and resume coach. Analyze this resume against the job description.

RESUME:
${resume}

JOB DESCRIPTION:
${jobDescription}

Respond in this exact JSON format:
{
  "score": <number 0-100>,
  "matched_skills": [<list of matching skills/keywords>],
  "missing_skills": [<list of important missing skills>],
  "strengths": [<2-3 key strengths>],
  "improvements": [<2-3 specific improvement suggestions>],
  "verdict": "<one sentence overall assessment>"
}`,
      },
    ],
  });

  const raw = (message.content[0] as { type: string; text: string }).text;

  let result;
  try {
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    result = JSON.parse(jsonMatch ? jsonMatch[0] : raw);
  } catch {
    return NextResponse.json({ error: "Failed to parse AI response" }, { status: 500 });
  }

  // Log usage
  await supabaseAdmin.from("resume_score_logs").insert({ ip });

  return NextResponse.json({ ...result, used: used + 1, limit: DAILY_LIMIT });
}
