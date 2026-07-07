import React, { useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await axios.post(
  "http://localhost:2004/client/forgot-password",
  { email }
);

    if (response.data.success) {
      alert("Password sent successfully to your email.");
    } else {
      alert(response.data.error);
    }
  } catch (err) {
    console.error(err);
    alert("Unable to send password.");
  }

  setLoading(false);
};

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Recover Your Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
          disabled={loading}
        >
          {loading ? "Sending..." : "Recover Password"}
        </button>
      </form>
    </div>
  );
};

export default PasswordRecovery;
