import { useContext, useState } from "react";
import axios from "axios";

import "./Write.css";
import { Context } from "../../shared/context/Context";
import { ErrorPrompt } from "../../shared/components/ErrorPrompt/ErrorPrompt";

export default function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const newPost = {
      username: user.username,
      title,
      description,
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
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
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
        <button className="writeSubmit" type="submit">
          Publish
        </button>
        {error && <ErrorPrompt />}
      </form>
    </div>
  );
}
