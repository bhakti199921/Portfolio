/* eslint-disable react/no-unescaped-entities */
// import "../assets/scss/component/_about.scss";
// import projecticon from "../assets/images/projecticon.svg";
import calender from "../assets/images/calendar-dates.svg";
import map from "../assets/images/carbon_location.svg";

function AboutMe() {
  const workExperience = [
    {
      designationTitle: "Junior Web Developer",
      work: "Full Time",
      projecticon: "/src/assets/images/projecticon.svg",
      name: "Dr. Rajkumar's Learning App",
      city: "Bengaluru",
      date: "Sep 2021 - Dec 2021",
    },
    {
      designationTitle: "Web Development Intern",
      work: "Internship",
      projecticon: "/src/assets/images/projecticon.svg",
      name: "Dr. Rajkumar's Learning App",
      city: "Bengaluru",
      date: "Sep 2022 - Dec 2023",
    },
    {
      designationTitle: "SEO / SEM Specialist",
      work: "Internship",
      projecticon: "/src/assets/images/projecticon.svg",
      name: "Dr. Rajkumar's Learning App",
      city: "Bengaluru",
      date: "Sep 2021 - Dec 2021",
    },
  ];

  const education = [
    {
      educationTitle: "Bachelor in Electronics & Communication",
      projecticons: "/src/assets/images/projecticon.svg",
      names: "Bangalore Instutute of Technology",
      cityname: "Bengaluru",
      dates: "Sep 2021 - Dec 2021",
    },
    {
      educationTitle: "Bachelor in Electronics & Communication",
      projecticons: "/src/assets/images/projecticon.svg",
      names: "Bangalore Instutute of Technology",
      cityname: "Bengaluru",
      dates: "Sep 2021 - Dec 2021",
    },
  ];
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
                {workExperience.map((item) => {
                  const {
                    designationTitle,
                    work,
                    projecticon,
                    name,
                    city,
                    date,
                  } = item;
                  return (
                    <>
                      <li>
                        <div className="designation-wrapper">
                          <p className="designation-title">
                            {designationTitle}
                          </p>
                          <button className="btn-green">{work}</button>
                        </div>
                        <div className="project-details">
                          <div className="name-city-wrapper">
                            <p>
                              <span>
                                <img src={projecticon} />
                              </span>
                              {name}
                            </p>
                            <p>
                              <span>
                                <img src={map} />
                              </span>
                              {city}
                            </p>
                          </div>

                          <div className="date-wrapper">
                            <p>
                              <span>
                                <img src={calender} />
                              </span>
                              {date}
                            </p>
                          </div>
                        </div>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>

            <div className="work-experience">
              <h2 className="section-title">Education</h2>
              <ul>
                {education.map((item) => {
                  const {
                    educationTitle,projecticons,names,cityname,datesm
                  } = item;
                  return(
                  <>
                    <li>
                      <div className="designation-wrapper">
                        <p className="designation-title">
                          {educationTitle}
                        </p>
                        <button className="btn-green">Full Time</button>
                      </div>
                      <div className="project-details">
                        <div className="name-city-wrapper">
                          <p>
                            <span>
                              <img src={projecticons} />
                            </span>
                            {names}
                          </p>
                          <p>
                            <span>
                              {/* <img src={map} /> */}
                            </span>
                            {cityname}
                          </p>
                        </div>
                        <div className="date-wrapper">
                          <p>
                            <span>
                              <img src={datesm} />
                            </span>
                            Sep 2021 - Dec 2021
                          </p>
                        </div>
                      </div>
                    </li>
                  </>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutMe;
