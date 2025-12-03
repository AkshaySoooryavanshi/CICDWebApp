import React from 'react';
import { Trip } from '../../types';
import { Link } from '../SimpleRouter';

interface Props {
  trip: Trip;
}

export const TripCard: React.FC<Props> = ({ trip }) => {
  return (
    <div className="card-shadow rounded-2xl bg-white overflow-hidden flex flex-col">
      <div className="h-44 bg-slate-200">
        <img src={trip.images[0]} alt={`${trip.title} cover`} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex-1 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase text-primary">
          <span className="badge bg-primary/10 text-primary">{trip.city}</span>
          {trip.womenOnly && <span className="badge bg-accent/10 text-accent">Women-only pod</span>}
          {trip.status === 'waitlist' && <span className="badge bg-orange/10 text-orange">Waitlist</span>}
        </div>
        <h3 className="text-lg font-bold text-primary">{trip.title}</h3>
        <p className="text-sm text-slate-600">{trip.stadium} · {trip.startDate} to {trip.endDate}</p>
        <p className="text-sm font-semibold text-primary">From ₹{trip.priceFrom.toLocaleString('en-IN')} · {trip.seatsLeft} seats left</p>
        <p className="text-sm text-slate-600 line-clamp-2">{trip.itinerary[0]}</p>
        <div className="mt-auto flex gap-2">
          <Link to={`/trips/${trip.id}`} className="bg-primary text-white px-4 py-2 rounded-lg font-semibold">View Trip</Link>
          <button className="border border-primary text-primary px-4 py-2 rounded-lg font-semibold">Split with friends</button>
        </div>
      </div>
    </div>
  );
};
