import TrafficLogger from "@/components/TrafficLogger";
import { aiPapers } from "@/lib/config";

export default function AIPapersPage() {
  return (
    <>
      <TrafficLogger />
      <div className="space-y-8">

        <div>
          <h1 className="text-2xl font-bold text-white">Landmark AI Papers</h1>
          <p className="text-gray-400 text-sm mt-1">
            Ten papers that fundamentally changed the field — with notes on how each connects to building a stronger applied AI profile.
          </p>
        </div>

        <div className="space-y-6">
          {aiPapers.map((paper, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">

              {/* Header */}
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
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-sm text-white rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    Read Paper
                  </a>
                </div>
              </div>

              {/* Brief + Improvement */}
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

      </div>
    </>
  );
}
