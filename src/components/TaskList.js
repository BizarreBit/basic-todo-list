import { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { filteredTaskList } = useContext(TaskListContext);

  return (
    <div className="shadow">
      <ul className="list-group rounded-0">
        {filteredTaskList.map((item) => (
          <TaskItem key={item.id} taskItem={item} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
