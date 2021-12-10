import Post from "./Post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.length ? (
        posts.map((p) => <Post key={p._id} post={p} />)
      ) : (
        <div className="noResultsWrapper">
          <p className="noResults">No results for that search.</p>
        </div>
      )}
    </div>
  );
}
