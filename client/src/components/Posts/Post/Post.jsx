import "./Post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="post">
      {/* {post.photo &&  */}
      {/* <img className="postImg" src={post.photo} alt="" /> */}
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="placeholder"
      />
      {/* } */}
      <div className="postInfo">
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.description}Description</p>
      <div className="postCats">
        {post.categories.map((c) => (
          <span key={c} className="postCat">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
