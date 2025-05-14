import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">Active Accounts: 134</div>
        <div className="bg-white p-4 rounded shadow">Pending Payments: $42,000</div>
        <div className="bg-white p-4 rounded shadow">Total Collected: $180,500</div>
      </div>
    </div>
  );
};

export default Dashboard;
