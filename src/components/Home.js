import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import loading from "./loading.gif";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  // const handleDelete = (id) => {
  //   const updatedBlogs = blogs.filter((item) => item.id !== id);
  //   setBlogs(updatedBlogs);
  // };

  return (
    <div>
      <div className="home">
        {error && <div>{error}</div>}
        {isLoading && <img src={loading} alt="No preview available" />}
        {blogs && <BlogList blogs={blogs} title="All Posts" />}
      </div>
    </div>
  );
};

export default Home;
