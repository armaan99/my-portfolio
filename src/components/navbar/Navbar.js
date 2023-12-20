import React, { useState } from "react";
import "./Navbar.css";
import { svgImg } from "./../../data/svg_img";

export default function Navbar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "navbar nav-bg" : "navbar"}>
      <div className="profile-nav">
        {svgImg.map((item, index) => {
          return (
            index != 3 && (
              <a key={index} href={item.link} target="_blank" rel="noreferrer">
                <div className="nav-profile-item" key={index}>
                  <img src={item.white} alt="" />
                </div>
              </a>
            )
          );
        })}
      </div>
      <div className="pg-nav">
        <a href="#aboutme">About Me</a>
        <a href="#education">Education</a>
        <a href="#workexp">Work Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>
    </div>
  );
}
