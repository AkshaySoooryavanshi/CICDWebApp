import { Trip } from '../types';

// TODO: Replace with API call
export const trips: Trip[] = [
  {
    id: 'trip1',
    title: 'Delhi Test Match Weekend',
    city: 'Delhi NCR',
    country: 'India',
    stadium: 'Arun Jaitley Stadium',
    startDate: '2025-01-12',
    endDate: '2025-01-14',
    priceFrom: 12499,
    seatsLeft: 7,
    womenOnly: false,
    itinerary: ['Day 1: Arrival + Old Delhi food walk', 'Day 2: Match day South Stand', 'Day 3: Qutub brunch + departures'],
    inclusions: ['Match ticket', 'City captain support', 'Metro cards', 'Welcome dinner'],
    exclusions: ['Flights', 'Personal expenses'],
    images: ['https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&w=900&q=80'],
    status: 'open'
  },
  {
    id: 'trip2',
    title: 'Dambulla ODI + Sigiriya sunset',
    city: 'Dambulla',
    country: 'Sri Lanka',
    stadium: 'Rangiri Dambulla International',
    startDate: '2025-02-05',
    endDate: '2025-02-09',
    priceFrom: 18500,
    seatsLeft: 4,
    womenOnly: true,
    itinerary: ['Day 1: Colombo arrivals + train to Dambulla', 'Day 2: Match day + fan march', 'Day 3: Sigiriya hike + sunset', 'Day 4: Local food crawl'],
    inclusions: ['Ground transfers', 'Hostel stay', 'Breakfast', 'Fan merch kit'],
    exclusions: ['Flights/visas', 'Lunch & dinner'],
    images: ['https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'],
    status: 'open'
  },
  {
    id: 'trip3',
    title: 'Mumbai Wankhede Night Game',
    city: 'Mumbai',
    country: 'India',
    stadium: 'Wankhede Stadium',
    startDate: '2025-03-20',
    endDate: '2025-03-22',
    priceFrom: 9999,
    seatsLeft: 0,
    womenOnly: false,
    itinerary: ['Day 1: Colaba food walk', 'Day 2: Match night + Marine Drive stroll', 'Day 3: Checkout'],
    inclusions: ['Match ticket', 'Shared stays', 'After-party entry'],
    exclusions: ['Flights'],
    images: ['https://images.unsplash.com/photo-1515165562835-c4c79004f3c4?auto=format&fit=crop&w=900&q=80'],
    status: 'waitlist'
  }
];
