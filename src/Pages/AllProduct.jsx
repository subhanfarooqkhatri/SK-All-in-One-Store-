import React, { useState } from "react";
import apper2 from "../assets/images/apper2.png";
import babycar from "../assets/images/babycar.png";
import dogfood from "../assets/images/dogfood.png";
import laptop from "../assets/images/laptop.png";
import game2 from "../assets/images/game2.png";
import shose from "../assets/images/shose.png";
import pars from "../assets/images/pars.png";
import camera from "../assets/images/camera.png";
import led from "../assets/images/led.png";
import spikerCard from "../assets/images/spikerCard.png";
import keyboard from "../assets/images/keyboard.png";
import chair from "../assets/images/chair.png";
import MyCountBox from "../components/MyCountBox";
import { AddToCard } from "../components/AddToCard";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import loadingImg from "../assets/loading/loading.gif";
import { useSelector } from "react-redux";

// let AddToCardlist = [
//   {
//     discount: "-40%",
//     className: "bg-myTheme",
//     productName: "HAVIT HV-G92 Gamepad",
//     delPrice: "$160",
//     newPrice: "$120",
//     starRank: "(88)",
//     image: dogfood,
//   },
//   {
//     discount: "-35%",
//     className: "bg-myTheme",
//     productName: "AK-900 Wired Keyboard",
//     delPrice: "$400",
//     newPrice: "$370",
//     starRank: "(99)",
//     image: babycar,
//   },
//   {
//     discount: "-30%",
//     className: "bg-myTheme",
//     productName: "IPS LCD Gaming Monitor",
//     delPrice: "$400",
//     newPrice: "$350",
//     starRank: "(77)",
//     image: apper2,
//   },
//   {
//     discount: "-25%",
//     className: "bg-myTheme",
//     productName: "S-Series Comfort Chair",
//     delPrice: "$400",
//     newPrice: "$375",
//     starRank: "(99)",
//     image: shose,
//   },
// ];
// let AddToCardlist2 = [
//   {
//     discount: "-40%",
//     className: "bg-myTheme",
//     productName: "HAVIT HV-G92 Gamepad",
//     delPrice: "$160",
//     newPrice: "$120",
//     starRank: "(88)",
//     image: camera,
//   },
//   {
//     discount: "-35%",
//     className: "bg-myTheme",
//     productName: "AK-900 Wired Keyboard",
//     delPrice: "$400",
//     newPrice: "$370",
//     starRank: "(99)",
//     image: laptop,
//   },
//   {
//     discount: "-30%",
//     className: "bg-myTheme",
//     productName: "IPS LCD Gaming Monitor",
//     delPrice: "$400",
//     newPrice: "$350",
//     starRank: "(77)",
//     image: game2,
//   },
//   {
//     discount: "-25%",
//     className: "bg-myTheme",
//     productName: "S-Series Comfort Chair",
//     delPrice: "$400",
//     newPrice: "$375",
//     starRank: "(99)",
//     image: chair,
//   },
// ];

// let AddToCardlist3 = [
//   {
//     discount: "-40%",
//     className: "bg-myTheme",
//     productName: "HAVIT HV-G92 Gamepad",
//     delPrice: "$160",
//     newPrice: "$120",
//     starRank: "(88)",
//     image: led,
//   },
//   {
//     discount: "-35%",
//     className: "bg-myTheme",
//     productName: "AK-900 Wired Keyboard",
//     delPrice: "$400",
//     newPrice: "$370",
//     starRank: "(99)",
//     image: keyboard,
//   },
//   {
//     discount: "-30%",
//     className: "bg-myTheme",
//     productName: "IPS LCD Gaming Monitor",
//     delPrice: "$400",
//     newPrice: "$350",
//     starRank: "(77)",
//     image: spikerCard,
//   },
//   {
//     discount: "-25%",
//     className: "bg-myTheme",
//     productName: "S-Series Comfort Chair",
//     delPrice: "$400",
//     newPrice: "$375",
//     starRank: "(99)",
//     image: pars,
//   },
// ];

function AllProduct() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const { products, error, isLoading } = useProducts("limit=84&skip=77");
  //   const [products, setProducts] = useState(null);
  //   const [isLoading, setIsLoading] = useState(false)
  // const[error,SetError]=useState(null)
  //   const API_KEY = 'https://dummyjson.com/products?limit=40&skip=77';
  //   let getProductData = async (event) => {
  //     try {
  //       setIsLoading(true)

  //       let response = await axios(API_KEY);
  //     let data =response.data.products
  //     console.log(data);
  //     setIsLoading(false)

  //    return setProducts( data)
  //     } catch (error) {
  //       setIsLoading(false)
  //       SetError(error.response.statusText|| 'Unknown Error')
  //       console.log(error.response.statusText);

  //     }
  //     finally{

  //       setIsLoading(false)
  //      }
  //   };
  //   useEffect(()=>{
  //     getProductData();

  //   },[])
  // search value useState
  const [searchValue, setSearchValue] = useState("");
  console.log("searchValue", searchValue);
  //  filter Function
  const searchProducts = () => {
    let result = products?.filter((value) => {
      return value.title
        .toLowerCase()
        .includes(searchValue.toLocaleLowerCase());
    });
    // console.log(result);
    return result;
  };
  let searchReasult = searchProducts();
  return (
    <>
      {/* // <div>AllProduct</div> */}
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
        >
          <div
            className={`${
              darkMode ? "pageDark" : ""
            } relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16 sm:shadow-sm`}
          >
            <p
              className={`${
                darkMode ? "text-white" : ""
              } mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl`}
            >
              Search Products
            </p>
            <form onSubmit={() => {}}>
              <label
                className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded gap-2 shadow-2xl focus-within:border-gray-300"
                htmlFor="search-bar"
              >
                <input
                  id="search-bar"
                  placeholder="Search your Products"
                  name="q"
                  onChange={(event) => {
                    // console.log(event.target.value);
                    setSearchValue(event.target.value);
                  }}
                  className="px-6 py-2 w-full rounded flex-1 outline-none bg-white"
                  required=""
                />
                {/* <button onClick={()=>{
          searchProducts()
        }}
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded transition-all"
        >
          <div className="flex items-center transition-all opacity-1">
            <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
              Search
            </span>
          </div>
        </button> */}
              </label>
            </form>
          </div>
        </div>
        <div
          className={`${
            darkMode ? "" : ""
          } flex justify-center items-center   my-14  flex-row`}
        >
          <div className=" flex sm:flex-col  w-[1170px]  flex-wrap mobile:flex-col lg:justify-center md:justify-center md:flex-row 2xl:flex-row xl:flex-row lg:flex-row lg:gap-4 gap-[30px]">
            {isLoading ? (
              <div className="font-extrabold text-4xl h-[100vh]">
                Loading...
              </div>
            ) : null}

            {error}
            {/* sir se question karna he */}
            {/* {searchProducts.length=== 0?'Product Is Not Found':null} */}
            {searchReasult?.map((value, index) => {
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
        <div className="flex justify-center items-start my-3">
          {" "}
          <Link
            className="bg-myTheme active:bg-red-700 py-3 px-8 rounded text-white"
            to={"/"}
          >
            Go To Home
          </Link>
        </div>

        {/* <div className="flex justify-center items-center  my-14  flex-row">
        <div className="flex sm:flex-col flex-wrap mobile:flex-col lg:justify-center md:justify-center md:flex-row 2xl:flex-row xl:flex-row lg:flex-row lg:gap-4 gap-[30px]">
          {AddToCardlist2.map((value, index) => {
            return (
              <>
                {" "}
                <AddToCard
                className={value.className}
                  discount={value.discount}
                  productName={value.productName}
                  delPrice={value.delPrice}
                  newPrice={value.newPrice}
                  image={value.image}
                />
              </>
            );
          })}
        </div>
      </div> */}
        {/* <div className="flex justify-center items-center my-3">
        <div className="">
          <Link  to={"/AllCards"} className="bg-myTheme rounded cursor-pointer active:bg-red-700 text-white w-[234px] h-[56px] flex justify-center items-center">Show More</Link>
        </div>
      </div> */}
        {/* <div className="flex justify-center items-center  my-14  flex-row">
        <div className="flex sm:flex-col flex-wrap mobile:flex-col lg:justify-center md:justify-center md:flex-row 2xl:flex-row xl:flex-row lg:flex-row lg:gap-4 gap-[30px]">
          {AddToCardlist3.map((value, index) => {
            return (
              <>
                {" "}
                <AddToCard
                  className={value.className}
                  discount={value.discount}
                  productName={value.productName}
                  delPrice={value.delPrice}
                  newPrice={value.newPrice}
                  image={value.image}
                />
              </>
            );
          })}
        </div>
      </div> */}
      </div>
    </>
  );
}

export default AllProduct;
