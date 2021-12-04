import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import ProfileImage from "../../images/profile.jpg";
import NavLogo from "../../images/logo.png";

export default function Navbar() {
  const handleLogout = () => {};

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
          <li className="topListItem" onClick={handleLogout}>
            LOGOUT
          </li>
        </ul>
      </div>
      <div className="topRight">
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
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
