/* eslint-disable react/no-unescaped-entities */
import "../assets/scss/component/_about.scss";
import projecticon from "../assets/images/projecticon.svg";
import calender from "../assets/images/calendar-dates.svg";
import map from "../assets/images/carbon_location.svg";

function AboutMe() {
  return (
    <>
      <main className="main-content">
        <section className="container">
          <div className="aboutus">
            <h2 className="section-title">About Me</h2>
            <p className="section-subheading">
              The Generator App is an online tool that helps you to export
              ready-made templates ready to work as your future website. It
              helps you to combine slides, panels and other components and
              export it as a set of static files: HTML/CSS/JS.
            </p>
            <div className="work-experience">
              <h2 className="section-title">Work Experience</h2>
              <ul>
                <li>
                  <div className="designation-wrapper">
                    <p className="designation-title">Junior Web Developer</p>
                    <button className="btn-green">Full Time</button>
                  </div>
                  <div className="project-details">
                    <div className="name-city-wrapper">
                      <p>
                        <span>
                          <img src={projecticon} />
                        </span>
                        Dr. Rajkumar's Learning App
                      </p>
                      <p>
                        <span>
                          <img src={map} />
                        </span>
                        Bengaluru
                      </p>
                    </div>

                    <div className="date-wrapper">
                      <p>
                        <span>
                          <img src={calender} />
                        </span>
                        Sep 2021 - Dec 2021
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="designation-wrapper">
                    <p className="designation-title">Web Development Intern</p>
                    <button className="btn-green">Internship</button>
                  </div>
                  <div className="project-details">
                    <div className="name-city-wrapper">
                      <p>
                        <span>
                          <img src={projecticon} />
                        </span>
                        Dr. Rajkumar's Learning App
                      </p>
                      <p>
                        <span>
                          <img src={map} />
                        </span>
                        Bengaluru
                      </p>
                    </div>

                    <div className="date-wrapper">
                      <p>
                        <span>
                          <img src={calender} />
                        </span>
                        Sep 2021 - Dec 2021
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="designation-wrapper">
                    <p className="designation-title">SEO / SEM Specialist</p>
                    <button className="btn-green">Internship</button>
                  </div>
                  <div className="project-details">
                    <div className="name-city-wrapper">
                      <p>
                        <span>
                          <img src={projecticon} />
                        </span>
                        HAAPS
                      </p>
                      <p>
                        <span>
                          <img src={map} />
                        </span>
                        Bengaluru
                      </p>
                    </div>

                    <div className="date-wrapper">
                      <p>
                        <span>
                          <img src={calender} />
                        </span>
                        Sep 2021 - Dec 2021
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="work-experience">
              <h2 className="section-title">Work Experience</h2>
              <ul>
                <li>
                  <div className="designation-wrapper">
                    <p className="designation-title">Junior Web Developer</p>
                    <button className="btn-green">Full Time</button>
                  </div>
                  <div className="project-details">
                    <div className="name-city-wrapper">
                      <p>
                        <span>
                          <img src={projecticon} />
                        </span>
                        Dr. Rajkumar's Learning App
                      </p>
                      <p>
                        <span>
                          <img src={map} />
                        </span>
                        Bengaluru
                      </p>
                    </div>
                    <div className="date-wrapper">
                      <p>
                        <span>
                          <img src={calender} />
                        </span>
                        Sep 2021 - Dec 2021
                      </p>
                    </div>
                  </div>
                </li>
              
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutMe;
