import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Tony Bahadur Stark");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsSubmitting(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsSubmitting(false);
      history.push("/");
    });
  };

  return (
    <div className="create-blog">
      <h2>Add new blog</h2>
      <form className="form-group" onSubmit={handleSubmit}>
        <label>Blog title :</label>
        <input
          type="text"
          required
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body :</label>
        <textarea
          required
          className="form-control"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author :</label>
        <select
          className="form-control"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        >
          <option value="Tony Bahadur Stark">Tony Bahadur Stark</option>
          <option value="Hulk Tsering Sherpa">Hulk Tsering Sherpa</option>
          <option value="Captain Bahadur America ">
            Captain Bahadur America{" "}
          </option>
          <option value="Thor Bahadur">Thor Bahadur</option>
        </select>

        {isSubmitting ? (
          <button className="btn btn-success" disabled>
            Addding Blog ....
          </button>
        ) : (
          <button className="btn btn-success">Add Blog</button>
        )}
      </form>
    </div>
  );
};

export default CreateBlog;
