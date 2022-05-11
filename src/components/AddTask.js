import { useState, useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

function AddTask() {
  const { addTask } = useContext(TaskListContext);
  
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const promise = addTask(input.trim());
      promise.then((result) => result ? setInput("") : setError("Network Error: Please check your connection."));
    } else setError("Task title is required.");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`form-control rounded-0 ${error ? "is-invalid" : ""}`}
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
