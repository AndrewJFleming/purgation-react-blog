import { useContext, useState, useEffect } from "react";
import axios from "axios";

import "./Write.css";
import { Context } from "../../shared/context/Context";
import { ErrorPrompt } from "../../shared/components/ErrorPrompt/ErrorPrompt";
import { NewCategory } from "./NewCategory/NewCategory";

export default function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]); //Default empty array as cats will be array of objs.
  const [selectedCats, setSelectedCats] = useState(new Set());
  const [error, setError] = useState(false);
  const { user } = useContext(Context);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    getCats();
    console.log(categories);
  }, []);

  function handleCheckboxChange(item) {
    //Make a copy of the original set rather than mutating it
    const newSelectedCats = new Set(selectedCats);
    if (!newSelectedCats.has(item)) {
      newSelectedCats.add(item);
    } else {
      newSelectedCats.delete(item);
    }
    setSelectedCats(newSelectedCats);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    //Convert Set into an array prior to saving to db with other data.
    const catsArray = [...selectedCats];

    const newPost = {
      username: user.username,
      title,
      description,
      categories: catsArray,
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
          <ul className="writeCats">
            <h3>Categories</h3>
            {categories.map((cat) => (
              <li>
                <input
                  type="checkbox"
                  checked={selectedCats.has(cat.name)}
                  onChange={() => handleCheckboxChange(cat.name)}
                />
                <label>{cat.name}</label>
              </li>
            ))}
          </ul>
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
