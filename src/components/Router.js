import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";

const routes = {
  //   admin: [
  //     { path: "/", element: <Admin /> },
  //     { path: "/product", element: <Product /> },
  //   ],
  //   customer: [
  //     { path: "/", element: <Home /> },
  //     { path: "/cart", element: <Cart /> },
  //   ],
  guest: [
    { path: "/login", element: <Login /> },
    // { path: "/register", element: <Register /> },
    { path: "*", element: <Navigate to="/login" replace={true} /> },
  ],
  user: [
    { path: "/", element: <Home /> },
    { path: "*", element: <Navigate to="/" replace={true} /> },
  ],
};

function Router() {
  const { user } = useContext(AuthContext);
  const role = user ? "user" : "guest";
  return (
    // <Routes>
    //   {user ? (
    //     <>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/login" element={<Navigate to="/" replace={true} />} />
    //       <Route path="*" element={<Navigate to="/404" replace={true} />} />
    //     </>
    //   ) : (
    //     <>
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/" element={<Navigate to="/login" replace={true} />} />
    //       <Route path="*" element={<Navigate to="/404" replace={true} />} />
    //     </>
    //   )}
    // </Routes>
    <Routes>
      {routes[role].map((item) => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
}

export default Router;
