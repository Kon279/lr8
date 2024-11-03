import React, { useState, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
import Sidebar from "./Sidebar"; 
import Social from "./Social";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleSidebar = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const showMenu = () => {
      if (window.innerWidth > 800) {
        setShowLinks(true);
      } else {
        setShowLinks(false);
      }
    };
    window.addEventListener("resize", showMenu);
    showMenu();

    return () => window.removeEventListener("resize", showMenu);
  }, []);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        {showLinks && <Sidebar />} 
        <Social />
      </div>
    </nav>
  );
};

export default Navbar;