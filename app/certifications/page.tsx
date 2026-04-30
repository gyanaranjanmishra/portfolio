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
              <div className="flex-1">
                <h2 className="font-semibold text-white">{cert.name}</h2>
                <p className="text-blue-400 text-sm mt-1">{cert.issuer}</p>
                {"instructor" in cert && cert.instructor && (
                  <p className="text-gray-400 text-xs mt-1">By {cert.instructor as string}</p>
                )}
                {"description" in cert && cert.description && (
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">{cert.description as string}</p>
                )}
                <p className="text-gray-500 text-xs mt-2">
                  {cert.year}{"validUntil" in cert && cert.validUntil ? ` · Valid until ${cert.validUntil as string}` : ""}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 rounded-full bg-gray-800 hover:bg-blue-700 text-gray-300 hover:text-white transition-colors"
                >
                  View Certificate
                </a>
                {"verify" in cert && cert.verify && (
                  <a
                    href={cert.verify as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-full bg-green-900/40 border border-green-700 hover:bg-green-700 text-green-300 hover:text-white transition-colors"
                  >
                    Verify
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
