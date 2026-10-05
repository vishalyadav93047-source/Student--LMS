import React from "react";
import { Link, useParams } from "react-router-dom";
import { courses } from "../../data/courses";
import { useAuth } from "../../context/AuthContext";
import "./Certificate.css";

function Certificate() {
  const { courseId } = useParams();
  const course = courses.find((item) => item.id === Number(courseId));
  const { student } = useAuth();

  if (!course) return <main className="certificate-page"><h2>Certificate not found</h2></main>;

  const printCertificate = () => window.print();

  return (
    <main className="certificate-page">
      <div className="certificate-actions">
        <Link to="/student/dashboard">← Dashboard</Link>
        <button onClick={printCertificate}>Print Certificate</button>
      </div>

      <div className="certificate">
        <div className="certificate-inner">
          <div className="cert-logo">E</div>
          <span className="cert-small">EDUNOVA LEARNING PLATFORM</span>
          <h1>Certificate of Completion</h1>
          <p className="cert-text">This certificate is proudly presented to</p>
          <h2>{student.name}</h2>
          <p className="cert-text">for successfully completing the course</p>
          <h3>{course.title}</h3>
          <p className="cert-description">The learner completed the course curriculum and passed the final assessment.</p>
          <div className="cert-footer">
            <div><strong>EduNova LMS</strong><span>Learning Platform</span></div>
            <div className="seal">✓</div>
            <div><strong>{new Date().toLocaleDateString()}</strong><span>Issue Date</span></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Certificate;
