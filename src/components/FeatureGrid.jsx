import React from 'react';
import { Compass, Map, Wallet, Camera, Users, MessageCircle, CloudSun, Crown } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'AI Destination Discovery',
    desc: 'Describe your mood or vibe and instantly get curated places with ideal seasons, costs, and local highlights.',
  },
  {
    icon: Map,
    title: 'Smart Itinerary Builder',
    desc: 'Daily plans that balance travel time, daylight, and crowd levels. Lock favorites and let AI adjust the rest.',
  },
  {
    icon: Wallet,
    title: 'Budget & Expense Estimator',
    desc: 'Set a budget and we optimize hotel class, trip length, and experiences — with live currency rates.',
  },
  {
    icon: Camera,
    title: 'Smart Trip Journal',
    desc: 'Auto-generate a beautiful diary with photos, places, and AI-written summaries. Share as posts or reels.',
  },
  {
    icon: Users,
    title: 'Community Experiences',
    desc: 'Discover real itineraries, ratings, and photos. Duplicate any trip and personalize it with AI.',
  },
  {
    icon: MessageCircle,
    title: 'AI Travel Companion',
    desc: 'Real-time chat for nearby food, emergency info, translations, and hidden spots — anywhere you go.',
  },
  {
    icon: CloudSun,
    title: 'Weather-Aware Planning',
    desc: 'Suggestions adapt to seasons and forecast, with smart alternatives for rainy days.',
  },
  {
    icon: Crown,
    title: 'Loyalty & TourCoins',
    desc: 'Earn rewards for trips, shares, and reviews. Unlock premium customizations and perks.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{ fontFamily: 'Mona Sans, Inter, system-ui' }}>Designed for explorers</h2>
        <p className="mt-3 text-white/70">Twelve powerful capabilities distilled into an elegant, easy-to-use experience.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-cyan-300/30 hover:bg-white/10">
            <div className="inline-flex rounded-xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 p-3 ring-1 ring-inset ring-white/10">
              <Icon className="h-6 w-6 text-cyan-300" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
