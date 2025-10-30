import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f14] via-[#0a1016] to-[#0a0f14] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <header className="mb-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400" />
            <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: 'Mona Sans, Inter, system-ui' }}>TourFlips</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#get-started" className="hover:text-white">How it works</a>
            <a href="#" className="hover:text-white">Community</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <button className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white/90 backdrop-blur hover:bg-white/10">Sign in</button>
          </nav>
        </header>
      </div>

      <main>
        <div className="mx-auto max-w-7xl px-6">
          <Hero />
        </div>
        <FeatureGrid />
        <HowItWorks />
        <CTA />
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} TourFlips. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
