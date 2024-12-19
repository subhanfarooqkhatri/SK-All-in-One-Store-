import React from "react";
import Hero from "../components/Hero";
import FlashTimer from "../components/FlashTimer";
// import Slider from '../components/Slider'
import CardListSlider from "../components/Slider";
import MyCountBox from "../components/MyCountBox";
import phone from "../assets/category/phone.png";
import headphone from "../assets/category/headPhone.png";
import computer from "../assets/category/computer.png";
import camera from "../assets/category/camera.png";
import boxgame from "../assets/category/boxgame.png";
import smartWatch from "../assets/category/smartWatch.png";
import Spiker from "../components/Spiker";
import Arrivel from "../components/Arrivel";
import OurProduct from "../components/OurProduct";
import cheak from "../assets/arrivel/cheak.png";
import headphone1 from "../assets/arrivel/headphone.png";
import Vector from "../assets/arrivel/Vector.png";
import { Link } from "react-router-dom";
import { IoMdArrowUp } from "react-icons/io";
import { CardListSlider2 } from "../components/Slider2";
import ProductDetails from "./ProductDetails";
import { useSelector } from "react-redux";
import CardTotal from "./CardTotal";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
function Home() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div
      id="mainhome"
      className={` ${
        darkMode ? "pageDark" : ""
      } transition-colors duration-500  flex flex-col justify-center `}
    >
      {/* Hero */}
      <Hero />
      <div className=" flex justify-start flex-col 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 mobile:ml-0 my-16  ">
        <FlashTimer />
        <CardListSlider />
      </div>
      <div
        className={`${
          darkMode ? "hidden" : "flex"
        } flex justify-start  flex-col 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 mobile:ml-0  `}
      >
        <MyCountBox name="Browse By Category" days="This Month" />
        {/* <Mini Boxes /> */}
        <div
          className={`${
            darkMode ? "bg- rounded mx-12 py-2" : ""
          } flex justify-center items-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col mobile:flex-col gap-5 my-10 border-b-gray-100`}
        >
          <div
            data-aos="flip-right"
            className="2xl:w-40 xl:w-40 md:w-28  cursor-none"
          >
            <img src={phone} alt="" />
          </div>
          <div
            data-aos="flip-right"
            className="2xl:w-40 xl:w-40 md:w-28  cursor-none"
          >
            <img src={computer} alt="" />
          </div>
          <div
            data-aos="flip-right"
            className="2xl:w-40 xl:w-40 md:w-28  cursor-none"
          >
            <img src={smartWatch} alt="" />
          </div>
          <div
            data-aos="flip-right"
            className="2xl:w-40 xl:w-40 md:w-28  cursor-none"
          >
            <img src={camera} alt="" />
          </div>
          <div
            data-aos="flip-right"
            className="2xl:w-40 xl:w-40 md:w-28  cursor-none"
          >
            <img src={headphone} alt="" />
          </div>
          <div
            data-aos="flip-right"
            className="2xl:w-40 xl:w-40 md:w-28  cursor-none"
          >
            <img src={boxgame} alt="" />
          </div>
        </div>
      </div>
      {/* <CardListSlider /> */}

      <div className=" flex justify-start  flex-col 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-0 sm:ml-0 mobile:ml-0 my-16 ">
        <MyCountBox name="Best Selling Products" days="This Month" />
        <CardListSlider2 />
      </div>
      {/* Spiker-Session */}
      <Spiker />
      {/* Arrival-Session  */}
      <OurProduct />

      <Arrivel />
      <div className="center  gap-[88px] my-24 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col mobile:flex-col ">
        <div
          data-aos="zoom-in"
          className="flex flex-col gap-6 justify-center items-center"
        >
          <div
            className={`${
              darkMode ? "bg-white" : ""
            }  bg-gray-400 rounded-full p-1 cursor-none`}
          >
            {" "}
            <div className="bg-black w-10 h-10 m-2 p-2 rounded-full">
              {" "}
              <img src={Vector} alt="" />
            </div>
          </div>
          <div data-aos="zoom-in-right" className="center flex-col">
            <h2
              className={`${
                darkMode ? "text-white" : ""
              }  font-semibold text-xl text-black`}
            >
              FREE AND FAST DELIVERY
            </h2>
            <h3
              className={`${
                darkMode ? "text-white" : ""
              }  font-normal text-sm text-black`}
            >
              Free delivery for all orders over $140
            </h3>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-col gap-6 justify-center items-center"
        >
          <div
            className={`${
              darkMode ? "bg-white" : ""
            }  bg-gray-400 rounded-full p-1 cursor-none`}
          >
            {" "}
            <div className="bg-black w-10 h-10 m-2 p-2 rounded-full">
              {" "}
              <img src={headphone1} alt="" />
            </div>
          </div>
          <div data-aos="zoom-in-right" className="center flex-col">
            <h2
              className={`${
                darkMode ? "text-white" : ""
              }  font-semibold text-xl text-black`}
            >
              24/7 CUSTOMER SERVICE
            </h2>
            <h3
              className={`${
                darkMode ? "text-white" : ""
              }  font-normal text-sm text-black`}
            >
              Friendly 24/7 customer support
            </h3>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-col gap-6 justify-center items-center"
        >
          <div
            className={`${
              darkMode ? "bg-white" : ""
            }  bg-gray-400 rounded-full p-1 cursor-none`}
          >
            {" "}
            <div className="bg-black w-10 h-10 m-2 p-2 rounded-full">
              {" "}
              <img src={cheak} alt="" />
            </div>
          </div>
          <div data-aos="zoom-in-right" className="center flex-col">
            <h2
              className={`${
                darkMode ? "text-white" : ""
              }  font-semibold text-xl text-black`}
            >
              MONEY BACK GUARANTEE
            </h2>
            <h3
              className={`${
                darkMode ? "text-white" : ""
              }  font-normal text-sm text-black`}
            >
              We reurn money within 30 days
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end m-3 mx-8">
        <div className="bg-gray-200 p-2 rounded-full">
          <a
            href="#mainhome"
            // onClick={(e) => {
            //   e.preventDefault(); // Prevent default anchor behavior
            //   document.getElementById("mainhome").scrollIntoView({ behavior: "smooth" });
            // }}
          >
            <IoMdArrowUp className="text-2xl" />
          </a>
        </div>
      </div>

      {/* <div className="flex flex-row justify-end m-3 mx-8">
        {" "}
        <div className="bg-gray-200 p-2 rounded-full">
          <a href={"#mainhome"}>
            <IoMdArrowUp className="text-2xl" />
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
