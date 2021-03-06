import { useContext, useState } from "react";
import axios from "axios";
import FileBase from "react-file-base64";

import "./Write.css";
import { Context } from "../../shared/context/Context";
import { ErrorPrompt } from "../../shared/components/ErrorPrompt/ErrorPrompt";
import { AddCategories } from "../../shared/components/AddCategories/AddCategories";
import { CheckFeatured } from "../../shared/components/CheckFeatured/CheckFeatured";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../shared/components/Sidebar/Sidebar";

export default function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
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
      photo: photo.image,
    };
    try {
      const res = await axios.post(process.env.REACT_APP_SERVER_URL + "/posts", newPost);
      //Redirect to single post page with respective id
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <Container className="page">
      <Row>
        <Col sm={12} md={8} className="pageLeft">
          {photo.image && (
            <div className="writeImgWrapper">
              <img className="writeImg" src={photo.image} alt="" />
            </div>
          )}
          <h2 className="serifTitle mt-4">Write</h2>
          <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
              <input
                type="text"
                placeholder="Title"
                className="writeInput"
                autoFocus={true}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Start writing..."
                type="text"
                className="writeInput writeText"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="writeFormGroup uploadInput">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => setPhoto({ ...photo, image: base64 })}
              />
            </div>
            <CheckFeatured featured={featured} setFeatured={setFeatured} />
            <AddCategories
              categories={categories}
              setCategories={setCategories}
            />
            <div className="submitWrapper">
              <button className="buttonSuccess" type="submit">
                Publish
              </button>
              {error && <ErrorPrompt />}
            </div>
          </form>
        </Col>
        <Col sm={12} md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}
