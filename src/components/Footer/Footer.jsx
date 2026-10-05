import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>EduNova</h3>
          <p>A modern learning management platform built for students, instructors and academic projects.</p>
        </div>
        <div>
          <h4>Platform</h4>
          <Link to="/courses">Courses</Link>
          <Link to="/student/login">Student Login</Link>
          <Link to="/admin/login">Admin Login</Link>
        </div>
        <div>
          <h4>Learning</h4>
          <span>Video Lessons</span>
          <span>Quizzes</span>
          <span>Certificates</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 EduNova LMS</span>
        <span>Built with React</span>
      </div>
    </footer>
  );
}

export default Footer;
