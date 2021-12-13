import { useContext, useState } from "react";
import axios from "axios";

import "./Write.css";
import { Context } from "../../shared/context/Context";
import { ErrorPrompt } from "../../shared/components/ErrorPrompt/ErrorPrompt";

export default function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState(null);
  const [existsPrompt, setExistsPrompt] = useState(false);
  const [error, setError] = useState(false);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    const newPost = {
      username: user.username,
      title,
      description,
      categories,
    };
    //Image upload logic
    try {
      const res = await axios.post("/posts", newPost);
      //Redirect to single post page with respective id
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const handlePush = () => {
    const exists = categories.includes(newCategory);
    if (!exists && newCategory) {
      setCategories((categories) => [...categories, newCategory]);
      setNewCategory("");
    } else if (!newCategory) {
      console.log("blank");
    } else {
      setExistsPrompt(true);
      setTimeout(() => {
        setExistsPrompt(false);
      }, 2000);
      setNewCategory("");
    }
  };

  const handleDelete = (targetCat) => {
    const newArray = categories.filter((item) => item !== targetCat);
    setCategories(newArray);
  };

  return (
    <div className="write">
      <div className="writeImgWrapper">
        <img
          className="writeImg"
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <h3>Post Image</h3>
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          {/* Complete file upload functionality */}
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => {}}
          />
        </div>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="writeFormGroup">
          <h3>Categories</h3>
          <div className="addCatWrapper">
            <div className="addCatLeft">
              <input
                type="text"
                placeholder="Category name"
                className="addCatInput"
                value={newCategory}
                autoFocus={true}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <span className="addCat" onClick={() => handlePush(newCategory)}>
                Add
              </span>
              {existsPrompt && (
                <p className="existsPrompt">Already exists...</p>
              )}
            </div>
            <div className="addCatRight">
              <ul className="catList">
                <h5>Categories to be added:</h5>
                {categories.length ? (
                  categories.map((cat) => (
                    <li>
                      <i
                        className="writeCatIcon far fa-trash-alt"
                        onClick={() => handleDelete(cat)}
                      ></i>
                      <label>{cat}</label>
                    </li>
                  ))
                ) : (
                  <p className="noCats">Nothing added yet...</p>
                )}
                {/* {categories.map((cat) => (
                  <li>
                    <i
                      className="writeCatIcon far fa-trash-alt"
                      onClick={() => handleDelete(cat)}
                    ></i>
                    <label>{cat}</label>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </div>
        <div className="writeFormGroup writeSubmit">
          <button className="writeSubmit" type="submit">
            Publish
          </button>
          {error && <ErrorPrompt />}
        </div>
      </form>
    </div>
  );
}
