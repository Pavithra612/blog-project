// const Login =() => {
//     return(
//         <div>
//             <p>WElcome to Login page !</p>
//         </div>
//     )
// }

// export default Login;

import React from 'react'
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import { useState } from 'react';

import user_icon from '../components/Assets/person.png';
import email_icon from '../components/Assets/email.png';
import password_icon from '../components/Assets/password.png';

export const LoginSignup = ({setLoggedIn}) => {
  let navigate = useNavigate()

  // UseState is a react hook which provides us with a variable and function to set data of this variable
  
  const [action, setAction] = useState("Login");
  return (
    <div className='container'>
        <div className='login-form'>
            <div className="header">
              <div className="text">{action}</div>
              <div className="underline"></div>
        </div>
        <div className="inputs">
          {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
        </div>}
        
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email ID" />
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password"/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password?</div>}
      {action==="Sign Up"?<div></div>:<div className="sign-in">Not a member? <p className='si'>Sign In </p></div>}
      {action==="Login"?<div></div>:<div className="log-in">Already a member? <p className='lg'>Login</p></div>}
      <div className="submit-container">
        <button className={action==="Login"?"submit grey":"submit"} onClick={()=>{
          setAction("Sign Up")}}>Sign Up</button>
        <button className={action==="Sign Up"?"submit grey":"submit"} onClick={()=>{
          navigate("/")
          setLoggedIn(true)
          setAction("Login")
          }}>Login</button>
      </div>
    </div>
</div>
  )
}

export default LoginSignup;

