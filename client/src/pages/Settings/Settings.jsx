import "./Settings.css";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../shared/components/Sidebar/Sidebar";
import { Context } from "../../shared/context/Context";
import ProfileImage from "../../images/profile.jpg";

export default function Settings() {
  // const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  //Fill initial state with logged in user creds so we don't update blank values.
  useEffect(() => {
    setUsername(user.username);
    setEmail(user.email);
    setPassword(user.password);
  }, [user]);

  return (
    <Container className="page">
      <Row>
        <Col md={8} className="pageLeft">
          <div className="d-flex justify-content-between">
            <h2 className="serifTitle">Update Your Account</h2>
            <span className="settingsDelete">Delete Account</span>
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <label className="mt-2">Profile Picture</label>
            <div className="settingsPP">
              <img src={ProfileImage} alt="" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => {}}
              />
            </div>
            <label className="mt-2">Username</label>
            <input
              type="text"
              placeholder={user.username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="mt-2">Email</label>
            <input
              type="email"
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="mt-2">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="submitWrapper">
              <button className="buttonSuccess" type="submit">
                Update
              </button>
            </div>
            {success && (
              <span
                style={{
                  color: "green",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                Profile update successful
              </span>
            )}
          </form>
        </Col>
        <Col md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}
