import React from 'react';

export const ContactPage: React.FC = () => (
  <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
    <div>
      <p className="badge bg-primary/10 text-primary">Contact</p>
      <h1 className="text-3xl font-bold text-primary mt-2">Chat with the CrickX crew</h1>
      <p className="text-slate-600 text-sm">We’re quick on WhatsApp on event days. Drop your query and emergency contact if urgent.</p>
    </div>
    <form className="card-shadow bg-white rounded-3xl p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
      <label className="flex flex-col text-sm text-primary font-semibold">Name
        <input className="mt-1 border rounded-md px-3 py-2" placeholder="Your name" />
      </label>
      <label className="flex flex-col text-sm text-primary font-semibold">Email
        <input className="mt-1 border rounded-md px-3 py-2" placeholder="you@example.com" />
      </label>
      <label className="flex flex-col text-sm text-primary font-semibold">City
        <input className="mt-1 border rounded-md px-3 py-2" placeholder="City" />
      </label>
      <label className="flex flex-col text-sm text-primary font-semibold">Message
        <textarea className="mt-1 border rounded-md px-3 py-2" placeholder="How can we help?" />
      </label>
      <div className="flex gap-3">
        <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold">Send</button>
        <a href="#whatsapp" className="bg-accent text-white px-4 py-2 rounded-lg font-semibold">Chat on WhatsApp</a>
      </div>
    </form>
  </main>
);
