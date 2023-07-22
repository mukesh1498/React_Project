import { createContext } from "react"
import { useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

// step 1. creation
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();
    // data filling pending  
    async function fetchBlogPosts(page = 1, tag = null, category) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        console.log(url)
        if (tag) {
            url += `&tag=${tag}`;
        }
        if (category) {
            url += `&category=${category}`;
        }
        console.log("printitng the data url");
        console.log(url);
        try {
            const result = await fetch(url);
            const data = await result.json();
            if (!data.posts || data.posts.length === 0)
                throw new Error("some thing went wrong")
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch (error) {
            console.log('Error in fetching data');
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    // onclick find data according to page no.
    function changePageHandler(page) {
        navigate({ search: `?page=${page}` });
        setPage(page);
    }


    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        changePageHandler
    }
    // step 2. providing
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>


}
