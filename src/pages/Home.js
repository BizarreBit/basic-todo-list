import AddTask from "../components/AddTask";
import CountTask from "../components/CountTask";
import SearchBar from "../components/SearchBar";
import TaskList from "../components/TaskList";
import TaskListContextProvider from "../contexts/TaskListContext";

function Home() {
  return (
    <TaskListContextProvider>
      <AddTask />
      <SearchBar />
      <CountTask />
      <TaskList />
    </TaskListContextProvider>
  );
}
export default Home;
