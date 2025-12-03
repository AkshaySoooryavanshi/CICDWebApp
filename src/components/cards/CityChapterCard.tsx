import React from 'react';
import { CityChapter } from '../../types';

interface Props {
  chapter: CityChapter;
}

export const CityChapterCard: React.FC<Props> = ({ chapter }) => (
  <div className="card-shadow rounded-2xl bg-white overflow-hidden flex flex-col">
    <div className="h-40 bg-slate-200">
      <img src={chapter.coverImage} alt={`${chapter.city} skyline`} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 flex-1 flex flex-col gap-2">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase text-primary">
        <span className="badge bg-primary/10 text-primary">{chapter.city}</span>
      </div>
      <h3 className="text-lg font-bold text-primary">Captain {chapter.captainName}</h3>
      <p className="text-sm text-slate-600">Next meetup: {chapter.nextMeetupDate}</p>
      <p className="text-xs text-slate-600">Featured bars: {chapter.featuredBars.join(', ')}</p>
      <button className="mt-auto bg-accent text-white px-4 py-2 rounded-lg font-semibold">Join WhatsApp Group</button>
    </div>
  </div>
);
