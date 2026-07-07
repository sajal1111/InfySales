import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import History from "./History";
import Today from "./Today";
import PasswordRecovery  from "./Setting";
import { LayoutDashboard, FileText, BarChart, Settings, LogOut } from "lucide-react";
import Flogin from "./Flogin";
import Chart from "./Chart";
const Sidebar = () => {
  const handleLogout = () => {
    setTimeout(() => window.location.href = "/logout", 1500);
  };
  return (
    <div className="w-64 h-screen bg-white shadow-lg flex-shrink-0 overflow-y-auto p-4">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
        <span className="text-xl font-bold">Franchise</span>
      </div>
      <nav className="space-y-2">
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Today's Sale" link="/today" />
        <SidebarItem icon={<FileText size={20} />} text="Sales History" link="/history" />
        <SidebarItem icon={<BarChart size={20} />} text="Charts" link="/charts" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" link="/settings" />
        <div className="mt-8">
          {/* ✅ Logout button with onClick event */}
          <button onClick={handleLogout} className="flex items-center gap-2 p-2 rounded-lg cursor-pointer text-red-600 hover:bg-red-100">
            <LogOut size={20} />
            <span>Log out</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, text, link }) => (
  <Link to={link} className="flex items-center gap-2 p-2 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-50">
    {icon}
    <span>{text}</span>
  </Link>
);

const Sales = () => {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden p-6">
          <div className="bg-white shadow-sm p-4 mb-4">
            <h1 className="text-2xl font-bold">Sales Dashboard</h1>
            <p className="text-gray-600">Manage your sales records efficiently.</p>
          </div>
          <div className="flex-1 overflow-auto bg-white shadow rounded-lg p-6">
            <Routes>
              <Route path="/today" element={<Today />} />
              <Route path="/history" element={<History />} />
              <Route path="/charts" element=  {<Chart />}/>
              <Route path="/settings" element={<PasswordRecovery />}  />
              <Route path="/logout" element={<Flogin/>}  />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Sales;
