import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const { page: rawPage } = await req.json();
  const page = typeof rawPage === "string" ? rawPage.slice(0, 200) : "unknown";

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
