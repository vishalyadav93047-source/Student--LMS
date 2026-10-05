import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const {
    student,
    admin,
    studentLogout,
    adminLogout,
  } = useAuth();

  const navigate = useNavigate();

  const closeMenu = () => {
    setOpen(false);
  };

  const logout = () => {
    if (student) {
      studentLogout();
    }

    if (admin) {
      adminLogout();
    }

    closeMenu();
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link
          className="brand"
          to="/"
          onClick={closeMenu}
        >
          <img
            src="/src/Image/logo.png"
            alt="EduNova Logo"
            className="brand-logo"
          />

          <span className="brand-text">
            <strong>EduNova</strong>
            <small>Learning Platform</small>
          </span>
        </Link>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`nav-menu ${open ? "open" : ""}`}>

          <NavLink
            to="/"
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            onClick={closeMenu}
          >
            Courses
          </NavLink>

          {student && (
            <NavLink
              to="/student/dashboard"
              onClick={closeMenu}
            >
              My Learning
            </NavLink>
          )}

          {admin && (
            <NavLink
              to="/admin/dashboard"
              onClick={closeMenu}
            >
              Admin Panel
            </NavLink>
          )}

          <div className="nav-actions">

            {!student && !admin && (
              <>
                <Link
                  className="nav-login"
                  to="/student/login"
                  onClick={closeMenu}
                >
                  Student Login
                </Link>

                <Link
                  className="nav-admin"
                  to="/admin/login"
                  onClick={closeMenu}
                >
                  Admin
                </Link>
              </>
            )}

            {(student || admin) && (
              <button
                className="logout-btn"
                onClick={logout}
              >
                Logout
              </button>
            )}

          </div>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;