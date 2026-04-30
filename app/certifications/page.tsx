import TrafficLogger from "@/components/TrafficLogger";
import { certifications } from "@/lib/config";

export default function CertificationsPage() {
  return (
    <>
      <TrafficLogger />
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-white">Certifications</h1>
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col gap-3">
              <div>
                <h2 className="font-semibold text-white">{cert.name}</h2>
                <p className="text-blue-400 text-sm mt-1">{cert.issuer}</p>
                <p className="text-gray-400 text-xs mt-1">{cert.year}</p>
              </div>
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full bg-gray-800 hover:bg-blue-700 text-gray-300 hover:text-white transition-colors w-fit"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
