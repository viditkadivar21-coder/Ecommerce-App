import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const { login } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      let res;
      if (isRegister) {
        // POST /api/auth/register
        res = await fetch("http://localhost:5000/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
      } else {
        res = await login(email, password);
      }
      const data = await res.json ? await res.json() : res;
      if (data.token) {
        alert(isRegister ? "Registration successful. Logged in." : "Login Successful");
        navigate("/");
      }
    } catch (err) {
      setError(err.message || "Operation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>{isRegister ? "Register" : "Login"}</h2>

      <button onClick={() => setIsRegister(!isRegister)}>
        Switch to {isRegister ? "Login" : "Register"}
      </button>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        {isRegister && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? (isRegister ? "Registering..." : "Logging in...") : (isRegister ? "Register" : "Login")}
        </button>
      </form>
    </div>
  );
}

export default Login;
