"use client";

import { useLanguage } from "../lib/i18n/language-context";

const stepNumbers = ["01", "02", "03", "04"];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section
      id="how-it-works"
      className="border-y border-slate-200 bg-slate-50/70"
    >
      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            {t.howItWorks}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t.howItWorksTitle}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {t.howItWorksDescription}
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">

          {stepNumbers.map((number, index) => {
  const stepData = [
    {
      title: t.stepAsk,
      description: t.stepAskDescription,
    },
    {
      title: t.stepImprove,
      description: t.stepImproveDescription,
    },
    {
      title: t.stepLearn,
      description: t.stepLearnDescription,
    },
    {
      title: t.stepThink,
      description: t.stepThinkDescription,
    },
  ][index];

  return (
    <div
      key={number}
      className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <span className="text-sm font-bold text-indigo-600">
        {number}
      </span>

      <h3 className="mt-5 text-xl font-bold">
        {stepData.title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {stepData.description}
      </p>
    </div>
  );
})}


        </div>
      </div>
    </section>
  );
}