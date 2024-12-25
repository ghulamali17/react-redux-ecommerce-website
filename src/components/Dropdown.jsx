import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dropdown({
  imgSrc,
  alt = "Icon",
  classname,
  link1,
  link2,
  link3,
  onSignOut,
  linkClick,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button type="button" className="focus:outline-none">
        <img src={imgSrc} alt={alt} className={classname} />
      </button>

      {isOpen && (
        <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li onClick={linkClick}>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {link1}
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {link2}
              </a>
            </li>
            <li>
              <button
                onClick={onSignOut}
                className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {link3}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
