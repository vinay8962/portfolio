import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black w-full h-40 flex flex-col items-center justify-center">
      <hr className="w-11/12 border-violet-600 mb-4 border shadow-2xl shadow-violet-700" />
      <p className="text-white mb-4">
        &copy; 2024 Your Company. All rights reserved.
      </p>
      <div className="flex space-x-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="text-white hover:text-violet-600" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-white hover:text-violet-600" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-white hover:text-violet-600" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
