import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Login() {
  const dataInputs = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const password = formData.get("password");
    const email = formData.get("email");
    console.log("Password :", password, "Email:", email);
  };
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <section className={`${darkMode ? "pageDark" : ""} bg-gray-50 `}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-3xl font-semibold text-black  dark:text-white">
          {/* <img
        className="w-8 h-8 mr-2"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
        alt="logo"
      /> */}
        </div>
        <div
          className={` ${
            darkMode ? "pageDark" : ""
          } w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700`}
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              className={`${
                darkMode ? "text-white" : " text-black "
              } flex justify-center text-xl font-bold leading-tight rounded tracking-tight md:text-2xl dark:text-white`}
            >
              Login in to your Account
            </h1>
            <form
              onSubmit={dataInputs}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className={`${
                    darkMode ? "text-white" : " text-black "
                  } block mb-2 text-sm font-medium  dark:text-white`}
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={` bg-gray-50 border border-gray-300 text-black rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="name@gmail.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className={`${
                    darkMode ? "text-white" : " text-black "
                  } block mb-2 text-sm font-medium text-black dark:text-white`}
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-black rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-black dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className={`${darkMode ? "text-white" : " text-black "}`}
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  href="#"
                  className={`${
                    darkMode ? "text-white" : " text-black "
                  } text-sm hover:text-myTheme font-medium text-primary-600 hover:underline dark:text-primary-500`}
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-black active:bg-myTheme  font-medium rounded text-sm px-5 py-2.5 text-center "
              >
                Login
              </button>
              <p
                className={`${
                  darkMode ? "text-white" : " text-black "
                } text-sm font-light text-black dark:text-gray-400`}
              >
                Don’t have an account yet?{" "}
                <Link
                  to="/SiginUp"
                  className={`${
                    darkMode ? "text-white" : " text-black "
                  } font-medium  hover:text-myTheme text-primary-600 hover:underline `}
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
