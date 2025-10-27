import Profile_BG from "../assets/pngegg.png";
import Profile from "../assets/Screenshot 2024-08-18 013513.png";
import { motion } from "framer-motion";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Sparkles } from "lucide-react";

const Herosection = () => {
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1BvsP4RsTzKDBzrL6qN6vwkVUaqgddCmO/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div
      className="flex flex-col-reverse md:flex-row w-full min-h-screen items-center justify-between px-6 sm:px-12 lg:px-20 py-12 gap-12"
      id="home"
    >
      {/* Left Section */}
      <div className="text-white flex-1 flex flex-col items-center md:items-start justify-center space-y-6">
        {/* Welcome Tag */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-500/30 rounded-full px-4 py-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 text-sm font-medium">
            Hello, Welcome to my Portfolio
          </span>
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-center md:text-left"
        >
          I<span className="text-red-500">'m</span> Vinay Kushwah
        </motion.h1>

        {/* Sub-heading */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-lg sm:text-2xl lg:text-3xl text-red-500 tracking-wide text-center md:text-left"
        >
          A Frontend Developer
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <motion.button
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-red-500 text-white rounded-full hover:bg-red-500/20 transition duration-300"
            onClick={handleResumeClick}
          >
            Show my Resume <HiOutlineDocumentArrowDown className="w-5 h-5" />
          </motion.button>

          <motion.a
            href="https://wa.me/918962017022"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-green-500 text-white rounded-full hover:bg-green-500/20 transition duration-300"
          >
            Contact Me <IoLogoWhatsapp className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Rotating BG */}
        <motion.img
          src={Profile_BG}
          className="absolute w-64 sm:w-72 md:w-80 lg:w-96 object-cover rounded-full opacity-80"
          alt="Profile Background"
          animate={{ rotate: [0, 360] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        />
        {/* Profile */}
        <img
          src={Profile}
          className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-white shadow-xl relative z-10"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Herosection;
