import React from "react";
import "./Education.css";

import { educationTimelineElements } from "./../../data/education_timeline";

export default function Education() {
  return (
    <div className="education" id="education">
      <div className="education-header">
        <div className="edu-header">EDUCATION</div>
      </div>
      <div className="education-body">
        <div className="timeline-list">
          <div className="edu-timeline-head">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqElEQVR4nO2YO2wTQRCGf17i0SAQVEhEgg6UipaSCkSJRBMpFQ0g0dGRFBQQoKCkpQwdoAjP2HKDqExDfDvOSVEiSBMgCAoEiIfRrA/w44zfd+dkPmkk+253dmdudnZ2AcMwDMMwDMMwDMMwjCR49fQAHF2B0Mua8FWUnx3EpqY6sx0VPg2hBxD+DOFqgzj+CsfzkNx5VOd3YNOwlD8CR9fhaLnF6HbiaA3Ct7DExzCWhAu7UaELEHoCxz+6Nrw1Kn7C8XMIX0Lp8T5knqBw0n85R+/6Nrq9Mz765aPLKFMs837/hYRLQze6rVDgl1W4cDibCU0SkvrEWSzuzGZCk6ScMarEGQ4poSUXFUNMnMKzEP6QulH9i859tn8HOJqB8EYGDOlXNuDoxmBRsFLcA5e/CCHy4ZW+Ud2JzlnnPlSCwoSPCscrqRvYIrQaLdna/y23DVaj80MiDogrhGqZN9lCqFI8hGYSd0A95fyJWinMb0dWCkvuFP5Hqg6Iqx2Evie6p6fmgNcv9sY+L/PR3hMnrfo+mnR7GStVBzj+BOGHCPjMyC5ENPwd3YfQ++w5QBoMWoSja7FJ6u+VWO5ydIIs+esxfRaH6lBdqrN+jE7zSByJDedvcPQIAZ3t6ZpL22of7as64nQ3UyrtgqO5fxFFc8mcEP/QMaHRGzi+ibBwHO3Qd9pG23bS14zjuzHL6g4SQ7rN7PQLjooIaMpndhX9rc/0Xbd6WhwQcwul23HmHCANzvjipZ++3Y6faQfIAGIOaMIigLf4EnD+TrA5x6wl5wDH51qKldHIoh8rs1R8uctDN9wfirRMrm7DWCA8CaHbEA4HMDyMdExirAkKE5DcNITu+btFNczxenQAUlmPjKVam9x025OgYRiGYRiGYRiGYRgGBuM3BONCTkXJJgEAAAAASUVORK5CYII="
              alt=""
            ></img>
          </div>
          {educationTimelineElements.map((item, index) => {
            return (
              <div key={index} className="timeline-item">
                <div
                  className="edu-left-section"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="edu-course">{item.course}</div>
                  <div className="course-duration">{item.duration}</div>
                </div>

                <div className="progress-line">
                  <div className="progress-mark">
                    <div className="design-dot"></div>
                  </div>
                </div>

                <div
                  className="edu-right-section"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  data-aos-once="true"
                  data-aos-easing="ease-in-sine"
                >
                  <div>
                    <span className="course-desc-title">Institute: </span>
                    <span className="course-desc-detail">{item.institute}</span>
                  </div>
                  <div>
                    <span className="course-desc-title">Location: </span>
                    <span className="course-desc-detail">{item.location}</span>
                  </div>
                  <div>
                    <span className="course-desc-title">Qualified with: </span>
                    <span className="course-desc-detail">{item.grade}</span>
                  </div>
                  <div>
                    <span className="course-desc-title">
                      {item.specialization ? "Spacialization: " : "Subjects: "}
                    </span>
                    <span className="course-desc-detail">
                      {item.specialization
                        ? item.specialization
                        : item.subjects}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="edu-timeline-tail"></div>
        </div>
      </div>
    </div>
  );
}
