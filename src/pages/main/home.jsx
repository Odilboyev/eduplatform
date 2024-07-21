import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../api/apiConfig";
import Navbar from "../../components/navbar";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await config.get("/courses");
      setCourses(response.data);
      setCategories(["All", ...response.data.map((course) => course.category)]);
    };
    fetchCourses();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  useEffect(() => {
    console.log(selectedCategory, "selectedCategory");
    console.log(categories, "categories");
  }, [selectedCategory, categories]);

  return (
    <div className="flex text-white">
      <nav className="bg-tertiary py-4 w-64 min-h-screen ">
        <div className="container mx-auto flex flex-col justify-between items-start h-full">
          <Link to="/" className="text-white text-xl font-bold m-6">
            EduPlatform
          </Link>
          <div className="w-full">
            {/* <input
              type="text"
              placeholder="Search"
              className="w-full mb-4 p-2 rounded shadow-inner focus:outline-none"
            /> */}
            <ul>
              {categories.map((category) => (
                <li
                  key={category}
                  className="relative w-full py-2"
                  onClick={() => handleCategoryClick(category)}
                >
                  <button
                    className={`rounded-none hover:bg-lightBackground hover:text-primary backdrop-blur-2xl w-full py-2 z-50 ${
                      selectedCategory === category
                        ? "font-bold bg-lightBackground"
                        : "text-white bg-tertiary/80"
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
        <Navbar title={"Available courses"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Link to={`/course/${course.id}`} key={course.id}>
              <div className="bg-tertiary ease-out duration-150 hover:bg-lightBackground hover:text-tertiary hover:border-tertiary  border shadow-md p-6 rounded-lg shadow-neumorphism">
                <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                <p>{course.description}</p>
                <div className="mt-4">
                  By{" "}
                  <span className="inline-block px-2">{course.instructor}</span>
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
