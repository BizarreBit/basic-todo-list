import { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

function SearchStatus() {
  const {search, searchTask} = useContext(TaskListContext)

  const handleChange = (e) => searchTask({completed: e.target.value === "" ? "" : !!+e.target.value })

  return (
    <div className="btn-group ms-3">
      <input
        type="radio"
        name="status"
        id="all"
        value=""
        onChange={handleChange}
        className="btn-check"
        //defaultChecked
        checked={search.completed === ""}
      />
      <label className="btn btn-outline-secondary rounded-0" htmlFor="all">
        <i className="fas fa-tasks" />
      </label>
      <input
        type="radio"
        name="status"
        id="done"
        value="1"
        onChange={handleChange}
        className="btn-check"
        checked={search.completed}
      />
      <label className="btn btn-outline-secondary rounded-0" htmlFor="done">
        <i className="fas fa-clipboard-check" />
      </label>
      <input
        type="radio"
        name="status"
        id="doing"
        value="0"
        onChange={handleChange}
        className="btn-check"
        checked={search.completed === false}
      />
      <label className="btn btn-outline-secondary rounded-0" htmlFor="doing">
        <i className="far fa-clipboard" />
      </label>
    </div>
  );
}

export default SearchStatus;
