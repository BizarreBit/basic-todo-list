import { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

function CountTask() {
  const { filteredTaskList } = useContext(TaskListContext);

  return (
    <div className="mt-4 py-3 text-center text-white bg-black">
      {filteredTaskList.filter((item) => !item.completed).length} of{" "}
      {filteredTaskList.length} Remaining
    </div>
  );
}

export default CountTask;
