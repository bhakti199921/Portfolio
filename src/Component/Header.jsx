import { Link } from "react-router-dom";
// import "../assets/scss/_style.scss";
import "../assets/scss/component/_header.scss";
import github from "../assets/images/github.svg";
import twitter from "../assets/images/twitter.svg";
import linkdin from "../assets/images/social_linkedin.svg";
import logo from "../assets/images/logo.png";
// import { useEffect } from "react";

function Header() {
  // useEffect(() => {
  //   let mode = localStorage.getItem("darkmode");
  //   let element = document.body;
  //   if (mode == "true") {
  //     element.classList.add("darkmode");
  //   } else {
  //     if (element.className.includes("darkmode")) {
  //       element.classList.remove("darkmode");
  //     }
  //   }
  // }, []);

  function darkTheme() {
  const toogleId = document.getElementById("themeMode");
  let element = document.body;

  if (toogleId.checked == true) {
    element.classList.add("darkmode");
    localStorage.setItem("darkmode", true);
  } else {
    if (element.className.includes("darkmode")) {
      element.classList.remove("darkmode");
      localStorage.setItem("darkmode", false);
    }
  }
}

function forToggle() {
  console.log("hello");
  if (localStorage.getItem("darkmode") === "true") {
    document.getElementById("themeMode").checked = true;
  } else {
    document.getElementById("themeMode").checked = false;
  }
}

window.onload = function() {
  console.log("hllo");
  forToggle();
};

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <h1>
              <Link to="/">
                <img src={logo} className="header-logo" />
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
              <li>
                <div className="toggle-dark">
                  <label className="switch" onClick={darkTheme}>
                    <input type="checkbox" id="themeMode" />
                    <span className="slider round"></span>
                  </label>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
