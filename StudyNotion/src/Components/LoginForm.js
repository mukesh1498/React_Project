import React, { useState } from 'react'
import { toast } from "react-hot-toast"
// import Dashboard from '../pages/Dashboard';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';


function LoginForm({ setLoggedIn }) {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const [showpassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
        console.log(formData);
    }

    function submitHandler(event) {
        event.preventDefault();
        setLoggedIn(true);
        toast.success("logged In");
        navigate("/dashboard")
    }

    return (
        <form onSubmit={submitHandler}
            className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'><p className='text-[0.875rem] text-white mb-1 leading-3'>Email Address</p><sup>*</sup>
                <input type='email' required name="email" className='bg-blue-950 rounded-[0.5rem] w-full p-[12px] text-white' value={formData.email} onChange={changeHandler} placeholder='Enter email address ' />
            </label>
            <label>
                <p>
                    Password <sup>*</sup>
                </p>
                <label  className='relative w-full'><p className='text-[0.875rem] text-white mb-1 leading-3'>Password</p><sup>*</sup>
          
                <input type={showpassword ? ("text") : ("password")} required name="password" className='bg-blue-950 rounded-[0.5rem] w-full p-[12px] text-white' value={formData.password} onChange={changeHandler} placeholder='Enter the password' />
                {/* password ko show or hide krne ke liye agr phle true thi to false krdega  */}
                <span className='absolute right-3 top-[38px]  cursor-pointer'
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {/* password show or hide krvane ke icon ke liye */}
                    {!showpassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                </span>
                </label>
                <Link to="#">
                    <p className='text-xs mt-1 text-blue-300 max-w-max ml-auto'>
                        Forget Password
                    </p>
                </Link>
            </label>
            <button className='rounded-[8px] bg-yellow-300 p-x-[12px] p-y-[8px] font-medium '>Sign Up</button>
        </form>
    )
}

export default LoginForm
