import React from 'react';

interface Tier {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

const tiers: Tier[] = [
  {
    name: 'Free',
    price: '₹0',
    features: ['Join groups', 'RSVP events', 'Basic chat']
  },
  {
    name: 'Pro',
    price: '₹199 / month or ₹1,499 / year',
    features: ['Early access to trips', 'Zero convenience fee on events', 'Priority pods', 'Women-only filters', 'Host discounts', 'Trip insurance offers'],
    highlight: true
  }
];

export const PricingTable: React.FC = () => (
  <div className="grid md:grid-cols-2 gap-6">
    {tiers.map((tier) => (
      <div
        key={tier.name}
        className={`card-shadow rounded-2xl p-6 bg-white flex flex-col gap-4 border ${tier.highlight ? 'border-accent' : 'border-transparent'}`}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-primary">{tier.name}</h3>
          {tier.highlight && <span className="badge bg-accent/10 text-accent">Most loved</span>}
        </div>
        <p className="text-2xl font-bold text-primary">{tier.price}</p>
        <ul className="space-y-2 text-sm text-slate-700">
          {tier.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
        <button className={`mt-auto px-4 py-2 rounded-lg font-semibold ${tier.highlight ? 'bg-accent text-white' : 'bg-primary text-white'}`}>
          Get CrickX Pass
        </button>
      </div>
    ))}
  </div>
);
