import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggle, clearUser } from "../../Redux/slice.js";
import { getAuth, signOut } from "firebase/auth";
import Dropdown from "../Dropdown.jsx";
import DarkMode from "../DarkMode/DarkMode.jsx";
import { RiCloseLargeFill } from "react-icons/ri";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Logo1 from "../../../assets/logo.svg"
import Logo2 from "../../../assets/logo2.svg"

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);

  const isToggled = useSelector((state) => state.myCart?.toggle || false);
  const user = useSelector((state) => state.myCart?.user);
  const displayName = user?.name || "Guest";

  const toggleThemeHandler = () => {
    dispatch(toggle());
  };

  // Log out Handler
  const logOutHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(clearUser());
        toast.success("You have successfully logged out.");
        navigate("/login");
      })
      .catch((error) => {
        const errorMessage =
          error.message || "An error occurred while logging out.";
        toast.error(errorMessage);
      });
  };

  // Active class logic for Nav Links
  const getActiveClass = ({ isActive }) =>
    isActive
      ? `text-center p-3 mt-6 ${
          isToggled ? "bg-black text-white" : "bg-white text-black"
        } hover:bg-gray-800`
      : `hover:bg-gray-800 text-center p-3 mt-6 text-gray-500 hover:text-white`;

  //Stop page scroll when the menu is open
  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = Math.abs(parseInt(document.body.style.top || "0", 10));
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`h-[100px] flex fixed w-[100%]  z-10 top-0 justify-around items-center font-poppins font-medium shadow-custom-shadow ${
        isToggled ? "bg-white text-black" : "bg-black text-white"
      } transition-all duration-300 ease-in-out border-gray-200`}
    >
      <div className="logo flex gap-1">
      <img src={isToggled ? Logo1 : Logo2} alt="Logo" />
        <h1 className="self-center text-4xl font-semibold">FASHION</h1>
      </div>
      {/* Hamburger */}
      <button onClick={() => setMenuOpen(true)} className="tablet:hidden block">
        <i className="fa-solid fa-bars dark:bg-gray-800 dark:border-gray-700 dark:text-white text-2xl"></i>
      </button>
      {/* Sidebar mobile menu  */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed h-full w-screen lg:hidden 
    bg-black/50 backdrop-blur-sm top-0 right-0
    ${menuOpen ? "flex opacity-100" : "hidden opacity-0"} 
    transition-opacity transform duration-700 ease-in-out`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`text-black w-56 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex 
    ${isToggled ? "bg-white text-black" : "bg-gray-800 text-white"}`}
        >
          <RiCloseLargeFill
            onClick={() => setMenuOpen(false)}
            className="mt-0 mb-8 text-3xl cursor-pointer"
          />
          <ul className="uppercase flex flex-col gap-10 text-gray-500 items-center">
            {user && (
              <li className="flex absolute top-[85px] left-3 items-center gap-2 cursor-pointer mt-3 text-gray-500">
                 <Dropdown
              imgSrc="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
              classname={"w-8 h-8 rounded-full object-cover"}
              alt="User Icon"
              link1="Profile"
              link2="Setting"
              link3="Sign Out"
              linkClick={() => navigate("/profile")}
              onSignOut={logOutHandler}
            />
                <span className="font-semibold text-xl">{displayName}</span>
              </li>
            )}
            <li className="mt-10">
              <NavLink
                to="/"
                className={getActiveClass}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={getActiveClass}
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/cart"
                  className={getActiveClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Cart
                </NavLink>
              </li>
            )}
            {!user ? (
              <li>
                <NavLink
                  to="/signup"
                  className={getActiveClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </NavLink>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => {
                    logOutHandler();
                    setMenuOpen(false);
                  }}
                  className="hover:underline"
                >
                  Log Out
                </button>
              </li>
            )}
            <li
              className="cursor-pointer text-xl flex items-center"
              onClick={toggleThemeHandler}
            >
              <DarkMode />
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar Desktop  */}
      <ul className="uppercase hidden tablet:flex gap-10 text-gray-500 items-center">
        <li>
          <NavLink to="/" className={getActiveClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className={getActiveClass}>
            Shop
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink to="/cart" className={getActiveClass}>
              Cart
            </NavLink>
          </li>
        )}
        {!user ? (
          <li>
            <NavLink to="/signup" className={getActiveClass}>
              Sign Up
            </NavLink>
          </li>
        ) : (
          <li>
            <button onClick={logOutHandler} className="hover:underline">
              Log Out
            </button>
          </li>
        )}
        <li
          className="cursor-pointer text-xl flex items-center"
          onClick={toggleThemeHandler}
        >
          <DarkMode />
        </li>
        {user && (
          <li className="flex items-center gap-2 cursor-pointer mt-3 text-gray-500">
            <Dropdown
              imgSrc="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
              classname={"w-8 h-8 rounded-full object-cover"}
              alt="User Icon"
              link1="Profile"
              link2="Setting"
              link3="Sign Out"
              linkClick={() => navigate("/profile")}
              onSignOut={logOutHandler}
            />

            <span className="font-semibold text-xl">{displayName}</span>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
