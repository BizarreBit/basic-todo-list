import { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import AddTask from "./components/AddTask";
import SearchBar from "./components/SearchBar";
import CountTask from "./components/CountTask";
import TaskList from "./components/TaskList";

// const initialTask = [
//   { id: uuidv4(), title: "Watching a movie", completed: false },
//   { id: uuidv4(), title: "Meeting a doctor", completed: false },
//   { id: uuidv4(), title: "Dinner with my boss", completed: true },
// ];

function App() {
  const [taskList, setTaskList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        // console.log(res.data);
        setTaskList(res.data.todos);
      })
      .catch((err) => console.log(err));
  }, []);

  const addNewTask = (title) => {
    // const newTaskList = [
    //   { id: uuidv4(), title: title, completed: false },
    //   ...taskList,
    // ];
    // setTaskList(newTaskList);

    axios
      .post("http://localhost:8080/todos", { title: title, completed: false })
      .then((res) => {
        // console.log(res.data);
        const newTaskList = [res.data.todo, ...taskList];
        setTaskList(newTaskList);
      })
      .catch((err) => console.log(err));
  };

  // const deleteTask = (id) => {
  //   // const delTaskList = [...taskList];
  //   // delTaskList.splice(
  //   //   taskList.findIndex((taskItem) => taskItem.id === id),
  //   //   1
  //   // );
  //   // setTaskList(delTaskList);

  //   axios
  //     .delete(`http://localhost:8080/todos/${id}`)
  //     .then((res) => {
  //       // console.log(res.data);
  //       const delTaskList = [...taskList];
  //       delTaskList.splice(
  //         taskList.findIndex((taskItem) => taskItem.id === id),
  //         1
  //       );
  //       setTaskList(delTaskList);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const deleteTask = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/todos/${id}`);
      console.log(res.data);
      const delTaskList = [...taskList];
      delTaskList.splice(
        taskList.findIndex((taskItem) => taskItem.id === id),
        1
      );
      setTaskList(delTaskList);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredTaskList = taskList.filter(
    (taskItem) =>
      taskItem.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (searchStatus === "" || taskItem.completed === searchStatus)
  );

  const updateTaskItem = (id, editProp) => {
    // const newTaskList = [...taskList];
    // const idx = taskList.findIndex((taskItem) => taskItem.id === id);
    // if (idx !== -1) newTaskList[idx] = { ...newTaskList[idx], ...editProp };
    // setTaskList(newTaskList);

    const newTaskList = [...taskList];
    const idx = taskList.findIndex((taskItem) => taskItem.id === id);
    if (idx !== -1) {
      newTaskList[idx] = { ...newTaskList[idx], ...editProp };
      axios
        .put(`http://localhost:8080/todos/${id}`, {
          title: newTaskList[idx].title,
          completed: newTaskList[idx].completed,
        })
        .then((res) => {
          console.log(res.data);
          // newTaskList[idx] = res.data.todo;
          setTaskList(newTaskList);
        })
        .catch((err) => console.log(err));
    }
  };

  // const updateTaskItem = async (id, editProp) => {
  //   const newTaskList = [...taskList];
  //   const idx = taskList.findIndex((taskItem) => taskItem.id === id);
  //   if (idx !== -1) {
  //     newTaskList[idx] = { ...newTaskList[idx], ...editProp };
  //     try {
  //       const res = axios.put(`http://localhost:8080/todos/${id}`, {
  //         title: newTaskList[idx].title,
  //         completed: newTaskList[idx].completed,
  //       });
  //       console.log(res);
  //       // newTaskList[idx] = res.data.todo;
  //       setTaskList(newTaskList);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };

  return (
    <div className="container">
      <div className="mt-5 mx-auto mw-xs ">
        <AddTask addNewTask={addNewTask} />
        <SearchBar
          // searchText={searchText}
          setSearchText={setSearchText}
          setSearchStatus={setSearchStatus}
        />
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
