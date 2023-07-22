import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from "./BlogDetails"
import './Blogs.css'

const Blogs = () => {
    // consume 
    const { posts, loading } = useContext(AppContext);
    return (
        <div className='w-11/12 max-w-[450px] py-3 justify-center flex flex-col gap-y-7 mt-[66px] mb-[70px]'>
            {loading ?
                (<Spinner />) : (
                    posts.length === 0 ?
                    (<div><p>NO post found </p></div>) :
                        (posts.map((post) => (
                          <BlogDetails key={post.id} post={post} /> 
                        )
                        )
                        )
                )
            }
        </div>
    )
}
export default Blogs