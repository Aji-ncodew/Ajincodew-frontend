import  { useEffect, useState } from "react";
import AJINCODEW_logo_white_text from "../../../assets/ajincodew.jpg";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the menu is open before closing it
      if (isMenuOpen) {
        // Additional condition to prevent closing when scrolling
        if (window.scrollY === 0) {
          setMenuOpen(false);
        }
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <a
        className={`close-navbar-toggler collapsed ${isMenuOpen ? "open" : ""}`}
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={isMenuOpen ? "true" : "false"}
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      ></a>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-dark px-3 ${isMenuOpen ? "open" : ""}`}>
        <div className="container-fluid">
          <div className="navbar-brand ms-lg-5">
          <Link to={"/"} style={{ textDecoration: "none" }}>
              <img
                src={AJINCODEW_logo_white_text}
                alt="AJINCODEW"
                width="50"
                className="d-inline-block align-text-center"
              />
            </Link>
          </div>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon-close">
              <i className="bi bi-x-lg"></i>
            </span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={
                    currentPath == "/" ? "nav-link active" : "nav-link"
                  }
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    currentPath == "/about" ? "nav-link active" : "nav-link"
                  }
                  to={"/" + "about"}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    currentPath == "/cells" ? "nav-link active" : "nav-link"
                  }
                  to={"/" + "cells"}
                >
                  Cells
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    currentPath == "/blogs" ? "nav-link active" : "nav-link"
                  }
                  to={"/" + "blogs"}
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    currentPath == "/courses" ? "nav-link active" : "nav-link"
                  }
                  to={"/" + "courses"}
                >
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    currentPath == "/login" ? "nav-link active" : "nav-link"
                  }
                  to={"/" + "login"}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    currentPath == "/contact" ? "nav-link active" : "nav-link"
                  }
                  to={"/" + "contact"}
                >
                  Contact
                </Link>
              </li>
              
              <li className="nav-item ms-lg-2 d-flex align-items-center ">
                <div className="eye-icon">
                  <i className="bi bi-eye-fill"></i>
                  <span> 1 </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
