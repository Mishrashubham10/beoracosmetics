import { BlogDetailClient } from './__BlogDetailClient';
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogs";

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {

  // ✅ unwrap params
  const { id } = await params;

  const post = blogPosts.find(
    (p) => String(p.id) === id
  );

  console.log("ID:", id);

  if (!post) return notFound();

  return <BlogDetailClient post={post} />;
}