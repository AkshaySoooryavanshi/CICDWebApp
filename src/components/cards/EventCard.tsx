import React from 'react';
import { EventItem, Member } from '../../types';
import { members } from '../../data/members';

interface Props {
  event: EventItem;
}

export const EventCard: React.FC<Props> = ({ event }) => {
  const host: Member | undefined = members.find((m) => m.id === event.hostId);
  return (
    <div className="card-shadow rounded-2xl bg-white overflow-hidden flex flex-col">
      <div className="h-40 bg-slate-200">
        <img src={event.images[0]} alt={`${event.title} cover`} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex-1 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase text-orange">
          <span className="badge bg-orange/10 text-orange">{event.category}</span>
          <span className="badge bg-primary/10 text-primary">{event.city}</span>
        </div>
        <h3 className="text-lg font-bold text-primary">{event.title}</h3>
        <p className="text-sm text-slate-600">{event.venue} · {event.dateTime}</p>
        <p className="text-sm font-semibold text-primary">{event.price}</p>
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <span>Hosted by {host?.name ?? 'Verified fan'}</span>
          {host?.verified && <span className="badge bg-accent/10 text-accent">Verified host</span>}
        </div>
        <button className="mt-auto bg-primary text-white px-4 py-2 rounded-lg font-semibold">RSVP</button>
      </div>
    </div>
  );
};
