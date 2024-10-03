import logo from "./logo.svg";
import {useState} from 'react'; //
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {About,Base} from "./components/Base.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginSignup from "./Pages/LoginSignup.js";
//import Signup from './Pages/Signup.js';
import Home from "./Pages/Home.js";
import AboutMe from "./Pages/AboutMe.js";
import DashBoard from "./Pages/DashBoard.js";
import NavBar from "./Pages/NavBar.js";

function App() {
  const[loggedIn, setLoggedIn] = useState(false); //

  return (
    <div className="main">
      <Router>
      {loggedIn && (
          <NavBar
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
        )} 
  
        {/* <NavBar /> */}
        <Routes>
        {loggedIn ? (
          <>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/login" element={<LoginSignup />} /> */}
          <Route path="/about" exact element={<AboutMe />} />
          <Route path="/dashboard" exact element={<DashBoard />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          </>
        ):(
        <Route
        path="/login" exact element={<LoginSignup loggedIn={loggedIn}
        setLoggedIn={setLoggedIn} />} /> 
        )}
        {/* Redirect to home if the user is logged in and tries to access the auth route */}
        <Route path="*" element={loggedIn ? (
                <Home/>
              ) : (
                <LoginSignup
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              )
            }
          />
        </Routes>
      </Router>
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



