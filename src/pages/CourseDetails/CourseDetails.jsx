import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { courses } from "../../data/courses";
import { useAuth } from "../../context/AuthContext";
import "./CourseDetails.css";

function CourseDetails() {
  const { courseId } = useParams();
  const course = courses.find((item) => item.id === Number(courseId));
  const { student } = useAuth();
  const navigate = useNavigate();

  if (!course) return <main className="details-page"><div className="details-empty"><h2>Course not found</h2><Link to="/courses">Back to courses</Link></div></main>;

  const startCourse = () => {
    if (!student) {
      navigate("/student/login", { state: { from: `/learning/${course.id}` } });
      return;
    }
    navigate(`/learning/${course.id}`);
  };

  return (
    <main className="details-page">
      <section className="details-hero">
        <div className="details-icon">{course.icon}</div>
        <div>
          <span className="detail-category">{course.category}</span>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <div className="detail-meta">
            <span>★ {course.rating} rating</span>
            <span>◉ {course.students.toLocaleString()} students</span>
            <span>◷ {course.duration}</span>
            <span>By {course.instructor}</span>
          </div>
        </div>
      </section>

      <section className="details-layout">
        <div className="lesson-panel">
          <h2>Course curriculum</h2>
          <p className="muted">Complete each lesson to build your progress.</p>
          <div className="lesson-list">
            {course.lessons.map((lesson, index) => (
              <div className="lesson-row" key={lesson}>
                <span className="lesson-number">{String(index + 1).padStart(2, "0")}</span>
                <span>{lesson}</span>
                <small>{index === 0 ? "Preview" : "Lesson"}</small>
              </div>
            ))}
          </div>
        </div>

        <aside className="enroll-card">
          <div className="enroll-icon">{course.icon}</div>
          <div className="price">₹{course.price}</div>
          <p>Lifetime access to course lessons, quiz and certificate.</p>
          <button onClick={startCourse}>Start Learning</button>
          <div className="enroll-points">
            <span>✓ {course.lessons.length} structured lessons</span>
            <span>✓ Completion tracking</span>
            <span>✓ Final quiz</span>
            <span>✓ Certificate</span>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default CourseDetails;
