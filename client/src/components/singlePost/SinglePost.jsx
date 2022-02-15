import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import FileBase from "react-file-base64";

import "./SinglePost.css";
import { Context } from "../../shared/context/Context";
import { ErrorPrompt } from "../../shared/components/ErrorPrompt/ErrorPrompt";
import { AddCategories } from "../../shared/components/AddCategories/AddCategories";
import { CheckFeatured } from "../../shared/components/CheckFeatured/CheckFeatured";
export default function SinglePost() {
  const location = useLocation();
  //Target third piece result of split method (id param)
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [newPhoto, setNewPhoto] = useState("");
  const [categories, setCategories] = useState([]);
  const [featured, setFeatured] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [error, setError] = useState(false);
  const { user } = useContext(Context);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(process.env.REACT_APP_SERVER_URL + "/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description);
      setPhoto(res.data.photo);
      setCategories(res.data.categories);
      setFeatured(res.data.featured);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    setError(false);
    try {
      //Unlike axios.post/axios.put, 2nd axios.delete param options, not the req body.
      //To send a req body with DELETE req, use the data option.
      await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${post._id}`, {
        data: { username: user.username },
      });
      //Redirect to the homepage if delete was successful
      window.location.replace("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const handleUpdate = async () => {
    setError(false);
    try {
      await axios.put(`${process.env.REACT_APP_SERVER_URL}/posts/${post._id}`, {
        username: user.username,
        title,
        description,
        categories,
        featured,
        photo: newPhoto.image,
      });
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const handleCancel = () => {
    setUpdateMode(false);
  };

  return (
    <div className="singlePostWrapper">
      {newPhoto ? (
        <img className="singlePostImg" src={newPhoto.image} alt={title} />
      ) : photo ? (
        <img className="singlePostImg" src={photo} alt={title} />
      ) : (
        <span />
      )}
      {updateMode ? (
        <React.Fragment>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setNewPhoto({ ...newPhoto, image: base64 })}
          />
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        </React.Fragment>
      ) : (
        <h2 className="serifTitle text-center">
          {title}
          {post.username === user?.username && (
            <div className="singlePostEdit">
              <i
                className="singlePostIcon far fa-edit"
                onClick={() => setUpdateMode(true)}
              ></i>
              <i
                className="singlePostIcon far fa-trash-alt"
                onClick={handleDelete}
              ></i>
            </div>
          )}
        </h2>
      )}
      <div className="singlePostInfo">
        <span>
          Author:&nbsp;
          <b className="singlePostAuthor">
            <Link className="link" to={`/?user=${post.username}`}>
              {post.username}
            </Link>
          </b>
        </span>
        <span>{new Date(post.createdAt).toDateString()}</span>
      </div>
      {updateMode ? (
        <React.Fragment>
          <textarea
            className="singlePostDescInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <AddCategories
            categories={categories}
            setCategories={setCategories}
          />
          <CheckFeatured featured={featured} setFeatured={setFeatured} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p className="singlePostDesc">{description}</p>
          <div className="singlePostFeat">
            {featured ? (
              <span>
                <i class="fas fa-check featIcon"></i>
                Featured
              </span>
            ) : (
              <span>
                <i class="fas fa-minus featIcon"></i>
                Not Featured
              </span>
            )}
          </div>
          <div className="singlePostCats">
            {categories.map((c) => (
              <span key={c} className="singlePostCat">
                <Link to={`/?cat=${c}`} className="link">
                  {c}
                </Link>
              </span>
            ))}
          </div>
        </React.Fragment>
      )}
      {updateMode && (
        <div className="singlePostButtons">
          <button className="buttonSuccess" onClick={handleCancel}>
            Cancel
          </button>
          <button className="buttonSuccess" onClick={handleUpdate}>
            Update
          </button>
        </div>
      )}
      {error && <ErrorPrompt />}
    </div>
  );
}
