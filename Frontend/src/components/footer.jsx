import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-700 text-white text-center">
      <div className="container mx-auto">
        <div className="text-xs text-gray-400">
          © {new Date().getFullYear()} Dil Bahadur Tharu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
