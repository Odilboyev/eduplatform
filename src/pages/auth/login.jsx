import React, { useState } from "react";
import { signIn } from "../../api/auth";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
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
      await signIn(formData);
      // Redirect to home page or show success message
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className={`w-full p-2 border rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className={`w-full p-2 border rounded ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <p className="font-bold mt-1 text-center mb-5">
            First time?{" "}
            <Link to="/signup" className="text-primary">
              Sign up
            </Link>
          </p>
          <button
            type="submit"
            className="bg-softGreen/80 w-full text-white px-4 py-2 rounded hover:bg-softGreen"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;