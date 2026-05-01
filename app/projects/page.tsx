import TrafficLogger from "@/components/TrafficLogger";
import { selfLearningProjects } from "@/lib/config";

export default function ProjectsPage() {
  return (
    <>
      <TrafficLogger />
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Self Learning Projects</h1>
          <p className="text-gray-400 text-sm mt-1">
            Personal projects built to explore ML, NLP, and AI — outside of academic or professional work.
          </p>
        </div>

        {selfLearningProjects.map((project, i) => (
          <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-gray-800">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-600 text-emerald-300 font-medium">
                      {project.category}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      project.status === "Complete"
                        ? "bg-blue-500/20 border border-blue-600 text-blue-300"
                        : "bg-yellow-500/20 border border-yellow-600 text-yellow-300"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white">{project.title}</h2>
                  <p className="text-gray-400 text-sm mt-0.5">{project.subtitle}</p>
                </div>
                {project.notebook && (
                  <a
                    href={project.notebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-sm text-gray-300 hover:text-white rounded-lg transition-colors whitespace-nowrap"
                  >
                    View Notebook
                  </a>
                )}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mt-4">{project.description}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-gray-800">
              {project.stats.map((stat) => (
                <div key={stat.label} className="p-4 text-center border-r border-gray-800 last:border-r-0">
                  <div className="text-lg font-bold text-emerald-400">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-800">

              {/* Architecture */}
              <div className="p-6">
                <h3 className="text-sm font-semibold text-white mb-4">Pipeline Architecture</h3>
                <div className="space-y-2">
                  {project.architecture.map((a, idx) => (
                    <div key={a.step} className="flex items-center gap-3">
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-600 text-emerald-300 text-xs flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-emerald-400 w-14">{a.step}</span>
                      </div>
                      <span className="text-xs text-gray-300">{a.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="p-6">
                <h3 className="text-sm font-semibold text-white mb-4">Key Highlights</h3>
                <ul className="space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-xs text-gray-300">
                      <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stack */}
            <div className="px-6 py-4 border-t border-gray-800 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span key={s} className="px-2 py-0.5 rounded-md text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-600">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
