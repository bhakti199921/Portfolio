import { Route, Routes } from "react-router-dom";
import AboutMe from "./Component/AboutMe";
// import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";
import Contactus from "./Component/Contactus";
import Project from "./Component/Project";
import MyStack from "./Component/MyStack";

function Routing() {
  return (
    <>
      <Routes>
        {/* <Route exact path={"/"} element={<LandingPage/>}></Route> */}
        <Route exact path={"/about"} element={<AboutMe />}></Route>
        <Route exact path={"/"} element={<HomePage/>}></Route>
        <Route exact path={"/contactus"} element={<Contactus/>}></Route>
        <Route exact path={"/project"} element={<Project/>}></Route>
        <Route exact path={"/techstack"} element={<MyStack/>}></Route>
      </Routes>
    </>
  );
}

export default Routing;
