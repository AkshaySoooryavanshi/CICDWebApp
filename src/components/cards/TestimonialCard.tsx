import React from 'react';
import { Review, Member } from '../../types';
import { members } from '../../data/members';

interface Props {
  review: Review;
}

export const TestimonialCard: React.FC<Props> = ({ review }) => {
  const member: Member | undefined = members.find((m) => m.id === review.memberId);
  return (
    <div className="card-shadow rounded-2xl bg-white p-4 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primary text-white grid place-items-center font-bold">
          {member?.name.charAt(0) ?? 'F'}
        </div>
        <div>
          <p className="font-semibold text-primary">{member?.name ?? 'Fan traveller'}</p>
          {member?.verified && <span className="badge bg-accent/10 text-accent">Verified member</span>}
        </div>
      </div>
      <p className="text-slate-700 text-sm">“{review.text}”</p>
      <p className="text-xs text-orange font-semibold">Rated {review.rating}/5</p>
    </div>
  );
};
