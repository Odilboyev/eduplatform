import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/auth/signUp";
import Home from "./pages/main/home";
import CoursePage from "./pages/main/course";
import Dashboard from "./pages/main/dashboard";
import SignInPage from "./pages/auth/login";
import PrivateRoute from "./privateRoute";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-lightBackground">
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>{" "}
          <Route path="/" exact element={<Home />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
