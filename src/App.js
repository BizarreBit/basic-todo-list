import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./components/AddTask";
import SearchBar from "./components/SearchBar";
import CountTask from "./components/CountTask";
import TaskList from "./components/TaskList";

const initialTask = [
  { id: uuidv4(), title: "Watching a movie", isFinish: false },
  { id: uuidv4(), title: "Meeting a doctor", isFinish: false },
  { id: uuidv4(), title: "Dinner with my boss", isFinish: true },
];

function App() {
  const [taskList, setTaskList] = useState(initialTask);
  const [searchText, setSearchText] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  
  const addNewTask = (title) => {
    const newTaskList = [
      { id: uuidv4(), title: title, isFinite: false },
      ...taskList,
    ];
    setTaskList(newTaskList);
  };

  const deleteTask = (id) => {
    const delTaskList = [...taskList];
    delTaskList.splice(
      taskList.findIndex((taskItem) => taskItem.id === id),
      1
    );
    setTaskList(delTaskList);
  };

  const filteredTaskList = taskList.filter(
    (taskItem) =>
      taskItem.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (searchStatus === "" || taskItem.isFinish === searchStatus)
  );

  const updateTaskItem = (id, editProp) => {
    const newTaskList = [...taskList];
    const idx = taskList.findIndex((taskItem) => taskItem.id === id);
    if (idx !== -1) newTaskList[idx] = {...newTaskList[idx], ...editProp}
    setTaskList(newTaskList);
  }
  return (
    <div className="container">
      <div className="mt-5 mx-auto mw-xs ">
        <AddTask addNewTask={addNewTask} />
        <SearchBar searchText={searchText} setSearchText={setSearchText} setSearchStatus={setSearchStatus}/>
        <CountTask filteredTaskList={filteredTaskList} />
        <TaskList
          filteredTaskList={filteredTaskList}
          deleteTask={deleteTask}
          updateTaskItem={updateTaskItem}
        />
      </div>
    </div>
  );
}

export default App;
