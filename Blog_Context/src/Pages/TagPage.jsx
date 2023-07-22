import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Header from "../components/Header"
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


function TagPage() {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return (
        <div>
            <Header />
            <div>
                <button onClick={() => navigation(-1)}>
                    back
                </button>
                <h2>
                    Blogs Tagged <span>#{tag}</span>
                </h2>
            </div>
            <Blogs/>
            <Pagination/> 
        </div>
    )
}

export default TagPage