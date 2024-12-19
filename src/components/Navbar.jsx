import logo from "../assets/logo/logo.png";
import logomd from "../assets/logo/logomd.png";
import mdDarkLogo from "../assets/logo/mdDarkLogo.png";

import logoDark from "../assets/logo/logoDrak.png";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { FaLeaf, FaUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import mypic from "/src/assets/profilepic/myphoto.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/darkModeSlice";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useNavigate } from "react-router";
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

// ../assets/logo/'
let Mylink = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/Contact" },
  { name: "About", path: "/About" },
  // { name: "Login" },
];
let logSing = true;

export default function MyNavbar() {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const navigate = useNavigate();

  let submitHandler = (e) => {
    e.preventDefault();
    let searchTerm = e.target.children[0].value;
    console.log(e.target.children[0].value);
    if (!searchTerm) return;
    navigate(`/search?qurey=${searchTerm}`);
    searchTerm = e.target.children[0].value = "";
  };

  return (
    <>
      <nav
        className={` flex   items-center  justify-evenly p-6  border-b-2 border-gray-100  transition-colors duration-500 relative ${
          darkMode ? "darkTheme" : ""
        } bg-white `}
      >
        {/* logo */}
        <div className="imglogo center ">
          <Link to={"/"}>
            {" "}
            <img
              className="w-32 xl:flex 2xl:flex lg:flex md:hidden sm:hidden mobile:hidden"
              src={darkMode ? logoDark : logo}
              alt="logo"
            />
          </Link>
          <Link to={"/"}>
            {" "}
            <img
              className="w-10 xl:hidden 2xl:hidden lg:hidden md:flex sm:flex mobile:flex"
              src={darkMode ? mdDarkLogo : logomd}
              alt="logo"
            />
          </Link>
        </div>
        {/* searchbar */}
        <div className="  mobile:w-[200px]  md:w-[250px] center lg:w-[250px]  h-[38px] gap-6">
          <div
            className={`  sm:w-[400px]  w-[243px] h-[38px] flex gap-2 center  rounded bg-[#F5F5F5] ${
              darkMode ? "bg-black" : ""
            }`}
          >
            <form
              onSubmit={submitHandler}
              className="search   h-6 flex justify-center "
            >
              <input
                className={`outline-none  w-[100%] bg-[#F5F5F5] placeholder:font-normal md:text-base text-xs text-gray-300 ${
                  darkMode ? "bg-black" : ""
                } ${darkMode ? "placeholder:text-white" : ""}  ${
                  darkMode ? "text-white" : ""
                }`}
                placeholder="What are looking for"
                type="search"
                name="search"
                id=" searchinp"
              />
              <div>
                <button type="submit">
                  <CiSearch
                    className={`${
                      darkMode ? "text-white" : ""
                    } text-2xl cursor-pointer font-semibold`}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* links */}
        <div className="link sm:hidden md:hidden mobile:hidden lg:flex xl:flex 2xl:flex ">
          <ul className="flex  gap-5">
            {Mylink.map((value, index) => {
              return (
                <li
                  className={` ${
                    darkMode
                      ? "text-white link-dark-underline link-dark-underline-black"
                      : ""
                  }  hover:cursor-pointer`}
                  key={index}
                >
                  <Link
                    className="link-underline link-underline-black link-underline:hover"
                    to={value.path}
                  >
                    {" "}
                    {value.name}
                  </Link>
                </li>
              );
            })}

            {logSing ? null : (
              <>
                <li className=" hover:cursor-pointer">
                  <Link
                    className={`link-underline link-underline-black link-underline:hover ${
                      darkMode
                        ? "text-white link-dark-underline link-dark-underline-black"
                        : ""
                    } `}
                    to={"/SiginUp"}
                  >
                    SignUp
                  </Link>
                </li>
                <li className=" hover:cursor-pointer ">
                  <Link
                    className={`link-underline link-underline-black link-underline:hover ${
                      darkMode
                        ? "text-white link-dark-underline link-dark-underline-black"
                        : ""
                    } `}
                    to={"/Login"}
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="flex justify-center items-center list-none gap-2 mobile:text-xs sm:text-xs">
          {" "}
          <li className="2xl:text-2xl xl:text-2xl  lg:text-2xl md:text-xl sm:text-sm mobile:text-sm">
            <button onClick={() => dispatch(toggleDarkMode())}>
              {darkMode ? (
                <IoSunny className="text-lg text-white " />
              ) : (
                <IoMoon className="text-lg text-black " />
              )}
            </button>
          </li>
          {logSing === true ? (
            <>
              <li className="hover:text-myTheme 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm mobile:text-sm hover:cursor-pointer">
                <CiHeart />
              </li>
              <li className="hover:text-myTheme 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm mobile:text-sm hover:cursor-pointer">
                <Link to={"/addCard"}>
                  {" "}
                  <MdOutlineShoppingCart />
                </Link>
              </li>

              <li className="w-[30px] h-[30px] rounded-full overflow-hidden">
                <Link to="/profile">
                  <img src={mypic} alt="" />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="text-myTheme text-2xl hover:cursor-pointer">
                <Link to={"/profile"}>
                  <FaUserCircle />
                </Link>
              </li>
            </>
          )}
        </div>

        {/* sm screen */}

        {menu ? (
          <div
            data-aos="fade-right"
            className="link top-[70px] bg-white w-[100%] z-10   lg:hidden xl:hidden 2xl:hidden absolute"
          >
            <ul className="flex pl-8 flex-col gap-5">
              {Mylink.map((value, index) => {
                return (
                  <li className=" hover:cursor-pointer" key={index}>
                    <Link
                      className="link-underline link-underline-black link-underline:hover"
                      onClick={() => {
                        setMenu(false);
                      }}
                      to={value.path}
                    >
                      {" "}
                      {value.name}
                    </Link>
                  </li>
                );
              })}

              {logSing === true ? (
                <>
                  <li className=" hover:cursor-pointer">
                    <Link
                      className="link-underline link-underline-black link-underline:hover"
                      to={"/SiginUp"}
                    >
                      SignUp
                    </Link>
                  </li>
                  {/* <li className="hover:text-myTheme text-2xl hover:cursor-pointer">
                  <CiHeart />
                </li>
                <li className="hover:text-myTheme text-2xl hover:cursor-pointer">
                  <MdOutlineShoppingCart />
                </li> */}

                  {/* <li className="w-[30px] h-[35px] rounded-full overflow-hidden">
                  <img src={mypic} alt="" />
                </li> */}
                </>
              ) : (
                <>
                  <li className=" hover:cursor-pointer">
                    <Link
                      className="link-underline link-underline-black link-underline:hover"
                      to={"/SiginUp"}
                    >
                      SignUp
                    </Link>
                  </li>
                  <li className=" hover:cursor-pointer">
                    <Link
                      className="link-underline link-underline-black link-underline:hover"
                      to={"/Login"}
                    >
                      Login
                    </Link>
                  </li>
                  {/* <li className="hover:text-myTheme text-2xl hover:cursor-pointer">
                  <FaUserCircle />
                </li> */}
                </>
              )}
            </ul>
          </div>
        ) : null}

        <div className="menu center sm:flex md:flex mobile:flex lg:hidden xl:hidden 2xl:hidden">
          <button
            onClick={() => {
              setMenu(!menu);
            }}
          >
            {menu ? <IoMdClose /> : <MdOutlineMenu />}
          </button>
        </div>
      </nav>
    </>
  );
}
