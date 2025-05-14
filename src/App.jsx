import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Payments from "./pages/Payments";
import Layout from "./components/Layout";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="account/:id" element={<Account />} />
        <Route path="payments" element={<Payments />} />
      </Route>
    </Routes>
  );
}

export default App;
