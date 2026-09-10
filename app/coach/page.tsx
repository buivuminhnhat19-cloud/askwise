"use client";

import { useState } from "react";
import {
  analyzePrompt,
  buildImprovedPrompt,
  type PromptAnalysis,
  type PromptBuilderData,
} from "../../lib/prompt-analyzer";
import LanguageSwitcher from "../../components/language-switcher";
import { useLanguage } from "../../lib/i18n/language-context";

const categories = [
  {
    key: "Goal",
    label: "Goal",
    icon: "🎯",
    description: "What do you want AI to help you do?",
    why:
      "A clear goal tells AI exactly what you want to accomplish instead of making it guess.",
    example:
      "Instead of: Explain math → Try: Help me understand how fractions work.",
  },
  {
    key: "Context",
    label: "Context",
    icon: "📚",
    description: "Did you explain your situation or topic?",
    why:
      "Context gives AI useful background information so its response fits your situation.",
    example:
      "For example: I am preparing for a Grade 6 science test.",
  },
  {
    key: "Level",
    label: "Level",
    icon: "🎓",
    description: "Did you tell AI your learning level?",
    why:
      "Different learners need different explanations. Your grade or experience helps AI choose the right level.",
    example:
      "For example: I am a Grade 6 student and I am new to this topic.",
  },
  {
    key: "Response",
    label: "Response",
    icon: "💬",
    description: "Did you explain how you want the answer?",
    why:
      "AI can respond in many different ways. Telling it how you learn makes the response more useful.",
    example:
      "For example: Explain it using simple language and everyday examples.",
  },
  {
    key: "Learning",
    label: "Learning",
    icon: "🧠",
    description: "Does your prompt help you learn?",
    why:
      "AI should help you think and practice, not simply give you the final answer.",
    example:
      "For example: Ask me questions and give me hints before showing the answer.",
  },
];

export default function CoachPage() {
  const { t } = useLanguage();
  const [prompt, setPrompt] = useState("");
  const [analysis, setAnalysis] = useState<PromptAnalysis | null>(null);

const [improvedPrompt, setImprovedPrompt] = useState("");

const [builder, setBuilder] = useState<PromptBuilderData>({
  level: "",
  goal: "",
  responseStyle: "",
  learningStyle: "",
});

const [improvedAnalysis, setImprovedAnalysis] =
  useState<PromptAnalysis | null>(null);
const [tutorStep, setTutorStep] = useState(0);

const [tutorAnswers, setTutorAnswers] = useState({
  goal: "",
  level: "",
  learningStyle: "",
});
  function handleAnalyze() {
    if (!prompt.trim()) return;

    setAnalysis(analyzePrompt(prompt));
    setImprovedPrompt("");
  }

  function handleExample() {
    setPrompt("Explain photosynthesis.");
    setAnalysis(null);
    setImprovedPrompt("");
  }

  function updateBuilder(
    field: keyof PromptBuilderData,
    value: string
  ) {
    setBuilder((current) => ({
      ...current,
      [field]: value,
    }));
  }

 function handleBuildPrompt() {
  if (!prompt.trim()) return;

  const result = buildImprovedPrompt(prompt, builder);

  setImprovedPrompt(result);

  const newAnalysis = analyzePrompt(result);

  setImprovedAnalysis(newAnalysis);
}
function handleTutorAnswer(
  field: "goal" | "level" | "learningStyle",
  value: string
) {
  setTutorAnswers((current) => ({
    ...current,
    [field]: value,
  }));

  setTutorStep((current) => current + 1);
}
  function getCategoryStatus(category: string) {
    if (!analysis) return false;

    return !analysis.improvements.some(
      (item) => item.category === category
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-950">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            Ask<span className="text-indigo-600">Wise</span>
          </a>

          <div className="flex items-center gap-5">
            <span className="hidden text-sm text-slate-400 sm:block">
              Prompt Coach
            </span>

            <LanguageSwitcher />

            <a
              href="/"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              Home
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-[-200px] -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-16">

          {/* TITLE */}
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
              AskWise helps you improve your prompt so AI can help you
              learn more effectively — without doing the thinking for you.
            </p>
          </div>

          {/* INPUT */}
          <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-950/5">
            <div className="rounded-[1.5rem] bg-slate-50 p-5 sm:p-6">

              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-800">
                  Your prompt
                </label>

                <button
                  onClick={handleExample}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                >
                  Try an example
                </button>
              </div>

              <textarea
                value={prompt}
                onChange={(event) => {
                  setPrompt(event.target.value);
                  setAnalysis(null);
                  setImprovedPrompt("");
                }}
                placeholder="What would you ask an AI assistant?"
                className="mt-4 min-h-44 w-full resize-none rounded-2xl border border-slate-200 bg-white p-5 text-base leading-7 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
              />

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {prompt.length} characters
                </span>

                <button
                  onClick={handleAnalyze}
                  disabled={!prompt.trim()}
                  className="rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Analyze my prompt →
                </button>
              </div>
            </div>
          </div>

          {/* ANALYSIS */}
          {analysis && (
            <div className="mt-10 space-y-6">

              {/* SCORE */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-center">

                  <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-[10px] border-indigo-100">
                    <div className="text-center">
                      <div className="text-3xl font-bold">
                        {analysis.score}
                      </div>

                      <div className="text-xs text-slate-400">
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
                      AskWise looks at how effectively your prompt
                      communicates with AI.
                    </p>
                  </div>
                </div>
              </div>

              {/* FIVE CATEGORIES */}
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">

                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Prompt breakdown
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  How strong is your prompt?
                </h2>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {categories.map((category) => {
                    const passed = getCategoryStatus(category.key);

                    return (
                      <div
                        key={category.key}
                        className={`rounded-2xl border p-5 ${
                          passed
                            ? "border-emerald-100 bg-emerald-50/60"
                            : "border-slate-200 bg-slate-50"
                        }`}
                      >
                        <div className="flex items-start justify-between">

                          <div className="flex gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                              {category.icon}
                            </div>

                            <div>
                              <h3 className="font-bold">
  {category.label}
</h3>

<p className="mt-1 text-sm text-slate-500">
  {category.description}
</p>

<p className="mt-3 text-xs font-medium leading-5 text-indigo-600">
  Why it matters
</p>

<p className="mt-1 text-xs leading-5 text-slate-500">
  {category.why}
</p>

<div className="mt-3 rounded-xl bg-white p-3">
  <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
    Example
  </p>

  <p className="mt-1 text-xs leading-5 text-slate-600">
    {category.example}
  </p>
</div>
                            </div>

                          </div>

                          <div
                            className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold ${
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
{/* AI TUTOR MODE */}
<div className="rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-8 shadow-sm">

  <div className="flex items-start gap-4">

    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-xl shadow-lg">
      🧠
    </div>

    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">
        AskWise Tutor
      </p>

      <h2 className="mt-2 text-2xl font-bold">
        Let&apos;s understand what you need.
      </h2>

      <p className="mt-3 max-w-2xl leading-7 text-slate-600">
        Instead of giving you the answer, AskWise asks a few questions
        to help you build a better prompt yourself.
      </p>
    </div>

  </div>

  {/* PROGRESS */}
  <div className="mt-8 flex gap-2">
    {[0, 1, 2].map((step) => (
      <div
        key={step}
        className={`h-2 flex-1 rounded-full transition ${
          tutorStep > step
            ? "bg-indigo-600"
            : "bg-slate-200"
        }`}
      />
    ))}
  </div>

  {/* STEP 1 */}
  {tutorStep === 0 && (
    <div className="mt-8">

      <p className="text-sm font-bold text-slate-500">
        Question 1 of 3
      </p>

      <h3 className="mt-2 text-xl font-bold">
        🎯 What are you trying to accomplish?
      </h3>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">

        {[
          ["Understand the concept", "to understand the concept"],
          ["Practice", "to practice"],
          ["Prepare for a test", "to prepare for a test"],
          ["Prepare a presentation", "to prepare a presentation"],
          ["Explore the topic", "to explore the topic"],
        ].map(([label, value]) => (
          <button
            key={value}
            onClick={() => handleTutorAnswer("goal", value)}
            className="rounded-2xl border border-slate-200 bg-white p-4 text-left font-semibold transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50"
          >
            {label}
          </button>
        ))}

      </div>

    </div>
  )}

  {/* STEP 2 */}
  {tutorStep === 1 && (
    <div className="mt-8">

      <p className="text-sm font-bold text-slate-500">
        Question 2 of 3
      </p>

      <h3 className="mt-2 text-xl font-bold">
        🎓 What is your learning level?
      </h3>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">

        {[
          ["Grade 3", "a Grade 3 student"],
          ["Grade 4", "a Grade 4 student"],
          ["Grade 5", "a Grade 5 student"],
          ["Grade 6", "a Grade 6 student"],
          ["Grade 7", "a Grade 7 student"],
          ["Middle school", "a middle school student"],
          ["High school", "a high school student"],
        ].map(([label, value]) => (
          <button
            key={value}
            onClick={() => handleTutorAnswer("level", value)}
            className="rounded-2xl border border-slate-200 bg-white p-4 text-left font-semibold transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50"
          >
            {label}
          </button>
        ))}

      </div>

    </div>
  )}

  {/* STEP 3 */}
  {tutorStep === 2 && (
    <div className="mt-8">

      <p className="text-sm font-bold text-slate-500">
        Question 3 of 3
      </p>

      <h3 className="mt-2 text-xl font-bold">
        🧠 How do you want AI to help you learn?
      </h3>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">

        {[
          [
            "Explain it simply",
            "explain it using simple language",
          ],
          [
            "Ask me questions",
            "ask me questions to check my understanding",
          ],
          [
            "Give me hints",
            "guide me with hints instead of immediately giving the answer",
          ],
          [
            "Quiz me",
            "give me a short quiz after the explanation",
          ],
        ].map(([label, value]) => (
          <button
            key={value}
            onClick={() =>
              handleTutorAnswer("learningStyle", value)
            }
            className="rounded-2xl border border-slate-200 bg-white p-4 text-left font-semibold transition hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50"
          >
            {label}
          </button>
        ))}

      </div>

    </div>
  )}

  {/* COMPLETE */}
  {tutorStep >= 3 && (
    <div className="mt-8">

      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
            ✓
          </div>

          <div>
            <h3 className="font-bold text-emerald-950">
              Great! You&apos;ve defined how you want to learn.
            </h3>

            <p className="mt-1 text-sm text-slate-600">
              AskWise can now use your choices to strengthen your prompt.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">

          <div className="rounded-xl bg-white p-4">
            <p className="text-xs font-bold uppercase text-slate-400">
              Goal
            </p>
            <p className="mt-1 text-sm font-semibold">
              {tutorAnswers.goal}
            </p>
          </div>

          <div className="rounded-xl bg-white p-4">
            <p className="text-xs font-bold uppercase text-slate-400">
              Level
            </p>
            <p className="mt-1 text-sm font-semibold">
              {tutorAnswers.level}
            </p>
          </div>

          <div className="rounded-xl bg-white p-4">
            <p className="text-xs font-bold uppercase text-slate-400">
              Learning
            </p>
            <p className="mt-1 text-sm font-semibold">
              {tutorAnswers.learningStyle}
            </p>
          </div>

        </div>

        <button
          onClick={() => {
            setBuilder((current) => ({
              ...current,
              goal: tutorAnswers.goal,
              level: tutorAnswers.level,
              learningStyle: tutorAnswers.learningStyle,
            }));

            document
              .getElementById("prompt-builder")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
          className="mt-6 w-full rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white transition hover:bg-slate-800"
        >
          Continue to Prompt Builder →
        </button>

      </div>

    </div>
  )}

</div>
              {/* INTERACTIVE BUILDER */}
<div
  id="prompt-builder"
  className="rounded-[2rem] border border-indigo-100 bg-white p-8 shadow-sm"
>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                    Build your prompt
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Make it stronger yourself.
                  </h2>

                  <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                    Choose the information you want AI to know.
                    AskWise will combine your choices with your original
                    prompt.
                  </p>
                </div>

                {/* LEVEL */}
                <div className="mt-8">
                  <label className="text-sm font-bold">
                    🎓 What is your level?
                  </label>

                  <select
                    value={builder.level}
                    onChange={(event) =>
                      updateBuilder("level", event.target.value)
                    }
                    className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  >
                    <option value="">
                      Select your level
                    </option>
                    <option value="a Grade 3 student">
                      Grade 3
                    </option>
                    <option value="a Grade 4 student">
                      Grade 4
                    </option>
                    <option value="a Grade 5 student">
                      Grade 5
                    </option>
                    <option value="a Grade 6 student">
                      Grade 6
                    </option>
                    <option value="a Grade 7 student">
                      Grade 7
                    </option>
                    <option value="a middle school student">
                      Middle school
                    </option>
                    <option value="a high school student">
                      High school
                    </option>
                  </select>
                </div>

                {/* GOAL */}
                <div className="mt-6">
                  <label className="text-sm font-bold">
                    🎯 What is your goal?
                  </label>

                  <select
                    value={builder.goal}
                    onChange={(event): void =>
  updateBuilder("goal", event.target.value)
}
                    className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  >
                    <option value="">
                      Select your goal
                    </option>

                    <option value="to understand the concept">
                      Understand the concept
                    </option>

                    <option value="to prepare for a test">
                      Prepare for a test
                    </option>

                    <option value="to practice">
                      Practice
                    </option>

                    <option value="to prepare a presentation">
                      Prepare a presentation
                    </option>

                    <option value="to explore the topic">
                      Explore the topic
                    </option>
                  </select>
                </div>

                {/* RESPONSE */}
                <div className="mt-6">
                  <label className="text-sm font-bold">
                    💬 How should AI explain it?
                  </label>

                  <select
                    value={builder.responseStyle}
                    onChange={(event) =>
                      updateBuilder(
                        "responseStyle",
                        event.target.value
                      )
                    }
                    className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  >
                    <option value="">
                      Choose a response style
                    </option>

                    <option value="explain it using simple language">
                      Simple language
                    </option>

                    <option value="explain it step by step">
                      Step by step
                    </option>

                    <option value="use everyday examples">
                      Everyday examples
                    </option>

                    <option value="use bullet points">
                      Bullet points
                    </option>

                    <option value="give me a short explanation">
                      Short explanation
                    </option>
                  </select>
                </div>

                {/* LEARNING */}
                <div className="mt-6">
                  <label className="text-sm font-bold">
                    🧠 How do you want to learn?
                  </label>

                  <select
                    value={builder.learningStyle}
                    onChange={(event) =>
                      updateBuilder(
                        "learningStyle",
                        event.target.value
                      )
                    }
                    className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  >
                    <option value="">
                      Choose a learning style
                    </option>

                    <option value="asking me questions to check my understanding">
                      Ask me questions
                    </option>

                    <option value="guiding me instead of immediately giving the answer">
                      Guide me instead of giving the answer
                    </option>

                    <option value="giving me a short quiz after the explanation">
                      Give me a quiz
                    </option>

                    <option value="checking my understanding before moving on">
                      Check my understanding
                    </option>
                  </select>
                </div>

                <button
                  onClick={handleBuildPrompt}
                  className="mt-8 w-full rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white transition hover:bg-slate-800"
                >
                  Build my improved prompt →
                </button>
              </div>

              {/* IMPROVED PROMPT */}
              {/* BEFORE / AFTER */}
{improvedPrompt && improvedAnalysis && (
  <div className="space-y-6">

    {/* BEFORE / AFTER CARDS */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* BEFORE */}
      <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Before
            </p>

            <h2 className="mt-1 text-xl font-bold">
              Your original prompt
            </h2>
          </div>

          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
            {analysis.score}/100
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-slate-50 p-5">
          <p className="text-sm leading-7 text-slate-700">
            {prompt}
          </p>
        </div>

      </div>

      {/* AFTER */}
      <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50/50 p-7 shadow-sm">

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              After
            </p>

            <h2 className="mt-1 text-xl font-bold">
              Your improved prompt
            </h2>
          </div>

          <div className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-white">
            {improvedAnalysis.score}/100
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-emerald-100 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700">
            {improvedPrompt}
          </p>
        </div>

      </div>

    </div>

    {/* SCORE IMPROVEMENT */}
    <div className="rounded-[2rem] bg-slate-950 p-8 text-white">

      <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
        Your progress
      </p>

      <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h2 className="text-3xl font-bold">
            {analysis.score}
            <span className="mx-3 text-slate-500">
              →
            </span>
            {improvedAnalysis.score}
          </h2>

          <p className="mt-2 text-slate-400">
            Prompt quality improvement
          </p>
        </div>

        <div className="rounded-2xl bg-white/10 px-6 py-4 text-center">

          <p className="text-xs uppercase tracking-wider text-slate-400">
            Improvement
          </p>

          <p className="mt-1 text-2xl font-bold text-emerald-400">
            {improvedAnalysis.score - analysis.score >= 0
              ? `+${improvedAnalysis.score - analysis.score}`
              : improvedAnalysis.score - analysis.score}
          </p>

        </div>

      </div>

      <div className="mt-7 h-3 overflow-hidden rounded-full bg-white/10">

        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-700"
          style={{
            width: `${improvedAnalysis.score}%`,
          }}
        />

      </div>

    </div>

    {/* COPY */}
    <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-8">

      <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
        Ready to use
      </p>

      <h2 className="mt-2 text-2xl font-bold text-emerald-950">
        You built a stronger prompt. 🎉
      </h2>

      <p className="mt-3 leading-7 text-slate-600">
        AskWise helped you understand what information AI needs.
        Now you can take your improved prompt to the AI tool you want to use.
      </p>

      <button
        onClick={() =>
          navigator.clipboard.writeText(improvedPrompt)
        }
        className="mt-6 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
      >
        Copy improved prompt
      </button>

    </div>

  </div>
)}
              {/* PRINCIPLE */}
              <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
                  The AskWise principle
                </p>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  AI should be your learning partner, not your replacement.
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  A better prompt doesn't just produce a better answer.
                  It helps you think about what you actually want to learn.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
