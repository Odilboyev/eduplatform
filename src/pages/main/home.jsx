import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../api/apiConfig";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await config.get("/courses");
      setCourses(response.data);
      setCategories([
        "all",
        ...new Set(response.data.map((course) => course.category)),
      ]);
    };
    fetchCourses();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory)
    : selectedCategory === "all"
    ? courses
    : courses;

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
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className={`text-white block py-2 ${
                      selectedCategory === category ? "font-bold" : ""
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex-1 p-6">
        <header className="bg-softGreen p-4 mb-6">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Available Courses</h1>
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Link to={`/course/${course.id}`} key={course.id}>
              <div className="bg-softGreen-light p-6 rounded-lg shadow-neumorphism">
                <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                <p>{course.description}</p>
                <div className="mt-4">
                  <span className="inline-block bg-softGreen text-white px-3 py-1 rounded-full">
                    {course.instructor}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
