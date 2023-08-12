import { usePosts } from "../conttext/PostProvider";



export function SearchPosts() {
  // usePosts returns the value that is inside the context provider component.
  const { searchQuery, setSearchQuery } = usePosts();
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..." />
  );
}
