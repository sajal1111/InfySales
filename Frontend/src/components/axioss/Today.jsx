import { useState } from "react";
import axios from "axios";

const Today = () => {
  const [obj, setObj] = useState({
    date: "",
    totalsales: "",
    totalcustomers: "",
  });

  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", obj);
    try {
      const response = await axios.post("http://localhost:2004/client/dosaveuser", obj,{headers: {'Content-Type': 'application/x-www-form-urlencoded'  } });
      alert("Data submitted successfully!");
      setObj({ date: "", totalSales: "", totalCustomers: "" });
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data.");
    }
  };

  return (
    <center>
    <div className="p-4 border rounded shadow-md w-80 bg-white">
      <h2 className="text-lg font-semibold mb-4">Enter Sales Data</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Date:
          <input
            type="date"
            name="date"
            value={obj.date}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </label>

        <label className="block mb-2">
          Total Sales:
          <input
            type="number"
            name="totalsales"
            value={obj.totalsales}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </label>

        <label className="block mb-2">
          Total Customers Visited:
          <input
            type="number"
            name="totalcustomers"
            value={obj.totalcustomers}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </label>

        <button type="submit" className="bg-pink-500 text-white px-4 py-2 mt-4 w-full">
          Publish
        </button>
      </form>
    </div>
    </center>
  );
};

export default Today;
