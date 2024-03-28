
import link from "../assets/images/link-chain.svg";
import github from "../assets/images/github.svg";
// import { Link } from "react-router-dom";
function Project() {
  const ProjectList = [
    {
      title: "Project Tile goes here",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator fordummy content",
      techUsed: "HTML , JavaScript, SASS, React",
      imgUrl: "/src/assets/images/project.png",
      livePreview:"https://bhaktir-portfolio.netlify.app/",
      viewCode:"https://github.com/bhakti199921/Portfolio",
     
    },
    {
      title: "Project Tile goes here",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator fordummy content",
      techUsed: "HTML , JavaScript, SASS, React",
      imgUrl: "/src/assets/images/project1.svg",
      livePreview:"https://bhaktir-portfolio.netlify.app/",
      viewCode:"https://github.com/bhakti199921/Portfolio",
    },
    {
      title: "Project Tile goes here",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator fordummy content",
      techUsed: "HTML , JavaScript, SASS, React",
      imgUrl: "/src/assets/images/project2.svg",
      livePreview:"https://bhaktir-portfolio.netlify.app/",
      viewCode:"https://github.com/bhakti199921/Portfolio",
    },
    {
      title: "Project Tile goes here",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator fordummy content",
      techUsed: "HTML , JavaScript, SASS, React",
      imgUrl: "/src/assets/images/project3.svg",
      livePreview:"https://bhaktir-portfolio.netlify.app/",
      viewCode:"https://github.com/bhakti199921/Portfolio",
    },
    {
      title: "Project Tile goes here",
      description:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator fordummy content",
      techUsed: "HTML , JavaScript, SASS, React",
      imgUrl: "/src/assets/images/project4.svg",
      livePreview:"https://bhaktir-portfolio.netlify.app/",
      viewCode:"https://github.com/bhakti199921/Portfolio",
    },
    {
      title: "Project Tile goes here",
      description:
        "This is sample sdcglsdicjhk description random things are here in description This is sample project lorem ipsum generator fordummy content",
      techUsed: "HTML , JavaScript, SASS, React",
      imgUrl: "/src/assets/images/project5.svg",
      livePreview:"https://bhaktir-portfolio.netlify.app/",
      viewCode:"https://github.com/bhakti199921/Portfolio",
    },
  ];
  return (
    <>
    <section className="container">
      <div className="projects">
        <div>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Things I’ve built so far</p>
        </div>
        <div className="projects-box">

          {ProjectList.map((item,index) => {
            const { title, description, techUsed,imgUrl,livePreview ,viewCode } = item;
            console.log(title, description, techUsed,imgUrl,"allobj");
          
            return (
              <>
                <div className="card-wrapper" key={index}>
                <img src={imgUrl}/>
                  <div className="card-inner">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-desc">{description}</p>
                    <p className="card-project-stack">
                      <span>Tech stack :</span> {techUsed}
                    </p>
                    <div className="code-details">
                      <a href={livePreview} target="_blank" rel="noreferrer" >
                        <img src={link} alt="" />
                        <span>Live Preview</span>
                      </a>

                      <a href={viewCode} target="_blank" rel="noreferrer">
                        <img src={github} alt="" />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        
        </div>
      </div>
      </section>
    </>
  );
}

export default Project;
