import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import About from "./about";
import Services from "./myServices";
import Work from "./myWork";
import Contact from "./contact";
import Logo1 from "./logo1.png";
import Logo2 from "./logo2.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState(Logo1);

  const scrollToSection = (id, event) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLogo((prevLogo) => (prevLogo === Logo1 ? Logo2 : Logo1));
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <nav className="sticky top-0 py-4 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center w-full relative">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-12 rounded-full object-cover transform scale-110" // Zoom the image
              />
            </NavLink>
          </div>

          {/* Hamburger / Cross Toggle Button */}
          <div className="lg:hidden z-50">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  // 👇 This is the CROSS (X) icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // 👇 This is the Hamburger icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:space-x-6 lg:items-center">
            <ul className="flex space-x-6">
              {[
                { label: "Home", id: "home", to: "/" },
                { label: "About", id: "about", to: "/about" },
                { label: "Services", id: "services", to: "/services" },
                { label: "Portfolio", id: "mywork", to: "/portfolio" },
                { label: "Contact", id: "contact", to: "/contact" },
              ].map(({ label, id, to }) => (
                <li
                  key={id}
                  className="relative flex items-center text-white cursor-pointer before:absolute before:bottom-0 before:left-0 
                  before:w-0 before:h-1 before:bg-red-500 before:transition-all before:duration-300 hover:before:w-full py-2"
                >
                  <NavLink
                    to={to}
                    onClick={(e) => scrollToSection(id, e)}
                    className={({ isActive }) =>
                      `block duration-200 ${
                        isActive
                          ? "underline decoration-red-500 decoration-4"
                          : ""
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-12 left-0 w-full bg-black bg-opacity-0 px-4 py-4 z-50">
            <ul className="flex flex-col items-end text-right space-y-4">
              {[
                { label: "Home", id: "home", to: "/" },
                { label: "About", id: "about", to: "/about" },
                { label: "Services", id: "services", to: "/services" },
                { label: "Portfolio", id: "mywork", to: "/portfolio" },
                { label: "Contact", id: "contact", to: "/contact" },
              ].map(({ label, id, to }) => (
                <li
                  key={id}
                  className="relative text-white cursor-pointer before:absolute before:bottom-0 before:right-0 
          before:w-0 before:h-1 before:bg-red-500 before:transition-all before:duration-300 hover:before:w-full"
                >
                  <NavLink
                    to={to}
                    onClick={(e) => scrollToSection(id, e)}
                    className={({ isActive }) =>
                      `block duration-200 ${
                        isActive
                          ? "underline decoration-red-500 decoration-4"
                          : ""
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Hero Section */}
        <div
          id="home"
          className="flex flex-col lg:flex-row justify-between items-center h-screen"
        >
          <div className="text-white text-center lg:text-left">
            <h2 className="text-lg">Software Developer</h2>
            <h1 className="text-3xl py-2 font-bold">
              Hi, I'm <span className="text-pink-500">Dil Bahadur</span> <br />
              Tharu from Kathmandu
            </h1>
          </div>
        </div>

        {/* Sections */}
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

export default Navbar;
