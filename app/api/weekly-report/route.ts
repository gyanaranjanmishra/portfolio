import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase";
import { isCronAuthorized } from "@/lib/cron-auth";

export const runtime = "nodejs";

const REPORT_TO = process.env.REPORT_EMAIL ?? "gyanaranjanmishra06@gmail.com";

export async function GET(req: NextRequest) {
  if (!isCronAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const since = new Date();
    since.setDate(since.getDate() - 7);

    const { data: logs, error } = await supabaseAdmin
      .from("traffic_logs")
      .select("page, ip, referrer, created_at")
      .gte("created_at", since.toISOString())
      .order("created_at", { ascending: false });

    if (error) throw error;

    const pageCounts: Record<string, number> = {};
    const ipSet = new Set<string>();
    for (const row of logs ?? []) {
      pageCounts[row.page] = (pageCounts[row.page] ?? 0) + 1;
      if (row.ip) ipSet.add(row.ip);
    }

    const topPages = Object.entries(pageCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([page, count]) => `<tr><td style="padding:4px 12px">${page}</td><td style="padding:4px 12px;text-align:right">${count}</td></tr>`)
      .join("");

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#1a1a1a">
        <h2 style="color:#2563eb">Portfolio Traffic — Weekly Report</h2>
        <p>Week of <strong>${since.toDateString()}</strong> to <strong>${new Date().toDateString()}</strong></p>
        <table style="width:100%;border-collapse:collapse;margin-top:16px">
          <tr style="background:#f3f4f6">
            <th style="padding:8px 12px;text-align:left">Page</th>
            <th style="padding:8px 12px;text-align:right">Views</th>
          </tr>
          ${topPages || '<tr><td colspan="2" style="padding:8px 12px;color:#6b7280">No visits this week</td></tr>'}
        </table>
        <p style="margin-top:16px">
          <strong>Total visits:</strong> ${logs?.length ?? 0} &nbsp;|&nbsp;
          <strong>Unique IPs:</strong> ${ipSet.size}
        </p>
        <p style="color:#9ca3af;font-size:12px;margin-top:32px">
          Sent automatically every Monday from your portfolio at portfolio-eosin-nine-52.vercel.app
        </p>
      </div>
    `;

    const { error: emailErr } = await resend.emails.send({
      from: "Portfolio Report <onboarding@resend.dev>",
      to: REPORT_TO,
      subject: `Portfolio Traffic Report — w/c ${since.toDateString()}`,
      html,
    });

    if (emailErr) throw emailErr;

    return NextResponse.json({ ok: true, totalVisits: logs?.length ?? 0, uniqueIps: ipSet.size });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
