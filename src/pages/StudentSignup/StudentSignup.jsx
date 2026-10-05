import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./StudentSignup.css";

function StudentSignup() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", password:"", confirm:"" });
  const [error, setError] = useState("");
  const { studentSignup } = useAuth();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setError("");

    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }

    const result = studentSignup(form);
    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/student/dashboard", { replace:true });
  };

  return (
    <main className="signup-page">
      <div className="signup-card">
        <span className="eyebrow">CREATE STUDENT ACCOUNT</span>
        <h1>Start learning today</h1>
        <p>Create your account to access courses, progress, quizzes and certificates.</p>
        {error && <div className="signup-error">{error}</div>}

        <form onSubmit={submit} className="signup-form">
          <label>Full name<input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} placeholder="Your name" /></label>
          <label>Email address<input required type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder="you@example.com" /></label>
          <label>Phone number<input required value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} placeholder="10 digit number" /></label>
          <div className="two-fields">
            <label>Password<input required type="password" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} placeholder="Minimum 6 chars" /></label>
            <label>Confirm<input required type="password" value={form.confirm} onChange={(e)=>setForm({...form,confirm:e.target.value})} placeholder="Repeat password" /></label>
          </div>
          <button>Create Student Account</button>
        </form>

        <div className="signup-footer">Already registered? <Link to="/student/login">Student Login</Link></div>
      </div>
    </main>
  );
}

export default StudentSignup;
