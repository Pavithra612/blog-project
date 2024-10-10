import React from 'react'
import { useState } from 'react';
// import EmptyList from '../../components/common/EmptyList';
import BlogList from '../components/Home/BlogList/BlogList.js';
import Header from '../components/Home/Header/Header';
import Filter from '../components/Home/Filter/Filter';
import {blogList} from '../Config/Data.js';

const Home =() => {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');

    // Search submit
//   const handleSearchBar = (e) => {
//     e.preventDefault();
//     handleSearchResults();
//   };

    // search for blogs by title
    // const handleSearchResults=()=>{
    // const allBlogs=blogList;
    // const filteredBlogs = allBlogs.filter((blog) =>
    //     blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    //   );
    //   setBlogs(filteredBlogs);
    // };

     // Clear search and show all blogs
//   const handleClearSearch = () => {
//     setBlogs(blogList);
//     setSearchKey('');
//   };


    return(
        <div>
            <Header/>
            <Filter
            // value={searchKey}
            // clearSearch={handleClearSearch}
            // formSubmit={handleSearchBar}
            // handleSearchKey={(e) => setSearchKey(e.target.value)}
    />
    <BlogList blogs={blogList}/>
           {/* Blog List & Empty View */}
      {/* {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />} */}
        </div>
    )
}

export default Home;