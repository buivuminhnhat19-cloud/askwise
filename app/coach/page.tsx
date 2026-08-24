"use client";

import { useState } from "react";
import {
  analyzePrompt,
  type PromptAnalysis,
} from "../../lib/prompt-analyzer";

const categories = [
  {
    key: "Goal",
    label: "Goal",
    icon: "🎯",
    description: "What do you want AI to help you do?",
  },
  {
    key: "Context",
    label: "Context",
    icon: "📚",
    description: "Did you explain your situation or topic?",
  },
  {
    key: "Level",
    label: "Level",
    icon: "🎓",
    description: "Did you tell AI your learning level?",
  },
  {
    key: "Response",
    label: "Response",
    icon: "💬",
    description: "Did you explain how you want the answer?",
  },
  {
    key: "Learning",
    label: "Learning",
    icon: "🧠",
    description: "Does the prompt help you learn instead of just getting an answer?",
  },
];

export default function CoachPage() {
  const [prompt, setPrompt] = useState("");
  const [analysis, setAnalysis] = useState<PromptAnalysis | null>(null);

  function handleAnalyze() {
    if (!prompt.trim()) return;

    setAnalysis(analyzePrompt(prompt));
  }

  function handleExample() {
    setPrompt("Explain photosynthesis.");
    setAnalysis(null);
  }

  function getCategoryStatus(category: string) {
    if (!analysis) return false;

    const item = analysis.improvements.find(
      (improvement) => improvement.category === category
    );

    return !item;
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="/"
            className="text-xl font-bold tracking-tight text-slate-950"
          >
            Ask<span className="text-indigo-600">Wise</span>
          </a>

          <div className="flex items-center gap-5">
            <span className="hidden text-sm text-slate-400 sm:block">
              Prompt Coach
            </span>

            <a
              href="/"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
            >
              Home
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-[-200px] -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-16">
          <div className="text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Prompt Coach
            </div>

            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Don&apos;t just ask AI.
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Learn how to ask.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              AskWise helps you improve your prompt so AI can help you learn
              more effectively — without doing the thinking for you.
            </p>
          </div>

          {/* Input Card */}
          <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-950/5">
            <div className="rounded-[1.5rem] bg-slate-50 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-800">
                  Your prompt
                </label>

                <button
                  onClick={handleExample}
                  className="text-xs font-semibold text-indigo-600 transition hover:text-indigo-800"
                >
                  Try an example
                </button>
              </div>

              <textarea
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                placeholder="What would you ask an AI assistant?"
                className="mt-4 min-h-44 w-full resize-none rounded-2xl border border-slate-200 bg-white p-5 text-base leading-7 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
              />

              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs text-slate-400">
                  {prompt.length} characters
                </div>

                <button
                  onClick={handleAnalyze}
                  disabled={!prompt.trim()}
                  className="rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  Analyze my prompt
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          {analysis && (
            <div className="mt-10 space-y-6">
              {/* Score */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
                  <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-[10px] border-indigo-100">
                    <div className="text-center">
                      <div className="text-3xl font-bold">
                        {analysis.score}
                      </div>
                      <div className="text-xs font-medium text-slate-400">
                        / 100
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                      Prompt Quality
                    </p>

                    <h2 className="mt-2 text-2xl font-bold">
                      {analysis.score >= 80
                        ? "Excellent start! 🎉"
                        : analysis.score >= 60
                          ? "You're on the right track."
                          : "Let's make your prompt stronger."}
                    </h2>

                    <p className="mt-3 max-w-xl leading-7 text-slate-600">
                      AskWise doesn't judge whether your question is
                      &quot;right&quot; or &quot;wrong.&quot; It looks at how
                      effectively your prompt communicates with AI.
                    </p>
                  </div>
                </div>
              </div>

              {/* Five criteria */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Prompt breakdown
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    How strong is your prompt?
                  </h2>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {categories.map((category) => {
                    const passed = getCategoryStatus(category.key);

                    return (
                      <div
                        key={category.key}
                        className={`rounded-2xl border p-5 transition ${
                          passed
                            ? "border-emerald-100 bg-emerald-50/60"
                            : "border-slate-200 bg-slate-50"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                              {category.icon}
                            </div>

                            <div>
                              <h3 className="font-bold">
                                {category.label}
                              </h3>

                              <p className="mt-1 text-sm leading-5 text-slate-500">
                                {category.description}
                              </p>
                            </div>
                          </div>

                          <div
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                              passed
                                ? "bg-emerald-500 text-white"
                                : "bg-slate-200 text-slate-500"
                            }`}
                          >
                            {passed ? "✓" : "!"}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Strengths */}
              {analysis.strengths.length > 0 && (
                <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50/50 p-7 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                    What you did well
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-emerald-950">
                    Keep these parts
                  </h2>

                  <div className="mt-5 space-y-3">
                    {analysis.strengths.map((strength) => (
                      <div
                        key={strength}
                        className="flex items-start gap-3 rounded-2xl bg-white p-4"
                      >
                        <span className="font-bold text-emerald-500">✓</span>
                        <span className="text-sm leading-6 text-slate-700">
                          {strength}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Improvements */}
              {analysis.improvements.length > 0 && (
                <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                    Your next steps
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Improve your prompt
                  </h2>

                  <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                    Instead of AskWise rewriting everything for you, choose
                    what you want to improve and learn why it matters.
                  </p>

                  <div className="mt-7 space-y-4">
                    {analysis.improvements.map((item) => (
                      <div
                        key={item.category}
                        className="rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-200 hover:bg-indigo-50/30"
                      >
                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            💡
                          </div>

                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                              {item.category}
                            </p>

                            <h3 className="mt-1 font-bold text-slate-900">
                              {item.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Learning principle */}
              <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
                    The AskWise principle
                  </p>

                  <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                    AI should be your learning partner, not your replacement.
                  </h2>

                  <p className="mt-4 leading-7 text-slate-300">
                    A better prompt doesn't just produce a better answer. It
                    helps you think about what you actually want to learn.
                  </p>

                  <a
                    href="/"
                    className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
                  >
                    Back to AskWise
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}