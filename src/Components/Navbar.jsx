import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context"; // Import the context

const Navbar = () => {
  const { state, setTheme } = useContext(ContextGlobal); // Access the context and setTheme function
  const { theme } = state; // Destructure the theme from state

  // Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-gray-400" : "bg-blue-400"
      } w-full flex justify-between px-8 py-4`}
    >
      <button
        onClick={toggleTheme}
        className={` ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white"
        }  hover:scale-105  px-8 rounded  `}
      >
        {theme === "dark" ? "Dark" : "light"}
      </button>

      <div className=' flex gap-8'>
        <Link to={"/"}>
          <button className='hover:scale-110'>Home</button>
        </Link>
        <Link to={"/contact"}>
          <button className='hover:scale-110'>Contact</button>
        </Link>
        <Link to={"/favs"}>
          <button className='hover:scale-110'>Favs</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
