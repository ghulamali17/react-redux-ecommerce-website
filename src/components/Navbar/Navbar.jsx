import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../Redux/slice";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const dispatch = useDispatch();
  const isToggled = useSelector((state) => state.myCart?.toggle || false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleThemeHandler = () => {
    dispatch(toggle());
  };

  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav
        className={`h-[70px] shadow-custom-shadow relative z-99 ${
          isToggled ? "bg-white text-black" : "bg-black text-white"
        } transition-all duration-300 ease-in-out border-gray-200 dark:bg-gray-900`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="logo">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ReduxStore
            </span>
          </div>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMenuHandler}
          >
            {isMenuOpen ? (
              <IoClose className="text-2xl" />
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul
              className={`font-medium flex items-center flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ${
                isMenuOpen ? "bg-white text-black" : ""
              }  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 dark:text-white`}
            >
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3  rounded md:bg-transparent   md:p-0 dark:text-white "
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Link
                  to="/cart"
                  className={`flex items-center gap-2 py-2 px-3 ${
                    isMenuOpen ? "bg-white text-black" : ""
                  }  md:p-0 dark:text-white md:dark:text-blue-500`}
                >
                  Cart <FaShoppingBag size={20} />
                </Link>
                <Link
                  to="/login"
                  className={`flex items-center gap-2 py-2 px-3 ${
                    isMenuOpen ? "bg-white text-black" : ""
                  }  md:p-0 dark:text-white md:dark:text-blue-500`}
                >
                  Login
                </Link>
              </li>
              <li
                className="cursor-pointer text-xl flex items-center"
                onClick={toggleThemeHandler}
              >
                {isToggled ? <CiDark /> : <MdDarkMode />}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
