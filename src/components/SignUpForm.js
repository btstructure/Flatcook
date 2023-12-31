import React, { useState } from "react";
import { Link } from "react-router-dom";


const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    first_name: "",
    last_name: "",
  });


  const [showPopup, setShowPopup] = useState(false);

  const backendBaseUrl = "http://localhost:3001";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    fetch(`${backendBaseUrl}/api/v1/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        setShowPopup(true);
        setFormData({
          username: "",
          password: "",
          confirmPassword: "",
          first_name: "",
          last_name: "",
        });
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {showPopup ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <p className="text-xl font-semibold">Sign Up Completed!</p>
            <p>You have successfully signed up.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="w-1/3 bg-white bg-opacity-75 rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label htmlFor="first_name" className="block font-semibold">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                value={formData.first_name}
                onChange={handleChange}
                name="first_name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="last_name" className="block font-semibold">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                value={formData.last_name}
                onChange={handleChange}
                name="last_name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block font-semibold">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                name="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block font-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md focus:outline-none"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center">
            Have an account?{" "}
            <Link
              to="/"
              className="text-blue-500 font-semibold hover:text-blue-600"
            >
              Login
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
