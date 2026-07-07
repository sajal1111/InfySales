import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const History = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [salesData, setSalesData] = useState([]);
  const [totalSales, setTotalSales] = useState(0);

  const fetchSalesData = async () => {
    try {
      const response = await axios.get("http://localhost:2004/client/getSales", {
        params: { from: fromDate, to: toDate }},{headers: {'Content-Type': 'application/x-www-form-urlencoded'  } }
      );
      setSalesData(response.data);
     
      // Calculate total sales
      const total = response.data.reduce((acc, sale) => acc + sale.totalsales, 0);
      setTotalSales(total);
    } catch (error) {
      console.error("Error fetching sales data:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Sales History</h2>
      <div className="flex gap-4 items-center mb-4">
        <label>From:</label>
        <DatePicker selected={fromDate} onChange={setFromDate} />
        <label>To:</label>
        <DatePicker selected={toDate} onChange={setToDate} />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={fetchSalesData}
        >
          Search
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Date</th>
            <th className="border p-2">Total Sales</th>
            <th className="border p-2">Total Customers</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale, index) => (
            <tr key={index} className="border">
              <td className="border p-2">{sale.date}</td>
              <td className="border p-2">{sale.totalsales}</td>
              <td className="border p-2">{sale.totalcustomers}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 font-bold">Total Sales: {totalSales}</div>
    </div>
  );
};

export default History;
