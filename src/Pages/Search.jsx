import axios from "axios";
import React from "react";
import useSWR from "swr";
import { useSearchParams } from "react-router-dom";
import { AddToCard } from "../components/AddToCard";
import { useSelector } from "react-redux";
import loadingImg from "../assets/loading/loading.gif";

function Search() {
  let [searchParams] = useSearchParams();
  const searchValue = searchParams.get("qurey");
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/search?q=${searchValue}`,
    axios
  );
  console.log(data?.data?.products);
  const searchData = data?.data?.products;
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    // <div className='h-[100vh]'>Search {searchParams.get("qurey") }{JSON.stringify(data)}</div>
    <div className={`${darkMode ? "pageDark" : ""}`}>
      {isLoading ? (
        <div
          className={`${
            darkMode ? "pageDark" : ""
          } font-extrabold text-3xl h-[100vh] flex justify-center items-center cursor-none`}
        >
          <img src={loadingImg} alt="Loading..." />
        </div>
      ) : null}
      <div
        className={`${
          darkMode ? "pageDark" : ""
        } mx-auto max-w-7xl sm:px-6 lg:px-8 `}
      ></div>
      <div
        className={`${
          darkMode ? "" : ""
        } flex justify-center items-center   my-14  flex-row`}
      >
        <div className=" flex sm:flex-col  w-[1170px]  flex-wrap mobile:flex-col lg:justify-center md:justify-center md:flex-row 2xl:flex-row xl:flex-row lg:flex-row lg:gap-4 gap-[30px]">
          {isLoading ? (
            <div className="font-extrabold text-4xl h-[100vh]">Loading...</div>
          ) : null}

          {error}
          {/* sir se question karna he */}
          {/* {searchProducts.length=== 0?'Product Is Not Found':null} */}
          {searchData?.map((value, index) => {
            let discountPrice = Math.ceil(
              value.price - value.discountPercentage * (value.price / 100)
            ).toFixed(2);
            // console.log(discountPrice);

            return (
              <div key={value.id}>
                {" "}
                <AddToCard
                  key={value.id}
                  id={value.id}
                  className="bg-myTheme"
                  discount={`${Math.round(value.discountPercentage)}%`}
                  productName={value.title}
                  delPrice={`$${value.price.toFixed(2)}`}
                  newPrice={`$${discountPrice}`}
                  image={value.thumbnail}
                  rating={value.rating}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
