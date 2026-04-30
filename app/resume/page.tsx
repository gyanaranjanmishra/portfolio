import TrafficLogger from "@/components/TrafficLogger";

export default function ResumePage() {
  return (
    <>
      <TrafficLogger />
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Resume</h1>
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-colors"
          >
            Download PDF
          </a>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <iframe
            src="/resume.pdf"
            className="w-full"
            style={{ height: "85vh" }}
            title="Resume"
          />
        </div>
      </div>
    </>
  );
}
