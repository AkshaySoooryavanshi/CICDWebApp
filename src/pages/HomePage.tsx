import React from 'react';
import { events } from '../data/events';
import { trips } from '../data/trips';
import { stays } from '../data/stays';
import { cityChapters } from '../data/cityChapters';
import { reviews } from '../data/reviews';
import { EventCard } from '../components/cards/EventCard';
import { TripCard } from '../components/cards/TripCard';
import { StayCard } from '../components/cards/StayCard';
import { CityChapterCard } from '../components/cards/CityChapterCard';
import { TestimonialCard } from '../components/cards/TestimonialCard';
import { Link } from '../components/SimpleRouter';

const steps = [
  'Join CrickX for free and pick your teams & city.',
  'Find a Travel Pod—fans going to the same match.',
  'Book group trips, shared stays, and watch parties.',
  'Explore local culture with curated experiences.',
  'Host your own meetup or viewing party.'
];

export const HomePage: React.FC = () => {
  return (
    <main>
      <section className="bg-gradient-to-b from-white to-slate-50 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center pt-12">
          <div className="space-y-6">
            <p className="badge bg-accent/10 text-accent">India’s fan-travel network</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight font-display">
              Join, travel, and celebrate your team
            </h1>
            <p className="text-lg text-slate-700">
              Find match buddies, join city chapters, and explore host cities together—from Dambulla to Dharamsala.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/events" className="bg-primary text-white px-5 py-3 rounded-full font-semibold shadow-md">
                Explore Events
              </Link>
              <Link to="/membership" className="bg-accent text-white px-5 py-3 rounded-full font-semibold shadow-md">
                Join the Fan Tribe
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="badge bg-primary/10 text-primary">Women-first safety</span>
              <span className="badge bg-orange/10 text-orange">Verified hosts</span>
              <span className="badge bg-accent/10 text-accent">Split-payments</span>
            </div>
          </div>
          <div className="relative">
            <div className="card-shadow rounded-3xl overflow-hidden bg-white">
              <img
                src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80"
                alt="Fans celebrating with flags"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-2xl p-4 w-64">
              <p className="text-sm font-semibold text-primary">Travel Pods live now</p>
              <ul className="text-xs text-slate-600 space-y-1 mt-2">
                <li>• Dambulla ODI · Women-first</li>
                <li>• Dharamsala Test · 9 seats left</li>
                <li>• Mumbai South Stand · Free RSVPs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-primary">How it works</h2>
          <span className="text-sm text-slate-500">Safe, friendly, Indian English onboarding</span>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div key={step} className="card-shadow bg-white rounded-xl p-4 flex gap-3">
              <div className="h-10 w-10 rounded-full bg-accent text-white grid place-items-center font-bold">{idx + 1}</div>
              <p className="text-sm text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-primary">Upcoming Events</h2>
            <Link to="/events" className="text-primary font-semibold">View all events</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-primary">Travel Pods (group trips)</h2>
            <p className="text-slate-600 text-sm">
              Small, verified groups (5–12 fans) with split-payments, women-first options, and host support.
            </p>
          </div>
          <Link to="/trips" className="bg-primary text-white px-4 py-2 rounded-full font-semibold">Find a Travel Pod</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-primary">Accommodation Sharing</h2>
              <p className="text-slate-600 text-sm">
                Stay with trusted fans near the stadium. Women-only & family options available. ID-verified hosts.
              </p>
            </div>
            <Link to="/accommodation" className="bg-primary text-white px-4 py-2 rounded-full font-semibold">Browse Stays</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stays.map((stay) => (
              <StayCard key={stay.id} stay={stay} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-primary">City Chapters</h2>
            <p className="text-slate-600 text-sm">
              Micro-communities across metros. Join a WhatsApp/Group and never watch alone.
            </p>
          </div>
          <Link to="/city-chapters" className="bg-primary text-white px-4 py-2 rounded-full font-semibold">Join Your City</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cityChapters.slice(0, 3).map((chapter) => (
            <CityChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-primary">Testimonials</h2>
            <span className="text-sm text-slate-500">From match buddies & safe solo travellers</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="card-shadow rounded-3xl bg-primary text-white p-8 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-3">Ready to join the Fan Tribe?</h2>
            <p className="text-slate-100 mb-4">Sign up for Free or unlock CrickX Pass perks like zero convenience fees, priority pods, and women-only filters.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/membership" className="bg-accent text-primary px-4 py-2 rounded-full font-semibold">Get CrickX Pass</Link>
              <Link to="/events" className="bg-white/10 text-white border border-white px-4 py-2 rounded-full font-semibold">Explore events</Link>
            </div>
          </div>
          <div className="bg-white/10 rounded-2xl p-4 text-sm space-y-2">
            <p className="font-semibold">Code of Conduct & Safety</p>
            <ul className="list-disc list-inside text-slate-100 space-y-1">
              <li>Women-first pods and verified hosts.</li>
              <li>Emergency contact sharing on trip signups.</li>
              <li>Zero-tolerance for harassment or unsafe behaviour.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
