import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Chart = () => {
  const [salesData, setSalesData] = useState([]);

  const fetchSalesData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:2004/client/getSales"
    );

    console.log("Sales Data:", response.data);

    const formattedData = response.data.map((sale) => ({
      name: new Date(sale.date).toLocaleDateString(),
      totalsales: sale.totalsales,
    }));

    setSalesData(formattedData);
  } catch (error) {
    console.error("Error fetching sales data:", error);
  }
};

  useEffect(() => {
    fetchSalesData();
  }, []);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Sales Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalsales" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
