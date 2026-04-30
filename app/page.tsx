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

export default function Home() {
  return (
    <>
      <TrafficLogger />
      <div className="space-y-10">
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

            {/* Scholar metrics */}
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

            {/* Social links */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
              {Object.entries(profile.links).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-gray-800 hover:bg-blue-700 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {socialIcons[key] || key}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Bio */}
        {profile.bio && (
          <section>
            <h2 className="text-xl font-semibold text-white border-b border-gray-800 pb-2 mb-3">About Me</h2>
            <p className="text-gray-300 leading-relaxed">{profile.bio}</p>
          </section>
        )}

        {/* Skills */}
        {Object.keys(profile.skills).length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-white border-b border-gray-800 pb-2 mb-4">Skills</h2>
            <div className="space-y-4">
              {Object.entries(profile.skills).map(([category, items]) => (
                <div key={category}>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {(items as string[]).map((s) => (
                      <span key={s} className="px-3 py-1 bg-blue-900/40 border border-blue-700 rounded-full text-sm text-blue-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Hobbies */}
        {profile.hobbies.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-white border-b border-gray-800 pb-2 mb-3">Hobbies</h2>
            <div className="flex flex-wrap gap-2">
              {profile.hobbies.map((h) => (
                <span key={h} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                  {h}
                </span>
              ))}
            </div>
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
            <Link key={s.label} href={s.href} className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center hover:border-blue-600 transition-colors">
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
    </>
  );
}
