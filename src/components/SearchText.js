import { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

function SearchText() {
  const { searchTask } = useContext(TaskListContext);

  const [input, setInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => searchTask({ title: input }), 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [input]);

  return (
    <div className="input-group">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="form-control rounded-0"
      />
      <button
        onClick={() => setInput("")}
        className="btn btn-secondary rounded-0"
      >
        <i className="fas fa-times" />
      </button>
    </div>
  );
}

export default SearchText;
