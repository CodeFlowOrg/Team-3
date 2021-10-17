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
            <i class="fas fa-home"></i> <span>HOME</span>
          </NavLink>
          <NavLink to="/search" className="nav-link">
            <i class="fas fa-search"></i> <span>SEARCH</span>
          </NavLink>
          <NavLink to="/offers" className="nav-link">
            <i class="fab fa-algolia"></i> <span>OFFERS</span>
          </NavLink>
          <NavLink to="/cart" className="nav-link">
            <i class="fas fa-shopping-cart"></i> <span>CART</span>
          </NavLink>
          <NavLink to="/signup" className="nav-link nav-signup">
            <i class="fas fa-user-plus"></i>
            <button className="signup-btn">SIGNUP</button>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
