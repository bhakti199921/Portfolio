// import React from 'react'
import "../assets/scss/_style.scss";
import "../assets/scss/component/_base.scss";
import "../assets/scss/_homePage.scss";
import profileimg from "../assets/images/profile.png";
import MyStack from "../Component/MyStack";
import Project from "../Component/Project";
// import Footer from "../Component/Footer";

function HomePage() {
  return (
    <>
      <main className="main-content">
        <section className="container">
          <div className="hero-banner">
            <div className="hero-banner-content">
              <div>
                <h2 className="hero-banner-title">
                  Hi, <br />
                  My Name is ,<br />
                  <span>Bhakti</span>
                  <br />I build things for web
                </h2>
              </div>
              <div>
                <img src={profileimg} alt="profileimg" className="hero-banner_profileimg" />
              </div>
            </div>
          </div>
          <MyStack/>
          <Project/>
        </section>
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default HomePage;
