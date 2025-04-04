import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/save-to-excel`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleDownloadCV = () => {
    const cvPath = "/Resume-Dil.pdf";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "My_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="contact" className="bg-black py-16">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
        <div className="text-white lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold mb-6">Contact Information</h1>
          <p className="mb-4">Email: dtharu486@gmail.com</p>
          <p className="mb-4">Phone: +977-9822586055</p>
          <p className="mb-4">Address: Kathmandu, Nepal</p>
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/dilbahadur.tharu.3576/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-600 transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/dil123/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-600 transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/dilbdr486"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-600 transition-colors duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <a
            onClick={handleDownloadCV}
            className="mt-6 inline-block px-8 py-3 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition-colors duration-300 cursor-pointer"
          >
            Download CV
          </a>
        </div>
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
          <form
            onSubmit={handleFormSubmit}
            className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-600"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
