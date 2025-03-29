import React from "react";
import { NavLink } from "react-router-dom";
import About from "./about";
import Services from "./myServices";
import Work from "./myWork";
import Contact from "./contact";

function navbar() {
  const scrollToSection = (id, event) => {
    event.preventDefault(); // Prevent default NavLink behavior
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                  to="/"
                  onClick={(e) => scrollToSection("home", e)}
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
                  to="/about"
                  onClick={(e) => scrollToSection("about", e)}
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
                  to="/services"
                  onClick={(e) => scrollToSection("services", e)}
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
                  to="/portfolio"
                  onClick={(e) => scrollToSection("mywork", e)}
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
                  to="/contact"
                  onClick={(e) => scrollToSection("contact", e)}
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
        <div id="home" className="flex justify-between items-center h-screen">
          <div className="text-white">
            <h2 className="text-lg">Software Developer</h2>
            <h1 className="text-3xl py-2 font-bold">
              Hi, I'm <span className="text-pink-500">Dil Bahadur</span> <br />{" "}
              Tharu from Kathmandu
            </h1>
          </div>
          <div>
            <NavLink to="/">
              {/* <img src={Logo} height={200} width={620} className="mx-auto" /> */}
            </NavLink>
          </div>
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="mywork">
          <Work />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </nav>
  );
}

export default navbar;
