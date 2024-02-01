import { Link } from "react-router-dom";
import "../assets/scss/component/_header.scss";
import github from "../assets/images/github.svg";
import twitter from "../assets/images/twitter.svg";
import linkdin from "../assets/images/social_linkedin.svg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <h1>
              <Link to="/">Logo</Link>
            </h1>

            <ul className="nav-list">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">Tech Stack</Link>
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
