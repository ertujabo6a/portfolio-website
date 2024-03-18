"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <motion.div
            className="h-full"
            initial={{y:"-200vh"}}
            animate={{y:"0%"}}
            transition={{duration:1}}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll lg:flex">
                {/* TEXT CONTAINER */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
                    {/* BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* BIOGRAPHY TITLE */}
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        {/* BIOGRAPHY DESCRIPTION */}
                        <p className="text-lg">
                            John Doe is a passionate writer and explorer of the human condition.
                            With a background in psychology and literature, he delves deep into
                            the intricacies of the human mind and heart through his writings.
                            From thought-provoking essays to captivating short stories,
                            John work aims to illuminate the complexities of life and inspire introspection.
                            When he is not lost in the world of words, you can find him hiking through
                            nature or enjoying a quiet moment with a good book.
                        </p>
                        {/* BIOGRAPHY QUOTE */}
                        <span className="italic">
                            I am trying to manage myself, not just my portfolio
                        </span>
                        {/* BIOGRAPHY SIGN SVG */}
                        <div className="self-end">
                            <svg width="246" height="79" viewBox="0 0 246 79" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="246" height="79" fill="none"/>
                                <path
                                    d="M99.6 22.4C95.3333 30.6667 89.7333 39.7333 87.2 42.6667C84.5333 45.6 82.9333 48 83.7333 48C84.4 48 83.8667 50.2667 82.5333 52.9333C81.2 55.6 80.2667 58.1333 80.6667 58.4C80.9333 58.6667 83.6 57.7333 86.5333 56.2667L91.8667 53.4667L92.2667 56.4C92.6667 59.6 98 61.2 100.267 58.9333C101.2 58 100.8 57.6 99.2 57.7333C97.2 58 96.5333 56.8 96 52.2667L95.3333 46.4L91.4667 50.5333C89.2 52.8 87.0667 54.6667 86.4 54.6667C84.9333 54.6667 89.8667 45.0667 96.2667 35.6C103.2 25.3333 108.267 14.1333 107.733 10.4C107.333 8.13333 105.2 11.2 99.6 22.4ZM104.133 18.2667C102.533 20.9333 102.267 20.1333 103.467 16.6667C104 15.4667 104.667 14.8 104.933 15.2C105.333 15.4667 104.933 16.9333 104.133 18.2667Z"
                                    fill="black"/>
                                <path
                                    d="M208.933 22.4C204.667 30.6667 199.067 39.7333 196.533 42.6667C193.867 45.6 192.4 48 193.2 48C194.267 48 194.133 48.8 193.067 50.6667C192.133 52.1333 190.533 53.3333 189.467 53.3333C188.533 53.3333 184.8 54.4 181.333 55.6C175.333 57.7333 174.8 57.7333 171.467 55.6C167.067 52.6667 167.067 49.0667 171.733 43.2C174.267 40 176.4 38.6667 179.2 38.6667C182.133 38.6667 182.8 39.0667 182.133 40.9333C181.333 42.9333 181.6 42.9333 184 40.6667C186.133 38.8 186.267 37.8667 185.067 36.4C182.933 33.8667 178.4 35.2 171.333 40.4C163.733 46 161.6 50.8 164.533 55.2C167.6 60.1333 174.533 60.9333 183.467 57.6C189.2 55.4667 190.667 55.3333 190.133 56.8C189.2 59.3333 190.4 59.2 196.267 56L201.2 53.4667L201.6 56.4C202 59.6 207.333 61.2 209.6 58.9333C210.533 58 210.133 57.6 208.533 57.7333C206.533 58 205.867 56.8 205.333 52.2667L204.667 46.4L200.8 50.5333C198.533 52.8 196.4 54.6667 195.733 54.6667C194.267 54.6667 199.2 45.0667 205.6 35.6C212.533 25.3333 217.6 14.1333 217.067 10.4C216.667 8.13333 214.533 11.2 208.933 22.4ZM213.467 18.2667C211.867 20.9333 211.6 20.1333 212.8 16.6667C213.333 15.4667 214 14.8 214.267 15.2C214.667 15.4667 214.267 16.9333 213.467 18.2667Z"
                                    fill="black"/>
                                <path
                                    d="M141.867 22.4C141.067 22.9333 138.8 26.4 136.933 30.1333C135.067 33.8667 132.4 37.4667 131.067 37.8667C129.467 38.5333 129.2 39.0667 130.267 39.7333C131.467 40.5333 131.467 42.2667 130.533 46.6667C129.067 53.0667 127.6 54.6667 123.067 54.6667C119.333 54.6667 118.933 50.8 122.133 45.3333C125.867 39.0667 121.733 34.1333 115.333 37.0667C110.8 39.0667 105.2 48.1333 104.4 54.5333C103.467 60.9333 104.8 61.3333 111.6 57.2C115.333 54.8 116.533 54.6667 117.333 56C118.267 57.4667 119.467 57.6 123.467 56.2667C128 54.9333 128.667 55.0667 130.267 57.3333C131.467 58.9333 133.6 60 135.733 59.8667C137.867 59.7333 138.4 59.4667 137.067 59.0667C135.867 58.8 134.267 56.9333 133.6 54.9333C132.667 52 133.2 50.4 137.2 45.2C141.333 39.6 142.533 38.8 149.6 37.3333C159.067 35.4667 159.733 34.2667 150.667 35.4667C143.467 36.4 143.333 36.2667 145.2 29.6C147.067 23.2 145.467 20 141.867 22.4ZM140.533 35.6C137.2 38.1333 136.933 36.9333 139.6 31.3333L142 26.2667L142.4 30C142.8 32.5333 142.133 34.4 140.533 35.6ZM120.8 40.5333C122.133 44.1333 109.467 59.2 107.067 56.9333C105.467 55.3333 108.267 46.5333 111.467 42.6667C115.067 38.4 119.6 37.3333 120.8 40.5333ZM138.667 41.0667C138.667 41.7333 137.467 43.3333 136 44.6667C133.067 47.3333 132.533 46.5333 134.667 42.5333C136.133 40 138.667 39.0667 138.667 41.0667Z"
                                    fill="black"/>
                                <path
                                    d="M22.5333 34.8C21.7333 36.4 21.3333 40.6667 21.6 44.1333C22.1333 49.7333 21.8667 50.6667 20 50.6667C14.1333 50.6667 12.9333 59.0667 18.6667 59.6L22 60L19.0667 58.4C16 56.9333 14.9333 54.6667 17.2 54.6667C17.8667 54.6667 19.3333 54.2667 20.5333 53.8667C22 53.3333 22.6667 53.7333 22.6667 55.2C22.6667 58.2667 25.4667 57.8667 26.2667 54.6667C26.6667 53.0667 28.5333 51.0667 30.5333 50L34 48L30.4 48.8C26.6667 49.6 26.4 49.3333 24.6667 40.2667C23.6 35.3333 26.1333 34.2667 27.8667 38.9333C28.9333 41.6 29.2 41.7333 30 39.7333C31.0667 36.9333 28.5333 32 26 32C24.9333 32 23.4667 33.3333 22.5333 34.8Z"
                                    fill="black"/>
                                <path
                                    d="M67.8667 34.8C67.0667 36.4 66.6667 40.6667 66.9333 44.1333C67.4667 48.8 67.0667 50.6667 66 50.6667C65.0667 50.6667 62.5333 51.6 60.5333 52.6667C58.4 53.7333 55.3333 54.6667 53.7333 54.6667C50 54.6667 49.6 50.8 52.8 45.3333C56.5333 39.0667 52.4 34.1333 46 37.0667C41.4667 39.0667 35.8667 48.1333 35.0667 54.5333C34.1333 60.9333 35.4667 61.3333 42.2667 57.2C45.8667 54.9333 47.2 54.6667 48 56C48.9333 57.6 52.2667 57.3333 57.7333 55.2C58.9333 54.8 59.8667 55.6 60.4 57.2C60.8 59.0667 62.1333 60 64.2667 59.8667H67.3333L64.4 58.4C61.3333 56.9333 60.2667 54.6667 62.5333 54.6667C63.2 54.6667 64.6667 54.2667 65.8667 53.8667C67.3333 53.3333 68 53.7333 68 55.2C68 58.2667 70.8 57.8667 71.6 54.6667C72 53.0667 73.8667 51.0667 75.8667 50L79.3333 48L75.7333 48.8C72 49.6 71.7333 49.3333 70 40.2667C68.9333 35.3333 71.4667 34.2667 73.2 38.9333C74.2667 41.6 74.5333 41.7333 75.3333 39.7333C76.4 36.9333 73.8667 32 71.3333 32C70.2667 32 68.8 33.3333 67.8667 34.8ZM51.4667 40.5333C52.8 44.1333 40.1333 59.2 37.7333 56.9333C36.1333 55.3333 38.9333 46.5333 42.1333 42.6667C45.7333 38.4 50.2667 37.3333 51.4667 40.5333Z"
                                    fill="black"/>
                                <path
                                    d="M152.533 40.6667C147.467 44.6667 144 54.8 146.667 58C147.6 59.0667 149.867 60 151.6 60H154.933L151.867 57.3333C148.8 54.6667 148.667 54.5333 151.2 52.9333C156.933 49.3333 160 45.3333 160 41.3333C160 36.4 158 36.2667 152.533 40.6667ZM157.333 42.6667C157.333 44.2667 155.733 46.1333 153.2 47.3333L149.2 49.4667L150.8 46.4C154.267 39.7333 157.333 37.8667 157.333 42.6667Z"
                                    fill="black"/>
                            </svg>
                        </div>
                        {/* SCROLL SVG */}
                        <motion.svg
                            initial={{opacity: 0.2, y: 0}}
                            animate={{opacity: 1, y: "10px"}}
                            transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* SKILLS CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* SKILLS TITLE */}
                        <h1 className="font-bold text-2xl">SKILLS</h1>
                        {/* SKILLS LIST */}
                        <div className="flex gap-4 flex-wrap">
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Python
                            </div>
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                SQL
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                R
                            </div>
                        </div>
                        {/* SCROLL SVG */}
                        <motion.svg
                            initial={{opacity: 0.2, y: 0}}
                            animate={{opacity: 1, y: "10px"}}
                            transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* EDUCATION CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center pb-48">
                        {/* EDUCATION TITLE */}
                        <h1 className="font-bold text-2xl">EDUCATION</h1>
                        {/* EDUCATION LIST */}
                        <div className="">
                            {/* EDUCATION LIST ITEM 1 */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3">
                                    {/* EDUCATION TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                                        Certification
                                    </div>
                                    {/* EDUCATION DESCRIPTION */}
                                    <div className="p-3 text-sm italic">
                                        Czech Language
                                    </div>
                                    {/* EDUCATION DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2020-2021
                                    </div>
                                    {/* EDUCATION PROVIDER */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Go Study Language School
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE: CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">

                                        </div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3">

                                </div>
                            </div>
                            {/* EDUCATION LIST ITEM 2 */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3">

                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE: CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">

                                        </div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3">
                                    {/* EDUCATION TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                                        Bachelor’s Degree (incomplete)
                                    </div>
                                    {/* EDUCATION DESCRIPTION */}
                                    <div className="p-3 text-sm italic">
                                        English in Electrical Engineering and Informatics -
                                        Faculty of Electrical Engineering and Communication
                                    </div>
                                    {/* EDUCATION DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2021-2022
                                    </div>
                                    {/* EDUCATION PROVIDER */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Brno University of Technology
                                    </div>
                                </div>
                            </div>
                            {/* EDUCATION LIST ITEM 3 */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3">
                                    {/* EDUCATION TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">
                                        Bachelor’s Degree (in progress)
                                    </div>
                                    {/* EDUCATION DESCRIPTION */}
                                    <div className="p-3 text-sm italic">
                                        Managerial Informatics -
                                        Faculty of Business and Management
                                    </div>
                                    {/* EDUCATION DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2022-2026
                                    </div>
                                    {/* EDUCATION PROVIDER */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Brno University of Technology
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE: CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">

                                        </div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* SVG CONTAINER */}
                    <div className="hidden lg:block w-1/3 xl:1/2">

                    </div>
            </div>
        </motion.div>
    );
};
export default AboutPage;