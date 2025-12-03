import { EventItem } from '../types';

// TODO: Replace with API call
export const events: EventItem[] = [
  {
    id: 'evt1',
    title: 'Cricket Match Viewing – Bengaluru Indiranagar',
    city: 'Bengaluru',
    venue: 'Indiranagar Social',
    dateTime: 'Sat 7:00 PM',
    price: '₹299',
    category: 'watch',
    hostId: 'mem1',
    capacity: 50,
    images: ['https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80']
  },
  {
    id: 'evt2',
    title: 'Dambulla Cultural Walk + ODI Trip',
    city: 'Dambulla',
    venue: 'City Centre',
    dateTime: 'Fri - Sun',
    price: 'From ₹18,500',
    category: 'culture',
    hostId: 'mem2',
    capacity: 12,
    images: ['https://images.unsplash.com/photo-1524777312-1aa3c5a78ca7?auto=format&fit=crop&w=900&q=80']
  },
  {
    id: 'evt3',
    title: 'Mumbai South Stand Meetup – Wankhede',
    city: 'Mumbai',
    venue: 'Wankhede Stadium',
    dateTime: 'Sun 4:00 PM',
    price: 'Free RSVP',
    category: 'meetup',
    hostId: 'mem3',
    capacity: 120,
    images: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80']
  },
  {
    id: 'evt4',
    title: 'Chennai Marina Beach Sunrise Run',
    city: 'Chennai',
    venue: 'Marina Beach',
    dateTime: 'Sat 6:00 AM',
    price: '₹199',
    category: 'meetup',
    hostId: 'mem3',
    capacity: 30,
    images: ['https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=900&q=80']
  }
];
