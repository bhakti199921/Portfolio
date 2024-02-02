import project from "../assets/images/project.svg";
import project1 from "../assets/images/project1.svg";
import project2 from "../assets/images/project2.svg";
import project3 from "../assets/images/project3.svg";
import project4 from "../assets/images/project4.svg";
import project5 from "../assets/images/project5.svg";
import link from "../assets/images/link-chain.svg";
import github from "../assets/images/github.svg";
function Project() {
  const ProjectList = [
    {
      title: "tiele 1",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator fordummy content",
      techUsed: "HTML , JavaScript, SASS, React",
      imgUrl: '../assets/images/project1.svg'
    },
    {
      title: "tiele 2",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator fordummy content",
      techUsed: "HTML , JavaScript, SASS, React",
    },
    {
      title: "tiele 3",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator fordummy content",
      techUsed: "HTML , JavaScript, SASS, React",
    },
    {
      title: "tiele 4",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator fordummy content",
      techUsed: "HTML , JavaScript, SASS, React",
    },
    {
      title: "tiele 5",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator fordummy content",
      techUsed: "HTML , JavaScript, SASS, React",
    },
    {
      title: "tiele 6",
      description:
        "This is sample sdcglsdicjhk description random things are here in description This is sample project lorem ipsum generator fordummy content",
      techUsed: "HTML , JavaScript, SASS, React",
    },
  ];
  return (
    <>
      <div className="projects">
        <div>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Things I’ve built so far</p>
        </div>
        <div className="projects-box">
          {/* <div className="card-wrapper">
            <img src={project} />
            <div className="card-inner">
              <h3 className="card-title">Project Tile goes here</h3>
              <p className="card-desc">
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>
              <p className="card-project-stack">
                {" "}
                <span>Tech stack :</span> HTML , JavaScript, SASS, React
              </p>
              <div className="code-details">
                <a href="#">
                  <img src={link} alt="" />
                  <span> Live Preview</span>
                </a>
                <a href="#">
                  <img src={github} alt="" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div> */}

          {ProjectList.map((item) => {
            const { title, description, techUsed } = item;
            return (
              <>
                <div className="card-wrapper">
                  <img src={project1} />
                  <div className="card-inner">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-desc">{description}</p>
                    <p className="card-project-stack">
                      {" "}
                      <span>Tech stack :</span> {techUsed}
                    </p>
                    <div className="code-details">
                      <a href="#">
                        <img src={link} alt="" />
                        <span> Live Preview</span>
                      </a>
                      <a href="#">
                        <img src={github} alt="" />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {/* 
          <div className="card-wrapper">
            <img src={project2} />
            <div className="card-inner">
              <h3 className="card-title">Project Tile goes here</h3>
              <p className="card-desc">
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>
              <p className="card-project-stack">
                {" "}
                <span>Tech stack :</span> HTML , JavaScript, SASS, React
              </p>
              <div className="code-details">
                <a href="#">
                  <img src={link} alt="" />
                  <span> Live Preview</span>
                </a>
                <a href="#">
                  <img src={github} alt="" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <img src={project3} alt="projectimg" />
              <div className="card-inner">
                <h3 className="card-title">Project Tile goes here</h3>
                <p className="card-desc">
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content
                </p>
                <p className="card-project-stack">
                  {" "}
                  <span>Tech stack :</span> HTML , JavaScript, SASS, React
                </p>
                <div className="code-details">
                  <a href="#">
                    <img src={link} alt="linkimg" />
                    <span> Live Preview</span>
                  </a>
                  <a href="#">
                    <img src={github} alt="github" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <img src={project4} alt="projectimg" />
            <div className="card-inner">
              <h3 className="card-title">Project Tile goes here</h3>
              <p className="card-desc">
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>
              <p className="card-project-stack">
                {" "}
                <span>Tech stack :</span> HTML , JavaScript, SASS, React
              </p>
              <div className="code-details">
                <a href="#">
                  <img src={link} alt="linkimg" />
                  <span> Live Preview</span>
                </a>
                <a href="#">
                  <img src={github} alt="github" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <img src={project5} alt="projectimg" />
            <div className="card-inner">
              <h3 className="card-title">Project Tile goes here</h3>
              <p className="card-desc">
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>
              <p className="card-project-stack">
                {" "}
                <span>Tech stack :</span> HTML , JavaScript, SASS, React
              </p>
              <div className="code-details">
                <a href="#">
                  <img src={link} alt="linkimg" />
                  <span> Live Preview</span>
                </a>
                <a href="#">
                  <img src={github} alt="github" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Project;
