import React from "react";
import about1 from "../assets/about/about1.jpg";
import ab from "../assets/about/ab.jpg";
import cd from "../assets/about/cd.jpg";
import fe from "../assets/about/fe.jpg";
import gh from "../assets/about/gh.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function About() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    // <div>About</div>
    <div className={`${darkMode ? "pageDark" : ""}`}>
      <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div class="flex flex-col lg:flex-row justify-between gap-8">
          <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h1
              class={`${
                darkMode ? "text-white" : "text-black"
              } text-3xl lg:text-4xl font-bold leading-9  pb-4 `}
            >
              About Us
            </h1>
            <p
              class={`${
                darkMode ? "text-white" : "text-black"
              } font-normal text-base leading-6 text-black dark:text-white`}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div class="w-full lg:w-8/12">
            <img
              class="w-full h-full rounded "
              src={about1}
              alt="A group of People"
            />
          </div>
        </div>

        <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div class="w-full lg:w-5/12 flex flex-col justify-center">
            <h1
              class={`${
                darkMode ? "text-white" : "text-black"
              } text-3xl lg:text-4xl font-bold leading-9 text-black dark:text-white pb-4 `}
            >
              Our Story
            </h1>
            <p
              class={`${
                darkMode ? "text-white" : "text-black"
              } font-normal text-base leading-6 text-black dark:text-white`}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div class="w-full lg:w-8/12 lg:pt-8">
            <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div class="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  class="md:block hidden rounded"
                  src={ab}
                  alt="Alexa featured Image"
                />
                <img
                  class="md:hidden block rounded"
                  src={ab}
                  alt="Alexa featured Image"
                />
                <p class="font-medium text-xl leading-5 text-black dark:text-white mt-4"></p>
              </div>
              <div class="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  class="md:block hidden rounded"
                  src={cd}
                  alt="Olivia featured Image"
                />
                <img
                  class="md:hidden block rounded"
                  src={cd}
                  alt="Olivia featured Image"
                />
                <p class="font-medium text-xl leading-5 text-black dark:text-white mt-4"></p>
              </div>
              <div class="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  class="md:block hidden rounded"
                  src={fe}
                  alt="Liam featued Image"
                />
                <img
                  class="md:hidden block rounded"
                  src={fe}
                  alt="Liam featued Image"
                />
                <p class="font-medium text-xl leading-5 text-black dark:text-white mt-4"></p>
              </div>
              <div class="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  class="md:block hidden rounded"
                  src={gh}
                  alt="Elijah featured image"
                />
                <img
                  class="md:hidden block rounded"
                  src={gh}
                  alt="Elijah featured image"
                />
                <p class="font-medium text-xl leading-5 text-black dark:text-white mt-4"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start my-3">
        <Link
          className="bg-myTheme active:bg-red-700 py-3 px-8 rounded text-white"
          to={"/"}
        >
          Go To Home
        </Link>
      </div>
    </div>
  );
}

export default About;
