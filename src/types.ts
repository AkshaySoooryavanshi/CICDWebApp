export interface Member {
  id: string;
  name: string;
  teamPreferences: string[];
  city: string;
  verified: boolean;
  women: boolean;
  languages: string[];
  emergencyContact: string;
}

export interface EventItem {
  id: string;
  title: string;
  city: string;
  venue: string;
  dateTime: string;
  price: string;
  category: 'watch' | 'meetup' | 'culture';
  hostId: string;
  capacity: number;
  images: string[];
}

export interface Trip {
  id: string;
  title: string;
  city: string;
  country: string;
  stadium: string;
  startDate: string;
  endDate: string;
  priceFrom: number;
  seatsLeft: number;
  womenOnly: boolean;
  itinerary: string[];
  inclusions: string[];
  exclusions: string[];
  images: string[];
  status: 'open' | 'waitlist' | 'closed';
}

export interface Stay {
  id: string;
  hostId: string;
  city: string;
  distanceToStadiumKm: number;
  type: 'hostel' | 'homestay' | 'apartment';
  pax: number;
  womenOnly: boolean;
  nightlyRate: number;
  rules: string[];
  images: string[];
  verificationStatus: 'verified' | 'pending';
}

export interface CityChapter {
  id: string;
  city: string;
  captainName: string;
  whatsappLink: string;
  nextMeetupDate: string;
  featuredBars: string[];
  coverImage: string;
}

export interface Review {
  id: string;
  memberId: string;
  itemType: 'trip' | 'event' | 'stay';
  rating: number;
  text: string;
  images?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
}
