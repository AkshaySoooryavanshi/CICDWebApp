import React from 'react';
import { stays } from '../data/stays';
import { StayCard } from '../components/cards/StayCard';

export const AccommodationPage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
      <div>
        <p className="badge bg-orange/10 text-orange">Accommodation sharing</p>
        <h1 className="text-3xl font-bold text-primary mt-2">Trusted shared stays near stadiums</h1>
        <p className="text-slate-600 text-sm">Women-only & family options, ID-verified hosts, and house rules upfront.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stays.map((stay) => (
          <StayCard key={stay.id} stay={stay} />
        ))}
      </div>
    </main>
  );
};
