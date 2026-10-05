import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./AdminLogin.css";

function AdminLogin() {
  const [form, setForm] = useState({ email:"", password:"" });
  const [error, setError] = useState("");
  const { adminLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const submit = (e) => {
    e.preventDefault();
    setError("");
    const result = adminLogin(form.email, form.password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate(location.state?.from || "/admin/dashboard", { replace:true });
  };

  return (
    <main className="admin-auth-page">
      <div className="admin-auth-card">
        <div className="admin-badge">🔐</div>
        <span className="admin-label">ADMINISTRATOR ACCESS</span>
        <h1>Admin Login</h1>
        <p>Authorized administrators only. Student accounts cannot access this panel.</p>

        {error && <div className="admin-error">{error}</div>}

        <form onSubmit={submit}>
          <label>Admin email<input type="email" required value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} placeholder="Admin email" /></label>
          <label>Admin password<input type="password" required value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} placeholder="Admin password" /></label>
          <button>Secure Admin Login</button>
        </form>

        <div className="admin-note">Demo admin credentials are configured for this academic project.</div>
        <Link to="/student/login" className="student-switch">← Student Login</Link>
      </div>
    </main>
  );
}

export default AdminLogin;
