"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
      <motion.div
          className="h-full"
          initial={{y:"-200vh"}}
          animate={{y:"0%"}}
          transition={{duration:1}}
      >
          <div className="h-full flex flex-col lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
              {/* IMAGE CONTAINER*/}
              <div className="h-1/2 lg:h-full lg:w-1/2 relative">
                  <Image src="/hero.png" alt="" fill className="object-contain"/>
              </div>
              {/* TEXT CONTAINER*/}
              <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
                  {/* TITLE */}
                  <h1 className="text-2xl md:text-4xl font-bold">
                      Welcome to My Page!
                  </h1>
                  {/* DESCRIPTION */}
                  <p className="md:text-xl">
                      I am a results-driven Data Analyst with some foundation in data and statistical analysis,
                      data visualization, and database management. Detail-oriented and committed to
                      delivering accurate insights. Possesses excellent problem-solving abilities and
                      effective communication skills. Able to collaborate seamlessly in a team-oriented,
                      fast-paced environment. Eager to contribute analytical skills and a keen eye for
                      detail to impactful projects.
                  </p>
                  {/* BUTTONS */}
                  <div className="w-full flex gap-4">
                      <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Portfolio
                      </button>
                      <button className={"p-4 rounded-lg ring-1 ring-black bg-white text-black"}>Contact Me</button>
                  </div>
              </div>
          </div>
      </motion.div>

  );
};

export default Homepage;
