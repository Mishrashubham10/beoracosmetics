'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number | string;
  title: string;
  content: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  gradient: string;
}

interface Props {
  post: BlogPost;
}

export function BlogDetailClient({ post }: Props) {
  return (
    <div className="section-padding">
      <div className="max-w-3xl mx-auto">
        {/* =========== BACK-LINK =========== */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* =========== COVER =========== */}
          <div
            className="aspect-2/1 rounded-2xl overflow-hidden mb-8"
            style={{ background: post.gradient }}
          />

          {/* =========== META =========== */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium text-xs">
              {post.category}
            </span>

            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>

            <span className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" />
              {post.author}
            </span>

            <span>{post.date}</span>
          </div>

          {/* =========== TITLE =========== */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">{post.title}</h1>

          {/* =========== CONTEXT =========== */}
          <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
            {post.content}
          </p>
        </motion.div>
      </div>
    </div>
  );
}