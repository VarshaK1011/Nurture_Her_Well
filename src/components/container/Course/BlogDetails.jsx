import React from "react";


const BlogDetails = ({ image, category, title }) => {
  return (
    <div className="p-2 shadow-lg min-w-[18rem] bg-white rounded-md ">
      <img src={image} alt="" />
      <div className="mt-2 text-xs text-Teal">{category}</div>
      <div className="text-sm mt-2 font-bold">{title}</div>
      <div className="flex items-center justify-between">
       
        <div className="flex items-center ml-16 px-3 py-3 font-bold border border-solid text-white bg-Teal rounded-lg text-sm">
          
        <a href={`https://en.wikipedia.org/wiki/${category}`} target="_blank" rel="noopener noreferrer" className="btn-read-more">Read More</a>
        </div>
       
      </div>
    </div>
  );
};

export default BlogDetails;
