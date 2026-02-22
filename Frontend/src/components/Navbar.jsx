import {NavLink } from "react-router";
import '../App.css'


const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="links" to="/">
        Go to home page
      </NavLink>
      <NavLink className="links" to="/terrorData">
        Go to read data
      </NavLink>
      <NavLink className="links" to="/dynamicTestPage">
        Go to test page
      </NavLink>
    </div>
  );
};

export default Navbar;
