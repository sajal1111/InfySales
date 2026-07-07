import React, { useState } from 'react';
import axios from 'axios';
function Curd({ goToLogin, goBack }) {
  const [darkMode, setDarkMode] = useState(false);
  const [obj, setObj] = useState({
    name: "",
    uid: "",
    contact: "",
    address: "",
    business: "",
    date: "",
    cite: "",
    city: "",
    area: "",
    pincode: "",
    ostatus: "",
  });

  function doUpdate(event) {
    var { name, value } = event.target;
    setObj({ ...obj, [name]: value });
  }

  async function doSave(e) {
  e.preventDefault();

  try {
    console.log("Form Data:", obj);

    const url = "http://localhost:2004/api/applicant/dosaveuser";
    // After deploying backend:
    // const url = "https://franchisebackend-production-fa4b.up.railway.app/api/applicant/dosaveuser";

    const resp = await axios.post(url, obj, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    console.log(resp.data);

    if (resp.data.status) {
      alert(resp.data.msg);

      // Optional: clear form
      setObj({
        name: "",
        uid: "",
        contact: "",
        address: "",
        business: "",
        date: "",
        cite: "",
        city: "",
        area: "",
        pincode: "",
        ostatus: "",
      });

      // Optional: redirect to login
      // goToLogin();

    } else {
      alert(resp.data.msg);
    }

  } catch (err) {
    console.error(err);

    if (err.response) {
      alert(err.response.data.msg || "Server Error");
    } else {
      alert("Cannot connect to backend.");
    }
  }
}

  return (
    <div>
      <form onSubmit={doSave}>
        <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#282D2D] px-5">
          <div className="flex flex-col items-end justify-start overflow-hidden mb-2 xl:max-w-3xl w-full">
            <div className="flex">
              <h3 className="text-white">Dark Mode: &nbsp;</h3>
              <label className="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                <div
                  className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                ></div>
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
  <button
    type="button"
    onClick={goBack}
    className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
  >
    ← Home
  </button>
</div>
          <div className={`xl:max-w-3xl ${darkMode ? "bg-black" : "bg-white"} w-full p-5 sm:p-10 rounded-md`}>
            <h1 className={`text-center text-xl sm:text-3xl font-semibold ${darkMode ? "text-white" : "text-black"}`}>
              Apply for Franchise
            </h1>
            <div className="w-full mt-8">
              <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${
                      darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"
                    }`}
                    type="text"
                    placeholder="Your name"
                    name="name"
                    value={obj.name}
                    onChange={doUpdate}
                  />
                  <input
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${
                      darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"
                    }`}
                    type="text"
                    placeholder="email id"
                    name="uid"
                    value={obj.uid}
                    onChange={doUpdate}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${
                      darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"
                    }`}
                    type="number"
                    placeholder="Contact"
                    name="contact"
                    value={obj.contact}
                    onChange={doUpdate}
                  />
                  <input
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${
                      darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"
                    }`}
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={obj.address}
                    onChange={doUpdate}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${
                      darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"
                    }`}
                    type="text"
                    placeholder="Existing business"
                    name="business"
                    value={obj.business}
                    onChange={doUpdate}
                  />
                  <br />
                  <h3>Doing since:</h3>
                  <input
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${
                      darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"
                    }`}
                    type="date"
                    name="date"
                    value={obj.date}
                    onChange={doUpdate}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${
                      darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"
                    }`}
                    type="text"
                    placeholder="Cite Address"
                    name="cite"
                    value={obj.cite}
                    onChange={doUpdate}
                  />
                  <input
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${
                      darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"
                    }`}
                    type="text"
                    placeholder="City"
                    name="city"
                    value={obj.city}
                    onChange={doUpdate}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${
                      darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"
                    }`}
                    type="text"
                    placeholder="Total area in sq-m (l,b)"
                    name="area"
                    value={obj.area}
                    onChange={doUpdate}
                  />
                  <input
                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 ${
                      darkMode ? "bg-[#302E30] text-white focus:border-white" : "bg-gray-100 text-black focus:border-black"
                    }`}
                    type="number"
                    placeholder="Pincode"
                    name="pincode"
                    value={obj.pincode}
                    onChange={doUpdate}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <h1>Ownership status:</h1>
                  <input
                    type="radio"
                    name="ostatus"
                    value="Owner"
                    checked={obj.ostatus === 'Owner'}
                    onChange={doUpdate}
                  /> Owner
                  <input
                    type="radio"
                    name="ostatus"
                    value="Rent"
                    checked={obj.ostatus === 'Rent'}
                    onChange={doUpdate}
                  /> Rent
                </div>

                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Register</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
  Already have an account?{" "}
  <span
    onClick={goToLogin}
    className="text-[#E9522C] font-semibold cursor-pointer hover:underline"
  >
    Login
  </span>
</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Curd;
