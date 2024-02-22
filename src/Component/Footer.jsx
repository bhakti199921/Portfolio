import github from "../assets/images/github.svg";
import twitter from "../assets/images/twitter.svg";
import linkdin from "../assets/images/social_linkedin.svg";
import { Link } from "react-router-dom";
// import "../assets/scss/component/_base.scss";
// import "../assets/scss/component/_footer.scss";
import logofooter from"../assets/images/logo-footer.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="container">
        <div className="footer-content">
          <div>
            <img src={logofooter} alt="logofooter" className="footer-logo"/>
          </div>
          <div className="footer-bottom-right">
            <p className="footer-bottom-right-contactdetails">+91 12345 09876</p>
            <p className="footer-bottom-right-contactdetails">info@example.com</p>
            <ul className="footer-img-wrapper">
              <li>
                <Link to="/">
                  <img src={github} alt="github" className="footer-img" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={twitter} alt="twitter" className="footer-img" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={linkdin} alt="linkdin" className="footer-img" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
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
            </ul>
            <div>
                <p className="designed-txt">Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></p>
            </div>
        </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
