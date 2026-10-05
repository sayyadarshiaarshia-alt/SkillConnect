import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://skillconnect-tbqg.onrender.com/api/students/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful!");

        console.log("Login response:", data);

        // If your backend returns student data
        if (data.student) {
          localStorage.setItem(
            "student",
            JSON.stringify(data.student)
          );
        }

        // Change this later if your project has a specific dashboard route
        window.location.href = "/dashboard";
      } else {
        setMessage(data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Unable to connect to backend");
    }
  };

  return (
    <div>
      <h2>Student Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        <br />

        <button type="submit">
          Login
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;