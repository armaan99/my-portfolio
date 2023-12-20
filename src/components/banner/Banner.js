import React from "react";
import "./Banner.css";
// import { bannerImg } from "./../../data/banner_img.avif";

export default function Banner() {
  return (
    <div className="banner">
      <div
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="banner-greeting">Hello!</div>
        <div className="banner-intro">I'm Armaan Agrawal</div>
        <div className="banner-role">
          Software Developer | Machine Learning Engineer
        </div>
      </div>
    </div>
  );
}
