import React from "react";
import { Link } from "react-router-dom";

import logo from "../../Assets/logo.png";
import cart from "../../Assets/cart.png";
import menu from "../../Assets/menu.png";
import { useState } from "react";

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  const menuToggle = () => {
    setMobileMenu(!MobileMenu);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" width="125px" />
      </div>
      <nav>
        <ul className={MobileMenu ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">Account</Link>
          </li>
        </ul>
      </nav>
      <img src={cart} alt="cart" width="30px" height="30px" />
      <img src={menu} alt="menu" className="menu-icon" onClick={menuToggle} />
    </div>
  );
};

export default Navbar;
