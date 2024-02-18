import html from "../assets/images/html-img.svg";
import css from "../assets/images/css-img.svg";
import js from "../assets/images/js-img.svg";
import react from "../assets/images/react-img.svg";
import info from "../assets/images/info.svg";
import bootstrap from "../assets/images/logos_bootstrap.svg";
import tailwind from "../assets/images/tailwind.svg";
import sass from "../assets/images/logos_sass.svg";
import git from "../assets/images/logos_git-icon.svg";
import cib_greensock from "../assets/images/cib_greensock.svg";
import vscode from "../assets/images/vscode.svg";
import github from "../assets/images/github.svg";

function MyStack() {
  return (
    <>
    <section className="container">
      <div className="mystack">
        <h2 className="section-title">My Tech Stack</h2>
        <p className="section-subtitle">
          Technologies I’ve been working with recently{" "}
        </p>
        <ul className="mystack-list">
          <li>
            <img src={html} alt="html" height={60} width={60} />
          </li>
          <li>
            <img src={css} alt="css" height={60} width={60} />
          </li>
          <li>
            <img src={js} alt="js" height={60} width={60} />
          </li>
          <li>
            <img src={react} alt="react" height={60} width={60} />
          </li>
          <li>
            <img src={info} alt="info" height={60} width={60} />
          </li>
          <li>
            <img src={bootstrap} alt="bootstrap" height={60} width={60} />
          </li>
        </ul>
        <ul className="mystack-list">
          <li>
            <img src={tailwind} alt="tailwind" height={60} width={60} />
          </li>
          <li>
            <img src={sass} alt="sass" height={60} width={60}/>
          </li>
          <li>
            <img src={git} alt="git" height={60} width={60}/>
          </li>
          <li>
            <img src={cib_greensock} alt="cib_greensock" height={60} width={60} />
          </li>
          <li>
            <img src={vscode} alt="vscode" height={60} width={60}/>
          </li>
          <li>
            <img src={github} alt="github" height={60} width={60}/>
          </li>
        </ul>
      </div>
      </section>
    </>
  );
}

export default MyStack;
