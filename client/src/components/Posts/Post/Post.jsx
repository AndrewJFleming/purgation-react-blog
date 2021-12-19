import "./Post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="post">
      {/* {post.photo &&  */}
      {/* <img className="postImg" src={post.photo} alt="" /> */}
      <img className="postImg" src={post.photo} alt="placeholder" />
      {/* } */}
      <div>
        <Link to={`/post/${post._id}`} className="link">
          <h4 className="serifTitle">{post.title}</h4>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.description}</p>
      <div className="postCats">
        {post.categories.map((c) => (
          <span key={c} className="postCat">
            <Link to={`/?cat=${c}`} className="link ">
              {c}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}
