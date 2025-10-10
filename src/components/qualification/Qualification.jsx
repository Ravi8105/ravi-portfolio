import React, { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2); // Default to Experience tab

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        {/* Tabs */}
        <div className="qualification__tabs">
          {/* Experience First (Left Side) */}
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

          {/* Education Second (Right Side) */}
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
        </div>

        {/* Sections */}
        <div className="qualification__sections">
          {/* Experience */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">
                  Vilcart Solutions Pvt Ltd
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> July-2023 - Present
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
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">Microfocus</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Jul 2022 - Feb 2023
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSLC</h3>
                <span className="qualification__subtitle">
                  Karnataka School Examination and Assessment Board (KSEAB)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2016
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
                <h3 className="qualification__title">PUC</h3>
                <span className="qualification__subtitle">
                  Department of Pre-University Education (DPUE)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2019
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BCA</h3>
                <span className="qualification__subtitle">
                  Bengaluru North University (BNU)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2021
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
                <h3 className="qualification__title">
                  Full Stack Java Developer
                </h3>
                <span className="qualification__subtitle">
                  J-Spiders Bengaluru
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
