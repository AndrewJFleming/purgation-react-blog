import React from "react";
import "./Banner.css";

// import bannerBG from "../../images/bannerBG.jpg";
import bannerBG_dark from "../../images/bannerBG-dark.jpg";

export default function Banner() {
  return (
    <div className="banner">
      <div className="bannerTitles">
        <span className="bannerTitleLg">Purgation</span>
        <span className="bannerTitleSm">React Blog</span>
      </div>
      <img className="bannerImg" src={bannerBG_dark} alt="" />
    </div>
  );
}
