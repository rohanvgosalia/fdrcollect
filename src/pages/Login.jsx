import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("user", email);
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full p-2 mb-4"
        />
        <button onClick={handleLogin} className="bg-blue-600 text-white w-full py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
