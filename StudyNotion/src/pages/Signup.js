import React from 'react'
import signupImg from '../assets/signup.png'
import Templates from '../Components/Templates'

function Signup({ setLoggedIn }) {
  return (
    <Templates
      title="join the million learning to code with StudyNotion for free"
      desc1="Build Skills for today, tomorrow and beyond."
      desc2="Education to future-proof your career"
      image={signupImg}
      formType="signup"
      setLoggedIn={setLoggedIn}
    />
  )
}

export default Signup
