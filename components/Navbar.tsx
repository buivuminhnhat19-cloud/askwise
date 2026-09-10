"use client";

import LanguageSwitcher from "./language-switcher";
import { useLanguage } from "../lib/i18n/language-context";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 font-bold text-white">
            A
          </div>

          <span className="text-xl font-bold tracking-tight">
            AskWise
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a
            href="#how-it-works"
            className="transition hover:text-slate-950"
          >
            How It Works
          </a>

          <a
            href="#students"
            className="transition hover:text-slate-950"
          >
            Students
          </a>

          <a
            href="#teachers"
            className="transition hover:text-slate-950"
          >
            Educators
          </a>

          <a
            href="#learn"
            className="transition hover:text-slate-950"
          >
            Learn AI
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          <a
            href="/coach"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Get Started
          </a>
        </div>

      </div>
    </header>
  );
}