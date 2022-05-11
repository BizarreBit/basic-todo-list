import { useContext, useState } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

function TaskEdit({ id, taskTitle, closeEdit }) {
  const { updateTask } = useContext(TaskListContext);

  const [input, setInput] = useState(taskTitle);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== taskTitle) {
      console.log(!!input);
      if (input) {
        const promise = updateTask(id, { title: input });
        promise.then((result) => result ? closeEdit() : setError("Network Error: Please check your connection."));
      } else setError("Task title is required");
    } else closeEdit();
  };
  return (
    <form onSubmit={handleSubmit} className="flex-grow-1">
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`form-control rounded-0 ${error && "is-invalid"}`}
        />
        <button className="btn btn-primary rounded-0">
          <i className="far fa-edit" />
        </button>
        <button
          type="button"
          onClick={closeEdit}
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
