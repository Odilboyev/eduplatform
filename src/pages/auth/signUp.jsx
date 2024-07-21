import React, { useState } from "react";
import { signUp } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    email: "",
    age: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.userName) newErrors.userName = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.age) newErrors.age = "Age is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const res = await signUp(formData);
      console.log(res);
      localStorage.setItem("eduToken", res?.accessToken);
      navigate("/signin");
      // Redirect to login page or show success message
    } catch (error) {
      setErrors({ server: error.response.data });
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Register</h1>

        <p
          className="text-red-500 text-sm mt-1 text-center mb-5"
          style={{ opacity: errors.server ? 1 : 0 }}
        >
          {errors.server}
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={formData.firstName}
              name="firstName"
              onChange={handleChange}
              placeholder="First Name"
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              value={formData.lastName}
              name="lastName"
              onChange={handleChange}
              placeholder="Last Name"
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              value={formData.userName}
              name="userName"
              onChange={handleChange}
              placeholder="Username"
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.userName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.userName && (
              <p className="text-red-500 text-sm mt-1">{errors.userName}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div>
            <input
              type="number"
              value={formData.age}
              name="age"
              onChange={handleChange}
              placeholder="Age"
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.age ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age}</p>
            )}
          </div>
          <p className="mt-1 text-center mb-5 text-gray-800">
            already have an account ?{" "}
            <Link to="/signin" className="text-blue-500 font-bold">
              Sign in
            </Link>
          </p>
          <button type="submit" className="w-full border border-tertiary">
            Sign Up!
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
