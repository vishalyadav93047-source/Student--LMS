import React, { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { courses } from "../../data/courses";
import { useAuth } from "../../context/AuthContext";
import "./Quiz.css";

function Quiz() {
  const { courseId } = useParams();
  const course = courses.find((item) => item.id === Number(courseId));
  const { student } = useAuth();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    if (!course) return 0;
    return course.quiz.reduce((total, item, index) => total + (answers[index] === item.answer ? 1 : 0), 0);
  }, [answers, course]);

  if (!course) return <main className="quiz-page"><h2>Quiz not found</h2></main>;

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (score >= Math.ceil(course.quiz.length * 0.6)) {
      const progress = JSON.parse(localStorage.getItem(`lms_progress_${student.email}`) || "{}");
      progress[course.id] = 100;
      localStorage.setItem(`lms_progress_${student.email}`, JSON.stringify(progress));
    }
  };

  const passed = score >= Math.ceil(course.quiz.length * 0.6);

  return (
    <main className="quiz-page">
      <div className="quiz-wrap">
        <Link to={`/learning/${course.id}`}>← Back to learning</Link>
        <span className="eyebrow">FINAL ASSESSMENT</span>
        <h1>{course.title} Quiz</h1>
        <p>Answer the questions and score at least 60% to complete the course.</p>

        {!submitted ? (
          <form onSubmit={submit} className="quiz-form">
            {course.quiz.map((item, index) => (
              <div className="question-card" key={item.q}>
                <h3>{index + 1}. {item.q}</h3>
                <div className="options">
                  {item.options.map((option, optionIndex) => (
                    <label className={answers[index] === optionIndex ? "chosen" : ""} key={option}>
                      <input
                        type="radio"
                        name={`q-${index}`}
                        checked={answers[index] === optionIndex}
                        onChange={() => setAnswers({...answers,[index]:optionIndex})}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button className="submit-quiz">Submit Quiz</button>
          </form>
        ) : (
          <div className={`quiz-result ${passed ? "passed" : "failed"}`}>
            <div className="result-icon">{passed ? "🏆" : "↻"}</div>
            <span className="eyebrow">{passed ? "COURSE COMPLETED" : "TRY AGAIN"}</span>
            <h2>{score} / {course.quiz.length}</h2>
            <p>{passed ? "Great work! You passed the final assessment." : "You need at least 60%. Review the lessons and try the quiz again."}</p>
            {passed ? (
              <button onClick={() => navigate(`/certificate/${course.id}`)}>View Certificate →</button>
            ) : (
              <button onClick={() => {setAnswers({});setSubmitted(false);}}>Retake Quiz</button>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default Quiz;
