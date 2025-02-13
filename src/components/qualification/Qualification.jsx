import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">My Personal Journey</h2>
      <span className="section__subtitle">Qualification</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {toggleState === 1 && (
            <div className="qualification__content qualification__content-active">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    B.Tech - Computer Science and Engineering
                  </h3>
                  <span className="qualification__subtitle">
                    PES University
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2020 -2024
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Pre-University</h3>
                  <span className="qualification__subtitle">
                    Siddaganga PU College
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">10th-Board</h3>
                  <span className="qualification__subtitle">
                    Siddaganga High School
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2018
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          )}

          {toggleState === 2 && (
            <div className="qualification__content qualification__content-active">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">UX Designer</h3>
                  <span className="qualification__subtitle">
                    Embitel Technologies - Bengaluru
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2025 - present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">UI/UX Intern</h3>
                  <span className="qualification__subtitle">
                    Embitel Technologies - Bengaluru
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2024
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
