import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
        <h2 className="text-xl font-bold mb-4">FDRCollect</h2>
        <Link className="mb-2 hover:underline" to="/dashboard">Dashboard</Link>
        <Link className="mb-2 hover:underline" to="/payments">Payments</Link>
        <button onClick={logout} className="mt-auto bg-red-500 px-4 py-2 rounded">Logout</button>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
