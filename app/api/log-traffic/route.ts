import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const { page } = await req.json();

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  await supabaseAdmin.from("traffic_logs").insert({
    page,
    ip,
    referrer: req.headers.get("referer") || "",
    user_agent: req.headers.get("user-agent") || "",
  });

  return NextResponse.json({ ok: true });
}
