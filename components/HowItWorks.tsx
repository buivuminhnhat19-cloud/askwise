const steps = [
  {
    number: "01",
    title: "Ask",
    description:
      "Tell AskWise what you are trying to learn or accomplish.",
  },
  {
    number: "02",
    title: "Improve",
    description:
      "Discover what is missing from your prompt and learn why it matters.",
  },
  {
    number: "03",
    title: "Learn",
    description:
      "Use the improved prompt with your preferred AI assistant.",
  },
  {
    number: "04",
    title: "Think",
    description:
      "Understand, verify, and think critically about the AI response.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-y border-slate-200 bg-slate-50/70"
    >
      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            How it works
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            From a simple question to a better learning experience.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            AskWise teaches you what makes a good AI prompt instead of
            simply generating one for you.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-sm font-bold text-indigo-600">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}