import { usePosts } from "../conttext/PostProvider";

export default function Button() {
  const { isFakeDark, setIsFakeDark } = usePosts();
  return <button onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)} className="btn-fake-dark-mode">
    {isFakeDark ? "☀️" : "🌙"}
  </button>;
}
