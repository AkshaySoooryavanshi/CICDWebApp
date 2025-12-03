import React from 'react';
import { PricingTable } from '../components/cards/PricingTable';

export const MembershipPage: React.FC = () => (
  <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div>
        <p className="badge bg-accent/10 text-accent">CrickX Pass</p>
        <h1 className="text-3xl font-bold text-primary mt-2">Membership for superfans & safe travellers</h1>
        <p className="text-slate-600 text-sm">Free tier gets you in, Pro unlocks priority pods, early access, and zero convenience fees.</p>
      </div>
      <div className="card-shadow bg-white rounded-3xl p-4 text-sm text-slate-700 space-y-3">
        <p className="font-semibold text-primary">Profile & safety</p>
        <p>Share your preferred teams, languages, and emergency contact to get verified faster.</p>
        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
          <input className="w-full border rounded-md px-3 py-2" placeholder="Name" />
          <input className="w-full border rounded-md px-3 py-2" placeholder="City" />
          <input className="w-full border rounded-md px-3 py-2" placeholder="Emergency contact" />
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold">Save my profile</button>
        </form>
      </div>
    </div>
    <PricingTable />
    <div className="card-shadow bg-primary text-white rounded-3xl p-6 grid md:grid-cols-2 gap-4">
      <div>
        <h2 className="text-2xl font-bold">Why fans choose Pro</h2>
        <ul className="list-disc list-inside text-sm text-slate-100 space-y-1">
          <li>Priority on women-only pods and verified stays.</li>
          <li>Early access to SAARC trips and zero convenience fees on RSVPs.</li>
          <li>Host discounts and curated safety toolkit.</li>
        </ul>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <button className="bg-accent text-primary px-4 py-3 rounded-lg font-semibold">Get CrickX Pass</button>
        <p className="text-xs text-slate-100">Cancel anytime. Prices include GST. We keep your data private.</p>
      </div>
    </div>
  </main>
);
