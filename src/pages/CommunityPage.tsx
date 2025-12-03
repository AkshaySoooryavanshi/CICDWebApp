import React from 'react';

const groups = [
  'Team India Fans',
  'CSK',
  'RCB',
  'Mumbai Indians',
  'Women Travelers',
  'Remote Workers'
];

export const CommunityPage: React.FC = () => (
  <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
    <div>
      <p className="badge bg-primary/10 text-primary">Community</p>
      <h1 className="text-3xl font-bold text-primary mt-2">Forum-style groups for every fandom</h1>
      <p className="text-slate-600 text-sm">Join team rooms, women-first circles, and remote worker threads.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-4">
      {groups.map((group) => (
        <div key={group} className="card-shadow bg-white rounded-2xl p-4 flex flex-col gap-2">
          <p className="text-lg font-bold text-primary">{group}</p>
          <p className="text-sm text-slate-700">Chat, plan pods, and drop questions before your next away match.</p>
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold">Open Group</button>
        </div>
      ))}
    </div>
  </main>
);
