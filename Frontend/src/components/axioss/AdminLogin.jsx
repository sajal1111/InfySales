import { useEffect, useState } from "react";
import axios from "axios";
import Applicants from "./Applicants";


function AdminLogin({ goBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
  const token = localStorage.getItem("adminToken");

  if (token) {
    setIsLoggedIn(true);
  }
}, []);
const handleLogin = async (e) => {
  e.preventDefault();
  setMessage("");

  try {
    const url = "http://localhost:2004/api/admin/login";
    // After deployment:
    // const url = "https://franchisebackend-production-fa4b.up.railway.app/api/admin/login";

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
      // ✅ Store JWT Token
      localStorage.setItem("adminToken", response.data.token);

      // Optional: Store Admin Email
      localStorage.setItem("adminEmail", email);

      setMessage("✅ Login Successful");

      setTimeout(() => {
        setIsLoggedIn(true);
      }, 1000);
    } else {
      setMessage("❌ " + response.data.msg);
    }
  } catch (err) {
    console.error(err);
    setMessage("❌ Unable to connect to server");
  }
};
  if (isLoggedIn) {
    return <Applicants />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96 border border-gray-700">

        <div className="flex justify-start mb-4">
          <button
  type="button"
  onClick={() => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminEmail");
    goBack();
  }}
  className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg"
>
  ← Home
</button>
        </div>

        <h2 className="text-3xl font-bold text-center mb-6">
          👨‍💼 Admin Login
        </h2>

        {message && (
          <p
            className={`text-center mb-4 ${
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
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold"
          >
            Login
          </button>

        </form>


      </div>
    </div>
  );
}

export default AdminLogin;