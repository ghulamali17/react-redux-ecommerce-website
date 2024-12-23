import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../Redux/slice";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  
  // Log out Handler
  const logOutHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(clearUser());
        alert("You have successfully logged out.");
        navigate("/login");
      })
      .catch((error) => {
        const errorMessage =
          error.message || "An error occurred while logging out.";
        alert(errorMessage);
      });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button type="button" className="focus:outline-none">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
          className="w-8 h-8 rounded-full object-cover"
          alt="User Avatar"
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                onClick={logOutHandler}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
