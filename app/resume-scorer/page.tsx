"use client";
import { useState } from "react";
import TrafficLogger from "@/components/TrafficLogger";

interface ScoreResult {
  score: number;
  matched_skills: string[];
  missing_skills: string[];
  strengths: string[];
  improvements: string[];
  verdict: string;
  used: number;
  limit: number;
}

export default function ResumeScorerPage() {
  const [resume, setResume] = useState("");
  const [jd, setJd] = useState("");
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleScore() {
    if (!resume.trim() || !jd.trim()) {
      setError("Please paste both your resume and the job description.");
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/score-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resume, jobDescription: jd }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        setResult(data);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const scoreColor = result
    ? result.score >= 75 ? "text-green-400" : result.score >= 50 ? "text-yellow-400" : "text-red-400"
    : "";

  return (
    <>
      <TrafficLogger />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Resume Scorer</h1>
          <p className="text-gray-400 text-sm mt-1">
            Paste your resume and a job description to get an AI-powered match score.
            Limited to 3 scans per IP per 24 hours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Your Resume</label>
            <textarea
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              placeholder="Paste your resume text here..."
              className="w-full h-64 bg-gray-900 border border-gray-700 rounded-xl p-3 text-sm text-gray-200 resize-none focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Job Description</label>
            <textarea
              value={jd}
              onChange={(e) => setJd(e.target.value)}
              placeholder="Paste the job description here..."
              className="w-full h-64 bg-gray-900 border border-gray-700 rounded-xl p-3 text-sm text-gray-200 resize-none focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-900/30 border border-red-700 rounded-xl p-4 text-red-300 text-sm">
            {error}
          </div>
        )}

        <button
          onClick={handleScore}
          disabled={loading}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-medium rounded-xl transition-colors"
        >
          {loading ? "Analyzing..." : "Score Resume"}
        </button>

        {result && (
          <div className="space-y-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <div className={`text-6xl font-bold ${scoreColor}`}>{result.score}</div>
              <div className="text-gray-400 text-sm mt-1">out of 100</div>
              <p className="text-gray-300 mt-3 text-sm italic">&quot;{result.verdict}&quot;</p>
              <p className="text-gray-500 text-xs mt-2">{result.used} of {result.limit} scans used today</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <h3 className="font-semibold text-green-400 mb-2">Matched Skills</h3>
                <div className="flex flex-wrap gap-1">
                  {result.matched_skills.map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-green-900/40 border border-green-700 text-green-300">{s}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <h3 className="font-semibold text-red-400 mb-2">Missing Skills</h3>
                <div className="flex flex-wrap gap-1">
                  {result.missing_skills.map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-red-900/40 border border-red-700 text-red-300">{s}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <h3 className="font-semibold text-blue-400 mb-2">Strengths</h3>
                <ul className="space-y-1">
                  {result.strengths.map((s) => (
                    <li key={s} className="text-sm text-gray-300 flex gap-2"><span className="text-blue-400">+</span>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <h3 className="font-semibold text-yellow-400 mb-2">Improvements</h3>
                <ul className="space-y-1">
                  {result.improvements.map((s) => (
                    <li key={s} className="text-sm text-gray-300 flex gap-2"><span className="text-yellow-400">!</span>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
