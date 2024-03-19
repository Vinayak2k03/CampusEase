import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      {!isHomePage && (
        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </a>
        </ul>
      )}

      <div className="navbar-right">
        {!isHomePage && (
          <>
           <img src={assets.search_icon} alt="" />
           <div className="navbar-search-icon">
             <Link to="/cart">
               <img src={assets.basket_icon} alt="" />
               <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
             </Link>
           </div>
           </>
        )}
       
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
