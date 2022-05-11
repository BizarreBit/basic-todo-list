import axios from "axios";
import { createContext, useState, useEffect } from "react";

const TaskListContext = createContext();

function TaskListContextProvider(props) {
  const [taskList, setTaskList] = useState([]);
  const [search, setSearch] = useState({ title: "", completed: "" });

  useEffect(() => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => setTaskList(res.data.todos))
      .catch((err) => console.log(err));
    // const fetchTask = async () => {
    //   try {
    //     const res = await axios.get("http://localhost:8080/todos");
    //     setTaskList(res.data.todos);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchTask();
  }, []);

  // const addTask = (title) =>
  //   axios
  //     .post("http://localhost:8080/todos", { title: title, completed: false })
  //     .then((res) => {
  //       setTaskList(prev => [res.data.todo, ...prev]);
  //       return true;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return false;
  //     });

  const addTask = async (title) => {
    try {
      const res = await axios.post("http://localhost:8080/todos", {
        title: title,
        completed: false,
      });
      setTaskList((prev) => [res.data.todo, ...prev]);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  // const deleteTask = (id) => {
  //   const idx = taskList.findIndex((item) => item.id === id);
  //   if (idx !== -1) {
  //     return axios
  //       .delete("http://localhost:8080/todos/" + id)
  //       .then(() => {
  //         const newTaskList = [...taskList];
  //         newTaskList.splice(idx, 1);
  //         setTaskList(newTaskList);
  //         return true;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         return false;
  //       });
  //   }
  // };

  const deleteTask = async (id) => {
    const idx = taskList.findIndex((item) => item.id === id);
    if (idx !== -1)
      try {
        await axios.delete("http://localhost:8080/todos/" + id);
        const newTaskList = [...taskList];
        newTaskList.splice(idx, 1);
        setTaskList(newTaskList);
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
  };

  // const updateTask = (id, taskItemProp) => {
  //   const idx = taskList.findIndex((item) => item.id === id);
  //   if (idx !== -1) {
  //     return axios
  //       .put("http://localhost:8080/todos/" + id, {
  //         ...taskList[idx],
  //         ...taskItemProp,
  //       })
  //       .then((res) => {
  //         const newTaskList = [...taskList];
  //         newTaskList[idx] = res.data.todo;
  //         setTaskList(newTaskList);
  //         return true;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         return false;
  //       });
  //   }
  // };

  const updateTask = async (id, taskItemProp) => {
    const idx = taskList.findIndex((item) => item.id === id);
    if (idx !== -1)
      try {
        const res = await axios.put("http://localhost:8080/todos/" + id, {
          ...taskList[idx],
          ...taskItemProp,
        });
        const newTaskList = [...taskList];
        newTaskList[idx] = res.data.todo;
        setTaskList(newTaskList);
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
  };

  const searchTask = (taskItemProp) => {setSearch((prev) => ({ ...prev, ...taskItemProp }))};

  const filteredTaskList =
    search.title === "" && search.completed === ""
      ? taskList
      : taskList.filter(
          (item) =>
            item.title.toLowerCase().includes(search.title.toLowerCase()) &&
            (search.completed === "" || item.completed === search.completed)
        );

  return (
    <TaskListContext.Provider
      value={{
        taskList,
        addTask,
        deleteTask,
        updateTask,
        search,
        searchTask,
        filteredTaskList,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
}

export default TaskListContextProvider;
export { TaskListContext };
