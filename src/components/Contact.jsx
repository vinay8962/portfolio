import React from "react";
import ContactImage from "../assets/11785888_4788695-removebg-preview.png";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full h-auto bg-gradient-to-r from-purple-800 to-black p-4 overflow-hidden">
      <div className="flex justify-center ">
        <motion.h1
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="text-2xl sm:text-4xl font-bold text-white tracking-wide my-6 sm:my-10 text-center"
        >
          <span className="inline-block w-12 sm:w-24 h-[0.5px] bg-red-500"></span>{" "}
          Contact{" "}
          <span className="inline-block w-12 sm:w-24 h-[0.5px] bg-red-500"></span>
        </motion.h1>
      </div>
      <div className="flex flex-col md:flex-row w-full items-center">
        <div className="md:w-2/4 flex justify-center mb-6 md:mb-0">
          <motion.img
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            src={ContactImage}
            alt="Contact"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
        <div className="md:w-2/4 flex justify-center items-center">
          <form
            action=""
            className="text-white w-full max-w-lg px-4 overflow-hidden"
          >
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              className="mb-4"
            >
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-transparent border border-white rounded-xl w-full py-2 px-3 focus:border-violet-500 focus:outline-none"
              />
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.4 }}
              className="mb-4"
            >
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-transparent border border-white rounded-xl w-full py-2 px-3 focus:border-violet-500 focus:outline-none"
              />
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.8 }}
              className="mb-4"
            >
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-transparent border border-white rounded-xl w-full py-2 px-3 focus:border-violet-500 focus:outline-none"
                rows="5"
              ></textarea>
            </motion.div>
            <motion.button
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 2.2 }}
              whileHover={{ scale: 1.1 }}
              type="submit"
              className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-xl w-full"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
