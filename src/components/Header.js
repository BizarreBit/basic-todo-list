import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TodoList App
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
