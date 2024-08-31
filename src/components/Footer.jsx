import { motion } from "framer-motion";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black w-full h-40 flex flex-col items-center justify-center">
      <hr className="w-11/12 border-violet-600 mb-4 border shadow-2xl shadow-violet-700" />
      <p className="text-white mb-4">
        &copy; 2024 Your Company. All rights reserved.
      </p>
      <div className="flex space-x-4">
        <motion.div
          initial={{ scale: 1, y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0 }} // No delay for the first icon
          className="border border-gray-400 p-2 rounded-full cursor-pointer active:border-violet-500"
        >
          <FaGithub className="text-white" /> {/* GitHub - Black */}
        </motion.div>

        <motion.div
          initial={{ scale: 1, y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }} // 0.2s delay for the second icon
          className="border border-gray-400 p-2 rounded-full cursor-pointer active:border-violet-500"
        >
          <FaDiscord className="text-[#7289DA]" /> {/* Discord - Blue */}
        </motion.div>

        <motion.div
          initial={{ scale: 1, y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }} // 0.4s delay for the third icon
          className="border border-gray-400 p-2 rounded-full cursor-pointer active:border-violet-500"
        >
          <FaLinkedin className="text-[#0A66C2]" /> {/* LinkedIn - Blue */}
        </motion.div>

        <motion.div
          initial={{ scale: 1, y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }} // 0.6s delay for the fourth icon
          className="border border-gray-400 p-2 rounded-full cursor-pointer active:border-violet-500"
        >
          <FaTwitter className="text-[#1DA1F2]" /> {/* Twitter - Blue */}
        </motion.div>

        <motion.div
          initial={{ scale: 1, y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }} // 0.8s delay for the fifth icon
          className="border border-gray-400 p-2 rounded-full cursor-pointer active:border-violet-500"
        >
          <FaInstagram className="text-[#E1306C]" /> {/* Instagram - Pink */}
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
