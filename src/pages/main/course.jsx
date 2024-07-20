import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import config from "../../api/apiConfig";
import auth from "../auth/auth";

const CoursePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await config.get(`/courses/${id}`);
      setCourse(response.data);
    };
    fetchCourse();
  }, [id]);

  const handleEnrollClick = () => {
    if (auth.isLoggedIn) {
      // Logic for starting the course (e.g., navigate to the first module)
      alert("Starting the course...");
    } else {
      navigate("/signup");
    }
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <nav className="bg-softGreen p-4 w-64 min-h-screen">
        <div className="container mx-auto flex flex-col justify-between items-start h-full">
          <Link to="/" className="text-white text-xl font-bold mb-6">
            EduPlatform
          </Link>
          <div className="w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full mb-4 p-2 rounded shadow-inner focus:outline-none"
            />
            <ul>
              <li>
                <Link to="/" className="text-white block py-2">
                  Category 1
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white block py-2">
                  Category 2
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white block py-2">
                  Category 3
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex-1 p-6">
        <header className="bg-softGreen p-4 mb-6">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">{course.title}</h1>
          </div>
        </header>
        <div className="bg-softGreen-light p-6 rounded-lg shadow-neumorphism">
          <h2 className="text-xl font-bold mb-2">Course Description</h2>
          <p className="mb-4">{course.description}</p>
          <h3 className="text-lg font-bold mb-2">Instructor</h3>
          <p className="mb-4">{course.instructor}</p>
          <h3 className="text-lg font-bold mb-2">Duration</h3>
          <p>{course.duration}</p>
          <button
            onClick={handleEnrollClick}
            className="mt-6 bg-softGreen-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {auth ? "Start" : "Enroll"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
