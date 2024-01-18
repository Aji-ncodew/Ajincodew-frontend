import AJINCODEW_logo_white_text from "../../../assets/ajincodew.jpg";
// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  // const [analytics, setAnalytics] = useState({ visits: 0, views: 0 });

  // function changeVisits() {
  //   setAnalytics(prevAnalytics => ({
  //     ...prevAnalytics,
  //     visits: Number(prevAnalytics.visits) + 1
  //   }));
  // }
  return (
    <>
      <a
        className="close-navbar-toggler collapsed"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></a>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark px-3">
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
