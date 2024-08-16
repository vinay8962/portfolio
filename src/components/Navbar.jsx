import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { MdOutlineDensityMedium } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="flex justify-center h-24 items-center">
            <div className="flex justify-center items-center bg-black w-11/12 md:w-4/5 h-14 border-violet-700 border rounded-full shadow-2xl shadow-violet-700">
                {/* Desktop Menu */}
                <motion.ul
                    className="w-4/5 hidden md:flex text-white justify-around items-center"
                >
                    <motion.li
                        initial={{ y: -100, opacity: 0, scale: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ ease: "easeInOut", duration: 0.80 }}
                        className="bg-transparent cursor-pointer my-2 md:my-0"
                    >
                        Home
                    </motion.li>
                    <motion.li
                        initial={{ y: -100, opacity: 0, scale: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ ease: "easeInOut", duration: 1 }}
                        className="bg-transparent cursor-pointer my-2 md:my-0"
                    >
                        Education
                    </motion.li>
                    <motion.li
                        initial={{ y: -100, opacity: 0, scale: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ ease: "easeInOut", duration: 1.20 }}
                        className="bg-transparent cursor-pointer my-2 md:my-0"
                    >
                        Skills
                    </motion.li>
                    <motion.li
                        initial={{ y: -100, opacity: 0, scale: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ ease: "easeInOut", duration: 1.40 }}
                        className="bg-transparent cursor-pointer my-2 md:my-0"
                    >
                        Project
                    </motion.li>
                    <motion.li
                        initial={{ y: -100, opacity: 0, scale: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ ease: "easeInOut", duration: 1.60 }}
                        className="bg-transparent cursor-pointer my-2 md:my-0"
                    >
                        Experience
                    </motion.li>
                    <motion.li
                        initial={{ y: -100, opacity: 0, scale: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ ease: "easeInOut", duration: 1.80 }}
                        className="bg-transparent cursor-pointer my-2 md:my-0"
                    >
                        Contact
                    </motion.li>
                </motion.ul>

                {/* Mobile Menu Toggle Button */}
                <div className="   flex md:hidden ">
                    <button onClick={handleToggle} className="text-white">
                        {toggle ? <RxCross1 className='size-8' /> : <MdOutlineDensityMedium className='size-8' />}
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
                            <motion.li
                                whileHover={{ scale: 1.2 }}
                                transition={{ ease: "easeInOut", duration: 0.80 }}
                                className="bg-transparent cursor-pointer my-2 text-white"
                            >
                                Home
                            </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.2 }}
                                transition={{ ease: "easeInOut", duration: 1 }}
                                className="bg-transparent cursor-pointer my-2"
                            >
                                Education
                            </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.2 }}
                                transition={{ ease: "easeInOut", duration: 1.20 }}
                                className="bg-transparent cursor-pointer my-2"
                            >
                                Skills
                            </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.2 }}
                                transition={{ ease: "easeInOut", duration: 1.40 }}
                                className="bg-transparent cursor-pointer my-2"
                            >
                                Project
                            </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.2 }}
                                transition={{ ease: "easeInOut", duration: 1.60 }}
                                className="bg-transparent cursor-pointer my-2"
                            >
                                Experience
                            </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.2 }}
                                transition={{ ease: "easeInOut", duration: 1.80 }}
                                className="bg-transparent cursor-pointer my-2"
                            >
                                Contact
                            </motion.li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Navbar;
