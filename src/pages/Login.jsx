import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../components/Firebase/firebase";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { setUser } from "../redux/slice";

const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isToggled = useSelector((state) => state.myCart?.toggle || false);

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        // const user = value.user;
        // dispatch(setUser(user));
        navigate("/");
      })
      .catch((err) => alert(`Wrong Email or Password: ${err.message}`));
  };

  return (
    <div
      className={`${
        isToggled ? "bg-white text-black" : "bg-gray-800 text-white"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2
            className={`mt-10 text-center text-2xl font-bold tracking-tight ${
              isToggled ? "text-gray-900" : "text-white"
            }`}
          >
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={signInUser}
          >
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium ${
                  isToggled ? "text-gray-900" : "text-white"
                }`}
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 placeholder-gray-400 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className={`block text-sm font-medium ${
                  isToggled ? "text-gray-900" : "text-white"
                }`}
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 placeholder-gray-400 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
