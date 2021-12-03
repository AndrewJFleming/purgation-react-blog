import React from "react";
import "./Header.css";

import headerBG from "../../images/headerBG.jpg";
import headerBG_dark from "../../images/headerBG-dark.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Purgation</span>
        <span className="headerTitleSm">React Blog</span>
      </div>
      <img className="headerImg" src={headerBG_dark} alt="" />
    </div>
  );
}
