import React from "react";
import Profile_BG from "../assets/—Pngtree—twibbon cute gradient colorful avatar_6195826.png";
import Profile from "../assets/Screenshot 2024-08-18 013513.png";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <div className=" flex flex-col md:flex-row w-full min-h-screen">
      <div className="text-white flex-1 flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-4">I'm</h1>
        <h1 className="text-4xl font-bold">Vinay Kushwah</h1>
        <h2 className="text-xl mt-2">Frontend Developer</h2>

        <motion.button
          className="relative mt-4 px-6 py-2 border border-white bg-transparent text-white rounded"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Show my Resume
        </motion.button>
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
