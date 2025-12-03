import React from 'react';
import { BlogPost } from '../../types';

interface Props {
  post: BlogPost;
}

export const BlogCard: React.FC<Props> = ({ post }) => (
  <div className="card-shadow rounded-2xl bg-white p-4 flex flex-col gap-2">
    <p className="badge bg-orange/10 text-orange uppercase text-xs font-semibold w-fit">{post.category}</p>
    <h3 className="text-lg font-bold text-primary">{post.title}</h3>
    <p className="text-sm text-slate-700">{post.excerpt}</p>
    <p className="text-xs text-slate-500">{post.readTime}</p>
    <button className="mt-auto text-primary font-semibold hover:text-accent">Read post</button>
  </div>
);
