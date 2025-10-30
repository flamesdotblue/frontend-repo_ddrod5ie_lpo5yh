import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/15 via-emerald-500/10 to-blue-500/10 p-1">
        <div className="rounded-[22px] bg-slate-950/70 p-8 sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <ShieldCheck className="h-4 w-4 text-emerald-300" /> Privacy-first and ad-light
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl" style={{ fontFamily: 'Mona Sans, Inter, system-ui' }}>
              Ready to flip how you travel?
            </h3>
            <p className="mt-3 text-white/70">
              Start with a free smart itinerary. Upgrade anytime for Pro features like group planning, reels, and premium concierge.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black shadow-lg shadow-cyan-500/20 transition hover:brightness-95">
                Get started free <Star className="h-5 w-5 text-yellow-500" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
                View sample trips
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-white/50">
        TourFlips — AI that learns your style, guides your journey, and makes memories cinematic.
      </p>
    </section>
  );
}
