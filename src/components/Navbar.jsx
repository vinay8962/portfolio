import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { MdOutlineDensityMedium } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleToggle = () => {
    setToggle(!toggle);
  };

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
    { label: "About Us", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Project", id: "project" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="flex justify-center h-24 items-center">
        <div className="flex justify-center items-center bg-black bg-opacity-70 w-11/12 md:w-4/5 h-14 border-violet-700 border rounded-full shadow-2xl shadow-violet-700">
          {/* Desktop Menu */}
          <motion.ul className="w-4/5 hidden md:flex text-white justify-around items-center">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ ease: "easeInOut", duration: 0.8 + index * 0.2 }}
                className="bg-transparent cursor-pointer my-2 md:my-0"
              >
                <a href={`#${item.id}`}>{item.label}</a>
              </motion.li>
            ))}
            <li>
              <button
                onClick={() =>
                  window.open("https://github.com/vinay8962", "_blank")
                }
                className="px-3 py-1 border text-white  rounded-2xl hover:bg-violet-700 transition"
              >
                GitHub Profile
              </button>
            </li>
          </motion.ul>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button onClick={handleToggle} className="text-white">
              {toggle ? (
                <RxCross1 className="size-8" />
              ) : (
                <MdOutlineDensityMedium className="size-8" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {toggle && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute top-20 left-0 w-full bg-black md:hidden flex flex-col text-white items-center"
              >
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    whileHover={{ scale: 1.2 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.8 + index * 0.2,
                    }}
                    className="bg-transparent cursor-pointer my-2"
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
      </div>
    </motion.div>
  );
};

export default Navbar;
