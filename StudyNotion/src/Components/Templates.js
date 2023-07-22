import React from 'react'
import frameImage from '../assets/frame.png'
import LoginForm from './LoginForm';
import SignupForm from "./SigupForm";
import { FcGoogle } from "react-icons/fc"
function Templates({ title, desc1, desc2, image, formType, setLoggedIn }) {
    //   console.log("ye rha hmara formtype");
    //   console.log(formType);
    return (
        <div className='flex w-11/12 max-w-[1160px] justify-between py-12 mx-auto gap-x-12 gap-y-0'>
            <div className='w-11/12 max-w-[450px] mx-0'>
                <h1 className='text-white font-semibold text-[1.875rem] leading-[2.375]'>{title}</h1>
                <p className='text-[1.15rem] leading-[1.376rem] mt-4'>
                    <span className='text-white'>{desc1}</span>
                    <br />
                    <span className='text-cyan-700 italic'>{desc2}</span>
                </p>
                {formType === "signup" ?
                    (<SignupForm setLoggedIn={setLoggedIn} />) :
                    (<LoginForm setLoggedIn={setLoggedIn} />)
                }
                <div className='flex w-full items-centermy-4 gap-x-2'>
                    <div className='h-[1px] bg-black'></div>
                    <p className='text-white font-medium leading[1.375rem]'>or</p>
                    <div className='h-[1px] bg-black'></div>
                </div>
                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-blue-900 border px-[12px] py-[8px] gap-x-2 mt-6'>
                    <FcGoogle />
                    Sign up with Google
                </button>
            </div>
            <div className='relative w-11/12 max-w-[450px]'>
                <img src={frameImage} alt="patten" width={558} height={504} loading='lazy' />
                <img src={image} alt="Students" width={558} height={460} className='absolute -top-4 right-4' loading='lazy' />
            </div>
        </div>
    )
}

export default Templates
