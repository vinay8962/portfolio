import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  // Variants for the motion cards
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // Delay for each card
        duration: 0.6,
      },
    }),
  };
  return (
    <div className="bg-n-8 w-full h-auto overflow-hidden">
      <div className="bg-n-8  flex flex-col items-center">
        <motion.h1
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="text-1xl sm:text-4xl font-bold text-white tracking-wide my-10 text-center"
        >
          <span className="inline-block sm:w-24 w-12 h-[0.5px] bg-red-500 font-thin"></span>{" "}
          Experience{" "}
          <span className="inline-block sm:w-24 w-12   h-[0.5px] bg-red-500 font-thin"></span>{" "}
        </motion.h1>
      </div>
      <div className="flex flex-col  items-center w-full  px-8">
        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
          Working Since 2023
        </p>
        <p className="text-sm md:text-base text-gray-50 mb-4 tracking-wide">
          Nurturing Growth and Learning - My Journey of Gaining Professional
          Experience Since Freshman Year in College
        </p>
      </div>

      {/* <section className="bg-n-8">
        <div className="text-white py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:mb-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="ml-2 text-yellow-300 uppercase tracking-loose">
                Experience
              </p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                Working Since 2021
              </p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Nurturing Growth and Learning - My Journey of Gaining
                Professional Experience Since Freshman Year in College
              </p>
            </div>

            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden md:p-10 p-4 h-full">
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{
                      right: "50%",
                      border: "2px solid violet",
                      borderRadius: "1%",
                    }}
                  ></div>
                  <div
                    className="border-2-2 border-yellow-555 absolute h-full border hidden md:flex"
                    style={{
                      left: "50%",
                      border: "2px solid violet",
                      borderRadius: "1%",
                    }}
                  ></div>

                  <motion.div
                    className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline"
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-[47%] md:w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">
                        August 2023 - Present
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        QORUZ
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        As a Frontend developer, I aim to enhance user
                        experiences and bring innovative designs to life.
                        Collaborating with a team of talented professionals to
                        create a seamless interface.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="mb-8 flex justify-between items-center w-full left-timeline"
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-[48%] md:w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">
                        June 2023-July 2023
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Freelance
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        As a freelancer, I have worked closely with the client
                        to deliver satisfactory development. Got my hands on
                        Storybook component.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline"
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-[47%] md:w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">
                        March 2023-April 2023
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        GoSchedule
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Worked remotely with the founder and senior developer in
                        Angular js. Made dashboard component and developed the
                        onboarding calendly like scheduler.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="mb-8 flex justify-between items-center w-full left-timeline"
                    custom={3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-[48%] md:w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">
                        August 2022-November 2022
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Economize
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        At Economize, I wrote technical blogs and developed my
                        inter personal skills. I worked closely with co-founder
                        and built strong time management skills.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline"
                    custom={4}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-[47%] md:w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-yellow-300">
                        November 2021-February 2022
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        The Bug Community
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        TBC taught me how to deal and negotiate with clients. I
                        worked on strict deadlines, wrote content for clients,
                        made videos for clients.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="mb-8 flex justify-between items-center w-full left-timeline"
                    custom={5}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-[48%] md:w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-yellow-300">
                        August 2021-August 2022
                      </p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">
                        Medi-Caps University ACM Student Chapter
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        I was the Executive member of content team in (MU-ACM).
                        I got my hands on new experiences. I wrote descriptive
                        emails, whatsapp messages, and LinkedIn content for
                        events.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Experience;
