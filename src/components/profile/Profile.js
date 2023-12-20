import React from "react";
import "./Profile.css";
import { svgImg } from "../../data/svg_img";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-header">MY PROFILES</div>
      <div className="profile-body">
        {svgImg.map((item, index) => {
          return (
            <a key={index} href={item.link} target="_blank" rel="noreferrer">
              <div className="profile-item">
                <div
                  className="item-img"
                  data-aos="fade-down"
                  data-aos-offset="100"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  <img src={item.src} alt="" className="original-img" />
                  <img src={item.white} alt="" className="altered-img" />
                </div>
                <div className="item-tag">{item.name}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
