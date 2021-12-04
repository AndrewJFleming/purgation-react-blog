import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import sidebarImage from "../../images/bigLogo.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img className="sidebarImage" src={sidebarImage} alt="" />
        <p className="sidebarDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem">Test Cat One</li>
          </Link>
          <Link to="/" className="link">
            <li className="sidebarListItem">Test Cat Two</li>
          </Link>
          <Link to="/" className="link">
            <li className="sidebarListItem">Test Cat Three</li>
          </Link>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="topIcon fab fa-github-square"></i>
        </div>
      </div>
    </div>
  );
}
