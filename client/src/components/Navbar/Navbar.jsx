import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import ProfileImage from "../../images/profile.jpg";
import NavLogo from "../../images/logo.png";
import { Context } from "../../shared/context/Context";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      console.log("pressed");
    }
  };
  const handleSearch = () => {
    if (search) {
      window.location.replace("/?search=" + search);
    }
  };

  return (
    <div className="top">
      <div className="topLeft">
        <Link to="/">
          <img className="navLogo" src={NavLogo} alt="logo" />
        </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem logoOut" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topImg"
              src={
                // {PF+user.profilePic}
                ProfileImage
              }
              alt="profile"
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <input
          type="text"
          placeholder="Title"
          className="searchInput"
          autoFocus={true}
          onKeyPress={handleKeyPress}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className="topSearchIcon fas fa-search" onClick={handleSearch}></i>
      </div>
    </div>
  );
}
