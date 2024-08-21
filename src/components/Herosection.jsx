import React from "react";
import Profile_BG from "../assets/—Pngtree—twibbon cute gradient colorful avatar_6195826.png";
import Profile from "../assets/Screenshot 2024-08-18 013513.png";
import { motion } from "framer-motion";
import TypingText from "./TypingText";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { LuContact } from "react-icons/lu";

const Herosection = () => {
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1lTLlyXav1Fz9Y822651KD6eFPV2eC-b3/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div className=" flex flex-col md:flex-row w-full h-[650px]">
      <div className="text-white flex-1 flex flex-col items-center justify-center">
        <h1 className="text-1xl  font-semibold p-1 bg-gray-300  text-black mb-4 tracking-widest">
          <TypingText text="Hello There Welcome To My Portfolio" />
        </h1>

        <motion.h1
          initial={{ y: -200, opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-6xl font-semibold font-sans tracking-widest"
        >
          I<span className="text-red-500">'m</span> Vinay Kushwah
        </motion.h1>
        <motion.h2
          initial={{ y: -200, opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-4xl my-4 tracking-widest text-red-500"
        >
          A Frontend Developer
        </motion.h2>

        <motion.div
          className="flex gap-3"
          initial={{ y: -200, opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.button
            className=" flex items-center relative mt-4 px-6 py-2  gap-2 bg-transparent border-red-500 border-2   text-red-500 rounded-full
             "
            onClick={handleResumeClick}
          >
            Show my Resume <HiOutlineDocumentArrowDown />
          </motion.button>
          <motion.button
            className="relative flex items-center gap-2 mt-4 px-6 py-2 text-white rounded-full 
                 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                 before:absolute before:inset-0 before:rounded-full 
                 before:bg-transparent before:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                 before:z-[-1] before:blur-md before:mask border-transparent"
          >
            Contact Me <LuContact />
          </motion.button>
        </motion.div>
      </div>
      <div className="flex-1 flex items-center justify-center relative ">
        <motion.img
          src={Profile_BG}
          className="absolute w-3/4 md:w-2/3 object-cover rounded-full"
          alt="Profile Background"
          animate={{ rotate: [0, 360] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        />
        <img
          src={Profile}
          className=" w-32 h-32 md:w-72 md:h-72 rounded-full "
          alt="Profile"
        />
      </div>

      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    </div>
  );
};

export default Herosection;
