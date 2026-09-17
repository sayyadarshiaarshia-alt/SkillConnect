
import { useState } from "react";
import "./Login.css";
import Dashboard from "./Dashboard";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/students/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      console.log("Login successful:", data);

      setStudent(data.student);
    } catch (err) {
      console.error("Login error:", err);
      setError("Unable to connect to backend");
    } finally {
      setLoading(false);
    }
  };

  if (student) {
    return <Dashboard student={student} />;
  }

  return (
    <div className="login-page">
      <div className="login-box">

        <h1>Student Login</h1>

        <p className="login-subtitle">
          Login to continue to SkillConnect
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
        />

        {error && <p className="error">{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>
    </div>
  );
}

export default Login;
