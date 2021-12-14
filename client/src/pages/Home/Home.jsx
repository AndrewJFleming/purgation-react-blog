import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

import Posts from "../../components/Posts/Posts";
import Banner from "../../components/Banner/Banner";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  //Grabbing value of search property from location obj
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      //If the url includes a search param it'll be included with the request to the backend.
      //Response will only return data for posts matching search requirements.
      const res = await axios.get("/posts" + search);

      //Sort posts by newest date prior to setting state
      const postsDescending = res.data.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setPosts(postsDescending);
    };
    fetchPosts();
  }, [search]);

  return (
    <div>
      <Banner />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}
