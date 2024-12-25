import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../Firebase/firebase.js";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../Redux/slice.js";
import Loading from "../components/Loading.jsx";
import toast from 'react-hot-toast';

function Login() {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const isToggled = useSelector((state) => state.myCart?.toggle || false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // checking Firebase authentication state and update the Redux store with the current user.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
          })
        );
        console.log(user);
      } else {
        dispatch(setUser(null));
        console.log("no user");
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  // Sign In function firebase
  const signInUser = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successfull")
      navigate("/shop");
    } catch (err) {
      toast.error(`Wrong Email or Password`);
      console.log(err.message)
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      {loading !== false ? (
        <Loading />
      ) : (
        <div
          className={`mt-[100px] ${
            isToggled ? "bg-white text-black" : "bg-gray-800 text-white"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src={isToggled ? "./assets/logo.svg" : "./assets/logo2.svg"}
                alt="Logo"
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
              <form className="space-y-6" onSubmit={signInUser}>
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
      )}
    </>
  );
}

export default Login;
