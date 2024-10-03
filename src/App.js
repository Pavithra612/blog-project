import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Base from "./components/Base.js";
import About from "./components/About.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginSignup from "./Pages/LoginSignup.js";
//import Signup from './Pages/Signup.js';
import Home from "./Pages/Home.js";
import AboutMe from "./Pages/AboutMe.js";
import DashBoard from "./Pages/DashBoard.js";
import NavBar from "./Pages/NavBar.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="*" element={<h1>No found!!111!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// Bwtn DIV

/* <Base>
<h6>This is App component</h6> {/*Child component of Base
</Base> 
<p>----------------------------------------</p>
<About/> */
