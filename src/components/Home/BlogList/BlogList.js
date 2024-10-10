import React from 'react'
import './BlogList.css';
//import Blogs from '../../../Pages/Blogs'
import BlogItem from '../BlogList/BlogItem/BlogItem';

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
