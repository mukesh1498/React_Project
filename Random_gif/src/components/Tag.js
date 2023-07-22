import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Tag() {
  const [tag, setTag] = useState('car');
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className='w-1/2 bg-blue-600 rounded-lg border  border-black flex flex-col items-center mt-[15px] gap-y-5 '>

      <h1 className=' mt-[15px] text-2xl underline gap-y-4 uppercase font-bold'>Random {tag} GIf</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width="450" />)
      }
      <input className='w-10/12 rounded-md py-2 text-center text-lg mb-[3px]' onChange={(event) => setTag(event.target.value)} value={tag} />

      <button onClick={() => fetchData(tag)} className='w-10/12 mb-[20px]  text-lg py-2 rounded-md bg-slate-300'>Generate</button>
    </div>
  )
}
export default Tag