import React from 'react';
import { cityChapters } from '../data/cityChapters';
import { CityChapterCard } from '../components/cards/CityChapterCard';

export const CityChaptersPage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div>
        <p className="badge bg-primary/10 text-primary">City Chapters</p>
        <h1 className="text-3xl font-bold text-primary mt-2">Join your city’s micro-community</h1>
        <p className="text-slate-600 text-sm">Mumbai, Delhi NCR, Bengaluru, Chennai, Kolkata, Hyderabad, Pune.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {cityChapters.map((chapter) => (
          <CityChapterCard key={chapter.id} chapter={chapter} />
        ))}
      </div>
      <div className="card-shadow bg-white rounded-3xl p-6 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-2">Join a City Chapter</h2>
          <p className="text-sm text-slate-600">Tell us where you live or travel often. We will add you to the nearest pod.</p>
        </div>
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-xs font-semibold text-primary">Full name</label>
            <input className="w-full border rounded-md px-3 py-2" placeholder="Your name" />
          </div>
          <div>
            <label className="text-xs font-semibold text-primary">City</label>
            <input className="w-full border rounded-md px-3 py-2" placeholder="Mumbai, Delhi NCR, Pune..." />
          </div>
          <div>
            <label className="text-xs font-semibold text-primary">WhatsApp number or email</label>
            <input className="w-full border rounded-md px-3 py-2" placeholder="Contact" />
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold">Join Chapter</button>
        </form>
      </div>
    </main>
  );
};
