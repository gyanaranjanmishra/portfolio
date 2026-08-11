import Image from "next/image";
import Link from "next/link";
import TrafficLogger from "@/components/TrafficLogger";
import { profile, publications, patents, certifications, experience, awards, education } from "@/lib/config";

const socialIcons: Record<string, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  scholar: "Google Scholar",
  streamlit: "Streamlit",
};

const tagStyle = "bg-emerald-500/20 text-emerald-300 border border-emerald-600";
const labelStyle = "text-emerald-400";


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
            <p className="text-blue-400 mt-1 text-lg font-medium">{profile.title}</p>
            <p className="text-gray-400 text-sm mt-1">{profile.affiliation}</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center sm:justify-start">
              <a href={`mailto:${profile.email}`}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-colors">
                <span>✉</span> {profile.email}
              </a>
              <span className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-lg">
                <span>📍</span> Scarborough, ON, Canada
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
              {Object.entries(profile.links).map(([key, url]) => (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-gray-800 hover:bg-blue-700 text-sm text-gray-300 hover:text-white transition-colors">
                  {socialIcons[key] || key}
                </a>
              ))}
            </div>
          </div>
        </section>


        {/* Quick nav cards */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Publications", value: publications.length, href: "/publications" },
            { label: "Patents", value: patents.length, href: "/patents" },
            { label: "Certifications", value: certifications.length, href: "/certifications" },
            { label: "Years Exp.", value: 13, href: "#experience" },
          ].map((s) => (
            <Link key={s.label} href={s.href}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center hover:border-blue-600 transition-colors">
              <div className="text-3xl font-bold text-blue-400">{s.value}</div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </Link>
          ))}
        </section>

        {/* Two-column layout: sidebar + main */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Sidebar: Skills */}
          <aside className="w-full lg:w-72 shrink-0 space-y-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 space-y-5">
              <h2 className="text-lg font-semibold text-white border-b border-gray-800 pb-2">Skills</h2>
              {Object.entries(profile.skills).map(([category, items]) => (
                <div key={category}>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${labelStyle}`}>
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {(items as string[]).map((s) => (
                      <span key={s} className={`px-2 py-0.5 rounded-md text-xs font-medium ${tagStyle}`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 space-y-8">

            {/* Experience */}
            <section id="experience" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-5">Experience</h2>
              <div className="space-y-6">
                {experience.map((job, i) => (
                  <div key={i} className={i < experience.length - 1 ? "pb-6 border-b border-gray-800" : ""}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <h3 className="font-semibold text-white text-sm">{job.title}</h3>
                        <p className="text-blue-400 text-xs mt-0.5">{job.company}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{job.period}</span>
                        {job.note && <p className="text-xs text-gray-500 mt-1 italic">{job.note}</p>}
                      </div>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {job.highlights.map((h, j) => (
                        <li key={j} className="text-gray-300 text-xs leading-relaxed flex gap-2">
                          <span className="text-blue-500 mt-0.5 shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Bio */}
            {profile.bio && (
              <section className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">About Me</h2>
                <div className="space-y-4">
                  {profile.bio.split('\n\n').map((para, i) => (
                    <p key={i} className="text-gray-300 leading-relaxed text-sm">{para}</p>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Education & Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Education */}
          <section className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-4">Education</h2>
            <div className="space-y-4">
              {education.map((e, i) => (
                <div key={i} className={`flex justify-between gap-2 ${i < education.length - 1 ? "pb-4 border-b border-gray-800" : ""}`}>
                  <div>
                    <p className="text-white text-sm font-medium">{e.degree}</p>
                    <p className="text-blue-400 text-xs mt-0.5">{e.institution}</p>
                    <p className="text-gray-500 text-xs mt-0.5">GPA {e.gpa}</p>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded h-fit shrink-0 whitespace-nowrap">{e.period}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <h2 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mb-4">Awards</h2>
            <div className="space-y-3">
              {awards.map((a, i) => (
                <div key={i} className={`flex justify-between gap-2 ${i < awards.length - 1 ? "pb-3 border-b border-gray-800" : ""}`}>
                  <div>
                    <p className="text-white text-sm font-medium">{a.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{a.org}</p>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded h-fit shrink-0">{a.year}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Open to Opportunities */}
        <section className="bg-gray-900 border border-blue-800/40 rounded-xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-green-400 text-sm font-medium">Open to Opportunities</span>
              </div>
              <h2 className="text-lg font-semibold text-white">Data Scientist · ML Engineer · Applied AI</h2>
              <p className="text-gray-400 text-sm mt-1">
                Actively exploring roles in data science, ML engineering, and applied AI — particularly in industrial, manufacturing, or research-driven environments.
              </p>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              <a href={`mailto:${profile.email}`}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-colors text-center">
                Get in Touch
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-sm rounded-lg transition-colors text-center border border-gray-700">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Hobbies */}
        {profile.hobbies.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-white border-b border-gray-800 pb-2 mb-6">Hobbies</h2>
            <div className="space-y-6">
              {profile.hobbies.map((hobby) => (
                <div key={hobby.name} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{hobby.name}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{hobby.description}</p>
                  </div>
                  {hobby.photos.length > 0 && (
                    <div className="grid grid-cols-3 gap-1 border-t border-gray-800">
                      {hobby.photos.map((src, i) => (
                        <div key={i} className="relative aspect-square">
                          <Image
                            src={src}
                            alt={`${hobby.name} photo ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </>
  );
}
