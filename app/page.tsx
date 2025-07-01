"use client";
import { useState, useEffect } from "react";

const PHASES = [
  "Idea Generation",
  "Competition Analysis",
  "Idea Roasting",
  "Planning",
  "Landing Page",
  "MVP Development",
  "Launch & Iteration"
];

const SUBQUESTIONS: Record<string, string[]> = {
  "Idea Generation": [
    "What are 3 problems you’ve personally faced recently?",
    "Which communities (e.g., Reddit) have users facing similar issues?",
    "Can this be solved with software?"
  ],
  "Competition Analysis": [
    "Who is already solving this problem?",
    "How do they position their product?",
    "What do users like/dislike about them?"
  ],
  "Idea Roasting": [
    "Why do you believe this idea will work?",
    "What makes this idea unique or different?",
    "Would someone pay for this today?"
  ],
  "Planning": [
    "List Must, Should, Could features.",
    "Write a 1-paragraph PRD (Product Requirements Document).",
    "What’s the user journey from signup to first success?"
  ],
  "Landing Page": [
    "What is your value proposition in one sentence?",
    "What is your primary CTA (Call to Action)?",
    "What style or design inspiration do you want to follow?"
  ],
  "MVP Development": [
    "Which features are you building this weekend only?",
    "Which no-code or code tools will you use?",
    "How will you test that the product actually works?"
  ],
  "Launch & Iteration": [
    "Where will you post your MVP?",
    "What feedback do you want to collect?",
    "What is the next thing you’ll improve post-launch?"
  ]
};

const TOOL_LINKS: Record<string, { label: string; url: string }[]> = {
  "Idea Generation": [
    { label: "Reddit Search", url: "https://www.reddit.com/search" },
    { label: "Google Trends", url: "https://trends.google.com" },
    { label: "ChatGPT", url: "https://chat.openai.com" }
  ],
  "Competition Analysis": [
    { label: "Google Search", url: "https://google.com" },
    { label: "Product Hunt", url: "https://www.producthunt.com" },
    { label: "Exploding Topics", url: "https://explodingtopics.com" }
  ],
  "Idea Roasting": [
    { label: "ChatGPT", url: "https://chat.openai.com" },
    { label: "Indie Hackers", url: "https://www.indiehackers.com" },
    { label: "Twitter (X)", url: "https://twitter.com" }
  ],
  "Planning": [
    { label: "Notion", url: "https://notion.so" },
    { label: "Miro", url: "https://miro.com" },
    { label: "ChatGPT", url: "https://chat.openai.com" }
  ],
  "Landing Page": [
    { label: "Framer", url: "https://framer.com" },
    { label: "Carrd", url: "https://carrd.co" },
    { label: "Dribbble", url: "https://dribbble.com" }
  ],
  "MVP Development": [
    { label: "Softr", url: "https://softr.io" },
    { label: "Bubble", url: "https://bubble.io" },
    { label: "Tally Forms", url: "https://tally.so" }
  ],
  "Launch & Iteration": [
    { label: "Product Hunt", url: "https://www.producthunt.com" },
    { label: "Reddit", url: "https://reddit.com" },
    { label: "Google Forms", url: "https://forms.google.com" }
  ]
};

export default function HomePage() {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [inputs, setInputs] = useState<Record<string, Record<string, string>>>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("saas_inputs");
      return stored ? JSON.parse(stored) : {};
    }
    return {};
  });

  const [checks, setChecks] = useState<Record<string, boolean>>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("saas_checks");
      return stored ? JSON.parse(stored) : {};
    }
    return {};
  });

  const [showPreview, setShowPreview] = useState(false);
  const phase = PHASES[phaseIndex];

  useEffect(() => {
    localStorage.setItem("saas_inputs", JSON.stringify(inputs));
  }, [inputs]);

  useEffect(() => {
    localStorage.setItem("saas_checks", JSON.stringify(checks));
  }, [checks]);

  const handleInputChange = (question: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [phase]: {
        ...prev[phase],
        [question]: value
      }
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecks({ ...checks, [phase]: e.target.checked });
  };

  const getReport = () => {
    let report = "SaaS Weekend Report\n\n";
    PHASES.forEach((step, i) => {
      report += `Step ${i + 1}: ${step}\n`;
      report += `- Fulfilled: ${checks[step] ? "Yes" : "No"}\n`;
      const subInputs = inputs[step] || {};
      SUBQUESTIONS[step].forEach((q) => {
        report += `  - ${q}: ${subInputs[q] || "(none)"}\n`;
      });
      report += "\n";
    });
    return report;
  };

  const generateReport = () => {
    const report = getReport();
    const blob = new Blob([report], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "saas-weekend-report.txt";
    link.click();
  };

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🛠️ Build Your SaaS in a Weekend</h1>

      {showPreview ? (
        <div className="bg-white border rounded-xl shadow p-6 mb-6 whitespace-pre-wrap text-black">
          <h2 className="text-2xl font-bold mb-4">📄 Report Preview</h2>
          <pre className="text-sm mb-4">{getReport()}</pre>
          <button
            onClick={generateReport}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-2"
          >
            Download Report
          </button>
          <button
            onClick={() => setShowPreview(false)}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Back to Steps
          </button>
        </div>
      ) : (
        <div className="bg-white border rounded-xl shadow p-6 mb-6">
          <h2 className="text-2xl font-bold mb-3 text-black">
            Step {phaseIndex + 1}: {phase}
          </h2>
          <p className="text-gray-800 mb-4">
            Answer each of the following questions to complete this step:
          </p>

          {SUBQUESTIONS[phase].map((question) => (
            <div key={question} className="mb-4">
              <label className="block font-medium text-black mb-1">{question}</label>
              <textarea
                className="w-full border rounded p-3 text-black"
                rows={3}
                placeholder="Your answer..."
                value={inputs[phase]?.[question] || ""}
                onChange={(e) => handleInputChange(question, e.target.value)}
              />
            </div>
          ))}

          {TOOL_LINKS[phase] && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-black mb-2">Helpful Tools</h3>
              <ul className="space-y-2">
                {TOOL_LINKS[phase].map(({ label, url }) => (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      🔗 {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <label className="flex items-center gap-2 mb-4 text-black">
            <input
              type="checkbox"
              checked={checks[phase] || false}
              onChange={handleCheckboxChange}
            />
            Mark this step as completed
          </label>

          <div className="flex gap-3">
            {phaseIndex < PHASES.length - 1 ? (
              <button
                onClick={() => setPhaseIndex((prev) => prev + 1)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={() => setShowPreview(true)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Preview Report
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
