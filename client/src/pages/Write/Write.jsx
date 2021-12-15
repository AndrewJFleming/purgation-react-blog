import { useContext, useState } from "react";
import axios from "axios";

import "./Write.css";
import { Context } from "../../shared/context/Context";
import { ErrorPrompt } from "../../shared/components/ErrorPrompt/ErrorPrompt";
import { AddCategories } from "../../shared/components/AddCategories/AddCategories";
import { CheckFeatured } from "../../shared/components/CheckFeatured/CheckFeatured";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [featured, setFeatured] = useState(false);
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
      featured,
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
    <Container className="write">
      <Row>
        <Col md={8}>
          <div className="writeImgWrapper">
            <img
              className="writeImg"
              src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>

          <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
              <h5 className="writeFormTitle">Post Image</h5>
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
                placeholder="Start writing..."
                type="text"
                className="writeInput writeText"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <CheckFeatured featured={featured} setFeatured={setFeatured} />
            <AddCategories
              categories={categories}
              setCategories={setCategories}
            />
            <div className="writeSubmit">
              <button type="submit">Publish</button>
              {error && <ErrorPrompt />}
            </div>
          </form>
        </Col>
        <Col md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}
