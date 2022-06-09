import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import * as localStorageServices from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  //   const [logedIn, setLogedIn] = useState(false);
  const [user, setUser] = useState(null); // { id:1, username: "john", email: "john@email.com" }

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token)
      //setLogedIn(true)
      setUser(jwtDecode(token));
  }, []);

  const logout = () => {
    // localStorage.clear();
    // setLogedIn(false);
    // localStorage.removeItem("token")
    localStorageServices.removeToken();
    setUser(null);
  };

  const login = (token) => {
    // localStorage.setItem("token", token);
    // setLogedIn(true);
    localStorageServices.setToken(token);
    setUser(jwtDecode(token));
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        // logedIn,
        user,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
export { AuthContext };
