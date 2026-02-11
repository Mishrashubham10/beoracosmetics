import { Suspense } from 'react';
import { BlogClient } from './_BlogClient';

export default function BlogPage() {
  return (
    <Suspense
      fallback={<div className="p-10 text-center">Loading blogs...</div>}
    >
      <BlogClient />
    </Suspense>
  );
}