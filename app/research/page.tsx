"use client";

import { useState } from "react";
import TrafficLogger from "@/components/TrafficLogger";
import { publications, patents, aiPapers } from "@/lib/config";

const TABS = ["My Neural Network Paper", "Top AI Papers", "My Publications – Mat Sci", "My Patents"] as const;
type TabType = typeof TABS[number];

const ML_PAPER = publications.find(p =>
  p.title.includes("Constitutive Modeling of High") && p.year === 2024
)!;
const otherPublications = publications.filter(p => p !== ML_PAPER);

const tagStyle = "bg-emerald-500/20 text-emerald-300 border border-emerald-600";

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState<TabType>("My Neural Network Paper");
  const [summaries, setSummaries] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState<Record<number, boolean>>({});

  async function summarize(index: number, pdf: string, title: string) {
    if (summaries[index]) return;
    setLoading((l) => ({ ...l, [index]: true }));
    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ driveLink: pdf, title }),
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

        <div>
          <h1 className="text-2xl font-bold text-white">Research & Papers</h1>
          <p className="text-gray-400 text-sm mt-1">
            {publications.length} publications · {patents.length} patents · {aiPapers.length} landmark AI papers
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex gap-2 flex-wrap border-b border-gray-800 pb-4">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Tab A: My Neural Network Paper ── */}
        {activeTab === "My Neural Network Paper" && (
          <div className="space-y-6">
            {/* Featured hero card */}
            <div className="bg-gray-900 border border-blue-800/50 rounded-xl overflow-hidden">
              <div className="bg-blue-900/20 px-6 py-3 border-b border-blue-800/50 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">PhD Research · Journal Publication</span>
                <span className="text-xs bg-blue-600/30 border border-blue-600 text-blue-300 px-2 py-0.5 rounded">Steel Research International · 2024</span>
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-white leading-snug">
                  {ML_PAPER.title}
                </h2>
                <p className="text-gray-400 text-sm">{ML_PAPER.authors}</p>

                <div className="grid sm:grid-cols-3 gap-3 pt-2">
                  {[
                    { value: "200K+", label: "Data Points" },
                    { value: "67%", label: "Accuracy Gain vs Conventional Models" },
                    { value: "2 Grades", label: "Electrical Steel Variants" },
                  ].map((s) => (
                    <div key={s.label} className="bg-gray-800 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-blue-400">{s.value}</div>
                      <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">The Problem</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      High-temperature deformation behaviour of metals is traditionally modelled using empirical constitutive equations — Arrhenius, Johnson-Cook, and their variants. These models are physics-informed but require laborious parameter fitting, fail to generalise across steel grades, and plateau in accuracy regardless of data volume.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">The ML Approach</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Deep neural networks (TensorFlow/Keras) were trained on 200K+ multi-source experimental deformation records — strain, strain rate, and temperature as inputs; flow stress as output — for two non-oriented electrical steel grades (1.3 wt% Si and 3.2 wt% Si). The models were rigorously benchmarked against classical constitutive equations on held-out test sets.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Result</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Neural networks outperformed all conventional models by ~67% on accuracy metrics, establishing that data-driven approaches can replace decades-old empirical models in high-stakes materials processing. The trained models were deployed as an interactive Streamlit application — making the research directly usable by engineers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 pt-2 flex-wrap">
                  {ML_PAPER.pdf && (
                    <a href={ML_PAPER.pdf} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-sm text-white rounded-lg transition-colors">
                      View Paper PDF
                    </a>
                  )}
                  <a href="https://github.com/gyanaranjanmishra/steel-stress-predictor" target="_blank" rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-sm text-gray-300 hover:text-white rounded-lg transition-colors border border-gray-700">
                    GitHub · Streamlit App
                  </a>
                </div>
              </div>
            </div>

            {/* Related preceding work */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-widest">Related Conference Paper</h3>
              {publications
                .filter(p => p.title.includes("Constitutive Modelling") && p.year === 2023)
                .map((p, i) => (
                  <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                    <h4 className="font-semibold text-white text-sm">{p.title}</h4>
                    <p className="text-gray-400 text-xs mt-1">{p.authors}</p>
                    <p className="text-blue-400 text-xs mt-1">{p.journal} · {p.year}</p>
                    {p.pdf && (
                      <a href={p.pdf} target="_blank" rel="noopener noreferrer"
                        className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors">
                        View PDF
                      </a>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* ── Tab B: AI Papers ── */}
        {activeTab === "Top AI Papers" && (
          <div className="space-y-6">
            <p className="text-gray-400 text-sm">
              Ten papers that fundamentally changed the field — with notes on how each connects to building a stronger applied AI profile.
            </p>
            {aiPapers.map((paper, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-gray-800">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-600 text-blue-300 text-xs flex items-center justify-center font-bold shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 border border-gray-700 text-gray-400">
                          {paper.venue} · {paper.year}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold text-white leading-snug">{paper.title}</h2>
                      <p className="text-gray-500 text-xs mt-1">{paper.authors}</p>
                    </div>
                    <a href={paper.url} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-sm text-white rounded-lg transition-colors whitespace-nowrap shrink-0">
                      Read Paper
                    </a>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-800">
                  <div className="p-5">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Why It Matters</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{paper.brief}</p>
                  </div>
                  <div className="p-5 bg-emerald-500/5">
                    <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">Possible Improvement</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{paper.improvement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Tab C: Publications ── */}
        {activeTab === "My Publications – Mat Sci" && (
          <div className="space-y-4">
            <p className="text-gray-400 text-sm">{otherPublications.length} papers — click &quot;Summarize&quot; for an AI-generated summary</p>
            {otherPublications.map((pub, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5 space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="font-semibold text-white leading-snug text-sm">{pub.title}</h2>
                    <p className="text-gray-400 text-xs mt-1">{pub.authors}</p>
                    <p className="text-blue-400 text-xs mt-0.5">{pub.journal} · {pub.year}</p>
                  </div>
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400 whitespace-nowrap shrink-0">{pub.year}</span>
                </div>
                {pub.pdf && (
                  <div className="flex gap-2 flex-wrap">
                    <a href={pub.pdf} target="_blank" rel="noopener noreferrer"
                      className="text-xs px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors">
                      View PDF
                    </a>
                    <button
                      onClick={() => summarize(i, pub.pdf, pub.title)}
                      disabled={loading[i]}
                      className="text-xs px-3 py-1 rounded-full bg-blue-700 hover:bg-blue-600 text-white transition-colors disabled:opacity-50">
                      {loading[i] ? "Summarizing..." : summaries[i] ? "Summarized" : "Summarize"}
                    </button>
                  </div>
                )}
                {summaries[i] && (
                  <div className="bg-gray-800 rounded-lg p-3 text-sm text-gray-300 leading-relaxed border-l-4 border-blue-600">
                    {summaries[i]}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── Tab D: Patents ── */}
        {activeTab === "My Patents" && (
          <div className="space-y-4">
            <p className="text-gray-400 text-sm">{patents.length} granted patents from R&D work at Tata Steel Ltd, India</p>
            {patents.map((patent, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="font-semibold text-white text-sm leading-snug">{patent.title}</h2>
                    <p className="text-gray-400 text-xs mt-1">{patent.inventors}</p>
                    <div className="flex gap-3 mt-2">
                      <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${tagStyle}`}>{patent.patentNo}</span>
                      <span className="text-xs text-gray-500">{patent.year}</span>
                    </div>
                  </div>
                </div>
                {patent.pdf && (
                  <a href={patent.pdf} target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors">
                    View Patent PDF
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </>
  );
}
