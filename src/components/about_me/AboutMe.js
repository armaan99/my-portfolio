import React from "react";
import "./AboutMe.css";
import myImg from "./Pic.jpeg";

export default function AboutMe() {
  return (
    <div className="about-me" id="aboutme">
      {/* Image Section on Left */}
      <div
        className="user-image"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-once="true"
        data-aos-easing="ease-in-sine"
      >
        <div className="image-box">
          <img className="user-img" src={myImg} alt="" />
        </div>
        <a
          href="https://drive.google.com/file/d/1MQsbePse3BSjYKWeFYBv97_sv0L_0MQK/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="download-resume-btn"
        >
          <img
            className="download-img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMElEQVR4nO2WTUrDYBCGA5Z6AJe9QEEFoV21PYHgIYrbegy3Kig9SxGkdFMpbclCF95A4s6fulIfGZiUUGozE9PSRR4IhJB3nsz3w5cgKCjYNoAjoAs8AZ/AB/AIXAEH6xCWgEvgm7/5Am6Acl7SMtDDzl0ucuAcP9deyQnQ17mTa6BD6EUy++vsbBUXFukx+fNgEd8aizWApvHdt7Rt0tY9mUoiZ+FHa+8sSveAqbFIFnHMWFzJTic4yShGXSUJnpKBf4iFdqDtW5HFVAeihDgCakDLUWckwZkjUFPZ/BCI7/WDrMwk8O4IvACHS3ZEFXh21HmV0Agf0WLH+szDvQTPnKFYXo/nO0O+I+JdIGRzhPOjEqhsSB6Ka9kh35Hxdy64NKTWUGvn80dSUBCs4BduOP8E1cKDmAAAAABJRU5ErkJggg=="
            alt=""
          ></img>
          <div className="download-resume">DOWNLOAD RESUME</div>
        </a>
      </div>

      {/* Details Section on Right */}
      <div
        className="user-data"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-once="true"
        data-aos-easing="ease-in-sine"
      >
        <div className="about-me-header">ABOUT ME</div>
        <div className="about-me-intro">
          Hello! I'm Armaan Agrawal, currently pursuing my Masters in Technology
          in Artificial Intelligence. With over a year of hands-on experience,
          I've successfully navigated all stages of the Machine Learning Life
          Cycle. My expertise lies in Machine Learning, Deep Learning, Natural
          Language Processing, and Computer Vision projects.
        </div>
        <div className="about-me-details">
          <div>
            <span className="key">NAME: </span>Armaan Agrawal
          </div>
          <div>
            <span className="key">NATIONALITY: </span>Indian
          </div>
          <div>
            <span className="key">ADDRESS: </span>Indore, Madhya Pradesh
          </div>
          <div>
            <span className="key">PHONE: </span>+91-8770792968
          </div>
          <div>
            <span className="key">E-MAIL: </span>armngrwl1299@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
