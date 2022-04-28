import TaskItem from "./TaskItem";

function TaskList({ filteredTaskList, deleteTask, updateTaskItem }) {
  return (
    <div className="shadow">
      <ul className="list-group rounded-0">
        {filteredTaskList.map((taskItem) => (
          <TaskItem key={taskItem.id} deleteTask={deleteTask} updateTaskItem={updateTaskItem} taskItem={taskItem} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
