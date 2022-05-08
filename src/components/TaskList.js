import TaskItem from "./TaskItem";

function TaskList() {
  return (
    <div className="shadow">
      <ul className="list-group rounded-0">
        <TaskItem />
      </ul>
    </div>
  );
}

export default TaskList;
