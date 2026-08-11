import { NextRequest } from "next/server";

export function isCronAuthorized(req: NextRequest): boolean {
  // Vercel signs cron requests; in dev allow all
  if (process.env.VERCEL_ENV !== "production") return true;
  return req.headers.get("authorization") === `Bearer ${process.env.CRON_SECRET}`;
}
