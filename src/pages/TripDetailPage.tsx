import React from 'react';
import { trips } from '../data/trips';
import { Trip } from '../types';

interface Props {
  tripId: string;
}

export const TripDetailPage: React.FC<Props> = ({ tripId }) => {
  const trip: Trip | undefined = trips.find((t) => t.id === tripId);

  if (!trip) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-primary font-semibold">Trip not found. Please head back to the trips page.</p>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="badge bg-primary/10 text-primary">{trip.city}, {trip.country}</p>
          <h1 className="text-3xl font-bold text-primary mt-2">{trip.title}</h1>
          <p className="text-slate-600 text-sm">{trip.startDate} to {trip.endDate} · {trip.stadium}</p>
        </div>
        <div className="flex flex-col gap-2 text-right">
          <p className="text-lg font-bold text-primary">From ₹{trip.priceFrom.toLocaleString('en-IN')}</p>
          <p className="text-sm text-slate-600">{trip.seatsLeft} seats left</p>
          {trip.womenOnly && <span className="badge bg-accent/10 text-accent">Women-only pod</span>}
          {trip.status === 'waitlist' && <span className="badge bg-orange/10 text-orange">Waitlist</span>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card-shadow bg-white rounded-2xl overflow-hidden">
          <img src={trip.images[0]} alt={trip.title} className="w-full h-full object-cover" />
        </div>
        <div className="card-shadow bg-white rounded-2xl p-6 space-y-3 text-sm text-slate-700">
          <p className="font-semibold text-primary">Book with your pod</p>
          <p>Split with friends and pay together on the app.</p>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs font-semibold text-primary">Full name</label>
              <input className="w-full border rounded-md px-3 py-2" placeholder="Enter your name" />
            </div>
            <div>
              <label className="text-xs font-semibold text-primary">WhatsApp number</label>
              <input className="w-full border rounded-md px-3 py-2" placeholder="e.g. +91 98xxxxxx" />
            </div>
            <div>
              <label className="text-xs font-semibold text-primary">Emergency contact</label>
              <input className="w-full border rounded-md px-3 py-2" placeholder="Friend/parent contact" />
            </div>
            <div>
              <label className="text-xs font-semibold text-primary">Preferences</label>
              <textarea className="w-full border rounded-md px-3 py-2" placeholder="Share women-only pod request, roommate prefs, etc." />
            </div>
            <div className="flex gap-2">
              <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold">Book Now</button>
              <button className="border border-primary text-primary px-4 py-2 rounded-lg font-semibold">Split with Friends</button>
            </div>
          </form>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card-shadow bg-white rounded-2xl p-4">
          <h3 className="text-lg font-bold text-primary mb-2">Itinerary</h3>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            {trip.itinerary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card-shadow bg-white rounded-2xl p-4">
          <h3 className="text-lg font-bold text-primary mb-2">Inclusions</h3>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            {trip.inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card-shadow bg-white rounded-2xl p-4">
          <h3 className="text-lg font-bold text-primary mb-2">Exclusions</h3>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            {trip.exclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};
