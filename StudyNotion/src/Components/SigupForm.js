import React from 'react'
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
// import Dashboard from '../pages/Dashboard';
function SigupForm({ setLoggedIn }) {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
    const [showpassword, setShowPassword] = useState(false);
    const [showConfirmpassword, setShowConfirmPassword] = useState(false);
    const [accounType, setAccountType] = useState("student");

    const navigate = useNavigate();

    function changeHandler(event) {
        setFormData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event) {
        debugger;
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("password do not match");
            return;
        }
        setLoggedIn(true);
        toast.success("account created");
        // const accountData = {
        //     ...formData
        // }
        // console.log("printing the account data");
        // console.log(accountData);
        navigate('/dashboard');

    }
    return (
        <div>
            {/* Student - Instructor tab */}
            <div className='flex bg-blue-950 p-1 my-6 gap-x-1 rounded-full max-w-max'>

                <button className={`${accounType === "student"
                    ? "bg-blue-800 text-white"
                    : "bg-transparent text-gray-400"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("student")}>
                    Student</button>

                <button className={`${accounType === "instructor"
                    ? "bg-blue-800 text-gray-400"
                    : "bg-transparent text-white "} py-2 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("instructor")}>
                    Instructor</button>
            </div>
            {/* Sign up form fields for student and instructor tabs*/}
            <form onSubmit={submitHandler}>
                {/* First name and Last name  */}
                <div>
                    <div className='flex justify-between'>
                        <input className='bg-blue-950 rounded-[0.5rem] w-full p-[12px] text-white' type='text' required name="firstName" value={formData.firstname} onChange={changeHandler} placeholder='First Name' />
                        <input className='bg-blue-950 rounded-[0.5rem] w-full p-[12px] text-white' type='text' required name="lastName" value={formData.lastname} onChange={changeHandler} placeholder='First Name' />

                    </div>
                    <label><p className='text-[0.875rem] text-white mb-1 leading-3'>Email<sup className='text-pink-200'>*</sup> </p>
                        <input className='bg-blue-950 rounded-[0.5rem] w-full p-[12px] text-white' type='email' required name="email" value={formData.email} onChange={changeHandler} placeholder='Enter email id ' />
                    </label>
                    {/* confirm password and create password */}
                    <div>
                        <div className='flex justify-between'>
                            <label className='relative'><p className='text-[0.875rem] text-white mb-1 leading-3'>Create password <sup className='text-pink-200'>*</sup> </p>
                                <input className='bg-blue-950 rounded-[0.5rem] w-full p-[12px] text-white' type={showpassword ? ("text") : ("password")} required name="password" value={formData.password} onChange={changeHandler} placeholder='Enter the password' />
                                {/* password ko show or hide krne ke liye agr phle true thi to false krdega  */}
                                <span className='absolute right-3 top-[32px]  cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                                    {/* password show or hide krvane ke icon ke liye */}
                                    {showpassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                                </span>
                            </label>
                            <label className='relative'><p className='text-[0.875rem] text-white mb-1 leading-3'>Confirm password <sup className='text-pink-200'>*</sup> </p>
                                <input className='bg-blue-950 rounded-[0.5rem] w-full p-[12px] text-white' type={showConfirmpassword ? ("text") : ("password")} required name="confirmPassword" value={formData.confirmpasswordpassword} onChange={changeHandler} placeholder='Confirm password' />
                                {/* password ko show or hide krne ke liye agr phle true thi to false krdega  */}
                                <span className='absolute right-3 top-[32px]  cursor-pointer' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                                    {/* password show or hide krvane ke icon ke liye */}
                                    {!showConfirmpassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <button className=' rounded-[8px] h-8 w-full bg-yellow-300 p-x-[12px] p-y-[8px] font-medium mt-3'>Create Account</button>
            </form>
        </div>
    )
}

export default SigupForm;