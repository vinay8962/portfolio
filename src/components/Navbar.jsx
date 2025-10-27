import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { MdOutlineDensityMedium } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleToggle = () => setToggle(!toggle);

  const controlNavbar = useCallback(() => {
    if (window.scrollY < lastScrollY) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [controlNavbar]);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "project" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full z-50 mt-3  shadow-lg"
    >
      <div className="relative flex justify-between items-center mx-auto w-11/12 md:w-4/5 h-20">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white text-xl font-bold">
          <FaCode className="text-cyan-400" />
          <span>Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex w-5/12 justify-center items-center gap-8 border border-white/10 p-3 rounded-3xl bg-gray-800/80 backdrop-blur-md text-white shadow-lg">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer px-3 py-1 rounded-2xl transition duration-300 ease-in-out hover:bg-gray-700/80"
            >
              <a href={`#${item.id}`} className="block text-sm text-white">
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* GitHub Button */}
        <button
          onClick={() => window.open("https://github.com/vinay8962", "_blank")}
          className="px-4 py-2 rounded-xl bg-[#1ab7e3] text-white hover:bg-cyan-600 transition text-sm font-medium"
        >
          GitHub Profile
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white">
          <button onClick={handleToggle}>
            {toggle ? (
              <RxCross1 className="text-2xl" />
            ) : (
              <MdOutlineDensityMedium className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {toggle && (
            <motion.ul
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute top-20 left-0 w-full flex flex-col items-center bg-[#0f0c29] md:hidden z-50 text-white py-4 space-y-4"
            >
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="cursor-pointer"
                >
                  <a href={`#${item.id}`} onClick={() => setToggle(false)}>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
