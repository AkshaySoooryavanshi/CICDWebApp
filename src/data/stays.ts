import { Stay } from '../types';

// TODO: Replace with API call
export const stays: Stay[] = [
  {
    id: 'stay1',
    hostId: 'mem2',
    city: 'Mumbai',
    distanceToStadiumKm: 1.2,
    type: 'apartment',
    pax: 4,
    womenOnly: false,
    nightlyRate: 3200,
    rules: ['No smoking', 'ID mandatory', 'Quiet hours 11 PM'],
    images: ['https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80'],
    verificationStatus: 'verified'
  },
  {
    id: 'stay2',
    hostId: 'mem1',
    city: 'Bengaluru',
    distanceToStadiumKm: 2.8,
    type: 'hostel',
    pax: 6,
    womenOnly: true,
    nightlyRate: 1400,
    rules: ['Women-only dorm', 'Locker provided', 'Breakfast included'],
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'],
    verificationStatus: 'verified'
  },
  {
    id: 'stay3',
    hostId: 'mem3',
    city: 'Delhi NCR',
    distanceToStadiumKm: 3.5,
    type: 'homestay',
    pax: 3,
    womenOnly: false,
    nightlyRate: 2100,
    rules: ['Family stay', 'Home-cooked breakfast', 'No late-night parties'],
    images: ['https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80'],
    verificationStatus: 'pending'
  }
];
