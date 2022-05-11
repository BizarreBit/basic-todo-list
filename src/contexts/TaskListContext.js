import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

const TaskListContext = createContext();

// Action
// ADD_TASK
// DELETE_TASK
// TOGGLE_TASK
// EDIT_TASK
// FETCH_TASK

const initialTaskList = [];
const taskReducer = (state, action) => {
  //action {type: "ADD_TASK", value: { title; "homework", complete: false, id: "abcdef"}}
  console.log("reducer run");
  switch (action.type) {
    case "ADD_TASK":
      return [action.payload.task, ...state];
    case "DELETE_TASK": {
      const newTaskList = [...state];
      newTaskList.splice(action.payload.idx, 1);
      return newTaskList;
    }
    case "UPDATE_TASK": {
      const newTaskList = [...state];
      newTaskList[action.payload.idx] = action.payload.task;
      return newTaskList;
    }
    case "FETCH_TASK":
      return action.payload.tasks;
    default:
      return state;
  }
};

// action type:
// TEXT_SEARCH
// STATUS_SEARCH
const initialSearch = { title: "", completed: "" };
const searchReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, ...action.payload.taskItemProp };
    default:
      return state;
  }
};

function TaskListContextProvider(props) {
  const [taskList, dispatchTaskList] = useReducer(taskReducer, initialTaskList);
  // dispatch({type: "FETCH_TASK", payload: []})

  const [search, dispatchSearch] = useReducer(searchReducer, initialSearch);

  useEffect(() => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) =>
        dispatchTaskList({
          type: "FETCH_TASK",
          payload: { tasks: res.data.todos },
        })
      )
      .catch((err) => console.log(err));
  }, []);

  const addTask = async (title) => {
    try {
      const res = await axios.post("http://localhost:8080/todos", {
        title: title,
        completed: false,
      });
      // setTaskList((prev) => [res.data.todo, ...prev]);
      dispatchTaskList({ type: "ADD_TASK", payload: { task: res.data.todo } });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const deleteTask = async (id) => {
    const idx = taskList.findIndex((item) => item.id === id);
    try {
      await axios.delete("http://localhost:8080/todos/" + id);
      // const newTaskList = [...taskList];
      // newTaskList.splice(idx, 1);
      // setTaskList(newTaskList);
      dispatchTaskList({ type: "DELETE_TASK", payload: { idx } });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const updateTask = async (id, taskItemProp) => {
    const idx = taskList.findIndex((item) => item.id === id);
    try {
      const res = await axios.put("http://localhost:8080/todos/" + id, {
        ...taskList[idx],
        ...taskItemProp,
      });
      // const newTaskList = [...taskList];
      // newTaskList[idx] = res.data.todo;
      // setTaskList(newTaskList);
      dispatchTaskList({
        type: "UPDATE_TASK",
        payload: { idx, task: res.data.todo },
      });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const searchTask = (taskItemProp) => {
    // setSearch((prev) => ({ ...prev, ...taskItemProp }));
    dispatchSearch({ type: "SEARCH", payload: { taskItemProp } });
  };

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
