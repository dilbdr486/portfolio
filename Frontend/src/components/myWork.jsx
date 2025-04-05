import React from "react";
import Mobile from "./mobile.jpg";
import Web from "./web.jpg";
import Chatbot from "./chatbot.jpg";

export default function myWork() {
  return (
    <div id="mywork" className="bg-black py-16 items-center">
      <h1 className="text-white text-4xl font-bold mb-12 text-center">My Work</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="relative bg-pink-600 w-full lg:w-1/3 h-96 text-white text-lg font-semibold rounded-lg shadow-lg overflow-hidden group">
          <img
            src={Mobile}
            alt="Mobile Development"
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-pink-600 bg-opacity-50 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
          <p className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            Mobile development involves creating applications for mobile devices, ensuring seamless performance and user experience.
            <button className="mt-4 px-4 py-2 bg-white text-pink-700 rounded-lg shadow-md hover:bg-pink-700 hover:text-white transition-colors duration-300">
              See More
            </button>
          </p>
        </div>
        <div className="relative bg-pink-600 w-full lg:w-1/3 h-96 text-white text-lg font-semibold rounded-lg shadow-lg overflow-hidden group">
          <img
            src={Web}
            alt="Web Development"
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-pink-600 bg-opacity-50 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
          <p className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            Web development focuses on building responsive and dynamic websites using modern technologies and frameworks.
            <button className="mt-4 px-4 py-2 bg-white text-pink-700 rounded-lg shadow-md hover:bg-pink-700 hover:text-white transition-colors duration-300">
              See More
            </button>
          </p>
        </div>
        <div className="relative bg-pink-600 w-full lg:w-1/3 h-96 text-white text-lg font-semibold rounded-lg shadow-lg overflow-hidden group">
          <img
            src={Chatbot}
            alt="ML/LLM Development"
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-pink-600 bg-opacity-50 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
          <p className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            ML/LLM development leverages machine learning and large language models to create intelligent and adaptive systems.
            <button className="mt-4 px-4 py-2 bg-white text-pink-700 rounded-lg shadow-md hover:bg-pink-700 hover:text-white transition-colors duration-300">
              See More
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
