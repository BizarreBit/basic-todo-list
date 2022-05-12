import { Component } from "react";
import axios from "axios";
import AddTask from "./components/AddTask";
import SearchBar from "./components/SearchBar";
import CountTask from "./components/CountTask";
import TaskList from "./components/TaskList";

// function App() {
//   return (
//     <div className="container">
//       <div className="mt-5 mx-auto mw-xs ">
//         <AddTask />
//         <SearchBar />
//         <CountTask />
//         <TaskList />
//       </div>
//     </div>
//   );
// }

class App extends Component {
  state = {
    taskList: [],
    search: {
      text: "",
      completed: "",
    },
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        this.setState({ taskList: res.data.todos });
      })
      .catch((err) => console.log(err));
  }

  addTask = (newTask) =>
    axios
      .post("http://localhost:8080/todos", newTask)
      .then((res) => {
        this.setState((prev) => ({
          taskList: [res.data.todo, ...prev.taskList],
        }));
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });

  deleteTask = (id) => {
    axios
      .delete("http://localhost:8080/todos/" + id)
      .then(() => {
        const idx = this.state.taskList.findIndex((item) => item.id === id);
        const newTaskList = [...this.state.taskList];
        newTaskList.splice(idx, 1);
        this.setState({ taskList: newTaskList });
      })
      .catch((err) => console.log(err));
  };

  updateTask = async (id, taskProp) => {
    try {
      const idx = this.state.taskList.findIndex((item) => item.id === id);
      const res = await axios.put("http://localhost:8080/todos/" + id, {
        ...this.state.taskList[idx],
        ...taskProp,
      });
      const newTaskList = [...this.state.taskList];
      newTaskList[idx] = res.data.todo;
      this.setState({ taskList: newTaskList });
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  searchTask = (taskProp) => {
    this.setState((prev) => ({ search: { ...prev.search, ...taskProp } }));
  };

  render() {
    const filteredTaskList = //this.state.taskList;
      this.state.search.text === "" && this.state.search.completed === ""
        ? this.state.taskList
        : this.state.taskList.filter(
            (item) =>
              item.title
                .toLowerCase()
                .includes(this.state.search.text.toLowerCase()) &&
              (this.state.search.completed === "" ||
                item.completed === this.state.search.completed)
          );

    return (
      <div className="container">
        <div className="mt-5 mx-auto mw-xs ">
          <AddTask addTask={this.addTask} />
          <SearchBar searchTask={this.searchTask} />
          <CountTask taskList={filteredTaskList} />
          <TaskList
            taskList={filteredTaskList}
            deleteTask={this.deleteTask}
            updateTask={this.updateTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
