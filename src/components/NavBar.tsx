import React from 'react';
import { Link } from './SimpleRouter';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Events', path: '/events' },
  { label: 'Trips', path: '/trips' },
  { label: 'Accommodation Sharing', path: '/accommodation' },
  { label: 'City Chapters', path: '/city-chapters' },
  { label: 'Host an Event', path: '/host' },
  { label: 'Membership / CrickX Pass', path: '/membership' },
  { label: 'Community', path: '/community' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

export const NavBar: React.FC = () => {
  return (
    <header className="bg-white sticky top-0 z-40 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-primary text-white grid place-items-center font-bold">CX</div>
          <div>
            <p className="text-lg font-bold text-primary">CrickX Travel</p>
            <p className="text-xs text-slate-500">India’s fan-travel network</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-primary">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="hover:text-accent transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/membership"
            className="bg-accent text-white px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition"
          >
            Join the Fan Tribe
          </Link>
        </div>
      </nav>
      <div className="lg:hidden bg-white border-t px-4 pb-4 grid grid-cols-2 gap-2 text-xs font-semibold text-primary">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className="block py-2 px-3 bg-slate-50 rounded-md hover:bg-accent/10">
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
};
