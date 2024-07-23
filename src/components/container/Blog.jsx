// Blog.js

import React from "react";
import { blogData } from "../../Data";
import BlogDetails from "../../components/container/Course/BlogDetails";

const Blog = () => {
  return (
    <div className="section" id="courses">
      <div className="text-xl font-bold mt-32">Most Popular Blogs</div>
      <div className="mt-12 overflow-x-hidden w-full relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {blogData.map((blog) => {
            return <BlogDetails key={blog.id} {...blog} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
