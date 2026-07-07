import { useState } from "react";
import axios from "axios";
import Sales from "./Sales";

function Flogin({ goBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      // let url =
      //   "https://franchisebackend-production-fa4b.up.railway.app/api/applicant/login";
let url ="http://localhost:2004/api/applicant/login";
      const response = await axios.post(
        url,
        { email, password },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.data.success) {
        setMessage("✅ Login Successful! Loading Sales Page...");

        setTimeout(() => {
          setIsLoggedIn(true);
        }, 1500);
      } else {
        setMessage("❌ " + response.data.error);
      }
    } catch (error) {
      setMessage("❌ Login failed. Please try again.");
    }
  };

  // Show Sales page after successful login
  if (isLoggedIn) {
    return <Sales />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96 border border-gray-700">

        {/* Home Button */}
        <div className="flex justify-start mb-4">
          <button
            type="button"
            onClick={goBack}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            ← Home
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center">
          🔑 Login
        </h2>

        {message && (
          <p
            className={`text-sm font-semibold text-center mb-4 ${
              message.includes("✅")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Flogin;