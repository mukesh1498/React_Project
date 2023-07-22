import React from 'react'
import logo from '../assets/Logo.svg'
import { toast } from 'react-hot-toast'
import { Link } from "react-router-dom"



function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setLoggedIn = props.setLoggedIn;

  const HeaderButton = ({ onClick, label, className }) => {
    return <button className={`text-white bg-blue-950 py-[8px] px-[12px] rounded-[8px] border border-black ${className}`} onClick={onClick}>{label} </button>
  }

  const onLogout = () => {
    setLoggedIn(false);
    toast.success("Logged out");
  }

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>
      <Link to="/">
        <img src={logo} alt='logo' width={160} height={32} loading='lazy' />
      </Link>
      <nav>
        <ul className='flex text-blue-950 gap-x-6 '>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact Us</Link></li>
        </ul>
      </nav>
      <div className='flex items-center gap-x-4'>
        {/* Add login and sign up buttons here */}
        {!isLoggedIn && <Link to='/login'><HeaderButton label={"Login"} /></Link>}
        {!isLoggedIn && <Link to='/signup'><HeaderButton label={"Sign Up"} /></Link>}
        {isLoggedIn && <Link to='/logout'><HeaderButton label={"Log Out"} onClick={onLogout} /></Link>}
        {isLoggedIn && <Link to='/dashboard'><HeaderButton label={"Dashboard"} className="text-green-200" /></Link>}


      </div>
    </div>
  )
}

export default Navbar
