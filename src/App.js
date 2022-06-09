import Header from "./components/Header";
import AuthContextProvider from "./contexts/AuthContext";
import Router from "./components/Router";

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <div className="container">
        <div className="mt-5 mx-auto mw-xs ">
          <Router />
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
