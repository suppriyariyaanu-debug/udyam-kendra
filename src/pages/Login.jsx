import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      mode === "login"
        ? "Login successful. Redirecting to your dashboard shortly."
        : "Account created successfully. You can now log in."
    );

    if (mode === "register") {
      setMode("login");
    }

    setFormData({
      name: "",
      email: "",
      password: "",
    });

    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <Link to="/" className="login-logo">
          Udyam Kendra
        </Link>

        <h1>{mode === "login" ? "Welcome Back" : "Create Account"}</h1>

        <p className="login-subtitle">
          {mode === "login"
            ? "Log in to manage your business services and track your applications."
            : "Register for free and get access to all business services."}
        </p>

        <form onSubmit={handleSubmit}>
          {mode === "register" && (
            <div className="login-field">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="login-field">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {mode === "login" && (
            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="forgot-password"
                onClick={() =>
                  alert("Password reset instructions will be sent to your email.")
                }
              >
                Forgot password?
              </button>
            </div>
          )}

          <button type="submit" className="login-submit">
            {mode === "login" ? "Log In" : "Create Account"}
          </button>
        </form>

        <div className="login-divider">
          <span>OR</span>
        </div>

        <p className="register-text">
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <button
            type="button"
            onClick={() =>
              setMode(mode === "login" ? "register" : "login")
            }
          >
            {mode === "login" ? "Sign Up" : "Log In"}
          </button>
        </p>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Login;
