import React, { useState } from "react";
import My from "./my.jpg";

export default function about() {
  const [activeTab, setActiveTab] = useState("skills");

  const renderContent = () => {
    switch (activeTab) {
      case "skills":
        return (
          <div id="skills">
            <p className="text-sm text-pink-500 mt-2">Chatbot</p>
            <p className="text-lg">Chatbot Development</p>
            <p className="text-sm text-pink-500 mt-2">Web Development</p>
            <p className="text-lg">Web App Development</p>
            <p className="text-sm text-pink-500 mt-2">App Development</p>
            <p className="text-lg">Building Android/iOS apps</p>
          </div>
        );
      case "experience":
        return (
          <div id="experience">
            <p className="text-sm text-pink-500 mt-2">2024-current</p>
            <p className="text-lg">Backend Developer at Quickfox</p>
            <p className="text-sm text-pink-500 mt-2">2023-2024</p>
            <p className="text-lg">College project Ecommerce</p>
            <p className="text-sm text-pink-500 mt-2">2020-2022</p>
            <p className="text-lg">Building Android/iOS apps</p>
          </div>
        );
      case "education":
        return (
          <div id="education">
            <p className="text-sm text-pink-500 mt-2">2020-2025</p>
            <p className="text-lg">Bachelor of Computer Engineering</p>
            <p className="text-sm text-pink-500 mt-2">2018-2020</p>
            <p className="text-lg">+2 Science</p>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex justify-center text-white mt-12 bg-black py-16">
      <div>
        <img
          src={My}
          height={200}
          width={700}
          alt=""
          className="rounded-lg shadow-lg border-2 border-gray-300 mb-8"
        />
      </div>
      <div className="ml-8 space-y-6">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="text-wrap text-justify leading-relaxed mb-6">
          I am a highly skilled Computer Engineer and Software Development
          Expert with extensive experience in designing, developing, and
          optimizing software solutions.
        </p>
        <div>
          <ul className="flex gap-12 mt-6">
            <li
              className={`relative flex items-center text-white cursor-pointer before:absolute before:bottom-0 before:left-0 
                      before:w-0 before:h-1 before:bg-red-500 before:transition-all before:duration-300 hover:before:w-full ${
                        activeTab === "skills"
                          ? "underline decoration-red-500 decoration-4"
                          : ""
                      }`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </li>
            <li
              className={`relative flex items-center text-white cursor-pointer before:absolute before:bottom-0 before:left-0 
                      before:w-0 before:h-1 before:bg-red-500 before:transition-all before:duration-300 hover:before:w-full ${
                        activeTab === "experience"
                          ? "underline decoration-red-500 decoration-4"
                          : ""
                      }`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </li>
            <li
              className={`relative flex items-center text-white cursor-pointer before:absolute before:bottom-0 before:left-0 
                      before:w-0 before:h-1 before:bg-red-500 before:transition-all before:duration-300 hover:before:w-full ${
                        activeTab === "education"
                          ? "underline decoration-red-500 decoration-4"
                          : ""
                      }`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </li>
          </ul>
          <div className="mt-6">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}
