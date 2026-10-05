import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css";

function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-icon">{course.icon}</div>
      <div className="course-body">
        <div className="course-meta">
          <span>{course.category}</span>
          <span>★ {course.rating}</span>
        </div>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="course-info">
          <span>◷ {course.duration}</span>
          <span>◉ {course.students.toLocaleString()}</span>
        </div>
        <div className="course-bottom">
          <strong>₹{course.price}</strong>
          <Link to={`/courses/${course.id}`}>View Course →</Link>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
