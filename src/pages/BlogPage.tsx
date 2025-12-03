import React from 'react';
import { blogPosts } from '../data/blogPosts';
import { BlogCard } from '../components/cards/BlogCard';

export const BlogPage: React.FC = () => (
  <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
    <div>
      <p className="badge bg-orange/10 text-orange">Blog</p>
      <h1 className="text-3xl font-bold text-primary mt-2">City guides, match travel playbooks, and safety lists</h1>
      <p className="text-slate-600 text-sm">Curated for Indian fans heading to IPL, Team India tours, and SAARC fixtures.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  </main>
);
