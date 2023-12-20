import React, { useState } from "react";
import "./ProfessionalSkills.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import "react-circular-progressbar/dist/styles.css";

export default function ProfessionalSkills() {
  window.addEventListener("scroll", function () {
    var cpp = document.querySelector("#cpp");
    var cppPos = cpp.getBoundingClientRect();

    if (cppPos.top >= 0 && cppPos.bottom <= window.innerHeight - 100) {
      cpp.className = "percentage cpp-pct";
    }

    var py = document.querySelector("#py");
    var pyPos = py.getBoundingClientRect();

    if (pyPos.top >= 0 && pyPos.bottom <= window.innerHeight - 100) {
      py.className = "percentage py-pct";
    }

    var react = document.querySelector("#react");
    var reactPos = react.getBoundingClientRect();

    if (reactPos.top >= 0 && reactPos.bottom <= window.innerHeight - 100) {
      react.className = "percentage react-pct";
    }
  });

  const [flag, setFlag] = useState([false, false, false, false]);

  return (
    <div className="skills" id="skills">
      <div className="skills-header">
        <div className="ps-header">SKILLS</div>
      </div>
      <div className="skills-section">
        {/* Technical Skills */}
        <div className="technical-skills">
          <div className="tech-skills-section">
            <div className="skill-section-title">Technical Skills</div>
            <div className="tech-details">
              <div className="info">
                <div className="tech-name">C++</div>
              </div>
              <div className="progress-bar">
                <div id="cpp" className="percentage">
                  <div className="dot"></div>
                </div>
                <div className="new-tech-pct">80%</div>
              </div>
            </div>

            <div className="tech-details">
              <div className="info">
                <div className="tech-name">Python</div>
              </div>
              <div className="progress-bar">
                <div id="py" className="percentage">
                  <div className="dot"></div>
                </div>
                <div className="new-tech-pct">85%</div>
              </div>
            </div>

            <div className="tech-details">
              <div className="info">
                <div className="tech-name">React</div>
              </div>
              <div className="progress-bar">
                <div id="react" className="percentage">
                  <div className="dot"></div>
                </div>
                <div className="new-tech-pct">45%</div>
              </div>
            </div>
          </div>
        </div>
        {/* Professional Skills */}
        <div className="professional-skills">
          <div className="skill-section-title">Professional Skills</div>
          <div className="ps-details">
            <div className="ps-skill">
              <div className="ps-circle">
                <VisibilitySensor>
                  {({ isVisible }) => {
                    if (isVisible) {
                      var temp = flag;
                      temp[0] = true;
                      setFlag(temp);
                    }
                    const percentage = isVisible || flag[0] ? 85 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={7}
                        styles={buildStyles({
                          pathColor: "#00d7bb",
                          textColor: "#fff",
                          trailColor: `rgba(0, 0, 0, 0.5)`,
                          pathTransitionDuration: 1.2,
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
              </div>
              <div className="ps-skill-name">Communication</div>
            </div>

            <div className="ps-skill">
              <div className="ps-circle">
                <VisibilitySensor>
                  {({ isVisible }) => {
                    if (isVisible) {
                      var temp = flag;
                      temp[1] = true;
                      setFlag(temp);
                    }
                    const percentage = isVisible || flag[1] ? 65 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={7}
                        styles={buildStyles({
                          pathColor: "#00d7bb",
                          textColor: "#fff",
                          trailColor: `rgba(0, 0, 0, 0.5)`,
                          pathTransitionDuration: 1.2,
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
              </div>
              <div className="ps-skill-name">Team Work</div>
            </div>

            <div className="ps-skill">
              <div className="ps-circle">
                <VisibilitySensor>
                  {({ isVisible }) => {
                    if (isVisible) {
                      var temp = flag;
                      temp[2] = true;
                      setFlag(temp);
                    }
                    const percentage = isVisible || flag[2] ? 70 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={7}
                        styles={buildStyles({
                          pathColor: "#00d7bb",
                          textColor: "#fff",
                          trailColor: `rgba(0, 0, 0, 0.5)`,
                          pathTransitionDuration: 1.2,
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
              </div>
              <div className="ps-skill-name">Project Management</div>
            </div>

            <div className="ps-skill">
              <div className="ps-circle">
                <VisibilitySensor>
                  {({ isVisible }) => {
                    if (isVisible) {
                      var temp = flag;
                      temp[3] = true;
                      setFlag(temp);
                    }
                    const percentage = isVisible || flag[3] ? 90 : 0;
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        strokeWidth={7}
                        styles={buildStyles({
                          pathColor: "#00d7bb",
                          textColor: "#fff",
                          trailColor: `rgba(0, 0, 0, 0.5)`,
                          pathTransitionDuration: 1.2,
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
              </div>
              <div className="ps-skill-name">Creativity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
