import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  app,
  getAuth,
  createUserWithEmailAndPassword,
} from "../Firebase/firebase.js";
import { useSelector } from "react-redux";
const auth = getAuth(app);

function SignUP() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const isToggled = useSelector((state) => state.myCart?.toggle || false);

  // Creating user account firebase
  const sendData = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email and Password should not be empty");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Registration Successful");
        navigate("/login");
      })
      .catch((error) => alert("Error: " + error.message));
  };

  return (
    <div
      className={` ${
        isToggled ? "bg-white text-black" : "bg-gray-800 text-white"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://www.svgrepo.com/show/301692/login.svg"
            alt="Workflow"
          />
          <h2
            className={` mt-6 text-center text-3xl leading-9 font-extrabold  ${
              isToggled ? "bg-white text-gray-900 " : "bg-gray-800 text-white"
            } transition-all duration-300 ease-in-out`}
          >
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
            <Link
              to={"/login"}
              className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              or login to your account
            </Link>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="mt-6">
              <label
                className={` block text-sm font-medium leading-5${
                  isToggled
                    ? "bg-white text-gray-700 "
                    : "bg-gray-800 text-white"
                } transition-all duration-300 ease-in-out`}
                htmlFor="email"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  type="email"
                  required=""
                  className={` appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5${
                    isToggled
                      ? "bg-white text-gray-700 "
                      : "bg-gray-800 text-black"
                  } transition-all duration-300 ease-in-out`}
                />
                <div className="hidden absolute inset-y-0 right-0 pr-3 items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="password"
                className={` block text-sm font-medium leading-5 ${
                  isToggled
                    ? "bg-white text-gray-700 "
                    : "bg-gray-800 text-white"
                } transition-all duration-300 ease-in-out`}
              >
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required=""
                  className={` appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5${
                    isToggled
                      ? "bg-white text-gray-700 "
                      : "bg-gray-800 text-black"
                  } transition-all duration-300 ease-in-out`}
                />
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  onClick={sendData}
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Create account
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUP;
