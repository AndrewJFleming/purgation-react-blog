import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

import "./SinglePost.css";

export default function SinglePost() {
  const location = useLocation();
  //Target third piece result of split method (id param)
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {};

  const handleUpdate = async () => {};

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <h1 className="singlePostTitle">
          {title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:&nbsp;
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">{description}</p>
      </div>
    </div>
  );
}
