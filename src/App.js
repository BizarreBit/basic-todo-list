import AddTask from "./components/AddTask";
import SearchBar from "./components/SearchBar";
import CountTask from "./components/CountTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container">
      <div className="mt-5 mx-auto mw-xs ">
        <AddTask />
        <SearchBar />
        <CountTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
