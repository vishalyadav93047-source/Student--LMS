import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../../data/courses";
import CourseCard from "../../components/CourseCard/CourseCard";
import "./Home.css";

function Home() {
  return (
    <>
      <main className="home-page">
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">🎓 PROFESSIONAL ONLINE LEARNING PLATFORM</span>
            <h1>Learn skills.<br /><em>Build your future.</em></h1>
            <p>A complete learning management system for students, instructors and academic projects.</p>
            <div className="hero-buttons">
              <Link to="/courses" className="primary-btn">Explore Courses →</Link>
              <Link to="/student/login" className="secondary-btn">Start Learning</Link>
            </div>
            <div className="hero-stats">
              <div><strong>5K+</strong><span>Students</span></div>
              <div><strong>50+</strong><span>Courses</span></div> 
              <div><strong>4.9/5</strong><span>Rating</span></div>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-top"><span>My Learning</span><b>•••</b></div>
            <div className="progress-course">
              <div className="mini-icon">⚛️</div>
              <div><strong>React.js Masterclass</strong><span>Lesson 5 of 6</span></div>
            </div>
            <div className="progress-track"><span /></div>
            <div className="progress-row"><span>72% complete</span><b>Continue →</b></div>
            <div className="hero-feature"><span>✓</span> Certificate on completion</div>
            <div className="hero-feature"><span>✓</span> Practice quizzes</div>
          </div>
        </section>

        <section className="home-section">
          <div className="section-heading">
            <div><span className="eyebrow">LEARN FROM EXPERTS</span><h2>Featured courses</h2></div>
            <Link to="/courses">View all →</Link>
          </div>
          <div className="course-grid">
            {courses.slice(0, 3).map((course) => <CourseCard key={course.id} course={course} />)}
          </div>
        </section>

        <section className="benefits">
          <div><span>📚</span><h3>Structured learning</h3><p>Follow lessons in a clear, organized course path.</p></div>
          <div><span>🧠</span><h3>Practice quizzes</h3><p>Check your understanding before completing a course.</p></div>
          <div><span>🏆</span><h3>Certificates</h3><p>Generate a course completion certificate after passing.</p></div>
        </section>
      </main>
    </>
  );
}

export default Home;
