import React, { useMemo, useState } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import { courses } from "../../data/courses";
import "./Courses.css";

function Courses() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(courses.map((course) => course.category))];

  const filtered = useMemo(() => {
    return courses.filter((course) => {
      const text = `${course.title} ${course.category} ${course.instructor}`.toLowerCase();
      return text.includes(search.toLowerCase()) && (category === "All" || course.category === category);
    });
  }, [search, category]);

  return (
    <main className="courses-page">
      <section className="page-banner">
        <span className="eyebrow">COURSE LIBRARY</span>
        <h1>Explore courses</h1>
        <p>Choose a course, start learning and track your progress from your dashboard.</p>
      </section>

      <section className="courses-content">
        <div className="course-tools">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
          />
          <div className="category-list">
            {categories.map((item) => (
              <button className={category === item ? "selected" : ""} key={item} onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="results-line">
          <strong>{filtered.length} courses</strong>
          <span>Showing available learning paths</span>
        </div>

        <div className="course-grid">
          {filtered.map((course) => <CourseCard key={course.id} course={course} />)}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <h3>No courses found</h3>
            <p>Try another search term or category.</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Courses;
