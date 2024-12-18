import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { toggle } from "../../redux/slice";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { clearUser } from "../../redux/slice";

function Navbar() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const isToggled = useSelector((state) => state.myCart?.toggle || false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleThemeHandler = () => {
    dispatch(toggle());
  };
  const toggleMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Getting Current User Firebase
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    const email = user.email;
    console.log(email);

    const uid = user.uid;
  }

  //   Sign out
  const logOutHandler = () => {
    signOut(auth)
    .then(() => {
      // Clear user data from Redux
      dispatch(clearUser());

      // Remove user data from localStorage
      localStorage.removeItem("user");

      alert("You have successfully logged out. Please log in again.");

      // Redirect to the login page
      Navigate("/login");
    })
    .catch((error) => {
      const errorMessage =
        error.message || "An error occurred while logging out. Please try again.";
      alert(errorMessage);
    });

  };

  return (
    <div className="">
      <nav
        className={`h-[100px] flex justify-around items-center font-poppins font-medium shadow-custom-shadow ${
          isToggled ? "bg-white text-black" : "bg-black text-white "
        } transition-all duration-300 ease-in-out border-gray-200 dark:bg-gray-900`}
      >
        <div className="logo">
          <h1 className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white"'>
            Logo
          </h1>
        </div>

        <button>
          <i
            onClick={toggleMenuHandler}
            className={`fa-solid fa-bars md:hidden  dark:bg-gray-800
               md:dark:bg-gray-900 dark:border-gray-700 dark:text-white  text-2xl`}
          ></i>
        </button>

        <ul className="uppercase hidden md:flex gap-10 md:flex-row ">
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>
            <Link to={"/"}>Products</Link>
          </li>
          {user && (
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          )}

          {!user ? (
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          ) : (
            <li>
              <Link onClick={logOutHandler} to="/logout">
                Log Out
              </Link>
            </li>
          )}

          <li
            className="cursor-pointer text-xl flex items-center"
            onClick={toggleThemeHandler}
          >
            {isToggled ? <CiDark /> : <MdDarkMode />}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
