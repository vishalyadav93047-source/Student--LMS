import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../../data/courses";
import { useAuth } from "../../context/AuthContext";
import "./StudentDashboard.css";

function StudentDashboard() {
  const { student } = useAuth();
  const [progress, setProgress] = useState({});

  useEffect(() => {
    setProgress(JSON.parse(localStorage.getItem(`lms_progress_${student.email}`) || "{}"));
  }, [student.email]);

  const enrolledIds = Object.keys(progress).length ? Object.keys(progress).map(Number) : [1,2];
  const enrolled = courses.filter((course) => enrolledIds.includes(course.id));

  return (
    <main className="dashboard-page">
      <section className="dashboard-head">
        <div>
          <span className="eyebrow">STUDENT DASHBOARD</span>
          <h1>Welcome, {student.name.split(" ")[0]} 👋</h1>
          <p>Continue your courses and keep building your skills.</p>
        </div>
        <Link className="dashboard-browse" to="/courses">Browse Courses</Link>
      </section>

      <section className="dashboard-stats">
        <div><span>📚</span><strong>{enrolled.length}</strong><small>Active courses</small></div>
        <div><span>✓</span><strong>{Object.values(progress).filter((v)=>v >= 100).length}</strong><small>Completed</small></div>
        <div><span>🏆</span><strong>{Object.values(progress).filter((v)=>v >= 100).length}</strong><small>Certificates</small></div>
        <div><span>⏱</span><strong>18h</strong><small>Learning time</small></div>
      </section>

      <section className="learning-section">
        <div className="dashboard-title"><h2>My learning</h2><Link to="/courses">View all →</Link></div>
        <div className="learning-grid">
          {enrolled.map((course) => {
            const percent = progress[course.id] || (course.id === 1 ? 72 : 38);
            return (
              <article className="learning-card" key={course.id}>
                <div className="learning-icon">{course.icon}</div>
                <div className="learning-card-body">
                  <span>{course.category}</span>
                  <h3>{course.title}</h3>
                  <div className="dashboard-progress"><i style={{width:`${percent}%`}} /></div>
                  <div className="learning-meta"><small>{percent}% complete</small><Link to={`/learning/${course.id}`}>Continue →</Link></div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default StudentDashboard;
