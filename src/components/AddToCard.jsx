import game from "../assets/images/game.png";
import star from "../assets/images/Five star.png";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
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
export function AddToCard({
  discount,
  productName,
  delPrice,
  newPrice,
  starRank,
  image,
  id,
  className,
  deleticon,
  hearticon,
  eyeicon,
  rating,
}) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <Link id={id} to={`/productDetail/${id}`}>
        <div
          data-aos="flip-left"
          className={`${
            darkMode ? "darkTheme" : ""
          } main group bg-white drop-shadow-lg shadow-black   w-[270px] h-[370px] my-4 rounded mobile:m-auto transition-all duration-300 `}
        >
          <div
            className={`${
              darkMode ? "darkTheme" : ""
            } img w-[270px] h-[250px] bg-[#F5F5F5] flex flex-col relative center `}
          >
            <button
              className={` w-[55px] h-[26px] ${className} rounded text-white absolute left-3 right-4 bottom-1 top-3 ;`}
            >
              {discount}
            </button>
            <div className="flex flex-col">
              {hearticon ? (
                <div className="absolute top-2 left-[240px] text-base bg-white p-1 rounded-full">
                  {" "}
                  {hearticon}
                </div>
              ) : null}
              {deleticon ? (
                <div className="absolute top-2 left-[240px] text-base bg-white p-1 rounded-full">
                  {deleticon}
                </div>
              ) : null}
              {eyeicon ? (
                <div className="absolute top-9 left-[240px] text-base bg-white p-1 rounded-full">
                  {" "}
                  {eyeicon}
                </div>
              ) : null}
            </div>
            {image ? (
              <img
                className=" w-[172px] h-[155px] m-auto group-hover:scale-150 transition-all duration-500"
                src={image}
                alt=""
              />
            ) : (
              <div className=" w-[172px] h-[155px]"></div>
            )}
            <Link
              to={"/addCard"}
              className={`${
                darkMode
                  ? "active:bg-myTheme bg-black transition-all duration-300 text-white  "
                  : "2xl:bg-white xl:bg-white lg:bg-white md:bg-white group-hover:bg-black"
              } sm:bg-black mobile:bg-black  h text-white w-[100%] flex transition-all duration-500  items-end justify-center p-2 rounded-b`}
            >
              Add To Card
            </Link>
          </div>
          <div className="myp w-[201px] h-[84px] ml-2 gap-2 ">
            <h2
              className={`${
                darkMode
                  ? "text-white group-hover:text-gray-200 "
                  : "group-hover:text-myTheme"
              } w-[201]  text-sm font-medium transition-all duration-300  `}
            >
              {productName}
            </h2>
            <p className="flex gap-4 my-2 w-[100px] h-6  text-base font-medium text-myTheme">
              <ins className="no-underline"> {newPrice}</ins> {"  "}
              <s className="text-slate-400 "> {delPrice}</s>
            </p>
            <div className="star-img flex gap-2">
              <span>
                {
                  <ReactStars
                    count={5}
                    value={rating ? rating : 3}
                    // onChange={ratingChanged}
                    size={24}
                    edit={false}
                    color2={"#ffd700"}
                  />
                }
              </span>
              <span>{}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
