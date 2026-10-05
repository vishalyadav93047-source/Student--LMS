import React from "react";
import { useAuth } from "../../context/AuthContext";
import { courses } from "../../data/courses";
import "./AdminDashboard.css";

function AdminDashboard() {
  const { admin } = useAuth();
  const students = JSON.parse(localStorage.getItem("lms_students") || "[]");

  return (
    <main className="admin-dashboard">
      <section className="admin-head">
        <div>
          <span className="admin-label">ADMIN CONTROL CENTER</span>
          <h1>Good morning, {admin.name}</h1>
          <p>Manage the academic LMS overview from one place.</p>
        </div>
        <div className="admin-status"><i /> System Online</div>
      </section>

      <section className="admin-stats">
        <div><span>👨‍🎓</span><strong>{students.length}</strong><small>Registered students</small></div>
        <div><span>📚</span><strong>{courses.length}</strong><small>Published courses</small></div>
        <div><span>📝</span><strong>12</strong><small>Assessments</small></div>
        <div><span>🏆</span><strong>{students.length}</strong><small>Potential certificates</small></div>
      </section>

      <section className="admin-content">
        <div className="admin-panel">
          <div className="panel-heading"><h2>Course management</h2><span>{courses.length} published</span></div>
          <div className="admin-course-table">
            {courses.map((course) => (
              <div className="admin-course-row" key={course.id}>
                <div className="admin-course-title"><span>{course.icon}</span><div><strong>{course.title}</strong><small>{course.category}</small></div></div>
                <span className="course-level">{course.level}</span>
                <span className="published">Published</span>
                <strong>₹{course.price}</strong>
              </div>
            ))}
          </div>
        </div>

        <aside className="admin-side">
          <h2>Admin account</h2>
          <div className="admin-profile"><span>VK</span><div><strong>Vishal Kumar</strong><small>{admin.email}</small></div></div>
          <div className="admin-info"><b>Access level</b><span>Administrator</span></div>
          <div className="admin-info"><b>Authentication</b><span>Protected</span></div>
          <div className="admin-info"><b>Course catalog</b><span>Active</span></div>
        </aside>
      </section>
    </main>
  );
}

export default AdminDashboard;
