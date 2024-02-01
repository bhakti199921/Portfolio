import { Route, Routes } from "react-router-dom";
import AboutMe from "./Component/AboutMe";
// import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";

function Routing() {
  return (
    <>
      <Routes>
        {/* <Route exact path={"/"} element={<LandingPage/>}></Route> */}
        <Route exact path={"/about"} element={<AboutMe />}></Route>
        <Route exact path={"/"} element={<HomePage/>}></Route>
      </Routes>
    </>
  );
}

export default Routing;
