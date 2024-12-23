import React from "react";
import { useSelector } from "react-redux";
function AdminLogin() {
  const isToggled = useSelector((state) => state.myCart?.toggle || false);
  return (
    <div
      className={`font-poppins ${
        isToggled ? "bg-white text-black" : "bg-gray-800 text-white"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="mt-[100px] text-center ">
        <h1
          className={`font-bold text-5xl mb-5 pt-5 ${
            isToggled ? "text-[#191919]" : "text-white"
          }`}
        >
          ADMIN LOGIN
        </h1>
      </div>
      <div
        className={`dark:bg-gray-800 mt-[70px] pb-[70px] overflow-hidden flex items-center justify-center`}
      >
        <div
          className={`lg:w-6/12 md:w-7/12 w-8/12 shadow-3xl rounded-xl ${
            isToggled ? "bg-gray-800" : "bg-white"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="bg-gray-800 shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
            <svg width={32} height={32} viewBox="0 0 24 24" fill="#FFF">
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
            </svg>
          </div>
          <form className="p-12 md:p-24">
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <img
                src="./assets/email.svg"
                className="absolute ml-3"
                viewBox="0 0 24 24"
                width={24}
                alt="email icon"
              />
              <input
                type="text"
                id="email"
                className="bg-gray-200 text-black rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Admin Email"
              />
            </div>
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" viewBox="0 0 24 24" width={24}>
                <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
              </svg>
              <input
                type="password"
                id="password"
                className="bg-gray-200 rounded text-black pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Password"
              />
            </div>
            <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
