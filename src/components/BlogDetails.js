import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import loading from "./loading.gif";

import useFetch from "./useFetch";

const BlogDetails = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const { id } = useParams();
  const history = useHistory();

  const {
    data: blog,
    error,
    isLoading,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setAuthor(blog.author);
      setBody(blog.body);
    }
  }, [blog]);

  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    const confirmed = window.confirm("Do you want to delete this?");

    if (confirmed) {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
      }).then(() => {
        history.push("/");
      });
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {});

    setTitle(title);

    setBody(body);
    setAuthor(author);

    setIsEditing(false);
  };

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isLoading && <img src={loading} alt="No preview available" />}

      {isEditing ? (
        <div className="blogs-actions">
          <button
            className="btn btn-success"
            onClick={handleSave}
            style={{
              backgroundColor: "orange",
              padding: " 5px 10px",
              fontSize: "medium",
              color: "white",
              fontWeight: "600",
            }}
          >
            Save
          </button>
          <button
            className="btn btn-warning"
            onClick={handleCancel}
            style={{
              backgroundColor: "red",
              padding: " 5px 10px",
              fontSize: "medium",
              color: "white",
              fontWeight: "600",
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="blogs-actions">
          <button onClick={handleEdit}>
            <i style={{ color: "skyblue" }} className="fas fa-edit"></i>
          </button>
          <button onClick={handleDelete}>
            <i style={{ color: "red" }} className="fas fa-trash"></i>
          </button>
        </div>
      )}
      {blog && (
        <div className="article">
          {isEditing ? (
            <article>
              <h2>
                Blog title : <br />{" "}
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  style={{ border: "1px solid #ddd", width: "100%" }}
                  value={title}
                />
              </h2>

              <p>
                Written By : <br />
                <select
                  onChange={(e) => setAuthor(e.target.value)}
                  style={{ border: "1px solid #ddd", width: "100%" }}
                  value={author}
                >
                  <option value="Tony Bahadur Stark">Tony Bahadur Stark</option>
                  <option value="Hulk Tsering Sherpa">
                    Hulk Tsering Sherpa
                  </option>
                  <option value="Captain Bahadur America ">
                    Captain Bahadur America{" "}
                  </option>
                  <option value="Thor Bahadur">Thor Bahadur</option>
                </select>
              </p>
              <div>
                Blog Body :<br />{" "}
                <textarea
                  onChange={(e) => setBody(e.target.value)}
                  rows="6"
                  style={{ border: "1px solid #ddd", width: "100%" }}
                  value={body}
                ></textarea>
              </div>
            </article>
          ) : (
            <article>
              <h2>{title}</h2>

              <p>
                Written By : <strong>{author}</strong>
              </p>
              <div>{body}</div>
            </article>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
