import React, { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "blog1",
      body: "There are many variations of passages suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
      author: "Tony Bahadur Stark",
      id: 1,
    },
    {
      title: "blog2",
      body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
      author: "Captain Bahadur America",
      id: 2,
    },
    {
      title: "blog3",
      body: "There are many variations of passages of Lorem Ipsum available, which don't look even slightly believable",
      author: "Thor Prasad",
      id: 3,
    },
  ]);
  return (
    <div>
      <h1>Home Page</h1>
      <div className="home">
        {blogs.map((item, index) => (
          <div className="blog-preview" key={index}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <p>Written By. {item.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
