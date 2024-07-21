import React from "react";
import { BiChevronRight, BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import auth from "../pages/auth/auth";

const Navbar = ({ title, inDoor }) => {
  const navigate = useNavigate();
  return (
    <header className="bg-tertiary shadow-md rounded-md p-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        {inDoor && (
          <button
            className="rounded-full p-4 shadow-outer focus:shadow-inner "
            onClick={() => navigate(-1)}
          >
            <BiChevronRight />
          </button>
        )}
        <h1 className="text-white text-2xl font-bold">{title}</h1>
        {auth.isLoggedIn ? (
          <button className="rounded-full p-4 shadow-outer focus:shadow-inner">
            <BiUser />
          </button>
        ) : (
          <button className=" bg-lightBackground text-primary hover:text-lightBackground hover:bg-tertiary font-bold py-2 px-6 rounded-lg shadow-md  transition duration-300">
            sign in
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
