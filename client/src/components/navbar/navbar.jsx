import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <NavLink to="/">Logo</NavLink>
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <NavLink to="/" className="nav-link">
            HOME
            <i class="fas fa-home"></i>
          </NavLink>
          <NavLink to="/search" className="nav-link">
            SEARCH<i class="fas fa-search"></i>
          </NavLink>
          <NavLink to="/offers" className="nav-link">
            OFFERS<i class="fab fa-algolia"></i>
          </NavLink>
          <NavLink to="/cart" className="nav-link">
            CART<i class="fas fa-shopping-cart"></i>
          </NavLink>
          <NavLink to="/signup" className="nav-link">
            SIGNUP<i class="fas fa-user-plus"></i>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
