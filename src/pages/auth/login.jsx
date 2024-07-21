import React, { useState } from "react";
import { signIn } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "./auth";

const SignInPage = () => {
  const navigate = useNavigate();
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
      const res = await signIn(formData);
      localStorage.setItem("eduToken", res?.accessToken);
      auth.logIn();
      navigate("/");
    } catch (error) {
      setErrors({ server: error.response.data });
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Sign in</h1>

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
          <p className="mt-1 text-center mb-5 text-gray-800">
            First time?{" "}
            <Link to="/signup" className="text-blue-500 font-bold">
              Sign up
            </Link>
          </p>
          <button type="submit" className="w-full border border-tertiary">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
