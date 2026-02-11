"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blogs";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function BlogClient() {
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-3">
            Beauty Journal
          </h1>
          <p className="text-muted-foreground">
            Tips, trends, and insights from our experts
          </p>
        </motion.div>

        {/* ================= BLOG GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/blog/${post.id}`} className="block group">
                <div className="glass-card overflow-hidden hover-lift">

                  {/* Gradient Cover */}
                  <div
                    className="aspect-[16/10]"
                    style={{ background: post.gradient }}
                  />

                  {/* Content */}
                  <div className="p-5">

                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                        {post.category}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-1 mt-4 text-xs font-medium text-primary">
                      Read More
                      <ArrowRight className="h-3 w-3" />
                    </div>

                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}