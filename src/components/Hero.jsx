import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Compass, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden rounded-2xl bg-black/80">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/dRBdpY8aSqcdPO2y/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur">
          <Star className="h-4 w-4 text-yellow-300" />
          <span className="text-sm/none text-white/80">Introducing</span>
          <span className="text-sm/none font-semibold">TourFlips</span>
        </div>

        <h1 className="mt-6 font-semibold tracking-tight text-white" style={{ fontFamily: 'Mona Sans, Inter, system-ui' }}>
          <span className="block text-4xl sm:text-5xl md:text-6xl">Your AI-Powered</span>
          <span className="mt-2 block bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent text-3xl sm:text-5xl md:text-6xl">
            Smart Travel Companion
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
          Discover destinations by mood, build balanced itineraries in seconds, and keep a living travel journal — all powered by intelligent personalization.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#get-started"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-white/95 px-5 py-3 font-medium text-black shadow-lg shadow-cyan-500/10 transition hover:bg-white"
          >
            <Rocket className="h-5 w-5" /> Start Planning
          </a>
          <a
            href="#features"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Compass className="h-5 w-5" /> Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
