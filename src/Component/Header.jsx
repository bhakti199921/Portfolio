import { Link } from "react-router-dom";
import "../assets/scss/component/_header.scss";
import github from "../assets/images/github.svg";
import twitter from "../assets/images/twitter.svg";
import linkdin from "../assets/images/social_linkedin.svg";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <h1>
              <Link to="/">
                <img src={logo} className="header-logo"/>
              </Link>
            </h1>

            <ul className="nav-list">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/techstack">Tech Stack</Link>
              </li>
              <li>
                <Link to="/project">Projects</Link>
              </li>
              <li>
                <Link to="/contactus">Contact</Link>
              </li>
              <li>
                <Link to="/">
                  <img src={github} alt="github" className="header-img" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={twitter} alt="twitter" className="header-img" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={linkdin} alt="linkdin" className="header-img" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
