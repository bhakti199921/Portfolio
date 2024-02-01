import github from "../assets/images/github.svg";
import twitter from "../assets/images/twitter.svg";
import linkdin from "../assets/images/social_linkedin.svg";
import { Link } from "react-router-dom";
import "../assets/scss/_base.scss";
import "../assets/scss/component/_footer.scss";

function Footer() {
  return (
    <>
      <Footer>
        <section className="container">
        <div className="footer-content">
          <div>Logo</div>
          <div className="footer-bottom-right">
            <p>+91 12345 09876</p>
            <p>info@example.com</p>
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
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>About</Link>
                </li>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>About</Link>
                </li>
                <li>
                    <Link>Home</Link>
                </li>
            </ul>
            <div>
                <p className="designed-txt">Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></p>
            </div>
        </div>
        </section>
      </Footer>
    </>
  );
}

export default Footer;
