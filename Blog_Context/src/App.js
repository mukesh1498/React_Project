import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { Routes, Route, useSearchParams } from "react-router-dom"
import './App.css'
import { useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import TagPage from './Pages/TagPage'
import BlogPage from './Pages/Blogpage'
import CategoryPage from './Pages/CategoryPage';

export default function App() {

  const { fetchBlogPosts } = useContext(AppContext);
 const [searchParams,setsearchParams] = useSearchParams();
 const location = useLocation();
  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tag")){
      // iska mtlb tag wala page show krna h
      const tag= location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null, category);
    }else{
      fetchBlogPosts(Number(page));
    }
    // jqb bhi url me tag,category,page change hoga tab api chalegi  1. url ka pathname 2. page ka number change hoga to call hoga
}, [location.pathname, location.search]);
 
  return (

    <Routes>
    {/* this is dynamic path to show pages/component  */}
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogsId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
    </Routes>

    // <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
    //   <Header />
    //   <Blogs />
    //   <Pagination />
    // </div>
  );
}
