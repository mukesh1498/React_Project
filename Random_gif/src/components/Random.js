import React, { useState } from 'react'

import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {
 
  const { gif, loading, fetchData } = useGif();

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border  border-black flex flex-col items-center mt-[15px] gap-y-10 '>
      <h1 className=' mt-[15px] text-2xl underline gap-y-4 uppercase font-bold'>A Random GIf</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width="450" />)
      }


      <button onClick={() => fetchData()} className='w-10/12 mb-[20px]  text-lg py-2 rounded-md bg-slate-300'>Generate</button>
    </div>
  )
}
export default Random