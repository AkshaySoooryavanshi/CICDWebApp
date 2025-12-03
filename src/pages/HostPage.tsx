import React from 'react';

export const HostPage: React.FC = () => (
  <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <div>
      <p className="badge bg-orange/10 text-orange">Host an event</p>
      <h1 className="text-3xl font-bold text-primary mt-2">List a viewing party, walking tour, or fan meetup</h1>
      <p className="text-slate-600 text-sm">We promote it, you set the vibe. Women-first conduct and transparent pricing.</p>
    </div>
    <div className="card-shadow bg-white rounded-3xl p-6">
      <h2 className="text-xl font-bold text-primary mb-3">Guidelines</h2>
      <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
        <li>Respect the code of conduct—zero tolerance for harassment.</li>
        <li>Brief your venue on women-first safety and emergency exits.</li>
        <li>Share transparent ticket pricing and any cover charges.</li>
        <li>Encourage pods to travel together from metro/bus stops.</li>
      </ul>
    </div>
    <div className="card-shadow bg-white rounded-3xl p-6">
      <h2 className="text-xl font-bold text-primary mb-4">Host form</h2>
      <form className="grid md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
        <label className="flex flex-col text-sm text-primary font-semibold">Name
          <input className="mt-1 border rounded-md px-3 py-2" placeholder="Your name" />
        </label>
        <label className="flex flex-col text-sm text-primary font-semibold">Contact
          <input className="mt-1 border rounded-md px-3 py-2" placeholder="WhatsApp or email" />
        </label>
        <label className="flex flex-col text-sm text-primary font-semibold">City
          <input className="mt-1 border rounded-md px-3 py-2" placeholder="City" />
        </label>
        <label className="flex flex-col text-sm text-primary font-semibold">Venue
          <input className="mt-1 border rounded-md px-3 py-2" placeholder="Venue name" />
        </label>
        <label className="flex flex-col text-sm text-primary font-semibold">Date & time
          <input className="mt-1 border rounded-md px-3 py-2" placeholder="e.g. Sun 7 PM" />
        </label>
        <label className="flex flex-col text-sm text-primary font-semibold">Event type
          <input className="mt-1 border rounded-md px-3 py-2" placeholder="Watch party / meetup / walk" />
        </label>
        <label className="flex flex-col text-sm text-primary font-semibold">Expected size
          <input className="mt-1 border rounded-md px-3 py-2" placeholder="Number of guests" />
        </label>
        <label className="flex flex-col text-sm text-primary font-semibold">Women-only?
          <select className="mt-1 border rounded-md px-3 py-2">
            <option>Yes</option>
            <option>No</option>
          </select>
        </label>
        <label className="flex flex-col text-sm text-primary font-semibold md:col-span-2">Description
          <textarea className="mt-1 border rounded-md px-3 py-2" placeholder="Tell fans about your event" />
        </label>
        <label className="flex flex-col text-sm text-primary font-semibold">Cover charge (if any)
          <input className="mt-1 border rounded-md px-3 py-2" placeholder="₹499" />
        </label>
        <label className="flex flex-col text-sm text-primary font-semibold">Emergency contact on-site
          <input className="mt-1 border rounded-md px-3 py-2" placeholder="Name & phone" />
        </label>
        <div className="md:col-span-2 flex gap-3">
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold">Become a Host</button>
          <button className="border border-primary text-primary px-4 py-2 rounded-lg font-semibold">View host tips</button>
        </div>
      </form>
    </div>
  </main>
);
