import { NavLink, withRouter } from "react-router-dom";
import "../App.css";

const Nav = ({ history }) => {
  return (
    <nav className="navbar">
      <div className="nav-item">
        <NavLink to="/"></NavLink>
        <NavLink to="/register"></NavLink>
        <NavLink to="/login"></NavLink>
        <NavLink to="/demo"></NavLink>
        <NavLink to="/dashboard/:user"></NavLink>
      </div>
    </nav>
  );
};

export default withRouter(Nav);
