import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import config from "../../api/apiConfig";
import auth from "../auth/auth";
import Navbar from "../../components/navbar";

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
    <div className="flex min-h-screen p-6">
      <div className="flex-1 p-6">
        <Navbar title={course.title} inDoor />
        <div className="bg-white p-6 rounded-lg shadow-neumorphism text-secondary border-secondary border-[0.2px]">
          <h2 className="text-2xl font-bold mb-4">Course Description</h2>
          <p className="mb-6">{course.description}</p>
          <h3 className="text-xl font-bold mb-4">Instructor</h3>
          <p className="mb-6">{course.instructor}</p>
          <h3 className="text-xl font-bold mb-4">Duration</h3>
          <p>{course.duration}</p>
          <button onClick={handleEnrollClick} className="mt-8">
            {auth ? "Start" : "Enroll"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
