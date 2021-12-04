import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="" />}
      <div className="postInfo">
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          Jan 1st 1987
          {/* {new Date(post.createdAt).toDateString()} */}
        </span>
      </div>
      <p className="postDesc">{post.desc}Description</p>
      <div className="postCats">
        {post.categories.map((c) => (
          <span className="postCat">{c.name}</span>
        ))}
      </div>
    </div>
  );
}