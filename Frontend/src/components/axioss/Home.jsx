import React, { useState } from "react";
import { FaHome, FaChartBar, FaClipboardList, FaUsers, FaCog } from "react-icons/fa";
import Today from "./Today"; // Import your Today component

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  // Function to render selected component
  const renderComponent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <h2 className="text-2xl font-bold">Welcome to Dashboard</h2>;
      case "today":
        return <Today />;
      case "reports":
        return <h2 className="text-2xl font-bold">Reports Section</h2>;
      case "customers":
        return <h2 className="text-2xl font-bold">Customers Section</h2>;
      case "settings":
        return <h2 className="text-2xl font-bold">Settings Page</h2>;
      default:
        return <h2 className="text-2xl font-bold">Welcome to Dashboard</h2>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-5 space-y-6">
        <h1 className="text-xl font-bold text-blue-600">Infysales</h1>
        <nav className="space-y-4">
          <button onClick={() => setActiveComponent("dashboard")} className="flex items-center space-x-3 w-full p-3 hover:bg-gray-200 rounded-lg">
            <FaHome /> <span>Dashboard</span>
          </button>
          <button onClick={() => setActiveComponent("today")} className="flex items-center space-x-3 w-full p-3 hover:bg-gray-200 rounded-lg">
            <FaChartBar /> <span>Sales Report</span>
          </button>
          <button onClick={() => setActiveComponent("reports")} className="flex items-center space-x-3 w-full p-3 hover:bg-gray-200 rounded-lg">
            <FaClipboardList /> <span>Reports</span>
          </button>
          <button onClick={() => setActiveComponent("customers")} className="flex items-center space-x-3 w-full p-3 hover:bg-gray-200 rounded-lg">
            <FaUsers /> <span>Customers</span>
          </button>
          <button onClick={() => setActiveComponent("settings")} className="flex items-center space-x-3 w-full p-3 hover:bg-gray-200 rounded-lg">
            <FaCog /> <span>Settings</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {renderComponent()}
      </div>
    </div>
  );
}

export default Dashboard;
