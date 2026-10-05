import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setMessage("");
    setMessageType("");

    if (!email || !password) {
      setMessage("Please enter email and password.");
      setMessageType("error");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://skillconnect-backend-gj66.onrender.com/api/students/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Save logged-in student
        localStorage.setItem("student", JSON.stringify(data.student));

        setMessage("Login successful! Opening dashboard...");
        setMessageType("success");

        // Do NOT use /dashboard
        // Reload App.jsx and show Dashboard based on localStorage
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        setMessage(data.message || "Invalid email or password.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Login error:", error);

      setMessage(
        "Unable to connect to backend. Please try again."
      );
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <div className="login-header">
          <div className="login-logo">SC</div>

          <h1>SkillConnect</h1>

          <p className="login-subtitle">
            Bridge the Gap Between Skills and Jobs
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          {message && (
            <div className={`login-message ${messageType}`}>
              {message}
            </div>
          )}

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Login"}
          </button>

        </form>

        <div className="login-footer">
          <p>
            SkillConnect helps students identify skill gaps,
            improve their skills, and become job-ready.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;