import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  const isToggled = useSelector((state) => state.myCart?.toggle || false);
  return (
    <div>
      <footer
        className={` ${
          isToggled ? "bg-white text-black" : "bg-gray-800 text-white"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2
                className={`mb-6 text-sm font-semibold  uppercase dark:text-white ${
                  isToggled
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-white"
                } transition-all duration-300 ease-in-out`}
              >
                FASHION
              </h2>
        
              <p>Complete your style with awesome clothes from us.</p>
              <div className="flex space-x-4 text-white">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-white bg-[#EBD96B] p-3 rounded text-2xl" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-white bg-[#EBD96B] p-3 rounded text-2xl" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-white bg-[#EBD96B] p-3 rounded text-2xl" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-white bg-[#EBD96B] p-3 rounded text-2xl" />
                </a>
              </div>
            </div>
            <div>
              <h2
                className={`mb-6 text-sm font-semibold  uppercase dark:text-white ${
                  isToggled
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-white"
                } transition-all duration-300 ease-in-out`}
              >
                Help center
              </h2>
              <ul
                className={`font-medium ${
                  isToggled
                    ? "bg-white text-gray-500 dark:text-gray-400"
                    : "bg-gray-800 text-white"
                } transition-all duration-300 ease-in-out`}
              >
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Discord Server
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2
                className={`mb-6 text-sm font-semibold  uppercase dark:text-white ${
                  isToggled
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-white"
                } transition-all duration-300 ease-in-out`}
              >
                Legal
              </h2>
              <ul
                className={`font-medium ${
                  isToggled
                    ? "bg-white text-gray-500 dark:text-gray-400"
                    : "bg-gray-800 text-white"
                } transition-all duration-300 ease-in-out`}
              >
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2
                className={`mb-6 text-sm font-semibold  uppercase dark:text-white ${
                  isToggled
                    ? "bg-white text-gray-900"
                    : "bg-gray-800 text-white"
                } transition-all duration-300 ease-in-out`}
              >
                Download
              </h2>
              <ul
                className={`font-medium ${
                  isToggled
                    ? "bg-white text-gray-500 dark:text-gray-400"
                    : "bg-gray-800 text-white"
                } transition-all duration-300 ease-in-out`}
              >
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    iOS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Android
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Windows
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    MacOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
