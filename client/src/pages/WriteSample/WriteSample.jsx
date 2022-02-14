import { useState, useEffect, useRef } from "react";
import FileBase from "react-file-base64";
import { useLocation } from "react-router";

import "../Write/Write.css";
import { AddCategories } from "../../shared/components/AddCategories/AddCategories";
import { CheckFeatured } from "../../shared/components/CheckFeatured/CheckFeatured";
import { Overlay, Tooltip, Alert, Button, Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../shared/components/Sidebar/Sidebar";

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="warning" 
      style={{border: '1px solid #856404'}}
    
      >
        <Alert.Heading>Write Page Sample</Alert.Heading>
        <p>
          This is sample version of the app's Write page. The functioning version of this component can be found <a href="https://github.com/AndrewJFleming/purgation-react-blog/blob/main/client/src/pages/Write/Write.jsx">here</a> on the project's GitHub repo.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="warning">
            Close
          </Button>
        </div>
      </Alert>
    </>
  );
}

function ClickNotification() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    setShow(false)
  }, []);

const showTooltip = () => {
  setShow(true)
  setTimeout(function () {
    setShow(false)
  }, 3000);
}

  return (
    <>
      <button className="buttonSuccess" type="submit" ref={target} 
      onClick={showTooltip}
      >
      Publish
      </button>
      <Overlay target={target.current} show={show} placement="left">
        {(props) => (
          <Tooltip className="pr-2" id="overlay-example" {...props}>
            Submit disabled for sample
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}

const WriteSample = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [categories, setCategories] = useState([]);
  const [featured, setFeatured] = useState(false);
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Container className="page">
      <Row>
        <Col sm={12} md={8} className="pageLeft">
      
      <AlertDismissible/>
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
              <ClickNotification/>
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

export default WriteSample