import React from "react";
import location from "../assets/profilepic/location.jpg";
import lc from "../assets/profilepic/lc.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Contact() {
  const dataInputs = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userName = formData.get("userName");
    const email = formData.get("email");
    const message = formData.get("message");
    console.log("userName :", userName, "Email:", email, "message", message);
  };
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <section
      className={`${
        darkMode ? "pageDark text-white" : ""
      } text-black body-font relative `}
    >
      <div className="container px-5 py-24 mx-auto flex  sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2     overflow-hidden sm:mr-10 p-10 flex flex-col items-center justify-start  relative">
          {/* <img className="w-[100%] my-3 " src={location} alt="" /> */}
          <img className="w-auto my-3 " src={lc} alt="" />
        </div>
        <form
          onSubmit={dataInputs}
          className={`${
            darkMode ? " p-2 rounded " : "bg-white"
          }lg:w-1/3 md:w-1/2  flex flex-col justify-center rounded md:ml-auto w-full md:py-8 mt-8 md:mt-0`}
        >
          <h2
            className={`${
              darkMode ? "text-white" : "text-black"
            }   text-3xl mb-1 2xl:font-extrabold xl:font-extrabold lg:font-extrabold md:font-bold sm:font-bold mobile:font-bold title-font`}
          >
            Feedback
          </h2>
          <p
            className={`${
              darkMode ? "text-white" : "text-black"
            }leading-relaxed mb-5 `}
          >
            We Need For Your Feedback
          </p>
          <div className="relative mb-4">
            <label
              htmlFor="name"
              className={`${
                darkMode ? "text-white" : "text-black"
              }  leading-7 text-sm `}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="userName"
              className={`${
                darkMode
                  ? "text-white bg-black border-myTheme"
                  : "text-black bg-white"
              } w-full   border border-gray-300 rounded focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className={`${
                darkMode ? "text-white" : "text-black"
              }  leading-7 text-sm `}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`${
                darkMode
                  ? "text-white bg-black border-myTheme"
                  : "text-black bg-white"
              } w-full rounded  border border-gray-300 focus:border-black   text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className={`${
                darkMode ? "text-white" : "text-black"
              } leading-7 text-sm `}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`${
                darkMode
                  ? "text-white bg-black border-myTheme"
                  : "text-black bg-white"
              } w-full rounded  border border-gray-300   h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
              defaultValue={""}
            />
          </div>
          <button className="text-white bg-black border-0 rounded py-2 px-6 focus:outline-none active:bg-myTheme  text-lg">
            Button
          </button>
          <p
            className={`text-xs ${
              darkMode ? "text-white" : "text-black"
            }  mt-3`}
          >
            The Knowldge is Light
          </p>
        </form>
      </div>
      {/* <div className="flex justify-center items-start my-3">
        <Link
          className="bg-myTheme active:bg-red-700 py-3 px-8 rounded text-white"
          to={"/"}
        >
          Go To Home
        </Link>
      </div> */}
    </section>
  );
}

export default Contact;
