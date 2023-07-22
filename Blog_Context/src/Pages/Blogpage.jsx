import React, { useEffect, useState } from 'react'
import { useNavigate,useLocation} from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import { useContext } from 'react';
 import BlogDetails from "../components/BlogDetails"
import { baseUrl } from '../baseUrl';


const Blogpage =()=> {
     
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs] = useState([])
    const location = useLocation();
    const navigation = useNavigate();
    const { setLoading, loading } = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1)

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${baseUrl}?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.log("Error aa gya in blog id wali call me");
            setBlog(null);
            setRelatedBlogs([]);
        }
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname])

    return(
        <div>
            <Header/>
            <div>
            <button onClick={()=>navigation(-1)}>
           Back
            </button>
            </div>
            {
                loading ? <p>loading</p>:
                blog ? (<div> 
                <BlogDetails post={blog}/>
                <h2>relatedBlogs</h2>
                {
                    relatedblogs.map( (post)=>{
                        <div key={post.id}> 
                        <BlogDetails post={post}/>
                        </div>
                    })
                }
                </div>) : <p>No Blog Found</p>
            }
        </div>
    )

}

export default Blogpage