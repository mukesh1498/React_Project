import React from 'react'
import Templates from '../Components/Templates'
import loginImg from "../assets/login.png"

function Login({setLoggedIn}) {
  return (
    // yahan se hum data bhejte rhenge props ke help se o rhmara login page direct ban jayega 
    <Templates
      title="Welcome Back"
      desc1="Build Skills for today, tomorrow and beyond."
      desc2="Education to future-proof your career"
      image={loginImg}
      formType="login"
      setLoggedIn={setLoggedIn}
    />
  )
}

export default Login
