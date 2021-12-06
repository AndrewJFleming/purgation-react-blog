import React, { useEffect, useState } from "react";
import axios from "axios";

import Posts from "../../components/Posts/Posts";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

export default function Home() {
  const [posts, setPosts] = useState([
    // {
    //   photo:
    //     "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //   title: "Test Post 1",
    //   _id: "1",
    //   username: "Andy",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.",
    //   categories: [
    //     { name: "testCat1" },
    //     { name: "testCat2" },
    //     { name: "testCat3" },
    //   ],
    // },
    // {
    //   photo:
    //     "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //   title: "Test Post 2",
    //   _id: "2",
    //   username: "Andy",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.",
    //   categories: [
    //     { name: "testCat1" },
    //     { name: "testCat2" },
    //     { name: "testCat3" },
    //   ],
    // },
    // {
    //   photo:
    //     "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //   title: "Test Post 3",
    //   _id: "3",
    //   username: "Andy",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.",
    //   categories: [
    //     { name: "testCat1" },
    //     { name: "testCat2" },
    //     { name: "testCat3" },
    //   ],
    // },
    // {
    //   photo:
    //     "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //   title: "Test Post 1",
    //   _id: "1",
    //   username: "Andy",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.",
    //   categories: [
    //     { name: "testCat1" },
    //     { name: "testCat2" },
    //     { name: "testCat3" },
    //   ],
    // },
    // {
    //   photo:
    //     "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //   title: "Test Post 2",
    //   _id: "2",
    //   username: "Andy",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.",
    //   categories: [
    //     { name: "testCat1" },
    //     { name: "testCat2" },
    //     { name: "testCat3" },
    //   ],
    // },
    // {
    //   photo:
    //     "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //   title: "Test Post 3",
    //   _id: "3",
    //   username: "Andy",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui necessitatibus nostrum illum reprehenderit.",
    //   categories: [
    //     { name: "testCat1" },
    //     { name: "testCat2" },
    //     { name: "testCat3" },
    //   ],
    // },
  ]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

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
