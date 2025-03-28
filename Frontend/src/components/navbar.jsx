import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./dilu.jpg";

function navbar() {
  return (
    <nav className="sticky top-0 py-4 flex items-center justify-between z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <NavLink to="/">
              <p className="text-white">logo</p>
              {/* <img src={Logo} width={70} className="" /> */}
            </NavLink>
          </div>
          <div className="hidden lg:flex lg:space-x-6 lg:justify-between lg:items-center">
            <ul className="flex space-x-6">
              <li
                className="relative flex items-center text-white cursor-pointer before:absolute before:bottom-0 before:left-0 
                before:w-0 before:h-1 before:bg-red-500 before:transition-all before:duration-300 hover:before:w-full"
              >
                <NavLink
                  to="/graphics"
                  className={({ isActive }) =>
                    `block duration-200 ${
                      isActive
                        ? "underline decoration-red-500 decoration-4"
                        : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li
                className="relative flex items-center text-white cursor-pointer before:absolute before:bottom-0 before:left-0 
                before:w-0 before:h-1 before:bg-red-500 before:transition-all before:duration-300 hover:before:w-full"
              >
                <NavLink
                  to="/graphics"
                  className={({ isActive }) =>
                    `block duration-200 ${
                      isActive
                        ? "underline decoration-red-500 decoration-4"
                        : ""
                    }`
                  }
                >
                  About
                </NavLink>
              </li>

              <li
                className="relative flex items-center text-white cursor-pointer before:absolute before:bottom-0 before:left-0 
                before:w-0 before:h-1 before:bg-red-500 before:transition-all before:duration-300 hover:before:w-full"
              >
                <NavLink
                  to="/graphics"
                  className={({ isActive }) =>
                    `block duration-200 ${
                      isActive
                        ? "underline decoration-red-500 decoration-4"
                        : ""
                    }`
                  }
                >
                  Services
                </NavLink>
              </li>

              <li
                className="relative flex items-center text-white cursor-pointer before:absolute before:bottom-0 before:left-0 
                before:w-0 before:h-1 before:bg-red-500 before:transition-all before:duration-300 hover:before:w-full"
              >
                <NavLink
                  to="/graphics"
                  className={({ isActive }) =>
                    `block duration-200 ${
                      isActive
                        ? "underline decoration-red-500 decoration-4"
                        : ""
                    }`
                  }
                >
                  Portfolio
                </NavLink>
              </li>

              <li
                className="relative flex items-center text-white cursor-pointer before:absolute before:bottom-0 before:left-0 
                 before:w-0 before:h-1 before:bg-red-500 before:transition-all before:duration-300 hover:before:w-full"
              >
                <NavLink
                  to="/graphics"
                  className={({ isActive }) =>
                    `block duration-200 ${
                      isActive
                        ? "underline decoration-red-500 decoration-4"
                        : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>right</div>
        </div>
        <div>
          <NavLink to="/">
            <img src={Logo} height={200} width={400} className="" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
