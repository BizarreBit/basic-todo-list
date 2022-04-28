import { useState } from "react";
import TaskEdit from "./TaskEdit";

function TaskItem({ deleteTask, updateTaskItem, taskItem: {id, title, isFinish} }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleStatusToggle = () => updateTaskItem(id, {isFinish: !isFinish});

  const updateTaskTitle = (title) => updateTaskItem(id, {title: title});

  return (
    <li
      key={id}
      className={`list-group-item d-flex justify-content-between align-items-center py-3 bd-callout ${
        isFinish ? "bd-callout-success" : "bd-callout-warning"
      }`}
    >
      {isEdit ? (
        <TaskEdit
          title={title}
          exitEdit={() => setIsEdit(false)}
          updateTaskTitle={updateTaskTitle}
        />
      ) : (
        <>
          <span onClick={() => setIsEdit(true)}>{title}</span>
          <div className="btn-group">
            <button
              onClick={handleStatusToggle}
              className="btn btn-info rounded-0"
            >
              <i className={`fas fa-toggle-${isFinish ? "on" : "off"}`} />
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
