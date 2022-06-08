import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-5 mx-auto mw-xs ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
