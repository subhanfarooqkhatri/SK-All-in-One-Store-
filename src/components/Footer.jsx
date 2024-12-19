import { VscSend } from "react-icons/vsc";
import appstore from "../assets/footer/app-store.png";
import playstore from "../assets/footer/play-store.png";
import qrcode from "../assets/footer/Qr Code.png";
import { useSelector } from "react-redux";

export default function MyFooter(second) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <footer
        className={`${
          darkMode ? "pageDark" : ""
        } body-font bg-black text-white  m-0`}
      >
        <div
          className={` ${
            darkMode ? "pageDark" : ""
          } container px-5 py-24 mx-auto bg-black  mb-0`}
        >
          <div className="flex flex-wrap md:text-center xl:text-left 2xl:text-left lg:text-left text-center -mb-10 -mx-4 justify-center  gap-5 ">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font  font-bold text-white tracking-widest text-2xl mb-4">
                Exclusive
              </h2>
              <nav className="list-none mb-10">
                <li className="text-xl font-medium mb-4 text-gray-300">
                  Subscribe
                </li>
                <li className=" text-xs font-normal  mb-4 text-gray-300">
                  Get 10% off your first order
                </li>
                <li>
                  {/* <a className="text-white hover:text-myTheme"></a> */}
                  <form action="" className=" ">
                    <input
                      type="text"
                      id="footer-field"
                      name="footer-field"
                      placeholder="Enter your email"
                      className="w-full    placeholder:text-gray-400  bg-black bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {/* <button className="absolute 2xl:left-[350px]  xl:left-[350px] lg:left-[350px] top-[876px] "><VscSend /></button> */}
                  </form>
                </li>
                {/* <li>
            <a className="text-white hover:text-myTheme">Fourth Link</a>
          </li> */}
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-xl mb-4">
                Support
              </h2>
              <nav className="list-none mb-10">
                <li className="text-gray-300  mb-4">
                  ##Khatri Jammat Khana Road Bhimpura Karachi
                </li>
                <li className="text-gray-300  mb-2">subhankhatri922@gmail.com</li>
                <li className="text-gray-300  ">+923212153534</li>
                {/* <li>
            <a className="text-white hover:text-myTheme">Fourth Link</a>
          </li> */}
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-xl mb-4">
                Account
              </h2>
              <nav className="list-none mb-10">
                <li className="text-white  mb-3">My Account</li>
                <li className="mb-3">
                  <a className="text-gray-300  mb-3">Login / Register</a>
                </li>
                <li className="mb-3">
                  <a className="text-gray-300 hover:cursor-pointer hover:text-myTheme mb-3">
                    Cart
                  </a>
                </li>
                <li className="mb-3">
                  <a className="text-gray-300 hover:cursor-pointer hover:text-myTheme mb-3">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 hover:cursor-pointer hover:text-myTheme mb-3">
                    Shop
                  </a>
                </li>
              </nav>
            </div>
            {/* <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div> */}
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-xl mb-4">
                Quick Link
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-3">
                  <a className="text-gray-300 ">Privacy Policy</a>
                </li>
                <li className="mb-3">
                  <a className="text-gray-300 ">Terms Of Use</a>
                </li>
                <li className="mb-3">
                  <a className="text-gray-300 ">FAQ</a>
                </li>
                <li>
                  <a className="text-gray-300 ">Contact</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-xl mb-4">
                Download App
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-1">
                  <a className="text-gray-300 text-[11px] ">
                    Save $3 with App New User Only
                  </a>
                </li>
                <li className="text-gray-300  mb-4">
                  <div className="flex gap-2 justify-center">
                    <div>
                      <img src={qrcode} alt="" />
                    </div>
                    <div>
                      <div>
                        {" "}
                        <img src={appstore} alt="" />
                      </div>
                      <div>
                        {" "}
                        <img src={playstore} alt="" />
                      </div>
                    </div>
                  </div>
                </li>
                {/* <li>
            <a className="text-gray-300 hover:text-myTheme">Third Link</a>
          </li> */}
                <li>
                  {/* <a className="text-white hover:text-myTheme">Fourth Link</a> */}
                  <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto gap-6">
                    <a className="text-white"
                     href="https://www.facebook.com/profile.php?id=61561128068091&mibextid=ZbWKwL" 
                     target="_blank" 
                     rel="noopener noreferrer">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-white"
                    href="https://www.youtube.com/@SAITInstitute" 
                    target="_blank" 
                    rel="noopener noreferrer">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-white"
                    href="https://www.instagram.com/sa_itinstitute13/profilecard/?igsh=MTUxM3BxNW43MjFzaw==" 
                    target="_blank" 
                    rel="noopener noreferrer">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                    <a className="ml-3 text-white"
                    href="https://www.linkedin.com/in/subhan-khatri-798a672b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    target="_blank" 
                    rel="noopener noreferrer">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        />
                        <circle cx={4} cy={4} r={2} stroke="none" />
                      </svg>
                    </a>
                  </span>
                </li>
              </nav>
            </div>
          </div>
        </div>
        {/* <div className="border-t border-gray-200">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label
            htmlFor="footer-field"
            className="leading-7 text-sm text-white"
          >
            Placeholder
          </label>
          <input
            type="text"
            id="footer-field"
            name="footer-field"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
          Button
        </button>
        <p className="text-white text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
          Bitters chicharrones fanny pack
          <br className="lg:block hidden" />
          waistcoat green juice
        </p>
      </div>
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a className="text-white">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </div> */}
        <div className="bg-black text-center">
          {/* <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col justify-center sm:flex-row"> */}
          {/* <p className="text-gray-500 text-sm text-center sm:text-left">
        © 2020 Tailblocks —
        <a
          href="https://twitter.com/knyttneve"
          className="text-gray-600 ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          @knyttneve
        </a>
      </p> */}
          <span className="sm:ml-auto sm:mt-0  mb-7 sm:w-auto w-1 sm:text-left text-center  text-gray-500 text-sm">
            Copyright Rimel @2024. All right reserved
          </span>
        </div>
        {/* </div> */}
      </footer>
    </>
  );
}
