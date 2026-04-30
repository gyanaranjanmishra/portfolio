import Image from "next/image";
import Link from "next/link";
import TrafficLogger from "@/components/TrafficLogger";
import { profile, publications, patents, certifications, ongoingProjects } from "@/lib/config";

const socialIcons: Record<string, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  scholar: "Google Scholar",
  streamlit: "Streamlit",
};

const categoryColors: Record<string, string> = {
  "Programming & Data":    "bg-emerald-500/20 text-emerald-300 border border-emerald-600",
  "Machine Learning":      "bg-violet-500/20 text-violet-200 border border-violet-500",
  "Analytics & Visualization": "bg-orange-500/20 text-orange-200 border border-orange-500",
  "Materials Science":     "bg-teal-500/20 text-teal-200 border border-teal-500",
  "Generative AI":         "bg-rose-500/20 text-rose-200 border border-rose-500",
};

const categoryLabel: Record<string, string> = {
  "Programming & Data":        "text-emerald-400",
  "Machine Learning":          "text-violet-400",
  "Analytics & Visualization": "text-orange-400",
  "Materials Science":         "text-teal-400",
  "Generative AI":             "text-rose-400",
};

export default function Home() {
  return (
    <>
      <TrafficLogger />
      <div className="space-y-8">

        {/* Hero */}
        <section className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={224}
            height={224}
            className="rounded-full border-4 border-blue-600 object-cover w-56 h-56 shrink-0"
          />
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
            <p className="text-blue-400 mt-1 text-lg">{profile.title}</p>
            <p className="text-gray-400 text-sm mt-1">{profile.affiliation}</p>
            <div className="flex gap-6 mt-4 justify-center sm:justify-start">
              {[
                { label: "Citations", value: profile.metrics.citations },
                { label: "h-index", value: profile.metrics.hIndex },
                { label: "i10-index", value: profile.metrics.i10Index },
              ].map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{m.value}</div>
                  <div className="text-xs text-gray-400">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
              {Object.entries(profile.links).map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-gray-800 hover:bg-blue-700 text-sm text-gray-300 hover:text-white transition-colors">
                  {socialIcons[key] || key}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Two-column layout: main + sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Main content */}
          <div className="flex-1 space-y-8">

            {/* Bio */}
            {profile.bio && (
              <section>
                <h2 className="text-xl font-semibold text-white border-b border-gray-800 pb-2 mb-3">About Me</h2>
                <p className="text-gray-300 leading-relaxed">{profile.bio}</p>
              </section>
            )}

            {/* Quick stats */}
            <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Publications", value: publications.length, href: "/publications" },
                { label: "Patents", value: patents.length, href: "/patents" },
                { label: "Certifications", value: certifications.length, href: "/certifications" },
                { label: "Ongoing Projects", value: ongoingProjects.length, href: "#projects" },
              ].map((s) => (
                <Link key={s.label} href={s.href}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center hover:border-blue-600 transition-colors">
                  <div className="text-3xl font-bold text-blue-400">{s.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{s.label}</div>
                </Link>
              ))}
            </section>

            {/* Ongoing Projects */}
            {ongoingProjects.length > 0 && (
              <section id="projects">
                <h2 className="text-xl font-semibold text-white border-b border-gray-800 pb-2 mb-3">Ongoing Projects</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {ongoingProjects.map((p) => (
                    <div key={p.name} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                      <h3 className="font-semibold text-white">{p.name}</h3>
                      <p className="text-gray-400 text-sm mt-1">{p.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar: Skills + Hobbies */}
          <aside className="w-full lg:w-72 shrink-0 space-y-6">

            {/* Skills */}
            {Object.keys(profile.skills).length > 0 && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 space-y-5">
                <h2 className="text-lg font-semibold text-white border-b border-gray-800 pb-2">Skills</h2>
                {Object.entries(profile.skills).map(([category, items]) => (
                  <div key={category}>
                    <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${categoryLabel[category] ?? "text-gray-400"}`}>
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {(items as string[]).map((s) => (
                        <span key={s} className={`px-2 py-0.5 rounded-md text-xs font-medium ${categoryColors[category] ?? "bg-gray-700 text-gray-200 border border-gray-600"}`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Hobbies */}
            {profile.hobbies.length > 0 && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h2 className="text-lg font-semibold text-white border-b border-gray-800 pb-2 mb-4">Hobbies</h2>
                <div className="flex flex-wrap gap-2">
                  {profile.hobbies.map((h) => (
                    <span key={h} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
