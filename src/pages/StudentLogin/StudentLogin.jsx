import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./StudentLogin.css";

function StudentLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { studentLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const submit = (e) => {
    e.preventDefault();
    setError("");
    const result = studentLogin(form.email, form.password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate(location.state?.from || "/student/dashboard", { replace: true });
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-icon">🎓</div>
        <span className="eyebrow">STUDENT PORTAL</span>
        <h1>Welcome back</h1>
        <p>Sign in to continue your learning journey.</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={submit}>
          <label>Email address<input type="email" required value={form.email} onChange={(e) => setForm({...form,email:e.target.value})} placeholder="you@example.com" /></label>
          <label>Password<input type="password" required value={form.password} onChange={(e) => setForm({...form,password:e.target.value})} placeholder="Enter password" /></label>
          <button className="auth-submit">Student Login</button>
        </form>

        <div className="auth-footer">New student? <Link to="/student/signup">Create an account</Link></div>
        <Link className="admin-switch" to="/admin/login">Admin login →</Link>
      </div>
    </main>
  );
}

export default StudentLogin;
