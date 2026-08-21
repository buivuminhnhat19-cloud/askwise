export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">
      
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-100/60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 text-center">
        
        {/* Badge */}
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />

          AI literacy for the next generation
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
          Ask Better.
          <br />

          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Learn Better.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          AskWise helps students and teachers communicate with AI
          effectively — without letting AI do the thinking for them.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          <button className="rounded-full bg-slate-950 px-7 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800">
            Try AskWise →
          </button>

          <a
            href="#how-it-works"
            className="rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            See how it works
          </a>

        </div>

        {/* Demo */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-2xl shadow-slate-950/10">
            
            {/* Window header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="text-sm font-medium text-slate-400">
                AskWise Prompt Coach
              </span>

              <div className="w-12" />
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2">

              {/* BEFORE */}
              <div className="p-7 md:border-r md:border-slate-200">
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-500">
                    Your prompt
                  </span>

                  <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                    Needs improvement
                  </span>
                </div>

                <div className="mt-5 rounded-2xl bg-slate-50 p-5">
                  <p className="text-lg text-slate-700">
                    Explain photosynthesis.
                  </p>
                </div>

                <div className="mt-7">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">
                      Prompt Quality
                    </span>

                    <span className="font-bold text-red-500">
                      32/100
                    </span>
                  </div>

                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div className="h-full w-[32%] rounded-full bg-red-400" />
                  </div>
                </div>

              </div>

              {/* AFTER */}
              <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-7">
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-500">
                    AskWise improved
                  </span>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    Strong prompt
                  </span>
                </div>

                <div className="mt-5 rounded-2xl border border-indigo-100 bg-white p-5">
                  <p className="text-sm leading-7 text-slate-700">
                    I&apos;m a Grade 6 student learning about photosynthesis.
                    Explain it using simple language and everyday examples.
                    Ask me questions to check my understanding, and don&apos;t
                    give me the final answer immediately.
                  </p>
                </div>

                <div className="mt-7">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">
                      Prompt Quality
                    </span>

                    <span className="font-bold text-emerald-600">
                      91/100
                    </span>
                  </div>

                  <div className="mt-2 h-2 rounded-full bg-white">
                    <div className="h-full w-[91%] rounded-full bg-emerald-500" />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}