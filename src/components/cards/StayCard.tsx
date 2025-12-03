import React from 'react';
import { Stay, Member } from '../../types';
import { members } from '../../data/members';

interface Props {
  stay: Stay;
}

export const StayCard: React.FC<Props> = ({ stay }) => {
  const host: Member | undefined = members.find((m) => m.id === stay.hostId);
  return (
    <div className="card-shadow rounded-2xl bg-white overflow-hidden flex flex-col">
      <div className="h-40 bg-slate-200">
        <img src={stay.images[0]} alt={`${stay.city} stay`} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex-1 flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase text-primary">
          <span className="badge bg-primary/10 text-primary">{stay.city}</span>
          {stay.womenOnly && <span className="badge bg-accent/10 text-accent">Women-only</span>}
          {stay.verificationStatus === 'verified' && <span className="badge bg-accent/10 text-accent">Verified host</span>}
        </div>
        <h3 className="text-lg font-bold text-primary capitalize">{stay.type} · {stay.pax} pax</h3>
        <p className="text-sm text-slate-600">{stay.distanceToStadiumKm} km to stadium</p>
        <p className="text-sm font-semibold text-primary">₹{stay.nightlyRate.toLocaleString('en-IN')} / night</p>
        <p className="text-xs text-slate-600">Host: {host?.name ?? 'CrickX verified fan'}</p>
        <ul className="text-xs text-slate-600 list-disc list-inside space-y-1">
          {stay.rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
        <button className="mt-auto bg-primary text-white px-4 py-2 rounded-lg font-semibold">Request to Book</button>
      </div>
    </div>
  );
};
