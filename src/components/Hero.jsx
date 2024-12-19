import hero from "../assets/images/hero.png";
import apple from "../assets/images/apple.png";
import dot from "../assets/images/dot.png";
import { FaArrowRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
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

let heroLink = [
  { name: "Woman's Fashion" },
  { name: "Men's Fashion" },
  { name: "Electronics" },
  { name: "Home & StyleLife" },
  { name: "Medicine" },
  { name: "Sports & Outdoor" },
  { name: "Baby's & Toys" },
  { name: "Groceries & Pets" },
  { name: "Health & Beauty" },
];

export default function Hero() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <div className={`flex justify-center items-center `}>
        <div
          id="heroMain"
          className=" w-[100%] h-[500px] 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col mobile:flex-col flex mb-7 md:h-auto sm:h-auto mobile:h-auto  sm:mb-7 "
        >
          <div className=" 2xl:w-[30%] md:hidden sm:hidden mobile:hidden lg:flex 2xl:felx xl:flex   xl:w-[30%] lg:w-[100%] md:w-[100%]   sm:w-[100%] mobile:w-[100%] center 2xl:pl-[120px] xl:pl-[110px]   border-r ">
            <div
              data-aos="fade-right"
              className=" w-[270px] h-[344px] flex flex-col gap-4 2xl:w-[270px] 2xl:h-[344px] xl:w-[270px] xl:h-[344px] xl:items-start 2xl:items-start lg:items-center lg:w-[100%]  md:items-center md:w-[100%] sm:items-center sm:w-[100%]   mobile:items-center mobile:w-[100%] "
            >
              {heroLink.map((value, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      darkMode ? "text-white" : ""
                    }    list-none  font-normal text-base text-black 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[18px] sm:text-[15px] mobile:text-[15px]`}
                    id={index}
                  >
                    {value.name}
                  </li>
                );
              })}
            </div>
          </div>
          <div className=" mx-2 2xl:w-[70%]  xl:w-[70%] lg:w-[100%] md:w-[100%] sm:w-[100%] 2xl:h-[500px] xl:h-[500px] lg:h-[100px] center">
            <div
              className={`${
                darkMode ? "text-white" : ""
              } bg-black  w-[892px] py-6 rounded  gap-4 2xl:w-[892px] 2xl:h-[344px] xl:w-[892px] xl:h-[344px] lg:w-[892px]  md:w-auto sm:w-auto px-3 mobile:my-4 mobile:w-auto `}
            >
              <div className="flex justify-center it  ">
                <div
                  data-aos="fade-right"
                  className="flex flex-col justify-center gap-1   "
                >
                  <div
                    id="firstline"
                    className="flex  items-center gap-[24px] sm:gap-2 mobile:gap-2"
                  >
                    <div>
                      <img
                        className=" 2xl:w-10 xl:w-10 lg:w-10 sm:w-6 md:w-6 mobile:w-4 2xl:h-12 xl:h-12 lg:h-12 md:h-7 sm:h-7 mobile:h-4"
                        src={apple}
                        alt=""
                      />
                    </div>
                    <h5 className="font-normal 2xl:text-base  xl:text-base lg:text-base sm:text-xs md:text-xs mobile:text-[5px] text-white">
                      iPhone 14 Series
                    </h5>
                  </div>
                  <div>
                    <h1 className=" 2xl:font-semibold  xl:font-semibold  lg:font-semibold  md:font-normal sm:font-normal mobile:font-normal   text-white leading-[60px] 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-2xl sm:text-2xl mobile:text-xs">
                      <span className="flex flex-col 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-3 sm:gap-3 mobile:gap-0">
                        <span>Up to 10% </span> <span>off Voucher</span>{" "}
                      </span>{" "}
                    </h1>
                  </div>
                  <div className="flex font-semibold   gap-2  text-white   2xl:text-base xl:text-base lg:text-base md:text-[10px] sm:text-[10px] mobile:text-[5px]">
                    {" "}
                    Shop Now{" "}
                    <span className=" 2xl:pt-2 xl:pt-2 lg:pt-2 md:pt-1 sm:pt-1 mobile:pt-0 2xl:text-xs xl:text-xs lg:text-xs md:text-[10px] sm:text-[10px] mobile:text-[5px]">
                      <FaArrowRight />
                    </span>
                  </div>
                </div>

                <div
                  id="apple phone side"
                  data-aos="fade-left"
                  className="-mb-20 "
                >
                  <img
                    className="2xl:w-[496px] xl:w-[496px] 2xl:h-[320px] xl:h-[320px] lg:w-[250px] md:w-[200px]  sm:w-[200px] mobile:w-[100px]  "
                    src={hero}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* <section className="text-gray-600 body-font flex justify-center items-center">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Before they sold out
        <br className="hidden lg:inline-block" />
        readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Button
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={hero}
      />
    </div>
  </div>
</section> */}
          </div>
        </div>
      </div>
    </>
  );
}
