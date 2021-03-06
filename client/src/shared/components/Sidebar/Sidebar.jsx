import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import sidebarImage from "../../../images/bigLogo.png";

export default function Sidebar() {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    const getFeaturedPosts = async () => {
      const res = await axios.get(process.env.REACT_APP_SERVER_URL + "/posts");
      const featured = res.data.filter((x) => !!x.featured);
      setFeaturedPosts(featured);
    };
    getFeaturedPosts();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <img className="sidebarImage" src={sidebarImage} alt="" />
        <span className="sidebarTitle">ABOUT US</span>
        <p className="sidebarDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FEATURED</span>
        <ul className="sidebarList">
          {featuredPosts.map((f) => (
            <Link key={f._id} to={`/post/${f._id}`} className="link">
              <li className="sidebarListItem">{f.title}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://github.com/AndrewJFleming" className="link">
            <i className="socialIcon fab fa-github-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/andrew-j-fleming-web-dev" className="link">
            <i className="socialIcon fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
