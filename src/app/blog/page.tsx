import { getBlogPosts, getTags } from "@/lib/blog";
import { BlogIndexClient } from "./blog-index-client";

export default function BlogIndex() {
  const posts = getBlogPosts();
  const allTags = getTags();
  return <BlogIndexClient posts={posts} allTags={allTags} />;
}
