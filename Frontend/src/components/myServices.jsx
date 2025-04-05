import React from "react";

export default function myServices() {
  return (
    <div className="bg-black py-16 items-center">
      <h1 className="text-white text-4xl font-bold mb-12 text-center">My Services</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="bg-pink-600 w-full lg:w-1/3 h-64 text-white text-lg font-semibold rounded-lg shadow-lg p-6 space-y-4 hover:scale-105 transition-transform duration-300">
          <h1 className="text-2xl">Web Design</h1>
          <p className="text-sm">
            Web design is the art of crafting visually engaging and user-friendly websites through layout, graphics, and coding.
          </p>
        </div>
        <div className="bg-pink-900 w-full lg:w-1/3 h-64 text-white text-lg font-semibold rounded-lg shadow-lg p-6 space-y-4 hover:scale-105 transition-transform duration-300">
          <h1 className="text-2xl">App Design</h1>
          <p className="text-sm">
            App design focuses on creating intuitive and visually appealing user interfaces (UI) and seamless user experiences (UX) for mobile or web applications.
          </p>
        </div>
        <div className="bg-gray-900 w-full lg:w-1/3 h-64 text-white text-lg font-semibold rounded-lg shadow-lg p-6 space-y-4 hover:scale-105 transition-transform duration-300">
          <h1 className="text-2xl">ML/LLM</h1>
          <p className="text-sm">
            Machine Learning (ML) enables systems to learn from data and improve over time, while Large Language Models (LLMs) like GPT process and generate human-like text using vast datasets.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-600 text-white py-2 px-4 text-center rounded hover:bg-blue-700 transition-colors duration-300">
          See More
        </button>
      </div>
    </div>
  );
}
