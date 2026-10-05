import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const ADMIN_EMAIL = "vishalkum802126@gmail.com";
const ADMIN_PASSWORD = "vishal@@1";

export function AuthProvider({ children }) {
  const [student, setStudent] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("lms_student")) || null;
    } catch {
      return null;
    }
  });

  const [admin, setAdmin] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("lms_admin")) || null;
    } catch {
      return null;
    }
  });

  const studentSignup = (data) => {
    const students = JSON.parse(localStorage.getItem("lms_students") || "[]");
    const exists = students.some(
      (item) => item.email.toLowerCase() === data.email.toLowerCase()
    );

    if (exists) {
      return { success: false, message: "An account with this email already exists." };
    }

    const user = {
      id: Date.now(),
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      password: data.password,
      role: "student"
    };

    localStorage.setItem("lms_students", JSON.stringify([...students, user]));
    localStorage.setItem("lms_student", JSON.stringify(user));
    setStudent(user);
    return { success: true };
  };

  const studentLogin = (email, password) => {
    const students = JSON.parse(localStorage.getItem("lms_students") || "[]");
    const user = students.find(
      (item) =>
        item.email.toLowerCase() === email.trim().toLowerCase() &&
        item.password === password
    );

    if (!user) {
      return { success: false, message: "Invalid student email or password." };
    }

    localStorage.setItem("lms_student", JSON.stringify(user));
    setStudent(user);
    return { success: true };
  };

  const studentLogout = () => {
    localStorage.removeItem("lms_student");
    setStudent(null);
  };

  const adminLogin = (email, password) => {
    if (email.trim().toLowerCase() !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return { success: false, message: "Invalid admin credentials." };
    }

    const adminData = {
      email: ADMIN_EMAIL,
      role: "admin",
      name: "Vishal Kumar"
    };

    localStorage.setItem("lms_admin", JSON.stringify(adminData));
    setAdmin(adminData);
    return { success: true };
  };

  const adminLogout = () => {
    localStorage.removeItem("lms_admin");
    setAdmin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        student,
        admin,
        studentSignup,
        studentLogin,
        studentLogout,
        adminLogin,
        adminLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
