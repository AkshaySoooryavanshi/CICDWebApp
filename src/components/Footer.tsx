import React from 'react';
import { Link } from './SimpleRouter';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">CrickX Travel</h3>
          <p className="text-sm text-slate-100">India’s fan-travel network: small groups, big moments.</p>
          <p className="text-sm mt-3">Community guidelines · Women-first safety · Verified hosts · 24×7 chat support on event days</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold mb-2">Explore</p>
            <ul className="space-y-1">
              <li><Link to="/events" className="hover:text-accent">Events</Link></li>
              <li><Link to="/trips" className="hover:text-accent">Trips</Link></li>
              <li><Link to="/accommodation" className="hover:text-accent">Stays</Link></li>
              <li><Link to="/city-chapters" className="hover:text-accent">City Chapters</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Company</p>
            <ul className="space-y-1">
              <li><Link to="/about" className="hover:text-accent">About</Link></li>
              <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
              <li><Link to="/host" className="hover:text-accent">Host an Event</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-sm space-y-3">
          <p className="font-semibold">Stay in the loop</p>
          <p>Sign up for match alerts, pods, and women-only drops.</p>
          <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              aria-label="Email for updates"
              className="rounded-md px-3 py-2 text-primary flex-1"
              placeholder="Email or WhatsApp number"
            />
            <button className="bg-accent px-4 py-2 rounded-md font-semibold">Notify me</button>
          </form>
        </div>
      </div>
      <div className="bg-primary/80 text-center text-xs py-4">© {new Date().getFullYear()} CrickX Travel. Crafted for cricket lovers everywhere.</div>
    </footer>
  );
};
