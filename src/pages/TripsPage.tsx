import React from 'react';
import { trips } from '../data/trips';
import { TripCard } from '../components/cards/TripCard';
import { Link } from '../components/SimpleRouter';

export const TripsPage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="badge bg-primary/10 text-primary">Travel Pods</p>
          <h1 className="text-3xl font-bold text-primary mt-2">Group itineraries to matches across India & SAARC</h1>
          <p className="text-slate-600 text-sm">Women-only badges, split-payment friendly, and city captains who meet you at the stadium.</p>
        </div>
        <Link to="/membership" className="bg-accent text-white px-4 py-2 rounded-full font-semibold">Get CrickX Pass for early access</Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </main>
  );
};
