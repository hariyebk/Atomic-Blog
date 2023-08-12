import { usePosts } from "../conttext/PostProvider";



export function Results() {
  const { posts } = usePosts();
  return <p>🚀 {posts.length} atomic posts found</p>;
}
