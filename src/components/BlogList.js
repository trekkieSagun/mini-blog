import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h1 style={{ color: "skyblue" }}>{title}</h1>
      {blogs
        .slice(0)
        .reverse()
        .map((item, index) => (
          <div className="blog-preview" key={index}>
            <Link to={`/blogs/${item.id}`}>
              <h2>{item.title}</h2>

              <p>
                Written By.{" "}
                <strong style={{ color: " rgb(73, 72, 72)" }}>
                  {item.author}
                </strong>
              </p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BlogList;
