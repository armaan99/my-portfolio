import React from "react";
import "./Experience.css";

import { experienceTimelineElements } from "./../../data/experience_timeline";

export default function Experience() {
  return (
    <div className="experience" id="workexp">
      <div className="experience-header">
        <div className="exp-header">WORK EXPERIENCE</div>
      </div>
      <div className="experience-body">
        <div className="timeline-list">
          <div className="exp-timeline-head">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADHUlEQVR4nO2cTW4TQRCFawNsCAhY8XMIYIO4RaQI7gABDoPgEtmCAu6ylE2UBMlJELK7jCU2Bg6QhAVZFeoeO7ZnGDbErpr4PentopmX+mq6x2PXEEEQBEEQBEHLoO7GZYrhBQnvkfAvEtZzdjrmLsXWej4X9A9JuEMSDuYAocZhn+KH22BSd2XIImGcuUOdziVAKatYptTEfX4GIJXlKu8Z08vJO/ravnvuhUrHTMeePdcOgFSAhJOZIs0DxliDrXsz54rhGEAqQErLyEU7X+MEIM4EIM4EIM4EIM4EICUNNq+Q8Ms5PkOCpfJMbS9/IK48U0v3/JE/o2hs1TSHk89d6coADLVvxnBQXCnCr+zDwJRqkL4SoBg+oSDspSl2q8+QYDVctk6qt5uwmtYAANhXE5oHgBVAxHEjmAeAFUDEcSOYB4AVQMRxI5gHgBVAxHEjmAeAFUDEcSOYB4AVQMRxI5gHgBVAxHEjmAeAFUDEcSOYB4AVQMRxI5gH+D8PSXiNZHslu9depRj6DnItJZAhdT/eLP8ilr68vzECZZ1v6YCsUZ364YmDfMsGZHulFshg85p9PgCZ6BtfNy/s0gHptVepTv3wtMFAGvpT0hj6eQMvK/ItiuF7Q/+n478M7DfKw7yBpz0jOV0ZTYVx9gKDYmrKQRiYIj8fj7IdoiBsfXXsFwM73a2ro/d/WLyJB5YRjPxqqnQr32s9mrw4rLWe17GmbvTSJKcah528TI2HPiM/ThNUr2tvH6HFSsLbROU3dVv3F3xqqKzYfkjCp8UHwxh+UI8fVP4IWhyMyD8zi6l17ZSE3+R1LG300HyVapxqnZapovYFB/vNDabpGqAg7KspzAPACiDiuBHMA8AKIOK4EcwDwAog4rgRzAPACiDiuBHMA8AKIOK4EcwDwAog4rgRzAPACiDiuBHMA8AKIOK4EcwDwAog4rgRzAPACiDiuBHMA8AKIOK4EcwDwAog4rgRzAPACiDiuBEwnMN+HPmo6VO4erGMKVx1ZUzhssMp3CRM4aqLKdzZiR5M4ZL1FC4EQRAEQRBE89EfD0SckUwf5lIAAAAASUVORK5CYII="
              alt=""
            ></img>
          </div>
          {experienceTimelineElements.map((item, index) => {
            return (
              <div key={index} className="timeline-item">
                <div
                  className="exp-left-section"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="job-profile">{item.jobProfile}</div>
                  <div className="organization">
                    @{item.organization}, {item.location}
                  </div>
                  <div className="job-duration">{item.duration}</div>
                </div>

                <div className="progress-line">
                  <div className="job-progress-mark">
                    <div className="design-dot"></div>
                  </div>
                </div>

                <div
                  className="exp-right-section"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-easing="ease-in-sine"
                >
                  <div>
                    <span className="job-desc-title">Job Description: </span>
                    <span className="job-desc-detail">
                      {item.jobDescription}
                    </span>
                  </div>
                  <br />
                  <div>
                    <span className="job-desc-title">
                      Working Technologies:{" "}
                    </span>
                    <span className="job-desc-detail">
                      {item.technology.map((tech, idx) => {
                        return (
                          <span key={idx} className="tech">
                            {tech}{" "}
                            {idx < item.technology.length - 1 ? " | " : ""}
                          </span>
                        );
                      })}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="exp-timeline-tail"></div>
        </div>
      </div>
    </div>
  );
}
