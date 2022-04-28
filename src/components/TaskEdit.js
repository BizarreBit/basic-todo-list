import { useState } from "react";

function TaskEdit({ title, exitEdit, updateTaskTitle }) {
  const [editTitle, setEditTitle] = useState(title);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editTitle.trim()) return setError("Title is required.");
    updateTaskTitle(editTitle);
    exitEdit();
  }

  return (
    <form onSubmit={handleSubmit} className="flex-grow-1">
      <div className="input-group">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className={`form-control rounded-0 ${error && "is-invalid"}`}
        ></input>
        <button className="btn btn-primary rounded-0">
          <i className="far fa-edit" />
        </button>
        <button
          type="button"
          onClick={exitEdit}
          className="btn btn-danger rounded-0"
        >
          <i className="fa fa-times" />
        </button>
        <div className="invalid-feedback">{error}</div>
      </div>
    </form>
  );
}

export default TaskEdit;
