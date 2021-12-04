import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {}, []);

  const handleDelete = async () => {};

  const handleUpdate = async () => {};

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" />
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {/* {new Date(post.createdAt).toDateString()} */}
          </span>
        </div>
      </div>
    </div>
  );
}
