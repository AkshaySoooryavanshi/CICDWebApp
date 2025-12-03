import React from 'react';

export const AboutPage: React.FC = () => (
  <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <div>
      <p className="badge bg-primary/10 text-primary">About</p>
      <h1 className="text-3xl font-bold text-primary mt-2">Building safer, louder fan travel</h1>
      <p className="text-slate-600 text-sm">CrickX Travel makes match travel and fandom more social, affordable, and safe.</p>
    </div>
    <div className="card-shadow bg-white rounded-3xl p-6 space-y-3 text-slate-700 text-sm">
      <h2 className="text-xl font-bold text-primary">Mission</h2>
      <p>Connect cricket lovers so they never watch alone—whether in their city or on a cross-border tour.</p>
      <h2 className="text-xl font-bold text-primary">Safety</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Women-first pods and verified hosts.</li>
        <li>Emergency contact system and city captains on call during events.</li>
        <li>Zero-tolerance policy for harassment and unsafe behaviour.</li>
      </ul>
      <h2 className="text-xl font-bold text-primary">Where we operate</h2>
      <p>Across India metros and SAARC cities: Dambulla, Colombo, Dhaka, Dubai, and more.</p>
    </div>
  </main>
);
