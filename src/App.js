import AddTask from "./components/AddTask";
import SearchBar from "./components/SearchBar";
import CountTask from "./components/CountTask";
import TaskList from "./components/TaskList";
import TaskListContextProvider from "./contexts/TaskListContext";


function App() {
  return (
    <div className="container">
      <div className="mt-5 mx-auto mw-xs ">
        <TaskListContextProvider>
          <AddTask />
          <SearchBar />
          <CountTask />
          <TaskList />
        </TaskListContextProvider>
      </div>
    </div>
  );
}

export default App;
