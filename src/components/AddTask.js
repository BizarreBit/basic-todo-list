import { useState } from "react";

function AddTask({ addNewTask }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => setTitle(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return setError("Title is required.");
    addNewTask(title);
    setError("");
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={title}
            onChange={handleChange}
            className={`form-control rounded-0 ${error && "is-invalid"}`}
          />
          <button className="btn btn-success rounded-0">
            <i className="fas fa-plus" />
          </button>
          <div className="invalid-feedback">{error}</div>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
