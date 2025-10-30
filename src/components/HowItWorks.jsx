import React from 'react';
import { Globe, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles className="h-4 w-4 text-cyan-300" /> How it works
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{ fontFamily: 'Mona Sans, Inter, system-ui' }}>
            Plan a smarter trip in three steps
          </h2>
          <ul className="mt-6 space-y-4 text-white/80">
            <li className="flex gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-emerald-300" />
              <span>
                Tell us your mood, budget, and dates. We combine your Travel DNA with trends and weather to find perfect matches.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-emerald-300" />
              <span>
                Get an adaptive itinerary with travel times, pacing, and crowd levels balanced for comfort and discovery.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-emerald-300" />
              <span>
                Capture memories automatically in your smart journal. Share as a post or reel in one tap.
              </span>
            </li>
          </ul>

          <div id="get-started" className="mt-8 flex flex-wrap gap-3">
            <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3 font-medium text-black shadow-lg shadow-emerald-500/20 transition hover:brightness-110">
              Start free — no login
            </button>
            <button className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
              Watch quick demo
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
          <div className="mb-4 flex items-center gap-2 text-white/70">
            <div className="h-2 w-2 rounded-full bg-rose-400" />
            <div className="h-2 w-2 rounded-full bg-amber-400" />
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
          <div className="rounded-xl border border-white/10 bg-black/30 p-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-white/70">Mood</span>
                <input className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:border-cyan-300/40" placeholder="Peaceful mountain escape" />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-white/70">Budget</span>
                <input className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:border-cyan-300/40" placeholder="₹20,000 – ₹50,000" />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-white/70">Days</span>
                <input type="number" min={2} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:border-cyan-300/40" placeholder="5" />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                <span className="text-white/70">Region</span>
                <input className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none placeholder:text-white/40 focus:border-cyan-300/40" placeholder="Himachal, India" />
              </label>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              <div>
                <p className="text-sm text-white/80">Suggestion preview</p>
                <p className="text-sm text-white/60">Shimla • Manali • Spiti — Best in Oct–Mar • ₹35k avg</p>
              </div>
              <Globe className="h-6 w-6 text-cyan-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
