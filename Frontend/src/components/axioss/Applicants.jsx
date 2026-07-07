import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import axios from 'axios';

const DashboardLayout = () => {
  const token = localStorage.getItem("adminToken");
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminEmail");
    window.location.reload();
};
  useEffect(() => {
    fetchApplications();
  }, []);
  
  // const handleSendEmail = async (email,name) => {
  //   try {
  //     alert(" ID:", email, "status:", name);

  //     let url = "http://localhost:2004/api/applicant/send-franchise-email";
  //     const response = await axios.post(url,  {email,name}, {
  //         headers: {'Content-Type': 'application/x-www-form-urlencoded' },
  //     });
  
  //     const result = await response.json();
  //     if (result.success) {
  //       alert("Franchise email sent to " + applicant.contact);
  //     } else {
  //       alert("Error sending email: " + result.error);
  //     }
  //   } catch (error) {
  //     console.error("Error:");
  //   }
  // };
  const handleSendEmail = async (email, name) => {
    try {
        alert(`Sending email to: ${email}, Name: ${name}`);
        // let url = "https://franchisebackend-production-fa4b.up.railway.app/api/send-franchise-email";
        let url = "http://localhost:2004/api/send-franchise-email";
      const response = await axios.post(
    url,
    { email, name },
    {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token}`,
        },
    }
);

        const result = response.data;
        if (result.success) {
            alert(`Email sent successfully to ${email}`);
        } else {
            alert(`Error sending email: ${result.error}`);
        }
    } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send email.");
    }
};
  const fetchApplications = async () => {
    try {
      const response = await fetch(
  "http://localhost:2004/api/applicant/takedata",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
      const data = await response.json();
      if (data.status) {
        setApplications(data.applications);
      }

      if (response.status === 401 || response.status === 403) {
    localStorage.removeItem("adminToken");
    window.location.reload();
    return;
}
    } catch (err) {
      setError("Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (uid, istatus) => {
    try {
      console.log(" ID:", uid, "status:", istatus);

      // let url = "https://franchisebackend-production-fa4b.up.railway.app/api/applicant/updateStatus";
      
      let url = "http://localhost:2004/api/applicant/updateStatus";
      const response = await axios.post(
    url,
    { uid, istatus },
    {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token}`,
        },
    }
);

      if (response.data.status === true) {
        fetchApplications(); 
      } else {
        console.error("Failed to update:", response.data.msg);
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const handleStatusFilter = (e) => {
    setSelectedStatus(e.target.value);
  };

  const filteredApplications = applications.filter(app => 
    selectedStatus === "all" || app.istatus.toString() === selectedStatus
  );

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 h-full bg-white shadow-lg flex-shrink-0 overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
            <span className="text-xl font-bold">Infysales</span>
          </div>

<nav className="space-y-2">

    <SidebarItem
        icon={<LayoutDashboard size={20} />}
        text="Dashboard"
        active
    />

    <div className="mt-8">

        <SidebarItem
            icon={<LogOut size={20} />}
            text="Logout"
            onClick={handleLogout}
        />

    </div>

</nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white shadow-sm z-10">
          <div className="flex justify-between items-center p-4">
            <div>
              <h1 className="text-2xl font-bold">Hello Admin!</h1>
              <p className="text-gray-600">Welcome back to dashboard.</p>
            </div>
          </div>
        </div>

        {/* Status Filter */}
        <div className="px-6 py-4">
          <select
            value={selectedStatus}
            onChange={handleStatusFilter}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="all">All</option>
            <option value="1">Accepted</option>
            <option value="2">Franchise</option>
            <option value="3">Declined</option>
          </select>
        </div>

        {/* Applications Table */}
        <div className="flex-1 overflow-auto p-6">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h2 className="text-xl font-bold">Applications</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="sticky top-0 px-6 py-3 text-left text-sm font-medium text-gray-500 bg-gray-50">Name</th>
                    <th className="sticky top-0 px-6 py-3 text-left text-sm font-medium text-gray-500 bg-gray-50">Contact</th>
                    <th className="sticky top-0 px-6 py-3 text-left text-sm font-medium text-gray-500 bg-gray-50">Business</th>
                    <th className="sticky top-0 px-6 py-3 text-left text-sm font-medium text-gray-500 bg-gray-50">Location</th>
                    <th className="sticky top-0 px-6 py-3 text-left text-sm font-medium text-gray-500 bg-gray-50">Cite</th>
                    <th className="sticky top-0 px-6 py-3 text-left text-sm font-medium text-gray-500 bg-gray-50">City</th>
                    <th className="sticky top-0 px-6 py-3 text-left text-sm font-medium text-gray-500 bg-gray-50">Pincode</th>
                    <th className="sticky top-0 px-6 py-3 text-left text-sm font-medium text-gray-500 bg-gray-50">Status</th>
                    {(selectedStatus !== "all" && selectedStatus !== "2") && (
                      <th className="sticky top-0 px-6 py-3 text-left text-sm font-medium text-gray-500 bg-gray-50">Actions</th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredApplications.map((app) => (
                    <tr key={app._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{app.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{app.contact}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{app.business}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{app.area}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{app.cite}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{app.city}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{app.pincode}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge istatus={app.istatus} />
                      </td>
                      {(selectedStatus !== "all") && (
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex gap-2">
                            {selectedStatus === "1" && (
                              <>
                                <button
                                  onClick={() => {
                                    handleStatusUpdate(app.uid, 2);
                                    handleSendEmail(app.uid,app.name);
                                  }}
                                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                  Franchise
                                </button>
                                <button
                                  onClick={() => handleStatusUpdate(app.uid, 3)}
                                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                  Decline
                                </button>
                              </>
                            )}
                            {selectedStatus === "2" && (
                              <>
                                <button
                                  onClick={() => handleStatusUpdate(app.uid, 3)}
                                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                  Decline
                                </button>
                              </>
                            )}
                            {selectedStatus === "3" && (
                              <>
                                <button
                                  onClick={() => handleStatusUpdate(app.uid, 1)}
                                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                  Accept
                                </button>
                                <button
                                  onClick={() => {
                                    handleStatusUpdate(app.uid, 2);
                                    handleSendEmail(app.uid,app.name);
                                  }}
                                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                  Franchise
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, active, onClick }) => (
<div
    onClick={onClick}
    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer ${
        active
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-50"
    }`}
>
    {icon}
    <span>{text}</span>
  </div>
);

const StatusBadge = ({ istatus }) => {
  const getStatusDetails = () => {
    switch (istatus) {
      case 1:
        return { text: 'Accepted', className: 'bg-green-100 text-green-800' };
      case 2:
        return { text: 'Franchise', className: 'bg-blue-100 text-blue-800' };
      case 3:
        return { text: 'Declined', className: 'bg-red-100 text-red-800' };
      default:
        return { text: 'Pending', className: 'bg-gray-100 text-gray-800' };
    }
  };

  const { text, className } = getStatusDetails();
  return (
    <span className={`px-2 py-1 rounded-full text-sm ${className}`}>
      {text}
    </span>
  );
};

export default DashboardLayout;
