import React, { useEffect, useMemo } from 'react';
import './index.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { SimpleRouter, RouteItem } from './components/SimpleRouter';
import { HomePage } from './pages/HomePage';
import { EventsPage } from './pages/EventsPage';
import { TripsPage } from './pages/TripsPage';
import { TripDetailPage } from './pages/TripDetailPage';
import { AccommodationPage } from './pages/AccommodationPage';
import { CityChaptersPage } from './pages/CityChaptersPage';
import { HostPage } from './pages/HostPage';
import { MembershipPage } from './pages/MembershipPage';
import { CommunityPage } from './pages/CommunityPage';
import { BlogPage } from './pages/BlogPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { trips } from './data/trips';

const App: React.FC = () => {
  const tripRoutes = useMemo<RouteItem[]>(
    () =>
      trips.map((trip) => ({
        path: `/trips/${trip.id}`,
        element: <TripDetailPage tripId={trip.id} />
      })),
    []
  );

  const routes: RouteItem[] = [
    { path: '/', element: <HomePage /> },
    { path: '/events', element: <EventsPage /> },
    { path: '/trips', element: <TripsPage /> },
    ...tripRoutes,
    { path: '/accommodation', element: <AccommodationPage /> },
    { path: '/city-chapters', element: <CityChaptersPage /> },
    { path: '/host', element: <HostPage /> },
    { path: '/membership', element: <MembershipPage /> },
    { path: '/community', element: <CommunityPage /> },
    { path: '/blog', element: <BlogPage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/contact', element: <ContactPage /> }
  ];

  const currentTitle = 'CrickX Travel | India’s fan-travel network';
  const currentDescription = 'Join match buddies, plan group trips, and find safe accommodation near stadiums across India and SAARC.';

  useEffect(() => {
    document.title = currentTitle;
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute('content', currentDescription);
    }
  }, [currentTitle, currentDescription]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1">
        <SimpleRouter routes={routes} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
