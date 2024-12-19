import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SiginUp() {
  const dataInputs = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const password = formData.get("password");
    const email = formData.get("email");
    const userName = formData.get("userName");
    console.log(
      "Password :",
      password,
      "Email:",
      email,
      " User Name",
      userName
    );
  };
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <section className={`${darkMode ? "pageDark" : ""} bg-gray-50 `}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div
          className={`${
            darkMode ? "pageDark" : ""
          } w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700`}
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              className={`${
                darkMode ? "text-white" : " text-black "
              } text-xl flex justify-center font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white`}
            >
              Create an account
            </h1>
            <form
              onSubmit={dataInputs}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="User Name"
                  className={`${
                    darkMode ? "text-white" : " text-black "
                  } block mb-2 text-sm font-medium text-black dark:text-white`}
                >
                  User name
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded block w-full p-2.5  "
                  placeholder="sufiyan"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`${
                    darkMode ? "text-white" : " text-black "
                  } block mb-2 text-sm font-medium text-black dark:text-white`}
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded block w-full p-2.5  "
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
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded  block w-full p-2.5"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className={`${
                    darkMode ? "text-white" : " text-black "
                  } block mb-2 text-sm font-medium text-black dark:text-white`}
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-black text-sm    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 rounded"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-black active:bg-myTheme  font-medium rounded text-sm px-5 py-2.5 text-center "
              >
                Create an account
              </button>
              <p
                className={`${
                  darkMode ? "text-white" : " text-black "
                } text-sm font-light flex justify-center text-black dark:text-gray-400`}
              >
                Already have an account?{" "}
                <Link
                  to={"/Login"}
                  className="font-medium hover:text-myTheme text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SiginUp;
