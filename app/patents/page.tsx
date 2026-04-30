"use client";
import { useState } from "react";
import TrafficLogger from "@/components/TrafficLogger";
import { patents } from "@/lib/config";

export default function PatentsPage() {
  const [summaries, setSummaries] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState<Record<number, boolean>>({});

  async function summarize(index: number, pdf: string, title: string) {
    if (summaries[index]) return;
    setLoading((l) => ({ ...l, [index]: true }));
    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pdfPath: pdf, title }),
      });
      const data = await res.json();
      setSummaries((s) => ({ ...s, [index]: data.summary || data.error }));
    } catch {
      setSummaries((s) => ({ ...s, [index]: "Failed to generate summary." }));
    } finally {
      setLoading((l) => ({ ...l, [index]: false }));
    }
  }

  return (
    <>
      <TrafficLogger />
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-white">Granted Patents</h1>
        <p className="text-gray-400 text-sm">{patents.length} patents — click &quot;Summarize&quot; for an AI-generated summary</p>
        {patents.map((pat, i) => (
          <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5 space-y-2">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="font-semibold text-white leading-snug">{pat.title}</h2>
                <p className="text-gray-400 text-sm mt-1">{pat.inventors}</p>
                <p className="text-blue-400 text-sm">Patent No: {pat.patentNo} · {pat.year}</p>
              </div>
              <span className="text-xs bg-blue-900/40 border border-blue-700 px-2 py-1 rounded text-blue-300 whitespace-nowrap">{pat.patentNo}</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <a href={pat.pdf} target="_blank" rel="noopener noreferrer"
                className="text-xs px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors">
                View PDF
              </a>
              <button
                onClick={() => summarize(i, pat.pdf, pat.title)}
                disabled={loading[i]}
                className="text-xs px-3 py-1 rounded-full bg-blue-700 hover:bg-blue-600 text-white transition-colors disabled:opacity-50">
                {loading[i] ? "Summarizing..." : summaries[i] ? "Summarized" : "Summarize"}
              </button>
            </div>
            {summaries[i] && (
              <div className="bg-gray-800 rounded-lg p-3 text-sm text-gray-300 leading-relaxed border-l-4 border-blue-600">
                {summaries[i]}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
