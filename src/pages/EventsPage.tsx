import React, { useState } from 'react';
import { events } from '../data/events';
import { EventCard } from '../components/cards/EventCard';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'watch', label: 'Watch Parties' },
  { key: 'meetup', label: 'Meet-ups' },
  { key: 'culture', label: 'Cultural Experiences' }
];

export const EventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const filtered = selectedCategory === 'all' ? events : events.filter((evt) => evt.category === selectedCategory);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <p className="badge bg-accent/10 text-accent">Events</p>
          <h1 className="text-3xl font-bold text-primary mt-2">Find a watch party, meetup, or culture drop</h1>
          <p className="text-slate-600 text-sm">Filter by vibe and city. All hosts are briefed on women-first safety.</p>
        </div>
        <div className="flex gap-2 overflow-auto">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`px-4 py-2 rounded-full border font-semibold text-sm whitespace-nowrap ${
                selectedCategory === cat.key ? 'bg-primary text-white border-primary' : 'bg-white text-primary'
              }`}
              onClick={() => setSelectedCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((evt) => (
          <EventCard key={evt.id} event={evt} />
        ))}
      </div>
    </main>
  );
};
