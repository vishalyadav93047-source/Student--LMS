import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { courses } from "../../data/courses";
import { useAuth } from "../../context/AuthContext";
import "./Learning.css";

function Learning() {
  const { courseId } = useParams();
  const course = courses.find((item) => item.id === Number(courseId));
  const { student } = useAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`lms_completed_${student.email}_${courseId}`) || "[]");
    setCompleted(saved);
  }, [student.email, courseId]);

  if (!course) return <main className="learning-page"><h2>Course not found</h2></main>;

  const toggleComplete = () => {
    const next = completed.includes(active) ? completed.filter((i) => i !== active) : [...completed, active];
    setCompleted(next);
    localStorage.setItem(`lms_completed_${student.email}_${courseId}`, JSON.stringify(next));

    const percent = Math.round((next.length / course.lessons.length) * 100);
    const progress = JSON.parse(localStorage.getItem(`lms_progress_${student.email}`) || "{}");
    progress[course.id] = percent;
    localStorage.setItem(`lms_progress_${student.email}`, JSON.stringify(progress));
  };

  const finish = () => navigate(`/quiz/${course.id}`);

  return (
    <main className="learning-page">
      <div className="learning-top">
        <div>
          <Link to="/student/dashboard">← Dashboard</Link>
          <h1>{course.title}</h1>
          <p>By {course.instructor}</p>
        </div>
        <div className="learning-percent">{Math.round((completed.length/course.lessons.length)*100)}% Complete</div>
      </div>

      <div className="learning-layout">
        <aside className="lesson-sidebar">
          <h3>Course content</h3>
          {course.lessons.map((lesson, index) => (
            <button key={lesson} className={active === index ? "active" : ""} onClick={() => setActive(index)}>
              <span>{completed.includes(index) ? "✓" : index + 1}</span>
              {lesson}
            </button>
          ))}
          <button className="quiz-link" onClick={finish}>Take Final Quiz →</button>
        </aside>

        <section className="lesson-view">
          <div className="video-placeholder">
            <div className="play-circle">▶</div>
            <strong>{course.lessons[active]}</strong>
            <span>Video lesson placeholder • ready for your video URL</span>
          </div>
          <div className="lesson-content">
            <span className="eyebrow">LESSON {active + 1} OF {course.lessons.length}</span>
            <h2>{course.lessons[active]}</h2>
            <p>This learning screen is designed for a real LMS workflow. Replace the video placeholder with your course video and add notes, resources or assignments below.</p>
            <div className="lesson-actions">
              <button onClick={toggleComplete}>{completed.includes(active) ? "✓ Completed" : "Mark as Complete"}</button>
              {active < course.lessons.length - 1 ? (
                <button className="next-btn" onClick={() => setActive(active + 1)}>Next Lesson →</button>
              ) : (
                <button className="next-btn" onClick={finish}>Take Quiz →</button>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Learning;
