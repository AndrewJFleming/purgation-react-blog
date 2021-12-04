import React, { useEffect, useState } from "react";

import Posts from "../../components/Posts/Posts";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

export default function Home() {
  const [posts, setPosts] = useState([
    {
      photo:
        "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Test Post 1",
      _id: "1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.",
      categories: [
        { name: "testCat1" },
        { name: "testCat2" },
        { name: "testCat3" },
      ],
    },
    {
      photo:
        "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Test Post 2",
      _id: "2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.",
      categories: [
        { name: "testCat1" },
        { name: "testCat2" },
        { name: "testCat3" },
      ],
    },
    {
      photo:
        "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Test Post 3",
      _id: "3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.",
      categories: [
        { name: "testCat1" },
        { name: "testCat2" },
        { name: "testCat3" },
      ],
    },
  ]);

  useEffect(() => {}, []);

  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}
