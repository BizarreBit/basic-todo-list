import { useContext, useState } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import TaskEdit from "./TaskEdit";

function TaskItem({ taskItem: { id, title, completed } }) {
  const { deleteTask, updateTask } = useContext(TaskListContext);

  const [isEdit, setIsEdit] = useState(false);

  const closeEdit = () => setIsEdit(false);

  return (
    <li
      key={id}
      className={`list-group-item d-flex justify-content-between align-items-center py-3 bd-callout bd-callout-${
        completed ? "success" : "warning"
      }`}
    >
      {isEdit ? (
        <TaskEdit id={id} taskTitle={title} closeEdit={closeEdit} />
      ) : (
        <>
          <span onClick={() => setIsEdit(true)}>{title}</span>
          <div className="btn-group">
            <button
              onClick={() => updateTask(id, { completed: !completed })}
              className="btn btn-info rounded-0"
            >
              <i className={`fas fa-toggle-${completed ? "on" : "off"}`} />
            </button>
            <button
              onClick={() => deleteTask(id)}
              className="btn btn-danger rounded-0"
            >
              <i className="far fa-trash-alt" />
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;
