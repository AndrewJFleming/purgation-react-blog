import { Link } from "react-router-dom";

import Post from "./Post/Post";
import "./Posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.length ? (
        posts.map((p) => <Post key={p._id} post={p} />)
      ) : (
        <div className="noResults">
          <p>No results for that search:</p>
          <Link to={"/"} className="link">
            <span>Return to homepage</span>
          </Link>
        </div>
      )}
    </div>
  );
}
