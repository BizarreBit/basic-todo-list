import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Header() {
  // const { logedIn, logout } = useContext(AuthContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TodoList App
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <div className="navbar-nav">
            {/* {logedIn ? ( */}
            {user ? (
              <>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/login" onClick={logout}>
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
